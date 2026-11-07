import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'es-climat': {
    title: "Science, climat et société",
    objectives: [
      "Décrire les composantes et les interactions du système climatique.",
      "Expliquer le rôle de l’effet de serre, du bilan radiatif et des rétroactions.",
      "Interpréter des données climatiques et distinguer observations, modèles et scénarios.",
      "Distinguer atténuation, adaptation, aléa et vulnérabilité."
    ],
    course: [
      {
        heading: "1. Le système climatique",
        body: [
          "Le système climatique associe l’atmosphère, l’hydrosphère, la cryosphère, la lithosphère et la biosphère. Ces composantes échangent de l’énergie et de la matière.",
          "Le climat se décrit par des statistiques météorologiques sur une longue durée. Une situation météorologique isolée ne suffit pas à caractériser une tendance climatique."
        ]
      },
      {
        heading: "2. Bilan radiatif et effet de serre",
        body: [
          "La Terre reçoit principalement de l’énergie du Soleil et émet un rayonnement infrarouge. Le bilan radiatif compare l’énergie reçue et l’énergie renvoyée vers l’espace.",
          "Les gaz à effet de serre absorbent et réémettent une partie du rayonnement infrarouge terrestre. L’augmentation anthropique des concentrations de certains gaz renforce l’effet de serre.",
          "L’albédo mesure la part du rayonnement incident réfléchie par une surface. Une diminution de l’albédo augmente généralement l’énergie solaire absorbée."
        ]
      },
      {
        heading: "3. Rétroactions et archives du climat",
        body: [
          "Une rétroaction positive amplifie une perturbation initiale ; une rétroaction négative l’atténue. La diminution de l’albédo lors de la fonte de la neige est un exemple de rétroaction positive.",
          "Les carottes de glace, les sédiments et les mesures instrumentales apportent des informations complémentaires sur les climats passés et présents. Les bulles d’air piégées dans la glace renseignent notamment sur la composition passée de l’atmosphère."
        ]
      },
      {
        heading: "4. Observer et modéliser",
        body: [
          "Les observations servent à décrire les évolutions du climat et à évaluer les modèles. Une anomalie de température est un écart à une moyenne de référence.",
          "Un modèle climatique est une représentation mathématique du système. Plusieurs modèles et scénarios sont utilisés pour explorer les incertitudes et les trajectoires possibles ; un scénario est conditionnel à des hypothèses, pas une prédiction certaine."
        ]
      },
      {
        heading: "5. Agir : atténuation et adaptation",
        body: [
          "L’atténuation vise à limiter les émissions de gaz à effet de serre et à renforcer les absorptions. L’adaptation vise à réduire les dommages liés aux effets climatiques actuels ou attendus.",
          "Le risque dépend de l’aléa, de l’exposition et de la vulnérabilité. Les politiques climatiques combinent généralement réduction des émissions et préparation aux conséquences."
        ]
      }
    
      ,{ heading: 'Du bilan radiatif aux scénarios climatiques', body: ['Le climat résulte d’interactions entre l’atmosphère, les océans, les continents, la glace et le vivant. Le bilan radiatif compare l’énergie reçue du Soleil et l’énergie infrarouge réémise par la Terre. Les gaz à effet de serre absorbent une partie du rayonnement infrarouge émis par la surface et contribuent ainsi à maintenir une température moyenne compatible avec la vie telle que nous la connaissons.', 'L’augmentation de la concentration de gaz à effet de serre d’origine humaine modifie le bilan énergétique. Les océans absorbent une grande partie de l’excès d’énergie, ce qui ralentit la hausse de la température de l’air mais entraîne aussi un réchauffement et une dilatation de l’eau. Les rétroactions, comme la diminution de l’albédo liée à la fonte des glaces, peuvent amplifier certaines évolutions.', 'Les modèles climatiques simulent le système à partir de lois physiques et de scénarios d’émissions. Ils ne prédisent pas chaque événement météorologique, mais explorent des trajectoires possibles à long terme. Il faut distinguer incertitude sur les détails régionaux, incertitude sur les émissions futures et robustesse des grandes tendances observées.'] }],
    keyPoints: [
      "Le climat s’étudie sur des séries longues, contrairement à la météo quotidienne.",
      "L’effet de serre naturel est indispensable à la température moyenne terrestre ; son renforcement anthropique provoque un déséquilibre énergétique.",
      "Les rétroactions peuvent amplifier ou atténuer une perturbation.",
      "Les modèles explorent des trajectoires conditionnelles à des scénarios.",
      "Atténuation et adaptation sont complémentaires."
    ],
    method: [
      "Lire le titre, les axes, les unités et la période d’un graphique avant de l’interpréter.",
      "Distinguer corrélation, mécanisme causal et hypothèse.",
      "Pour une comparaison, préciser la période et la référence utilisée.",
      "Dans une argumentation, relier chaque mesure à un objectif : réduire les causes ou limiter les conséquences."
    ],
    flashcards: [
      {
        front: "Qu’est-ce que le système climatique ?",
        back: "L’ensemble des composantes (atmosphère, hydrosphère, cryosphère, lithosphère et biosphère) et de leurs interactions."
      },
      {
        front: "Qu’est-ce que l’effet de serre naturel ?",
        back: "Un phénomène par lequel certains gaz atmosphériques absorbent et réémettent une partie du rayonnement infrarouge émis par la surface terrestre."
      },
      {
        front: "Cite trois gaz à effet de serre.",
        back: "La vapeur d’eau, le dioxyde de carbone (CO₂) et le méthane (CH₄)."
      },
      {
        front: "Quelle est la différence entre météo et climat ?",
        back: "La météo décrit l’état de l’atmosphère à court terme ; le climat caractérise des statistiques météorologiques sur une longue période."
      },
      {
        front: "Qu’est-ce qu’une rétroaction climatique ?",
        back: "Un mécanisme qui, en réponse à une perturbation initiale, amplifie ou atténue cette perturbation."
      },
      {
        front: "Donne un exemple de rétroaction positive.",
        back: "La fonte de la neige réduit l’albédo, augmente l’absorption solaire et favorise un réchauffement supplémentaire."
      },
      {
        front: "Qu’est-ce que l’albédo ?",
        back: "La fraction du rayonnement solaire incident réfléchie par une surface."
      },
      {
        front: "Pourquoi les océans jouent-ils un rôle majeur ?",
        back: "Ils stockent une grande quantité d’énergie et absorbent une partie du CO₂ émis par les activités humaines."
      },
      {
        front: "Qu’est-ce que le bilan radiatif terrestre ?",
        back: "La comparaison entre l’énergie radiative reçue par la Terre et l’énergie qu’elle renvoie vers l’espace."
      },
      {
        front: "Quel est le rôle du CO₂ dans le changement climatique actuel ?",
        back: "L’augmentation de sa concentration renforce l’effet de serre et provoque un forçage radiatif positif."
      },
      {
        front: "Quelle différence entre variabilité et changement climatique ?",
        back: "La variabilité correspond aux fluctuations naturelles ; le changement climatique désigne une évolution durable des statistiques du climat."
      },
      {
        front: "Qu’est-ce qu’un forçage radiatif ?",
        back: "Une perturbation du bilan énergétique terrestre, exprimée en W·m⁻²."
      },
      {
        front: "Pourquoi les carottes de glace sont-elles utiles ?",
        back: "Elles conservent des indices sur les climats passés, notamment des bulles d’air renseignant sur la composition de l’atmosphère."
      },
      {
        front: "Que mesure une anomalie de température ?",
        back: "L’écart entre une température observée et une moyenne de référence."
      },
      {
        front: "Qu’est-ce qu’un modèle climatique ?",
        back: "Une représentation mathématique du système climatique permettant d’étudier son évolution selon différents scénarios."
      },
      {
        front: "Pourquoi utilise-t-on plusieurs modèles ?",
        back: "Pour explorer les incertitudes liées aux modèles, aux données et aux scénarios d’émissions."
      },
      {
        front: "Qu’est-ce qu’un scénario d’émissions ?",
        back: "Une trajectoire possible des émissions futures de gaz à effet de serre fondée sur des hypothèses socio-économiques."
      },
      {
        front: "Qu’est-ce que l’atténuation ?",
        back: "Les actions visant à limiter les émissions de gaz à effet de serre ou à renforcer leur absorption."
      },
      {
        front: "Qu’est-ce que l’adaptation ?",
        back: "Les ajustements des sociétés et des écosystèmes aux effets actuels ou attendus du changement climatique."
      },
      {
        front: "Donne un exemple d’atténuation.",
        back: "Développer les transports collectifs et réduire la consommation d’énergies fossiles."
      },
      {
        front: "Donne un exemple d’adaptation.",
        back: "Adapter les bâtiments et l’aménagement urbain aux vagues de chaleur."
      },
      {
        front: "Pourquoi distinguer risques et aléas ?",
        back: "L’aléa est un phénomène potentiellement dommageable ; le risque dépend aussi de l’exposition et de la vulnérabilité."
      },
      {
        front: "Qu’est-ce que la vulnérabilité ?",
        back: "La propension d’une population ou d’un système à subir des dommages face à un aléa."
      },
      {
        front: "Qu’est-ce que l’empreinte carbone ?",
        back: "Une estimation des émissions de gaz à effet de serre associées à une activité, un produit ou une personne."
      },
      {
        front: "Pourquoi le niveau marin augmente-t-il ?",
        back: "Principalement à cause de la dilatation thermique de l’eau et de la fonte des glaces continentales."
      },
      {
        front: "Pourquoi la fonte de la banquise n’a-t-elle pas le même effet direct que celle des glaciers continentaux ?",
        back: "La banquise flotte déjà ; sa fonte ne fait presque pas monter directement le niveau marin, contrairement à l’apport d’eau des glaces continentales."
      },
      {
        front: "Que signifie neutralité carbone ?",
        back: "Un équilibre entre les émissions anthropiques résiduelles et les absorptions anthropiques de CO₂ sur un périmètre donné."
      },
      {
        front: "Pourquoi les observations sont-elles indispensables ?",
        back: "Elles permettent de décrire les évolutions réelles et d’évaluer les modèles climatiques."
      },
      {
        front: "Qu’est-ce que la décarbonation ?",
        back: "La réduction de la quantité de CO₂ émise par unité d’activité ou la transformation vers des activités moins émettrices."
      },
      {
        front: "Pourquoi les choix énergétiques sont-ils aussi des choix de société ?",
        back: "Ils engagent les coûts, les infrastructures, les ressources, les inégalités et les impacts environnementaux."
      }
    ],
    quiz: [
      {
        level: 'Facile',
        question: 'La météo décrit principalement…',
        choices: [
          'L’état de l’atmosphère à court terme',
          'Les moyennes climatiques sur un siècle',
          'La composition des roches',
          'Les mouvements des plaques'
        ],
        answer: 0,
        explanation: 'La météo concerne les conditions atmosphériques à court terme.'
      },
      {
        level: 'Facile',
        question: 'L’albédo d’une surface correspond…',
        choices: [
          'À sa capacité à réfléchir le rayonnement reçu',
          'À sa température moyenne annuelle',
          'À sa teneur en CO₂',
          'À sa capacité à stocker l’eau'
        ],
        answer: 0,
        explanation: 'L’albédo est la fraction du rayonnement incident réfléchie.'
      },
      {
        level: 'Facile',
        question: 'Une rétroaction positive…',
        choices: [
          'Amplifie la perturbation initiale',
          'Annule toujours la perturbation',
          'Est nécessairement bénéfique',
          'Ne concerne que les océans'
        ],
        answer: 0,
        explanation: 'Une rétroaction positive amplifie la perturbation initiale.'
      },
      {
        level: 'Facile',
        question: 'Quel gaz est un gaz à effet de serre ?',
        choices: [
          'Dioxyde de carbone',
          'Argon',
          'Azote moléculaire',
          'Néon'
        ],
        answer: 0,
        explanation: 'Le CO₂ absorbe une partie du rayonnement infrarouge terrestre.'
      },
      {
        level: 'Facile',
        question: 'Le climat est étudié à partir…',
        choices: [
          'De statistiques sur une longue période',
          'D’une observation isolée',
          'D’une prévision pour demain',
          'D’une seule mesure locale'
        ],
        answer: 0,
        explanation: 'Le climat repose sur des statistiques météorologiques de longue durée.'
      },
      {
        level: 'Facile',
        question: 'La fonte de la neige peut renforcer le réchauffement car…',
        choices: [
          'L’albédo diminue et l’absorption solaire augmente',
          'Le Soleil émet davantage d’énergie',
          'Le CO₂ disparaît',
          'Les océans cessent d’absorber la chaleur'
        ],
        answer: 0,
        explanation: 'Une surface plus sombre réfléchit moins et absorbe davantage d’énergie.'
      },
      {
        level: 'Intermédiaire',
        question: 'Les océans contribuent au système climatique car ils…',
        choices: [
          'Stockent de l’énergie et absorbent du CO₂',
          'Produisent tout le dioxygène atmosphérique',
          'Empêchent tout changement climatique',
          'Ne réagissent pas au réchauffement'
        ],
        answer: 0,
        explanation: 'Les océans ont une forte capacité thermique et absorbent une partie du CO₂.'
      },
      {
        level: 'Intermédiaire',
        question: 'Un forçage radiatif positif tend à…',
        choices: [
          'Augmenter l’énergie nette du système climatique',
          'Refroidir systématiquement la surface',
          'Supprimer les saisons',
          'Arrêter la circulation océanique'
        ],
        answer: 0,
        explanation: 'Un forçage positif crée un déséquilibre énergétique qui favorise le réchauffement.'
      },
      {
        level: 'Intermédiaire',
        question: 'Les bulles d’air des carottes de glace renseignent sur…',
        choices: [
          'La composition passée de l’atmosphère',
          'La vitesse du vent quotidien',
          'La salinité actuelle des océans',
          'Les séismes anciens'
        ],
        answer: 0,
        explanation: 'Les bulles piègent des échantillons d’atmosphère ancienne.'
      },
      {
        level: 'Intermédiaire',
        question: 'Un modèle climatique est…',
        choices: [
          'Une représentation mathématique du système climatique',
          'Une simple photographie satellite',
          'Une certitude sur la météo d’un jour précis',
          'Un thermomètre géant'
        ],
        answer: 0,
        explanation: 'Les modèles représentent les processus climatiques à l’aide d’équations.'
      },
      {
        level: 'Intermédiaire',
        question: 'L’atténuation vise à…',
        choices: [
          'Limiter les émissions ou accroître les absorptions',
          'Déplacer les populations après une catastrophe uniquement',
          'Prévoir la météo quotidienne',
          'Augmenter la consommation fossile'
        ],
        answer: 0,
        explanation: 'L’atténuation agit sur les causes du changement climatique.'
      },
      {
        level: 'Intermédiaire',
        question: 'L’adaptation vise à…',
        choices: [
          'Réduire la vulnérabilité aux effets climatiques',
          'Augmenter les émissions',
          'Supprimer les observations',
          'Remplacer les modèles par des opinions'
        ],
        answer: 0,
        explanation: 'L’adaptation prépare les sociétés et milieux aux conséquences du changement climatique.'
      },
      {
        level: 'Intermédiaire',
        question: 'Un aléa climatique est…',
        choices: [
          'Un phénomène potentiellement dommageable',
          'La quantité de CO₂ d’un pays',
          'Une mesure de l’albédo',
          'Une politique énergétique'
        ],
        answer: 0,
        explanation: 'L’aléa est le phénomène susceptible de causer des dommages.'
      },
      {
        level: 'Intermédiaire',
        question: 'La vulnérabilité désigne…',
        choices: [
          'La propension à subir des dommages',
          'La probabilité qu’un modèle soit exact',
          'La quantité de pluie annuelle',
          'Le niveau de la mer uniquement'
        ],
        answer: 0,
        explanation: 'La vulnérabilité dépend notamment de la sensibilité et des capacités d’adaptation.'
      },
      {
        level: 'Intermédiaire',
        question: 'Le niveau marin augmente notamment à cause…',
        choices: [
          'De la dilatation thermique et de la fonte des glaces continentales',
          'De la seule fonte de la banquise',
          'De la diminution du CO₂',
          'De l’augmentation de l’albédo des océans'
        ],
        answer: 0,
        explanation: 'L’eau se dilate en se réchauffant et les glaces continentales ajoutent de l’eau aux océans.'
      },
      {
        level: 'Intermédiaire',
        question: 'La neutralité carbone correspond…',
        choices: [
          'À l’équilibre entre émissions résiduelles et absorptions',
          'À l’absence totale de toute émission humaine',
          'À une baisse de température immédiate',
          'À l’arrêt de toute activité industrielle'
        ],
        answer: 0,
        explanation: 'La neutralité carbone est un équilibre sur un périmètre donné.'
      },
      {
        level: 'Intermédiaire',
        question: 'Pourquoi comparer plusieurs scénarios ?',
        choices: [
          'Parce que les trajectoires futures dépendent de choix et d’hypothèses',
          'Parce qu’un seul scénario décrit avec certitude l’avenir',
          'Pour éviter les observations',
          'Pour remplacer les données mesurées'
        ],
        answer: 0,
        explanation: 'Les scénarios explorent plusieurs trajectoires possibles.'
      },
      {
        level: 'Intermédiaire',
        question: 'Une anomalie de température est…',
        choices: [
          'Un écart à une moyenne de référence',
          'Une température forcément anormale ou erronée',
          'La température maximale d’une journée',
          'La moyenne de toutes les planètes'
        ],
        answer: 0,
        explanation: 'L’anomalie est définie relativement à une référence.'
      },
      {
        level: 'Intermédiaire',
        question: 'La banquise est…',
        choices: [
          'De la glace de mer flottante',
          'Un glacier posé sur un continent',
          'Une couche de roche gelée',
          'Une nappe d’eau douce souterraine'
        ],
        answer: 0,
        explanation: 'La banquise se forme par congélation de l’eau de mer et flotte.'
      },
      {
        level: 'Intermédiaire',
        question: 'Les observations climatiques servent notamment à…',
        choices: [
          'Évaluer les évolutions et confronter les modèles au réel',
          'Prouver qu’aucune incertitude n’existe',
          'Remplacer les mesures par des hypothèses',
          'Prédire exactement chaque événement local'
        ],
        answer: 0,
        explanation: 'Les observations documentent le climat et permettent d’évaluer les modèles.'
      }
    ],
    exercises: [
      {
        title: 'Interpréter un albédo',
        level: 'Facile',
        statement: 'Une surface reçoit 100 unités d’énergie solaire. Elle en réfléchit 30. Calculer son albédo.',
        correction: 'Albédo = énergie réfléchie / énergie incidente = 30/100 = 0,30, soit 30 %.',
        skills: ['Calcul de proportion']
      },
      {
        title: 'Distinguer météo et climat',
        level: 'Facile',
        statement: 'Une ville connaît une journée exceptionnellement froide. Peut-on conclure que le réchauffement climatique est terminé ? Justifier.',
        correction: 'Non. Une journée relève de la météo. Le climat s’évalue à partir de tendances et statistiques sur de longues périodes.',
        skills: ['Échelle temporelle']
      },
      {
        title: 'Identifier une rétroaction',
        level: 'Facile',
        statement: 'La neige fond, le sol sombre apparaît et absorbe davantage de rayonnement. Décrire la rétroaction.',
        correction: 'La fonte réduit l’albédo ; l’absorption augmente ; le réchauffement favorise davantage de fonte. C’est une rétroaction positive.',
        skills: ['Raisonnement causal']
      },
      {
        title: 'Atténuation ou adaptation',
        level: 'Intermédiaire',
        statement: 'Classer : isoler les bâtiments contre la chaleur ; remplacer une chaudière au charbon par une solution bas-carbone.',
        correction: 'L’isolation contre la chaleur est une adaptation ; le remplacement de la chaudière est une atténuation.',
        skills: ['Classer des politiques']
      },
      {
        title: 'Lire une anomalie',
        level: 'Intermédiaire',
        statement: 'La moyenne de référence est 14,0 °C et la moyenne observée 14,8 °C. Calculer l’anomalie.',
        correction: '14,8 − 14,0 = +0,8 °C. La température est supérieure de 0,8 °C à la référence.',
        skills: ['Calcul d’écart']
      },
      {
        title: 'Distinguer aléa et vulnérabilité',
        level: 'Intermédiaire',
        statement: 'Une forte pluie touche deux quartiers, dont l’un est mieux drainé. Expliquer pourquoi les dommages peuvent différer.',
        correction: 'L’aléa (forte pluie) peut être comparable, mais l’exposition et la vulnérabilité diffèrent. Le drainage réduit la vulnérabilité du quartier équipé.',
        skills: ['Analyse de risque']
      },
      {
        title: 'Évaluer un scénario',
        level: 'Intermédiaire',
        statement: 'Pourquoi un scénario climatique n’est-il pas une prédiction certaine ?',
        correction: 'Il repose sur des hypothèses concernant les émissions, les choix de société et les processus du système climatique. Il décrit une trajectoire conditionnelle.',
        skills: ['Esprit critique']
      },
      {
        title: 'Niveau marin',
        level: 'Difficile',
        statement: 'Citer les deux mécanismes majeurs contribuant à l’élévation du niveau marin global.',
        correction: 'La dilatation thermique de l’eau de mer et l’apport d’eau lié à la fonte des glaciers et calottes continentales.',
        skills: ['Mobiliser des connaissances']
      },
      {
        title: 'Construire une argumentation',
        level: 'Difficile',
        statement: 'Formuler deux mesures complémentaires face aux vagues de chaleur en ville, l’une d’atténuation et l’autre d’adaptation.',
        correction: 'Atténuation : réduire les émissions des transports et bâtiments. Adaptation : végétaliser, créer des zones d’ombre et adapter les horaires/lieux de travail.',
        skills: ['Argumentation']
      },
      {
        title: 'Évaluer une source',
        level: 'Difficile',
        statement: 'Un graphique viral montre une seule année froide pour affirmer que le climat ne se réchauffe pas. Donner deux limites de cet argument.',
        correction: 'Une seule année ne représente pas une tendance climatique ; il faut examiner une série longue, la référence choisie, la source des données et les incertitudes.',
        skills: ['Analyse critique']
      }
    ],
    revisionSheets: [
      {
        title: "L’essentiel — Science, climat et société",
        summary: [
          "Le climat résulte d’interactions entre plusieurs composantes du système Terre.",
          "Le bilan radiatif et l’effet de serre expliquent le rôle des échanges d’énergie.",
          "Les rétroactions modifient la réponse du système à une perturbation.",
          "Observations et modèles sont complémentaires.",
          "Atténuation et adaptation répondent à deux objectifs différents."
        ],
        mustKnow: [
          "Effet de serre",
          "Bilan radiatif",
          "Albédo",
          "Rétroaction positive et négative",
          "Forçage radiatif",
          "Atténuation et adaptation"
        ],
        methods: [
          "Interpréter une anomalie par rapport à sa référence.",
          "Construire une chaîne causale à partir d’un mécanisme.",
          "Distinguer aléa, exposition et vulnérabilité."
        ]
      }
    ],
    sources: [
      {
        title: "Programmes et ressources en enseignement scientifique — voie générale",
        institution: "Éduscol, ministère de l’Éducation nationale",
        url: "https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g",
        consultedAt: "2026-11-01",
        supports: [
          "Programme de Terminale en vigueur et ressources d’accompagnement"
        ]
      },
      {
        title: "Arrêté du 19 juillet 2019 fixant le programme d’enseignement scientifique de Terminale",
        institution: "Légifrance",
        url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038799908/",
        consultedAt: "2026-11-01",
        supports: [
          "Cadre réglementaire du programme de Terminale"
        ]
      }
    ],
    sourceNote: "Ressource de travail construite à partir du programme officiel d’enseignement scientifique de Terminale. Les données et exemples chiffrés supplémentaires doivent être accompagnés de leur source. Statut brouillon en attente de relecture disciplinaire.",
    validationStatus: "draft"
  },
  'es-energie': {
  title: "Le futur des énergies",
  objectives: [
    "Maîtriser les notions essentielles du thème « Le futur des énergies ».",
    "Relier les connaissances scientifiques à des exemples et à des données.",
    "Construire une explication argumentée et identifier les limites des modèles."
  ],
  course: [
    {
      heading: "1. Notions et cadre scientifique",
      body: [
        "Énergie primaire : Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
        "Énergie secondaire : Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
        "Puissance : Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
        "Rendement : Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Stock énergétique : Quantité d’énergie disponible dans une réserve à un instant donné."
      ]
    },
    {
      heading: "2. Modèles et mécanismes",
      body: [
        "Flux énergétique : Quantité d’énergie transférée par unité de temps.",
        "Alternateur : Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
        "Induction : Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Réseau électrique : Ensemble des installations qui transportent et distribuent l’électricité.",
        "Effet Joule : Échauffement d’un conducteur parcouru par un courant électrique."
      ]
    },
    {
      heading: "3. Données et interprétation",
      body: [
        "Intermittence : Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Pilotabilité : Capacité à ajuster la production d’une installation à la demande.",
        "Décarbonation : Réduction des émissions de dioxyde de carbone associées à une activité.",
        "Mix énergétique : Répartition des différentes sources d’énergie utilisées dans un territoire.",
        "Transition énergétique : Transformation des modes de production et de consommation de l’énergie."
      ]
    },
    {
      heading: "4. Enjeux et limites",
      body: [
        "Un modèle scientifique simplifie le réel : il faut connaître ses hypothèses et son domaine de validité.",
        "Les résultats dépendent de la qualité des mesures, de la représentativité des données et des conditions expérimentales."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, identifier la question et sélectionner les données pertinentes.",
        "Construire une chaîne logique reliant observations, connaissances et conclusion."
      ]
    }
  
      ,{ heading: 'Comparer les filières avec des critères explicites', body: ['L’énergie est une grandeur physique qui se conserve dans un système isolé, mais ses formes peuvent se transformer. Une filière énergétique comprend l’extraction ou la production de la ressource, la conversion, le transport, le stockage et l’usage final. Comparer seulement le rendement d’un dispositif ne suffit donc pas à évaluer l’ensemble d’une filière.', 'Les sources renouvelables se reconstituent à l’échelle humaine, mais leur disponibilité peut varier selon les saisons, la météo et les territoires. Les sources non renouvelables reposent sur des stocks limités à l’échelle humaine. Les systèmes électriques doivent équilibrer production et consommation à chaque instant, ce qui rend importants le réseau, le stockage, l’interconnexion et la gestion de la demande.', 'Une comparaison rigoureuse mobilise plusieurs critères : émissions sur le cycle de vie, disponibilité, pilotabilité, coûts, matériaux, emprise au sol, risques et acceptabilité. Aucun indicateur isolé ne permet de désigner une solution universelle. Les choix énergétiques dépendent des usages, des ressources locales et des objectifs de sécurité et de décarbonation.'] }],
  keyPoints: [
    "Énergie primaire : Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
    "Énergie secondaire : Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
    "Puissance : Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
    "Rendement : Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
    "Stock énergétique : Quantité d’énergie disponible dans une réserve à un instant donné.",
    "Flux énergétique : Quantité d’énergie transférée par unité de temps.",
    "Alternateur : Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
    "Induction : Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
    "Réseau électrique : Ensemble des installations qui transportent et distribuent l’électricité.",
    "Effet Joule : Échauffement d’un conducteur parcouru par un courant électrique.",
    "Intermittence : Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
    "Pilotabilité : Capacité à ajuster la production d’une installation à la demande.",
    "Décarbonation : Réduction des émissions de dioxyde de carbone associées à une activité.",
    "Mix énergétique : Répartition des différentes sources d’énergie utilisées dans un territoire.",
    "Transition énergétique : Transformation des modes de production et de consommation de l’énergie."
  ],
  method: [
    "Identifier la consigne et les grandeurs ou concepts étudiés.",
    "Décrire les données sans les interpréter prématurément.",
    "Mobiliser une connaissance scientifique précise.",
    "Construire un lien explicite entre données et interprétation.",
    "Formuler une conclusion proportionnée aux résultats et mentionner les limites."
  ],
  flashcards: [
    {
      front: "Comment définir « Énergie primaire » ?",
      back: "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Énergie secondaire » ?",
      back: "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Puissance » ?",
      back: "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Rendement » ?",
      back: "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Stock énergétique » ?",
      back: "Quantité d’énergie disponible dans une réserve à un instant donné.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Flux énergétique » ?",
      back: "Quantité d’énergie transférée par unité de temps.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Alternateur » ?",
      back: "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Induction » ?",
      back: "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Réseau électrique » ?",
      back: "Ensemble des installations qui transportent et distribuent l’électricité.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Effet Joule » ?",
      back: "Échauffement d’un conducteur parcouru par un courant électrique.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Intermittence » ?",
      back: "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Pilotabilité » ?",
      back: "Capacité à ajuster la production d’une installation à la demande.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Décarbonation » ?",
      back: "Réduction des émissions de dioxyde de carbone associées à une activité.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Mix énergétique » ?",
      back: "Répartition des différentes sources d’énergie utilisées dans un territoire.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Transition énergétique » ?",
      back: "Transformation des modes de production et de consommation de l’énergie.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de énergie primaire ?",
      back: "On l’utilise pour analyser énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de énergie secondaire ?",
      back: "On l’utilise pour analyser énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de puissance ?",
      back: "On l’utilise pour analyser énergie transférée ou convertie par unité de temps ; elle s’exprime en watt. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de rendement ?",
      back: "On l’utilise pour analyser rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de stock énergétique ?",
      back: "On l’utilise pour analyser quantité d’énergie disponible dans une réserve à un instant donné. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de flux énergétique ?",
      back: "On l’utilise pour analyser quantité d’énergie transférée par unité de temps. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de alternateur ?",
      back: "On l’utilise pour analyser dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de induction ?",
      back: "On l’utilise pour analyser phénomène de création d’une tension électrique liée à la variation du flux magnétique. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de réseau électrique ?",
      back: "On l’utilise pour analyser ensemble des installations qui transportent et distribuent l’électricité. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de effet joule ?",
      back: "On l’utilise pour analyser échauffement d’un conducteur parcouru par un courant électrique. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de intermittence ?",
      back: "On l’utilise pour analyser caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de pilotabilité ?",
      back: "On l’utilise pour analyser capacité à ajuster la production d’une installation à la demande. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de décarbonation ?",
      back: "On l’utilise pour analyser réduction des émissions de dioxyde de carbone associées à une activité. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de mix énergétique ?",
      back: "On l’utilise pour analyser répartition des différentes sources d’énergie utilisées dans un territoire. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de transition énergétique ?",
      back: "On l’utilise pour analyser transformation des modes de production et de consommation de l’énergie. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Énergie primaire» ? — série 1",
      choices: [
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Capacité à ajuster la production d’une installation à la demande."
      ],
      answer: 0,
      explanation: "Énergie primaire : Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Énergie secondaire» ? — série 2",
      choices: [
        "Réduction des émissions de dioxyde de carbone associées à une activité.",
        "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
        "Quantité d’énergie disponible dans une réserve à un instant donné.",
        "Ensemble des installations qui transportent et distribuent l’électricité."
      ],
      answer: 1,
      explanation: "Énergie secondaire : Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle formulation correspond à la notion « Puissance» ? — série 3",
      choices: [
        "Échauffement d’un conducteur parcouru par un courant électrique.",
        "Répartition des différentes sources d’énergie utilisées dans un territoire.",
        "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
        "Quantité d’énergie transférée par unité de temps."
      ],
      answer: 2,
      explanation: "Puissance : Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Comment caractériser scientifiquement « Rendement» ? — série 4",
      choices: [
        "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
        "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Transformation des modes de production et de consommation de l’énergie.",
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes."
      ],
      answer: 3,
      explanation: "Rendement : Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle définition faut-il retenir pour « Stock énergétique» ? — série 5",
      choices: [
        "Quantité d’énergie disponible dans une réserve à un instant donné.",
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Capacité à ajuster la production d’une installation à la demande.",
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible."
      ],
      answer: 0,
      explanation: "Stock énergétique : Quantité d’énergie disponible dans une réserve à un instant donné.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Flux énergétique» ? — série 6",
      choices: [
        "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
        "Quantité d’énergie transférée par unité de temps.",
        "Ensemble des installations qui transportent et distribuent l’électricité.",
        "Réduction des émissions de dioxyde de carbone associées à une activité."
      ],
      answer: 1,
      explanation: "Flux énergétique : Quantité d’énergie transférée par unité de temps.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Alternateur» ? — série 7",
      choices: [
        "Répartition des différentes sources d’énergie utilisées dans un territoire.",
        "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
        "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
        "Échauffement d’un conducteur parcouru par un courant électrique."
      ],
      answer: 2,
      explanation: "Alternateur : Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Induction» ? — série 8",
      choices: [
        "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Transformation des modes de production et de consommation de l’énergie.",
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique."
      ],
      answer: 3,
      explanation: "Induction : Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Réseau électrique» ? — série 9",
      choices: [
        "Ensemble des installations qui transportent et distribuent l’électricité.",
        "Capacité à ajuster la production d’une installation à la demande.",
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
        "Quantité d’énergie disponible dans une réserve à un instant donné."
      ],
      answer: 0,
      explanation: "Réseau électrique : Ensemble des installations qui transportent et distribuent l’électricité.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Effet Joule» ? — série 10",
      choices: [
        "Quantité d’énergie transférée par unité de temps.",
        "Échauffement d’un conducteur parcouru par un courant électrique.",
        "Réduction des émissions de dioxyde de carbone associées à une activité.",
        "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale."
      ],
      answer: 1,
      explanation: "Effet Joule : Échauffement d’un conducteur parcouru par un courant électrique.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle proposition définit correctement « Intermittence» ? — série 11",
      choices: [
        "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
        "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
        "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Répartition des différentes sources d’énergie utilisées dans un territoire."
      ],
      answer: 2,
      explanation: "Intermittence : Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quel énoncé décrit précisément « Pilotabilité» ? — série 12",
      choices: [
        "Transformation des modes de production et de consommation de l’énergie.",
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Capacité à ajuster la production d’une installation à la demande."
      ],
      answer: 3,
      explanation: "Pilotabilité : Capacité à ajuster la production d’une installation à la demande.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Décarbonation» ? — série 13",
      choices: [
        "Réduction des émissions de dioxyde de carbone associées à une activité.",
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
        "Quantité d’énergie disponible dans une réserve à un instant donné.",
        "Ensemble des installations qui transportent et distribuent l’électricité."
      ],
      answer: 0,
      explanation: "Décarbonation : Réduction des émissions de dioxyde de carbone associées à une activité.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Mix énergétique» ? — série 14",
      choices: [
        "Échauffement d’un conducteur parcouru par un courant électrique.",
        "Répartition des différentes sources d’énergie utilisées dans un territoire.",
        "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
        "Quantité d’énergie transférée par unité de temps."
      ],
      answer: 1,
      explanation: "Mix énergétique : Répartition des différentes sources d’énergie utilisées dans un territoire.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Transition énergétique» ? — série 15",
      choices: [
        "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique.",
        "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Transformation des modes de production et de consommation de l’énergie.",
        "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt."
      ],
      answer: 2,
      explanation: "Transition énergétique : Transformation des modes de production et de consommation de l’énergie.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle proposition définit correctement « Énergie primaire» ? — série 16",
      choices: [
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Capacité à ajuster la production d’une installation à la demande.",
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible."
      ],
      answer: 3,
      explanation: "Énergie primaire : Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quel énoncé décrit précisément « Énergie secondaire» ? — série 17",
      choices: [
        "Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
        "Quantité d’énergie disponible dans une réserve à un instant donné.",
        "Ensemble des installations qui transportent et distribuent l’électricité.",
        "Réduction des émissions de dioxyde de carbone associées à une activité."
      ],
      answer: 0,
      explanation: "Énergie secondaire : Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle formulation correspond à la notion « Puissance» ? — série 18",
      choices: [
        "Répartition des différentes sources d’énergie utilisées dans un territoire.",
        "Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
        "Quantité d’énergie transférée par unité de temps.",
        "Échauffement d’un conducteur parcouru par un courant électrique."
      ],
      answer: 1,
      explanation: "Puissance : Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Comment caractériser scientifiquement « Rendement» ? — série 19",
      choices: [
        "Caractère d’une production qui dépend de conditions variables, comme l’ensoleillement ou le vent.",
        "Transformation des modes de production et de consommation de l’énergie.",
        "Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
        "Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique."
      ],
      answer: 2,
      explanation: "Rendement : Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle définition faut-il retenir pour « Stock énergétique» ? — série 20",
      choices: [
        "Phénomène de création d’une tension électrique liée à la variation du flux magnétique.",
        "Capacité à ajuster la production d’une installation à la demande.",
        "Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible.",
        "Quantité d’énergie disponible dans une réserve à un instant donné."
      ],
      answer: 3,
      explanation: "Stock énergétique : Quantité d’énergie disponible dans une réserve à un instant donné.",
      skill: "Connaissances et distinction scientifique"
    }
  ],
  exercises: [
    {
      title: "Définir — Énergie primaire",
      level: "Facile",
      statement: "Définissez énergie primaire et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Énergie disponible dans une ressource avant conversion : rayonnement solaire, vent, uranium ou combustible. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Énergie secondaire",
      level: "Facile",
      statement: "Expliquez pourquoi il faut distinguer énergie secondaire de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Énergie obtenue après transformation d’une énergie primaire, comme l’électricité produite par une centrale. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Puissance",
      level: "Facile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser puissance.",
      correction: "Une réponse rigoureuse doit définir la notion : Énergie transférée ou convertie par unité de temps ; elle s’exprime en watt. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Rendement",
      level: "Intermédiaire",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de rendement.",
      correction: "Une réponse rigoureuse doit définir la notion : Rapport entre l’énergie utile obtenue et l’énergie reçue, ou entre puissances correspondantes. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Stock énergétique",
      level: "Intermédiaire",
      statement: "Construisez un court raisonnement scientifique mobilisant stock énergétique.",
      correction: "Une réponse rigoureuse doit définir la notion : Quantité d’énergie disponible dans une réserve à un instant donné. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Définir — Flux énergétique",
      level: "Intermédiaire",
      statement: "Définissez flux énergétique et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Quantité d’énergie transférée par unité de temps. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Alternateur",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi il faut distinguer alternateur de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Dispositif qui convertit une énergie mécanique en énergie électrique par induction électromagnétique. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Induction",
      level: "Difficile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser induction.",
      correction: "Une réponse rigoureuse doit définir la notion : Phénomène de création d’une tension électrique liée à la variation du flux magnétique. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Réseau électrique",
      level: "Difficile",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de réseau électrique.",
      correction: "Une réponse rigoureuse doit définir la notion : Ensemble des installations qui transportent et distribuent l’électricité. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Effet Joule",
      level: "Difficile",
      statement: "Construisez un court raisonnement scientifique mobilisant effet joule.",
      correction: "Une réponse rigoureuse doit définir la notion : Échauffement d’un conducteur parcouru par un courant électrique. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en enseignement scientifique — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g",
      consultedAt: "2026-11-01",
      supports: [
        "Programme d’enseignement scientifique de terminale : science, climat et société ; le futur des énergies ; une histoire du vivant."
      ]
    }
  ],
  sourceNote: "Synthèse pédagogique de travail adossée au programme officiel d’enseignement scientifique de terminale générale. Les exercices sont des entraînements originaux ; les données chiffrées et documents expérimentaux doivent être ajoutés ou vérifiés par l’enseignant. Statut draft : relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'es-vivant': {
  title: "Une histoire du vivant",
  objectives: [
    "Maîtriser les notions essentielles du thème « Une histoire du vivant ».",
    "Relier les connaissances scientifiques à des exemples et à des données.",
    "Construire une explication argumentée et identifier les limites des modèles."
  ],
  course: [
    {
      heading: "1. Notions et cadre scientifique",
      body: [
        "Biodiversité : Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
        "Mutation : Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
        "Allèle : Version d’un même gène située à un locus donné.",
        "Dérive génétique : Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Sélection naturelle : Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné."
      ]
    },
    {
      heading: "2. Modèles et mécanismes",
      body: [
        "Fréquence allélique : Proportion d’un allèle parmi les copies de ce gène dans une population.",
        "Hardy-Weinberg : Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
        "Spéciation : Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Échantillonnage : Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
        "Capture-marquage-recapture : Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés."
      ]
    },
    {
      heading: "3. Données et interprétation",
      body: [
        "Phylogénie : Étude des relations de parenté évolutive entre organismes.",
        "Ancêtre commun : Population ancestrale dont descendent plusieurs lignées.",
        "Adaptation : Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
        "Inférence : Conclusion tirée de données à l’aide d’un raisonnement explicite.",
        "Modèle : Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène."
      ]
    },
    {
      heading: "4. Enjeux et limites",
      body: [
        "Un modèle scientifique simplifie le réel : il faut connaître ses hypothèses et son domaine de validité.",
        "Les résultats dépendent de la qualité des mesures, de la représentativité des données et des conditions expérimentales."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, identifier la question et sélectionner les données pertinentes.",
        "Construire une chaîne logique reliant observations, connaissances et conclusion."
      ]
    }
  
      ,{ heading: 'Relier les mécanismes évolutifs aux indices du passé', body: ['L’histoire du vivant se reconstitue en croisant des sources différentes : fossiles, anatomie comparée, données moléculaires, embryologie et répartition géographique des espèces. Chaque source apporte des informations particulières et comporte des limites de conservation, d’échantillonnage ou d’interprétation. La convergence de plusieurs indices renforce une hypothèse historique.', 'La sélection naturelle modifie la fréquence de caractères héréditaires lorsque ceux-ci influencent le succès reproducteur dans un environnement donné. Elle n’agit pas en fonction d’un objectif futur et ne produit pas nécessairement un progrès linéaire. Les mutations et la recombinaison génétique fournissent de la diversité ; la dérive génétique peut aussi modifier les fréquences, notamment dans les petites populations.', 'Les parentés évolutives sont représentées par des arbres phylogénétiques construits à partir de caractères partagés dérivés. Un arbre indique des relations de parenté, pas une échelle de valeur entre espèces actuelles. Les espèces présentes ne sont pas les ancêtres obligatoires les unes des autres : elles partagent des ancêtres communs.'] }],
  keyPoints: [
    "Biodiversité : Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
    "Mutation : Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
    "Allèle : Version d’un même gène située à un locus donné.",
    "Dérive génétique : Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
    "Sélection naturelle : Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
    "Fréquence allélique : Proportion d’un allèle parmi les copies de ce gène dans une population.",
    "Hardy-Weinberg : Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
    "Spéciation : Processus évolutif conduisant à la formation de nouvelles espèces.",
    "Échantillonnage : Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
    "Capture-marquage-recapture : Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
    "Phylogénie : Étude des relations de parenté évolutive entre organismes.",
    "Ancêtre commun : Population ancestrale dont descendent plusieurs lignées.",
    "Adaptation : Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
    "Inférence : Conclusion tirée de données à l’aide d’un raisonnement explicite.",
    "Modèle : Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène."
  ],
  method: [
    "Identifier la consigne et les grandeurs ou concepts étudiés.",
    "Décrire les données sans les interpréter prématurément.",
    "Mobiliser une connaissance scientifique précise.",
    "Construire un lien explicite entre données et interprétation.",
    "Formuler une conclusion proportionnée aux résultats et mentionner les limites."
  ],
  flashcards: [
    {
      front: "Comment définir « Biodiversité » ?",
      back: "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Mutation » ?",
      back: "Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Allèle » ?",
      back: "Version d’un même gène située à un locus donné.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Dérive génétique » ?",
      back: "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Sélection naturelle » ?",
      back: "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Fréquence allélique » ?",
      back: "Proportion d’un allèle parmi les copies de ce gène dans une population.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Hardy-Weinberg » ?",
      back: "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Spéciation » ?",
      back: "Processus évolutif conduisant à la formation de nouvelles espèces.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Échantillonnage » ?",
      back: "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Capture-marquage-recapture » ?",
      back: "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Phylogénie » ?",
      back: "Étude des relations de parenté évolutive entre organismes.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Ancêtre commun » ?",
      back: "Population ancestrale dont descendent plusieurs lignées.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Adaptation » ?",
      back: "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Inférence » ?",
      back: "Conclusion tirée de données à l’aide d’un raisonnement explicite.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Modèle » ?",
      back: "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de biodiversité ?",
      back: "On l’utilise pour analyser diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de mutation ?",
      back: "On l’utilise pour analyser modification de la séquence d’ADN, pouvant créer un nouvel allèle. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de allèle ?",
      back: "On l’utilise pour analyser version d’un même gène située à un locus donné. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de dérive génétique ?",
      back: "On l’utilise pour analyser évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de sélection naturelle ?",
      back: "On l’utilise pour analyser différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de fréquence allélique ?",
      back: "On l’utilise pour analyser proportion d’un allèle parmi les copies de ce gène dans une population. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de hardy-weinberg ?",
      back: "On l’utilise pour analyser modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de spéciation ?",
      back: "On l’utilise pour analyser processus évolutif conduisant à la formation de nouvelles espèces. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de échantillonnage ?",
      back: "On l’utilise pour analyser sélection d’une partie d’une population pour estimer certaines de ses caractéristiques. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de capture-marquage-recapture ?",
      back: "On l’utilise pour analyser méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de phylogénie ?",
      back: "On l’utilise pour analyser étude des relations de parenté évolutive entre organismes. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de ancêtre commun ?",
      back: "On l’utilise pour analyser population ancestrale dont descendent plusieurs lignées. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de adaptation ?",
      back: "On l’utilise pour analyser caractère héréditaire augmentant le succès reproducteur dans un environnement donné. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de inférence ?",
      back: "On l’utilise pour analyser conclusion tirée de données à l’aide d’un raisonnement explicite. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de modèle ?",
      back: "On l’utilise pour analyser représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Biodiversité» ? — série 1",
      choices: [
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Population ancestrale dont descendent plusieurs lignées."
      ],
      answer: 0,
      explanation: "Biodiversité : Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Mutation» ? — série 2",
      choices: [
        "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
        "Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
        "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques."
      ],
      answer: 1,
      explanation: "Mutation : Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle formulation correspond à la notion « Allèle» ? — série 3",
      choices: [
        "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
        "Conclusion tirée de données à l’aide d’un raisonnement explicite.",
        "Version d’un même gène située à un locus donné.",
        "Proportion d’un allèle parmi les copies de ce gène dans une population."
      ],
      answer: 2,
      explanation: "Allèle : Version d’un même gène située à un locus donné.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Comment caractériser scientifiquement « Dérive génétique» ? — série 4",
      choices: [
        "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
        "Étude des relations de parenté évolutive entre organismes.",
        "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations."
      ],
      answer: 3,
      explanation: "Dérive génétique : Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle définition faut-il retenir pour « Sélection naturelle» ? — série 5",
      choices: [
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
        "Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Population ancestrale dont descendent plusieurs lignées.",
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes."
      ],
      answer: 0,
      explanation: "Sélection naturelle : Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Fréquence allélique» ? — série 6",
      choices: [
        "Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
        "Proportion d’un allèle parmi les copies de ce gène dans une population.",
        "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
        "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné."
      ],
      answer: 1,
      explanation: "Fréquence allélique : Proportion d’un allèle parmi les copies de ce gène dans une population.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Hardy-Weinberg» ? — série 7",
      choices: [
        "Conclusion tirée de données à l’aide d’un raisonnement explicite.",
        "Version d’un même gène située à un locus donné.",
        "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
        "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés."
      ],
      answer: 2,
      explanation: "Hardy-Weinberg : Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Spéciation» ? — série 8",
      choices: [
        "Étude des relations de parenté évolutive entre organismes.",
        "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Processus évolutif conduisant à la formation de nouvelles espèces."
      ],
      answer: 3,
      explanation: "Spéciation : Processus évolutif conduisant à la formation de nouvelles espèces.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Échantillonnage» ? — série 9",
      choices: [
        "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
        "Population ancestrale dont descendent plusieurs lignées.",
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné."
      ],
      answer: 0,
      explanation: "Échantillonnage : Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Capture-marquage-recapture» ? — série 10",
      choices: [
        "Proportion d’un allèle parmi les copies de ce gène dans une population.",
        "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
        "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
        "Modification de la séquence d’ADN, pouvant créer un nouvel allèle."
      ],
      answer: 1,
      explanation: "Capture-marquage-recapture : Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle proposition définit correctement « Phylogénie» ? — série 11",
      choices: [
        "Version d’un même gène située à un locus donné.",
        "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
        "Étude des relations de parenté évolutive entre organismes.",
        "Conclusion tirée de données à l’aide d’un raisonnement explicite."
      ],
      answer: 2,
      explanation: "Phylogénie : Étude des relations de parenté évolutive entre organismes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quel énoncé décrit précisément « Ancêtre commun» ? — série 12",
      choices: [
        "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Population ancestrale dont descendent plusieurs lignées."
      ],
      answer: 3,
      explanation: "Ancêtre commun : Population ancestrale dont descendent plusieurs lignées.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Adaptation» ? — série 13",
      choices: [
        "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
        "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques."
      ],
      answer: 0,
      explanation: "Adaptation : Caractère héréditaire augmentant le succès reproducteur dans un environnement donné.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Inférence» ? — série 14",
      choices: [
        "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés.",
        "Conclusion tirée de données à l’aide d’un raisonnement explicite.",
        "Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
        "Proportion d’un allèle parmi les copies de ce gène dans une population."
      ],
      answer: 1,
      explanation: "Inférence : Conclusion tirée de données à l’aide d’un raisonnement explicite.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Modèle» ? — série 15",
      choices: [
        "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises.",
        "Étude des relations de parenté évolutive entre organismes.",
        "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
        "Version d’un même gène située à un locus donné."
      ],
      answer: 2,
      explanation: "Modèle : Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle proposition définit correctement « Biodiversité» ? — série 16",
      choices: [
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Population ancestrale dont descendent plusieurs lignées.",
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes."
      ],
      answer: 3,
      explanation: "Biodiversité : Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quel énoncé décrit précisément « Mutation» ? — série 17",
      choices: [
        "Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
        "Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques.",
        "Caractère héréditaire augmentant le succès reproducteur dans un environnement donné."
      ],
      answer: 0,
      explanation: "Mutation : Modification de la séquence d’ADN, pouvant créer un nouvel allèle.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle formulation correspond à la notion « Allèle» ? — série 18",
      choices: [
        "Conclusion tirée de données à l’aide d’un raisonnement explicite.",
        "Version d’un même gène située à un locus donné.",
        "Proportion d’un allèle parmi les copies de ce gène dans une population.",
        "Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés."
      ],
      answer: 1,
      explanation: "Allèle : Version d’un même gène située à un locus donné.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Comment caractériser scientifiquement « Dérive génétique» ? — série 19",
      choices: [
        "Étude des relations de parenté évolutive entre organismes.",
        "Représentation simplifiée permettant de décrire, expliquer ou prévoir un phénomène.",
        "Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
        "Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises."
      ],
      answer: 2,
      explanation: "Dérive génétique : Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle définition faut-il retenir pour « Sélection naturelle» ? — série 20",
      choices: [
        "Processus évolutif conduisant à la formation de nouvelles espèces.",
        "Population ancestrale dont descendent plusieurs lignées.",
        "Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes.",
        "Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné."
      ],
      answer: 3,
      explanation: "Sélection naturelle : Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné.",
      skill: "Connaissances et distinction scientifique"
    }
  ],
  exercises: [
    {
      title: "Définir — Biodiversité",
      level: "Facile",
      statement: "Définissez biodiversité et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Diversité du vivant à l’échelle des écosystèmes, des espèces et des gènes. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Mutation",
      level: "Facile",
      statement: "Expliquez pourquoi il faut distinguer mutation de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Modification de la séquence d’ADN, pouvant créer un nouvel allèle. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Allèle",
      level: "Facile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser allèle.",
      correction: "Une réponse rigoureuse doit définir la notion : Version d’un même gène située à un locus donné. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Dérive génétique",
      level: "Intermédiaire",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de dérive génétique.",
      correction: "Une réponse rigoureuse doit définir la notion : Évolution aléatoire des fréquences alléliques, particulièrement marquée dans les petites populations. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Sélection naturelle",
      level: "Intermédiaire",
      statement: "Construisez un court raisonnement scientifique mobilisant sélection naturelle.",
      correction: "Une réponse rigoureuse doit définir la notion : Différence de succès reproducteur liée à des caractères héréditaires dans un environnement donné. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Définir — Fréquence allélique",
      level: "Intermédiaire",
      statement: "Définissez fréquence allélique et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Proportion d’un allèle parmi les copies de ce gène dans une population. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Hardy-Weinberg",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi il faut distinguer hardy-weinberg de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Modèle théorique décrivant des fréquences génotypiques stables sous des conditions précises. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Spéciation",
      level: "Difficile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser spéciation.",
      correction: "Une réponse rigoureuse doit définir la notion : Processus évolutif conduisant à la formation de nouvelles espèces. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Échantillonnage",
      level: "Difficile",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de échantillonnage.",
      correction: "Une réponse rigoureuse doit définir la notion : Sélection d’une partie d’une population pour estimer certaines de ses caractéristiques. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Capture-marquage-recapture",
      level: "Difficile",
      statement: "Construisez un court raisonnement scientifique mobilisant capture-marquage-recapture.",
      correction: "Une réponse rigoureuse doit définir la notion : Méthode d’estimation d’effectif reposant sur deux captures et la proportion d’individus marqués recapturés. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en enseignement scientifique — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g",
      consultedAt: "2026-11-01",
      supports: [
        "Programme d’enseignement scientifique de terminale : science, climat et société ; le futur des énergies ; une histoire du vivant."
      ]
    }
  ],
  sourceNote: "Synthèse pédagogique de travail adossée au programme officiel d’enseignement scientifique de terminale générale. Les exercices sont des entraînements originaux ; les données chiffrées et documents expérimentaux doivent être ajoutés ou vérifiés par l’enseignant. Statut draft : relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'es-demarche': {
  title: "Démarche scientifique, données et esprit critique",
  objectives: [
    "Maîtriser les notions essentielles du thème « Démarche scientifique, données et esprit critique ».",
    "Relier les connaissances scientifiques à des exemples et à des données.",
    "Construire une explication argumentée et identifier les limites des modèles."
  ],
  course: [
    {
      heading: "1. Notions et cadre scientifique",
      body: [
        "Hypothèse : Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
        "Protocole : Description organisée des étapes et conditions d’une investigation.",
        "Variable indépendante : Facteur dont on fait varier la valeur ou dont on compare les modalités.",
        "Variable dépendante : Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Témoin : Condition de référence permettant d’interpréter les effets d’un facteur étudié."
      ]
    },
    {
      heading: "2. Modèles et mécanismes",
      body: [
        "Corrélation : Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
        "Causalité : Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
        "Incertitude : Quantification du doute associé à une mesure ou à une estimation.",
        "Répétabilité : Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
        "Reproductibilité : Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes."
      ]
    },
    {
      heading: "3. Données et interprétation",
      body: [
        "Ordre de grandeur : Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Moyenne : Somme des valeurs divisée par leur nombre.",
        "Médiane : Valeur qui partage une série ordonnée en deux groupes de même effectif.",
        "Biais : Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
        "Source fiable : Source dont l’origine, la méthode, les données et les limites peuvent être examinées."
      ]
    },
    {
      heading: "4. Enjeux et limites",
      body: [
        "Un modèle scientifique simplifie le réel : il faut connaître ses hypothèses et son domaine de validité.",
        "Les résultats dépendent de la qualité des mesures, de la représentativité des données et des conditions expérimentales."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, identifier la question et sélectionner les données pertinentes.",
        "Construire une chaîne logique reliant observations, connaissances et conclusion."
      ]
    }
  
      ,{ heading: 'Distinguer observation, hypothèse et conclusion', body: ['Une démarche scientifique commence par une question formulée clairement. On définit ensuite les variables pertinentes, on choisit un protocole adapté et on recueille des observations ou des mesures. Les conditions expérimentales doivent être précisées pour que les résultats puissent être interprétés et, si possible, reproduits.', 'Une corrélation entre deux variables ne prouve pas à elle seule qu’une relation de cause à effet existe. Il faut examiner les facteurs confondants, le sens possible de la causalité et les limites de l’échantillon. Un modèle simplifie la réalité : il est utile si ses hypothèses et son domaine de validité sont connus.', 'Une conclusion scientifique doit répondre à la question dans les limites des données disponibles. Elle peut confirmer une hypothèse, la nuancer ou la rejeter. Il faut distinguer ce qui est directement observé, ce qui est déduit et ce qui reste incertain.'] }],
  keyPoints: [
    "Hypothèse : Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
    "Protocole : Description organisée des étapes et conditions d’une investigation.",
    "Variable indépendante : Facteur dont on fait varier la valeur ou dont on compare les modalités.",
    "Variable dépendante : Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
    "Témoin : Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
    "Corrélation : Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
    "Causalité : Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
    "Incertitude : Quantification du doute associé à une mesure ou à une estimation.",
    "Répétabilité : Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
    "Reproductibilité : Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
    "Ordre de grandeur : Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
    "Moyenne : Somme des valeurs divisée par leur nombre.",
    "Médiane : Valeur qui partage une série ordonnée en deux groupes de même effectif.",
    "Biais : Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
    "Source fiable : Source dont l’origine, la méthode, les données et les limites peuvent être examinées."
  ],
  method: [
    "Identifier la consigne et les grandeurs ou concepts étudiés.",
    "Décrire les données sans les interpréter prématurément.",
    "Mobiliser une connaissance scientifique précise.",
    "Construire un lien explicite entre données et interprétation.",
    "Formuler une conclusion proportionnée aux résultats et mentionner les limites."
  ],
  flashcards: [
    {
      front: "Comment définir « Hypothèse » ?",
      back: "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Protocole » ?",
      back: "Description organisée des étapes et conditions d’une investigation.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Variable indépendante » ?",
      back: "Facteur dont on fait varier la valeur ou dont on compare les modalités.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Variable dépendante » ?",
      back: "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Témoin » ?",
      back: "Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Corrélation » ?",
      back: "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Causalité » ?",
      back: "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Incertitude » ?",
      back: "Quantification du doute associé à une mesure ou à une estimation.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Répétabilité » ?",
      back: "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Reproductibilité » ?",
      back: "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Ordre de grandeur » ?",
      back: "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Moyenne » ?",
      back: "Somme des valeurs divisée par leur nombre.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Médiane » ?",
      back: "Valeur qui partage une série ordonnée en deux groupes de même effectif.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Biais » ?",
      back: "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Comment définir « Source fiable » ?",
      back: "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
      tags: [
        "enseignement scientifique",
        "définition"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de hypothèse ?",
      back: "On l’utilise pour analyser proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de protocole ?",
      back: "On l’utilise pour analyser description organisée des étapes et conditions d’une investigation. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de variable indépendante ?",
      back: "On l’utilise pour analyser facteur dont on fait varier la valeur ou dont on compare les modalités. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de variable dépendante ?",
      back: "On l’utilise pour analyser grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de témoin ?",
      back: "On l’utilise pour analyser condition de référence permettant d’interpréter les effets d’un facteur étudié. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de corrélation ?",
      back: "On l’utilise pour analyser association statistique entre deux variables, qui ne prouve pas à elle seule une causalité. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de causalité ?",
      back: "On l’utilise pour analyser relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de incertitude ?",
      back: "On l’utilise pour analyser quantification du doute associé à une mesure ou à une estimation. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de répétabilité ?",
      back: "On l’utilise pour analyser proximité des résultats obtenus en répétant une mesure dans des conditions identiques. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de reproductibilité ?",
      back: "On l’utilise pour analyser possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de ordre de grandeur ?",
      back: "On l’utilise pour analyser puissance de dix qui donne une estimation de l’échelle d’une quantité. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de moyenne ?",
      back: "On l’utilise pour analyser somme des valeurs divisée par leur nombre. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de médiane ?",
      back: "On l’utilise pour analyser valeur qui partage une série ordonnée en deux groupes de même effectif. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de biais ?",
      back: "On l’utilise pour analyser effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    },
    {
      front: "Dans quel contexte mobiliser la notion de source fiable ?",
      back: "On l’utilise pour analyser source dont l’origine, la méthode, les données et les limites peuvent être examinées. Il faut préciser les conditions et les limites de son emploi.",
      tags: [
        "enseignement scientifique",
        "application"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Hypothèse» ? — série 1",
      choices: [
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Quantification du doute associé à une mesure ou à une estimation.",
        "Somme des valeurs divisée par leur nombre."
      ],
      answer: 0,
      explanation: "Hypothèse : Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Protocole» ? — série 2",
      choices: [
        "Valeur qui partage une série ordonnée en deux groupes de même effectif.",
        "Description organisée des étapes et conditions d’une investigation.",
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
        "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques."
      ],
      answer: 1,
      explanation: "Protocole : Description organisée des étapes et conditions d’une investigation.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle formulation correspond à la notion « Variable indépendante» ? — série 3",
      choices: [
        "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
        "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
        "Facteur dont on fait varier la valeur ou dont on compare les modalités.",
        "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité."
      ],
      answer: 2,
      explanation: "Variable indépendante : Facteur dont on fait varier la valeur ou dont on compare les modalités.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Comment caractériser scientifiquement « Variable dépendante» ? — série 4",
      choices: [
        "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
        "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs."
      ],
      answer: 3,
      explanation: "Variable dépendante : Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle définition faut-il retenir pour « Témoin» ? — série 5",
      choices: [
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
        "Quantification du doute associé à une mesure ou à une estimation.",
        "Somme des valeurs divisée par leur nombre.",
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences."
      ],
      answer: 0,
      explanation: "Témoin : Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quelle proposition définit correctement « Corrélation» ? — série 6",
      choices: [
        "Description organisée des étapes et conditions d’une investigation.",
        "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
        "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
        "Valeur qui partage une série ordonnée en deux groupes de même effectif."
      ],
      answer: 1,
      explanation: "Corrélation : Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Facile",
      question: "Quel énoncé décrit précisément « Causalité» ? — série 7",
      choices: [
        "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
        "Facteur dont on fait varier la valeur ou dont on compare les modalités.",
        "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
        "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes."
      ],
      answer: 2,
      explanation: "Causalité : Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Incertitude» ? — série 8",
      choices: [
        "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Quantification du doute associé à une mesure ou à une estimation."
      ],
      answer: 3,
      explanation: "Incertitude : Quantification du doute associé à une mesure ou à une estimation.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Répétabilité» ? — série 9",
      choices: [
        "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
        "Somme des valeurs divisée par leur nombre.",
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié."
      ],
      answer: 0,
      explanation: "Répétabilité : Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Reproductibilité» ? — série 10",
      choices: [
        "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
        "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
        "Valeur qui partage une série ordonnée en deux groupes de même effectif.",
        "Description organisée des étapes et conditions d’une investigation."
      ],
      answer: 1,
      explanation: "Reproductibilité : Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle proposition définit correctement « Ordre de grandeur» ? — série 11",
      choices: [
        "Facteur dont on fait varier la valeur ou dont on compare les modalités.",
        "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
        "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée."
      ],
      answer: 2,
      explanation: "Ordre de grandeur : Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quel énoncé décrit précisément « Moyenne» ? — série 12",
      choices: [
        "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Quantification du doute associé à une mesure ou à une estimation.",
        "Somme des valeurs divisée par leur nombre."
      ],
      answer: 3,
      explanation: "Moyenne : Somme des valeurs divisée par leur nombre.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle formulation correspond à la notion « Médiane» ? — série 13",
      choices: [
        "Valeur qui partage une série ordonnée en deux groupes de même effectif.",
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
        "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques."
      ],
      answer: 0,
      explanation: "Médiane : Valeur qui partage une série ordonnée en deux groupes de même effectif.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Comment caractériser scientifiquement « Biais» ? — série 14",
      choices: [
        "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes.",
        "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
        "Description organisée des étapes et conditions d’une investigation.",
        "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité."
      ],
      answer: 1,
      explanation: "Biais : Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition faut-il retenir pour « Source fiable» ? — série 15",
      choices: [
        "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées.",
        "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
        "Facteur dont on fait varier la valeur ou dont on compare les modalités."
      ],
      answer: 2,
      explanation: "Source fiable : Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle proposition définit correctement « Hypothèse» ? — série 16",
      choices: [
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Quantification du doute associé à une mesure ou à une estimation.",
        "Somme des valeurs divisée par leur nombre.",
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences."
      ],
      answer: 3,
      explanation: "Hypothèse : Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quel énoncé décrit précisément « Protocole» ? — série 17",
      choices: [
        "Description organisée des étapes et conditions d’une investigation.",
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
        "Proximité des résultats obtenus en répétant une mesure dans des conditions identiques.",
        "Valeur qui partage une série ordonnée en deux groupes de même effectif."
      ],
      answer: 0,
      explanation: "Protocole : Description organisée des étapes et conditions d’une investigation.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle formulation correspond à la notion « Variable indépendante» ? — série 18",
      choices: [
        "Effet systématique qui éloigne une mesure ou une estimation de la valeur recherchée.",
        "Facteur dont on fait varier la valeur ou dont on compare les modalités.",
        "Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité.",
        "Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes."
      ],
      answer: 1,
      explanation: "Variable indépendante : Facteur dont on fait varier la valeur ou dont on compare les modalités.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Comment caractériser scientifiquement « Variable dépendante» ? — série 19",
      choices: [
        "Puissance de dix qui donne une estimation de l’échelle d’une quantité.",
        "Source dont l’origine, la méthode, les données et les limites peuvent être examinées.",
        "Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
        "Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées."
      ],
      answer: 2,
      explanation: "Variable dépendante : Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs.",
      skill: "Connaissances et distinction scientifique"
    },
    {
      level: "Difficile",
      question: "Quelle définition faut-il retenir pour « Témoin» ? — série 20",
      choices: [
        "Quantification du doute associé à une mesure ou à une estimation.",
        "Somme des valeurs divisée par leur nombre.",
        "Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences.",
        "Condition de référence permettant d’interpréter les effets d’un facteur étudié."
      ],
      answer: 3,
      explanation: "Témoin : Condition de référence permettant d’interpréter les effets d’un facteur étudié.",
      skill: "Connaissances et distinction scientifique"
    }
  ],
  exercises: [
    {
      title: "Définir — Hypothèse",
      level: "Facile",
      statement: "Définissez hypothèse et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Proposition explicative ou prédictive que l’on peut confronter à des observations ou expériences. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Protocole",
      level: "Facile",
      statement: "Expliquez pourquoi il faut distinguer protocole de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Description organisée des étapes et conditions d’une investigation. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Variable indépendante",
      level: "Facile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser variable indépendante.",
      correction: "Une réponse rigoureuse doit définir la notion : Facteur dont on fait varier la valeur ou dont on compare les modalités. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Variable dépendante",
      level: "Intermédiaire",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de variable dépendante.",
      correction: "Une réponse rigoureuse doit définir la notion : Grandeur mesurée dont on étudie l’évolution en fonction d’autres facteurs. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Témoin",
      level: "Intermédiaire",
      statement: "Construisez un court raisonnement scientifique mobilisant témoin.",
      correction: "Une réponse rigoureuse doit définir la notion : Condition de référence permettant d’interpréter les effets d’un facteur étudié. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Définir — Corrélation",
      level: "Intermédiaire",
      statement: "Définissez corrélation et illustrez son rôle dans un exemple scientifique.",
      correction: "Une réponse rigoureuse doit définir la notion : Association statistique entre deux variables, qui ne prouve pas à elle seule une causalité. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Distinguer — Causalité",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi il faut distinguer causalité de notions voisines.",
      correction: "Une réponse rigoureuse doit définir la notion : Relation dans laquelle une modification contribue à produire un effet, toutes choses pertinentes considérées. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Exploiter — Incertitude",
      level: "Difficile",
      statement: "À partir d'un document de cours, repérez les données qui permettent de mobiliser incertitude.",
      correction: "Une réponse rigoureuse doit définir la notion : Quantification du doute associé à une mesure ou à une estimation. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Discuter — Répétabilité",
      level: "Difficile",
      statement: "Présentez une limite ou une condition d'utilisation de la notion de répétabilité.",
      correction: "Une réponse rigoureuse doit définir la notion : Proximité des résultats obtenus en répétant une mesure dans des conditions identiques. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    },
    {
      title: "Argumenter — Reproductibilité",
      level: "Difficile",
      statement: "Construisez un court raisonnement scientifique mobilisant reproductibilité.",
      correction: "Une réponse rigoureuse doit définir la notion : Possibilité d’obtenir des résultats compatibles dans d’autres conditions ou par d’autres équipes. Elle doit ensuite relier cette définition aux informations du sujet, justifier chaque étape et préciser les limites éventuelles.",
      skills: [
        "Connaissances",
        "Exploitation de données",
        "Argumentation"
      ],
      hints: [
        "Relevez les informations utiles du document.",
        "Distinguez observation, interprétation et conclusion."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en enseignement scientifique — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g",
      consultedAt: "2026-11-01",
      supports: [
        "Programme d’enseignement scientifique de terminale : science, climat et société ; le futur des énergies ; une histoire du vivant."
      ]
    }
  ],
  sourceNote: "Synthèse pédagogique de travail adossée au programme officiel d’enseignement scientifique de terminale générale. Les exercices sont des entraînements originaux ; les données chiffrées et documents expérimentaux doivent être ajoutés ou vérifiés par l’enseignant. Statut draft : relecture disciplinaire recommandée.",
  validationStatus: "draft"
}
};
