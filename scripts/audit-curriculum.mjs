import fs from 'node:fs';
import path from 'node:path';

const curriculumText = fs.readFileSync('src/curriculum.ts', 'utf8');
const resourcesText = fs.readFileSync('src/chapterResources.ts', 'utf8');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

function extractArray(block, field) {
  const match = new RegExp(`${field}\\s*:\\s*\\[`).exec(block);
  if (!match) return '';
  const open = match.index + match[0].lastIndexOf('[');
  let depth = 0, quote = null, escaped = false;
  for (let i = open; i < block.length; i++) {
    const ch = block[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') quote = ch;
    else if (ch === '[') depth++;
    else if (ch === ']' && --depth === 0) return block.slice(open + 1, i);
  }
  return '';
}
function countObjects(section, marker) {
  return [...section.matchAll(new RegExp(`\\{\\s*${marker}\\s*:`, 'g'))].length;
}
function getStringField(block, field) {
  return block.match(new RegExp(`${field}\\s*:\\s*['\"]([^'\"]*)['\"]`))?.[1] ?? '';
}

const subjects = [];
const subjectPattern = /id:\s*'([^']+)',\s*title:\s*'([^']+)'[\s\S]*?chapters:\s*\[([\s\S]*?)\]\s*\n\s*\}/g;
for (const match of curriculumText.matchAll(subjectPattern)) {
  const [, id, title, chaptersBlock] = match;
  const chapters = [...chaptersBlock.matchAll(/c\('([^']+)'\s*,\s*'([^']+)'/g)].map((x) => ({ id: x[1], title: x[2] }));
  subjects.push({ id, title, chapters });
}
const resourceBlocks = [...resourcesText.matchAll(/^  '([^']+)': \{([\s\S]*?)(?=^  '[^']+': \{|^\};)/gm)];
const resourceMap = new Map(resourceBlocks.map(([, id, block]) => [id, block]));
const rows = [];
for (const subject of subjects) {
  const chapters = subject.chapters.map((chapter) => {
    const block = resourceMap.get(chapter.id);
    if (!block) return { ...chapter, curriculumStatus: chapter.status, resource: false, courseSections: 0, objectives: 0, flashcards: 0, quiz: 0, exercises: 0, sources: 0, resourceStatus: 'missing' };
    const course = extractArray(block, 'course');
    const objectives = extractArray(block, 'objectives');
    const cards = extractArray(block, 'flashcards');
    const quiz = extractArray(block, 'quiz');
    const exercises = extractArray(block, 'exercises');
    const sources = extractArray(block, 'sources');
    const counts = {
      courseSections: countObjects(course, 'heading'),
      objectives: (objectives.match(/['"]/g) ?? []).length / 2,
      flashcards: countObjects(cards, 'front'),
      quiz: countObjects(quiz, 'level'),
      exercises: countObjects(exercises, 'title'),
      sources: countObjects(sources, 'title'),
    };
    const issues = [];
    if (counts.courseSections < 3) issues.push('cours inférieur à 3 sections');
    if (counts.objectives < 2) issues.push('moins de 2 objectifs');
    if (counts.flashcards < 10) issues.push('moins de 10 flashcards');
    if (counts.quiz < 6) issues.push('moins de 6 quiz');
    if (counts.exercises < 4) issues.push('moins de 4 exercices');
    if (counts.sources < 1) issues.push('source institutionnelle absente');
    return { ...chapter, curriculumStatus: chapter.status, resource: true, ...counts, sourceNote: Boolean(getStringField(block, 'sourceNote')), validationStatus: getStringField(block, 'validationStatus') || 'non renseigné', resourceStatus: issues.length ? 'to_review' : 'structured', issues };
  });
  rows.push({ id: subject.id, title: subject.title, chapters: chapters.length, resources: chapters.filter(x => x.resource).length, structured: chapters.filter(x => x.resourceStatus === 'structured').length, toReview: chapters.filter(x => x.resourceStatus === 'to_review').length, missing: chapters.filter(x => x.resourceStatus === 'missing').length, curriculumToVerify: chapters.filter(x => x.curriculumStatus === 'a-verifier').length, details: chapters });
}
const all = rows.flatMap(x => x.details);
const report = {
  version: pkg.version,
  schoolYear: '2026-2027',
  generatedAt: new Date().toISOString(),
  summary: {
    subjects: subjects.length,
    chapters: all.length,
    resources: all.filter(x => x.resource).length,
    missingResources: all.filter(x => !x.resource).length,
    structuredByMinimums: all.filter(x => x.resourceStatus === 'structured').length,
    chaptersToReview: all.filter(x => x.resourceStatus === 'to_review').length,\n    chaptersAwaitingCurriculumReview: all.filter(x => x.curriculumStatus === 'a-verifier').length,
    courseSections: all.reduce((n, x) => n + x.courseSections, 0),
    objectives: all.reduce((n, x) => n + x.objectives, 0),
    flashcards: all.reduce((n, x) => n + x.flashcards, 0),
    quizQuestions: all.reduce((n, x) => n + x.quiz, 0),
    exercises: all.reduce((n, x) => n + x.exercises, 0),
    chaptersWithoutInstitutionalSource: all.filter(x => x.resource && x.sources === 0).length,
  },
  subjects: rows.map(({ details, ...row }) => ({ ...row, chaptersDetail: details })),
  limitations: [
    'Cet audit vérifie la présence et le volume des structures, pas l’exactitude disciplinaire de chaque contenu.',
    'Les seuils sont des minima éditoriaux et ne constituent pas une validation officielle du programme.',
    'Les références institutionnelles doivent être relues par matière et actualisées si le Bulletin officiel évolue.',
    'Un chapitre structuré n’est pas automatiquement validé par un enseignant.'
  ]
};
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync(path.join('docs', `AUDIT_PROGRAMME_V${pkg.version}.json`), JSON.stringify(report, null, 2) + '\n');
const lines = [
  `# Audit du programme de Terminale — NOX HAVEN ${pkg.version}`,'',
  `Année de référence : **${report.schoolYear}**`,'',
  `- Matières au catalogue : ${report.summary.subjects}`,
  `- Chapitres et repères : ${report.summary.chapters}`,
  `- Ressources de chapitre présentes : ${report.summary.resources}`,
  `- Ressources absentes : ${report.summary.missingResources}`,
  `- Chapitres répondant aux minima structurels : ${report.summary.structuredByMinimums}`,
  `- Chapitres sous les minima structurels : ${report.summary.chaptersToReview}`,\n  `- Chapitres dont le programme reste à vérifier : ${report.summary.chaptersAwaitingCurriculumReview}`,
  `- Sections de cours : ${report.summary.courseSections}`,
  `- Objectifs : ${report.summary.objectives}`,
  `- Flashcards : ${report.summary.flashcards}`,
  `- Questions de quiz : ${report.summary.quizQuestions}`,
  `- Exercices : ${report.summary.exercises}`,
  `- Chapitres sans source institutionnelle repérée : ${report.summary.chaptersWithoutInstitutionalSource}`,'',
  '## Couverture par matière','',
  '| Matière | Chapitres | Ressources | Structure minimale | À revoir | Programme à vérifier |',
  '|---|---:|---:|---:|---:|---:|',
  ...rows.map(x => `| ${x.title} | ${x.chapters} | ${x.resources} | ${x.structured} | ${x.toReview} | ${x.curriculumToVerify} |`),'',
  '## Limites','', ...report.limitations.map(x => `- ${x}`),''
];
fs.writeFileSync(path.join('docs', `AUDIT_PROGRAMME_V${pkg.version}.md`), lines.join('\n'));
console.log(`AUDIT PROGRAMME ${pkg.version} — ${report.summary.resources}/${report.summary.chapters} ressources ; ${report.summary.structuredByMinimums} structures minimales ; ${report.summary.chaptersToReview} sous les minima ; ${report.summary.chaptersAwaitingCurriculumReview} statuts programme à vérifier.`);
for (const row of rows) console.log(`${row.title}: ${row.resources}/${row.chapters} ressources · ${row.structured} structures minimales · ${row.toReview} à revoir`);
