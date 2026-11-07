import type { ChapterResourceV4 } from './contentTypes';

type ResourceModule = { resources: Record<string, ChapterResourceV4> };
const resourceLoaders: Record<string, () => Promise<ResourceModule>> = {
  'philo': () => import('./resources/philo'),
  'histoire-geo': () => import('./resources/histoire-geo'),
  'emc': () => import('./resources/emc'),
  'ens-scientifique': () => import('./resources/ens-scientifique'),
  'eps': () => import('./resources/eps'),
  'anglais': () => import('./resources/anglais'),
  'espagnol': () => import('./resources/espagnol'),
  'allemand': () => import('./resources/allemand'),
  'hggsp-spe': () => import('./resources/hggsp-spe'),
  'maths-spe': () => import('./resources/maths-spe'),
  'pc-spe': () => import('./resources/pc-spe'),
  'svt-spe': () => import('./resources/svt-spe'),
  'ses-spe': () => import('./resources/ses-spe'),
  'maths-exp': () => import('./resources/maths-exp'),
  'maths-comp': () => import('./resources/maths-comp'),
};

/**
 * Charge uniquement les ressources des matières actives.
 * Vite produit un chunk indépendant par matière ; les modules importés sont ensuite
 * conservés dans le cache natif du navigateur.
 */
export async function loadChapterResources(subjectIds: string[]): Promise<Record<string, ChapterResourceV4>> {
  const ids = [...new Set(subjectIds)].filter((id) => Boolean(resourceLoaders[id]));
  const modules = await Promise.all(ids.map((id) => resourceLoaders[id]()));
  return Object.assign({}, ...modules.map((module) => module.resources));
}
