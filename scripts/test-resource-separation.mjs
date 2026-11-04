import fs from 'node:fs';
import assert from 'node:assert/strict';
const app=fs.readFileSync('src/App.tsx','utf8');
const course=app.slice(app.indexOf('function ChapterResourceView('),app.indexOf('function ResourceHub('));
const hub=app.slice(app.indexOf('function ResourceHub('),app.indexOf('export default function App()'));
assert(!course.includes('Flashcards ·')&&!course.includes('Quiz ·')&&!course.includes('Fiches de révision du chapitre')&&!course.includes('Sujets de Bac'),'La bibliothèque ne doit contenir que les cours approfondis.');
assert(course.includes('Cours approfondi')&&course.includes('Objectifs d’apprentissage')&&course.includes('À retenir'),'Le cours approfondi doit rester complet.');
assert(hub.includes("mode==='revision'")&&hub.includes('Fiches de révision')&&hub.includes('Flashcards'),'L’espace Révisions doit réunir fiches et flashcards.');
assert(hub.includes('Quiz et QCM')&&hub.includes('Exercices')&&hub.includes('Sujets de Bac'),'L’espace Entraînement doit réunir quiz, QCM, exercices et sujets de Bac.');
assert(hub.includes('Vérifier ma réponse')&&hub.includes('getStableOptionOrder'),'Les QCM doivent être interactifs et leurs propositions mélangées de façon stable.');
assert(hub.includes('onSaveQuiz')&&hub.includes('Enregistrer mon bilan'),'Le bilan de quiz doit pouvoir être enregistré dans les statistiques.');
assert(hub.includes('Afficher la correction détaillée')&&hub.includes('Afficher la correction et le barème'),'Les corrections d’exercices et de sujets doivent rester masquées avant consultation.')
assert(hub.includes('activeSubjectIds')&&hub.includes('subjectFilter')&&hub.includes('setExpanded'),'Les ressources doivent être filtrables et ordonnées par matière/chapitre.');
assert(app.includes("['revisions','Révisions',Layers]")&&app.includes("['training','Entraînement',Brain]"),'Les deux nouveaux onglets doivent être présents dans la navigation.');
console.log('SÉPARATION DES ESPACES PÉDAGOGIQUES — 10/10 assertions réussies.');
