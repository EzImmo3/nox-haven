export type CurriculumChapter = { id: string; title: string; detail?: string; status: 'planifie' | 'a-verifier'; };
export type CurriculumSubject = {
  id: string; title: string; group: 'commun' | 'langue' | 'specialite' | 'option';
  description: string; reference: string; chapters: CurriculumChapter[];
};
const c = (id: string, title: string, detail?: string): CurriculumChapter => ({ id, title, detail, status: 'a-verifier' });

// Catalogue de structure pour l'année 2026-2027. Les entrées sont des repères de programme,
// pas des cours rédigés. Les sous-parties seront validées sur les textes officiels avant publication.
export const CURRICULUM_YEAR = '2026-2027';
export const CURRICULUM_SUBJECTS: CurriculumSubject[] = [
  {
    id: 'philo', title: 'Philosophie', group: 'commun', description: 'Notions, repères, auteurs, analyse de texte et dissertation. Épreuve écrite du bac 2027 : 4 heures.', reference: 'Programme de philosophie en terminale générale — BO spécial n° 8 du 25 juillet 2019. Épreuve du bac session 2027 : note de service du 11 septembre 2026.',
    chapters: [
      c('philo-art','L’art'),c('philo-bonheur','Le bonheur'),c('philo-conscience','La conscience'),c('philo-devoir','Le devoir'),c('philo-etat','L’État'),c('philo-inconscient','L’inconscient'),c('philo-justice','La justice'),c('philo-langage','Le langage'),c('philo-liberte','La liberté'),c('philo-nature','La nature'),c('philo-raison','La raison'),c('philo-religion','La religion'),c('philo-science','La science'),c('philo-technique','La technique'),c('philo-temps','Le temps'),c('philo-travail','Le travail'),c('philo-verite','La vérité'),
      c('philo-methodes','Méthodes : dissertation et explication de texte','Ressource transversale, à travailler avec les notions.'),
    ]
  },
  {
    id: 'histoire-geo', title: 'Histoire-Géographie', group: 'commun', description: 'Histoire et géographie du tronc commun de terminale.', reference: 'Programmes d’histoire et de géographie du cycle terminal — BO spécial n° 8 du 25 juillet 2019.',
    chapters: [
      c('hg-h1','Histoire — Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)'),
      c('hg-h2','Histoire — La multiplication des acteurs internationaux dans un monde bipolaire (1945-1970)'),
      c('hg-h3','Histoire — Les remises en cause économiques, politiques et sociales des années 1970 à 1991'),
      c('hg-h4','Histoire — Le monde, l’Europe et la France depuis les années 1990'),
      c('hg-g1','Géographie — Mers et océans au cœur de la mondialisation'),
      c('hg-g2','Géographie — Dynamiques territoriales, coopérations et tensions dans la mondialisation'),
      c('hg-g3','Géographie — L’Union européenne dans la mondialisation : des dynamiques complexes'),
      c('hg-g4','Géographie — La France et ses régions dans l’Union européenne et dans la mondialisation'),
      c('hg-methodes','Méthodes : composition, étude critique de documents et croquis'),
    ]
  },
  {
    id: 'emc', title: 'Enseignement moral et civique', group: 'commun', description: 'Démocratie, citoyenneté, droits et engagement.', reference: 'Programme EMC publié au BO n° 24 du 13 juin 2024, applicable à tous les niveaux à la rentrée 2026-2027.',
    chapters: [c('emc-theme','La vie démocratique : débat, délibération et prise de décision'),c('emc-espaces','Les principes et les espaces du débat démocratique'),c('emc-institutions','La délibération dans les institutions'),c('emc-information','La place des discours scientifiques et leur réception dans l’opinion : l’exemple du changement climatique'),c('emc-medias','Sondages, fiabilité des sources et débats sur les réseaux sociaux')] 
  },
  {
    id: 'ens-scientifique', title: 'Enseignement scientifique', group: 'commun', description: 'Sciences, climat, énergie et histoire du vivant.', reference: 'Programme d’enseignement scientifique de terminale générale modifié par l’arrêté du 30 mai 2023 — BO n° 25 du 22 juin 2023, applicable depuis la rentrée 2024.',
    chapters: [c('es-climat','Science, climat et société'),c('es-energie','Le futur des énergies'),c('es-vivant','Une histoire du vivant'),c('es-demarche','Démarche scientifique, données et esprit critique','Compétences transversales mobilisées dans les trois thèmes officiels ; ce n’est pas un quatrième thème du programme.')]
  },
  {
    id: 'eps', title: 'Éducation physique et sportive', group: 'commun', description: 'Compétences motrices, méthodologiques et sociales travaillées dans les activités choisies par le lycée.', reference: 'Programme d’EPS du lycée général et technologique. Les activités et attendus précis dépendent de la programmation de l’établissement.',
    chapters: [c('eps-moteur','Développer sa motricité et apprendre à s’exprimer avec son corps'),c('eps-entrainement','S’entraîner individuellement et collectivement'),c('eps-sante','Préserver sa santé par une activité physique régulière'),c('eps-responsabilite','Assumer des rôles et responsabilités'),c('eps-culture','Accéder au patrimoine culturel des activités physiques et sportives')]
  },
  {
    id: 'anglais', title: 'Anglais — LVA', group: 'langue', description: 'Compréhension, expression, interaction et médiation au niveau attendu en fin de cycle terminal.', reference: 'Programmes de langues vivantes étrangères publiés au BO n° 22 du 29 mai 2025, applicables au lycée à partir de 2026-2027.',
    chapters: [c('en-reception','Compréhension de l’oral et de l’écrit'),c('en-production','Expression orale en continu et expression écrite'),c('en-interaction','Interaction et médiation'),c('en-axes','Axes culturels du cycle terminal','Les axes et objets d’étude seront détaillés à partir du programme officiel et des supports étudiés en classe.'),c('en-methodes','Méthodes : synthèse, compte rendu, argumentation et prise de parole')]
  },
  {
    id: 'espagnol', title: 'Espagnol — LVB', group: 'langue', description: 'Compréhension, expression, interaction et médiation au niveau attendu en fin de cycle terminal.', reference: 'Programmes de langues vivantes étrangères publiés au BO n° 22 du 29 mai 2025, applicables au lycée à partir de 2026-2027.',
    chapters: [c('espa-reception','Compréhension de l’oral et de l’écrit'),c('espa-production','Expression orale en continu et expression écrite'),c('espa-interaction','Interaction et médiation'),c('espa-axes','Axes culturels du cycle terminal','Les axes et objets d’étude seront détaillés à partir du programme officiel et des supports étudiés en classe.'),c('espa-methodes','Méthodes : synthèse, compte rendu, argumentation et prise de parole')]
  },
  {
    id: 'allemand', title: 'Allemand — LVB', group: 'langue', description: 'Compréhension, expression, interaction et médiation au niveau attendu en fin de cycle terminal.', reference: 'Programmes de langues vivantes étrangères publiés au BO n° 22 du 29 mai 2025, applicables au lycée à partir de 2026-2027.',
    chapters: [c('de-reception','Compréhension de l’oral et de l’écrit'),c('de-production','Expression orale en continu et expression écrite'),c('de-interaction','Interaction et médiation'),c('de-axes','Axes culturels du cycle terminal','Les axes et objets d’étude seront détaillés à partir du programme officiel et des supports étudiés en classe.'),c('de-methodes','Méthodes : synthèse, compte rendu, argumentation et prise de parole')]
  },
  {
    id: 'hggsp-spe', title: 'HGGSP', group: 'specialite', description: 'Histoire, géographie, géopolitique et sciences politiques. Pour la session 2027, les thèmes 2, 4, 5 et 6 sont évaluables selon la rotation annuelle.', reference: 'Programme de terminale HGGSP — BO spécial n° 8 du 25 juillet 2019. Épreuve session 2027 : note de service du 11 septembre 2026.',
    chapters: [c('hggsp-t1','Thème 1 — De nouveaux espaces de conquête','Le thème reste au programme, mais ne figure pas parmi les thèmes évaluables de la session 2027.'),c('hggsp-t2','Thème 2 — Faire la guerre, faire la paix : formes de conflits et modes de résolution','Thème évaluable à la session 2027.'),c('hggsp-t3','Thème 3 — Histoire et mémoires','Le thème reste au programme, mais ne figure pas parmi les thèmes évaluables de la session 2027.'),c('hggsp-t4','Thème 4 — Identifier, protéger et valoriser le patrimoine : enjeux géopolitiques','Thème évaluable à la session 2027.'),c('hggsp-t5','Thème 5 — L’environnement, entre exploitation et protection : un enjeu planétaire','Thème évaluable à la session 2027.'),c('hggsp-t6','Thème 6 — L’enjeu de la connaissance','Thème évaluable à la session 2027.'),c('hggsp-methodes','Méthodes : dissertation, étude critique de document et oral')]
  },
  {
    id: 'maths-spe', title: 'Mathématiques — Spécialité', group: 'specialite', description: 'Analyse, algèbre et géométrie, probabilités, algorithmique.', reference: 'Programme en vigueur en terminale pour 2026-2027 : BO spécial n° 8 du 25 juillet 2019. Le programme publié au BO du 2 avril 2026 ne s’applique qu’à partir de 2027-2028.',
    chapters: [c('maths-suites','Suites'),c('maths-limites','Limites de fonctions'),c('maths-derivee','Compléments sur la dérivation'),c('maths-continuite','Continuité des fonctions d’une variable réelle'),c('maths-log','Fonction logarithme'),c('maths-primitives','Primitives et équations différentielles'),c('maths-integrales','Calcul intégral'),c('maths-espace','Manipulation des vecteurs, droites et plans de l’espace'),c('maths-orthogonalite','Orthogonalité et distances dans l’espace'),c('maths-parametrique','Représentations paramétriques et équations cartésiennes'),c('maths-bernoulli','Succession d’épreuves indépendantes et schéma de Bernoulli'),c('maths-binomial','Loi binomiale'),c('maths-concentration','Sommes de variables aléatoires et concentration'),c('maths-algo','Algorithmique et programmation')]
  },
  {
    id: 'pc-spe', title: 'Physique-chimie', group: 'specialite', description: 'Constitution et transformations de la matière, mouvement, énergie, ondes et signaux. Bac 2027 : épreuve écrite de 3 h 30 et épreuve pratique d’une heure, pondérées à 80 % et 20 %.', reference: 'Programme de terminale spécialité physique-chimie — BO spécial n° 8 du 25 juillet 2019. Épreuve du bac session 2027 : note de service du 11 septembre 2026.',
    chapters: [c('pc-composition','Déterminer la composition d’un système par des méthodes physiques et chimiques'),c('pc-evolution','Modéliser l’évolution temporelle d’un système, siège d’une transformation'),c('pc-etat-final','Prévoir l’état final d’un système, siège d’une transformation chimique'),c('pc-synthese','Élaborer des stratégies en synthèse organique'),c('pc-mouvement','Décrire un mouvement'),c('pc-forces','Relier les actions appliquées à un système à son mouvement'),c('pc-fluides','Modéliser l’écoulement d’un fluide'),c('pc-energie','Décrire les phénomènes énergétiques'),c('pc-ondes','Caractériser les phénomènes ondulatoires'),c('pc-lumiere','Former des images et étudier la lumière'),c('pc-electricite','Étudier les circuits électriques et les signaux')]
  },
  {
    id: 'svt-spe', title: 'Sciences de la vie et de la Terre', group: 'specialite', description: 'Génétique, évolution, géosciences, écosystèmes et santé. Bac 2027 : partie écrite sur 15 points et évaluation pratique sur 5 points.', reference: 'Programme de terminale spécialité SVT — BO spécial n° 8 du 25 juillet 2019. Épreuve du bac session 2027 : note de service du 11 septembre 2026.',
    chapters: [c('svt-genetique','Génétique et évolution'),c('svt-temps','À la recherche du passé géologique de notre planète'),c('svt-plantes','De la plante sauvage à la plante domestiquée'),c('svt-climat','Les climats de la Terre : comprendre le passé pour agir aujourd’hui et demain'),c('svt-comportement','Comportements, mouvement et système nerveux'),c('svt-muscle','Produire le mouvement : contraction musculaire et apport d’énergie'),c('svt-stress','Comportements et stress : vers une vision intégrée de l’organisme'),c('svt-methodes','Méthodes : démarche scientifique, exploitation de données et schémas')]
  },
  {
    id: 'ses-spe', title: 'Sciences économiques et sociales', group: 'specialite', description: 'Science économique, sociologie, science politique et regards croisés.', reference: 'Programme de terminale SES — BO spécial n° 8 du 25 juillet 2019. Épreuve du bac session 2027 : note de service du 11 septembre 2026.',
    chapters: [c('ses-croissance','Quelles sont les sources et les défis de la croissance économique ?'),c('ses-commerce','Quels sont les fondements du commerce international et de l’internationalisation de la production ?'),c('ses-chomage','Comment lutter contre le chômage ?'),c('ses-finance','Comment expliquer les crises financières et réguler le système financier ?'),c('ses-europe','Quelles politiques économiques dans le cadre européen ?'),c('ses-structure','Quelle est la structure de la société française actuelle ?'),c('ses-ecole','Quelle est l’action de l’École sur les destins individuels et l’évolution de la société ?'),c('ses-mobilite','Quelles sont les caractéristiques et les facteurs de la mobilité sociale ?'),c('ses-travail','Quelles mutations du travail et de l’emploi ?'),c('ses-engagement','Comment expliquer l’engagement politique dans les sociétés démocratiques ?'),c('ses-justice','Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?'),c('ses-environnement','Quelle action publique pour l’environnement ?'),c('ses-methodes','Méthodes : raisonnement, dissertation, épreuve composée et exploitation de documents')]
  },
  {
    id: 'maths-exp', title: 'Mathématiques expertes', group: 'option', description: 'Approfondissements en algèbre, nombres complexes, arithmétique et graphes.', reference: 'Programme de mathématiques expertes en vigueur pour 2026-2027 — BO spécial n° 8 du 25 juillet 2019.',
    chapters: [c('mexp-complexes','Nombres complexes'),c('mexp-arithmetique','Arithmétique'),c('mexp-graphes','Graphes et matrices'),c('mexp-algo','Algorithmique et programmation')]
  },
  {
    id: 'maths-comp', title: 'Mathématiques complémentaires', group: 'option', description: 'Outils mathématiques mobilisés dans d’autres disciplines et situations appliquées.', reference: 'Programme de mathématiques complémentaires en vigueur pour 2026-2027 — BO spécial n° 8 du 25 juillet 2019.',
    chapters: [c('mcomp-modeles','Modèles définis par des fonctions'),c('mcomp-suites','Suites numériques'),c('mcomp-exponentielle','Fonction exponentielle et logarithme'),c('mcomp-integration','Calcul intégral et primitives'),c('mcomp-proba','Probabilités et variables aléatoires'),c('mcomp-stat','Statistiques et échantillonnage'),c('mcomp-algo','Algorithmique et programmation')]
  },
];

export const curriculumGroupLabel: Record<CurriculumSubject['group'], string> = {
  commun: 'Enseignements communs', langue: 'Langues vivantes', specialite: 'Spécialités', option: 'Options'
};
