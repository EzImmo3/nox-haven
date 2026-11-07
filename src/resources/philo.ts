import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'philo-art': {
    title: 'L’art',
    objectives: ['Distinguer création, imitation, représentation et jugement esthétique.', 'Expliquer des problèmes classiques sur le beau, la vérité et la fonction de l’art.', 'Construire une réflexion argumentée en mobilisant des exemples d’œuvres.'],
    course: [
      { heading: '1. L’art et la représentation', body: ['L’art regroupe des pratiques de création qui donnent forme à une expérience par des moyens sensibles : images, sons, mots, gestes ou espaces. Il ne se réduit pas à la fabrication d’objets décoratifs.', 'La mimesis désigne l’imitation ou la représentation. Chez Platon, l’image peut entretenir une confusion entre apparence et vérité ; chez Aristote, la représentation artistique organise une action et peut éclairer l’expérience humaine.'] },
      { heading: '2. Le beau et le jugement de goût', body: ['Le jugement esthétique porte sur une expérience sensible et une appréciation. Il ne se confond ni avec un calcul d’utilité ni avec une démonstration scientifique.', 'Dans la Critique de la faculté de juger, Kant analyse le jugement de goût comme subjectif : il repose sur un sentiment de plaisir. Pourtant, celui qui juge beau demande souvent que son appréciation puisse être partagée. Cette tension entre subjectivité et prétention à l’universalité constitue un problème central.'] },
      { heading: '3. Création, travail et technique', body: ['La création ne se réduit pas à une inspiration soudaine. Elle suppose des choix, des essais, des apprentissages, des contraintes matérielles et parfois des révisions.', 'La technique n’est pas nécessairement l’ennemie de la liberté : elle rend possibles des effets et peut être transformée par l’artiste. L’originalité ne signifie donc pas absence de règles ou de savoir-faire.'] },
      { heading: '4. Les fonctions de l’art', body: ['L’art peut procurer un plaisir esthétique, exprimer une expérience, renouveler notre perception, transmettre une mémoire ou intervenir dans un débat politique. Ces fonctions peuvent se combiner.', 'L’autonomie de l’art signifie qu’une œuvre ne se laisse pas entièrement réduire à son utilité, à sa morale ou à son message. Une œuvre engagée peut conserver une recherche formelle et une pluralité de sens.'] },
      { heading: '5. Méthode : réfléchir sur une œuvre', body: ['Commencer par décrire précisément les éléments de l’œuvre avant de proposer une interprétation. Distinguer ce qui est observé de ce qui est supposé.', 'Dans une dissertation, définir les termes, repérer une tension, formuler une problématique et construire une progression argumentative. Les références à des auteurs et à des œuvres servent le raisonnement : elles ne le remplacent pas.'] },
    ],
    keyPoints: ['L’art ne se réduit pas à la beauté classique ni à l’imitation fidèle.', 'Le jugement de goût est subjectif mais peut prétendre à être partagé.', 'La création associe imagination, technique, travail et contraintes.', 'Une œuvre peut avoir plusieurs fonctions sans être réductible à une seule.', 'Une interprétation doit être justifiée par des éléments de l’œuvre.'],
    method: ['Définir les termes du sujet et distinguer les sens possibles.', 'Faire apparaître une tension ou une difficulté réelle.', 'Formuler une problématique sous forme de question directrice.', 'Construire des parties qui font progresser la réponse.', 'Mobiliser une thèse, l’expliquer et l’illustrer par une œuvre précise.', 'Conclure en répondant explicitement à la question posée.'],
    flashcards: [
      { front: 'Pourquoi l’art pose-t-il un problème philosophique ?', back: 'Parce qu’il interroge la création, la beauté, la représentation, l’expression et la valeur des œuvres.' },
      { front: 'Une œuvre d’art est-elle nécessairement belle ?', back: 'Non. Une œuvre peut déranger, provoquer ou faire réfléchir sans rechercher la beauté classique.' },
      { front: 'Qu’est-ce qu’une représentation artistique ?', back: 'Une manière de rendre présent un sujet par des formes, des sons, des mots, des gestes ou des images.' },
      { front: 'Qu’est-ce que l’imitation en art ?', back: 'La représentation ou la transformation du réel par une production humaine.' },
      { front: 'Que signifie « mimesis » ?', back: 'Le terme grec désignant l’imitation ou la représentation, notamment dans la réflexion antique sur l’art.' },
      { front: 'Quelle difficulté Platon soulève-t-il à propos de l’art imitatif ?', back: 'L’image peut éloigner de la vérité en donnant l’apparence du réel sans en fournir la connaissance.' },
      { front: 'Quelle fonction Aristote attribue-t-il à la tragédie ?', back: 'Elle représente une action et peut produire la catharsis, traditionnellement comprise comme une purification ou clarification des émotions.' },
      { front: 'Qu’est-ce que la catharsis ?', back: 'L’effet de clarification ou de transformation des émotions éprouvées devant une représentation tragique.' },
      { front: 'L’artiste copie-t-il toujours la nature ?', back: 'Non. Il sélectionne, transforme, interprète ou invente ; l’œuvre ne se réduit pas à une copie.' },
      { front: 'Qu’est-ce qu’un jugement esthétique ?', back: 'Un jugement portant sur le beau ou la valeur sensible d’une œuvre.' },
      { front: 'Le goût est-il purement individuel ?', back: 'Il comporte une dimension personnelle, mais il se forme aussi dans une culture, une époque et des échanges.' },
      { front: 'Quelle thèse Kant défend-il sur le jugement de goût ?', back: 'Le jugement de goût est subjectif tout en prétendant à une forme d’universalité partageable.' },
      { front: 'Que signifie « désintéressement » chez Kant ?', back: 'Le plaisir esthétique ne dépend pas de la possession ni de l’utilité pratique de l’objet.' },
      { front: 'Une œuvre doit-elle être utile pour avoir une valeur ?', back: 'Non. Sa valeur peut être esthétique, expressive, symbolique ou critique sans utilité immédiate.' },
      { front: 'Qu’est-ce que la création artistique ?', back: 'Une activité qui produit une forme singulière à partir d’une intention, d’un travail, de techniques et de choix.' },
      { front: 'L’inspiration suffit-elle à créer une œuvre ?', back: 'Non. L’inspiration peut intervenir, mais la maîtrise, les essais et le travail sont également déterminants.' },
      { front: 'Quel rôle joue la technique dans l’art ?', back: 'Elle fournit des moyens et des contraintes que l’artiste maîtrise, détourne ou renouvelle.' },
      { front: 'L’art peut-il exprimer une vérité ?', back: 'Oui, en révélant des aspects de l’expérience ou du monde, même sans être une démonstration scientifique.' },
      { front: 'Qu’est-ce que l’autonomie de l’art ?', back: 'L’idée que l’art possède ses propres finalités et critères, sans être entièrement subordonné à la morale, à la politique ou à l’utilité.' },
      { front: 'L’art peut-il avoir une fonction politique ?', back: 'Oui. Il peut critiquer un pouvoir, rendre visibles des injustices ou construire une mémoire collective.' },
      { front: 'Qu’est-ce qu’une œuvre engagée ?', back: 'Une œuvre qui prend position ou intervient dans un débat social, politique ou moral.' },
      { front: 'Une œuvre engagée perd-elle nécessairement sa valeur artistique ?', back: 'Non. L’engagement et l’exigence formelle peuvent coexister.' },
      { front: 'Pourquoi le contexte historique compte-t-il pour comprendre une œuvre ?', back: 'Il éclaire ses codes, ses destinataires, ses contraintes et les débats auxquels elle répond.' },
      { front: 'Qu’est-ce qu’une interprétation d’œuvre ?', back: 'Une proposition argumentée qui explique des choix, des formes et des significations possibles.' },
      { front: 'Une œuvre possède-t-elle toujours un seul sens ?', back: 'Non. Elle peut autoriser plusieurs interprétations, à condition qu’elles soient appuyées sur des éléments précis.' },
      { front: 'Quelle différence entre artiste et artisan dans certaines traditions ?', back: 'L’artisan est souvent associé à la fabrication réglée et à l’utilité, l’artiste à une création singulière ; la distinction est historique et discutée.' },
      { front: 'L’art peut-il transformer notre perception ?', back: 'Oui. Il attire l’attention sur des détails, déplace nos habitudes et propose de nouvelles manières de voir.' },
      { front: 'Qu’est-ce qu’une expérience esthétique ?', back: 'Une expérience sensible et réfléchie dans laquelle une forme retient l’attention et suscite un jugement ou une émotion.' },
      { front: 'Pourquoi faut-il distinguer émotion et jugement esthétique ?', back: 'Une émotion décrit un effet éprouvé ; un jugement formule une appréciation qui peut être argumentée et discutée.' },
      { front: 'Comment analyser philosophiquement une œuvre ?', back: 'Décrire précisément sa forme, identifier un problème, mobiliser des notions et justifier une interprétation sans réduire l’œuvre à un simple message.' },
    ],
    quiz: [
      { level: 'Facile', question: 'La thèse selon laquelle l’art imitatif peut éloigner de la vérité est associée à :', choices: ['Platon', 'Aristote', 'Kant', 'Hume'], answer: 0, explanation: 'Platon critique les images qui reproduisent les apparences sans donner la connaissance des modèles.' },
      { level: 'Intermédiaire', question: 'Dans la réflexion d’Aristote, la catharsis concerne surtout :', choices: ['La clarification des émotions tragiques', 'La copie exacte du réel', 'La suppression de toute émotion', 'La beauté des objets utiles'], answer: 0, explanation: 'La catharsis désigne un effet produit par la représentation tragique sur les émotions.' },
      { level: 'Difficile', question: 'Chez Kant, le jugement de goût est :', choices: ['Subjectif et prétend pourtant à être partageable', 'Une démonstration scientifique', 'Un calcul d’utilité', 'Une préférence toujours privée'], answer: 0, explanation: 'Le jugement part d’un sentiment mais réclame l’assentiment d’autrui.' },
      { level: 'Facile', question: 'Le désintéressement esthétique signifie que :', choices: ['Le plaisir ne dépend pas de la possession de l’objet', 'L’œuvre ne demande aucun travail', 'L’artiste ne poursuit aucune intention', 'Le spectateur doit rester indifférent'], answer: 0, explanation: 'Le plaisir esthétique est distingué du désir de posséder ou d’utiliser.' },
      { level: 'Intermédiaire', question: 'Une œuvre engagée :', choices: ['Peut associer prise de position et recherche formelle', 'Est nécessairement dépourvue de valeur artistique', 'Doit toujours convaincre tout le monde', 'Ne peut employer la fiction'], answer: 0, explanation: 'L’engagement n’exclut ni la création ni l’exigence esthétique.' },
      { level: 'Difficile', question: 'La mimesis renvoie principalement à :', choices: ['L’imitation ou représentation', 'La possession', 'La mesure du beau', 'La censure'], answer: 0, explanation: 'Le terme grec désigne l’imitation ou la représentation.' },
      { level: 'Facile', question: 'Une interprétation solide doit :', choices: ['S’appuyer sur des éléments observables de l’œuvre', 'Ignorer la forme', 'Imposer un sens unique sans preuve', 'Se limiter à l’émotion personnelle'], answer: 0, explanation: 'L’analyse doit justifier ses hypothèses à partir de l’œuvre.' },
      { level: 'Intermédiaire', question: 'La technique artistique est :', choices: ['Un ensemble de moyens et de savoir-faire', 'Un obstacle nécessaire à la création', 'Une garantie automatique de beauté', 'Une activité sans apprentissage'], answer: 0, explanation: 'La technique permet de réaliser des choix et peut être renouvelée.' },
      { level: 'Difficile', question: 'L’art peut transformer la perception en :', choices: ['Rendant visibles des aspects négligés', 'Remplaçant toute connaissance', 'Supprimant les différences culturelles', 'Éliminant les émotions'], answer: 0, explanation: 'Une œuvre peut déplacer l’attention et renouveler le regard.' },
      { level: 'Facile', question: 'Le contexte historique d’une œuvre aide à comprendre :', choices: ['Ses codes et les débats auxquels elle répond', 'Uniquement le prix actuel', 'La seule intention privée de l’artiste', 'La vérité scientifique de son sujet'], answer: 0, explanation: 'Le contexte éclaire les conditions de production et de réception.' },
      { level: 'Intermédiaire', question: 'Une œuvre est nécessairement belle au sens classique.', choices: ['Vrai', 'Faux'], answer: 1, explanation: 'L’art peut aussi déranger, choquer ou questionner sans viser la beauté classique.' },
      { level: 'Difficile', question: 'Le jugement esthétique peut prétendre être partagé avec autrui.', choices: ['Vrai', 'Faux'], answer: 0, explanation: 'Chez Kant, le jugement de goût est subjectif mais porte une prétention à l’universalité.' },
      { level: 'Facile', question: 'L’inspiration suffit toujours à produire une œuvre aboutie.', choices: ['Vrai', 'Faux'], answer: 1, explanation: 'La création mobilise aussi du travail, des techniques et des révisions.' },
      { level: 'Intermédiaire', question: 'Une œuvre peut avoir une portée politique.', choices: ['Vrai', 'Faux'], answer: 0, explanation: 'Elle peut critiquer, témoigner, mobiliser une mémoire ou rendre visible une injustice.' },
      { level: 'Difficile', question: 'Plusieurs interprétations d’une œuvre peuvent être défendables.', choices: ['Vrai', 'Faux'], answer: 0, explanation: 'La pluralité est possible si les lectures sont argumentées et liées à l’œuvre.' },
      { level: 'Facile', question: 'Quelle distinction est la plus pertinente ?', choices: ['L’émotion est éprouvée ; le jugement formule une appréciation', 'L’émotion est objective ; le jugement est toujours faux', 'Les deux termes sont synonymes', 'Le jugement ne peut jamais être argumenté'], answer: 0, explanation: 'Une émotion et une appréciation réfléchie ne désignent pas la même opération.' },
      { level: 'Intermédiaire', question: 'Quel exemple illustre le désintéressement esthétique ?', choices: ['Apprécier une mélodie sans vouloir posséder l’instrument', 'Acheter un tableau pour le revendre', 'Choisir un objet uniquement pour son rendement', 'Évaluer une chaise selon son confort'], answer: 0, explanation: 'Le plaisir esthétique est indépendant de l’usage ou de la possession.' },
      { level: 'Difficile', question: 'Pourquoi la copie exacte n’épuise-t-elle pas la création ?', choices: ['L’artiste sélectionne et transforme ce qu’il représente', 'Toute œuvre est une photographie', 'La création exclut toute observation', 'La technique interdit l’interprétation'], answer: 0, explanation: 'La représentation artistique implique des choix et une mise en forme.' },
      { level: 'Facile', question: 'Quel problème philosophique pose la reproduction technique des œuvres ?', choices: ['Le statut de l’original, de l’accès et de l’expérience de l’œuvre', 'La disparition automatique de toute créativité', 'L’impossibilité de diffuser l’art', 'La fin de toute interprétation'], answer: 0, explanation: 'La reproduction modifie les conditions de diffusion et le rapport à l’original.' },
      { level: 'Intermédiaire', question: 'Quelle démarche convient le mieux à une dissertation sur l’art ?', choices: ['Définir les termes, construire un problème et examiner des thèses', 'Aligner des noms d’artistes sans argument', 'Donner seulement son goût personnel', 'Décrire une œuvre sans répondre à la question'], answer: 0, explanation: 'Une dissertation exige une problématisation et un raisonnement organisé.' },
      { level: 'Difficile', question: 'Une œuvre peut-elle être techniquement maîtrisée mais philosophiquement contestable ?', choices: ['Oui, la maîtrise formelle et la portée des idées sont distinctes', 'Non, la technique garantit la vérité', 'Non, toute œuvre exprime une seule morale', 'Oui, mais seulement si elle est ancienne'], answer: 0, explanation: 'La qualité formelle ne suffit pas à établir la vérité ou la valeur morale d’un propos.' },
    ],
    exercises: [
      { title: 'Distinguer beau et artistique', level: 'Facile', statement: 'Explique en 5 à 8 lignes pourquoi une œuvre qui dérange peut néanmoins être une œuvre d’art.', correction: 'Définir l’art sans le réduire au beau classique ; montrer qu’une œuvre peut provoquer, critiquer ou renouveler la perception ; illustrer par un exemple précis.', skills: ['Définition', 'Argumentation'] },
      { title: 'Analyser une image publicitaire', level: 'Facile', statement: 'Choisis une publicité connue. Identifie son objectif, ses procédés visuels et demande-toi si elle peut aussi être étudiée comme une création esthétique.', correction: 'Distinguer fonction persuasive et organisation formelle. Décrire cadrage, couleurs, composition et symboles avant de discuter la possibilité d’une valeur esthétique.', skills: ['Observation', 'Distinction conceptuelle'] },
      { title: 'Platon et les apparences', level: 'Intermédiaire', statement: 'Explique pourquoi une image réaliste ne garantit pas la connaissance de ce qu’elle représente.', correction: 'Une image donne une apparence construite. Elle peut sélectionner ou déformer ; connaître suppose de dépasser la simple ressemblance et d’examiner ce qui est représenté.', skills: ['Mimesis', 'Vérité'] },
      { title: 'Kant et le goût', level: 'Intermédiaire', statement: 'Formule le problème contenu dans l’affirmation : « Cette œuvre est belle ».', correction: 'Le jugement exprime un plaisir personnel, mais la formulation semble attendre l’accord d’autrui. Il faut donc expliquer comment un sentiment subjectif peut prétendre être communicable.', skills: ['Jugement esthétique', 'Problématisation'] },
      { title: 'Élaborer un plan', level: 'Intermédiaire', statement: 'Construis un plan en trois moments pour : « L’art doit-il imiter la nature ? ».', correction: 'I. L’imitation permet de représenter et de rendre le monde intelligible. II. Une copie servile ne suffit pas à créer ; l’artiste transforme. III. L’art peut inventer des formes qui révèlent autrement le réel. Chaque partie doit être argumentée et illustrée.', skills: ['Plan', 'Dialectique'] },
      { title: 'Technique et inspiration', level: 'Facile', statement: 'Donne deux arguments montrant que la création ne se réduit pas à l’inspiration.', correction: 'La création suppose apprentissage des moyens, essais, corrections et décisions. L’inspiration peut déclencher une idée mais ne remplace pas le travail de réalisation.', skills: ['Création', 'Technique'] },
      { title: 'Art et politique', level: 'Intermédiaire', statement: 'Montre comment une œuvre peut intervenir dans un débat politique sans devenir un simple tract.', correction: 'Elle peut mobiliser des symboles, une narration, une mise en scène ou une émotion. Sa forme construit une expérience qui dépasse la transmission directe d’un slogan.', skills: ['Engagement', 'Autonomie'] },
      { title: 'Pluralité des interprétations', level: 'Intermédiaire', statement: 'Deux personnes proposent des lectures différentes d’un tableau. À quelle condition les deux lectures peuvent-elles être défendables ?', correction: 'Elles doivent s’appuyer sur des éléments visibles, expliciter leurs hypothèses et rester cohérentes avec l’ensemble de l’œuvre. La pluralité n’autorise pas l’arbitraire.', skills: ['Interprétation', 'Argumentation'] },
      { title: 'Reproduction et original', level: 'Difficile', statement: 'Discute l’idée que reproduire une œuvre rend toujours l’expérience artistique identique à celle de l’original.', correction: 'La reproduction élargit l’accès et permet de nouvelles expériences, mais elle modifie l’échelle, le support, le contexte et le rapport à l’objet original. La réponse doit distinguer accès à l’image et expérience de l’œuvre située.', skills: ['Reproduction', 'Nuance'] },
      { title: 'Mini-dissertation', level: 'Difficile', statement: 'Rédige une introduction problématisée pour : « Peut-on juger une œuvre d’art ? ».', correction: 'Définir juger comme apprécier et évaluer ; distinguer préférence personnelle et jugement argumenté ; poser la tension entre subjectivité du goût et discussion rationnelle ; annoncer une progression qui examine les critères possibles sans réduire l’art à une règle mécanique.', skills: ['Dissertation', 'Problématisation'] },
    ],
    revisionSheets: [{ title: 'Repères essentiels — L’art', summary: ['L’art est une création de formes sensibles.', 'Le jugement esthétique articule sentiment personnel et prétention au partage.', 'La création suppose technique et travail.', 'Les fonctions de l’art sont multiples.'], mustKnow: ['Mimesis : imitation ou représentation.', 'Catharsis : effet de clarification des émotions dans la tragédie.', 'Désintéressement : plaisir indépendant de la possession ou de l’utilité.'], methods: ['Décrire avant d’interpréter.', 'Justifier chaque lecture par un élément précis.', 'Utiliser les références pour soutenir une argumentation.'] }],
    sources: [{ title: 'Programme de philosophie en terminale générale', institution: 'Ministère de l’Éducation nationale — Éduscol', url: 'https://isoprod.eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt', consultedAt: '2026-11-01', supports: ['Notion de l’art et démarche philosophique'] }],
    sourceNote: 'Ressource de travail rédigée à partir du périmètre officiel de philosophie en terminale. Les références philosophiques sont des repères à approfondir avec les textes étudiés en classe ; brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'philo-bonheur': {
    title: 'Le bonheur',
    objectives: ["Distinguer bonheur, plaisir et satisfaction.", "Comparer des conceptions antiques et modernes de la vie heureuse.", "Construire une réflexion argumentée sur la possibilité et les limites de la recherche du bonheur."],
    course: [
      { heading: "1. Bonheur et plaisir", body: ["Le plaisir désigne généralement une satisfaction ponctuelle ; le bonheur renvoie à une appréciation plus globale de l’existence. Les deux notions peuvent être liées sans être identiques. Une succession de plaisirs ne garantit pas nécessairement une vie heureuse.", "La recherche du bonheur soulève une difficulté : chacun en propose une représentation différente, et les circonstances ne dépendent pas toutes de notre volonté. Il faut donc distinguer les conditions extérieures, les désirs et la manière de conduire sa vie."] },
      { heading: "2. Épicure : hiérarchiser les désirs", body: ["Épicure distingue les désirs naturels et nécessaires, les désirs naturels mais non nécessaires et les désirs vains. Cette classification aide à éviter de rendre sa tranquillité dépendante d’objets difficiles à obtenir ou sans limite.", "La prudence consiste à évaluer les conséquences : certains plaisirs doivent être refusés s’ils entraînent des douleurs plus grandes ; certaines difficultés peuvent être acceptées si elles permettent une satisfaction plus importante. L’ataraxie désigne la tranquillité de l’âme."] },
      { heading: "3. Les stoïciens : distinguer ce qui dépend de nous", body: ["Les stoïciens invitent à distinguer nos jugements et nos choix, sur lesquels nous pouvons travailler, des événements extérieurs que nous ne maîtrisons pas entièrement. Cette distinction ne signifie pas l’indifférence : elle vise à orienter l’effort vers notre conduite.", "La liberté intérieure suppose un examen de nos représentations. Un événement ne détermine pas mécaniquement notre jugement ; nous pouvons apprendre à ne pas ajouter à une difficulté une souffrance produite par des attentes irréalistes."] },
      { heading: "4. Aristote : bonheur et vertu", body: ["Pour Aristote, le bonheur est une activité de l’âme conforme à la vertu au cours d’une vie complète. Il ne se réduit donc pas à une émotion agréable ou à une possession. La vertu se forme par l’habitude et l’exercice.", "Le juste milieu est une mesure adaptée à la situation, déterminée par la raison pratique. Il ne s’agit pas d’une moyenne mathématique : le courage, par exemple, se distingue à la fois de la lâcheté et de la témérité. L’amitié et certaines conditions extérieures contribuent également à une vie accomplie."] },
      { heading: "5. Bonheur, morale et politique", body: ["Kant souligne que le bonheur est un idéal variable selon les individus. Il ne peut donc pas fournir à lui seul une règle morale universelle. Agir par devoir se distingue d’agir uniquement pour obtenir une satisfaction ou une récompense.", "La réflexion politique porte sur les conditions d’une vie digne : sécurité, droits, éducation et possibilités réelles. Elle doit éviter d’imposer une conception unique du bonheur, car les personnes peuvent poursuivre des projets de vie différents."] },
    ],
    keyPoints: ["Le plaisir est ponctuel ; le bonheur désigne une satisfaction plus globale.", "Épicure hiérarchise les désirs et évalue les conséquences des choix.", "L’ataraxie est la tranquillité de l’âme.", "Les stoïciens distinguent ce qui dépend de nous de ce qui n’en dépend pas.", "Chez Aristote, le bonheur est une activité conforme à la vertu.", "Le juste milieu dépend de la situation et de la raison pratique.", "Pour Kant, le bonheur ne constitue pas une règle morale universelle.", "La politique doit garantir des conditions dignes sans imposer une vie idéale unique."],
    method: ["Définir précisément bonheur, plaisir, désir et vertu.", "Repérer une tension : maîtrise personnelle et dépendance aux circonstances.", "Construire une problématique qui ne se réduit pas à une opinion.", "Comparer les thèses en expliquant leurs présupposés et leurs limites.", "Illustrer chaque argument par un exemple analysé.", "Conclure en répondant explicitement au problème posé."],
    flashcards: [
      { front: "Qu’est-ce que le bonheur ?", back: "Un état durable de satisfaction ou d’accomplissement, à distinguer d’un plaisir ponctuel." },
      { front: "Le bonheur est-il identique au plaisir ?", back: "Non : le plaisir est généralement ponctuel, tandis que le bonheur désigne une satisfaction plus globale et durable." },
      { front: "Qu’est-ce que l’hédonisme ?", back: "Une doctrine qui accorde une place centrale au plaisir dans la recherche d’une vie heureuse." },
      { front: "Quelle distinction Épicure établit-il entre les désirs ?", back: "Il distingue les désirs naturels et nécessaires, naturels mais non nécessaires, et vains." },
      { front: "Que signifie l’ataraxie ?", back: "L’absence de trouble de l’âme, recherchée notamment dans la philosophie épicurienne." },
      { front: "Quel rôle joue la prudence chez Épicure ?", back: "Elle aide à choisir les plaisirs et à éviter ceux qui entraînent davantage de souffrance." },
      { front: "Pourquoi faut-il parfois refuser un plaisir ?", back: "Parce que ses conséquences peuvent produire une douleur ou une dépendance plus importante." },
      { front: "Qu’est-ce que le stoïcisme ?", back: "Une philosophie qui invite à distinguer ce qui dépend de nous de ce qui n’en dépend pas." },
      { front: "Que signifie distinguer ce qui dépend de nous ?", back: "Reconnaître que nos jugements et nos choix relèvent de nous, contrairement à de nombreux événements extérieurs." },
      { front: "Le bonheur dépend-il entièrement des circonstances ?", back: "Les circonstances comptent, mais certaines philosophies soulignent le rôle de nos jugements et de notre conduite." },
      { front: "Qu’est-ce que l’eudémonisme ?", back: "Une conception qui fait du bonheur ou de l’accomplissement le but de la vie humaine." },
      { front: "Quelle place Aristote accorde-t-il à la vertu ?", back: "La vertu est essentielle à une vie accomplie ; le bonheur s’inscrit dans une activité conforme à la vertu." },
      { front: "Le bonheur est-il un état passif chez Aristote ?", back: "Non : il se comprend comme une activité et une manière de vivre, pas seulement comme un sentiment." },
      { front: "Qu’est-ce que la vertu chez Aristote ?", back: "Une disposition acquise à choisir de manière équilibrée, guidée par la raison." },
      { front: "Que désigne le juste milieu ?", back: "Une mesure adaptée à la situation, entre deux excès, déterminée par la raison pratique." },
      { front: "Pourquoi l’amitié compte-t-elle dans la vie heureuse ?", back: "Elle participe à une vie humaine accomplie par le partage, la confiance et la réciprocité." },
      { front: "Le bonheur peut-il être individuel et social ?", back: "Oui : il concerne une existence personnelle mais dépend aussi de relations et de conditions collectives." },
      { front: "Quel problème pose la recherche du bonheur comme objectif ?", back: "Elle peut devenir une injonction et faire oublier la diversité des conceptions de la vie bonne." },
      { front: "Le bonheur peut-il être garanti ?", back: "Aucune méthode ne garantit un bonheur permanent ; les événements et les vulnérabilités humaines limitent cette promesse." },
      { front: "Qu’est-ce qu’un désir vain ?", back: "Un désir sans limite claire, souvent nourri par l’opinion ou la comparaison sociale." },
      { front: "Pourquoi la comparaison sociale peut-elle nuire au bonheur ?", back: "Elle peut rendre la satisfaction dépendante de critères extérieurs et toujours changeants." },
      { front: "Quel lien entre liberté et bonheur ?", back: "La liberté permet de choisir sa conduite, mais elle implique aussi responsabilité et limites." },
      { front: "La richesse suffit-elle au bonheur ?", back: "Non : elle peut faciliter certaines conditions de vie sans garantir l’amitié, la santé, le sens ou la tranquillité." },
      { front: "Qu’est-ce que le bonheur chez Kant ?", back: "Kant le présente comme un idéal de l’imagination, variable selon les individus, et non comme un principe moral universel." },
      { front: "Morale et bonheur sont-ils identiques chez Kant ?", back: "Non : agir moralement consiste à agir par devoir, et non simplement à rechercher son avantage ou son bonheur." },
      { front: "Qu’est-ce que le bonheur collectif ?", back: "Une notion politique discutée qui concerne les conditions permettant à chacun de mener une vie digne." },
      { front: "Pourquoi la politique ne peut-elle imposer une conception unique du bonheur ?", back: "Parce que les individus peuvent raisonnablement poursuivre des formes de vie différentes." },
      { front: "Quel rôle joue la maîtrise des désirs ?", back: "Elle peut réduire la dépendance à des satisfactions instables et aider à hiérarchiser ses attentes." },
      { front: "Le bonheur exclut-il toute difficulté ?", back: "Non : une vie heureuse peut comporter des épreuves, des efforts et des frustrations." },
      { front: "Comment traiter un sujet sur le bonheur ?", back: "Définir bonheur et plaisir, identifier les conditions possibles, puis discuter la possibilité et la légitimité d’une recherche universelle." },
    ],
    quiz: [
      { level: 'Facile', question: "Dans la philosophie épicurienne, l’ataraxie désigne :", choices: ["L’absence de trouble de l’âme", "La recherche de richesse", "La gloire publique", "La suppression de toute activité"], answer: 0, explanation: "L’ataraxie désigne la tranquillité de l’âme." },
      { level: 'Facile', question: "Pour Épicure, la prudence sert principalement à :", choices: ["Choisir les plaisirs selon leurs conséquences", "Accumuler tous les plaisirs possibles", "Éviter toute relation sociale", "Rechercher la gloire"], answer: 0, explanation: "La prudence compare les conséquences des choix et évite les souffrances plus grandes." },
      { level: 'Facile', question: "La distinction stoïcienne fondamentale porte sur :", choices: ["Ce qui dépend de nous et ce qui n’en dépend pas", "Les plaisirs naturels et artificiels uniquement", "Les riches et les pauvres", "Le corps et les arts"], answer: 0, explanation: "Le stoïcisme invite à concentrer son effort sur nos jugements et nos choix." },
      { level: 'Facile', question: "Chez Aristote, le bonheur est surtout :", choices: ["Une activité conforme à la vertu", "Une émotion agréable passagère", "Une accumulation de biens", "Une absence totale d’effort"], answer: 0, explanation: "Aristote comprend le bonheur comme une activité accomplie selon la vertu." },
      { level: 'Facile', question: "Le juste milieu aristotélicien est :", choices: ["Une mesure adaptée déterminée par la raison", "Une moyenne mathématique identique pour tous", "Le refus de toute émotion", "Un compromis systématique"], answer: 0, explanation: "Le juste milieu dépend de la situation et du jugement pratique." },
      { level: 'Facile', question: "La vertu aristotélicienne est principalement :", choices: ["Une disposition acquise", "Un talent inné immuable", "Une règle juridique", "Un plaisir immédiat"], answer: 0, explanation: "La vertu se forme par l’habitude et l’exercice." },
      { level: 'Facile', question: "Pour Kant, le bonheur est :", choices: ["Un idéal variable selon les individus", "Une règle morale universelle précise", "Une récompense toujours immédiate", "Une connaissance scientifique"], answer: 0, explanation: "Les conceptions du bonheur varient et ne fournissent pas une loi morale universelle." },
      { level: 'Facile', question: "Agir par devoir chez Kant signifie :", choices: ["Agir par respect pour la loi morale", "Agir uniquement pour être récompensé", "Suivre systématiquement son intérêt", "Éviter toute responsabilité"], answer: 0, explanation: "La valeur morale de l’action tient au motif du devoir." },
      { level: 'Facile', question: "Un désir vain est généralement :", choices: ["Sans limite claire et nourri par l’opinion", "Nécessaire à la conservation", "Toujours facile à satisfaire", "Identique à un besoin vital"], answer: 0, explanation: "Les désirs vains peuvent se prolonger sans terme naturel." },
      { level: 'Facile', question: "La richesse peut contribuer au bonheur, mais :", choices: ["Elle ne le garantit pas à elle seule", "Elle garantit l’amitié", "Elle supprime toute souffrance", "Elle rend inutile la liberté"], answer: 0, explanation: "Les ressources matérielles ne suffisent pas à assurer une vie accomplie." },
      { level: 'Intermédiaire', question: "L’hédonisme accorde une place centrale :", choices: ["Au plaisir", "À la gloire", "À l’obéissance politique", "À la connaissance mathématique"], answer: 0, explanation: "L’hédonisme fait du plaisir un élément central de la vie bonne." },
      { level: 'Intermédiaire', question: "L’eudémonisme fait du bonheur :", choices: ["Un accomplissement ou une fin de la vie humaine", "Une sensation brève seulement", "Une obligation juridique", "Un bien exclusivement matériel"], answer: 0, explanation: "L’eudémonisme réfléchit au bonheur comme accomplissement de l’existence." },
      { level: 'Intermédiaire', question: "Pourquoi refuser parfois un plaisir ?", choices: ["Parce qu’il peut entraîner une souffrance plus grande", "Parce que tout plaisir est mauvais", "Parce que le bonheur interdit les sensations", "Parce que le plaisir est toujours immoral"], answer: 0, explanation: "Le calcul des conséquences peut conduire à différer ou refuser un plaisir." },
      { level: 'Intermédiaire', question: "La comparaison sociale peut fragiliser la satisfaction car elle :", choices: ["Rend les attentes dépendantes de critères changeants", "Supprime les désirs", "Garantit une estime stable", "Élimine les inégalités"], answer: 0, explanation: "La comparaison peut déplacer sans cesse les critères de satisfaction." },
      { level: 'Intermédiaire', question: "L’amitié chez Aristote :", choices: ["Participe à une vie humaine accomplie", "Est inutile à la vie bonne", "Se réduit à un échange marchand", "Remplace toute vertu"], answer: 0, explanation: "L’amitié est une composante importante de la vie heureuse." },
      { level: 'Intermédiaire', question: "Le bonheur collectif soulève notamment la question :", choices: ["Des conditions communes d’une vie digne", "De l’obligation d’avoir les mêmes goûts", "De l’interdiction des choix individuels", "De la disparition des institutions"], answer: 0, explanation: "La question politique porte sur les conditions communes sans uniformiser les projets de vie." },
      { level: 'Difficile', question: "La recherche du bonheur peut devenir problématique lorsqu’elle :", choices: ["Se transforme en injonction permanente", "Reconnaît la diversité des vies", "Admet les limites humaines", "Distingue plaisir et satisfaction"], answer: 0, explanation: "L’injonction à être heureux peut culpabiliser et nier les difficultés réelles." },
      { level: 'Difficile', question: "Le bonheur exclut-il les épreuves ?", choices: ["Non, une vie heureuse peut comporter des difficultés", "Oui, toute difficulté annule le bonheur", "Oui, le bonheur est une émotion constante", "Non, mais seulement chez les stoïciens"], answer: 0, explanation: "Le bonheur n’implique pas une existence sans obstacle." },
      { level: 'Difficile', question: "La liberté contribue au bonheur parce qu’elle :", choices: ["Permet de choisir et d’assumer une conduite", "Supprime toutes les contraintes naturelles", "Garantit la réussite de chaque projet", "Évite toute responsabilité"], answer: 0, explanation: "La liberté rend possible le choix mais engage aussi la responsabilité." },
      { level: 'Difficile', question: "Dans une dissertation sur le bonheur, il faut d’abord :", choices: ["Définir les notions et faire apparaître un problème", "Énumérer des citations sans les expliquer", "Donner son opinion sans argument", "Raconter uniquement une expérience personnelle"], answer: 0, explanation: "La définition et la problématisation construisent le raisonnement philosophique." },
    ],
    exercises: [
      { title: "Distinguer plaisir et bonheur", level: 'Facile', statement: "Expliquez en quelques lignes pourquoi un plaisir intense ne suffit pas nécessairement à définir le bonheur.", correction: "Un plaisir peut être bref et suivi d’insatisfaction. Le bonheur désigne une appréciation plus globale et durable de l’existence. Il faut donc distinguer l’intensité d’un moment et l’accomplissement d’une vie.", skills: ["Définition", "Distinction conceptuelle"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Analyser un choix épicurien", level: 'Intermédiaire', statement: "Une activité procure une satisfaction immédiate mais entraîne ensuite une fatigue importante. Comment raisonner dans une perspective épicurienne ?", correction: "Il faut comparer le plaisir immédiat et ses conséquences. La prudence peut conduire à limiter ce plaisir si les troubles qui suivent sont plus importants que la satisfaction obtenue.", skills: ["Épicurisme", "Conséquences"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Appliquer la distinction stoïcienne", level: 'Facile', statement: "Un élève ne contrôle pas le résultat d’une évaluation, mais peut préparer son travail. Distinguez ce qui dépend de lui et ce qui n’en dépend pas.", correction: "La préparation, l’attention et les efforts dépendent de lui. La note finale dépend aussi de facteurs extérieurs. La démarche stoïcienne invite à agir sérieusement sur le premier ensemble sans prétendre maîtriser le second.", skills: ["Stoïcisme", "Liberté"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Expliquer le juste milieu", level: 'Intermédiaire', statement: "Montrez pourquoi le courage ne se confond ni avec la lâcheté ni avec la témérité.", correction: "Le courage consiste à affronter un danger de manière raisonnable. La lâcheté est un défaut d’audace ; la témérité est un excès qui néglige le danger. Le juste milieu est une réponse ajustée, non une moyenne mécanique.", skills: ["Aristote", "Vertu"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Discuter richesse et bonheur", level: 'Intermédiaire', statement: "Construisez deux arguments nuancés sur le rôle de la richesse dans le bonheur.", correction: "La richesse peut sécuriser les besoins matériels et ouvrir des possibilités. Mais elle ne garantit ni relations authentiques, ni santé, ni sens de l’existence ; son rôle est donc important sans être suffisant.", skills: ["Argumentation", "Nuance"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Analyser la morale kantienne", level: 'Difficile', statement: "Pourquoi une action accomplie uniquement pour obtenir une récompense ne possède-t-elle pas, chez Kant, la même valeur morale qu’une action accomplie par devoir ?", correction: "Dans le premier cas, le motif est l’intérêt attendu. Dans le second, l’action est accomplie par respect pour la loi morale. Kant distingue ainsi la conformité extérieure à la règle et la moralité du motif.", skills: ["Kant", "Devoir"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Construire une problématique", level: 'Difficile', statement: "Proposez une problématique pour le sujet : « Peut-on décider d’être heureux ? »", correction: "Une problématique peut opposer la volonté de conduire sa vie et la part d’événements que l’on ne maîtrise pas. On peut agir sur ses désirs et ses choix, mais on ne commande pas entièrement aux circonstances ni aux émotions.", skills: ["Problématisation", "Plan"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Évaluer une thèse", level: 'Intermédiaire', statement: "Évaluez l’affirmation : « Il suffit de satisfaire tous ses désirs pour être heureux. »", correction: "La thèse confond satisfaction et bonheur. Certains désirs sont contradictoires, illimités ou produisent des effets négatifs. Il faut donc examiner leur nature et hiérarchiser les choix.", skills: ["Esprit critique", "Désir"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Rédiger une réponse argumentée", level: 'Difficile', statement: "Répondez à la question : « Le bonheur dépend-il de nous ? » en mobilisant deux perspectives philosophiques.", correction: "Une réponse nuancée peut mobiliser les stoïciens, qui distinguent nos jugements des événements extérieurs, puis Aristote, pour qui l’accomplissement dépend de l’activité vertueuse mais aussi de certaines conditions de vie. La conclusion distingue maîtrise de soi et maîtrise totale du monde.", skills: ["Comparaison", "Synthèse"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
      { title: "Analyser un exemple contemporain", level: 'Intermédiaire', statement: "Une personne compare constamment sa vie à des images idéalisées diffusées en ligne. Expliquez le problème philosophique posé.", correction: "La comparaison peut transformer des représentations partielles en normes de satisfaction. Elle entretient des désirs sans limite et rend le jugement de sa propre vie dépendant d’autrui. Il faut interroger les critères de la vie bonne.", skills: ["Désir", "Opinion"], hints: ['Définissez les notions.', 'Justifiez chaque étape du raisonnement.'] },
    ],
    sources: [{ title: 'Programme de philosophie en terminale générale', institution: 'Ministère de l’Éducation nationale — Éduscol', url: 'https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt', consultedAt: '2026-11-01', supports: ['Notions et exigences de l’enseignement de philosophie en terminale'] }],
    sourceNote: 'Ressource pédagogique originale construite à partir du programme officiel. Les formulations résument des positions philosophiques et ne remplacent pas l’étude des textes.',
    validationStatus: 'draft',
  },
  'philo-conscience': {
  title: "La conscience",
  objectives: [
    "Définir les concepts essentiels de la notion « la conscience » et les distinguer des notions proches.",
    "Comparer plusieurs analyses philosophiques en restituant leurs arguments sans les réduire à des slogans.",
    "Construire une problématique et une argumentation nuancée mobilisant des exemples pertinents."
  ],
  course: [
    {
      heading: "1. Définir et problématiser la conscience",
      body: [
        "La notion de la conscience ne désigne pas un objet simple. Elle ouvre plusieurs questions qu’il faut distinguer avant de construire une réponse. Une définition initiale sert de point de départ, mais le travail philosophique consiste à en éprouver les limites et les présupposés.",
        "Il faut éviter de transformer la notion en thème descriptif : une dissertation demande de faire apparaître une difficulté conceptuelle, puis d’examiner plusieurs réponses argumentées."
      ]
    },
    {
      heading: "2. Repères et distinctions",
      body: [
        "Les distinctions conceptuelles permettent d’éviter les équivoques. Il convient notamment de préciser le sens des mots, de distinguer les niveaux individuel, moral, social et politique lorsque cela est pertinent, et de ne pas confondre une description avec une justification.",
        "Une opposition philosophique n’est pas toujours une alternative absolue : les deux termes peuvent parfois se compléter ou dépendre de conditions différentes."
      ]
    },
    {
      heading: "3. Auteurs et thèses",
      body: [
        "Les auteurs doivent être mobilisés pour reconstruire un raisonnement : une thèse répond à une question, s’appuie sur des raisons et rencontre des objections. Citer un nom sans expliquer l’argument ne constitue pas une démonstration.",
        "Comparer des auteurs suppose de restituer leurs problèmes et leurs concepts dans leur contexte. Une formule isolée ne suffit pas à résumer une œuvre."
      ]
    },
    {
      heading: "4. Exemples et objections",
      body: [
        "Un exemple sert à éprouver une idée, non à remplacer l’argument. Il faut préciser ce qu’il montre, les limites de l’analogie et les conditions dans lesquelles le raisonnement reste valable.",
        "Une objection sérieuse vise une prémisse ou une conséquence. La réponse doit l’examiner plutôt que l’écarter par affirmation."
      ]
    },
    {
      heading: "5. Construire une réflexion",
      body: [
        "Une bonne copie définit les termes, formule une tension, construit une progression et justifie chaque étape. Le plan doit répondre à la difficulté du sujet et non juxtaposer des auteurs.",
        "La conclusion apporte une réponse précise, rappelle les conditions de sa validité et évite d’ajouter un nouvel argument majeur."
      ]
    }
  
      ,{ heading: 'Conscience de soi et connaissance de soi', body: ['La conscience désigne la capacité d’éprouver des états, de se rapporter à soi et de prendre connaissance de certains aspects du monde. La conscience immédiate accompagne l’expérience, tandis que la réflexion permet de faire de soi-même un objet de pensée. Ces deux dimensions ne garantissent pas une connaissance complète de soi.', 'Descartes fait du cogito une certitude première : même si je doute, je ne peux douter que je pense au moment où je doute. Cette certitude établit l’existence du sujet pensant, mais elle ne résout pas toutes les questions sur l’identité personnelle, le corps, la mémoire et les relations sociales.', 'La connaissance de soi se construit aussi à travers le temps, les actes, les souvenirs et le regard d’autrui. Elle peut être partielle et révisable. Une réflexion philosophique doit distinguer être conscient, se connaître, être responsable et être identique à soi dans la durée.'] }],
  keyPoints: [
    "Conscience : Présence à soi et au monde permettant de percevoir, penser et se rapporter à ses actes.",
    "Conscience immédiate : Connaissance spontanée de ses états au moment où ils sont vécus.",
    "Conscience réflexive : Capacité de prendre ses propres pensées et actions pour objets de réflexion.",
    "Introspection : Examen par lequel un sujet observe ses propres états mentaux.",
    "Sujet : Être auquel on attribue pensées, expériences et actes.",
    "Identité personnelle : Continuité par laquelle une personne se reconnaît comme la même à travers le temps.",
    "Mémoire : Capacité de conserver et de rappeler des expériences passées.",
    "Perception : Organisation des données sensibles par laquelle un objet apparaît à un sujet.",
    "Attention : Orientation sélective de l’esprit vers un objet ou une tâche.",
    "Inconscience : Absence de conscience d’un état ou d’un événement, selon le contexte.",
    "Descartes : Fonde la certitude du sujet pensant dans le cogito : penser atteste l’existence du sujet.",
    "Cogito : Certitude selon laquelle, même si je doute, je ne peux douter que je pense."
  ],
  method: [
    "Analyser les termes du sujet et repérer leurs différents sens.",
    "Formuler une tension réelle sous la forme d’une question problématisée.",
    "Définir les concepts sans supposer la réponse dès l’introduction.",
    "Construire chaque partie autour d’une thèse et d’arguments explicites.",
    "Expliquer précisément les auteurs et confronter leurs positions.",
    "Utiliser des exemples analysés et non de simples illustrations.",
    "Présenter une objection forte puis y répondre de manière raisonnée.",
    "Conclure en répondant au sujet avec les nuances établies."
  ],
  flashcards: [
    {
      front: "Conscience",
      back: "Présence à soi et au monde permettant de percevoir, penser et se rapporter à ses actes."
    },
    {
      front: "Conscience immédiate",
      back: "Connaissance spontanée de ses états au moment où ils sont vécus."
    },
    {
      front: "Conscience réflexive",
      back: "Capacité de prendre ses propres pensées et actions pour objets de réflexion."
    },
    {
      front: "Introspection",
      back: "Examen par lequel un sujet observe ses propres états mentaux."
    },
    {
      front: "Sujet",
      back: "Être auquel on attribue pensées, expériences et actes."
    },
    {
      front: "Identité personnelle",
      back: "Continuité par laquelle une personne se reconnaît comme la même à travers le temps."
    },
    {
      front: "Mémoire",
      back: "Capacité de conserver et de rappeler des expériences passées."
    },
    {
      front: "Perception",
      back: "Organisation des données sensibles par laquelle un objet apparaît à un sujet."
    },
    {
      front: "Attention",
      back: "Orientation sélective de l’esprit vers un objet ou une tâche."
    },
    {
      front: "Inconscience",
      back: "Absence de conscience d’un état ou d’un événement, selon le contexte."
    },
    {
      front: "Descartes",
      back: "Fonde la certitude du sujet pensant dans le cogito : penser atteste l’existence du sujet."
    },
    {
      front: "Cogito",
      back: "Certitude selon laquelle, même si je doute, je ne peux douter que je pense."
    },
    {
      front: "Locke",
      back: "Relie l’identité personnelle à la continuité de la conscience et de la mémoire."
    },
    {
      front: "Hume",
      back: "Analyse le moi comme un faisceau de perceptions plutôt que comme une substance simple."
    },
    {
      front: "Sartre",
      back: "Décrit la conscience comme intentionnelle : elle est toujours conscience de quelque chose."
    },
    {
      front: "Intentionnalité",
      back: "Caractère de la conscience d’être dirigée vers un objet."
    },
    {
      front: "Réflexion",
      back: "Retour de la pensée sur ses propres opérations ou présupposés."
    },
    {
      front: "Connaissance de soi",
      back: "Compréhension de ses pensées, motifs, limites et dispositions."
    },
    {
      front: "Transparence à soi",
      back: "Idée selon laquelle le sujet connaîtrait immédiatement et complètement ses états."
    },
    {
      front: "Opacité à soi",
      back: "Limite de la connaissance que le sujet possède de ses propres motifs."
    },
    {
      front: "Responsabilité",
      back: "Capacité à répondre de ses actes et à en reconnaître les conséquences."
    },
    {
      front: "Liberté",
      back: "Pouvoir d’agir ou de choisir, dont les conditions doivent être examinées."
    },
    {
      front: "Aliénation",
      back: "Situation dans laquelle un sujet ne se reconnaît plus dans ses actes ou ses conditions d’existence."
    },
    {
      front: "Habitude",
      back: "Disposition acquise qui rend certaines conduites régulières et parfois peu conscientes."
    },
    {
      front: "Culpabilité",
      back: "Sentiment ou jugement par lequel un sujet se reproche un acte."
    },
    {
      front: "Authenticité",
      back: "Effort pour assumer lucidement ses choix plutôt que se dissimuler leur portée."
    },
    {
      front: "Phénoménologie",
      back: "Démarche qui décrit les structures de l’expérience telle qu’elle apparaît."
    },
    {
      front: "Corps propre",
      back: "Corps vécu comme point de vue et moyen d’accès au monde."
    },
    {
      front: "Conscience morale",
      back: "Capacité de juger ses actes selon des normes et des valeurs."
    },
    {
      front: "Limites de l’introspection",
      back: "L’observation de soi peut être partielle, reconstruite et influencée par des attentes."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Présence à soi et au monde permettant de percevoir, penser et se rapporter à ses actes. » ?",
      choices: [
        "Conscience",
        "Identité personnelle",
        "Cogito",
        "Opacité à soi"
      ],
      answer: 0,
      explanation: "Conscience : Présence à soi et au monde permettant de percevoir, penser et se rapporter à ses actes."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Connaissance spontanée de ses états au moment où ils sont vécus. » ?",
      choices: [
        "Mémoire",
        "Conscience immédiate",
        "Locke",
        "Responsabilité"
      ],
      answer: 1,
      explanation: "Conscience immédiate : Connaissance spontanée de ses états au moment où ils sont vécus."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Capacité de prendre ses propres pensées et actions pour objets de réflexion. » ?",
      choices: [
        "Perception",
        "Hume",
        "Conscience réflexive",
        "Liberté"
      ],
      answer: 2,
      explanation: "Conscience réflexive : Capacité de prendre ses propres pensées et actions pour objets de réflexion."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Examen par lequel un sujet observe ses propres états mentaux. » ?",
      choices: [
        "Attention",
        "Sartre",
        "Aliénation",
        "Introspection"
      ],
      answer: 3,
      explanation: "Introspection : Examen par lequel un sujet observe ses propres états mentaux."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Être auquel on attribue pensées, expériences et actes. » ?",
      choices: [
        "Sujet",
        "Inconscience",
        "Intentionnalité",
        "Habitude"
      ],
      answer: 0,
      explanation: "Sujet : Être auquel on attribue pensées, expériences et actes."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Continuité par laquelle une personne se reconnaît comme la même à travers le temps. » ?",
      choices: [
        "Descartes",
        "Identité personnelle",
        "Réflexion",
        "Culpabilité"
      ],
      answer: 1,
      explanation: "Identité personnelle : Continuité par laquelle une personne se reconnaît comme la même à travers le temps."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Capacité de conserver et de rappeler des expériences passées. » ?",
      choices: [
        "Cogito",
        "Connaissance de soi",
        "Mémoire",
        "Authenticité"
      ],
      answer: 2,
      explanation: "Mémoire : Capacité de conserver et de rappeler des expériences passées."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Organisation des données sensibles par laquelle un objet apparaît à un sujet. » ?",
      choices: [
        "Locke",
        "Transparence à soi",
        "Phénoménologie",
        "Perception"
      ],
      answer: 3,
      explanation: "Perception : Organisation des données sensibles par laquelle un objet apparaît à un sujet."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Orientation sélective de l’esprit vers un objet ou une tâche. » ?",
      choices: [
        "Attention",
        "Hume",
        "Opacité à soi",
        "Corps propre"
      ],
      answer: 0,
      explanation: "Attention : Orientation sélective de l’esprit vers un objet ou une tâche."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Absence de conscience d’un état ou d’un événement, selon le contexte. » ?",
      choices: [
        "Sartre",
        "Inconscience",
        "Responsabilité",
        "Conscience morale"
      ],
      answer: 1,
      explanation: "Inconscience : Absence de conscience d’un état ou d’un événement, selon le contexte."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Fonde la certitude du sujet pensant dans le cogito : penser atteste l’existence du sujet. » ?",
      choices: [
        "Intentionnalité",
        "Liberté",
        "Descartes",
        "Limites de l’introspection"
      ],
      answer: 2,
      explanation: "Descartes : Fonde la certitude du sujet pensant dans le cogito : penser atteste l’existence du sujet."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Certitude selon laquelle, même si je doute, je ne peux douter que je pense. » ?",
      choices: [
        "Réflexion",
        "Aliénation",
        "Conscience",
        "Cogito"
      ],
      answer: 3,
      explanation: "Cogito : Certitude selon laquelle, même si je doute, je ne peux douter que je pense."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Relie l’identité personnelle à la continuité de la conscience et de la mémoire. » ?",
      choices: [
        "Locke",
        "Connaissance de soi",
        "Habitude",
        "Conscience immédiate"
      ],
      answer: 0,
      explanation: "Locke : Relie l’identité personnelle à la continuité de la conscience et de la mémoire."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Analyse le moi comme un faisceau de perceptions plutôt que comme une substance simple. » ?",
      choices: [
        "Transparence à soi",
        "Hume",
        "Culpabilité",
        "Conscience réflexive"
      ],
      answer: 1,
      explanation: "Hume : Analyse le moi comme un faisceau de perceptions plutôt que comme une substance simple."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Décrit la conscience comme intentionnelle : elle est toujours conscience de quelque chose. » ?",
      choices: [
        "Opacité à soi",
        "Authenticité",
        "Sartre",
        "Introspection"
      ],
      answer: 2,
      explanation: "Sartre : Décrit la conscience comme intentionnelle : elle est toujours conscience de quelque chose."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Caractère de la conscience d’être dirigée vers un objet. » ?",
      choices: [
        "Responsabilité",
        "Phénoménologie",
        "Sujet",
        "Intentionnalité"
      ],
      answer: 3,
      explanation: "Intentionnalité : Caractère de la conscience d’être dirigée vers un objet."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Retour de la pensée sur ses propres opérations ou présupposés. » ?",
      choices: [
        "Réflexion",
        "Liberté",
        "Corps propre",
        "Identité personnelle"
      ],
      answer: 0,
      explanation: "Réflexion : Retour de la pensée sur ses propres opérations ou présupposés."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Compréhension de ses pensées, motifs, limites et dispositions. » ?",
      choices: [
        "Aliénation",
        "Connaissance de soi",
        "Conscience morale",
        "Mémoire"
      ],
      answer: 1,
      explanation: "Connaissance de soi : Compréhension de ses pensées, motifs, limites et dispositions."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Idée selon laquelle le sujet connaîtrait immédiatement et complètement ses états. » ?",
      choices: [
        "Habitude",
        "Limites de l’introspection",
        "Transparence à soi",
        "Perception"
      ],
      answer: 2,
      explanation: "Transparence à soi : Idée selon laquelle le sujet connaîtrait immédiatement et complètement ses états."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Limite de la connaissance que le sujet possède de ses propres motifs. » ?",
      choices: [
        "Culpabilité",
        "Conscience",
        "Attention",
        "Opacité à soi"
      ],
      answer: 3,
      explanation: "Opacité à soi : Limite de la connaissance que le sujet possède de ses propres motifs."
    }
  ],
  exercises: [
    {
      title: "Analyser la notion : Conscience",
      level: "Facile",
      statement: "Définissez précisément « Conscience » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Conscience comme suit : Présence à soi et au monde permettant de percevoir, penser et se rapporter à ses actes. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Conscience immédiate",
      level: "Facile",
      statement: "Définissez précisément « Conscience immédiate » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Conscience immédiate comme suit : Connaissance spontanée de ses états au moment où ils sont vécus. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Conscience réflexive",
      level: "Facile",
      statement: "Définissez précisément « Conscience réflexive » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Conscience réflexive comme suit : Capacité de prendre ses propres pensées et actions pour objets de réflexion. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Introspection",
      level: "Intermédiaire",
      statement: "Définissez précisément « Introspection » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Introspection comme suit : Examen par lequel un sujet observe ses propres états mentaux. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Sujet",
      level: "Intermédiaire",
      statement: "Définissez précisément « Sujet » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Sujet comme suit : Être auquel on attribue pensées, expériences et actes. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Identité personnelle",
      level: "Intermédiaire",
      statement: "Définissez précisément « Identité personnelle » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Identité personnelle comme suit : Continuité par laquelle une personne se reconnaît comme la même à travers le temps. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Mémoire",
      level: "Intermédiaire",
      statement: "Définissez précisément « Mémoire » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Mémoire comme suit : Capacité de conserver et de rappeler des expériences passées. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Perception",
      level: "Difficile",
      statement: "Définissez précisément « Perception » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Perception comme suit : Organisation des données sensibles par laquelle un objet apparaît à un sujet. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Attention",
      level: "Difficile",
      statement: "Définissez précisément « Attention » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Attention comme suit : Orientation sélective de l’esprit vers un objet ou une tâche. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Inconscience",
      level: "Difficile",
      statement: "Définissez précisément « Inconscience » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Inconscience comme suit : Absence de conscience d’un état ou d’un événement, selon le contexte. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale de travail, alignée sur le programme officiel de philosophie de Terminale générale. Les thèses sont des synthèses à approfondir par l’étude des textes ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'philo-devoir': {
  title: "Le devoir",
  objectives: [
    "Définir les concepts essentiels de la notion « le devoir » et les distinguer des notions proches.",
    "Comparer plusieurs analyses philosophiques en restituant leurs arguments sans les réduire à des slogans.",
    "Construire une problématique et une argumentation nuancée mobilisant des exemples pertinents."
  ],
  course: [
    {
      heading: "1. Définir et problématiser le devoir",
      body: [
        "La notion de le devoir ne désigne pas un objet simple. Elle ouvre plusieurs questions qu’il faut distinguer avant de construire une réponse. Une définition initiale sert de point de départ, mais le travail philosophique consiste à en éprouver les limites et les présupposés.",
        "Il faut éviter de transformer la notion en thème descriptif : une dissertation demande de faire apparaître une difficulté conceptuelle, puis d’examiner plusieurs réponses argumentées."
      ]
    },
    {
      heading: "2. Repères et distinctions",
      body: [
        "Les distinctions conceptuelles permettent d’éviter les équivoques. Il convient notamment de préciser le sens des mots, de distinguer les niveaux individuel, moral, social et politique lorsque cela est pertinent, et de ne pas confondre une description avec une justification.",
        "Une opposition philosophique n’est pas toujours une alternative absolue : les deux termes peuvent parfois se compléter ou dépendre de conditions différentes."
      ]
    },
    {
      heading: "3. Auteurs et thèses",
      body: [
        "Les auteurs doivent être mobilisés pour reconstruire un raisonnement : une thèse répond à une question, s’appuie sur des raisons et rencontre des objections. Citer un nom sans expliquer l’argument ne constitue pas une démonstration.",
        "Comparer des auteurs suppose de restituer leurs problèmes et leurs concepts dans leur contexte. Une formule isolée ne suffit pas à résumer une œuvre."
      ]
    },
    {
      heading: "4. Exemples et objections",
      body: [
        "Un exemple sert à éprouver une idée, non à remplacer l’argument. Il faut préciser ce qu’il montre, les limites de l’analogie et les conditions dans lesquelles le raisonnement reste valable.",
        "Une objection sérieuse vise une prémisse ou une conséquence. La réponse doit l’examiner plutôt que l’écarter par affirmation."
      ]
    },
    {
      heading: "5. Construire une réflexion",
      body: [
        "Une bonne copie définit les termes, formule une tension, construit une progression et justifie chaque étape. Le plan doit répondre à la difficulté du sujet et non juxtaposer des auteurs.",
        "La conclusion apporte une réponse précise, rappelle les conditions de sa validité et évite d’ajouter un nouvel argument majeur."
      ]
    }
  
      ,{ heading: 'Obligation morale, responsabilité et conflit de devoirs', body: ['Le devoir désigne ce qui s’impose à l’action au nom d’une obligation, et pas seulement ce qui est souhaité ou utile. Il peut être associé à une règle, une promesse, une fonction ou une exigence morale. Il faut distinguer le devoir moral d’une contrainte extérieure et d’une simple habitude sociale.', 'Kant soutient que la valeur morale d’une action dépend de la maxime et de l’intention de respecter le devoir, et non uniquement de ses conséquences avantageuses. D’autres approches accordent davantage de place aux conséquences, aux vertus ou aux situations concrètes. Ces conceptions permettent d’interroger les conflits entre obligations.', 'Être responsable suppose de pouvoir répondre de ses actes, mais les conditions de l’action comptent : information disponible, liberté réelle, contraintes et conséquences prévisibles. Une analyse ne doit pas confondre responsabilité, culpabilité et simple causalité.'] }],
  keyPoints: [
    "Devoir : Obligation morale que le sujet reconnaît comme devant guider son action.",
    "Obligation : Exigence qui s’impose à un agent pour une raison déterminée.",
    "Contrainte : Force extérieure qui limite les possibilités d’action.",
    "Loi morale : Principe pratique qui prétend valoir indépendamment des intérêts particuliers.",
    "Impératif catégorique : Chez Kant, commandement moral qui vaut sans condition liée à un résultat désiré.",
    "Impératif hypothétique : Règle conditionnelle : si l’on veut une fin, il faut employer certains moyens.",
    "Autonomie : Capacité de la volonté rationnelle à se donner une loi.",
    "Hétéronomie : Détermination de la volonté par une autorité, un intérêt ou une inclination extérieure.",
    "Universalisation : Examen consistant à se demander si la maxime de l’action peut valoir pour tous.",
    "Maxime : Principe subjectif selon lequel un individu décide d’agir.",
    "Bonne volonté : Volonté qui agit par devoir, et non seulement conformément au devoir.",
    "Inclination : Tendance sensible ou affective qui pousse à agir."
  ],
  method: [
    "Analyser les termes du sujet et repérer leurs différents sens.",
    "Formuler une tension réelle sous la forme d’une question problématisée.",
    "Définir les concepts sans supposer la réponse dès l’introduction.",
    "Construire chaque partie autour d’une thèse et d’arguments explicites.",
    "Expliquer précisément les auteurs et confronter leurs positions.",
    "Utiliser des exemples analysés et non de simples illustrations.",
    "Présenter une objection forte puis y répondre de manière raisonnée.",
    "Conclure en répondant au sujet avec les nuances établies."
  ],
  flashcards: [
    {
      front: "Devoir",
      back: "Obligation morale que le sujet reconnaît comme devant guider son action."
    },
    {
      front: "Obligation",
      back: "Exigence qui s’impose à un agent pour une raison déterminée."
    },
    {
      front: "Contrainte",
      back: "Force extérieure qui limite les possibilités d’action."
    },
    {
      front: "Loi morale",
      back: "Principe pratique qui prétend valoir indépendamment des intérêts particuliers."
    },
    {
      front: "Impératif catégorique",
      back: "Chez Kant, commandement moral qui vaut sans condition liée à un résultat désiré."
    },
    {
      front: "Impératif hypothétique",
      back: "Règle conditionnelle : si l’on veut une fin, il faut employer certains moyens."
    },
    {
      front: "Autonomie",
      back: "Capacité de la volonté rationnelle à se donner une loi."
    },
    {
      front: "Hétéronomie",
      back: "Détermination de la volonté par une autorité, un intérêt ou une inclination extérieure."
    },
    {
      front: "Universalisation",
      back: "Examen consistant à se demander si la maxime de l’action peut valoir pour tous."
    },
    {
      front: "Maxime",
      back: "Principe subjectif selon lequel un individu décide d’agir."
    },
    {
      front: "Bonne volonté",
      back: "Volonté qui agit par devoir, et non seulement conformément au devoir."
    },
    {
      front: "Inclination",
      back: "Tendance sensible ou affective qui pousse à agir."
    },
    {
      front: "Intérêt",
      back: "Avantage ou satisfaction recherchés par un agent."
    },
    {
      front: "Intention",
      back: "Orientation consciente de l’action vers une fin."
    },
    {
      front: "Conséquentialisme",
      back: "Famille de doctrines évaluant les actes selon leurs conséquences."
    },
    {
      front: "Utilitarisme",
      back: "Doctrine qui évalue les actions selon leur contribution au bien-être global."
    },
    {
      front: "Bentham",
      back: "Associe l’évaluation morale au principe d’utilité et à la recherche du bonheur."
    },
    {
      front: "Mill",
      back: "Défend une forme d’utilitarisme distinguant la qualité des plaisirs."
    },
    {
      front: "Kant",
      back: "Fonde la moralité sur la raison pratique, le devoir et le respect des personnes."
    },
    {
      front: "Respect",
      back: "Reconnaissance de la valeur d’une personne comme fin et non simple moyen."
    },
    {
      front: "Dignité",
      back: "Valeur qui interdit de traiter une personne comme un objet interchangeable."
    },
    {
      front: "Responsabilité",
      back: "Obligation de répondre de ses décisions et de leurs effets imputables."
    },
    {
      front: "Promesse",
      back: "Engagement par lequel un sujet crée une attente légitime chez autrui."
    },
    {
      front: "Mensonge",
      back: "Affirmation volontairement contraire à ce que l’on tient pour vrai."
    },
    {
      front: "Conflit de devoirs",
      back: "Situation où plusieurs obligations semblent incompatibles."
    },
    {
      front: "Désobéissance civile",
      back: "Violation publique et non violente d’une règle jugée injuste, visant sa réforme."
    },
    {
      front: "Conscience morale",
      back: "Capacité de juger ses actes et de s’interroger sur leur valeur."
    },
    {
      front: "Règle",
      back: "Formulation générale orientant ou encadrant les conduites."
    },
    {
      front: "Moyen et fin",
      back: "Distinction entre ce qui sert à atteindre un objectif et l’objectif lui-même."
    },
    {
      front: "Devoir envers soi",
      back: "Obligation morale portant sur le respect de sa propre personne et de ses capacités."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Obligation morale que le sujet reconnaît comme devant guider son action. » ?",
      choices: [
        "Devoir",
        "Impératif hypothétique",
        "Inclination",
        "Respect"
      ],
      answer: 0,
      explanation: "Devoir : Obligation morale que le sujet reconnaît comme devant guider son action."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Exigence qui s’impose à un agent pour une raison déterminée. » ?",
      choices: [
        "Autonomie",
        "Obligation",
        "Intérêt",
        "Dignité"
      ],
      answer: 1,
      explanation: "Obligation : Exigence qui s’impose à un agent pour une raison déterminée."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Force extérieure qui limite les possibilités d’action. » ?",
      choices: [
        "Hétéronomie",
        "Intention",
        "Contrainte",
        "Responsabilité"
      ],
      answer: 2,
      explanation: "Contrainte : Force extérieure qui limite les possibilités d’action."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Principe pratique qui prétend valoir indépendamment des intérêts particuliers. » ?",
      choices: [
        "Universalisation",
        "Conséquentialisme",
        "Promesse",
        "Loi morale"
      ],
      answer: 3,
      explanation: "Loi morale : Principe pratique qui prétend valoir indépendamment des intérêts particuliers."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Chez Kant, commandement moral qui vaut sans condition liée à un résultat désiré. » ?",
      choices: [
        "Impératif catégorique",
        "Maxime",
        "Utilitarisme",
        "Mensonge"
      ],
      answer: 0,
      explanation: "Impératif catégorique : Chez Kant, commandement moral qui vaut sans condition liée à un résultat désiré."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Règle conditionnelle : si l’on veut une fin, il faut employer certains moyens. » ?",
      choices: [
        "Bonne volonté",
        "Impératif hypothétique",
        "Bentham",
        "Conflit de devoirs"
      ],
      answer: 1,
      explanation: "Impératif hypothétique : Règle conditionnelle : si l’on veut une fin, il faut employer certains moyens."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Capacité de la volonté rationnelle à se donner une loi. » ?",
      choices: [
        "Inclination",
        "Mill",
        "Autonomie",
        "Désobéissance civile"
      ],
      answer: 2,
      explanation: "Autonomie : Capacité de la volonté rationnelle à se donner une loi."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Détermination de la volonté par une autorité, un intérêt ou une inclination extérieure. » ?",
      choices: [
        "Intérêt",
        "Kant",
        "Conscience morale",
        "Hétéronomie"
      ],
      answer: 3,
      explanation: "Hétéronomie : Détermination de la volonté par une autorité, un intérêt ou une inclination extérieure."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Examen consistant à se demander si la maxime de l’action peut valoir pour tous. » ?",
      choices: [
        "Universalisation",
        "Intention",
        "Respect",
        "Règle"
      ],
      answer: 0,
      explanation: "Universalisation : Examen consistant à se demander si la maxime de l’action peut valoir pour tous."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Principe subjectif selon lequel un individu décide d’agir. » ?",
      choices: [
        "Conséquentialisme",
        "Maxime",
        "Dignité",
        "Moyen et fin"
      ],
      answer: 1,
      explanation: "Maxime : Principe subjectif selon lequel un individu décide d’agir."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Volonté qui agit par devoir, et non seulement conformément au devoir. » ?",
      choices: [
        "Utilitarisme",
        "Responsabilité",
        "Bonne volonté",
        "Devoir envers soi"
      ],
      answer: 2,
      explanation: "Bonne volonté : Volonté qui agit par devoir, et non seulement conformément au devoir."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Tendance sensible ou affective qui pousse à agir. » ?",
      choices: [
        "Bentham",
        "Promesse",
        "Devoir",
        "Inclination"
      ],
      answer: 3,
      explanation: "Inclination : Tendance sensible ou affective qui pousse à agir."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Avantage ou satisfaction recherchés par un agent. » ?",
      choices: [
        "Intérêt",
        "Mill",
        "Mensonge",
        "Obligation"
      ],
      answer: 0,
      explanation: "Intérêt : Avantage ou satisfaction recherchés par un agent."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Orientation consciente de l’action vers une fin. » ?",
      choices: [
        "Kant",
        "Intention",
        "Conflit de devoirs",
        "Contrainte"
      ],
      answer: 1,
      explanation: "Intention : Orientation consciente de l’action vers une fin."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Famille de doctrines évaluant les actes selon leurs conséquences. » ?",
      choices: [
        "Respect",
        "Désobéissance civile",
        "Conséquentialisme",
        "Loi morale"
      ],
      answer: 2,
      explanation: "Conséquentialisme : Famille de doctrines évaluant les actes selon leurs conséquences."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Doctrine qui évalue les actions selon leur contribution au bien-être global. » ?",
      choices: [
        "Dignité",
        "Conscience morale",
        "Impératif catégorique",
        "Utilitarisme"
      ],
      answer: 3,
      explanation: "Utilitarisme : Doctrine qui évalue les actions selon leur contribution au bien-être global."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Associe l’évaluation morale au principe d’utilité et à la recherche du bonheur. » ?",
      choices: [
        "Bentham",
        "Responsabilité",
        "Règle",
        "Impératif hypothétique"
      ],
      answer: 0,
      explanation: "Bentham : Associe l’évaluation morale au principe d’utilité et à la recherche du bonheur."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Défend une forme d’utilitarisme distinguant la qualité des plaisirs. » ?",
      choices: [
        "Promesse",
        "Mill",
        "Moyen et fin",
        "Autonomie"
      ],
      answer: 1,
      explanation: "Mill : Défend une forme d’utilitarisme distinguant la qualité des plaisirs."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Fonde la moralité sur la raison pratique, le devoir et le respect des personnes. » ?",
      choices: [
        "Mensonge",
        "Devoir envers soi",
        "Kant",
        "Hétéronomie"
      ],
      answer: 2,
      explanation: "Kant : Fonde la moralité sur la raison pratique, le devoir et le respect des personnes."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Reconnaissance de la valeur d’une personne comme fin et non simple moyen. » ?",
      choices: [
        "Conflit de devoirs",
        "Devoir",
        "Universalisation",
        "Respect"
      ],
      answer: 3,
      explanation: "Respect : Reconnaissance de la valeur d’une personne comme fin et non simple moyen."
    }
  ],
  exercises: [
    {
      title: "Analyser la notion : Devoir",
      level: "Facile",
      statement: "Définissez précisément « Devoir » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Devoir comme suit : Obligation morale que le sujet reconnaît comme devant guider son action. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Obligation",
      level: "Facile",
      statement: "Définissez précisément « Obligation » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Obligation comme suit : Exigence qui s’impose à un agent pour une raison déterminée. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Contrainte",
      level: "Facile",
      statement: "Définissez précisément « Contrainte » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Contrainte comme suit : Force extérieure qui limite les possibilités d’action. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Loi morale",
      level: "Intermédiaire",
      statement: "Définissez précisément « Loi morale » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Loi morale comme suit : Principe pratique qui prétend valoir indépendamment des intérêts particuliers. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Impératif catégorique",
      level: "Intermédiaire",
      statement: "Définissez précisément « Impératif catégorique » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Impératif catégorique comme suit : Chez Kant, commandement moral qui vaut sans condition liée à un résultat désiré. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Impératif hypothétique",
      level: "Intermédiaire",
      statement: "Définissez précisément « Impératif hypothétique » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Impératif hypothétique comme suit : Règle conditionnelle : si l’on veut une fin, il faut employer certains moyens. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Autonomie",
      level: "Intermédiaire",
      statement: "Définissez précisément « Autonomie » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Autonomie comme suit : Capacité de la volonté rationnelle à se donner une loi. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Hétéronomie",
      level: "Difficile",
      statement: "Définissez précisément « Hétéronomie » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Hétéronomie comme suit : Détermination de la volonté par une autorité, un intérêt ou une inclination extérieure. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Universalisation",
      level: "Difficile",
      statement: "Définissez précisément « Universalisation » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Universalisation comme suit : Examen consistant à se demander si la maxime de l’action peut valoir pour tous. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Maxime",
      level: "Difficile",
      statement: "Définissez précisément « Maxime » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Maxime comme suit : Principe subjectif selon lequel un individu décide d’agir. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale de travail, alignée sur le programme officiel de philosophie de Terminale générale. Les thèses sont des synthèses à approfondir par l’étude des textes ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'philo-etat': {
  title: "L’État",
  objectives: [
    "Définir les concepts essentiels de la notion « l’état » et les distinguer des notions proches.",
    "Comparer plusieurs analyses philosophiques en restituant leurs arguments sans les réduire à des slogans.",
    "Construire une problématique et une argumentation nuancée mobilisant des exemples pertinents."
  ],
  course: [
    {
      heading: "1. Définir et problématiser l’état",
      body: [
        "La notion de l’état ne désigne pas un objet simple. Elle ouvre plusieurs questions qu’il faut distinguer avant de construire une réponse. Une définition initiale sert de point de départ, mais le travail philosophique consiste à en éprouver les limites et les présupposés.",
        "Il faut éviter de transformer la notion en thème descriptif : une dissertation demande de faire apparaître une difficulté conceptuelle, puis d’examiner plusieurs réponses argumentées."
      ]
    },
    {
      heading: "2. Repères et distinctions",
      body: [
        "Les distinctions conceptuelles permettent d’éviter les équivoques. Il convient notamment de préciser le sens des mots, de distinguer les niveaux individuel, moral, social et politique lorsque cela est pertinent, et de ne pas confondre une description avec une justification.",
        "Une opposition philosophique n’est pas toujours une alternative absolue : les deux termes peuvent parfois se compléter ou dépendre de conditions différentes."
      ]
    },
    {
      heading: "3. Auteurs et thèses",
      body: [
        "Les auteurs doivent être mobilisés pour reconstruire un raisonnement : une thèse répond à une question, s’appuie sur des raisons et rencontre des objections. Citer un nom sans expliquer l’argument ne constitue pas une démonstration.",
        "Comparer des auteurs suppose de restituer leurs problèmes et leurs concepts dans leur contexte. Une formule isolée ne suffit pas à résumer une œuvre."
      ]
    },
    {
      heading: "4. Exemples et objections",
      body: [
        "Un exemple sert à éprouver une idée, non à remplacer l’argument. Il faut préciser ce qu’il montre, les limites de l’analogie et les conditions dans lesquelles le raisonnement reste valable.",
        "Une objection sérieuse vise une prémisse ou une conséquence. La réponse doit l’examiner plutôt que l’écarter par affirmation."
      ]
    },
    {
      heading: "5. Construire une réflexion",
      body: [
        "Une bonne copie définit les termes, formule une tension, construit une progression et justifie chaque étape. Le plan doit répondre à la difficulté du sujet et non juxtaposer des auteurs.",
        "La conclusion apporte une réponse précise, rappelle les conditions de sa validité et évite d’ajouter un nouvel argument majeur."
      ]
    }
  
      ,{ heading: 'L’État, la loi et la légitimité politique', body: ['L’État désigne une organisation politique qui exerce une autorité souveraine sur une population et un territoire. Il produit des règles, rend la justice, assure des fonctions de sécurité et organise des services collectifs. Il faut distinguer l’État, le gouvernement du moment, la nation et la société civile.', 'La légitimité du pouvoir peut être pensée à partir du consentement, de la tradition, de la loi ou de la capacité à garantir des droits. Hobbes insiste sur la nécessité d’une autorité commune pour sortir de l’insécurité ; Locke défend des limites au pouvoir et la protection des droits ; Rousseau interroge la souveraineté populaire et la volonté générale.', 'La loi peut protéger les libertés en fixant des limites communes, mais elle peut aussi devenir un instrument d’oppression si elle n’est pas contrôlée. La réflexion doit donc distinguer légalité et légitimité, autorité et autoritarisme, intérêt général et intérêts particuliers.'] }],
  keyPoints: [
    "État : Institution politique souveraine organisant une population sur un territoire par des lois et des pouvoirs.",
    "Souveraineté : Pouvoir suprême de décider et de faire appliquer les règles communes.",
    "Territoire : Espace géographique sur lequel s’exerce l’autorité étatique.",
    "Nation : Communauté politique ou historique dont les membres se reconnaissent un lien commun.",
    "Légitimité : Caractère d’un pouvoir considéré comme justifié ou digne d’obéissance.",
    "Légalité : Conformité d’un acte ou d’un pouvoir aux règles juridiques en vigueur.",
    "État de droit : Organisation où les pouvoirs publics sont soumis au droit et contrôlés.",
    "Contrat social : Modèle théorique expliquant l’autorité politique par un accord entre individus.",
    "Hobbes : Justifie un pouvoir souverain fort pour sortir de l’insécurité de l’état de nature.",
    "Locke : Défend un gouvernement limité chargé de protéger les droits naturels.",
    "Rousseau : Fonde la souveraineté sur le peuple et la volonté générale.",
    "Volonté générale : Chez Rousseau, volonté orientée vers l’intérêt commun et non la somme des intérêts privés."
  ],
  method: [
    "Analyser les termes du sujet et repérer leurs différents sens.",
    "Formuler une tension réelle sous la forme d’une question problématisée.",
    "Définir les concepts sans supposer la réponse dès l’introduction.",
    "Construire chaque partie autour d’une thèse et d’arguments explicites.",
    "Expliquer précisément les auteurs et confronter leurs positions.",
    "Utiliser des exemples analysés et non de simples illustrations.",
    "Présenter une objection forte puis y répondre de manière raisonnée.",
    "Conclure en répondant au sujet avec les nuances établies."
  ],
  flashcards: [
    {
      front: "État",
      back: "Institution politique souveraine organisant une population sur un territoire par des lois et des pouvoirs."
    },
    {
      front: "Souveraineté",
      back: "Pouvoir suprême de décider et de faire appliquer les règles communes."
    },
    {
      front: "Territoire",
      back: "Espace géographique sur lequel s’exerce l’autorité étatique."
    },
    {
      front: "Nation",
      back: "Communauté politique ou historique dont les membres se reconnaissent un lien commun."
    },
    {
      front: "Légitimité",
      back: "Caractère d’un pouvoir considéré comme justifié ou digne d’obéissance."
    },
    {
      front: "Légalité",
      back: "Conformité d’un acte ou d’un pouvoir aux règles juridiques en vigueur."
    },
    {
      front: "État de droit",
      back: "Organisation où les pouvoirs publics sont soumis au droit et contrôlés."
    },
    {
      front: "Contrat social",
      back: "Modèle théorique expliquant l’autorité politique par un accord entre individus."
    },
    {
      front: "Hobbes",
      back: "Justifie un pouvoir souverain fort pour sortir de l’insécurité de l’état de nature."
    },
    {
      front: "Locke",
      back: "Défend un gouvernement limité chargé de protéger les droits naturels."
    },
    {
      front: "Rousseau",
      back: "Fonde la souveraineté sur le peuple et la volonté générale."
    },
    {
      front: "Volonté générale",
      back: "Chez Rousseau, volonté orientée vers l’intérêt commun et non la somme des intérêts privés."
    },
    {
      front: "Montesquieu",
      back: "Défend la séparation des pouvoirs pour prévenir leur concentration."
    },
    {
      front: "Séparation des pouvoirs",
      back: "Répartition des fonctions législative, exécutive et judiciaire entre institutions distinctes."
    },
    {
      front: "Pouvoir exécutif",
      back: "Pouvoir chargé de conduire la politique et d’appliquer les lois."
    },
    {
      front: "Pouvoir législatif",
      back: "Pouvoir chargé de débattre et de voter les lois."
    },
    {
      front: "Pouvoir judiciaire",
      back: "Institutions chargées de trancher les litiges et de sanctionner selon le droit."
    },
    {
      front: "Monopole de la violence légitime",
      back: "Formule de Weber désignant la prétention de l’État à autoriser l’usage légitime de la force."
    },
    {
      front: "Service public",
      back: "Activité d’intérêt général assumée ou encadrée par une personne publique."
    },
    {
      front: "Bien commun",
      back: "Ensemble des conditions permettant à la communauté de vivre et d’agir ensemble."
    },
    {
      front: "Liberté politique",
      back: "Participation à la vie collective et protection contre l’arbitraire."
    },
    {
      front: "Despotisme",
      back: "Régime où le pouvoir est exercé sans limites effectives."
    },
    {
      front: "Tyrannie",
      back: "Pouvoir exercé de manière arbitraire et oppressive."
    },
    {
      front: "Démocratie",
      back: "Régime dans lequel le peuple participe à la formation du pouvoir politique."
    },
    {
      front: "Représentation",
      back: "Mécanisme par lequel des élus agissent au nom des citoyens."
    },
    {
      front: "Contre-pouvoir",
      back: "Institution ou acteur capable de limiter et contrôler le pouvoir établi."
    },
    {
      front: "Fiscalité",
      back: "Ensemble des prélèvements obligatoires finançant notamment les missions collectives."
    },
    {
      front: "Justice distributive",
      back: "Réflexion sur la répartition des ressources, droits et charges dans la société."
    },
    {
      front: "Désobéissance civile",
      back: "Transgression publique et non violente destinée à contester une loi ou politique injuste."
    },
    {
      front: "Citoyenneté",
      back: "Statut donnant des droits et des devoirs de participation à la communauté politique."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Institution politique souveraine organisant une population sur un territoire par des lois et des pouvoirs. » ?",
      choices: [
        "État",
        "Légalité",
        "Volonté générale",
        "Bien commun"
      ],
      answer: 0,
      explanation: "État : Institution politique souveraine organisant une population sur un territoire par des lois et des pouvoirs."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Pouvoir suprême de décider et de faire appliquer les règles communes. » ?",
      choices: [
        "État de droit",
        "Souveraineté",
        "Montesquieu",
        "Liberté politique"
      ],
      answer: 1,
      explanation: "Souveraineté : Pouvoir suprême de décider et de faire appliquer les règles communes."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Espace géographique sur lequel s’exerce l’autorité étatique. » ?",
      choices: [
        "Contrat social",
        "Séparation des pouvoirs",
        "Territoire",
        "Despotisme"
      ],
      answer: 2,
      explanation: "Territoire : Espace géographique sur lequel s’exerce l’autorité étatique."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Communauté politique ou historique dont les membres se reconnaissent un lien commun. » ?",
      choices: [
        "Hobbes",
        "Pouvoir exécutif",
        "Tyrannie",
        "Nation"
      ],
      answer: 3,
      explanation: "Nation : Communauté politique ou historique dont les membres se reconnaissent un lien commun."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Caractère d’un pouvoir considéré comme justifié ou digne d’obéissance. » ?",
      choices: [
        "Légitimité",
        "Locke",
        "Pouvoir législatif",
        "Démocratie"
      ],
      answer: 0,
      explanation: "Légitimité : Caractère d’un pouvoir considéré comme justifié ou digne d’obéissance."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Conformité d’un acte ou d’un pouvoir aux règles juridiques en vigueur. » ?",
      choices: [
        "Rousseau",
        "Légalité",
        "Pouvoir judiciaire",
        "Représentation"
      ],
      answer: 1,
      explanation: "Légalité : Conformité d’un acte ou d’un pouvoir aux règles juridiques en vigueur."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Organisation où les pouvoirs publics sont soumis au droit et contrôlés. » ?",
      choices: [
        "Volonté générale",
        "Monopole de la violence légitime",
        "État de droit",
        "Contre-pouvoir"
      ],
      answer: 2,
      explanation: "État de droit : Organisation où les pouvoirs publics sont soumis au droit et contrôlés."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Modèle théorique expliquant l’autorité politique par un accord entre individus. » ?",
      choices: [
        "Montesquieu",
        "Service public",
        "Fiscalité",
        "Contrat social"
      ],
      answer: 3,
      explanation: "Contrat social : Modèle théorique expliquant l’autorité politique par un accord entre individus."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Justifie un pouvoir souverain fort pour sortir de l’insécurité de l’état de nature. » ?",
      choices: [
        "Hobbes",
        "Séparation des pouvoirs",
        "Bien commun",
        "Justice distributive"
      ],
      answer: 0,
      explanation: "Hobbes : Justifie un pouvoir souverain fort pour sortir de l’insécurité de l’état de nature."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Défend un gouvernement limité chargé de protéger les droits naturels. » ?",
      choices: [
        "Pouvoir exécutif",
        "Locke",
        "Liberté politique",
        "Désobéissance civile"
      ],
      answer: 1,
      explanation: "Locke : Défend un gouvernement limité chargé de protéger les droits naturels."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Fonde la souveraineté sur le peuple et la volonté générale. » ?",
      choices: [
        "Pouvoir législatif",
        "Despotisme",
        "Rousseau",
        "Citoyenneté"
      ],
      answer: 2,
      explanation: "Rousseau : Fonde la souveraineté sur le peuple et la volonté générale."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Chez Rousseau, volonté orientée vers l’intérêt commun et non la somme des intérêts privés. » ?",
      choices: [
        "Pouvoir judiciaire",
        "Tyrannie",
        "État",
        "Volonté générale"
      ],
      answer: 3,
      explanation: "Volonté générale : Chez Rousseau, volonté orientée vers l’intérêt commun et non la somme des intérêts privés."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Défend la séparation des pouvoirs pour prévenir leur concentration. » ?",
      choices: [
        "Montesquieu",
        "Monopole de la violence légitime",
        "Démocratie",
        "Souveraineté"
      ],
      answer: 0,
      explanation: "Montesquieu : Défend la séparation des pouvoirs pour prévenir leur concentration."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Répartition des fonctions législative, exécutive et judiciaire entre institutions distinctes. » ?",
      choices: [
        "Service public",
        "Séparation des pouvoirs",
        "Représentation",
        "Territoire"
      ],
      answer: 1,
      explanation: "Séparation des pouvoirs : Répartition des fonctions législative, exécutive et judiciaire entre institutions distinctes."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Pouvoir chargé de conduire la politique et d’appliquer les lois. » ?",
      choices: [
        "Bien commun",
        "Contre-pouvoir",
        "Pouvoir exécutif",
        "Nation"
      ],
      answer: 2,
      explanation: "Pouvoir exécutif : Pouvoir chargé de conduire la politique et d’appliquer les lois."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Pouvoir chargé de débattre et de voter les lois. » ?",
      choices: [
        "Liberté politique",
        "Fiscalité",
        "Légitimité",
        "Pouvoir législatif"
      ],
      answer: 3,
      explanation: "Pouvoir législatif : Pouvoir chargé de débattre et de voter les lois."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Institutions chargées de trancher les litiges et de sanctionner selon le droit. » ?",
      choices: [
        "Pouvoir judiciaire",
        "Despotisme",
        "Justice distributive",
        "Légalité"
      ],
      answer: 0,
      explanation: "Pouvoir judiciaire : Institutions chargées de trancher les litiges et de sanctionner selon le droit."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Formule de Weber désignant la prétention de l’État à autoriser l’usage légitime de la force. » ?",
      choices: [
        "Tyrannie",
        "Monopole de la violence légitime",
        "Désobéissance civile",
        "État de droit"
      ],
      answer: 1,
      explanation: "Monopole de la violence légitime : Formule de Weber désignant la prétention de l’État à autoriser l’usage légitime de la force."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Activité d’intérêt général assumée ou encadrée par une personne publique. » ?",
      choices: [
        "Démocratie",
        "Citoyenneté",
        "Service public",
        "Contrat social"
      ],
      answer: 2,
      explanation: "Service public : Activité d’intérêt général assumée ou encadrée par une personne publique."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Ensemble des conditions permettant à la communauté de vivre et d’agir ensemble. » ?",
      choices: [
        "Représentation",
        "État",
        "Hobbes",
        "Bien commun"
      ],
      answer: 3,
      explanation: "Bien commun : Ensemble des conditions permettant à la communauté de vivre et d’agir ensemble."
    }
  ],
  exercises: [
    {
      title: "Analyser la notion : État",
      level: "Facile",
      statement: "Définissez précisément « État » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit État comme suit : Institution politique souveraine organisant une population sur un territoire par des lois et des pouvoirs. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Souveraineté",
      level: "Facile",
      statement: "Définissez précisément « Souveraineté » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Souveraineté comme suit : Pouvoir suprême de décider et de faire appliquer les règles communes. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Territoire",
      level: "Facile",
      statement: "Définissez précisément « Territoire » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Territoire comme suit : Espace géographique sur lequel s’exerce l’autorité étatique. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Nation",
      level: "Intermédiaire",
      statement: "Définissez précisément « Nation » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Nation comme suit : Communauté politique ou historique dont les membres se reconnaissent un lien commun. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Légitimité",
      level: "Intermédiaire",
      statement: "Définissez précisément « Légitimité » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Légitimité comme suit : Caractère d’un pouvoir considéré comme justifié ou digne d’obéissance. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Légalité",
      level: "Intermédiaire",
      statement: "Définissez précisément « Légalité » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Légalité comme suit : Conformité d’un acte ou d’un pouvoir aux règles juridiques en vigueur. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : État de droit",
      level: "Intermédiaire",
      statement: "Définissez précisément « État de droit » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit État de droit comme suit : Organisation où les pouvoirs publics sont soumis au droit et contrôlés. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Contrat social",
      level: "Difficile",
      statement: "Définissez précisément « Contrat social » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Contrat social comme suit : Modèle théorique expliquant l’autorité politique par un accord entre individus. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Hobbes",
      level: "Difficile",
      statement: "Définissez précisément « Hobbes » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Hobbes comme suit : Justifie un pouvoir souverain fort pour sortir de l’insécurité de l’état de nature. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Locke",
      level: "Difficile",
      statement: "Définissez précisément « Locke » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Locke comme suit : Défend un gouvernement limité chargé de protéger les droits naturels. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale de travail, alignée sur le programme officiel de philosophie de Terminale générale. Les thèses sont des synthèses à approfondir par l’étude des textes ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'philo-inconscient': {
  title: "L’inconscient",
  objectives: [
    "Définir les concepts essentiels de la notion « l’inconscient » et les distinguer des notions proches.",
    "Comparer plusieurs analyses philosophiques en restituant leurs arguments sans les réduire à des slogans.",
    "Construire une problématique et une argumentation nuancée mobilisant des exemples pertinents."
  ],
  course: [
    {
      heading: "1. Définir et problématiser l’inconscient",
      body: [
        "La notion de l’inconscient ne désigne pas un objet simple. Elle ouvre plusieurs questions qu’il faut distinguer avant de construire une réponse. Une définition initiale sert de point de départ, mais le travail philosophique consiste à en éprouver les limites et les présupposés.",
        "Il faut éviter de transformer la notion en thème descriptif : une dissertation demande de faire apparaître une difficulté conceptuelle, puis d’examiner plusieurs réponses argumentées."
      ]
    },
    {
      heading: "2. Repères et distinctions",
      body: [
        "Les distinctions conceptuelles permettent d’éviter les équivoques. Il convient notamment de préciser le sens des mots, de distinguer les niveaux individuel, moral, social et politique lorsque cela est pertinent, et de ne pas confondre une description avec une justification.",
        "Une opposition philosophique n’est pas toujours une alternative absolue : les deux termes peuvent parfois se compléter ou dépendre de conditions différentes."
      ]
    },
    {
      heading: "3. Auteurs et thèses",
      body: [
        "Les auteurs doivent être mobilisés pour reconstruire un raisonnement : une thèse répond à une question, s’appuie sur des raisons et rencontre des objections. Citer un nom sans expliquer l’argument ne constitue pas une démonstration.",
        "Comparer des auteurs suppose de restituer leurs problèmes et leurs concepts dans leur contexte. Une formule isolée ne suffit pas à résumer une œuvre."
      ]
    },
    {
      heading: "4. Exemples et objections",
      body: [
        "Un exemple sert à éprouver une idée, non à remplacer l’argument. Il faut préciser ce qu’il montre, les limites de l’analogie et les conditions dans lesquelles le raisonnement reste valable.",
        "Une objection sérieuse vise une prémisse ou une conséquence. La réponse doit l’examiner plutôt que l’écarter par affirmation."
      ]
    },
    {
      heading: "5. Construire une réflexion",
      body: [
        "Une bonne copie définit les termes, formule une tension, construit une progression et justifie chaque étape. Le plan doit répondre à la difficulté du sujet et non juxtaposer des auteurs.",
        "La conclusion apporte une réponse précise, rappelle les conditions de sa validité et évite d’ajouter un nouvel argument majeur."
      ]
    }
  
      ,{ heading: 'L’inconscient et les limites de la transparence à soi', body: ['L’inconscient désigne ce qui échappe à la conscience immédiate sans être nécessairement inexistant ou sans effet. Il faut distinguer l’inconscience passagère, les automatismes et l’inconscient au sens psychanalytique. Le problème philosophique porte sur la possibilité de se connaître soi-même et sur les déterminations qui échappent à l’introspection.', 'Freud interprète certains rêves, lapsus et symptômes comme des formations ayant un sens à déchiffrer, liées à des conflits psychiques. Cette théorie transforme l’idée d’un sujet entièrement transparent à lui-même. Elle demeure discutée et ne doit pas être présentée comme une explication automatique de tout comportement.', 'La présence de processus non conscients n’abolit pas nécessairement la liberté ou la responsabilité. Elle oblige à examiner les conditions de l’action, la possibilité de prendre du recul et le rôle de la réflexion. Une dissertation doit distinguer déterminisme psychique, contrainte et absence totale de choix.'] }],
  keyPoints: [
    "Inconscient : Ensemble de processus psychiques qui échappent à la conscience actuelle du sujet.",
    "Inconscient psychique : Hypothèse de pensées, désirs ou conflits actifs sans accès direct à la conscience.",
    "Préconscient : Chez Freud, contenus non présents à la conscience mais susceptibles d’y accéder.",
    "Refoulement : Processus par lequel certaines représentations sont maintenues hors de la conscience.",
    "Pulsion : Processus dynamique qui pousse l’organisme vers une satisfaction psychique.",
    "Désir : Tendance vers un objet ou un état représenté comme source de satisfaction.",
    "Rêve : Expérience psychique du sommeil que Freud interprète comme voie d’accès à des désirs et conflits.",
    "Acte manqué : Oubli ou erreur que la psychanalyse peut interpréter comme significatif.",
    "Lapsus : Erreur de parole ou d’écriture susceptible de révéler un conflit ou une association.",
    "Symptôme : Manifestation pouvant exprimer indirectement un conflit psychique.",
    "Psychanalyse : Méthode d’exploration et théorie du fonctionnement psychique développées par Freud.",
    "Freud : Développe l’hypothèse d’un inconscient dynamique structuré par conflits et défenses."
  ],
  method: [
    "Analyser les termes du sujet et repérer leurs différents sens.",
    "Formuler une tension réelle sous la forme d’une question problématisée.",
    "Définir les concepts sans supposer la réponse dès l’introduction.",
    "Construire chaque partie autour d’une thèse et d’arguments explicites.",
    "Expliquer précisément les auteurs et confronter leurs positions.",
    "Utiliser des exemples analysés et non de simples illustrations.",
    "Présenter une objection forte puis y répondre de manière raisonnée.",
    "Conclure en répondant au sujet avec les nuances établies."
  ],
  flashcards: [
    {
      front: "Inconscient",
      back: "Ensemble de processus psychiques qui échappent à la conscience actuelle du sujet."
    },
    {
      front: "Inconscient psychique",
      back: "Hypothèse de pensées, désirs ou conflits actifs sans accès direct à la conscience."
    },
    {
      front: "Préconscient",
      back: "Chez Freud, contenus non présents à la conscience mais susceptibles d’y accéder."
    },
    {
      front: "Refoulement",
      back: "Processus par lequel certaines représentations sont maintenues hors de la conscience."
    },
    {
      front: "Pulsion",
      back: "Processus dynamique qui pousse l’organisme vers une satisfaction psychique."
    },
    {
      front: "Désir",
      back: "Tendance vers un objet ou un état représenté comme source de satisfaction."
    },
    {
      front: "Rêve",
      back: "Expérience psychique du sommeil que Freud interprète comme voie d’accès à des désirs et conflits."
    },
    {
      front: "Acte manqué",
      back: "Oubli ou erreur que la psychanalyse peut interpréter comme significatif."
    },
    {
      front: "Lapsus",
      back: "Erreur de parole ou d’écriture susceptible de révéler un conflit ou une association."
    },
    {
      front: "Symptôme",
      back: "Manifestation pouvant exprimer indirectement un conflit psychique."
    },
    {
      front: "Psychanalyse",
      back: "Méthode d’exploration et théorie du fonctionnement psychique développées par Freud."
    },
    {
      front: "Freud",
      back: "Développe l’hypothèse d’un inconscient dynamique structuré par conflits et défenses."
    },
    {
      front: "Ça",
      back: "Instance psychique associée aux pulsions et au principe de plaisir dans le modèle freudien."
    },
    {
      front: "Moi",
      back: "Instance qui tente de composer avec les exigences du ça, du surmoi et de la réalité."
    },
    {
      front: "Surmoi",
      back: "Instance intériorisant interdits, exigences et idéaux."
    },
    {
      front: "Principe de plaisir",
      back: "Tendance à rechercher la satisfaction et à éviter le déplaisir."
    },
    {
      front: "Principe de réalité",
      back: "Principe qui diffère ou aménage la satisfaction selon les contraintes du monde."
    },
    {
      front: "Déterminisme psychique",
      back: "Idée selon laquelle des actes psychiques ont des causes et une signification."
    },
    {
      front: "Libre arbitre",
      back: "Capacité supposée de choisir indépendamment de toute détermination."
    },
    {
      front: "Sublimation",
      back: "Processus par lequel une pulsion trouve une voie de satisfaction socialement valorisée."
    },
    {
      front: "Résistance",
      back: "Opposition, souvent indirecte, à l’accès à certains contenus psychiques."
    },
    {
      front: "Transfert",
      back: "Déplacement sur l’analyste de sentiments et attentes issus d’autres relations."
    },
    {
      front: "Association libre",
      back: "Méthode invitant à exprimer les pensées qui viennent sans sélection volontaire."
    },
    {
      front: "Conflit psychique",
      back: "Opposition entre désirs, interdits, exigences ou représentations."
    },
    {
      front: "Inconscient collectif",
      back: "Concept de Jung désignant des structures symboliques partagées, distinct de l’inconscient freudien."
    },
    {
      front: "Habitude",
      back: "Disposition acquise pouvant guider une conduite sans délibération consciente."
    },
    {
      front: "Spinoza",
      back: "Critique l’illusion du libre arbitre lorsque les humains ignorent les causes de leurs désirs."
    },
    {
      front: "Sartre",
      back: "Critique l’usage de l’inconscient s’il sert à fuir la responsabilité de ses choix."
    },
    {
      front: "Responsabilité",
      back: "Question de l’imputabilité des actes lorsque des déterminations inconscientes interviennent."
    },
    {
      front: "Limites de l’interprétation",
      back: "Une interprétation psychique doit être discutée et ne constitue pas automatiquement une preuve."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Ensemble de processus psychiques qui échappent à la conscience actuelle du sujet. » ?",
      choices: [
        "Inconscient",
        "Désir",
        "Freud",
        "Sublimation"
      ],
      answer: 0,
      explanation: "Inconscient : Ensemble de processus psychiques qui échappent à la conscience actuelle du sujet."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Hypothèse de pensées, désirs ou conflits actifs sans accès direct à la conscience. » ?",
      choices: [
        "Rêve",
        "Inconscient psychique",
        "Ça",
        "Résistance"
      ],
      answer: 1,
      explanation: "Inconscient psychique : Hypothèse de pensées, désirs ou conflits actifs sans accès direct à la conscience."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Chez Freud, contenus non présents à la conscience mais susceptibles d’y accéder. » ?",
      choices: [
        "Acte manqué",
        "Moi",
        "Préconscient",
        "Transfert"
      ],
      answer: 2,
      explanation: "Préconscient : Chez Freud, contenus non présents à la conscience mais susceptibles d’y accéder."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Processus par lequel certaines représentations sont maintenues hors de la conscience. » ?",
      choices: [
        "Lapsus",
        "Surmoi",
        "Association libre",
        "Refoulement"
      ],
      answer: 3,
      explanation: "Refoulement : Processus par lequel certaines représentations sont maintenues hors de la conscience."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Processus dynamique qui pousse l’organisme vers une satisfaction psychique. » ?",
      choices: [
        "Pulsion",
        "Symptôme",
        "Principe de plaisir",
        "Conflit psychique"
      ],
      answer: 0,
      explanation: "Pulsion : Processus dynamique qui pousse l’organisme vers une satisfaction psychique."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Tendance vers un objet ou un état représenté comme source de satisfaction. » ?",
      choices: [
        "Psychanalyse",
        "Désir",
        "Principe de réalité",
        "Inconscient collectif"
      ],
      answer: 1,
      explanation: "Désir : Tendance vers un objet ou un état représenté comme source de satisfaction."
    },
    {
      level: "Facile",
      question: "Quelle notion correspond le mieux à cette définition : « Expérience psychique du sommeil que Freud interprète comme voie d’accès à des désirs et conflits. » ?",
      choices: [
        "Freud",
        "Déterminisme psychique",
        "Rêve",
        "Habitude"
      ],
      answer: 2,
      explanation: "Rêve : Expérience psychique du sommeil que Freud interprète comme voie d’accès à des désirs et conflits."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Oubli ou erreur que la psychanalyse peut interpréter comme significatif. » ?",
      choices: [
        "Ça",
        "Libre arbitre",
        "Spinoza",
        "Acte manqué"
      ],
      answer: 3,
      explanation: "Acte manqué : Oubli ou erreur que la psychanalyse peut interpréter comme significatif."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Erreur de parole ou d’écriture susceptible de révéler un conflit ou une association. » ?",
      choices: [
        "Lapsus",
        "Moi",
        "Sublimation",
        "Sartre"
      ],
      answer: 0,
      explanation: "Lapsus : Erreur de parole ou d’écriture susceptible de révéler un conflit ou une association."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Manifestation pouvant exprimer indirectement un conflit psychique. » ?",
      choices: [
        "Surmoi",
        "Symptôme",
        "Résistance",
        "Responsabilité"
      ],
      answer: 1,
      explanation: "Symptôme : Manifestation pouvant exprimer indirectement un conflit psychique."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Méthode d’exploration et théorie du fonctionnement psychique développées par Freud. » ?",
      choices: [
        "Principe de plaisir",
        "Transfert",
        "Psychanalyse",
        "Limites de l’interprétation"
      ],
      answer: 2,
      explanation: "Psychanalyse : Méthode d’exploration et théorie du fonctionnement psychique développées par Freud."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Développe l’hypothèse d’un inconscient dynamique structuré par conflits et défenses. » ?",
      choices: [
        "Principe de réalité",
        "Association libre",
        "Inconscient",
        "Freud"
      ],
      answer: 3,
      explanation: "Freud : Développe l’hypothèse d’un inconscient dynamique structuré par conflits et défenses."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Instance psychique associée aux pulsions et au principe de plaisir dans le modèle freudien. » ?",
      choices: [
        "Ça",
        "Déterminisme psychique",
        "Conflit psychique",
        "Inconscient psychique"
      ],
      answer: 0,
      explanation: "Ça : Instance psychique associée aux pulsions et au principe de plaisir dans le modèle freudien."
    },
    {
      level: "Intermédiaire",
      question: "Quelle notion correspond le mieux à cette définition : « Instance qui tente de composer avec les exigences du ça, du surmoi et de la réalité. » ?",
      choices: [
        "Libre arbitre",
        "Moi",
        "Inconscient collectif",
        "Préconscient"
      ],
      answer: 1,
      explanation: "Moi : Instance qui tente de composer avec les exigences du ça, du surmoi et de la réalité."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Instance intériorisant interdits, exigences et idéaux. » ?",
      choices: [
        "Sublimation",
        "Habitude",
        "Surmoi",
        "Refoulement"
      ],
      answer: 2,
      explanation: "Surmoi : Instance intériorisant interdits, exigences et idéaux."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Tendance à rechercher la satisfaction et à éviter le déplaisir. » ?",
      choices: [
        "Résistance",
        "Spinoza",
        "Pulsion",
        "Principe de plaisir"
      ],
      answer: 3,
      explanation: "Principe de plaisir : Tendance à rechercher la satisfaction et à éviter le déplaisir."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Principe qui diffère ou aménage la satisfaction selon les contraintes du monde. » ?",
      choices: [
        "Principe de réalité",
        "Transfert",
        "Sartre",
        "Désir"
      ],
      answer: 0,
      explanation: "Principe de réalité : Principe qui diffère ou aménage la satisfaction selon les contraintes du monde."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Idée selon laquelle des actes psychiques ont des causes et une signification. » ?",
      choices: [
        "Association libre",
        "Déterminisme psychique",
        "Responsabilité",
        "Rêve"
      ],
      answer: 1,
      explanation: "Déterminisme psychique : Idée selon laquelle des actes psychiques ont des causes et une signification."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Capacité supposée de choisir indépendamment de toute détermination. » ?",
      choices: [
        "Conflit psychique",
        "Limites de l’interprétation",
        "Libre arbitre",
        "Acte manqué"
      ],
      answer: 2,
      explanation: "Libre arbitre : Capacité supposée de choisir indépendamment de toute détermination."
    },
    {
      level: "Difficile",
      question: "Quelle notion correspond le mieux à cette définition : « Processus par lequel une pulsion trouve une voie de satisfaction socialement valorisée. » ?",
      choices: [
        "Inconscient collectif",
        "Inconscient",
        "Lapsus",
        "Sublimation"
      ],
      answer: 3,
      explanation: "Sublimation : Processus par lequel une pulsion trouve une voie de satisfaction socialement valorisée."
    }
  ],
  exercises: [
    {
      title: "Analyser la notion : Inconscient",
      level: "Facile",
      statement: "Définissez précisément « Inconscient » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Inconscient comme suit : Ensemble de processus psychiques qui échappent à la conscience actuelle du sujet. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Inconscient psychique",
      level: "Facile",
      statement: "Définissez précisément « Inconscient psychique » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Inconscient psychique comme suit : Hypothèse de pensées, désirs ou conflits actifs sans accès direct à la conscience. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Préconscient",
      level: "Facile",
      statement: "Définissez précisément « Préconscient » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Préconscient comme suit : Chez Freud, contenus non présents à la conscience mais susceptibles d’y accéder. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Refoulement",
      level: "Intermédiaire",
      statement: "Définissez précisément « Refoulement » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Refoulement comme suit : Processus par lequel certaines représentations sont maintenues hors de la conscience. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Pulsion",
      level: "Intermédiaire",
      statement: "Définissez précisément « Pulsion » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Pulsion comme suit : Processus dynamique qui pousse l’organisme vers une satisfaction psychique. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Désir",
      level: "Intermédiaire",
      statement: "Définissez précisément « Désir » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Désir comme suit : Tendance vers un objet ou un état représenté comme source de satisfaction. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Rêve",
      level: "Intermédiaire",
      statement: "Définissez précisément « Rêve » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Rêve comme suit : Expérience psychique du sommeil que Freud interprète comme voie d’accès à des désirs et conflits. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Acte manqué",
      level: "Difficile",
      statement: "Définissez précisément « Acte manqué » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Acte manqué comme suit : Oubli ou erreur que la psychanalyse peut interpréter comme significatif. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Lapsus",
      level: "Difficile",
      statement: "Définissez précisément « Lapsus » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Lapsus comme suit : Erreur de parole ou d’écriture susceptible de révéler un conflit ou une association. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    },
    {
      title: "Analyser la notion : Symptôme",
      level: "Difficile",
      statement: "Définissez précisément « Symptôme » et distinguez cette notion de deux notions proches.",
      correction: "Une réponse solide définit Symptôme comme suit : Manifestation pouvant exprimer indirectement un conflit psychique. Elle doit ensuite préciser le problème auquel la notion répond, proposer un exemple pertinent et signaler une limite ou une objection.",
      skills: [
        "Définition",
        "Distinction",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale de travail, alignée sur le programme officiel de philosophie de Terminale générale. Les thèses sont des synthèses à approfondir par l’étude des textes ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'philo-justice': {
    title: 'La justice',
    objectives: ['Distinguer justice, droit positif, légalité et légitimité.', 'Comparer égalité, équité et différentes formes de répartition.', 'Mobiliser Aristote, Rousseau, Kant et Rawls avec précision.', 'Construire une argumentation sur la justice des lois et des institutions.'],
    course: [
      { heading: '1. Définir la justice', body: ['La justice désigne à la fois une vertu, une exigence morale et une institution. Elle interroge la manière dont les personnes doivent être traitées, les règles qui organisent la vie commune et les procédures qui permettent de trancher les conflits.', 'Il faut distinguer la justice d’une simple préférence personnelle. Une décision juste doit pouvoir être justifiée par des raisons partageables : égalité de traitement, droits, besoins, responsabilités ou réparation d’un tort. Ces critères peuvent entrer en tension.'] },
      { heading: '2. Loi, droit et légitimité', body: ['Le droit positif rassemble les règles en vigueur. La légalité indique qu’une décision respecte ces règles ; la légitimité demande si le pouvoir ou la règle peut être justifié. Une loi peut être légale tout en étant contestée comme injuste.', 'Le droit naturel désigne, dans plusieurs traditions, des principes réputés supérieurs aux lois particulières. Le débat porte alors sur les critères permettant de juger une loi : raison, dignité, droits fondamentaux ou bien commun.'] },
      { heading: '3. Les formes de justice', body: ['Aristote distingue la justice distributive, qui concerne la répartition des biens et des charges, et la justice corrective, qui vise à rétablir un équilibre après un tort. Ces formes ne répondent pas exactement aux mêmes questions.', 'L’égalité peut signifier traiter chacun de façon identique, garantir les mêmes droits, compenser des désavantages ou assurer des chances comparables. L’équité adapte l’application d’une règle aux circonstances pertinentes sans devenir arbitraire.'] },
      { heading: '4. Justice sociale et institutions', body: ['Rawls imagine une position originelle dans laquelle des personnes choisissent des principes de justice derrière un voile d’ignorance : elles ignorent leur future place dans la société. Cette expérience de pensée vise à limiter les choix biaisés par l’intérêt personnel.', 'Le principe de différence autorise certaines inégalités si elles contribuent à améliorer la situation des moins avantagés. Il ne signifie pas que toute inégalité est juste : les institutions doivent aussi garantir les libertés fondamentales et l’égalité équitable des chances.'] },
      { heading: '5. Obéir, résister, réparer', body: ['L’obéissance à la loi rend possible une vie collective réglée, mais elle ne clôt pas la question de la justice. La désobéissance civile, lorsqu’elle est publique et non violente, peut chercher à rendre visible une injustice et à faire évoluer le droit.', 'Une réflexion rigoureuse distingue la critique argumentée d’une règle, le refus individuel et la contestation collective. Elle examine les conséquences, les droits des personnes concernées et les procédures de réparation.'] },
    ],
    keyPoints: ['La justice concerne les personnes, les règles et les institutions.', 'Le droit positif désigne les règles en vigueur ; la légitimité interroge leur justification.', 'Aristote distingue justice distributive et justice corrective.', 'L’équité tient compte des différences pertinentes sans devenir arbitraire.', 'Rawls utilise le voile d’ignorance pour penser des principes impartiaux.', 'Le principe de différence concerne la situation des moins avantagés.', 'La désobéissance civile peut contester publiquement une injustice.'],
    method: ['Définir les sens de justice, droit, égalité et équité.', 'Identifier le critère de répartition ou de décision étudié.', 'Distinguer légalité et légitimité.', 'Mobiliser un auteur en expliquant son argument.', 'Présenter une objection et examiner ses conséquences.', 'Conclure en répondant précisément au problème.'],
    flashcards: [
      { front: 'Justice', back: 'Exigence de rendre à chacun ce qui lui est dû et d’organiser équitablement les rapports sociaux.' },
      { front: 'Droit positif', back: 'Ensemble des règles juridiques effectivement en vigueur dans une société donnée.' },
      { front: 'Droit naturel', back: 'Ensemble de principes considérés comme fondés sur la nature ou la raison humaine, au-delà des lois particulières.' },
      { front: 'Légalité', back: 'Conformité d’un acte ou d’une décision aux lois en vigueur.' },
      { front: 'Légitimité', back: 'Caractère d’un pouvoir ou d’une règle jugé fondé ou justifiable.' },
      { front: 'Équité', back: 'Recherche d’un traitement juste tenant compte des situations particulières.' },
      { front: 'Égalité en droit', back: 'Reconnaissance des mêmes droits et obligations juridiques pour les personnes concernées.' },
      { front: 'Égalité des chances', back: 'Principe visant à limiter l’influence des conditions de départ sur l’accès aux positions sociales.' },
      { front: 'Égalité des résultats', back: 'Réduction des écarts de situation ou de ressources, selon des critères déterminés.' },
      { front: 'Distributive justice', back: 'Répartition des biens, ressources, charges et avantages au sein d’une communauté.' },
      { front: 'Justice corrective', back: 'Réparation d’un déséquilibre ou d’un tort entre des personnes.' },
      { front: 'Peine', back: 'Sanction juridique prononcée en réponse à une infraction selon des règles établies.' },
      { front: 'Responsabilité', back: 'Obligation de répondre de ses actes et, selon les cas, d’en réparer les conséquences.' },
      { front: 'Impartialité', back: 'Exigence de ne pas favoriser une partie pour des motifs étrangers aux critères pertinents.' },
      { front: 'Aristote', back: 'Distingue notamment justice distributive et justice corrective dans l’Éthique à Nicomaque.' },
      { front: 'Platon', back: 'Dans La République, interroge la justice dans la cité et dans l’âme.' },
      { front: 'Hobbes', back: 'Pense que des règles communes et une autorité politique sont nécessaires à la paix civile.' },
      { front: 'Rousseau', back: 'Relie la légitimité politique au pacte social et à la volonté générale.' },
      { front: 'Kant', back: 'Associe le droit à la coexistence des libertés extérieures selon une règle universalisable.' },
      { front: 'Rawls', back: 'Propose des principes de justice choisis derrière un voile d’ignorance.' },
      { front: 'Voile d’ignorance', back: 'Expérience de pensée où les principes sont choisis sans connaître sa future position sociale.' },
      { front: 'Position originelle', back: 'Situation hypothétique de choix des principes de justice chez Rawls.' },
      { front: 'Principe de différence', back: 'Principe rawlsien autorisant certaines inégalités si elles améliorent la situation des moins avantagés.' },
      { front: 'Désobéissance civile', back: 'Violation publique, non violente et motivée par la conscience d’une loi jugée gravement injuste.' },
      { front: 'Thoreau', back: 'Associe la désobéissance civile au refus de coopérer avec une injustice politique.' },
      { front: 'Droit et morale', back: 'Le droit organise des obligations publiques ; la morale interroge ce qui doit être fait.' },
      { front: 'Discrimination', back: 'Traitement défavorable fondé sur un critère illégitime ou prohibé.' },
      { front: 'Mérite', back: 'Critère de répartition fondé sur les efforts, contributions ou performances, dont la mesure peut être discutée.' },
      { front: 'Procédure équitable', back: 'Procédure impartiale garantissant notamment écoute, défense et examen des éléments.' },
      { front: 'Justice sociale', back: 'Réflexion sur la répartition des droits, ressources, opportunités et protections dans la société.' },
    ],
    quiz: [
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Exigence de rendre à chacun ce qui lui est dû et d’organiser équitablement les rapports sociaux. » ?', choices: ['Justice', 'Égalité des chances', 'Impartialité', 'Position originelle'], answer: 0, explanation: 'La définition décrit justice : Exigence de rendre à chacun ce qui lui est dû et d’organiser équitablement les rapports sociaux.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Ensemble des règles juridiques effectivement en vigueur dans une société donnée. » ?', choices: ['Principe de différence', 'Droit positif', 'Égalité des résultats', 'Aristote'], answer: 1, explanation: 'La définition décrit droit positif : Ensemble des règles juridiques effectivement en vigueur dans une société donnée.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Ensemble de principes considérés comme fondés sur la nature ou la raison humaine, au-delà des lois particulières. » ?', choices: ['Platon', 'Désobéissance civile', 'Droit naturel', 'Distributive justice'], answer: 2, explanation: 'La définition décrit droit naturel : Ensemble de principes considérés comme fondés sur la nature ou la raison humaine, au-delà des lois particulières.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Conformité d’un acte ou d’une décision aux lois en vigueur. » ?', choices: ['Justice corrective', 'Hobbes', 'Thoreau', 'Légalité'], answer: 3, explanation: 'La définition décrit légalité : Conformité d’un acte ou d’une décision aux lois en vigueur.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Caractère d’un pouvoir ou d’une règle jugé fondé ou justifiable. » ?', choices: ['Légitimité', 'Peine', 'Rousseau', 'Droit et morale'], answer: 0, explanation: 'La définition décrit légitimité : Caractère d’un pouvoir ou d’une règle jugé fondé ou justifiable.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Recherche d’un traitement juste tenant compte des situations particulières. » ?', choices: ['Discrimination', 'Équité', 'Responsabilité', 'Kant'], answer: 1, explanation: 'La définition décrit équité : Recherche d’un traitement juste tenant compte des situations particulières.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Reconnaissance des mêmes droits et obligations juridiques pour les personnes concernées. » ?', choices: ['Rawls', 'Mérite', 'Égalité en droit', 'Impartialité'], answer: 2, explanation: 'La définition décrit égalité en droit : Reconnaissance des mêmes droits et obligations juridiques pour les personnes concernées.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Principe visant à limiter l’influence des conditions de départ sur l’accès aux positions sociales. » ?', choices: ['Aristote', 'Voile d’ignorance', 'Procédure équitable', 'Égalité des chances'], answer: 3, explanation: 'La définition décrit égalité des chances : Principe visant à limiter l’influence des conditions de départ sur l’accès aux positions sociales.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Réduction des écarts de situation ou de ressources, selon des critères déterminés. » ?', choices: ['Égalité des résultats', 'Platon', 'Position originelle', 'Justice sociale'], answer: 0, explanation: 'La définition décrit égalité des résultats : Réduction des écarts de situation ou de ressources, selon des critères déterminés.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Répartition des biens, ressources, charges et avantages au sein d’une communauté. » ?', choices: ['Justice', 'Distributive justice', 'Hobbes', 'Principe de différence'], answer: 1, explanation: 'La définition décrit distributive justice : Répartition des biens, ressources, charges et avantages au sein d’une communauté.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Réparation d’un déséquilibre ou d’un tort entre des personnes. » ?', choices: ['Désobéissance civile', 'Droit positif', 'Justice corrective', 'Rousseau'], answer: 2, explanation: 'La définition décrit justice corrective : Réparation d’un déséquilibre ou d’un tort entre des personnes.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Sanction juridique prononcée en réponse à une infraction selon des règles établies. » ?', choices: ['Kant', 'Thoreau', 'Droit naturel', 'Peine'], answer: 3, explanation: 'La définition décrit peine : Sanction juridique prononcée en réponse à une infraction selon des règles établies.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Obligation de répondre de ses actes et, selon les cas, d’en réparer les conséquences. » ?', choices: ['Responsabilité', 'Rawls', 'Droit et morale', 'Légalité'], answer: 0, explanation: 'La définition décrit responsabilité : Obligation de répondre de ses actes et, selon les cas, d’en réparer les conséquences.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Exigence de ne pas favoriser une partie pour des motifs étrangers aux critères pertinents. » ?', choices: ['Légitimité', 'Impartialité', 'Voile d’ignorance', 'Discrimination'], answer: 1, explanation: 'La définition décrit impartialité : Exigence de ne pas favoriser une partie pour des motifs étrangers aux critères pertinents.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Distingue notamment justice distributive et justice corrective dans l’Éthique à Nicomaque. » ?', choices: ['Mérite', 'Équité', 'Aristote', 'Position originelle'], answer: 2, explanation: 'La définition décrit aristote : Distingue notamment justice distributive et justice corrective dans l’Éthique à Nicomaque.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Dans La République, interroge la justice dans la cité et dans l’âme. » ?', choices: ['Principe de différence', 'Procédure équitable', 'Égalité en droit', 'Platon'], answer: 3, explanation: 'La définition décrit platon : Dans La République, interroge la justice dans la cité et dans l’âme.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Pense que des règles communes et une autorité politique sont nécessaires à la paix civile. » ?', choices: ['Hobbes', 'Désobéissance civile', 'Justice sociale', 'Égalité des chances'], answer: 0, explanation: 'La définition décrit hobbes : Pense que des règles communes et une autorité politique sont nécessaires à la paix civile.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Relie la légitimité politique au pacte social et à la volonté générale. » ?', choices: ['Égalité des résultats', 'Rousseau', 'Thoreau', 'Justice'], answer: 1, explanation: 'La définition décrit rousseau : Relie la légitimité politique au pacte social et à la volonté générale.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Associe le droit à la coexistence des libertés extérieures selon une règle universalisable. » ?', choices: ['Droit positif', 'Distributive justice', 'Kant', 'Droit et morale'], answer: 2, explanation: 'La définition décrit kant : Associe le droit à la coexistence des libertés extérieures selon une règle universalisable.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Propose des principes de justice choisis derrière un voile d’ignorance. » ?', choices: ['Discrimination', 'Droit naturel', 'Justice corrective', 'Rawls'], answer: 3, explanation: 'La définition décrit rawls : Propose des principes de justice choisis derrière un voile d’ignorance.' },
    ],
    exercises: [
      { title: 'Loi et justice', level: 'Facile', statement: 'Expliquez pourquoi une loi en vigueur n’est pas automatiquement considérée comme juste.', correction: 'La légalité indique la conformité au droit positif. La justice interroge la justification de la règle : égalité, droits, dignité et équité. Une loi peut donc être valide juridiquement tout en faisant l’objet d’une critique morale et politique.', skills: ['Distinction conceptuelle', 'Argumentation'] },
      { title: 'Égalité et équité', level: 'Facile', statement: 'Distinguez égalité de traitement et équité à l’aide d’un exemple scolaire.', correction: 'L’égalité de traitement applique la même règle à tous. L’équité peut prévoir un aménagement justifié par une différence pertinente afin de rendre l’accès réellement comparable. L’aménagement ne doit pas être arbitraire : il doit répondre à un besoin établi.', skills: ['Définition', 'Exemple'] },
      { title: 'Justice distributive', level: 'Intermédiaire', statement: 'Une collectivité doit répartir une ressource rare. Présentez deux critères possibles et leurs limites.', correction: 'Une répartition égalitaire donne la même part à chacun mais peut ignorer les besoins. Une répartition selon les besoins aide davantage les personnes les plus vulnérables mais exige une évaluation fiable. Une répartition au mérite soulève la difficulté de mesurer les contributions et les conditions de départ.', skills: ['Comparaison', 'Nuance'] },
      { title: 'Voile d’ignorance', level: 'Intermédiaire', statement: 'Expliquez l’intérêt de choisir des principes de justice sans connaître sa future position sociale.', correction: 'Le voile d’ignorance empêche les participants de savoir s’ils seront favorisés ou défavorisés. Ils sont ainsi incités à choisir des règles acceptables quelle que soit leur place future. C’est une expérience de pensée, non une situation historique réelle.', skills: ['Rawls', 'Expérience de pensée'] },
      { title: 'Légal et légitime', level: 'Intermédiaire', statement: 'Analysez la différence entre légalité et légitimité dans une contestation politique.', correction: 'Une action est légale si elle respecte les règles en vigueur. Sa légitimité dépend des raisons qui la justifient. Une contestation peut être illégale tout en invoquant une exigence de justice ; il faut alors examiner les moyens employés, les droits en jeu et les conséquences.', skills: ['Repères', 'Analyse'] },
      { title: 'Désobéissance civile', level: 'Difficile', statement: 'Présentez les critères qui distinguent la désobéissance civile d’un simple intérêt privé.', correction: 'La désobéissance civile est généralement publique, consciente, non violente et motivée par la contestation d’une injustice. Elle vise à interpeller la communauté politique et à obtenir une modification des règles. Les critères exacts varient selon les auteurs et les contextes.', skills: ['Philosophie politique', 'Définition'] },
      { title: 'Mérite et justice sociale', level: 'Difficile', statement: 'Discutez l’idée selon laquelle une répartition au mérite serait toujours juste.', correction: 'Le mérite peut reconnaître l’effort et la contribution. Mais les performances dépendent aussi des conditions de départ, des ressources et des opportunités. Une théorie de la justice doit donc préciser ce qui est récompensé et comment sont prises en compte les inégalités initiales.', skills: ['Problématisation', 'Nuance'] },
      { title: 'Procédure équitable', level: 'Intermédiaire', statement: 'Pourquoi une décision juste exige-t-elle une procédure impartiale ?', correction: 'Une procédure impartiale garantit que les personnes sont entendues, que les éléments sont examinés et que les critères sont appliqués sans favoritisme. Une bonne intention ne suffit pas si la décision est prise de manière arbitraire.', skills: ['Institutions', 'Argumentation'] },
      { title: 'Construire une problématique', level: 'Difficile', statement: 'Proposez une problématique pour le sujet : « Faut-il toujours obéir aux lois ? »', correction: 'On peut opposer la nécessité de règles communes, qui protègent les droits et rendent la vie collective possible, à la possibilité qu’une loi soit injuste. La question devient : comment articuler sécurité juridique, jugement moral et contestation légitime ?', skills: ['Problématisation', 'Dissertation'] },
      { title: 'Plan de dissertation', level: 'Difficile', statement: 'Construisez un plan pour : « L’égalité est-elle toujours juste ? »', correction: 'I. L’égalité de droits protège contre les privilèges et l’arbitraire. II. Un traitement strictement identique peut ignorer les besoins et les désavantages réels. III. Une justice équitable articule droits égaux, critères pertinents et correction des inégalités injustifiées.', skills: ['Dissertation', 'Plan'] },
    ],
    sources: [{ title: 'Programmes et ressources en philosophie — voie GT', institution: 'Ministère de l’Éducation nationale — Éduscol', url: 'https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt', consultedAt: '2026-11-01', supports: ['Programme en vigueur de philosophie en terminale générale', 'Ressources officielles sur notions, auteurs, repères et exercices'] }],
    sourceNote: 'Ressource pédagogique originale pour la terminale générale, alignée sur le programme officiel Éduscol. Les auteurs sont mobilisés comme outils de réflexion ; la ressource ne remplace pas l’étude des textes menée en classe.',
    validationStatus: 'draft'
  },
  'philo-langage': {
    title: 'Le langage',
    objectives: ['Distinguer langue, parole, signe et signification.', 'Analyser les rapports entre langage, pensée, vérité et pouvoir.', 'Mobiliser Platon, Saussure, Wittgenstein et Austin sans réduire leurs thèses à des slogans.'],
    course: [
      { heading: '1. Langage, langue et parole', body: ['Le langage est une capacité humaine de produire et comprendre des signes. Une langue est un système conventionnel partagé par une communauté ; la parole désigne ses usages particuliers dans des situations concrètes.', 'Cette distinction permet de comprendre que communiquer suppose des règles communes, mais aussi des intentions, des contextes et des interprétations.'] },
      { heading: '2. Le signe et la signification', body: ['Le signe linguistique associe un signifiant, sa forme sonore ou graphique, et un signifié, le concept auquel il renvoie. Le lien est conventionnel : rien dans le son d’un mot ne l’oblige naturellement à désigner telle chose.', 'La polysémie, les métaphores et les ambiguïtés montrent que le sens ne se réduit pas à une étiquette fixe. Il dépend aussi des usages et du contexte.'] },
      { heading: '3. Langage et pensée', body: ['Le langage permet d’exprimer une pensée, de la communiquer et de la rendre examinable. Mais il peut aussi contribuer à la structurer : nommer, distinguer et catégoriser modifie la manière dont nous organisons l’expérience.', 'Il faut éviter deux excès : croire que les mots ne font que copier une pensée entièrement constituée, ou soutenir qu’ils déterminent absolument tout ce que nous pouvons penser.'] },
      { heading: '4. Dire, agir et exercer un pouvoir', body: ['Certains énoncés accomplissent une action : promettre, ordonner, déclarer une séance ouverte. Austin montre que parler ne consiste pas seulement à décrire ; les paroles ont des effets dans des contextes réglés.', 'Le langage peut convaincre, exclure, légitimer ou contester. L’analyse critique examine les choix de mots, les présupposés, les sources et les effets sans supposer que toute parole serait manipulatrice.'] },
      { heading: '5. Méthode : analyser un énoncé', body: ['Définir les termes importants, identifier le locuteur, le destinataire et la situation, puis distinguer le contenu littéral de la fonction de l’énoncé.', 'Pour une dissertation, construire une tension : le langage transmet-il une pensée déjà formée ou participe-t-il à sa formation ? Appuyer chaque étape sur des exemples précis et des arguments.'] }
    
      ,{ heading: 'Le langage comme expression, action et pouvoir', body: ['Le langage permet de formuler des pensées, de communiquer des expériences et de construire des significations partagées. Il ne se réduit pas à un instrument qui transmettrait des idées déjà entièrement formées : les mots peuvent aussi aider à organiser la pensée, distinguer des notions et rendre certains problèmes visibles.', 'Saussure distingue la langue, système collectif de signes, et la parole, usage individuel de ce système. Wittgenstein insiste sur les usages des mots dans des pratiques et des formes de vie. Austin montre que parler peut accomplir des actions, comme promettre, ordonner ou déclarer, si le contexte et les conditions de réussite sont réunis.', 'Le langage peut aussi exercer un pouvoir : nommer, catégoriser, convaincre, exclure ou légitimer. La possibilité de communiquer n’assure pas l’accord et les mots peuvent être ambigus ou manipulés. Une analyse doit donc distinguer sens, intention, contexte et effets d’un énoncé.'] }],
    keyPoints: ['La langue est un système collectif ; la parole en est un usage situé.', 'Le signe associe signifiant et signifié selon une convention.', 'Le contexte contribue à déterminer le sens.', 'Le langage exprime la pensée et peut aussi la structurer.', 'Parler peut être accomplir une action et exercer un pouvoir.'],
    method: ['Définir langage, langue, parole et pensée.', 'Distinguer forme du signe, concept et référent.', 'Préciser le contexte et la fonction de l’énoncé.', 'Présenter une thèse, son argument et une objection.', 'Conclure en répondant au problème sans généralisation excessive.'],
    flashcards: [
      { front: 'Langage', back: 'Système de signes et de règles permettant de communiquer, de penser et de représenter le monde.' },
      { front: 'Langue', back: 'Système conventionnel de signes partagé par une communauté.' },
      { front: 'Parole', back: 'Usage individuel et situé d’une langue.' },
      { front: 'Signe linguistique', back: 'Association conventionnelle d’un signifiant et d’un signifié.' },
      { front: 'Signifiant', back: 'Face matérielle du signe : son, graphie ou forme perceptible.' },
      { front: 'Signifié', back: 'Concept ou contenu mental associé au signifiant.' },
      { front: 'Arbitraire du signe', back: 'Lien entre signifiant et signifié qui dépend d’une convention, non d’une ressemblance naturelle.' },
      { front: 'Communication', back: 'Transmission et interprétation de messages dans une situation et un contexte.' },
      { front: 'Dialogue', back: 'Échange dans lequel les interlocuteurs peuvent répondre, corriger et préciser leurs propos.' },
      { front: 'Ambiguïté', back: 'Possibilité pour un énoncé de recevoir plusieurs interprétations.' },
      { front: 'Polysémie', back: 'Propriété d’un mot ou d’une expression qui possède plusieurs sens liés.' },
      { front: 'Concept', back: 'Représentation intellectuelle générale permettant de classer et de penser.' },
      { front: 'Nommer', back: 'Attribuer un signe à une chose ou à une expérience ; cela organise aussi notre manière de les percevoir.' },
      { front: 'Platon', back: 'Dans le Cratyle, examine le rapport entre les noms, les choses et la convention.' },
      { front: 'Aristote', back: 'Analyse le langage comme expression de pensées et de représentations, dans un cadre partagé.' },
      { front: 'Descartes', back: 'Associe la parole véritable à la capacité de manifester une pensée, au-delà d’une simple réaction mécanique.' },
      { front: 'Hobbes', back: 'Souligne le rôle des noms et des définitions dans le raisonnement et la communication.' },
      { front: 'Rousseau', back: 'Interroge l’origine des langues et le lien entre langage, passions et vie sociale.' },
      { front: 'Saussure', back: 'Distingue langue et parole et analyse le signe comme association du signifiant et du signifié.' },
      { front: 'Wittgenstein', back: 'Montre que le sens d’un mot dépend de ses usages dans des pratiques et des formes de vie.' },
      { front: 'Austin', back: 'Étudie les actes accomplis en parlant : promettre, ordonner, baptiser ou déclarer.' },
      { front: 'Acte de langage', back: 'Action réalisée par un énoncé dans un contexte, au-delà de son contenu descriptif.' },
      { front: 'Performativité', back: 'Capacité de certains énoncés à accomplir une action lorsque les conditions sociales sont réunies.' },
      { front: 'Mensonge', back: 'Énoncé présenté comme vrai par celui qui parle alors qu’il le tient pour faux, avec intention de tromper.' },
      { front: 'Vérité et langage', back: 'Les mots permettent de formuler des propositions susceptibles d’être discutées et vérifiées.' },
      { front: 'Langage et pensée', back: 'Le langage exprime la pensée mais peut aussi la structurer, la préciser et la transformer.' },
      { front: 'Langage et pouvoir', back: 'Les mots peuvent convaincre, exclure, catégoriser, légitimer ou contester une autorité.' },
      { front: 'Traduction', back: 'Passage d’un énoncé d’une langue à une autre, qui exige des choix de sens et de contexte.' },
      { front: 'Silence', back: 'Absence de parole qui peut signifier hésitation, refus, écoute ou impossibilité de dire.' },
      { front: 'Problème philosophique', back: 'Le langage décrit-il une pensée déjà formée ou contribue-t-il à la constituer ?' }
    ],
    quiz: [
      { level: 'Intermédiaire', question: 'Quelle distinction Saussure établit-il ?', choices: ['Langue et parole', 'Raison et émotion', 'Nature et culture', 'Vérité et opinion'], answer: 0, explanation: 'La langue est le système collectif ; la parole en est l’usage individuel.' },
      { level: 'Intermédiaire', question: 'Que désigne le signifiant ?', choices: ['La forme perceptible du signe', 'Le concept associé', 'La chose réelle', 'La règle grammaticale'], answer: 0, explanation: 'Le signifiant est la face sonore ou graphique du signe.' },
      { level: 'Intermédiaire', question: 'Pourquoi dit-on que le signe linguistique est arbitraire ?', choices: ['Son lien au sens repose sur une convention', 'Il est choisi au hasard à chaque phrase', 'Il ne possède aucun sens', 'Il ressemble toujours à son référent'], answer: 0, explanation: 'La convention sociale stabilise le lien entre forme et sens.' },
      { level: 'Intermédiaire', question: 'Quel problème le Cratyle de Platon examine-t-il ?', choices: ['Le rapport entre les noms et les choses', 'La séparation des pouvoirs', 'La connaissance scientifique moderne', 'La justice distributive'], answer: 0, explanation: 'Le dialogue questionne la justesse des noms et leur rapport au réel.' },
      { level: 'Intermédiaire', question: 'Quelle idée résume l’approche de Wittgenstein sur le sens ?', choices: ['Le sens dépend des usages', 'Le sens est toujours une image', 'Chaque mot possède un sens naturel unique', 'Le langage ne sert qu’à décrire'], answer: 0, explanation: 'Les usages dans des pratiques donnent leur fonction aux mots.' },
      { level: 'Intermédiaire', question: 'Que sont les actes de langage étudiés par Austin ?', choices: ['Des actions accomplies en parlant', 'Des sons sans contexte', 'Des erreurs de syntaxe', 'Des gestes qui remplacent les mots'], answer: 0, explanation: 'Promettre ou ordonner sont des actions réalisées par des énoncés.' },
      { level: 'Intermédiaire', question: 'Quel énoncé est performatif dans un contexte approprié ?', choices: ['Je vous déclare la séance ouverte', 'La séance commence à neuf heures', 'La salle est lumineuse', 'Le public est nombreux'], answer: 0, explanation: 'La formule accomplit l’ouverture si les conditions institutionnelles sont réunies.' },
      { level: 'Intermédiaire', question: 'Pourquoi le contexte est-il important pour interpréter une phrase ?', choices: ['Il aide à déterminer le sens visé', 'Il supprime toute ambiguïté', 'Il remplace les mots', 'Il rend toute interprétation équivalente'], answer: 0, explanation: 'Le contexte précise les références, intentions et usages.' },
      { level: 'Intermédiaire', question: 'Quel est un risque de l’ambiguïté ?', choices: ['Plusieurs interprétations possibles', 'Une impossibilité de communiquer dans tous les cas', 'La disparition des conventions', 'Une preuve automatique de mensonge'], answer: 0, explanation: 'Un énoncé ambigu peut être compris de plusieurs façons.' },
      { level: 'Intermédiaire', question: 'Quelle thèse est la plus nuancée sur le rapport pensée-langage ?', choices: ['Le langage peut exprimer et structurer la pensée', 'La pensée est toujours indépendante des mots', 'Les mots déterminent entièrement chaque idée', 'La pensée n’existe jamais sans parole audible'], answer: 0, explanation: 'Le langage aide à formuler et organiser les idées sans les réduire mécaniquement.' },
      { level: 'Intermédiaire', question: 'Qu’est-ce qu’une langue ?', choices: ['Un système partagé de signes et de règles', 'Un discours prononcé par une seule personne', 'Une capacité exclusivement écrite', 'Un geste universel identique partout'], answer: 0, explanation: 'Une langue est une institution sociale conventionnelle.' },
      { level: 'Intermédiaire', question: 'Quelle affirmation distingue correctement langue et parole ?', choices: ['La langue est collective, la parole est son actualisation', 'La parole est collective, la langue individuelle', 'Les deux termes sont strictement synonymes', 'La langue ne comporte aucune règle'], answer: 0, explanation: 'La distinction oppose système social et réalisation particulière.' },
      { level: 'Intermédiaire', question: 'Quel rôle les définitions jouent-elles dans le raisonnement ?', choices: ['Elles stabilisent le sens des termes', 'Elles rendent toute discussion inutile', 'Elles remplacent les preuves', 'Elles empêchent les désaccords'], answer: 0, explanation: 'Définir limite les équivoques et clarifie les étapes d’un argument.' },
      { level: 'Intermédiaire', question: 'Que signifie la polysémie ?', choices: ['Un mot peut avoir plusieurs sens liés', 'Un mot ne possède aucun sens', 'Un mot change de langue à chaque phrase', 'Un mot ne peut être traduit'], answer: 0, explanation: 'La polysémie est la pluralité de sens d’une même forme.' },
      { level: 'Intermédiaire', question: 'Quel usage du langage manifeste son pouvoir social ?', choices: ['Désigner des groupes et orienter leur image', 'Produire uniquement des sons neutres', 'Éviter toute relation sociale', 'Garantir l’accord de tous'], answer: 0, explanation: 'Les catégories et discours peuvent valoriser ou marginaliser.' },
      { level: 'Intermédiaire', question: 'Pourquoi traduire est-il parfois difficile ?', choices: ['Les sens dépendent aussi des contextes culturels', 'Les langues n’ont aucun point commun', 'Chaque mot est intraduisible', 'La grammaire est identique partout'], answer: 0, explanation: 'Une traduction doit préserver autant que possible sens, ton et contexte.' },
      { level: 'Intermédiaire', question: 'Quelle différence existe entre mensonge et erreur ?', choices: ['Le mensonge implique une intention de tromper', 'L’erreur suppose toujours une intention', 'Le mensonge est toujours involontaire', 'Les deux notions sont identiques'], answer: 0, explanation: 'L’intention distingue le mensonge d’une affirmation fausse par méprise.' },
      { level: 'Intermédiaire', question: 'À quoi sert le dialogue philosophique ?', choices: ['Éprouver et préciser des raisons par l’échange', 'Éviter toute objection', 'Imposer une opinion par répétition', 'Remplacer l’argumentation par le vote'], answer: 0, explanation: 'Le dialogue permet de confronter des arguments et de clarifier les concepts.' },
      { level: 'Intermédiaire', question: 'Quelle question met en évidence un enjeu du langage ?', choices: ['Les mots décrivent-ils le monde ou contribuent-ils à le construire ?', 'La parole est-elle toujours plus rapide que l’écriture ?', 'Toutes les langues ont-elles le même alphabet ?', 'Peut-on parler sans respirer ?'], answer: 0, explanation: 'Elle interroge le rôle du langage dans la pensée et la représentation.' },
      { level: 'Intermédiaire', question: 'Quelle méthode est pertinente pour analyser un énoncé ?', choices: ['Étudier ses termes, son contexte et sa fonction', 'Isoler un mot sans tenir compte du contexte', 'Supposer une intention sans preuve', 'Remplacer l’analyse par une opinion'], answer: 0, explanation: 'L’analyse articule sens lexical, situation et fonction de l’énoncé.' }
    ],
    exercises: [
      { title: 'Langue et parole', level: 'Facile', statement: 'Explique en quelques lignes la différence entre langue et parole, avec un exemple.', correction: 'La langue est le système partagé ; la parole est son usage situé par un locuteur. Exemple : le français comme système et une phrase prononcée dans une conversation.', skills: ['Distinction', 'Exemple'] },
      { title: 'Signe linguistique', level: 'Facile', statement: 'Présente les deux faces du signe linguistique à partir du mot « arbre ».', correction: 'Le signifiant est la suite sonore ou écrite « arbre » ; le signifié est le concept associé. L’arbre concret est le référent, à distinguer du concept.', skills: ['Conceptualisation'] },
      { title: 'Ambiguïté', level: 'Facile', statement: 'Propose une phrase ambiguë et explique deux interprétations possibles.', correction: 'Il faut proposer un énoncé réellement susceptible de deux lectures, puis préciser les indices contextuels qui permettent de choisir.', skills: ['Analyse du langage'] },
      { title: 'Platon et les noms', level: 'Intermédiaire', statement: 'Pourquoi la question de la justesse des noms est-elle philosophique ?', correction: 'Elle demande si les mots correspondent naturellement aux choses ou si leur sens dépend de conventions. Les conséquences concernent connaissance, communication et possibilité de nommer correctement.', skills: ['Référence', 'Problématisation'] },
      { title: 'Wittgenstein et l’usage', level: 'Intermédiaire', statement: 'Explique pourquoi le sens d’un mot ne se réduit pas à une définition de dictionnaire.', correction: 'Le sens se comprend aussi dans les pratiques où le mot est employé, les règles suivies et les réactions attendues. Une définition reste utile mais ne décrit pas toujours tous les usages.', skills: ['Interprétation'] },
      { title: 'Actes de langage', level: 'Intermédiaire', statement: 'Distingue le contenu d’une phrase et l’action qu’elle accomplit.', correction: '« Je promets de venir » décrit un engagement et accomplit aussi l’acte de promettre, si le contexte et le locuteur s’y prêtent.', skills: ['Distinction'] },
      { title: 'Langage et pensée', level: 'Intermédiaire', statement: 'Construis deux arguments : le langage exprime la pensée ; il peut aussi la structurer.', correction: 'Il exprime des idées déjà formées, mais les mots et catégories aident également à distinguer, mémoriser et organiser les expériences. Il faut éviter une opposition absolue.', skills: ['Argumentation'] },
      { title: 'Langage et pouvoir', level: 'Difficile', statement: 'Montre comment un choix de vocabulaire peut orienter un débat public.', correction: 'Comparer deux désignations d’une même situation, analyser leurs connotations et leurs effets, puis vérifier les faits pour ne pas confondre cadrage lexical et preuve.', skills: ['Esprit critique'] },
      { title: 'Traduction', level: 'Difficile', statement: 'Explique pourquoi traduire suppose parfois d’interpréter.', correction: 'Les expressions idiomatiques, références culturelles, registres et ambiguïtés ne se superposent pas exactement. Le traducteur choisit une formulation qui préserve la fonction et le sens.', skills: ['Nuance'] },
      { title: 'Mini-dissertation', level: 'Difficile', statement: 'Rédige une introduction pour : « Le langage nous empêche-t-il de penser librement ? »', correction: 'Définir langage et liberté de penser ; montrer la tension entre catégories héritées qui orientent la pensée et ressources du langage pour critiquer, inventer et communiquer ; formuler une problématique précise.', skills: ['Dissertation'] }
    ],
    revisionSheets: [{ title: 'Repères essentiels — Le langage', summary: ['Le langage est une capacité de signifier et de communiquer.', 'Une langue est un système social ; la parole en est l’usage.', 'Les mots ont des fonctions descriptives, expressives et performatives.', 'Le sens dépend aussi des usages et du contexte.'], mustKnow: ['Signifiant : forme perceptible du signe.', 'Signifié : concept associé.', 'Acte de langage : action accomplie par un énoncé.'], methods: ['Analyser les mots et le contexte.', 'Distinguer ce qui est dit et ce qui est fait en parlant.', 'Étayer les interprétations par des exemples.'] }],
    sources: [{ title: 'Programmes et ressources en philosophie — voie GT', institution: 'Ministère de l’Éducation nationale — Éduscol', url: 'https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt', consultedAt: '2026-11-01', supports: ['Programme de philosophie en terminale générale'] }],
    sourceNote: 'Ressource pédagogique de travail adossée au programme officiel. Les positions des auteurs sont des repères synthétiques à approfondir par l’étude des textes en classe ; relecture disciplinaire requise.',
    validationStatus: 'draft'
  },
  'philo-liberte': {
    title: 'La liberté',
    objectives: ['Distinguer les sens politique, moral et métaphysique de la liberté.', 'Analyser les rapports entre choix, désir, déterminisme et responsabilité.', 'Comprendre autonomie et hétéronomie, notamment chez Kant.', 'Évaluer les conditions institutionnelles et sociales des libertés effectives.'],
    course: [
      { heading: '1. Les sens de la liberté', body: ['La liberté peut désigner l’absence d’obstacles extérieurs, la capacité de choisir, l’autonomie morale ou les conditions réelles permettant d’agir. Ces sens sont liés mais ne se confondent pas.', 'Une personne peut disposer d’un droit sans avoir les moyens matériels de l’exercer. Inversement, l’absence de toute règle ne garantit pas une liberté réelle : elle peut laisser place à la domination du plus fort.'] },
      { heading: '2. Choix et libre arbitre', body: ['Le libre arbitre désigne la capacité de choisir entre plusieurs possibilités. Mais ressentir que l’on choisit ne suffit pas à démontrer que notre volonté est indépendante de toute cause. Nos décisions sont influencées par l’éducation, les habitudes, les désirs et les circonstances.', 'Descartes analyse la volonté et le rôle de l’entendement ; Spinoza critique l’illusion d’une volonté absolument indépendante lorsque nous ignorons les causes qui nous déterminent. Comprendre ces causes peut accroître notre puissance d’agir.'] },
      { heading: '3. Déterminisme et responsabilité', body: ['Le déterminisme affirme que les événements s’inscrivent dans des chaînes de causes. Il oblige à interroger les conditions de l’action, sans conduire automatiquement à nier toute responsabilité juridique ou morale.', 'La responsabilité suppose d’examiner les capacités de compréhension, les contraintes, l’intention et les circonstances. Il faut éviter de confondre explication causale et justification morale.'] },
      { heading: '4. Autonomie et loi', body: ['Pour Kant, l’autonomie morale consiste à agir selon une règle que la raison peut vouloir comme universelle, plutôt que de suivre seulement ses inclinations. L’autonomie n’est donc pas le caprice ni l’absence de toute règle.', 'Rousseau distingue l’obéissance à une volonté particulière et l’obéissance à une loi à laquelle le citoyen participe comme membre du souverain. Cette conception relie liberté et participation politique.'] },
      { heading: '5. Libertés et conditions sociales', body: ['Les libertés politiques reposent sur des droits, des institutions et des garanties : liberté d’expression, de conscience, de réunion et protection contre l’arbitraire. L’État de droit limite l’exercice du pouvoir.', 'Les conditions matérielles et sociales comptent également : instruction, santé, ressources, sécurité et accès aux institutions peuvent rendre une liberté formelle réellement exerçable.'] },
    ],
    keyPoints: ['La liberté peut désigner absence d’obstacle, autonomie ou capacité effective d’agir.', 'Le sentiment de choisir ne prouve pas à lui seul un libre arbitre absolu.', 'Spinoza relie liberté et compréhension des causes qui nous déterminent.', 'Kant définit l’autonomie morale par la législation rationnelle de la volonté.', 'Rousseau relie liberté civile et participation à la loi commune.', 'La responsabilité exige l’examen des capacités et des circonstances.', 'Les droits et les conditions sociales rendent les libertés effectives.'],
    method: ['Préciser le sens de liberté utilisé dans le sujet.', 'Distinguer contrainte, obstacle, détermination et nécessité.', 'Examiner les causes sans confondre explication et justification.', 'Comparer liberté négative et liberté positive.', 'Mobiliser les auteurs sans réduire leur pensée à une formule.', 'Conclure en articulant autonomie, responsabilité et institutions.'],
    flashcards: [
      { front: 'Liberté', back: 'Capacité d’agir ou de choisir sans être soumis à une contrainte déterminante, selon le sens retenu.' },
      { front: 'Libre arbitre', back: 'Pouvoir supposé de choisir entre plusieurs possibilités.' },
      { front: 'Autonomie', back: 'Capacité de se donner à soi-même une règle par l’usage de la raison.' },
      { front: 'Hétéronomie', back: 'Situation dans laquelle la volonté reçoit sa règle d’une autorité ou d’un désir extérieur.' },
      { front: 'Contrainte', back: 'Force ou obligation qui limite les possibilités d’action.' },
      { front: 'Obstacle', back: 'Élément qui rend une action plus difficile sans nécessairement la rendre impossible.' },
      { front: 'Liberté négative', back: 'Absence d’ingérence ou d’entraves extérieures dans un domaine d’action.' },
      { front: 'Liberté positive', back: 'Possibilité effective de se gouverner soi-même et de réaliser ses capacités.' },
      { front: 'Déterminisme', back: 'Thèse selon laquelle les événements résultent de causes et de conditions.' },
      { front: 'Nécessité', back: 'Ce qui ne peut pas être autrement dans les conditions considérées.' },
      { front: 'Contingence', back: 'Caractère de ce qui peut être ou ne pas être, ou être autrement.' },
      { front: 'Responsabilité', back: 'Possibilité d’imputer un acte à un agent qui peut en répondre.' },
      { front: 'Spinoza', back: 'Analyse la liberté en rapport avec la compréhension des causes qui nous déterminent.' },
      { front: 'Sartre', back: 'Soutient que l’être humain se définit par ses choix et engage sa responsabilité.' },
      { front: 'Kant', back: 'Distingue l’autonomie morale de la simple obéissance aux inclinations.' },
      { front: 'Descartes', back: 'Associe la liberté à la volonté et examine le rôle de la connaissance dans le choix.' },
      { front: 'Hobbes', back: 'Définit la liberté civile comme absence d’obstacles extérieurs à l’action.' },
      { front: 'Rousseau', back: 'Distingue dépendance personnelle et obéissance à une loi que l’on s’est prescrite collectivement.' },
      { front: 'Autonomie morale', back: 'Capacité de vouloir selon une règle que la raison peut reconnaître comme universelle.' },
      { front: 'Volonté', back: 'Faculté de se déterminer à agir ou à poursuivre une fin.' },
      { front: 'Désir', back: 'Tendance vers un objet ou un état jugé source de satisfaction.' },
      { front: 'Passion', back: 'Affection qui peut orienter fortement l’action et diminuer la maîtrise réfléchie.' },
      { front: 'Émancipation', back: 'Processus par lequel une personne ou un groupe se libère d’une domination.' },
      { front: 'Liberté politique', back: 'Ensemble des droits et garanties permettant de participer à la vie collective et de limiter le pouvoir.' },
      { front: 'État de droit', back: 'Régime dans lequel les pouvoirs publics sont soumis au droit et aux garanties juridiques.' },
      { front: 'Censure', back: 'Restriction ou suppression de l’expression ou de la diffusion d’informations.' },
      { front: 'Responsabilité et liberté', back: 'La responsabilité suppose un lien entre l’agent, ses choix et les conséquences imputables.' },
      { front: 'Ignorance', back: 'Manque de connaissance pouvant limiter la portée et la qualité d’un choix.' },
      { front: 'Délibération', back: 'Examen raisonné des options, motifs et conséquences avant une décision.' },
      { front: 'Liberté effective', back: 'Liberté soutenue par des conditions matérielles, sociales et institutionnelles réelles.' },
    ],
    quiz: [
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Capacité d’agir ou de choisir sans être soumis à une contrainte déterminante, selon le sens retenu. » ?', choices: ['Liberté', 'Liberté positive', 'Sartre', 'Passion'], answer: 0, explanation: 'La définition décrit liberté : Capacité d’agir ou de choisir sans être soumis à une contrainte déterminante, selon le sens retenu.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Pouvoir supposé de choisir entre plusieurs possibilités. » ?', choices: ['Émancipation', 'Libre arbitre', 'Déterminisme', 'Kant'], answer: 1, explanation: 'La définition décrit libre arbitre : Pouvoir supposé de choisir entre plusieurs possibilités.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Capacité de se donner à soi-même une règle par l’usage de la raison. » ?', choices: ['Descartes', 'Liberté politique', 'Autonomie', 'Nécessité'], answer: 2, explanation: 'La définition décrit autonomie : Capacité de se donner à soi-même une règle par l’usage de la raison.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Situation dans laquelle la volonté reçoit sa règle d’une autorité ou d’un désir extérieur. » ?', choices: ['Contingence', 'Hobbes', 'État de droit', 'Hétéronomie'], answer: 3, explanation: 'La définition décrit hétéronomie : Situation dans laquelle la volonté reçoit sa règle d’une autorité ou d’un désir extérieur.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Force ou obligation qui limite les possibilités d’action. » ?', choices: ['Contrainte', 'Responsabilité', 'Rousseau', 'Censure'], answer: 0, explanation: 'La définition décrit contrainte : Force ou obligation qui limite les possibilités d’action.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Élément qui rend une action plus difficile sans nécessairement la rendre impossible. » ?', choices: ['Responsabilité et liberté', 'Obstacle', 'Spinoza', 'Autonomie morale'], answer: 1, explanation: 'La définition décrit obstacle : Élément qui rend une action plus difficile sans nécessairement la rendre impossible.' },
      { level: 'Facile', question: 'Quelle notion correspond à cette définition : « Absence d’ingérence ou d’entraves extérieures dans un domaine d’action. » ?', choices: ['Volonté', 'Ignorance', 'Liberté négative', 'Sartre'], answer: 2, explanation: 'La définition décrit liberté négative : Absence d’ingérence ou d’entraves extérieures dans un domaine d’action.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Possibilité effective de se gouverner soi-même et de réaliser ses capacités. » ?', choices: ['Kant', 'Désir', 'Délibération', 'Liberté positive'], answer: 3, explanation: 'La définition décrit liberté positive : Possibilité effective de se gouverner soi-même et de réaliser ses capacités.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Thèse selon laquelle les événements résultent de causes et de conditions. » ?', choices: ['Déterminisme', 'Descartes', 'Passion', 'Liberté effective'], answer: 0, explanation: 'La définition décrit déterminisme : Thèse selon laquelle les événements résultent de causes et de conditions.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Ce qui ne peut pas être autrement dans les conditions considérées. » ?', choices: ['Liberté', 'Nécessité', 'Hobbes', 'Émancipation'], answer: 1, explanation: 'La définition décrit nécessité : Ce qui ne peut pas être autrement dans les conditions considérées.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Caractère de ce qui peut être ou ne pas être, ou être autrement. » ?', choices: ['Liberté politique', 'Libre arbitre', 'Contingence', 'Rousseau'], answer: 2, explanation: 'La définition décrit contingence : Caractère de ce qui peut être ou ne pas être, ou être autrement.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Possibilité d’imputer un acte à un agent qui peut en répondre. » ?', choices: ['Autonomie morale', 'État de droit', 'Autonomie', 'Responsabilité'], answer: 3, explanation: 'La définition décrit responsabilité : Possibilité d’imputer un acte à un agent qui peut en répondre.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Analyse la liberté en rapport avec la compréhension des causes qui nous déterminent. » ?', choices: ['Spinoza', 'Volonté', 'Censure', 'Hétéronomie'], answer: 0, explanation: 'La définition décrit spinoza : Analyse la liberté en rapport avec la compréhension des causes qui nous déterminent.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Soutient que l’être humain se définit par ses choix et engage sa responsabilité. » ?', choices: ['Contrainte', 'Sartre', 'Désir', 'Responsabilité et liberté'], answer: 1, explanation: 'La définition décrit sartre : Soutient que l’être humain se définit par ses choix et engage sa responsabilité.' },
      { level: 'Intermédiaire', question: 'Quelle notion correspond à cette définition : « Distingue l’autonomie morale de la simple obéissance aux inclinations. » ?', choices: ['Ignorance', 'Obstacle', 'Kant', 'Passion'], answer: 2, explanation: 'La définition décrit kant : Distingue l’autonomie morale de la simple obéissance aux inclinations.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Associe la liberté à la volonté et examine le rôle de la connaissance dans le choix. » ?', choices: ['Émancipation', 'Délibération', 'Liberté négative', 'Descartes'], answer: 3, explanation: 'La définition décrit descartes : Associe la liberté à la volonté et examine le rôle de la connaissance dans le choix.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Définit la liberté civile comme absence d’obstacles extérieurs à l’action. » ?', choices: ['Hobbes', 'Liberté politique', 'Liberté effective', 'Liberté positive'], answer: 0, explanation: 'La définition décrit hobbes : Définit la liberté civile comme absence d’obstacles extérieurs à l’action.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Distingue dépendance personnelle et obéissance à une loi que l’on s’est prescrite collectivement. » ?', choices: ['Déterminisme', 'Rousseau', 'État de droit', 'Liberté'], answer: 1, explanation: 'La définition décrit rousseau : Distingue dépendance personnelle et obéissance à une loi que l’on s’est prescrite collectivement.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Capacité de vouloir selon une règle que la raison peut reconnaître comme universelle. » ?', choices: ['Libre arbitre', 'Nécessité', 'Autonomie morale', 'Censure'], answer: 2, explanation: 'La définition décrit autonomie morale : Capacité de vouloir selon une règle que la raison peut reconnaître comme universelle.' },
      { level: 'Difficile', question: 'Quelle notion correspond à cette définition : « Faculté de se déterminer à agir ou à poursuivre une fin. » ?', choices: ['Responsabilité et liberté', 'Autonomie', 'Contingence', 'Volonté'], answer: 3, explanation: 'La définition décrit volonté : Faculté de se déterminer à agir ou à poursuivre une fin.' },
    ],
    exercises: [
      { title: 'Liberté et absence de contrainte', level: 'Facile', statement: 'Expliquez pourquoi l’absence de contraintes ne suffit pas toujours à garantir la liberté.', correction: 'Sans règles communes, les plus puissants peuvent imposer leur volonté. Des lois justes et des institutions peuvent protéger les personnes contre la domination et rendre leurs libertés effectives.', skills: ['Argumentation', 'Exemple'] },
      { title: 'Libre arbitre', level: 'Facile', statement: 'Distinguez le sentiment de choisir et la preuve d’un libre arbitre indépendant de toute cause.', correction: 'Le sentiment de décider est une expérience subjective. Il ne démontre pas que la décision échappe à toute influence. Il faut examiner les causes, les habitudes, les désirs et les circonstances qui orientent le choix.', skills: ['Distinction', 'Analyse'] },
      { title: 'Autonomie et caprice', level: 'Intermédiaire', statement: 'Pourquoi l’autonomie morale ne se confond-elle pas avec le fait de faire tout ce que l’on désire ?', correction: 'Le caprice suit une inclination immédiate. L’autonomie morale consiste à se déterminer par une règle rationnelle que l’on peut justifier. Elle suppose réflexion et responsabilité, non l’absence de limites.', skills: ['Kant', 'Concept'] },
      { title: 'Spinoza et liberté', level: 'Intermédiaire', statement: 'Expliquez comment la connaissance des causes peut augmenter notre liberté selon Spinoza.', correction: 'Ignorer les causes qui nous déterminent nous fait croire à une indépendance absolue. Les comprendre permet de mieux agir, de transformer certaines passions et d’accroître notre puissance d’agir. La liberté ne signifie pas être sans cause.', skills: ['Spinoza', 'Explication'] },
      { title: 'Déterminisme et responsabilité', level: 'Intermédiaire', statement: 'Une action a des causes : cela suffit-il à supprimer toute responsabilité ?', correction: 'Non. Il faut examiner les capacités de l’agent, son intention, les contraintes et les règles applicables. Expliquer causalement une action n’équivaut pas à la justifier ni à trancher automatiquement la question de l’imputabilité.', skills: ['Nuance', 'Raisonnement'] },
      { title: 'Liberté politique', level: 'Intermédiaire', statement: 'Montrez pourquoi les libertés individuelles nécessitent des garanties institutionnelles.', correction: 'Les droits protègent les personnes contre l’arbitraire et organisent la coexistence des libertés. Des tribunaux indépendants, des règles publiques et des contre-pouvoirs rendent ces garanties effectives.', skills: ['Institutions', 'Argumentation'] },
      { title: 'Autonomie et hétéronomie', level: 'Facile', statement: 'Donnez un exemple permettant de distinguer autonomie et hétéronomie.', correction: 'Une personne agit de manière hétéronome lorsqu’elle suit une règle uniquement par peur d’une sanction ou sous l’effet d’une pression extérieure. Elle agit de manière autonome lorsqu’elle examine la règle et se détermine par des raisons qu’elle reconnaît.', skills: ['Repères', 'Exemple'] },
      { title: 'Liberté formelle et effective', level: 'Difficile', statement: 'Expliquez pourquoi un droit reconnu peut rester difficile à exercer.', correction: 'Un droit peut exister juridiquement sans que chacun dispose des ressources, de l’information, du temps ou de l’accès nécessaires pour l’exercer. La liberté effective dépend donc aussi de conditions sociales et matérielles.', skills: ['Analyse', 'Exemple'] },
      { title: 'Construire une problématique', level: 'Difficile', statement: 'Proposez une problématique pour : « Sommes-nous libres de vouloir ? »', correction: 'Il faut distinguer la volonté consciente et les causes qui la forment. La question devient : le fait que nos désirs aient des causes exclut-il la liberté, ou la liberté consiste-t-elle plutôt à comprendre et transformer ces déterminations ?', skills: ['Problématisation', 'Dissertation'] },
      { title: 'Plan de dissertation', level: 'Difficile', statement: 'Construisez un plan pour : « Être libre, est-ce faire ce que l’on veut ? »', correction: 'I. La liberté semble d’abord consister à pouvoir suivre ses choix. II. Mais les désirs peuvent nous déterminer et le caprice peut nuire à autrui. III. Une liberté réfléchie suppose autonomie, compréhension des causes et garanties politiques permettant l’action.', skills: ['Dissertation', 'Plan'] },
    ],
    sources: [{ title: 'Programmes et ressources en philosophie — voie GT', institution: 'Ministère de l’Éducation nationale — Éduscol', url: 'https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt', consultedAt: '2026-11-01', supports: ['Programme en vigueur de philosophie en terminale générale', 'Ressources officielles sur notions, auteurs, repères et exercices'] }],
    sourceNote: 'Ressource pédagogique originale pour la terminale générale, alignée sur le programme officiel Éduscol. Les thèses d’auteurs sont résumées pour la révision et doivent être approfondies par l’étude des textes.',
    validationStatus: 'draft'
  },
  'philo-nature': {
  title: "La nature",
  objectives: [
    "Définir et problématiser la nature.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Aristote, Descartes, Rousseau, Kant et Hans Jonas."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "La distinction nature/culture interroge ce qui relève des dispositions biologiques et ce qui dépend de l’apprentissage. Elle ne signifie pas que l’humain serait extérieur au monde naturel. Les pratiques humaines transforment les milieux tout en restant dépendantes de leurs équilibres.",
        "La notion de la nature doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "La connaissance scientifique décrit des régularités ; la technique transforme les conditions d’existence. La puissance de transformation ne suffit pas à déterminer ce qu’il est souhaitable de faire.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "L’humain appartient au vivant. Une conception purement utilitaire de la nature peut réduire les milieux à des ressources et négliger les interdépendances écologiques.",
        "Repères d’auteurs à approfondir par les textes : Aristote, Descartes, Rousseau, Kant et Hans Jonas. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "Hans Jonas invite à penser une responsabilité proportionnée à la puissance technique et attentive aux générations futures. La prudence doit intégrer les risques et l’incertitude.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Nature, technique et responsabilité', body: ['Le mot nature peut désigner l’ensemble du monde physique, ce qui existe indépendamment de l’intervention humaine ou encore l’essence d’un être. Un sujet philosophique exige de préciser le sens mobilisé. Opposer simplement nature et culture est insuffisant : les sociétés transforment leur environnement, mais les humains restent aussi des êtres vivants soumis à des conditions biologiques.', 'La technique permet de transformer le milieu et de répondre à des besoins, mais elle modifie également les rapports de dépendance et les risques. Rousseau interroge les effets sociaux du progrès, Descartes associe la connaissance de la nature à la possibilité d’en devenir comme maîtres et possesseurs, tandis que Kant distingue les êtres ayant une valeur propre des choses qui ont un prix dans certains cadres de réflexion.', 'Hans Jonas insiste sur la responsabilité envers les générations futures lorsque les effets de l’action technique deviennent durables et potentiellement irréversibles. La question écologique oblige ainsi à penser les limites, la précaution et les conditions d’une action collective. Il faut éviter de présenter la nature comme un simple stock de ressources ou, à l’inverse, comme un état originel toujours harmonieux.'] }],
  keyPoints: [
    "La distinction nature/culture interroge ce qui relève des dispositions biologiques et ce qui dépend de l’apprentissage. Elle ne signifie pas que l’humain serait extérieur au monde naturel. Les pratiques humaines transforment les milieux tout en restant dépendantes de leurs équilibres.",
    "La connaissance scientifique décrit des régularités ; la technique transforme les conditions d’existence. La puissance de transformation ne suffit pas à déterminer ce qu’il est souhaitable de faire.",
    "L’humain appartient au vivant. Une conception purement utilitaire de la nature peut réduire les milieux à des ressources et négliger les interdépendances écologiques.",
    "Hans Jonas invite à penser une responsabilité proportionnée à la puissance technique et attentive aux générations futures. La prudence doit intégrer les risques et l’incertitude.",
    "Auteurs à approfondir : Aristote, Descartes, Rousseau, Kant et Hans Jonas."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « nature » ?",
      back: "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être"
    },
    {
      front: "Quel problème la notion de nature permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être"
    },
    {
      front: "Comment définir « culture » ?",
      back: "Ensemble des pratiques et savoirs appris et transmis"
    },
    {
      front: "Quel problème la notion de culture permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble des pratiques et savoirs appris et transmis"
    },
    {
      front: "Comment définir « nécessité » ?",
      back: "Ce qui ne peut pas être autrement dans les conditions considérées"
    },
    {
      front: "Quel problème la notion de nécessité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ce qui ne peut pas être autrement dans les conditions considérées"
    },
    {
      front: "Comment définir « contingence » ?",
      back: "Ce qui pourrait être autrement ou ne pas être"
    },
    {
      front: "Quel problème la notion de contingence permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ce qui pourrait être autrement ou ne pas être"
    },
    {
      front: "Comment définir « instinct » ?",
      back: "Disposition comportementale liée à l’organisation du vivant"
    },
    {
      front: "Quel problème la notion de instinct permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Disposition comportementale liée à l’organisation du vivant"
    },
    {
      front: "Comment définir « environnement » ?",
      back: "Ensemble des conditions et milieux où vivent les êtres"
    },
    {
      front: "Quel problème la notion de environnement permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble des conditions et milieux où vivent les êtres"
    },
    {
      front: "Comment définir « écologie » ?",
      back: "Étude des relations entre êtres vivants et milieux"
    },
    {
      front: "Quel problème la notion de écologie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Étude des relations entre êtres vivants et milieux"
    },
    {
      front: "Comment définir « biodiversité » ?",
      back: "Diversité des espèces, des gènes et des écosystèmes"
    },
    {
      front: "Quel problème la notion de biodiversité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Diversité des espèces, des gènes et des écosystèmes"
    },
    {
      front: "Comment définir « déterminisme » ?",
      back: "Thèse selon laquelle les phénomènes dépendent de causes"
    },
    {
      front: "Quel problème la notion de déterminisme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Thèse selon laquelle les phénomènes dépendent de causes"
    },
    {
      front: "Comment définir « finalité » ?",
      back: "But en vue duquel une action ou un processus est organisé"
    },
    {
      front: "Quel problème la notion de finalité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. But en vue duquel une action ou un processus est organisé"
    },
    {
      front: "Comment définir « technique » ?",
      back: "Procédés appris permettant de transformer le milieu"
    },
    {
      front: "Quel problème la notion de technique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Procédés appris permettant de transformer le milieu"
    },
    {
      front: "Comment définir « domination » ?",
      back: "Rapport dans lequel une puissance s’impose durablement"
    },
    {
      front: "Quel problème la notion de domination permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Rapport dans lequel une puissance s’impose durablement"
    },
    {
      front: "Comment définir « responsabilité » ?",
      back: "Obligation de répondre de ses actes et conséquences"
    },
    {
      front: "Quel problème la notion de responsabilité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Obligation de répondre de ses actes et conséquences"
    },
    {
      front: "Comment définir « anthropocentrisme » ?",
      back: "Perspective qui place l’être humain au centre des valeurs"
    },
    {
      front: "Quel problème la notion de anthropocentrisme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Perspective qui place l’être humain au centre des valeurs"
    },
    {
      front: "Comment définir « liberté » ?",
      back: "Capacité d’agir et de choisir dans des conditions données"
    },
    {
      front: "Quel problème la notion de liberté permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Capacité d’agir et de choisir dans des conditions données"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « nature » ?",
      choices: [
        "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
        "Ce qui ne peut pas être autrement dans les conditions considérées",
        "Ensemble des conditions et milieux où vivent les êtres",
        "Thèse selon laquelle les phénomènes dépendent de causes"
      ],
      answer: 0,
      explanation: "nature : Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « culture » ?",
      choices: [
        "But en vue duquel une action ou un processus est organisé",
        "Ce qui pourrait être autrement ou ne pas être",
        "Étude des relations entre êtres vivants et milieux",
        "Ensemble des pratiques et savoirs appris et transmis"
      ],
      answer: 3,
      explanation: "culture : Ensemble des pratiques et savoirs appris et transmis",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « nécessité » ?",
      choices: [
        "Diversité des espèces, des gènes et des écosystèmes",
        "Disposition comportementale liée à l’organisation du vivant",
        "Ce qui ne peut pas être autrement dans les conditions considérées",
        "Procédés appris permettant de transformer le milieu"
      ],
      answer: 2,
      explanation: "nécessité : Ce qui ne peut pas être autrement dans les conditions considérées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « contingence » ?",
      choices: [
        "Ensemble des conditions et milieux où vivent les êtres",
        "Ce qui pourrait être autrement ou ne pas être",
        "Thèse selon laquelle les phénomènes dépendent de causes",
        "Rapport dans lequel une puissance s’impose durablement"
      ],
      answer: 1,
      explanation: "contingence : Ce qui pourrait être autrement ou ne pas être",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « instinct » ?",
      choices: [
        "Disposition comportementale liée à l’organisation du vivant",
        "Étude des relations entre êtres vivants et milieux",
        "But en vue duquel une action ou un processus est organisé",
        "Obligation de répondre de ses actes et conséquences"
      ],
      answer: 0,
      explanation: "instinct : Disposition comportementale liée à l’organisation du vivant",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « environnement » ?",
      choices: [
        "Perspective qui place l’être humain au centre des valeurs",
        "Diversité des espèces, des gènes et des écosystèmes",
        "Procédés appris permettant de transformer le milieu",
        "Ensemble des conditions et milieux où vivent les êtres"
      ],
      answer: 3,
      explanation: "environnement : Ensemble des conditions et milieux où vivent les êtres",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « écologie » ?",
      choices: [
        "Rapport dans lequel une puissance s’impose durablement",
        "Thèse selon laquelle les phénomènes dépendent de causes",
        "Étude des relations entre êtres vivants et milieux",
        "Capacité d’agir et de choisir dans des conditions données"
      ],
      answer: 2,
      explanation: "écologie : Étude des relations entre êtres vivants et milieux",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « biodiversité » ?",
      choices: [
        "But en vue duquel une action ou un processus est organisé",
        "Diversité des espèces, des gènes et des écosystèmes",
        "Obligation de répondre de ses actes et conséquences",
        "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être"
      ],
      answer: 1,
      explanation: "biodiversité : Diversité des espèces, des gènes et des écosystèmes",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « déterminisme » ?",
      choices: [
        "Thèse selon laquelle les phénomènes dépendent de causes",
        "Procédés appris permettant de transformer le milieu",
        "Perspective qui place l’être humain au centre des valeurs",
        "Ensemble des pratiques et savoirs appris et transmis"
      ],
      answer: 0,
      explanation: "déterminisme : Thèse selon laquelle les phénomènes dépendent de causes",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « finalité » ?",
      choices: [
        "Ce qui ne peut pas être autrement dans les conditions considérées",
        "Rapport dans lequel une puissance s’impose durablement",
        "Capacité d’agir et de choisir dans des conditions données",
        "But en vue duquel une action ou un processus est organisé"
      ],
      answer: 3,
      explanation: "finalité : But en vue duquel une action ou un processus est organisé",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « technique » ?",
      choices: [
        "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
        "Obligation de répondre de ses actes et conséquences",
        "Procédés appris permettant de transformer le milieu",
        "Ce qui pourrait être autrement ou ne pas être"
      ],
      answer: 2,
      explanation: "technique : Procédés appris permettant de transformer le milieu",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « domination » ?",
      choices: [
        "Perspective qui place l’être humain au centre des valeurs",
        "Rapport dans lequel une puissance s’impose durablement",
        "Ensemble des pratiques et savoirs appris et transmis",
        "Disposition comportementale liée à l’organisation du vivant"
      ],
      answer: 1,
      explanation: "domination : Rapport dans lequel une puissance s’impose durablement",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « responsabilité » ?",
      choices: [
        "Obligation de répondre de ses actes et conséquences",
        "Capacité d’agir et de choisir dans des conditions données",
        "Ce qui ne peut pas être autrement dans les conditions considérées",
        "Ensemble des conditions et milieux où vivent les êtres"
      ],
      answer: 0,
      explanation: "responsabilité : Obligation de répondre de ses actes et conséquences",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « anthropocentrisme » ?",
      choices: [
        "Étude des relations entre êtres vivants et milieux",
        "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
        "Ce qui pourrait être autrement ou ne pas être",
        "Perspective qui place l’être humain au centre des valeurs"
      ],
      answer: 3,
      explanation: "anthropocentrisme : Perspective qui place l’être humain au centre des valeurs",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « liberté » ?",
      choices: [
        "Disposition comportementale liée à l’organisation du vivant",
        "Ensemble des pratiques et savoirs appris et transmis",
        "Capacité d’agir et de choisir dans des conditions données",
        "Diversité des espèces, des gènes et des écosystèmes"
      ],
      answer: 2,
      explanation: "liberté : Capacité d’agir et de choisir dans des conditions données",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « nature » ?",
      choices: [
        "Ce qui ne peut pas être autrement dans les conditions considérées",
        "Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
        "Ensemble des conditions et milieux où vivent les êtres",
        "Thèse selon laquelle les phénomènes dépendent de causes"
      ],
      answer: 1,
      explanation: "nature : Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « culture » ?",
      choices: [
        "Ensemble des pratiques et savoirs appris et transmis",
        "Ce qui pourrait être autrement ou ne pas être",
        "Étude des relations entre êtres vivants et milieux",
        "But en vue duquel une action ou un processus est organisé"
      ],
      answer: 0,
      explanation: "culture : Ensemble des pratiques et savoirs appris et transmis",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « nécessité » ?",
      choices: [
        "Procédés appris permettant de transformer le milieu",
        "Disposition comportementale liée à l’organisation du vivant",
        "Diversité des espèces, des gènes et des écosystèmes",
        "Ce qui ne peut pas être autrement dans les conditions considérées"
      ],
      answer: 3,
      explanation: "nécessité : Ce qui ne peut pas être autrement dans les conditions considérées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « contingence » ?",
      choices: [
        "Thèse selon laquelle les phénomènes dépendent de causes",
        "Ensemble des conditions et milieux où vivent les êtres",
        "Ce qui pourrait être autrement ou ne pas être",
        "Rapport dans lequel une puissance s’impose durablement"
      ],
      answer: 2,
      explanation: "contingence : Ce qui pourrait être autrement ou ne pas être",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « instinct » ?",
      choices: [
        "Étude des relations entre êtres vivants et milieux",
        "Disposition comportementale liée à l’organisation du vivant",
        "But en vue duquel une action ou un processus est organisé",
        "Obligation de répondre de ses actes et conséquences"
      ],
      answer: 1,
      explanation: "instinct : Disposition comportementale liée à l’organisation du vivant",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : nature",
      level: "Facile",
      statement: "Définissez « nature » et donnez un exemple précis.",
      correction: "Une réponse solide définit nature : Réalité qui existe indépendamment de la production humaine, ou essence propre d’un être Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : culture",
      level: "Facile",
      statement: "Distinguez « culture » de deux notions proches.",
      correction: "Une réponse solide définit culture : Ensemble des pratiques et savoirs appris et transmis Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : nécessité",
      level: "Facile",
      statement: "Expliquez le rôle de « nécessité » dans un problème philosophique.",
      correction: "Une réponse solide définit nécessité : Ce qui ne peut pas être autrement dans les conditions considérées Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : contingence",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « contingence ».",
      correction: "Une réponse solide définit contingence : Ce qui pourrait être autrement ou ne pas être Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : instinct",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « instinct ».",
      correction: "Une réponse solide définit instinct : Disposition comportementale liée à l’organisation du vivant Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : environnement",
      level: "Intermédiaire",
      statement: "Définissez « environnement » et donnez un exemple précis.",
      correction: "Une réponse solide définit environnement : Ensemble des conditions et milieux où vivent les êtres Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : écologie",
      level: "Intermédiaire",
      statement: "Distinguez « écologie » de deux notions proches.",
      correction: "Une réponse solide définit écologie : Étude des relations entre êtres vivants et milieux Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : biodiversité",
      level: "Difficile",
      statement: "Expliquez le rôle de « biodiversité » dans un problème philosophique.",
      correction: "Une réponse solide définit biodiversité : Diversité des espèces, des gènes et des écosystèmes Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : déterminisme",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « déterminisme ».",
      correction: "Une réponse solide définit déterminisme : Thèse selon laquelle les phénomènes dépendent de causes Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : finalité",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « finalité ».",
      correction: "Une réponse solide définit finalité : But en vue duquel une action ou un processus est organisé Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-raison': {
  title: "La raison",
  objectives: [
    "Définir et problématiser la raison.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Platon, Aristote, Descartes, Hume et Kant."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "La raison permet de relier des idées, de distinguer des affirmations et d’examiner leurs justifications. Raisonner suppose de rendre explicites les prémisses, les étapes et la conclusion. Une argumentation cohérente peut néanmoins reposer sur des prémisses contestables.",
        "La notion de la raison doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "La démonstration établit une conclusion à partir de règles. Dans les sciences empiriques, elle ne remplace pas l’observation et l’expérimentation. L’induction généralise à partir de cas sans garantir seule une loi universelle.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "Descartes insiste sur la méthode et l’examen des opinions ; Hume souligne le rôle de l’expérience. Raison et expérience peuvent se corriger mutuellement dans la construction du savoir.",
        "Repères d’auteurs à approfondir par les textes : Platon, Aristote, Descartes, Hume et Kant. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "Le scepticisme rappelle que les certitudes peuvent être fragiles. Il peut conduire à suspendre le jugement ou à rechercher de meilleurs critères, sans imposer de renoncer à toute connaissance.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Raison, démonstration et limites du raisonnement', body: ['La raison désigne la faculté de former des jugements, d’enchaîner des arguments et de rechercher des justifications. Elle peut être théorique lorsqu’elle vise la connaissance, pratique lorsqu’elle guide l’action, ou instrumentale lorsqu’elle choisit des moyens adaptés à une fin. Un sujet sur la raison demande souvent de distinguer ces usages.', 'Chez Descartes, la méthode vise à conduire correctement l’esprit en ordonnant les difficultés. Chez Hume, la raison ne suffit pas à fonder toutes nos croyances sur le monde : l’expérience et l’habitude jouent un rôle essentiel. Kant distingue les usages de la raison et examine leurs limites, notamment lorsque la pensée prétend connaître ce qui dépasse toute expérience possible.', 'Raisonner ne signifie pas supprimer les émotions ou les désaccords. Les émotions peuvent signaler des valeurs et des situations importantes, mais elles ne remplacent pas la justification d’une affirmation. Une réflexion solide examine les arguments, les présupposés, les contre-exemples et les limites d’une démonstration.'] }],
  keyPoints: [
    "La raison permet de relier des idées, de distinguer des affirmations et d’examiner leurs justifications. Raisonner suppose de rendre explicites les prémisses, les étapes et la conclusion. Une argumentation cohérente peut néanmoins reposer sur des prémisses contestables.",
    "La démonstration établit une conclusion à partir de règles. Dans les sciences empiriques, elle ne remplace pas l’observation et l’expérimentation. L’induction généralise à partir de cas sans garantir seule une loi universelle.",
    "Descartes insiste sur la méthode et l’examen des opinions ; Hume souligne le rôle de l’expérience. Raison et expérience peuvent se corriger mutuellement dans la construction du savoir.",
    "Le scepticisme rappelle que les certitudes peuvent être fragiles. Il peut conduire à suspendre le jugement ou à rechercher de meilleurs critères, sans imposer de renoncer à toute connaissance.",
    "Auteurs à approfondir : Platon, Aristote, Descartes, Hume et Kant."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « raison » ?",
      back: "Faculté de penser, juger et enchaîner des arguments selon des règles"
    },
    {
      front: "Quel problème la notion de raison permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Faculté de penser, juger et enchaîner des arguments selon des règles"
    },
    {
      front: "Comment définir « rationalité » ?",
      back: "Caractère d’une démarche cohérente et justifiée"
    },
    {
      front: "Quel problème la notion de rationalité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Caractère d’une démarche cohérente et justifiée"
    },
    {
      front: "Comment définir « démonstration » ?",
      back: "Enchaînement réglé de propositions établissant une conclusion"
    },
    {
      front: "Quel problème la notion de démonstration permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Enchaînement réglé de propositions établissant une conclusion"
    },
    {
      front: "Comment définir « déduction » ?",
      back: "Raisonnement tirant une conclusion de prémisses"
    },
    {
      front: "Quel problème la notion de déduction permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Raisonnement tirant une conclusion de prémisses"
    },
    {
      front: "Comment définir « induction » ?",
      back: "Généralisation construite à partir de cas observés"
    },
    {
      front: "Quel problème la notion de induction permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Généralisation construite à partir de cas observés"
    },
    {
      front: "Comment définir « contradiction » ?",
      back: "Incompatibilité logique entre deux propositions"
    },
    {
      front: "Quel problème la notion de contradiction permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Incompatibilité logique entre deux propositions"
    },
    {
      front: "Comment définir « principe » ?",
      back: "Proposition fondamentale servant de point de départ"
    },
    {
      front: "Quel problème la notion de principe permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Proposition fondamentale servant de point de départ"
    },
    {
      front: "Comment définir « argument » ?",
      back: "Raison avancée pour soutenir ou critiquer une thèse"
    },
    {
      front: "Quel problème la notion de argument permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Raison avancée pour soutenir ou critiquer une thèse"
    },
    {
      front: "Comment définir « preuve » ?",
      back: "Élément ou raisonnement établissant une proposition"
    },
    {
      front: "Quel problème la notion de preuve permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Élément ou raisonnement établissant une proposition"
    },
    {
      front: "Comment définir « expérience » ?",
      back: "Observation ou épreuve confrontant une idée au réel"
    },
    {
      front: "Quel problème la notion de expérience permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Observation ou épreuve confrontant une idée au réel"
    },
    {
      front: "Comment définir « hypothèse » ?",
      back: "Proposition provisoire soumise à l’examen"
    },
    {
      front: "Quel problème la notion de hypothèse permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Proposition provisoire soumise à l’examen"
    },
    {
      front: "Comment définir « croyance » ?",
      back: "Adhésion à une proposition sans démonstration nécessaire"
    },
    {
      front: "Quel problème la notion de croyance permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Adhésion à une proposition sans démonstration nécessaire"
    },
    {
      front: "Comment définir « scepticisme » ?",
      back: "Attitude qui interroge les prétentions au savoir"
    },
    {
      front: "Quel problème la notion de scepticisme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Attitude qui interroge les prétentions au savoir"
    },
    {
      front: "Comment définir « jugement » ?",
      back: "Acte d’affirmer ou de rapporter des idées"
    },
    {
      front: "Quel problème la notion de jugement permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Acte d’affirmer ou de rapporter des idées"
    },
    {
      front: "Comment définir « autonomie » ?",
      back: "Capacité à se donner une règle après examen"
    },
    {
      front: "Quel problème la notion de autonomie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Capacité à se donner une règle après examen"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « raison » ?",
      choices: [
        "Faculté de penser, juger et enchaîner des arguments selon des règles",
        "Enchaînement réglé de propositions établissant une conclusion",
        "Incompatibilité logique entre deux propositions",
        "Élément ou raisonnement établissant une proposition"
      ],
      answer: 0,
      explanation: "raison : Faculté de penser, juger et enchaîner des arguments selon des règles",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « rationalité » ?",
      choices: [
        "Observation ou épreuve confrontant une idée au réel",
        "Raisonnement tirant une conclusion de prémisses",
        "Proposition fondamentale servant de point de départ",
        "Caractère d’une démarche cohérente et justifiée"
      ],
      answer: 3,
      explanation: "rationalité : Caractère d’une démarche cohérente et justifiée",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « démonstration » ?",
      choices: [
        "Raison avancée pour soutenir ou critiquer une thèse",
        "Généralisation construite à partir de cas observés",
        "Enchaînement réglé de propositions établissant une conclusion",
        "Proposition provisoire soumise à l’examen"
      ],
      answer: 2,
      explanation: "démonstration : Enchaînement réglé de propositions établissant une conclusion",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « déduction » ?",
      choices: [
        "Incompatibilité logique entre deux propositions",
        "Raisonnement tirant une conclusion de prémisses",
        "Élément ou raisonnement établissant une proposition",
        "Adhésion à une proposition sans démonstration nécessaire"
      ],
      answer: 1,
      explanation: "déduction : Raisonnement tirant une conclusion de prémisses",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « induction » ?",
      choices: [
        "Généralisation construite à partir de cas observés",
        "Proposition fondamentale servant de point de départ",
        "Observation ou épreuve confrontant une idée au réel",
        "Attitude qui interroge les prétentions au savoir"
      ],
      answer: 0,
      explanation: "induction : Généralisation construite à partir de cas observés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « contradiction » ?",
      choices: [
        "Acte d’affirmer ou de rapporter des idées",
        "Raison avancée pour soutenir ou critiquer une thèse",
        "Proposition provisoire soumise à l’examen",
        "Incompatibilité logique entre deux propositions"
      ],
      answer: 3,
      explanation: "contradiction : Incompatibilité logique entre deux propositions",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « principe » ?",
      choices: [
        "Adhésion à une proposition sans démonstration nécessaire",
        "Élément ou raisonnement établissant une proposition",
        "Proposition fondamentale servant de point de départ",
        "Capacité à se donner une règle après examen"
      ],
      answer: 2,
      explanation: "principe : Proposition fondamentale servant de point de départ",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « argument » ?",
      choices: [
        "Observation ou épreuve confrontant une idée au réel",
        "Raison avancée pour soutenir ou critiquer une thèse",
        "Attitude qui interroge les prétentions au savoir",
        "Faculté de penser, juger et enchaîner des arguments selon des règles"
      ],
      answer: 1,
      explanation: "argument : Raison avancée pour soutenir ou critiquer une thèse",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « preuve » ?",
      choices: [
        "Élément ou raisonnement établissant une proposition",
        "Proposition provisoire soumise à l’examen",
        "Acte d’affirmer ou de rapporter des idées",
        "Caractère d’une démarche cohérente et justifiée"
      ],
      answer: 0,
      explanation: "preuve : Élément ou raisonnement établissant une proposition",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « expérience » ?",
      choices: [
        "Enchaînement réglé de propositions établissant une conclusion",
        "Adhésion à une proposition sans démonstration nécessaire",
        "Capacité à se donner une règle après examen",
        "Observation ou épreuve confrontant une idée au réel"
      ],
      answer: 3,
      explanation: "expérience : Observation ou épreuve confrontant une idée au réel",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « hypothèse » ?",
      choices: [
        "Faculté de penser, juger et enchaîner des arguments selon des règles",
        "Attitude qui interroge les prétentions au savoir",
        "Proposition provisoire soumise à l’examen",
        "Raisonnement tirant une conclusion de prémisses"
      ],
      answer: 2,
      explanation: "hypothèse : Proposition provisoire soumise à l’examen",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « croyance » ?",
      choices: [
        "Acte d’affirmer ou de rapporter des idées",
        "Adhésion à une proposition sans démonstration nécessaire",
        "Caractère d’une démarche cohérente et justifiée",
        "Généralisation construite à partir de cas observés"
      ],
      answer: 1,
      explanation: "croyance : Adhésion à une proposition sans démonstration nécessaire",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « scepticisme » ?",
      choices: [
        "Attitude qui interroge les prétentions au savoir",
        "Capacité à se donner une règle après examen",
        "Enchaînement réglé de propositions établissant une conclusion",
        "Incompatibilité logique entre deux propositions"
      ],
      answer: 0,
      explanation: "scepticisme : Attitude qui interroge les prétentions au savoir",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « jugement » ?",
      choices: [
        "Proposition fondamentale servant de point de départ",
        "Faculté de penser, juger et enchaîner des arguments selon des règles",
        "Raisonnement tirant une conclusion de prémisses",
        "Acte d’affirmer ou de rapporter des idées"
      ],
      answer: 3,
      explanation: "jugement : Acte d’affirmer ou de rapporter des idées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « autonomie » ?",
      choices: [
        "Généralisation construite à partir de cas observés",
        "Caractère d’une démarche cohérente et justifiée",
        "Capacité à se donner une règle après examen",
        "Raison avancée pour soutenir ou critiquer une thèse"
      ],
      answer: 2,
      explanation: "autonomie : Capacité à se donner une règle après examen",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « raison » ?",
      choices: [
        "Enchaînement réglé de propositions établissant une conclusion",
        "Faculté de penser, juger et enchaîner des arguments selon des règles",
        "Incompatibilité logique entre deux propositions",
        "Élément ou raisonnement établissant une proposition"
      ],
      answer: 1,
      explanation: "raison : Faculté de penser, juger et enchaîner des arguments selon des règles",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « rationalité » ?",
      choices: [
        "Caractère d’une démarche cohérente et justifiée",
        "Raisonnement tirant une conclusion de prémisses",
        "Proposition fondamentale servant de point de départ",
        "Observation ou épreuve confrontant une idée au réel"
      ],
      answer: 0,
      explanation: "rationalité : Caractère d’une démarche cohérente et justifiée",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « démonstration » ?",
      choices: [
        "Proposition provisoire soumise à l’examen",
        "Généralisation construite à partir de cas observés",
        "Raison avancée pour soutenir ou critiquer une thèse",
        "Enchaînement réglé de propositions établissant une conclusion"
      ],
      answer: 3,
      explanation: "démonstration : Enchaînement réglé de propositions établissant une conclusion",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « déduction » ?",
      choices: [
        "Élément ou raisonnement établissant une proposition",
        "Incompatibilité logique entre deux propositions",
        "Raisonnement tirant une conclusion de prémisses",
        "Adhésion à une proposition sans démonstration nécessaire"
      ],
      answer: 2,
      explanation: "déduction : Raisonnement tirant une conclusion de prémisses",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « induction » ?",
      choices: [
        "Proposition fondamentale servant de point de départ",
        "Généralisation construite à partir de cas observés",
        "Observation ou épreuve confrontant une idée au réel",
        "Attitude qui interroge les prétentions au savoir"
      ],
      answer: 1,
      explanation: "induction : Généralisation construite à partir de cas observés",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : raison",
      level: "Facile",
      statement: "Définissez « raison » et donnez un exemple précis.",
      correction: "Une réponse solide définit raison : Faculté de penser, juger et enchaîner des arguments selon des règles Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : rationalité",
      level: "Facile",
      statement: "Distinguez « rationalité » de deux notions proches.",
      correction: "Une réponse solide définit rationalité : Caractère d’une démarche cohérente et justifiée Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : démonstration",
      level: "Facile",
      statement: "Expliquez le rôle de « démonstration » dans un problème philosophique.",
      correction: "Une réponse solide définit démonstration : Enchaînement réglé de propositions établissant une conclusion Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : déduction",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « déduction ».",
      correction: "Une réponse solide définit déduction : Raisonnement tirant une conclusion de prémisses Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : induction",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « induction ».",
      correction: "Une réponse solide définit induction : Généralisation construite à partir de cas observés Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : contradiction",
      level: "Intermédiaire",
      statement: "Définissez « contradiction » et donnez un exemple précis.",
      correction: "Une réponse solide définit contradiction : Incompatibilité logique entre deux propositions Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : principe",
      level: "Intermédiaire",
      statement: "Distinguez « principe » de deux notions proches.",
      correction: "Une réponse solide définit principe : Proposition fondamentale servant de point de départ Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : argument",
      level: "Difficile",
      statement: "Expliquez le rôle de « argument » dans un problème philosophique.",
      correction: "Une réponse solide définit argument : Raison avancée pour soutenir ou critiquer une thèse Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : preuve",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « preuve ».",
      correction: "Une réponse solide définit preuve : Élément ou raisonnement établissant une proposition Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : expérience",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « expérience ».",
      correction: "Une réponse solide définit expérience : Observation ou épreuve confrontant une idée au réel Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-religion': {
  title: "La religion",
  objectives: [
    "Définir et problématiser la religion.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Épicure, Pascal, Spinoza, Kant, Durkheim et Freud."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "La religion associe représentations, pratiques, récits et formes de communauté. Elle ne se réduit ni à une opinion individuelle ni à une institution unique. Les rites organisent des moments collectifs et transmettent une mémoire.",
        "La notion de la religion doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "La foi engage une adhésion qui ne se confond pas avec une démonstration. La raison peut examiner les arguments religieux, leur cohérence et leurs conséquences. Pascal interroge les limites d’une raison qui prétendrait tout saisir.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "Durkheim analyse la religion comme un fait social qui rassemble une communauté. Cette approche éclaire certaines fonctions collectives sans épuiser la question de la foi.",
        "Repères d’auteurs à approfondir par les textes : Épicure, Pascal, Spinoza, Kant, Durkheim et Freud. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "La liberté de conscience protège le droit de croire, de ne pas croire et de changer de conviction. La laïcité organise un cadre commun où les convictions particulières ne déterminent pas l’autorité publique.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Croire, savoir et interpréter', body: ['La religion peut désigner un ensemble de croyances, de rites, de récits et de pratiques qui organisent un rapport au sacré. La philosophie ne se contente pas d’affirmer ou de nier une croyance : elle examine les raisons, les concepts et les effets de différentes positions. Il faut distinguer foi, superstition, expérience religieuse et savoir démontré.', 'La question de l’existence de Dieu engage plusieurs types d’arguments : arguments cosmologiques, moraux, ontologiques ou arguments tirés de l’expérience. Chacun repose sur des prémisses discutables et appelle une analyse critique. L’existence du mal, la liberté humaine et la diversité des religions constituent également des problèmes philosophiques importants.', 'La tolérance ne signifie pas que toutes les affirmations sont identiques ou soustraites à la discussion. Elle concerne la coexistence des personnes et la liberté de conscience. Une dissertation doit donc distinguer le respect des croyants, l’examen rationnel des idées et le rôle social ou politique des institutions religieuses.'] }],
  keyPoints: [
    "La religion associe représentations, pratiques, récits et formes de communauté. Elle ne se réduit ni à une opinion individuelle ni à une institution unique. Les rites organisent des moments collectifs et transmettent une mémoire.",
    "La foi engage une adhésion qui ne se confond pas avec une démonstration. La raison peut examiner les arguments religieux, leur cohérence et leurs conséquences. Pascal interroge les limites d’une raison qui prétendrait tout saisir.",
    "Durkheim analyse la religion comme un fait social qui rassemble une communauté. Cette approche éclaire certaines fonctions collectives sans épuiser la question de la foi.",
    "La liberté de conscience protège le droit de croire, de ne pas croire et de changer de conviction. La laïcité organise un cadre commun où les convictions particulières ne déterminent pas l’autorité publique.",
    "Auteurs à approfondir : Épicure, Pascal, Spinoza, Kant, Durkheim et Freud."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « religion » ?",
      back: "Ensemble de croyances, pratiques et institutions rapportées au sacré"
    },
    {
      front: "Quel problème la notion de religion permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble de croyances, pratiques et institutions rapportées au sacré"
    },
    {
      front: "Comment définir « foi » ?",
      back: "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration"
    },
    {
      front: "Quel problème la notion de foi permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration"
    },
    {
      front: "Comment définir « sacré » ?",
      back: "Ce qui est séparé du profane et fait l’objet d’un respect particulier"
    },
    {
      front: "Quel problème la notion de sacré permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ce qui est séparé du profane et fait l’objet d’un respect particulier"
    },
    {
      front: "Comment définir « profane » ?",
      back: "Ce qui appartient à la vie ordinaire, distinct du sacré"
    },
    {
      front: "Quel problème la notion de profane permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ce qui appartient à la vie ordinaire, distinct du sacré"
    },
    {
      front: "Comment définir « rite » ?",
      back: "Pratique symbolique réglée, souvent collective et répétée"
    },
    {
      front: "Quel problème la notion de rite permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Pratique symbolique réglée, souvent collective et répétée"
    },
    {
      front: "Comment définir « mythe » ?",
      back: "Récit symbolique donnant sens à des origines ou questions fondamentales"
    },
    {
      front: "Quel problème la notion de mythe permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Récit symbolique donnant sens à des origines ou questions fondamentales"
    },
    {
      front: "Comment définir « dogme » ?",
      back: "Énoncé tenu pour fondamental dans une tradition religieuse"
    },
    {
      front: "Quel problème la notion de dogme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Énoncé tenu pour fondamental dans une tradition religieuse"
    },
    {
      front: "Comment définir « culte » ?",
      back: "Ensemble de gestes adressés à une divinité ou au sacré"
    },
    {
      front: "Quel problème la notion de culte permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble de gestes adressés à une divinité ou au sacré"
    },
    {
      front: "Comment définir « laïcité » ?",
      back: "Principe garantissant la liberté de conscience et la neutralité des institutions publiques"
    },
    {
      front: "Quel problème la notion de laïcité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Principe garantissant la liberté de conscience et la neutralité des institutions publiques"
    },
    {
      front: "Comment définir « tolérance » ?",
      back: "Reconnaissance du droit d’autrui à des convictions différentes"
    },
    {
      front: "Quel problème la notion de tolérance permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Reconnaissance du droit d’autrui à des convictions différentes"
    },
    {
      front: "Comment définir « athéisme » ?",
      back: "Position qui ne reconnaît pas l’existence d’un dieu"
    },
    {
      front: "Quel problème la notion de athéisme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Position qui ne reconnaît pas l’existence d’un dieu"
    },
    {
      front: "Comment définir « agnosticisme » ?",
      back: "Position qui considère que l’existence de Dieu ne peut être connue"
    },
    {
      front: "Quel problème la notion de agnosticisme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Position qui considère que l’existence de Dieu ne peut être connue"
    },
    {
      front: "Comment définir « superstition » ?",
      back: "Croyance attribuant un pouvoir à des signes sans justification suffisante"
    },
    {
      front: "Quel problème la notion de superstition permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Croyance attribuant un pouvoir à des signes sans justification suffisante"
    },
    {
      front: "Comment définir « communauté » ?",
      back: "Groupe structuré par des pratiques ou références partagées"
    },
    {
      front: "Quel problème la notion de communauté permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Groupe structuré par des pratiques ou références partagées"
    },
    {
      front: "Comment définir « sens » ?",
      back: "Signification ou orientation donnée à l’existence"
    },
    {
      front: "Quel problème la notion de sens permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Signification ou orientation donnée à l’existence"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « religion » ?",
      choices: [
        "Ensemble de croyances, pratiques et institutions rapportées au sacré",
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier",
        "Récit symbolique donnant sens à des origines ou questions fondamentales",
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques"
      ],
      answer: 0,
      explanation: "religion : Ensemble de croyances, pratiques et institutions rapportées au sacré",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « foi » ?",
      choices: [
        "Reconnaissance du droit d’autrui à des convictions différentes",
        "Ce qui appartient à la vie ordinaire, distinct du sacré",
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration"
      ],
      answer: 3,
      explanation: "foi : Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « sacré » ?",
      choices: [
        "Ensemble de gestes adressés à une divinité ou au sacré",
        "Pratique symbolique réglée, souvent collective et répétée",
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier",
        "Position qui ne reconnaît pas l’existence d’un dieu"
      ],
      answer: 2,
      explanation: "sacré : Ce qui est séparé du profane et fait l’objet d’un respect particulier",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « profane » ?",
      choices: [
        "Récit symbolique donnant sens à des origines ou questions fondamentales",
        "Ce qui appartient à la vie ordinaire, distinct du sacré",
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques",
        "Position qui considère que l’existence de Dieu ne peut être connue"
      ],
      answer: 1,
      explanation: "profane : Ce qui appartient à la vie ordinaire, distinct du sacré",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « rite » ?",
      choices: [
        "Pratique symbolique réglée, souvent collective et répétée",
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Reconnaissance du droit d’autrui à des convictions différentes",
        "Croyance attribuant un pouvoir à des signes sans justification suffisante"
      ],
      answer: 0,
      explanation: "rite : Pratique symbolique réglée, souvent collective et répétée",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « mythe » ?",
      choices: [
        "Groupe structuré par des pratiques ou références partagées",
        "Ensemble de gestes adressés à une divinité ou au sacré",
        "Position qui ne reconnaît pas l’existence d’un dieu",
        "Récit symbolique donnant sens à des origines ou questions fondamentales"
      ],
      answer: 3,
      explanation: "mythe : Récit symbolique donnant sens à des origines ou questions fondamentales",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « dogme » ?",
      choices: [
        "Position qui considère que l’existence de Dieu ne peut être connue",
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques",
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Signification ou orientation donnée à l’existence"
      ],
      answer: 2,
      explanation: "dogme : Énoncé tenu pour fondamental dans une tradition religieuse",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « culte » ?",
      choices: [
        "Reconnaissance du droit d’autrui à des convictions différentes",
        "Ensemble de gestes adressés à une divinité ou au sacré",
        "Croyance attribuant un pouvoir à des signes sans justification suffisante",
        "Ensemble de croyances, pratiques et institutions rapportées au sacré"
      ],
      answer: 1,
      explanation: "culte : Ensemble de gestes adressés à une divinité ou au sacré",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « laïcité » ?",
      choices: [
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques",
        "Position qui ne reconnaît pas l’existence d’un dieu",
        "Groupe structuré par des pratiques ou références partagées",
        "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration"
      ],
      answer: 0,
      explanation: "laïcité : Principe garantissant la liberté de conscience et la neutralité des institutions publiques",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « tolérance » ?",
      choices: [
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier",
        "Position qui considère que l’existence de Dieu ne peut être connue",
        "Signification ou orientation donnée à l’existence",
        "Reconnaissance du droit d’autrui à des convictions différentes"
      ],
      answer: 3,
      explanation: "tolérance : Reconnaissance du droit d’autrui à des convictions différentes",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « athéisme » ?",
      choices: [
        "Ensemble de croyances, pratiques et institutions rapportées au sacré",
        "Croyance attribuant un pouvoir à des signes sans justification suffisante",
        "Position qui ne reconnaît pas l’existence d’un dieu",
        "Ce qui appartient à la vie ordinaire, distinct du sacré"
      ],
      answer: 2,
      explanation: "athéisme : Position qui ne reconnaît pas l’existence d’un dieu",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « agnosticisme » ?",
      choices: [
        "Groupe structuré par des pratiques ou références partagées",
        "Position qui considère que l’existence de Dieu ne peut être connue",
        "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration",
        "Pratique symbolique réglée, souvent collective et répétée"
      ],
      answer: 1,
      explanation: "agnosticisme : Position qui considère que l’existence de Dieu ne peut être connue",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « superstition » ?",
      choices: [
        "Croyance attribuant un pouvoir à des signes sans justification suffisante",
        "Signification ou orientation donnée à l’existence",
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier",
        "Récit symbolique donnant sens à des origines ou questions fondamentales"
      ],
      answer: 0,
      explanation: "superstition : Croyance attribuant un pouvoir à des signes sans justification suffisante",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « communauté » ?",
      choices: [
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Ensemble de croyances, pratiques et institutions rapportées au sacré",
        "Ce qui appartient à la vie ordinaire, distinct du sacré",
        "Groupe structuré par des pratiques ou références partagées"
      ],
      answer: 3,
      explanation: "communauté : Groupe structuré par des pratiques ou références partagées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « sens » ?",
      choices: [
        "Pratique symbolique réglée, souvent collective et répétée",
        "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration",
        "Signification ou orientation donnée à l’existence",
        "Ensemble de gestes adressés à une divinité ou au sacré"
      ],
      answer: 2,
      explanation: "sens : Signification ou orientation donnée à l’existence",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « religion » ?",
      choices: [
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier",
        "Ensemble de croyances, pratiques et institutions rapportées au sacré",
        "Récit symbolique donnant sens à des origines ou questions fondamentales",
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques"
      ],
      answer: 1,
      explanation: "religion : Ensemble de croyances, pratiques et institutions rapportées au sacré",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « foi » ?",
      choices: [
        "Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration",
        "Ce qui appartient à la vie ordinaire, distinct du sacré",
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Reconnaissance du droit d’autrui à des convictions différentes"
      ],
      answer: 0,
      explanation: "foi : Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « sacré » ?",
      choices: [
        "Position qui ne reconnaît pas l’existence d’un dieu",
        "Pratique symbolique réglée, souvent collective et répétée",
        "Ensemble de gestes adressés à une divinité ou au sacré",
        "Ce qui est séparé du profane et fait l’objet d’un respect particulier"
      ],
      answer: 3,
      explanation: "sacré : Ce qui est séparé du profane et fait l’objet d’un respect particulier",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « profane » ?",
      choices: [
        "Principe garantissant la liberté de conscience et la neutralité des institutions publiques",
        "Récit symbolique donnant sens à des origines ou questions fondamentales",
        "Ce qui appartient à la vie ordinaire, distinct du sacré",
        "Position qui considère que l’existence de Dieu ne peut être connue"
      ],
      answer: 2,
      explanation: "profane : Ce qui appartient à la vie ordinaire, distinct du sacré",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « rite » ?",
      choices: [
        "Énoncé tenu pour fondamental dans une tradition religieuse",
        "Pratique symbolique réglée, souvent collective et répétée",
        "Reconnaissance du droit d’autrui à des convictions différentes",
        "Croyance attribuant un pouvoir à des signes sans justification suffisante"
      ],
      answer: 1,
      explanation: "rite : Pratique symbolique réglée, souvent collective et répétée",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : religion",
      level: "Facile",
      statement: "Définissez « religion » et donnez un exemple précis.",
      correction: "Une réponse solide définit religion : Ensemble de croyances, pratiques et institutions rapportées au sacré Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : foi",
      level: "Facile",
      statement: "Distinguez « foi » de deux notions proches.",
      correction: "Une réponse solide définit foi : Adhésion à une vérité religieuse qui ne repose pas nécessairement sur une démonstration Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : sacré",
      level: "Facile",
      statement: "Expliquez le rôle de « sacré » dans un problème philosophique.",
      correction: "Une réponse solide définit sacré : Ce qui est séparé du profane et fait l’objet d’un respect particulier Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : profane",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « profane ».",
      correction: "Une réponse solide définit profane : Ce qui appartient à la vie ordinaire, distinct du sacré Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : rite",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « rite ».",
      correction: "Une réponse solide définit rite : Pratique symbolique réglée, souvent collective et répétée Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : mythe",
      level: "Intermédiaire",
      statement: "Définissez « mythe » et donnez un exemple précis.",
      correction: "Une réponse solide définit mythe : Récit symbolique donnant sens à des origines ou questions fondamentales Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : dogme",
      level: "Intermédiaire",
      statement: "Distinguez « dogme » de deux notions proches.",
      correction: "Une réponse solide définit dogme : Énoncé tenu pour fondamental dans une tradition religieuse Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : culte",
      level: "Difficile",
      statement: "Expliquez le rôle de « culte » dans un problème philosophique.",
      correction: "Une réponse solide définit culte : Ensemble de gestes adressés à une divinité ou au sacré Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : laïcité",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « laïcité ».",
      correction: "Une réponse solide définit laïcité : Principe garantissant la liberté de conscience et la neutralité des institutions publiques Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : tolérance",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « tolérance ».",
      correction: "Une réponse solide définit tolérance : Reconnaissance du droit d’autrui à des convictions différentes Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-science': {
  title: "La science",
  objectives: [
    "Définir et problématiser la science.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Aristote, Descartes, Hume, Bachelard, Popper et Kuhn."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "La science ne consiste pas à enregistrer passivement des faits. Elle formule des questions, construit des concepts, choisit des instruments et interprète des résultats. Les protocoles rendent les observations contrôlables.",
        "La notion de la science doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "Une hypothèse propose une explication confrontée à des tests. Popper souligne la réfutabilité : une théorie scientifique doit prendre le risque d’être contredite par certains résultats possibles.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "L’objectivité ne suppose pas un chercheur sans point de vue, mais des procédures contrôlables. Critique par les pairs, réplication et publication des méthodes contribuent à la fiabilité.",
        "Repères d’auteurs à approfondir par les textes : Aristote, Descartes, Hume, Bachelard, Popper et Kuhn. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "Kuhn montre que l’histoire des sciences comporte des périodes de science normale et des changements de paradigme. Le progrès n’est pas toujours linéaire ; les usages des découvertes demandent aussi un jugement moral.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Vérité scientifique, preuve et révision', body: ['Une connaissance scientifique se distingue d’une simple opinion par ses méthodes de construction, ses procédures de contrôle et la possibilité de discuter ses résultats. Une hypothèse doit être formulée de manière suffisamment précise pour être confrontée à des observations, des expériences ou des raisonnements. Les preuves n’ont pas toutes la même portée et dépendent du domaine étudié.', 'Popper insiste sur la possibilité de mettre une théorie à l’épreuve et de la réfuter en principe. Kuhn étudie les paradigmes qui organisent le travail scientifique et les périodes de crise où les cadres théoriques se transforment. Ces approches ne signifient pas que la science serait arbitraire : elles interrogent les conditions historiques et méthodologiques de la production du savoir.', 'Bachelard souligne les obstacles épistémologiques et la nécessité de rectifier les évidences premières. Hume interroge la justification de l’induction, tandis que Descartes cherche une méthode rigoureuse pour conduire la raison. Pour traiter un sujet, il faut distinguer démonstration, expérience, modèle, hypothèse et consensus, sans réduire la science à une accumulation de faits.'] }],
  keyPoints: [
    "La science ne consiste pas à enregistrer passivement des faits. Elle formule des questions, construit des concepts, choisit des instruments et interprète des résultats. Les protocoles rendent les observations contrôlables.",
    "Une hypothèse propose une explication confrontée à des tests. Popper souligne la réfutabilité : une théorie scientifique doit prendre le risque d’être contredite par certains résultats possibles.",
    "L’objectivité ne suppose pas un chercheur sans point de vue, mais des procédures contrôlables. Critique par les pairs, réplication et publication des méthodes contribuent à la fiabilité.",
    "Kuhn montre que l’histoire des sciences comporte des périodes de science normale et des changements de paradigme. Le progrès n’est pas toujours linéaire ; les usages des découvertes demandent aussi un jugement moral.",
    "Auteurs à approfondir : Aristote, Descartes, Hume, Bachelard, Popper et Kuhn."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « science » ?",
      back: "Connaissances élaborées par des méthodes contrôlées et discutables"
    },
    {
      front: "Quel problème la notion de science permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Connaissances élaborées par des méthodes contrôlées et discutables"
    },
    {
      front: "Comment définir « fait scientifique » ?",
      back: "Résultat décrit selon des procédures d’observation ou de mesure"
    },
    {
      front: "Quel problème la notion de fait scientifique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Résultat décrit selon des procédures d’observation ou de mesure"
    },
    {
      front: "Comment définir « hypothèse » ?",
      back: "Explication provisoire qui doit pouvoir être mise à l’épreuve"
    },
    {
      front: "Quel problème la notion de hypothèse permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Explication provisoire qui doit pouvoir être mise à l’épreuve"
    },
    {
      front: "Comment définir « expérimentation » ?",
      back: "Protocole organisé pour tester une hypothèse"
    },
    {
      front: "Quel problème la notion de expérimentation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Protocole organisé pour tester une hypothèse"
    },
    {
      front: "Comment définir « falsifiabilité » ?",
      back: "Possibilité qu’un test contredise une proposition"
    },
    {
      front: "Quel problème la notion de falsifiabilité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Possibilité qu’un test contredise une proposition"
    },
    {
      front: "Comment définir « théorie » ?",
      back: "Ensemble cohérent de concepts et propositions explicatives"
    },
    {
      front: "Quel problème la notion de théorie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble cohérent de concepts et propositions explicatives"
    },
    {
      front: "Comment définir « modèle » ?",
      back: "Représentation simplifiée de certains aspects du réel"
    },
    {
      front: "Quel problème la notion de modèle permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Représentation simplifiée de certains aspects du réel"
    },
    {
      front: "Comment définir « objectivité » ?",
      back: "Exigence de contrôle des biais par des méthodes publiques"
    },
    {
      front: "Quel problème la notion de objectivité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Exigence de contrôle des biais par des méthodes publiques"
    },
    {
      front: "Comment définir « paradigme » ?",
      back: "Cadre théorique et méthodologique partagé par une communauté"
    },
    {
      front: "Quel problème la notion de paradigme permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Cadre théorique et méthodologique partagé par une communauté"
    },
    {
      front: "Comment définir « corrélation » ?",
      back: "Relation statistique qui n’établit pas seule une causalité"
    },
    {
      front: "Quel problème la notion de corrélation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Relation statistique qui n’établit pas seule une causalité"
    },
    {
      front: "Comment définir « causalité » ?",
      back: "Relation où un phénomène contribue à en produire un autre"
    },
    {
      front: "Quel problème la notion de causalité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Relation où un phénomène contribue à en produire un autre"
    },
    {
      front: "Comment définir « vérification » ?",
      back: "Confrontation d’une proposition à des observations ou résultats"
    },
    {
      front: "Quel problème la notion de vérification permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Confrontation d’une proposition à des observations ou résultats"
    },
    {
      front: "Comment définir « réplication » ?",
      back: "Reproduction d’une étude pour examiner la robustesse des résultats"
    },
    {
      front: "Quel problème la notion de réplication permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Reproduction d’une étude pour examiner la robustesse des résultats"
    },
    {
      front: "Comment définir « progrès scientifique » ?",
      back: "Transformation cumulative et parfois discontinue des connaissances"
    },
    {
      front: "Quel problème la notion de progrès scientifique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Transformation cumulative et parfois discontinue des connaissances"
    },
    {
      front: "Comment définir « vulgarisation » ?",
      back: "Présentation de connaissances spécialisées à un public plus large"
    },
    {
      front: "Quel problème la notion de vulgarisation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Présentation de connaissances spécialisées à un public plus large"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « science » ?",
      choices: [
        "Connaissances élaborées par des méthodes contrôlées et discutables",
        "Explication provisoire qui doit pouvoir être mise à l’épreuve",
        "Ensemble cohérent de concepts et propositions explicatives",
        "Cadre théorique et méthodologique partagé par une communauté"
      ],
      answer: 0,
      explanation: "science : Connaissances élaborées par des méthodes contrôlées et discutables",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « fait scientifique » ?",
      choices: [
        "Relation statistique qui n’établit pas seule une causalité",
        "Protocole organisé pour tester une hypothèse",
        "Représentation simplifiée de certains aspects du réel",
        "Résultat décrit selon des procédures d’observation ou de mesure"
      ],
      answer: 3,
      explanation: "fait scientifique : Résultat décrit selon des procédures d’observation ou de mesure",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « hypothèse » ?",
      choices: [
        "Exigence de contrôle des biais par des méthodes publiques",
        "Possibilité qu’un test contredise une proposition",
        "Explication provisoire qui doit pouvoir être mise à l’épreuve",
        "Relation où un phénomène contribue à en produire un autre"
      ],
      answer: 2,
      explanation: "hypothèse : Explication provisoire qui doit pouvoir être mise à l’épreuve",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « expérimentation » ?",
      choices: [
        "Ensemble cohérent de concepts et propositions explicatives",
        "Protocole organisé pour tester une hypothèse",
        "Cadre théorique et méthodologique partagé par une communauté",
        "Confrontation d’une proposition à des observations ou résultats"
      ],
      answer: 1,
      explanation: "expérimentation : Protocole organisé pour tester une hypothèse",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « falsifiabilité » ?",
      choices: [
        "Possibilité qu’un test contredise une proposition",
        "Représentation simplifiée de certains aspects du réel",
        "Relation statistique qui n’établit pas seule une causalité",
        "Reproduction d’une étude pour examiner la robustesse des résultats"
      ],
      answer: 0,
      explanation: "falsifiabilité : Possibilité qu’un test contredise une proposition",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « théorie » ?",
      choices: [
        "Transformation cumulative et parfois discontinue des connaissances",
        "Exigence de contrôle des biais par des méthodes publiques",
        "Relation où un phénomène contribue à en produire un autre",
        "Ensemble cohérent de concepts et propositions explicatives"
      ],
      answer: 3,
      explanation: "théorie : Ensemble cohérent de concepts et propositions explicatives",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « modèle » ?",
      choices: [
        "Confrontation d’une proposition à des observations ou résultats",
        "Cadre théorique et méthodologique partagé par une communauté",
        "Représentation simplifiée de certains aspects du réel",
        "Présentation de connaissances spécialisées à un public plus large"
      ],
      answer: 2,
      explanation: "modèle : Représentation simplifiée de certains aspects du réel",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « objectivité » ?",
      choices: [
        "Relation statistique qui n’établit pas seule une causalité",
        "Exigence de contrôle des biais par des méthodes publiques",
        "Reproduction d’une étude pour examiner la robustesse des résultats",
        "Connaissances élaborées par des méthodes contrôlées et discutables"
      ],
      answer: 1,
      explanation: "objectivité : Exigence de contrôle des biais par des méthodes publiques",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « paradigme » ?",
      choices: [
        "Cadre théorique et méthodologique partagé par une communauté",
        "Relation où un phénomène contribue à en produire un autre",
        "Transformation cumulative et parfois discontinue des connaissances",
        "Résultat décrit selon des procédures d’observation ou de mesure"
      ],
      answer: 0,
      explanation: "paradigme : Cadre théorique et méthodologique partagé par une communauté",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « corrélation » ?",
      choices: [
        "Explication provisoire qui doit pouvoir être mise à l’épreuve",
        "Confrontation d’une proposition à des observations ou résultats",
        "Présentation de connaissances spécialisées à un public plus large",
        "Relation statistique qui n’établit pas seule une causalité"
      ],
      answer: 3,
      explanation: "corrélation : Relation statistique qui n’établit pas seule une causalité",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « causalité » ?",
      choices: [
        "Connaissances élaborées par des méthodes contrôlées et discutables",
        "Reproduction d’une étude pour examiner la robustesse des résultats",
        "Relation où un phénomène contribue à en produire un autre",
        "Protocole organisé pour tester une hypothèse"
      ],
      answer: 2,
      explanation: "causalité : Relation où un phénomène contribue à en produire un autre",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « vérification » ?",
      choices: [
        "Transformation cumulative et parfois discontinue des connaissances",
        "Confrontation d’une proposition à des observations ou résultats",
        "Résultat décrit selon des procédures d’observation ou de mesure",
        "Possibilité qu’un test contredise une proposition"
      ],
      answer: 1,
      explanation: "vérification : Confrontation d’une proposition à des observations ou résultats",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « réplication » ?",
      choices: [
        "Reproduction d’une étude pour examiner la robustesse des résultats",
        "Présentation de connaissances spécialisées à un public plus large",
        "Explication provisoire qui doit pouvoir être mise à l’épreuve",
        "Ensemble cohérent de concepts et propositions explicatives"
      ],
      answer: 0,
      explanation: "réplication : Reproduction d’une étude pour examiner la robustesse des résultats",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « progrès scientifique » ?",
      choices: [
        "Représentation simplifiée de certains aspects du réel",
        "Connaissances élaborées par des méthodes contrôlées et discutables",
        "Protocole organisé pour tester une hypothèse",
        "Transformation cumulative et parfois discontinue des connaissances"
      ],
      answer: 3,
      explanation: "progrès scientifique : Transformation cumulative et parfois discontinue des connaissances",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « vulgarisation » ?",
      choices: [
        "Possibilité qu’un test contredise une proposition",
        "Résultat décrit selon des procédures d’observation ou de mesure",
        "Présentation de connaissances spécialisées à un public plus large",
        "Exigence de contrôle des biais par des méthodes publiques"
      ],
      answer: 2,
      explanation: "vulgarisation : Présentation de connaissances spécialisées à un public plus large",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « science » ?",
      choices: [
        "Explication provisoire qui doit pouvoir être mise à l’épreuve",
        "Connaissances élaborées par des méthodes contrôlées et discutables",
        "Ensemble cohérent de concepts et propositions explicatives",
        "Cadre théorique et méthodologique partagé par une communauté"
      ],
      answer: 1,
      explanation: "science : Connaissances élaborées par des méthodes contrôlées et discutables",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « fait scientifique » ?",
      choices: [
        "Résultat décrit selon des procédures d’observation ou de mesure",
        "Protocole organisé pour tester une hypothèse",
        "Représentation simplifiée de certains aspects du réel",
        "Relation statistique qui n’établit pas seule une causalité"
      ],
      answer: 0,
      explanation: "fait scientifique : Résultat décrit selon des procédures d’observation ou de mesure",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « hypothèse » ?",
      choices: [
        "Relation où un phénomène contribue à en produire un autre",
        "Possibilité qu’un test contredise une proposition",
        "Exigence de contrôle des biais par des méthodes publiques",
        "Explication provisoire qui doit pouvoir être mise à l’épreuve"
      ],
      answer: 3,
      explanation: "hypothèse : Explication provisoire qui doit pouvoir être mise à l’épreuve",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « expérimentation » ?",
      choices: [
        "Cadre théorique et méthodologique partagé par une communauté",
        "Ensemble cohérent de concepts et propositions explicatives",
        "Protocole organisé pour tester une hypothèse",
        "Confrontation d’une proposition à des observations ou résultats"
      ],
      answer: 2,
      explanation: "expérimentation : Protocole organisé pour tester une hypothèse",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « falsifiabilité » ?",
      choices: [
        "Représentation simplifiée de certains aspects du réel",
        "Possibilité qu’un test contredise une proposition",
        "Relation statistique qui n’établit pas seule une causalité",
        "Reproduction d’une étude pour examiner la robustesse des résultats"
      ],
      answer: 1,
      explanation: "falsifiabilité : Possibilité qu’un test contredise une proposition",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : science",
      level: "Facile",
      statement: "Définissez « science » et donnez un exemple précis.",
      correction: "Une réponse solide définit science : Connaissances élaborées par des méthodes contrôlées et discutables Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : fait scientifique",
      level: "Facile",
      statement: "Distinguez « fait scientifique » de deux notions proches.",
      correction: "Une réponse solide définit fait scientifique : Résultat décrit selon des procédures d’observation ou de mesure Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : hypothèse",
      level: "Facile",
      statement: "Expliquez le rôle de « hypothèse » dans un problème philosophique.",
      correction: "Une réponse solide définit hypothèse : Explication provisoire qui doit pouvoir être mise à l’épreuve Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : expérimentation",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « expérimentation ».",
      correction: "Une réponse solide définit expérimentation : Protocole organisé pour tester une hypothèse Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : falsifiabilité",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « falsifiabilité ».",
      correction: "Une réponse solide définit falsifiabilité : Possibilité qu’un test contredise une proposition Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : théorie",
      level: "Intermédiaire",
      statement: "Définissez « théorie » et donnez un exemple précis.",
      correction: "Une réponse solide définit théorie : Ensemble cohérent de concepts et propositions explicatives Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : modèle",
      level: "Intermédiaire",
      statement: "Distinguez « modèle » de deux notions proches.",
      correction: "Une réponse solide définit modèle : Représentation simplifiée de certains aspects du réel Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : objectivité",
      level: "Difficile",
      statement: "Expliquez le rôle de « objectivité » dans un problème philosophique.",
      correction: "Une réponse solide définit objectivité : Exigence de contrôle des biais par des méthodes publiques Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : paradigme",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « paradigme ».",
      correction: "Une réponse solide définit paradigme : Cadre théorique et méthodologique partagé par une communauté Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : corrélation",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « corrélation ».",
      correction: "Une réponse solide définit corrélation : Relation statistique qui n’établit pas seule une causalité Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-technique': {
  title: "La technique",
  objectives: [
    "Définir et problématiser la technique.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Platon, Descartes, Marx, Bergson, Heidegger et Hans Jonas."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "La technique prolonge les capacités humaines et transforme les conditions de vie. Elle ne se limite pas aux machines : elle comprend gestes, méthodes et organisations. Les savoir-faire se transmettent et participent à la culture.",
        "La notion de la technique doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "La science cherche principalement à connaître et expliquer ; la technique vise à produire ou transformer. Les deux domaines interagissent sans se confondre.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "Les dispositifs peuvent réduire la pénibilité et accroître l’autonomie, mais aussi créer des dépendances ou déplacer le contrôle vers des systèmes opaques. Il faut examiner qui conçoit, possède et contrôle les techniques.",
        "Repères d’auteurs à approfondir par les textes : Platon, Descartes, Marx, Bergson, Heidegger et Hans Jonas. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "La puissance technique augmente parfois l’ampleur et la durée des conséquences. Jonas invite à prendre au sérieux les effets lointains et les générations futures. La prudence est une exigence de responsabilité, non un refus de toute innovation.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'La technique transforme le monde et transforme aussi l’humain', body: ['La technique regroupe les procédés, les outils et les savoir-faire par lesquels les humains transforment leur environnement pour atteindre des fins. Elle ne se réduit pas aux machines modernes : les gestes, les méthodes artisanales et les organisations du travail sont aussi techniques. Une technique suppose des connaissances, des choix et une transmission.', 'La technique augmente les capacités humaines et peut réduire certaines contraintes, mais elle crée aussi des dépendances et de nouveaux risques. Une innovation n’est pas automatiquement un progrès : il faut préciser le critère retenu, par exemple l’efficacité, la liberté, la justice, la santé ou la préservation de l’environnement.', 'La responsabilité devient centrale lorsque les effets d’une technique sont durables ou difficiles à maîtriser. On peut alors interroger la répartition des bénéfices et des risques, le contrôle démocratique des choix et la place de la prudence. La réflexion doit éviter aussi bien le rejet systématique de toute innovation que la confiance aveugle dans le progrès technique.'] }],
  keyPoints: [
    "La technique prolonge les capacités humaines et transforme les conditions de vie. Elle ne se limite pas aux machines : elle comprend gestes, méthodes et organisations. Les savoir-faire se transmettent et participent à la culture.",
    "La science cherche principalement à connaître et expliquer ; la technique vise à produire ou transformer. Les deux domaines interagissent sans se confondre.",
    "Les dispositifs peuvent réduire la pénibilité et accroître l’autonomie, mais aussi créer des dépendances ou déplacer le contrôle vers des systèmes opaques. Il faut examiner qui conçoit, possède et contrôle les techniques.",
    "La puissance technique augmente parfois l’ampleur et la durée des conséquences. Jonas invite à prendre au sérieux les effets lointains et les générations futures. La prudence est une exigence de responsabilité, non un refus de toute innovation.",
    "Auteurs à approfondir : Platon, Descartes, Marx, Bergson, Heidegger et Hans Jonas."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « technique » ?",
      back: "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat"
    },
    {
      front: "Quel problème la notion de technique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ensemble de procédés et savoir-faire permettant d’obtenir un résultat"
    },
    {
      front: "Comment définir « outil » ?",
      back: "Objet fabriqué ou utilisé comme moyen d’action"
    },
    {
      front: "Quel problème la notion de outil permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Objet fabriqué ou utilisé comme moyen d’action"
    },
    {
      front: "Comment définir « technologie » ?",
      back: "Étude et organisation des techniques en lien avec des savoirs"
    },
    {
      front: "Quel problème la notion de technologie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Étude et organisation des techniques en lien avec des savoirs"
    },
    {
      front: "Comment définir « instrument » ?",
      back: "Moyen matériel ou conceptuel utilisé pour une opération"
    },
    {
      front: "Quel problème la notion de instrument permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Moyen matériel ou conceptuel utilisé pour une opération"
    },
    {
      front: "Comment définir « automatisation » ?",
      back: "Transfert d’opérations à un dispositif avec intervention réduite"
    },
    {
      front: "Quel problème la notion de automatisation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Transfert d’opérations à un dispositif avec intervention réduite"
    },
    {
      front: "Comment définir « innovation » ?",
      back: "Introduction d’une nouveauté dans une pratique ou organisation"
    },
    {
      front: "Quel problème la notion de innovation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Introduction d’une nouveauté dans une pratique ou organisation"
    },
    {
      front: "Comment définir « efficacité » ?",
      back: "Capacité à atteindre un objectif avec des moyens adaptés"
    },
    {
      front: "Quel problème la notion de efficacité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Capacité à atteindre un objectif avec des moyens adaptés"
    },
    {
      front: "Comment définir « progrès technique » ?",
      back: "Transformation des moyens techniques selon certains critères"
    },
    {
      front: "Quel problème la notion de progrès technique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Transformation des moyens techniques selon certains critères"
    },
    {
      front: "Comment définir « aliénation » ?",
      back: "Perte de maîtrise sur l’activité, ses produits ou ses conditions"
    },
    {
      front: "Quel problème la notion de aliénation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Perte de maîtrise sur l’activité, ses produits ou ses conditions"
    },
    {
      front: "Comment définir « autonomie » ?",
      back: "Capacité d’agir selon des règles que l’on peut comprendre"
    },
    {
      front: "Quel problème la notion de autonomie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Capacité d’agir selon des règles que l’on peut comprendre"
    },
    {
      front: "Comment définir « risque » ?",
      back: "Possibilité d’un dommage associé à une action ou un dispositif"
    },
    {
      front: "Quel problème la notion de risque permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Possibilité d’un dommage associé à une action ou un dispositif"
    },
    {
      front: "Comment définir « responsabilité » ?",
      back: "Obligation de répondre des choix et conséquences"
    },
    {
      front: "Quel problème la notion de responsabilité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Obligation de répondre des choix et conséquences"
    },
    {
      front: "Comment définir « déterminisme technique » ?",
      back: "Thèse attribuant aux techniques une influence structurante sur la société"
    },
    {
      front: "Quel problème la notion de déterminisme technique permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Thèse attribuant aux techniques une influence structurante sur la société"
    },
    {
      front: "Comment définir « usage » ?",
      back: "Manière concrète dont un dispositif est employé"
    },
    {
      front: "Quel problème la notion de usage permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Manière concrète dont un dispositif est employé"
    },
    {
      front: "Comment définir « sobriété » ?",
      back: "Recherche d’un usage mesuré des ressources et dispositifs"
    },
    {
      front: "Quel problème la notion de sobriété permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Recherche d’un usage mesuré des ressources et dispositifs"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « technique » ?",
      choices: [
        "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
        "Étude et organisation des techniques en lien avec des savoirs",
        "Introduction d’une nouveauté dans une pratique ou organisation",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions"
      ],
      answer: 0,
      explanation: "technique : Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « outil » ?",
      choices: [
        "Capacité d’agir selon des règles que l’on peut comprendre",
        "Moyen matériel ou conceptuel utilisé pour une opération",
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Objet fabriqué ou utilisé comme moyen d’action"
      ],
      answer: 3,
      explanation: "outil : Objet fabriqué ou utilisé comme moyen d’action",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « technologie » ?",
      choices: [
        "Transformation des moyens techniques selon certains critères",
        "Transfert d’opérations à un dispositif avec intervention réduite",
        "Étude et organisation des techniques en lien avec des savoirs",
        "Possibilité d’un dommage associé à une action ou un dispositif"
      ],
      answer: 2,
      explanation: "technologie : Étude et organisation des techniques en lien avec des savoirs",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « instrument » ?",
      choices: [
        "Introduction d’une nouveauté dans une pratique ou organisation",
        "Moyen matériel ou conceptuel utilisé pour une opération",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Obligation de répondre des choix et conséquences"
      ],
      answer: 1,
      explanation: "instrument : Moyen matériel ou conceptuel utilisé pour une opération",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « automatisation » ?",
      choices: [
        "Transfert d’opérations à un dispositif avec intervention réduite",
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Capacité d’agir selon des règles que l’on peut comprendre",
        "Thèse attribuant aux techniques une influence structurante sur la société"
      ],
      answer: 0,
      explanation: "automatisation : Transfert d’opérations à un dispositif avec intervention réduite",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « innovation » ?",
      choices: [
        "Manière concrète dont un dispositif est employé",
        "Transformation des moyens techniques selon certains critères",
        "Possibilité d’un dommage associé à une action ou un dispositif",
        "Introduction d’une nouveauté dans une pratique ou organisation"
      ],
      answer: 3,
      explanation: "innovation : Introduction d’une nouveauté dans une pratique ou organisation",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « efficacité » ?",
      choices: [
        "Obligation de répondre des choix et conséquences",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Recherche d’un usage mesuré des ressources et dispositifs"
      ],
      answer: 2,
      explanation: "efficacité : Capacité à atteindre un objectif avec des moyens adaptés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « progrès technique » ?",
      choices: [
        "Capacité d’agir selon des règles que l’on peut comprendre",
        "Transformation des moyens techniques selon certains critères",
        "Thèse attribuant aux techniques une influence structurante sur la société",
        "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat"
      ],
      answer: 1,
      explanation: "progrès technique : Transformation des moyens techniques selon certains critères",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « aliénation » ?",
      choices: [
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Possibilité d’un dommage associé à une action ou un dispositif",
        "Manière concrète dont un dispositif est employé",
        "Objet fabriqué ou utilisé comme moyen d’action"
      ],
      answer: 0,
      explanation: "aliénation : Perte de maîtrise sur l’activité, ses produits ou ses conditions",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « autonomie » ?",
      choices: [
        "Étude et organisation des techniques en lien avec des savoirs",
        "Obligation de répondre des choix et conséquences",
        "Recherche d’un usage mesuré des ressources et dispositifs",
        "Capacité d’agir selon des règles que l’on peut comprendre"
      ],
      answer: 3,
      explanation: "autonomie : Capacité d’agir selon des règles que l’on peut comprendre",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « risque » ?",
      choices: [
        "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
        "Thèse attribuant aux techniques une influence structurante sur la société",
        "Possibilité d’un dommage associé à une action ou un dispositif",
        "Moyen matériel ou conceptuel utilisé pour une opération"
      ],
      answer: 2,
      explanation: "risque : Possibilité d’un dommage associé à une action ou un dispositif",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « responsabilité » ?",
      choices: [
        "Manière concrète dont un dispositif est employé",
        "Obligation de répondre des choix et conséquences",
        "Objet fabriqué ou utilisé comme moyen d’action",
        "Transfert d’opérations à un dispositif avec intervention réduite"
      ],
      answer: 1,
      explanation: "responsabilité : Obligation de répondre des choix et conséquences",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « déterminisme technique » ?",
      choices: [
        "Thèse attribuant aux techniques une influence structurante sur la société",
        "Recherche d’un usage mesuré des ressources et dispositifs",
        "Étude et organisation des techniques en lien avec des savoirs",
        "Introduction d’une nouveauté dans une pratique ou organisation"
      ],
      answer: 0,
      explanation: "déterminisme technique : Thèse attribuant aux techniques une influence structurante sur la société",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « usage » ?",
      choices: [
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
        "Moyen matériel ou conceptuel utilisé pour une opération",
        "Manière concrète dont un dispositif est employé"
      ],
      answer: 3,
      explanation: "usage : Manière concrète dont un dispositif est employé",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « sobriété » ?",
      choices: [
        "Transfert d’opérations à un dispositif avec intervention réduite",
        "Objet fabriqué ou utilisé comme moyen d’action",
        "Recherche d’un usage mesuré des ressources et dispositifs",
        "Transformation des moyens techniques selon certains critères"
      ],
      answer: 2,
      explanation: "sobriété : Recherche d’un usage mesuré des ressources et dispositifs",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « technique » ?",
      choices: [
        "Étude et organisation des techniques en lien avec des savoirs",
        "Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
        "Introduction d’une nouveauté dans une pratique ou organisation",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions"
      ],
      answer: 1,
      explanation: "technique : Ensemble de procédés et savoir-faire permettant d’obtenir un résultat",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « outil » ?",
      choices: [
        "Objet fabriqué ou utilisé comme moyen d’action",
        "Moyen matériel ou conceptuel utilisé pour une opération",
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Capacité d’agir selon des règles que l’on peut comprendre"
      ],
      answer: 0,
      explanation: "outil : Objet fabriqué ou utilisé comme moyen d’action",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « technologie » ?",
      choices: [
        "Possibilité d’un dommage associé à une action ou un dispositif",
        "Transfert d’opérations à un dispositif avec intervention réduite",
        "Transformation des moyens techniques selon certains critères",
        "Étude et organisation des techniques en lien avec des savoirs"
      ],
      answer: 3,
      explanation: "technologie : Étude et organisation des techniques en lien avec des savoirs",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « instrument » ?",
      choices: [
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Introduction d’une nouveauté dans une pratique ou organisation",
        "Moyen matériel ou conceptuel utilisé pour une opération",
        "Obligation de répondre des choix et conséquences"
      ],
      answer: 2,
      explanation: "instrument : Moyen matériel ou conceptuel utilisé pour une opération",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « automatisation » ?",
      choices: [
        "Capacité à atteindre un objectif avec des moyens adaptés",
        "Transfert d’opérations à un dispositif avec intervention réduite",
        "Capacité d’agir selon des règles que l’on peut comprendre",
        "Thèse attribuant aux techniques une influence structurante sur la société"
      ],
      answer: 1,
      explanation: "automatisation : Transfert d’opérations à un dispositif avec intervention réduite",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : technique",
      level: "Facile",
      statement: "Définissez « technique » et donnez un exemple précis.",
      correction: "Une réponse solide définit technique : Ensemble de procédés et savoir-faire permettant d’obtenir un résultat Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : outil",
      level: "Facile",
      statement: "Distinguez « outil » de deux notions proches.",
      correction: "Une réponse solide définit outil : Objet fabriqué ou utilisé comme moyen d’action Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : technologie",
      level: "Facile",
      statement: "Expliquez le rôle de « technologie » dans un problème philosophique.",
      correction: "Une réponse solide définit technologie : Étude et organisation des techniques en lien avec des savoirs Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : instrument",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « instrument ».",
      correction: "Une réponse solide définit instrument : Moyen matériel ou conceptuel utilisé pour une opération Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : automatisation",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « automatisation ».",
      correction: "Une réponse solide définit automatisation : Transfert d’opérations à un dispositif avec intervention réduite Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : innovation",
      level: "Intermédiaire",
      statement: "Définissez « innovation » et donnez un exemple précis.",
      correction: "Une réponse solide définit innovation : Introduction d’une nouveauté dans une pratique ou organisation Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : efficacité",
      level: "Intermédiaire",
      statement: "Distinguez « efficacité » de deux notions proches.",
      correction: "Une réponse solide définit efficacité : Capacité à atteindre un objectif avec des moyens adaptés Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : progrès technique",
      level: "Difficile",
      statement: "Expliquez le rôle de « progrès technique » dans un problème philosophique.",
      correction: "Une réponse solide définit progrès technique : Transformation des moyens techniques selon certains critères Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : aliénation",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « aliénation ».",
      correction: "Une réponse solide définit aliénation : Perte de maîtrise sur l’activité, ses produits ou ses conditions Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : autonomie",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « autonomie ».",
      correction: "Une réponse solide définit autonomie : Capacité d’agir selon des règles que l’on peut comprendre Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-temps': {
  title: "Le temps",
  objectives: [
    "Définir et problématiser le temps.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Platon, Augustin, Pascal, Bergson, Kant, Nietzsche et Heidegger."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "Le temps physique se mesure par des unités et des instruments. Le temps vécu varie selon l’attention, l’attente, l’ennui ou l’engagement. Bergson distingue le temps homogène de la mesure et la durée vécue, qualitative et continue.",
        "La notion de le temps doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "La mémoire relie le présent au passé et contribue à la continuité de l’identité. Elle est sélective et reconstructive : se souvenir ne consiste pas à reproduire parfaitement un enregistrement.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "Le présent se comprend par rétention du passé et anticipation de l’avenir. Le projet donne une orientation au présent, mais l’avenir demeure incertain et ne peut être entièrement maîtrisé.",
        "Repères d’auteurs à approfondir par les textes : Platon, Augustin, Pascal, Bergson, Kant, Nietzsche et Heidegger. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "La conscience de la finitude peut donner du poids aux choix. Il ne s’agit pas de vivre dans l’urgence permanente, mais de réfléchir à la manière dont les limites temporelles structurent les engagements.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Le temps vécu, mesuré et pensé', body: ['Le temps peut être envisagé comme une succession mesurable, comme l’expérience intérieure d’une durée ou comme une dimension de l’existence. Le temps des horloges permet de coordonner les activités, mais il ne décrit pas entièrement la manière dont une attente, un souvenir ou un événement sont vécus.', 'La mémoire relie le présent au passé, tandis que l’anticipation ouvre le présent vers l’avenir. Le souvenir n’est pas une reproduction parfaite : il sélectionne et reconstruit. L’oubli peut être une limite, mais aussi une condition de la vie psychique et de la capacité à se projeter.', 'La finitude donne au temps une dimension existentielle : les choix sont situés et ne peuvent pas tous être réalisés. Réfléchir au temps conduit ainsi à interroger l’urgence, la patience, la promesse, le changement et la responsabilité. Une bonne dissertation distingue les sens du temps au lieu de les traiter comme un seul phénomène.'] }],
  keyPoints: [
    "Le temps physique se mesure par des unités et des instruments. Le temps vécu varie selon l’attention, l’attente, l’ennui ou l’engagement. Bergson distingue le temps homogène de la mesure et la durée vécue, qualitative et continue.",
    "La mémoire relie le présent au passé et contribue à la continuité de l’identité. Elle est sélective et reconstructive : se souvenir ne consiste pas à reproduire parfaitement un enregistrement.",
    "Le présent se comprend par rétention du passé et anticipation de l’avenir. Le projet donne une orientation au présent, mais l’avenir demeure incertain et ne peut être entièrement maîtrisé.",
    "La conscience de la finitude peut donner du poids aux choix. Il ne s’agit pas de vivre dans l’urgence permanente, mais de réfléchir à la manière dont les limites temporelles structurent les engagements.",
    "Auteurs à approfondir : Platon, Augustin, Pascal, Bergson, Kant, Nietzsche et Heidegger."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « temps » ?",
      back: "Dimension dans laquelle les événements se succèdent et sont situés"
    },
    {
      front: "Quel problème la notion de temps permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Dimension dans laquelle les événements se succèdent et sont situés"
    },
    {
      front: "Comment définir « durée » ?",
      back: "Temps vécu comme continuité qualitative, distincte de la mesure"
    },
    {
      front: "Quel problème la notion de durée permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Temps vécu comme continuité qualitative, distincte de la mesure"
    },
    {
      front: "Comment définir « présent » ?",
      back: "Moment actuel dont les limites sont difficiles à fixer"
    },
    {
      front: "Quel problème la notion de présent permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Moment actuel dont les limites sont difficiles à fixer"
    },
    {
      front: "Comment définir « passé » ?",
      back: "Événements révolus accessibles par mémoire et traces"
    },
    {
      front: "Quel problème la notion de passé permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Événements révolus accessibles par mémoire et traces"
    },
    {
      front: "Comment définir « avenir » ?",
      back: "Possibilités et événements qui ne sont pas encore réalisés"
    },
    {
      front: "Quel problème la notion de avenir permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Possibilités et événements qui ne sont pas encore réalisés"
    },
    {
      front: "Comment définir « mémoire » ?",
      back: "Capacité de conserver et réactiver des expériences passées"
    },
    {
      front: "Quel problème la notion de mémoire permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Capacité de conserver et réactiver des expériences passées"
    },
    {
      front: "Comment définir « oubli » ?",
      back: "Perte ou mise à distance d’un contenu mémorisé"
    },
    {
      front: "Quel problème la notion de oubli permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Perte ou mise à distance d’un contenu mémorisé"
    },
    {
      front: "Comment définir « devenir » ?",
      back: "Processus de transformation par lequel les choses changent"
    },
    {
      front: "Quel problème la notion de devenir permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Processus de transformation par lequel les choses changent"
    },
    {
      front: "Comment définir « éternité » ?",
      back: "Ce qui est pensé hors de la succession temporelle"
    },
    {
      front: "Quel problème la notion de éternité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Ce qui est pensé hors de la succession temporelle"
    },
    {
      front: "Comment définir « finitude » ?",
      back: "Condition d’un être limité, notamment par le temps"
    },
    {
      front: "Quel problème la notion de finitude permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Condition d’un être limité, notamment par le temps"
    },
    {
      front: "Comment définir « histoire » ?",
      back: "Étude du passé humain et processus de transformations collectives"
    },
    {
      front: "Quel problème la notion de histoire permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Étude du passé humain et processus de transformations collectives"
    },
    {
      front: "Comment définir « nostalgie » ?",
      back: "Attachement affectif à un passé souvent idéalisé"
    },
    {
      front: "Quel problème la notion de nostalgie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Attachement affectif à un passé souvent idéalisé"
    },
    {
      front: "Comment définir « projet » ?",
      back: "Orientation présente vers une possibilité future"
    },
    {
      front: "Quel problème la notion de projet permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Orientation présente vers une possibilité future"
    },
    {
      front: "Comment définir « irréversibilité » ?",
      back: "Caractère de ce qui ne peut être ramené à son état antérieur"
    },
    {
      front: "Quel problème la notion de irréversibilité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Caractère de ce qui ne peut être ramené à son état antérieur"
    },
    {
      front: "Comment définir « temporalité » ?",
      back: "Manière dont un être ou une expérience se rapporte au temps"
    },
    {
      front: "Quel problème la notion de temporalité permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Manière dont un être ou une expérience se rapporte au temps"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « temps » ?",
      choices: [
        "Dimension dans laquelle les événements se succèdent et sont situés",
        "Moment actuel dont les limites sont difficiles à fixer",
        "Capacité de conserver et réactiver des expériences passées",
        "Ce qui est pensé hors de la succession temporelle"
      ],
      answer: 0,
      explanation: "temps : Dimension dans laquelle les événements se succèdent et sont situés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « durée » ?",
      choices: [
        "Condition d’un être limité, notamment par le temps",
        "Événements révolus accessibles par mémoire et traces",
        "Perte ou mise à distance d’un contenu mémorisé",
        "Temps vécu comme continuité qualitative, distincte de la mesure"
      ],
      answer: 3,
      explanation: "durée : Temps vécu comme continuité qualitative, distincte de la mesure",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « présent » ?",
      choices: [
        "Processus de transformation par lequel les choses changent",
        "Possibilités et événements qui ne sont pas encore réalisés",
        "Moment actuel dont les limites sont difficiles à fixer",
        "Étude du passé humain et processus de transformations collectives"
      ],
      answer: 2,
      explanation: "présent : Moment actuel dont les limites sont difficiles à fixer",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « passé » ?",
      choices: [
        "Capacité de conserver et réactiver des expériences passées",
        "Événements révolus accessibles par mémoire et traces",
        "Ce qui est pensé hors de la succession temporelle",
        "Attachement affectif à un passé souvent idéalisé"
      ],
      answer: 1,
      explanation: "passé : Événements révolus accessibles par mémoire et traces",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « avenir » ?",
      choices: [
        "Possibilités et événements qui ne sont pas encore réalisés",
        "Perte ou mise à distance d’un contenu mémorisé",
        "Condition d’un être limité, notamment par le temps",
        "Orientation présente vers une possibilité future"
      ],
      answer: 0,
      explanation: "avenir : Possibilités et événements qui ne sont pas encore réalisés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « mémoire » ?",
      choices: [
        "Caractère de ce qui ne peut être ramené à son état antérieur",
        "Processus de transformation par lequel les choses changent",
        "Étude du passé humain et processus de transformations collectives",
        "Capacité de conserver et réactiver des expériences passées"
      ],
      answer: 3,
      explanation: "mémoire : Capacité de conserver et réactiver des expériences passées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « oubli » ?",
      choices: [
        "Attachement affectif à un passé souvent idéalisé",
        "Ce qui est pensé hors de la succession temporelle",
        "Perte ou mise à distance d’un contenu mémorisé",
        "Manière dont un être ou une expérience se rapporte au temps"
      ],
      answer: 2,
      explanation: "oubli : Perte ou mise à distance d’un contenu mémorisé",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « devenir » ?",
      choices: [
        "Condition d’un être limité, notamment par le temps",
        "Processus de transformation par lequel les choses changent",
        "Orientation présente vers une possibilité future",
        "Dimension dans laquelle les événements se succèdent et sont situés"
      ],
      answer: 1,
      explanation: "devenir : Processus de transformation par lequel les choses changent",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « éternité » ?",
      choices: [
        "Ce qui est pensé hors de la succession temporelle",
        "Étude du passé humain et processus de transformations collectives",
        "Caractère de ce qui ne peut être ramené à son état antérieur",
        "Temps vécu comme continuité qualitative, distincte de la mesure"
      ],
      answer: 0,
      explanation: "éternité : Ce qui est pensé hors de la succession temporelle",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « finitude » ?",
      choices: [
        "Moment actuel dont les limites sont difficiles à fixer",
        "Attachement affectif à un passé souvent idéalisé",
        "Manière dont un être ou une expérience se rapporte au temps",
        "Condition d’un être limité, notamment par le temps"
      ],
      answer: 3,
      explanation: "finitude : Condition d’un être limité, notamment par le temps",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « histoire » ?",
      choices: [
        "Dimension dans laquelle les événements se succèdent et sont situés",
        "Orientation présente vers une possibilité future",
        "Étude du passé humain et processus de transformations collectives",
        "Événements révolus accessibles par mémoire et traces"
      ],
      answer: 2,
      explanation: "histoire : Étude du passé humain et processus de transformations collectives",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « nostalgie » ?",
      choices: [
        "Caractère de ce qui ne peut être ramené à son état antérieur",
        "Attachement affectif à un passé souvent idéalisé",
        "Temps vécu comme continuité qualitative, distincte de la mesure",
        "Possibilités et événements qui ne sont pas encore réalisés"
      ],
      answer: 1,
      explanation: "nostalgie : Attachement affectif à un passé souvent idéalisé",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « projet » ?",
      choices: [
        "Orientation présente vers une possibilité future",
        "Manière dont un être ou une expérience se rapporte au temps",
        "Moment actuel dont les limites sont difficiles à fixer",
        "Capacité de conserver et réactiver des expériences passées"
      ],
      answer: 0,
      explanation: "projet : Orientation présente vers une possibilité future",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « irréversibilité » ?",
      choices: [
        "Perte ou mise à distance d’un contenu mémorisé",
        "Dimension dans laquelle les événements se succèdent et sont situés",
        "Événements révolus accessibles par mémoire et traces",
        "Caractère de ce qui ne peut être ramené à son état antérieur"
      ],
      answer: 3,
      explanation: "irréversibilité : Caractère de ce qui ne peut être ramené à son état antérieur",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « temporalité » ?",
      choices: [
        "Possibilités et événements qui ne sont pas encore réalisés",
        "Temps vécu comme continuité qualitative, distincte de la mesure",
        "Manière dont un être ou une expérience se rapporte au temps",
        "Processus de transformation par lequel les choses changent"
      ],
      answer: 2,
      explanation: "temporalité : Manière dont un être ou une expérience se rapporte au temps",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « temps » ?",
      choices: [
        "Moment actuel dont les limites sont difficiles à fixer",
        "Dimension dans laquelle les événements se succèdent et sont situés",
        "Capacité de conserver et réactiver des expériences passées",
        "Ce qui est pensé hors de la succession temporelle"
      ],
      answer: 1,
      explanation: "temps : Dimension dans laquelle les événements se succèdent et sont situés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « durée » ?",
      choices: [
        "Temps vécu comme continuité qualitative, distincte de la mesure",
        "Événements révolus accessibles par mémoire et traces",
        "Perte ou mise à distance d’un contenu mémorisé",
        "Condition d’un être limité, notamment par le temps"
      ],
      answer: 0,
      explanation: "durée : Temps vécu comme continuité qualitative, distincte de la mesure",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « présent » ?",
      choices: [
        "Étude du passé humain et processus de transformations collectives",
        "Possibilités et événements qui ne sont pas encore réalisés",
        "Processus de transformation par lequel les choses changent",
        "Moment actuel dont les limites sont difficiles à fixer"
      ],
      answer: 3,
      explanation: "présent : Moment actuel dont les limites sont difficiles à fixer",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « passé » ?",
      choices: [
        "Ce qui est pensé hors de la succession temporelle",
        "Capacité de conserver et réactiver des expériences passées",
        "Événements révolus accessibles par mémoire et traces",
        "Attachement affectif à un passé souvent idéalisé"
      ],
      answer: 2,
      explanation: "passé : Événements révolus accessibles par mémoire et traces",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « avenir » ?",
      choices: [
        "Perte ou mise à distance d’un contenu mémorisé",
        "Possibilités et événements qui ne sont pas encore réalisés",
        "Condition d’un être limité, notamment par le temps",
        "Orientation présente vers une possibilité future"
      ],
      answer: 1,
      explanation: "avenir : Possibilités et événements qui ne sont pas encore réalisés",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : temps",
      level: "Facile",
      statement: "Définissez « temps » et donnez un exemple précis.",
      correction: "Une réponse solide définit temps : Dimension dans laquelle les événements se succèdent et sont situés Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : durée",
      level: "Facile",
      statement: "Distinguez « durée » de deux notions proches.",
      correction: "Une réponse solide définit durée : Temps vécu comme continuité qualitative, distincte de la mesure Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : présent",
      level: "Facile",
      statement: "Expliquez le rôle de « présent » dans un problème philosophique.",
      correction: "Une réponse solide définit présent : Moment actuel dont les limites sont difficiles à fixer Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : passé",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « passé ».",
      correction: "Une réponse solide définit passé : Événements révolus accessibles par mémoire et traces Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : avenir",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « avenir ».",
      correction: "Une réponse solide définit avenir : Possibilités et événements qui ne sont pas encore réalisés Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : mémoire",
      level: "Intermédiaire",
      statement: "Définissez « mémoire » et donnez un exemple précis.",
      correction: "Une réponse solide définit mémoire : Capacité de conserver et réactiver des expériences passées Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : oubli",
      level: "Intermédiaire",
      statement: "Distinguez « oubli » de deux notions proches.",
      correction: "Une réponse solide définit oubli : Perte ou mise à distance d’un contenu mémorisé Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : devenir",
      level: "Difficile",
      statement: "Expliquez le rôle de « devenir » dans un problème philosophique.",
      correction: "Une réponse solide définit devenir : Processus de transformation par lequel les choses changent Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : éternité",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « éternité ».",
      correction: "Une réponse solide définit éternité : Ce qui est pensé hors de la succession temporelle Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : finitude",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « finitude ».",
      correction: "Une réponse solide définit finitude : Condition d’un être limité, notamment par le temps Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-travail': {
  title: "Le travail",
  objectives: [
    "Définir et problématiser le travail.",
    "Mobiliser des distinctions et des exemples pertinents.",
    "Construire une réflexion argumentée en confrontant plusieurs perspectives.",
    "Situer des auteurs : Aristote, Hegel, Marx, Simone Weil et Hannah Arendt."
  ],
  course: [
    {
      heading: "1. Définir la notion",
      body: [
        "Le travail transforme la nature et produit des conditions matérielles d’existence. Il suppose des efforts, des compétences, des outils et une organisation. Il peut aussi transformer celui qui l’accomplit en développant ses savoir-faire.",
        "La notion de le travail doit être distinguée des termes proches. Une définition opératoire précise le sens retenu dans le sujet."
      ]
    },
    {
      heading: "2. Problèmes et distinctions",
      body: [
        "Le travail peut rendre possible l’indépendance matérielle. Mais des conditions imposées, répétitives ou dangereuses peuvent limiter la liberté. Marx analyse l’aliénation lorsque le travailleur perd la maîtrise du produit ou du processus.",
        "Une analyse rigoureuse confronte plusieurs sens et examine les conditions dans lesquelles chaque thèse est défendable."
      ]
    },
    {
      heading: "3. Perspectives philosophiques",
      body: [
        "La division du travail accroît parfois l’efficacité, mais elle peut fragmenter les tâches. La coopération rend possible une production collective et pose la question du partage des responsabilités et des bénéfices.",
        "Repères d’auteurs à approfondir par les textes : Aristote, Hegel, Marx, Simone Weil et Hannah Arendt. Il faut éviter de réduire une pensée complexe à une formule."
      ]
    },
    {
      heading: "4. Enjeux contemporains",
      body: [
        "Le travail peut être source de reconnaissance, mais la valeur d’une personne ne se réduit pas à sa profession ni à sa productivité. Il faut distinguer emploi salarié, soin, activités domestiques, bénévolat et loisirs.",
        "Un exemple contemporain peut éclairer le problème, à condition de ne pas remplacer l’argumentation par une simple illustration."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les termes, faire apparaître une tension et formuler une problématique. Construire une progression qui examine une thèse, une objection et une réponse argumentée.",
        "Mobiliser les auteurs pour éclairer un raisonnement, non pour remplacer la réflexion personnelle."
      ]
    }
  
      ,{ heading: 'Travail, transformation de soi et organisation sociale', body: ['Le travail est une activité par laquelle les humains transforment la matière, produisent des biens ou des services et organisent leur existence. Il peut être une contrainte nécessaire, une source de revenus, un moyen d’autonomie, une activité de création ou un facteur d’intégration sociale. Ces dimensions peuvent coexister et entrer en tension.', 'La division du travail accroît parfois l’efficacité et la spécialisation, mais elle peut aussi fragmenter les tâches et réduire la maîtrise du processus productif. Marx analyse notamment les rapports sociaux et l’aliénation dans certaines organisations du travail ; d’autres approches soulignent les possibilités d’apprentissage, de coopération et de réalisation de soi.', 'Le travail ne se réduit pas à l’emploi rémunéré : les activités domestiques et de soin sont indispensables, même lorsqu’elles sont peu reconnues économiquement. Une réflexion philosophique doit donc interroger la valeur sociale du travail, sa répartition, ses conditions et les critères qui permettent de parler d’émancipation.'] }],
  keyPoints: [
    "Le travail transforme la nature et produit des conditions matérielles d’existence. Il suppose des efforts, des compétences, des outils et une organisation. Il peut aussi transformer celui qui l’accomplit en développant ses savoir-faire.",
    "Le travail peut rendre possible l’indépendance matérielle. Mais des conditions imposées, répétitives ou dangereuses peuvent limiter la liberté. Marx analyse l’aliénation lorsque le travailleur perd la maîtrise du produit ou du processus.",
    "La division du travail accroît parfois l’efficacité, mais elle peut fragmenter les tâches. La coopération rend possible une production collective et pose la question du partage des responsabilités et des bénéfices.",
    "Le travail peut être source de reconnaissance, mais la valeur d’une personne ne se réduit pas à sa profession ni à sa productivité. Il faut distinguer emploi salarié, soin, activités domestiques, bénévolat et loisirs.",
    "Auteurs à approfondir : Aristote, Hegel, Marx, Simone Weil et Hannah Arendt."
  ],
  method: [
    "Définir les termes du sujet sans les réduire à une seule acception.",
    "Repérer une tension philosophique et formuler une problématique.",
    "Construire une progression argumentative : thèse, objection, dépassement.",
    "Mobiliser une référence précise et expliquer son intérêt.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « travail » ?",
      back: "Activité humaine organisée qui transforme le monde et produit des biens ou services"
    },
    {
      front: "Quel problème la notion de travail permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Activité humaine organisée qui transforme le monde et produit des biens ou services"
    },
    {
      front: "Comment définir « production » ?",
      back: "Processus par lequel des biens ou services sont réalisés"
    },
    {
      front: "Quel problème la notion de production permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Processus par lequel des biens ou services sont réalisés"
    },
    {
      front: "Comment définir « division du travail » ?",
      back: "Répartition des tâches entre individus ou groupes"
    },
    {
      front: "Quel problème la notion de division du travail permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Répartition des tâches entre individus ou groupes"
    },
    {
      front: "Comment définir « salaire » ?",
      back: "Rémunération versée en échange d’un travail salarié"
    },
    {
      front: "Quel problème la notion de salaire permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Rémunération versée en échange d’un travail salarié"
    },
    {
      front: "Comment définir « aliénation » ?",
      back: "Perte de maîtrise sur l’activité, ses produits ou ses conditions"
    },
    {
      front: "Quel problème la notion de aliénation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Perte de maîtrise sur l’activité, ses produits ou ses conditions"
    },
    {
      front: "Comment définir « exploitation » ?",
      back: "Appropriation inégale des bénéfices issus du travail d’autrui"
    },
    {
      front: "Quel problème la notion de exploitation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Appropriation inégale des bénéfices issus du travail d’autrui"
    },
    {
      front: "Comment définir « métier » ?",
      back: "Activité professionnelle fondée sur des compétences et pratiques"
    },
    {
      front: "Quel problème la notion de métier permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Activité professionnelle fondée sur des compétences et pratiques"
    },
    {
      front: "Comment définir « vocation » ?",
      back: "Orientation vécue comme un appel ou engagement personnel"
    },
    {
      front: "Quel problème la notion de vocation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Orientation vécue comme un appel ou engagement personnel"
    },
    {
      front: "Comment définir « loisir » ?",
      back: "Activité choisie en dehors des obligations professionnelles"
    },
    {
      front: "Quel problème la notion de loisir permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Activité choisie en dehors des obligations professionnelles"
    },
    {
      front: "Comment définir « reconnaissance » ?",
      back: "Fait de voir son activité et sa contribution considérées"
    },
    {
      front: "Quel problème la notion de reconnaissance permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Fait de voir son activité et sa contribution considérées"
    },
    {
      front: "Comment définir « coopération » ?",
      back: "Action coordonnée de plusieurs personnes vers un objectif commun"
    },
    {
      front: "Quel problème la notion de coopération permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Action coordonnée de plusieurs personnes vers un objectif commun"
    },
    {
      front: "Comment définir « autonomie » ?",
      back: "Possibilité de comprendre et maîtriser les règles de son activité"
    },
    {
      front: "Quel problème la notion de autonomie permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Possibilité de comprendre et maîtriser les règles de son activité"
    },
    {
      front: "Comment définir « valeur d’usage » ?",
      back: "Utilité d’un bien ou service pour satisfaire un besoin"
    },
    {
      front: "Quel problème la notion de valeur d’usage permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Utilité d’un bien ou service pour satisfaire un besoin"
    },
    {
      front: "Comment définir « valeur d’échange » ?",
      back: "Valeur exprimée dans l’échange contre d’autres biens ou monnaie"
    },
    {
      front: "Quel problème la notion de valeur d’échange permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Valeur exprimée dans l’échange contre d’autres biens ou monnaie"
    },
    {
      front: "Comment définir « émancipation » ?",
      back: "Processus par lequel un individu ou groupe gagne en autonomie"
    },
    {
      front: "Quel problème la notion de émancipation permet-elle d’examiner ?",
      back: "Elle sert à préciser les termes du débat et à construire une distinction. Processus par lequel un individu ou groupe gagne en autonomie"
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans la série 1, quelle proposition définit correctement « travail » ?",
      choices: [
        "Activité humaine organisée qui transforme le monde et produit des biens ou services",
        "Répartition des tâches entre individus ou groupes",
        "Appropriation inégale des bénéfices issus du travail d’autrui",
        "Activité choisie en dehors des obligations professionnelles"
      ],
      answer: 0,
      explanation: "travail : Activité humaine organisée qui transforme le monde et produit des biens ou services",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 2, quelle proposition définit correctement « production » ?",
      choices: [
        "Fait de voir son activité et sa contribution considérées",
        "Rémunération versée en échange d’un travail salarié",
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Processus par lequel des biens ou services sont réalisés"
      ],
      answer: 3,
      explanation: "production : Processus par lequel des biens ou services sont réalisés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 3, quelle proposition définit correctement « division du travail » ?",
      choices: [
        "Orientation vécue comme un appel ou engagement personnel",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Répartition des tâches entre individus ou groupes",
        "Action coordonnée de plusieurs personnes vers un objectif commun"
      ],
      answer: 2,
      explanation: "division du travail : Répartition des tâches entre individus ou groupes",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 4, quelle proposition définit correctement « salaire » ?",
      choices: [
        "Appropriation inégale des bénéfices issus du travail d’autrui",
        "Rémunération versée en échange d’un travail salarié",
        "Activité choisie en dehors des obligations professionnelles",
        "Possibilité de comprendre et maîtriser les règles de son activité"
      ],
      answer: 1,
      explanation: "salaire : Rémunération versée en échange d’un travail salarié",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 5, quelle proposition définit correctement « aliénation » ?",
      choices: [
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Fait de voir son activité et sa contribution considérées",
        "Utilité d’un bien ou service pour satisfaire un besoin"
      ],
      answer: 0,
      explanation: "aliénation : Perte de maîtrise sur l’activité, ses produits ou ses conditions",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 6, quelle proposition définit correctement « exploitation » ?",
      choices: [
        "Valeur exprimée dans l’échange contre d’autres biens ou monnaie",
        "Orientation vécue comme un appel ou engagement personnel",
        "Action coordonnée de plusieurs personnes vers un objectif commun",
        "Appropriation inégale des bénéfices issus du travail d’autrui"
      ],
      answer: 3,
      explanation: "exploitation : Appropriation inégale des bénéfices issus du travail d’autrui",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Facile",
      question: "Dans la série 7, quelle proposition définit correctement « métier » ?",
      choices: [
        "Possibilité de comprendre et maîtriser les règles de son activité",
        "Activité choisie en dehors des obligations professionnelles",
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Processus par lequel un individu ou groupe gagne en autonomie"
      ],
      answer: 2,
      explanation: "métier : Activité professionnelle fondée sur des compétences et pratiques",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 8, quelle proposition définit correctement « vocation » ?",
      choices: [
        "Fait de voir son activité et sa contribution considérées",
        "Orientation vécue comme un appel ou engagement personnel",
        "Utilité d’un bien ou service pour satisfaire un besoin",
        "Activité humaine organisée qui transforme le monde et produit des biens ou services"
      ],
      answer: 1,
      explanation: "vocation : Orientation vécue comme un appel ou engagement personnel",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 9, quelle proposition définit correctement « loisir » ?",
      choices: [
        "Activité choisie en dehors des obligations professionnelles",
        "Action coordonnée de plusieurs personnes vers un objectif commun",
        "Valeur exprimée dans l’échange contre d’autres biens ou monnaie",
        "Processus par lequel des biens ou services sont réalisés"
      ],
      answer: 0,
      explanation: "loisir : Activité choisie en dehors des obligations professionnelles",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 10, quelle proposition définit correctement « reconnaissance » ?",
      choices: [
        "Répartition des tâches entre individus ou groupes",
        "Possibilité de comprendre et maîtriser les règles de son activité",
        "Processus par lequel un individu ou groupe gagne en autonomie",
        "Fait de voir son activité et sa contribution considérées"
      ],
      answer: 3,
      explanation: "reconnaissance : Fait de voir son activité et sa contribution considérées",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 11, quelle proposition définit correctement « coopération » ?",
      choices: [
        "Activité humaine organisée qui transforme le monde et produit des biens ou services",
        "Utilité d’un bien ou service pour satisfaire un besoin",
        "Action coordonnée de plusieurs personnes vers un objectif commun",
        "Rémunération versée en échange d’un travail salarié"
      ],
      answer: 2,
      explanation: "coopération : Action coordonnée de plusieurs personnes vers un objectif commun",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 12, quelle proposition définit correctement « autonomie » ?",
      choices: [
        "Valeur exprimée dans l’échange contre d’autres biens ou monnaie",
        "Possibilité de comprendre et maîtriser les règles de son activité",
        "Processus par lequel des biens ou services sont réalisés",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions"
      ],
      answer: 1,
      explanation: "autonomie : Possibilité de comprendre et maîtriser les règles de son activité",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 13, quelle proposition définit correctement « valeur d’usage » ?",
      choices: [
        "Utilité d’un bien ou service pour satisfaire un besoin",
        "Processus par lequel un individu ou groupe gagne en autonomie",
        "Répartition des tâches entre individus ou groupes",
        "Appropriation inégale des bénéfices issus du travail d’autrui"
      ],
      answer: 0,
      explanation: "valeur d’usage : Utilité d’un bien ou service pour satisfaire un besoin",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 14, quelle proposition définit correctement « valeur d’échange » ?",
      choices: [
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Activité humaine organisée qui transforme le monde et produit des biens ou services",
        "Rémunération versée en échange d’un travail salarié",
        "Valeur exprimée dans l’échange contre d’autres biens ou monnaie"
      ],
      answer: 3,
      explanation: "valeur d’échange : Valeur exprimée dans l’échange contre d’autres biens ou monnaie",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Intermédiaire",
      question: "Dans la série 15, quelle proposition définit correctement « émancipation » ?",
      choices: [
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Processus par lequel des biens ou services sont réalisés",
        "Processus par lequel un individu ou groupe gagne en autonomie",
        "Orientation vécue comme un appel ou engagement personnel"
      ],
      answer: 2,
      explanation: "émancipation : Processus par lequel un individu ou groupe gagne en autonomie",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 16, quelle proposition définit correctement « travail » ?",
      choices: [
        "Répartition des tâches entre individus ou groupes",
        "Activité humaine organisée qui transforme le monde et produit des biens ou services",
        "Appropriation inégale des bénéfices issus du travail d’autrui",
        "Activité choisie en dehors des obligations professionnelles"
      ],
      answer: 1,
      explanation: "travail : Activité humaine organisée qui transforme le monde et produit des biens ou services",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 17, quelle proposition définit correctement « production » ?",
      choices: [
        "Processus par lequel des biens ou services sont réalisés",
        "Rémunération versée en échange d’un travail salarié",
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Fait de voir son activité et sa contribution considérées"
      ],
      answer: 0,
      explanation: "production : Processus par lequel des biens ou services sont réalisés",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 18, quelle proposition définit correctement « division du travail » ?",
      choices: [
        "Action coordonnée de plusieurs personnes vers un objectif commun",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Orientation vécue comme un appel ou engagement personnel",
        "Répartition des tâches entre individus ou groupes"
      ],
      answer: 3,
      explanation: "division du travail : Répartition des tâches entre individus ou groupes",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 19, quelle proposition définit correctement « salaire » ?",
      choices: [
        "Activité choisie en dehors des obligations professionnelles",
        "Appropriation inégale des bénéfices issus du travail d’autrui",
        "Rémunération versée en échange d’un travail salarié",
        "Possibilité de comprendre et maîtriser les règles de son activité"
      ],
      answer: 2,
      explanation: "salaire : Rémunération versée en échange d’un travail salarié",
      skill: "Définition et distinction conceptuelle"
    },
    {
      level: "Difficile",
      question: "Dans la série 20, quelle proposition définit correctement « aliénation » ?",
      choices: [
        "Activité professionnelle fondée sur des compétences et pratiques",
        "Perte de maîtrise sur l’activité, ses produits ou ses conditions",
        "Fait de voir son activité et sa contribution considérées",
        "Utilité d’un bien ou service pour satisfaire un besoin"
      ],
      answer: 1,
      explanation: "aliénation : Perte de maîtrise sur l’activité, ses produits ou ses conditions",
      skill: "Définition et distinction conceptuelle"
    }
  ],
  exercises: [
    {
      title: "Définir : travail",
      level: "Facile",
      statement: "Définissez « travail » et donnez un exemple précis.",
      correction: "Une réponse solide définit travail : Activité humaine organisée qui transforme le monde et produit des biens ou services Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : production",
      level: "Facile",
      statement: "Distinguez « production » de deux notions proches.",
      correction: "Une réponse solide définit production : Processus par lequel des biens ou services sont réalisés Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : division du travail",
      level: "Facile",
      statement: "Expliquez le rôle de « division du travail » dans un problème philosophique.",
      correction: "Une réponse solide définit division du travail : Répartition des tâches entre individus ou groupes Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : salaire",
      level: "Intermédiaire",
      statement: "Présentez une objection à une affirmation simpliste sur « salaire ».",
      correction: "Une réponse solide définit salaire : Rémunération versée en échange d’un travail salarié Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : aliénation",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « aliénation ».",
      correction: "Une réponse solide définit aliénation : Perte de maîtrise sur l’activité, ses produits ou ses conditions Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Définir : exploitation",
      level: "Intermédiaire",
      statement: "Définissez « exploitation » et donnez un exemple précis.",
      correction: "Une réponse solide définit exploitation : Appropriation inégale des bénéfices issus du travail d’autrui Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : métier",
      level: "Intermédiaire",
      statement: "Distinguez « métier » de deux notions proches.",
      correction: "Une réponse solide définit métier : Activité professionnelle fondée sur des compétences et pratiques Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : vocation",
      level: "Difficile",
      statement: "Expliquez le rôle de « vocation » dans un problème philosophique.",
      correction: "Une réponse solide définit vocation : Orientation vécue comme un appel ou engagement personnel Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Discuter : loisir",
      level: "Difficile",
      statement: "Présentez une objection à une affirmation simpliste sur « loisir ».",
      correction: "Une réponse solide définit loisir : Activité choisie en dehors des obligations professionnelles Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : reconnaissance",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « reconnaissance ».",
      correction: "Une réponse solide définit reconnaissance : Fait de voir son activité et sa contribution considérées Elle explique ensuite le problème en jeu, propose un exemple précis et justifie les distinctions et arguments.",
      skills: [
        "Définition",
        "Conceptualisation",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en philosophie — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme en vigueur de philosophie en terminale générale : notions, auteurs, repères et exercices"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de philosophie de Terminale générale. Les définitions et références sont des synthèses à approfondir par l’étude des textes ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'philo-verite': {
    title: 'La vérité',
    objectives: ['Distinguer vérité, réalité, certitude, croyance et opinion.', 'Comparer les critères de vérité et les démarches de connaissance.', 'Construire une argumentation nuancée sur la possibilité et la valeur du vrai.'],
    course: [
      { heading: '1. Dire vrai : vérité et réalité', body: ['La vérité qualifie généralement un jugement ou un énoncé qui correspond à ce qui est. La réalité désigne ce qui existe indépendamment de ce que nous en affirmons. Il faut donc distinguer une chose et le discours qui prétend la décrire.', 'Une affirmation peut être sincère sans être vraie : l’erreur montre que croire ce que l’on dit ne suffit pas à garantir sa vérité. La vérité demande des raisons, des preuves ou une méthode de vérification adaptées au domaine.'] },
      { heading: '2. Opinion, croyance et savoir', body: ['L’opinion est un jugement souvent adopté sans examen suffisant. La croyance est une adhésion à une proposition qui n’est pas nécessairement démontrée. Le savoir suppose une justification plus exigeante, même si les critères de justification varient selon les disciplines.', 'Platon distingue l’opinion et la connaissance dans sa réflexion sur le savoir. Descartes propose le doute méthodique pour examiner les croyances et rechercher un fondement ferme. Douter méthodiquement ne signifie pas renoncer à connaître : c’est suspendre provisoirement son assentiment pour mieux examiner.'] },
      { heading: '3. Démontrer, expérimenter, interpréter', body: ['En mathématiques, une démonstration établit une conclusion à partir de propositions et de règles d’inférence. Dans les sciences expérimentales, les hypothèses sont confrontées à des observations et à des expériences contrôlées.', 'Une observation peut être limitée par les instruments, les conditions de mesure ou les hypothèses mobilisées. La connaissance scientifique progresse en formulant des propositions discutables, testables et révisables. Popper insiste sur la possibilité de mettre une théorie à l’épreuve plutôt que de chercher seulement des confirmations.'] },
      { heading: '4. Vérité, langage et société', body: ['Le langage permet de formuler et de transmettre des connaissances, mais les mots peuvent aussi être ambigus, trompeurs ou utilisés pour persuader. Il faut distinguer convaincre par des raisons et persuader en agissant sur les émotions ou les intérêts.', 'La recherche collective du vrai suppose la confrontation des arguments, la critique des sources et la possibilité de corriger une erreur. Le consensus ne suffit toutefois pas à rendre une proposition vraie : une majorité peut se tromper.'] },
      { heading: '5. Méthode : examiner une affirmation', body: ['Identifier précisément la proposition et les termes qui peuvent être ambigus. Demander quelles observations, démonstrations ou sources pourraient la justifier.', 'Distinguer un exemple, un témoignage, une preuve et une autorité. Évaluer la qualité de la méthode et envisager ce qui pourrait conduire à réviser le jugement. En dissertation, une référence philosophique doit éclairer le problème et être expliquée.'] }
    ],
    keyPoints: ['La vérité concerne les énoncés ; la réalité concerne ce qui existe.', 'La sincérité ne garantit pas la vérité.', 'Une opinion n’est pas un savoir simplement parce qu’elle est partagée.', 'Les critères de preuve dépendent du domaine de connaissance.', 'La science organise la mise à l’épreuve et la révision des hypothèses.', 'Le consensus social ne constitue pas à lui seul une preuve.'],
    method: ['Définir vérité, opinion, croyance et savoir sans les confondre.', 'Repérer la difficulté : peut-on atteindre le vrai, et à quelles conditions ?', 'Distinguer les critères de preuve selon les domaines.', 'Construire une objection qui porte sur les limites de la connaissance.', 'Répondre par une position nuancée et justifiée.', 'Utiliser les auteurs pour éclairer les arguments, non pour remplacer le raisonnement.'],
    flashcards: [
      {front:'Qu’est-ce que la vérité ?',back:'La qualité d’un énoncé ou d’un jugement qui est conforme à ce qui est.'},
      {front:'Qu’est-ce que la réalité ?',back:'Ce qui existe, indépendamment de la manière dont nous le décrivons.'},
      {front:'Pourquoi distinguer vérité et réalité ?',back:'La réalité est ce dont on parle ; la vérité qualifie ce que l’on en affirme.'},
      {front:'Une croyance sincère est-elle nécessairement vraie ?',back:'Non. La sincérité décrit l’adhésion du sujet, pas la conformité de la proposition.'},
      {front:'Qu’est-ce qu’une opinion ?',back:'Un jugement adopté sans justification suffisamment examinée.'},
      {front:'Qu’est-ce qu’un savoir ?',back:'Une connaissance soutenue par des justifications et des méthodes adaptées.'},
      {front:'Quelle différence entre croire et savoir ?',back:'Croire consiste à adhérer ; savoir implique une justification plus exigeante.'},
      {front:'Pourquoi l’opinion peut-elle être trompeuse ?',back:'Elle peut reposer sur l’habitude, l’apparence ou une information insuffisamment vérifiée.'},
      {front:'Quel est le rôle du doute méthodique chez Descartes ?',back:'Examiner les croyances et suspendre celles qui ne résistent pas à un doute raisonnable.'},
      {front:'Le doute méthodique est-il un scepticisme définitif ?',back:'Non. Il constitue une démarche provisoire destinée à rechercher un fondement solide.'},
      {front:'Qu’est-ce qu’une démonstration ?',back:'Un raisonnement qui établit une conclusion à partir de prémisses et de règles logiques.'},
      {front:'Quel rôle joue l’expérience dans les sciences expérimentales ?',back:'Elle confronte les hypothèses à des observations organisées et contrôlées.'},
      {front:'Une observation est-elle toujours neutre ?',back:'Non. Elle dépend aussi des instruments, des conditions et des cadres théoriques.'},
      {front:'Que signifie réfuter une hypothèse ?',back:'Montrer qu’elle rencontre un résultat incompatible dans les conditions prévues.'},
      {front:'Quelle idée Popper associe-t-il à la scientificité ?',back:'Une théorie scientifique doit pouvoir être mise à l’épreuve et éventuellement réfutée.'},
      {front:'Une théorie est-elle vraie parce qu’elle est populaire ?',back:'Non. La popularité mesure une adhésion, pas la validité d’une proposition.'},
      {front:'Quelle différence entre convaincre et persuader ?',back:'Convaincre s’appuie sur des raisons ; persuader peut mobiliser les émotions et les intérêts.'},
      {front:'Un témoignage suffit-il toujours comme preuve ?',back:'Non. Il faut examiner la compétence, la sincérité, la précision et les corroborations possibles.'},
      {front:'Pourquoi vérifier une source ?',back:'Pour évaluer son origine, sa compétence, ses méthodes et la possibilité de confirmation indépendante.'},
      {front:'Le consensus garantit-il la vérité ?',back:'Non. Un accord collectif peut être erroné ; il doit rester ouvert à la critique.'},
      {front:'Qu’est-ce qu’une preuve empirique ?',back:'Un élément issu de l’observation ou de l’expérience qui soutient une proposition.'},
      {front:'Qu’est-ce qu’une preuve logique ?',back:'Une justification fondée sur la validité des inférences à partir de prémisses.'},
      {front:'Pourquoi distinguer corrélation et causalité ?',back:'Deux phénomènes associés ne prouvent pas que l’un produit l’autre.'},
      {front:'Une hypothèse scientifique est-elle une simple opinion ?',back:'Non. Elle est formulée de façon à pouvoir être examinée par des méthodes explicites.'},
      {front:'Pourquoi les connaissances scientifiques sont-elles révisables ?',back:'De nouvelles observations ou de meilleures méthodes peuvent conduire à corriger les modèles.'},
      {front:'L’erreur empêche-t-elle toute connaissance ?',back:'Non. Identifier et corriger des erreurs fait partie du progrès de la connaissance.'},
      {front:'Quel danger présente l’argument d’autorité ?',back:'Il remplace l’examen des raisons par le prestige de la personne citée.'},
      {front:'Qu’est-ce qu’une source primaire ?',back:'Un document ou une donnée directement lié à l’objet étudié, plutôt qu’un commentaire ultérieur.'},
      {front:'Pourquoi un exemple n’est-il pas toujours une preuve ?',back:'Un cas particulier illustre une idée mais ne suffit pas nécessairement à l’établir de façon générale.'},
      {front:'Comment examiner une affirmation ?',back:'Clarifier son sens, identifier ses preuves, vérifier les sources et considérer les objections.'}
    ],
    quiz: [
      {level:'Facile',question:'La vérité qualifie principalement :',choices:['Un énoncé ou un jugement','Un objet indépendamment de toute description','Une émotion agréable','Une préférence personnelle'],answer:0,explanation:'La vérité concerne ce que l’on affirme ; la réalité désigne ce qui existe.'},
      {level:'Facile',question:'Une personne peut-elle être sincère et se tromper ?',choices:['Oui, sincérité et vérité sont distinctes','Non, la sincérité garantit le vrai','Seulement en mathématiques','Seulement si elle ment'],answer:0,explanation:'La sincérité concerne l’intention, tandis que la vérité concerne la validité de l’affirmation.'},
      {level:'Facile',question:'Le doute méthodique de Descartes vise à :',choices:['Examiner les croyances pour rechercher un fondement certain','Démontrer que rien n’existe','Remplacer toute raison par l’intuition','Refuser définitivement toute connaissance'],answer:0,explanation:'Le doute est un moyen provisoire d’écarter les croyances insuffisamment fondées.'},
      {level:'Facile',question:'Une démonstration mathématique repose principalement sur :',choices:['Des prémisses et des règles d’inférence','Un sondage d’opinion','La popularité du résultat','Un témoignage isolé'],answer:0,explanation:'La démonstration établit une conclusion par un raisonnement valide.'},
      {level:'Facile',question:'Dans une science expérimentale, une hypothèse doit être :',choices:['Confrontable à des observations ou expériences','Acceptée par tous sans examen','Impossible à discuter','Fondée uniquement sur une tradition'],answer:0,explanation:'Une hypothèse scientifique doit pouvoir être examinée empiriquement.'},
      {level:'Facile',question:'Le consensus suffit-il à établir une vérité ?',choices:['Non, un accord peut être erroné','Oui, toujours','Seulement si la majorité est importante','Oui, si l’accord est ancien'],answer:0,explanation:'La vérité ne se réduit pas au nombre de personnes qui adhèrent à une proposition.'},
      {level:'Intermédiaire',question:'La distinction croire/savoir porte notamment sur :',choices:['Le degré et le type de justification','La longueur de la phrase','Le nombre de personnes présentes','Le caractère agréable de l’idée'],answer:0,explanation:'Le savoir demande des justifications plus exigeantes que la simple adhésion.'},
      {level:'Intermédiaire',question:'Pourquoi une observation scientifique peut-elle être discutée ?',choices:['Parce que ses conditions et ses instruments doivent être examinés','Parce que toute observation est inutile','Parce qu’elle est toujours fausse','Parce qu’elle dépend uniquement du hasard'],answer:0,explanation:'Les instruments, protocoles et cadres d’interprétation influencent les observations.'},
      {level:'Intermédiaire',question:'La réfutabilité chez Popper signifie qu’une théorie :',choices:['Expose des conditions possibles qui pourraient la mettre en défaut','Doit être confirmée par chaque observation','Ne peut jamais être testée','Est vraie si elle est élégante'],answer:0,explanation:'Une théorie scientifique doit prendre le risque d’être confrontée à des résultats incompatibles.'},
      {level:'Intermédiaire',question:'Un témoignage est plus solide lorsqu’il :',choices:['Peut être corroboré par des éléments indépendants','Est spectaculaire','Est partagé sans source','Confirme ce que l’on pense déjà'],answer:0,explanation:'La corroboration indépendante renforce la fiabilité d’un témoignage.'},
      {level:'Intermédiaire',question:'Convaincre se distingue de persuader car convaincre vise d’abord à :',choices:['Faire adhérer par des raisons','Provoquer une émotion sans argument','Imposer une décision','Répéter une affirmation'],answer:0,explanation:'La conviction rationnelle repose sur l’examen d’arguments.'},
      {level:'Intermédiaire',question:'Une corrélation entre deux phénomènes prouve-t-elle une causalité ?',choices:['Non, d’autres facteurs peuvent expliquer leur association','Oui, nécessairement','Oui, si les phénomènes sont proches dans le temps','Non, car toute statistique est fausse'],answer:0,explanation:'Une association statistique ne suffit pas à établir un lien causal.'},
      {level:'Intermédiaire',question:'L’argument d’autorité devient problématique lorsqu’il :',choices:['Remplace l’examen des preuves par le prestige d’une personne','Cite précisément une source vérifiable','Présente une expertise pertinente avec ses limites','Invite à contrôler une démonstration'],answer:0,explanation:'Le statut d’une personne ne remplace pas la justification de la proposition.'},
      {level:'Intermédiaire',question:'Une source primaire est :',choices:['Un document directement lié à l’objet étudié','Un résumé anonyme sans référence','Une opinion répétée sur un forum','Une publicité qui reprend une rumeur'],answer:0,explanation:'Une source primaire donne accès à un document ou à des données de première main.'},
      {level:'Difficile',question:'Pourquoi la science ne se réduit-elle pas à accumuler des confirmations ?',choices:['Parce qu’elle doit aussi chercher à éprouver et critiquer ses hypothèses','Parce que les faits n’ont aucune importance','Parce que les théories ne changent jamais','Parce que toute confirmation est interdite'],answer:0,explanation:'La mise à l’épreuve critique permet de distinguer une théorie robuste d’une affirmation protégée contre toute objection.'},
      {level:'Difficile',question:'Une proposition est largement acceptée mais contredite par des preuves solides. Il faut :',choices:['Réexaminer la proposition à la lumière des preuves','Conserver la proposition en raison de sa popularité','Écarter les preuves sans les lire','Confondre accord social et démonstration'],answer:0,explanation:'La popularité ne doit pas l’emporter sur l’examen méthodique des éléments disponibles.'},
      {level:'Difficile',question:'Quel est le meilleur usage d’un exemple dans une dissertation ?',choices:['Éclairer et éprouver un argument sans le remplacer','Remplacer toute définition','Tenir lieu de démonstration universelle','Éviter de formuler une thèse'],answer:0,explanation:'Un exemple rend un argument concret, mais le raisonnement doit expliciter ce qu’il montre.'},
      {level:'Difficile',question:'Pourquoi la révision d’une théorie peut-elle être un progrès ?',choices:['Elle améliore l’explication en tenant compte de nouvelles objections ou données','Elle prouve que toute connaissance est impossible','Elle montre que les méthodes sont inutiles','Elle signifie que les chercheurs choisissent au hasard'],answer:0,explanation:'La correction raisonnée d’un modèle peut accroître sa précision et son pouvoir explicatif.'},
      {level:'Difficile',question:'Laquelle de ces démarches est la plus rigoureuse face à une information virale ?',choices:['Identifier l’origine, vérifier les preuves et chercher une corroboration indépendante','La partager si elle confirme une intuition','Se fier uniquement au nombre de partages','La rejeter uniquement parce qu’elle est nouvelle'],answer:0,explanation:'La vérification porte sur la source, les éléments probants et les confirmations indépendantes.'},
      {level:'Difficile',question:'Une dissertation sur la vérité doit éviter de :',choices:['Confondre vérité et certitude subjective','Distinguer plusieurs critères de preuve','Examiner une objection','Définir les termes du sujet'],answer:0,explanation:'Se sentir certain ne garantit pas que l’affirmation soit vraie.'}
    ],
    exercises: [
      {title:'Sincérité et vérité',level:'Facile',statement:'Expliquez pourquoi une personne sincère peut formuler une affirmation fausse.',correction:'La sincérité indique que la personne croit ce qu’elle dit. Or une croyance peut être mal informée ou reposer sur une observation trompeuse. La vérité exige d’examiner la conformité de l’affirmation et ses justifications.',skills:['Distinction conceptuelle','Argumentation']},
      {title:'Opinion et savoir',level:'Facile',statement:'Une majorité d’élèves affirme qu’une information est exacte. Montrez pourquoi cela ne suffit pas à en faire un savoir.',correction:'Le nombre d’adhésions ne garantit pas la vérité. Il faut rechercher l’origine de l’information, ses preuves et des confirmations indépendantes. Une opinion collective peut rester erronée.',skills:['Esprit critique','Justification']},
      {title:'Le doute cartésien',level:'Intermédiaire',statement:'Expliquez pourquoi le doute méthodique n’est pas un renoncement définitif à la connaissance.',correction:'Le doute cartésien suspend provisoirement l’assentiment aux croyances incertaines. Son objectif est de rechercher un fondement qui résiste à l’examen, et non de conclure que toute connaissance est impossible.',skills:['Descartes','Analyse de thèse']},
      {title:'Démonstration et expérience',level:'Intermédiaire',statement:'Comparez le type de justification attendu pour établir un théorème mathématique et pour soutenir une hypothèse en physique.',correction:'Le théorème est établi par démonstration à partir de définitions, axiomes et règles logiques. Une hypothèse physique est confrontée à des observations et expériences, avec des protocoles et des mesures discutables.',skills:['Comparaison','Méthodes scientifiques']},
      {title:'Corrélation et causalité',level:'Intermédiaire',statement:'Deux phénomènes augmentent simultanément. Construisez une explication montrant pourquoi cela ne prouve pas que l’un cause l’autre.',correction:'Un troisième facteur peut agir sur les deux phénomènes, ou leur association peut être fortuite. Pour établir une causalité, il faut construire un protocole et examiner les mécanismes et explications concurrentes.',skills:['Raisonnement','Causalité']},
      {title:'Critique d’une autorité',level:'Intermédiaire',statement:'Évaluez l’argument : « Cette affirmation est vraie parce qu’une personnalité célèbre l’a déclarée. »',correction:'La notoriété ne constitue pas une preuve. L’expertise peut rendre un témoignage pertinent, mais il faut examiner les raisons, les données et les limites de la compétence invoquée.',skills:['Argumentation','Esprit critique']},
      {title:'La réfutabilité',level:'Difficile',statement:'Expliquez en quoi une hypothèse qui ne pourrait être contredite par aucune observation pose un problème pour la démarche scientifique.',correction:'Si aucun résultat possible ne peut mettre l’hypothèse en difficulté, elle échappe à la mise à l’épreuve empirique. La démarche scientifique exige des conséquences observables susceptibles de la contredire.',skills:['Popper','Épistémologie']},
      {title:'Vérité et débat public',level:'Difficile',statement:'Montrez pourquoi la recherche collective de la vérité exige à la fois la discussion et la vérification des sources.',correction:'La discussion expose les arguments aux objections et permet de corriger les erreurs. La vérification des sources permet d’évaluer la qualité des informations. Ni le débat seul ni le consensus ne suffisent sans preuves examinables.',skills:['Débat','Sources']},
      {title:'Construire une problématique',level:'Difficile',statement:'Proposez une problématique pour le sujet : « Peut-on être certain sans être dans le vrai ? »',correction:'La certitude décrit un état subjectif d’adhésion ferme, tandis que la vérité concerne la validité de la proposition. La problématique peut demander si la force de notre conviction constitue un critère fiable ou si elle doit être contrôlée par des preuves.',skills:['Problématisation','Définitions']},
      {title:'Plan de dissertation',level:'Difficile',statement:'Élaborez un plan argumenté pour le sujet : « La vérité a-t-elle besoin du doute ? »',correction:'Une première partie peut montrer que le doute fragilise les certitudes non examinées. Une deuxième peut souligner que le doute radical peut paralyser l’action et la connaissance. Une troisième peut défendre un doute méthodique et critique qui teste les affirmations afin de construire des savoirs mieux justifiés.',skills:['Dissertation','Progression argumentative']}
    ],
    sources:[{title:'Programmes et ressources en philosophie — voie générale et technologique',institution:'Ministère de l’Éducation nationale — Éduscol',url:'https://eduscol.education.gouv.fr/5826/programmes-et-ressources-en-philosophie-voie-gt',consultedAt:'2026-11-01',supports:['Programme en vigueur de philosophie en terminale générale','Ressources sur notions, auteurs, repères et exercices']}],
    sourceNote:'Ressource pédagogique originale adossée au programme officiel de philosophie de terminale générale. Les positions d’auteurs sont résumées et doivent être approfondies par l’étude de textes.',
    validationStatus:'draft'
  },
  'philo-methodes': {
    title: "Méthodes : dissertation et explication de texte",
    objectives: [
      "Maîtriser les notions fondamentales de philosophie liées à définition des termes et problématisation.",
      "Utiliser une démarche rigoureuse pour analyser et résoudre une situation de philosophie.",
      "Justifier les résultats, interpréter les démarches et identifier leurs limites."
    ],
    course: [
      { heading: "1. Définition des termes", body: ["En philosophie, définition des termes constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement définition des termes, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "2. Problématisation", body: ["En philosophie, problématisation constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement problématisation, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "3. Thèse et objection", body: ["En philosophie, thèse et objection constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement thèse et objection, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "4. Argumentation", body: ["En philosophie, argumentation constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement argumentation, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "5. Exemple pertinent", body: ["En philosophie, exemple pertinent constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement exemple pertinent, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] }
    
      ,{ heading: 'Éviter les plans mécaniques et faire progresser le problème', body: ['Une dissertation ne consiste pas à réciter un cours sur une notion. Il faut partir des termes exacts du sujet, repérer leur relation et comprendre ce qui rend la question difficile. Une problématique pertinente fait apparaître une tension que les différentes parties vont examiner, et non une simple reformulation du sujet.', 'Chaque partie doit apporter une réponse partielle et faire avancer l’analyse. Les transitions expliquent pourquoi la réponse précédente ne suffit pas et ce qui doit être examiné ensuite. Les exemples et les références doivent être expliqués : un nom d’auteur ou une citation ne remplace jamais le raisonnement.', 'Dans l’explication de texte, il faut suivre l’ordre du passage, dégager les étapes de l’argumentation et éclairer les notions dans leur contexte. Il ne s’agit ni de paraphraser chaque phrase ni de plaquer une dissertation générale. La précision du commentaire dépend de l’attention portée aux articulations logiques et aux distinctions du texte.'] }],
    keyPoints: [
      "Définition des termes doit être défini, contextualisé et justifié.",
      "Problématisation doit être défini, contextualisé et justifié.",
      "Thèse et objection doit être défini, contextualisé et justifié.",
      "Argumentation doit être défini, contextualisé et justifié.",
      "Exemple pertinent doit être défini, contextualisé et justifié."
    ],
    method: [
      "Lire précisément la consigne et identifier le problème.",
      "Définir les notions et expliciter les hypothèses.",
      "Organiser les étapes du raisonnement.",
      "Justifier chaque affirmation avec une donnée, une propriété ou un exemple pertinent.",
      "Vérifier la cohérence de la conclusion et préciser ses limites."
    ],
    flashcards: [
      { front: "Comment définir définition des termes dans le cadre de philosophie ? (repère 1)", back: "Définition des termes : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir problématisation dans le cadre de philosophie ? (repère 2)", back: "Problématisation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir thèse et objection dans le cadre de philosophie ? (repère 3)", back: "Thèse et objection : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir argumentation dans le cadre de philosophie ? (repère 4)", back: "Argumentation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir exemple pertinent dans le cadre de philosophie ? (repère 5)", back: "Exemple pertinent : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir transition dans le cadre de philosophie ? (repère 6)", back: "Transition : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir analyse conceptuelle dans le cadre de philosophie ? (repère 7)", back: "Analyse conceptuelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir explication de texte dans le cadre de philosophie ? (repère 8)", back: "Explication de texte : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir enjeu philosophique dans le cadre de philosophie ? (repère 9)", back: "Enjeu philosophique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir conclusion dans le cadre de philosophie ? (repère 10)", back: "Conclusion : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir définition des termes dans le cadre de philosophie ? (repère 11)", back: "Définition des termes : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir problématisation dans le cadre de philosophie ? (repère 12)", back: "Problématisation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir thèse et objection dans le cadre de philosophie ? (repère 13)", back: "Thèse et objection : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir argumentation dans le cadre de philosophie ? (repère 14)", back: "Argumentation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir exemple pertinent dans le cadre de philosophie ? (repère 15)", back: "Exemple pertinent : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir transition dans le cadre de philosophie ? (repère 16)", back: "Transition : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir analyse conceptuelle dans le cadre de philosophie ? (repère 17)", back: "Analyse conceptuelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir explication de texte dans le cadre de philosophie ? (repère 18)", back: "Explication de texte : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir enjeu philosophique dans le cadre de philosophie ? (repère 19)", back: "Enjeu philosophique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir conclusion dans le cadre de philosophie ? (repère 20)", back: "Conclusion : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir définition des termes dans le cadre de philosophie ? (repère 21)", back: "Définition des termes : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir problématisation dans le cadre de philosophie ? (repère 22)", back: "Problématisation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir thèse et objection dans le cadre de philosophie ? (repère 23)", back: "Thèse et objection : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir argumentation dans le cadre de philosophie ? (repère 24)", back: "Argumentation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir exemple pertinent dans le cadre de philosophie ? (repère 25)", back: "Exemple pertinent : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir transition dans le cadre de philosophie ? (repère 26)", back: "Transition : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir analyse conceptuelle dans le cadre de philosophie ? (repère 27)", back: "Analyse conceptuelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir explication de texte dans le cadre de philosophie ? (repère 28)", back: "Explication de texte : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir enjeu philosophique dans le cadre de philosophie ? (repère 29)", back: "Enjeu philosophique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir conclusion dans le cadre de philosophie ? (repère 30)", back: "Conclusion : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." }
    ],
    quiz: [
      { level: "Facile", question: "Face à une situation mobilisant « définition des termes », quelle démarche est la plus rigoureuse ? — cas 1", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir définition des termes, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « problématisation », quelle démarche est la plus rigoureuse ? — cas 2", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir problématisation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « thèse et objection », quelle démarche est la plus rigoureuse ? — cas 3", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir thèse et objection, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « argumentation », quelle démarche est la plus rigoureuse ? — cas 4", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir argumentation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « exemple pertinent », quelle démarche est la plus rigoureuse ? — cas 5", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir exemple pertinent, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « transition », quelle démarche est la plus rigoureuse ? — cas 6", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir transition, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « analyse conceptuelle », quelle démarche est la plus rigoureuse ? — cas 7", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir analyse conceptuelle, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « explication de texte », quelle démarche est la plus rigoureuse ? — cas 8", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir explication de texte, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « enjeu philosophique », quelle démarche est la plus rigoureuse ? — cas 9", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir enjeu philosophique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « conclusion », quelle démarche est la plus rigoureuse ? — cas 10", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir conclusion, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « définition des termes », quelle démarche est la plus rigoureuse ? — cas 11", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir définition des termes, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « problématisation », quelle démarche est la plus rigoureuse ? — cas 12", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir problématisation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « thèse et objection », quelle démarche est la plus rigoureuse ? — cas 13", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir thèse et objection, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « argumentation », quelle démarche est la plus rigoureuse ? — cas 14", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir argumentation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « exemple pertinent », quelle démarche est la plus rigoureuse ? — cas 15", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir exemple pertinent, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « transition », quelle démarche est la plus rigoureuse ? — cas 16", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir transition, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « analyse conceptuelle », quelle démarche est la plus rigoureuse ? — cas 17", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir analyse conceptuelle, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « explication de texte », quelle démarche est la plus rigoureuse ? — cas 18", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir explication de texte, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « enjeu philosophique », quelle démarche est la plus rigoureuse ? — cas 19", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir enjeu philosophique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « conclusion », quelle démarche est la plus rigoureuse ? — cas 20", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir conclusion, vérifier les conditions de mobilisation et justifier la conclusion." }
    ],
    exercises: [
      { title: "Application guidée : définition des termes — situation 1", level: "Facile", statement: "Présente une situation de philosophie dans laquelle la notion de définition des termes est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit définition des termes dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : problématisation — situation 2", level: "Intermédiaire", statement: "Présente une situation de philosophie dans laquelle la notion de problématisation est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit problématisation dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : thèse et objection — situation 3", level: "Difficile", statement: "Présente une situation de philosophie dans laquelle la notion de thèse et objection est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit thèse et objection dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : argumentation — situation 4", level: "Facile", statement: "Présente une situation de philosophie dans laquelle la notion de argumentation est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit argumentation dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : exemple pertinent — situation 5", level: "Intermédiaire", statement: "Présente une situation de philosophie dans laquelle la notion de exemple pertinent est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit exemple pertinent dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : transition — situation 6", level: "Difficile", statement: "Présente une situation de philosophie dans laquelle la notion de transition est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit transition dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : analyse conceptuelle — situation 7", level: "Facile", statement: "Présente une situation de philosophie dans laquelle la notion de analyse conceptuelle est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit analyse conceptuelle dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : explication de texte — situation 8", level: "Intermédiaire", statement: "Présente une situation de philosophie dans laquelle la notion de explication de texte est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit explication de texte dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : enjeu philosophique — situation 9", level: "Difficile", statement: "Présente une situation de philosophie dans laquelle la notion de enjeu philosophique est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit enjeu philosophique dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : conclusion — situation 10", level: "Facile", statement: "Présente une situation de philosophie dans laquelle la notion de conclusion est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit conclusion dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] }
    ],
    sources: [{ title: 'Programme de philosophie de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel / Éduscol', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921238A.htm', consultedAt: '2026-11-04', supports: ['Programme officiel et attendus de l’enseignement de philosophie'] }],
    sourceNote: 'Ressource de travail structurée autour des compétences du programme. Les exemples sont génériques et doivent être adaptés aux cours et documents de classe. Statut draft : relecture disciplinaire nécessaire.',
    validationStatus: 'draft'
  }
};
