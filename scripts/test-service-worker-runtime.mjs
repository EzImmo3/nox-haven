import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync('public/sw.js', 'utf8');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const origin = 'https://studyflow.example';
const scope = `${origin}/StudyFlow/`;
const cacheStore = new Map();
const listeners = new Map();
const calls = { skipWaiting: 0, claim: 0, network: 0 };
let networkFails = false;

const makeCache = (name) => {
  if (!cacheStore.has(name)) cacheStore.set(name, new Map());
  const entries = cacheStore.get(name);
  return {
    async addAll(urls) { for (const url of urls) entries.set(url, new Response(`cached:${url}`, { status: 200 })); },
    async put(key, response) { entries.set(typeof key === 'string' ? key : key.url, response); },
    async match(key) { return entries.get(typeof key === 'string' ? key : key.url) ?? null; },
  };
};
const caches = {
  async open(name) { return makeCache(name); },
  async keys() { return [...cacheStore.keys()]; },
  async delete(name) { return cacheStore.delete(name); },
  async match(key) { for (const entries of cacheStore.values()) { const found = entries.get(typeof key === 'string' ? key : key.url); if (found) return found; } return null; },
};
const self = {
  registration: { scope },
  location: { origin },
  clients: { async claim() { calls.claim++; } },
  async skipWaiting() { calls.skipWaiting++; },
  addEventListener(name, callback) { listeners.set(name, callback); },
};
const networkFetch = async (request) => {
  calls.network++;
  if (networkFails) throw new Error('offline');
  return new Response(`network:${request.url}`, { status: 200 });
};
vm.runInNewContext(source, { self, caches, fetch: networkFetch, URL, Response, Promise });

async function dispatch(name, payload) {
  const callback = listeners.get(name);
  assert.ok(callback, `listener ${name} enregistré`);
  let pending = Promise.resolve();
  let responsePromise = null;
  callback({ ...payload, waitUntil(promise) { pending = Promise.resolve(promise); }, respondWith(promise) { responsePromise = Promise.resolve(promise); } });
  await pending;
  return responsePromise ? await responsePromise : null;
}

// Une ancienne version doit être supprimée à l'activation.
cacheStore.set('studyflow-shell-v4.9.0-1', new Map());
await dispatch('install', {});
const currentCache = `noxhaven-shell-v${pkg.version}-1`;
assert.ok(cacheStore.has(currentCache), 'le cache courant est créé');
assert.equal(calls.skipWaiting, 1, 'skipWaiting est appelé après le précache');
const precache = cacheStore.get(currentCache);
assert.ok(precache.has(scope) && precache.has(`${scope}index.html`) && precache.has(`${scope}manifest.webmanifest`), 'les trois entrées essentielles sont précachées');
await dispatch('activate', {});
assert.ok(!cacheStore.has('studyflow-shell-v4.9.0-1'), 'les anciens caches StudyFlow sont supprimés');
assert.equal(calls.claim, 1, 'clients.claim est appelé');

const navRequest = { url: `${scope}une-route`, method: 'GET', mode: 'navigate' };
const onlineNavigation = await dispatch('fetch', { request: navRequest });
assert.match(await onlineNavigation.text(), /^network:/, 'la navigation utilise le réseau en ligne');
assert.ok(precache.has(`${scope}index.html`), 'la réponse réseau de navigation met à jour index.html');
networkFails = true;
const offlineNavigation = await dispatch('fetch', { request: navRequest });
assert.match(await offlineNavigation.text(), /^network:/, 'la navigation retrouve le document de repli hors ligne');

networkFails = false;
const assetRequest = new Request(`${scope}assets/app.js`, { method: 'GET' });
const assetResponse = await dispatch('fetch', { request: assetRequest });
assert.match(await assetResponse.text(), /^network:/, 'un asset local non précaché est chargé depuis le réseau');
assert.ok(precache.has(assetRequest.url), 'un asset local valide est mis en cache');
const beforeIgnored = calls.network;
await dispatch('fetch', { request: new Request(`${scope}api/save`, { method: 'POST' }) });
await dispatch('fetch', { request: new Request('https://other.example/file.js', { method: 'GET' }) });
assert.equal(calls.network, beforeIgnored, 'POST et requêtes externes ne sont pas interceptées');

console.log(`Tests runtime Service Worker ${pkg.version} : 11 assertions réussies (install, précache, activation, purge, navigation en ligne/hors ligne, cache runtime, exclusions).`);
