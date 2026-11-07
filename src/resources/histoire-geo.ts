import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'hg-h1': {
    title: 'Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)',
    objectives: ['Expliquer les effets de la crise de 1929 et les réponses politiques.', 'Caractériser les régimes totalitaires sans effacer leurs différences.', 'Présenter les grandes phases de la Seconde Guerre mondiale et la situation de la France.', 'Analyser les violences de masse et le génocide des Juifs d’Europe.'],
    course: [
      { heading: '1. La crise de 1929 et ses conséquences', body: ['Le krach de Wall Street en octobre 1929 déclenche une crise financière qui se transforme en dépression économique. Les faillites, le chômage et la contraction des échanges diffusent la crise à l’échelle mondiale.', 'Les réponses politiques varient. Aux États-Unis, Franklin D. Roosevelt lance le New Deal à partir de 1933 : l’État intervient davantage pour soutenir l’activité, réguler la finance et aider les populations.'] },
      { heading: '2. Des régimes totalitaires en construction', body: ['En URSS, Staline renforce la dictature du parti communiste, la planification et la collectivisation forcée. La répression, les purges et la propagande participent au contrôle de la société.', 'En Italie, Mussolini établit un régime fasciste. En Allemagne, Hitler, nommé chancelier en janvier 1933, détruit la démocratie, instaure un régime nazi raciste et antisémite. Les lois de Nuremberg de 1935 excluent les Juifs de la citoyenneté allemande.', 'Les régimes totalitaires utilisent parti unique, propagande, culte du chef et répression, mais leurs idéologies et leurs politiques ne sont pas identiques.'] },
      { heading: '3. De la guerre européenne à la guerre mondiale', body: ['L’Allemagne envahit la Pologne le 1er septembre 1939. Après la « drôle de guerre », l’offensive allemande à l’Ouest en mai 1940 provoque la défaite française. L’armistice est signé le 22 juin 1940.', 'La guerre s’étend : l’Allemagne attaque l’URSS le 22 juin 1941 ; le Japon attaque Pearl Harbor le 7 décembre 1941, entraînant l’entrée en guerre des États-Unis.'] },
      { heading: '4. La France de 1940 à 1944', body: ['Le régime de Vichy dirigé par Pétain met fin à la République et engage une politique de collaboration avec l’Allemagne nazie. De Gaulle appelle à poursuivre le combat depuis Londres le 18 juin 1940.', 'La Résistance intérieure rassemble mouvements et réseaux. Jean Moulin contribue à leur unification au sein du Conseil national de la Résistance en 1943. La France libre agit depuis l’extérieur aux côtés des Alliés.'] },
      { heading: '5. Une guerre d’anéantissement et des génocides', body: ['La guerre à l’Est est marquée par une violence extrême et une dimension idéologique et raciale. Les Einsatzgruppen commettent des massacres de masse. Les Juifs d’Europe sont victimes d’un génocide, la Shoah, organisé par l’Allemagne nazie et ses collaborateurs.', 'Les débarquements alliés de 1944, dont celui de Normandie le 6 juin, contribuent à la libération de l’Europe occidentale. L’Allemagne capitule en mai 1945 ; le Japon capitule en septembre 1945.'] },
    ],
    keyPoints: ['La crise de 1929 se diffuse par les interdépendances économiques.', 'Les régimes totalitaires partagent des pratiques d’encadrement mais se distinguent par leurs idéologies.', 'La guerre commence en Europe en septembre 1939 et devient mondiale en 1941.', 'Vichy collabore avec l’Allemagne nazie ; résistances intérieure et extérieure poursuivent le combat.', 'La Shoah est un génocide inscrit dans la guerre d’anéantissement nazie.'],
    method: ['Situer chaque événement dans une chronologie précise.', 'Distinguer les faits, les acteurs, les causes et les conséquences.', 'Comparer les régimes en indiquant ressemblances et différences.', 'Définir précisément les notions historiques.', 'Appuyer chaque affirmation sur un exemple daté et contextualisé.'],
    flashcards: [
      { front: 'Quel événement ouvre la période étudiée en 1929 ?', back: 'Le krach boursier de Wall Street, qui déclenche une crise économique mondiale.' },
      { front: 'Que désigne la Grande Dépression ?', back: 'Une crise économique durable marquée par la contraction de la production, le chômage et la baisse des échanges.' },
      { front: 'Pourquoi la crise de 1929 devient-elle mondiale ?', back: 'Les liens financiers et commerciaux diffusent la crise depuis les États-Unis vers de nombreux pays.' },
      { front: 'Qu’est-ce que le New Deal ?', back: 'Un ensemble de politiques lancées par Franklin D. Roosevelt à partir de 1933 pour lutter contre la crise.' },
      { front: 'Qui dirige l’URSS dans les années 1930 ?', back: 'Joseph Staline.' },
      { front: 'Que signifie collectivisation ?', back: 'Mise en commun forcée des terres et des moyens de production agricoles sous contrôle de l’État soviétique.' },
      { front: 'Qu’est-ce que la dékoulakisation ?', back: 'La répression visant les paysans qualifiés de koulaks, associée à la collectivisation forcée.' },
      { front: 'Quel est le rôle du parti unique dans un régime totalitaire ?', back: 'Il monopolise le pouvoir politique et encadre la société.' },
      { front: 'Qu’est-ce que la propagande ?', back: 'Des messages organisés pour influencer les opinions et obtenir l’adhésion.' },
      { front: 'Que sont les lois de Nuremberg (1935) ?', back: 'Des lois antisémites qui excluent les Juifs de la citoyenneté allemande et interdisent certains mariages.' },
      { front: 'Qui devient chancelier allemand en janvier 1933 ?', back: 'Adolf Hitler.' },
      { front: 'Que signifie Gleichschaltung ?', back: 'La mise au pas des institutions et de la société allemandes par le régime nazi.' },
      { front: 'Qu’est-ce que le fascisme italien ?', back: 'Un mouvement puis régime nationaliste, autoritaire et dictatorial dirigé par Benito Mussolini.' },
      { front: 'Quel événement marque le début de la Seconde Guerre mondiale en Europe ?', back: 'L’invasion de la Pologne par l’Allemagne le 1er septembre 1939.' },
      { front: 'Que prévoit le pacte germano-soviétique d’août 1939 ?', back: 'Un pacte de non-agression assorti de protocoles secrets de partage de zones d’influence en Europe orientale.' },
      { front: 'Que désigne la « drôle de guerre » ?', back: 'La période de septembre 1939 à mai 1940 durant laquelle le front occidental connaît peu d’opérations terrestres majeures.' },
      { front: 'Quand la France est-elle envahie par l’Allemagne ?', back: 'En mai 1940.' },
      { front: 'Quel armistice est signé par la France en juin 1940 ?', back: 'L’armistice du 22 juin 1940.' },
      { front: 'Qui lance l’appel du 18 juin 1940 ?', back: 'Le général de Gaulle, depuis Londres.' },
      { front: 'Quel régime s’installe à Vichy en juillet 1940 ?', back: 'Un régime autoritaire dirigé par le maréchal Pétain, qui met fin à la République.' },
      { front: 'Que signifie collaboration d’État ?', back: 'La politique de coopération du régime de Vichy avec l’Allemagne nazie.' },
      { front: 'Qu’est-ce que la Résistance intérieure ?', back: 'Les mouvements et réseaux qui combattent l’occupation et le régime de Vichy depuis la France.' },
      { front: 'Quel rôle joue Jean Moulin ?', back: 'Il contribue à unifier les mouvements de Résistance au sein du Conseil national de la Résistance.' },
      { front: 'Quand a lieu l’opération Barbarossa ?', back: 'Le 22 juin 1941, lorsque l’Allemagne nazie attaque l’URSS.' },
      { front: 'Quel événement fait entrer les États-Unis dans la guerre ?', back: 'L’attaque japonaise contre Pearl Harbor le 7 décembre 1941.' },
      { front: 'Que désigne la Shoah ?', back: 'Le génocide des Juifs d’Europe perpétré par l’Allemagne nazie et ses collaborateurs.' },
      { front: 'Que sont les Einsatzgruppen ?', back: 'Des unités mobiles nazies responsables de massacres de masse, notamment par fusillades, à l’Est.' },
      { front: 'Quand a lieu le débarquement de Normandie ?', back: 'Le 6 juin 1944.' },
      { front: 'Quand l’Allemagne nazie capitule-t-elle ?', back: 'Le 8 mai 1945 en Europe.' },
      { front: 'Quand le Japon capitule-t-il ?', back: 'Le 2 septembre 1945, après les bombardements atomiques et l’entrée en guerre de l’URSS contre le Japon.' },
    ],
    quiz: [
      { level: 'Facile', question: 'Quel événement déclenche la crise économique étudiée ?', choices: ['Le krach de Wall Street en 1929', 'La révolution russe de 1917', 'Le traité de Versailles en 1919', 'L’invasion de la Pologne en 1939'], answer: 0, explanation: 'Le krach boursier d’octobre 1929 précipite une crise financière puis économique.' },
      { level: 'Intermédiaire', question: 'Le New Deal est associé à :', choices: ['Franklin D. Roosevelt', 'Herbert Hoover uniquement', 'Winston Churchill', 'Joseph Staline'], answer: 0, explanation: 'Roosevelt lance le New Deal à partir de 1933.' },
      { level: 'Difficile', question: 'La collectivisation soviétique vise notamment à :', choices: ['Placer l’agriculture sous contrôle étatique', 'Rétablir la propriété paysanne libre', 'Instaurer le multipartisme', 'Privatiser les terres'], answer: 0, explanation: 'La collectivisation regroupe les exploitations sous contrôle du pouvoir soviétique.' },
      { level: 'Facile', question: 'Quel élément caractérise un régime totalitaire ?', choices: ['Un parti unique encadrant la société', 'Une alternance démocratique régulière', 'Une presse totalement indépendante', 'Une séparation stricte des pouvoirs'], answer: 0, explanation: 'Le parti unique et l’encadrement de la société sont des traits majeurs du totalitarisme.' },
      { level: 'Intermédiaire', question: 'Hitler devient chancelier en :', choices: ['1933', '1929', '1935', '1939'], answer: 0, explanation: 'Hitler est nommé chancelier le 30 janvier 1933.' },
      { level: 'Difficile', question: 'Les lois de Nuremberg datent de :', choices: ['1935', '1933', '1938', '1942'], answer: 0, explanation: 'Les lois raciales de Nuremberg sont adoptées en septembre 1935.' },
      { level: 'Facile', question: 'Le régime fasciste italien est dirigé par :', choices: ['Benito Mussolini', 'Francisco Franco', 'Adolf Hitler', 'Philippe Pétain'], answer: 0, explanation: 'Mussolini dirige le régime fasciste italien. Il instaure une dictature en Italie à partir des années 1920.' },
      { level: 'Intermédiaire', question: 'La Seconde Guerre mondiale commence en Europe le :', choices: ['1er septembre 1939', '3 septembre 1939', '22 juin 1941', '7 décembre 1941'], answer: 0, explanation: 'L’Allemagne envahit la Pologne le 1er septembre 1939.' },
      { level: 'Difficile', question: 'Le pacte germano-soviétique est signé en :', choices: ['Août 1939', 'Juin 1941', 'Septembre 1938', 'Mai 1945'], answer: 0, explanation: 'Le pacte de non-agression est signé le 23 août 1939.' },
      { level: 'Facile', question: 'La « drôle de guerre » se situe principalement :', choices: ['Entre septembre 1939 et mai 1940', 'Entre 1941 et 1942', 'Entre juin et août 1944', 'Entre 1944 et 1945'], answer: 0, explanation: 'Elle correspond à l’attente sur le front occidental avant l’offensive allemande de mai 1940.' },
      { level: 'Intermédiaire', question: 'L’appel du 18 juin est lancé par :', choices: ['Charles de Gaulle', 'Philippe Pétain', 'Jean Moulin', 'Georges Clemenceau'], answer: 0, explanation: 'De Gaulle appelle à poursuivre le combat depuis Londres.' },
      { level: 'Difficile', question: 'Le régime de Vichy est dirigé par :', choices: ['Philippe Pétain', 'Charles de Gaulle', 'Léon Blum', 'Pierre Laval seul dès juillet 1940'], answer: 0, explanation: 'Pétain obtient les pleins pouvoirs en juillet 1940 et dirige le nouvel État français.' },
      { level: 'Facile', question: 'La Résistance intérieure agit :', choices: ['Sur le territoire français occupé ou contrôlé par Vichy', 'Uniquement depuis Londres', 'Uniquement en Afrique du Nord', 'Uniquement après mai 1945'], answer: 0, explanation: 'Elle regroupe mouvements et réseaux opérant en France.' },
      { level: 'Intermédiaire', question: 'Jean Moulin contribue à créer :', choices: ['Le Conseil national de la Résistance', 'La Société des Nations', 'L’ONU', 'La IVe République en 1946'], answer: 0, explanation: 'Le CNR est unifié en 1943 sous son impulsion.' },
      { level: 'Difficile', question: 'L’opération Barbarossa est :', choices: ['L’invasion de l’URSS par l’Allemagne en 1941', 'Le débarquement en Normandie', 'L’attaque de Pearl Harbor', 'La libération de Paris'], answer: 0, explanation: 'Barbarossa débute le 22 juin 1941. Cette invasion de l’URSS ouvre le front de l’Est entre l’Allemagne nazie et l’Union soviétique.' },
      { level: 'Facile', question: 'La Shoah désigne :', choices: ['Le génocide des Juifs d’Europe', 'La déportation des seuls prisonniers de guerre', 'La reconstruction de l’Allemagne', 'La capitulation japonaise'], answer: 0, explanation: 'La Shoah est le génocide des Juifs d’Europe par les nazis et leurs collaborateurs.' },
      { level: 'Intermédiaire', question: 'Les Einsatzgruppen sont :', choices: ['Des unités mobiles de tuerie nazies', 'Des groupes de résistants français', 'Des unités de la marine britannique', 'Des tribunaux internationaux'], answer: 0, explanation: 'Ces unités commettent des massacres de masse à l’Est.' },
      { level: 'Difficile', question: 'Le débarquement de Normandie a lieu le :', choices: ['6 juin 1944', '8 mai 1945', '1er septembre 1939', '11 novembre 1918'], answer: 0, explanation: 'L’opération Overlord débute le 6 juin 1944. Il ouvre un front occidental majeur contre l’occupation nazie en Europe.' },
      { level: 'Intermédiaire', question: 'Quel organisme rassemble les mouvements de Résistance en 1943 ?', choices: ['Le Conseil national de la Résistance', 'La Société des Nations', 'Le Komintern', 'Le gouvernement de Vichy'], answer: 0, explanation: 'Le CNR contribue à unifier les mouvements de Résistance intérieure.' },
      { level: 'Difficile', question: 'Quel énoncé distingue correctement armistice et capitulation ?', choices: ['Un armistice suspend les combats selon des conditions négociées', 'Un armistice signifie toujours l’annexion du pays', 'Une capitulation ne met jamais fin aux combats', 'Les deux termes désignent exactement la même procédure'], answer: 0, explanation: 'L’armistice organise une suspension des hostilités ; la capitulation acte la reddition.' },
      { level: 'Facile', question: 'Le régime de Vichy met fin à :', choices: ['La IIIe République', 'La Ve République', 'La monarchie de Juillet', 'La IVe République'], answer: 0, explanation: 'En juillet 1940, les pleins pouvoirs confiés à Pétain entraînent la fin de la IIIe République.' },
      { level: 'Difficile', question: 'Pourquoi la guerre à l’Est prend-elle une dimension idéologique ?', choices: ['Elle est menée au nom de projets raciaux et anticommunistes nazis', 'Elle oppose uniquement deux monarchies', 'Elle vise seulement le contrôle des routes maritimes', 'Elle exclut toute violence contre les civils'], answer: 0, explanation: 'La guerre nazie contre l’URSS est conçue comme une guerre de conquête et d’anéantissement fondée sur une idéologie raciste et anticommuniste.' },
      { level: 'Facile', question: 'La capitulation allemande en Europe est célébrée le :', choices: ['8 mai 1945', '6 juin 1944', '2 septembre 1945', '11 novembre 1918'], answer: 0, explanation: 'La capitulation allemande entre en vigueur le 8 mai 1945.' },
    ],
    exercises: [
      { title: 'Repérer les étapes de la crise', level: 'Facile', statement: 'Présenter deux mécanismes qui expliquent la diffusion mondiale de la crise de 1929.', correction: 'La crise partie des États-Unis se diffuse par les liens financiers (retraits de capitaux, faillites) et commerciaux (baisse des importations et exportations). Elle devient mondiale car les économies sont interdépendantes.', skills: ['Crise économique', 'Interdépendance'] },
      { title: 'Comparer deux réponses à la crise', level: 'Intermédiaire', statement: 'Comparer brièvement la réponse du New Deal et la politique économique soviétique des années 1930.', correction: 'Le New Deal maintient une économie de marché tout en renforçant l’intervention de l’État pour soutenir l’activité et la population. En URSS, l’économie est planifiée par l’État et l’agriculture collectivisée de force. Les contextes et objectifs politiques diffèrent.', skills: ['Comparer', 'Économie'] },
      { title: 'Caractériser un régime totalitaire', level: 'Facile', statement: 'Donner trois caractéristiques communes aux régimes totalitaires des années 1930.', correction: 'On peut citer le parti unique, le culte du chef, la propagande, la répression, l’encadrement de la société et la volonté de transformer celle-ci. Les modalités diffèrent selon les régimes.', skills: ['Totalitarisme', 'Régimes politiques'] },
      { title: 'Distinguer les régimes', level: 'Intermédiaire', statement: 'Explique pourquoi l’Italie fasciste, l’Allemagne nazie et l’URSS stalinienne ne doivent pas être confondues malgré des traits totalitaires communs.', correction: 'Ils partagent des pratiques d’encadrement et de répression, mais leurs idéologies, leurs projets, leurs bases sociales et leurs politiques raciales ou économiques diffèrent. Le nazisme place notamment le racisme biologique et l’antisémitisme au cœur de son projet.', skills: ['Comparaison historique'] },
      { title: 'Construire une chronologie', level: 'Facile', statement: 'Classer dans l’ordre : invasion de la Pologne, appel du 18 juin, Barbarossa, Pearl Harbor.', correction: '1er septembre 1939 : invasion de la Pologne ; 18 juin 1940 : appel de De Gaulle ; 22 juin 1941 : Barbarossa ; 7 décembre 1941 : Pearl Harbor.', skills: ['Chronologie'] },
      { title: 'Expliquer la défaite française', level: 'Intermédiaire', statement: 'Présenter deux facteurs qui expliquent la défaite française de mai-juin 1940.', correction: 'La stratégie allemande fondée sur la concentration rapide des forces et les percées mécanisées désorganise les défenses alliées. Les choix stratégiques et les difficultés de coordination françaises contribuent également à la défaite. Éviter une explication monocausale.', skills: ['Guerre', 'Analyse causale'] },
      { title: 'Distinguer armistice et capitulation', level: 'Facile', statement: 'Expliquer la différence entre un armistice et une capitulation en prenant l’exemple français de 1940.', correction: 'Un armistice suspend les combats selon des conditions négociées ; il ne signifie pas nécessairement la disparition de l’État. En juin 1940, la France signe un armistice avec l’Allemagne.', skills: ['Vocabulaire historique'] },
      { title: 'Présenter la Résistance', level: 'Intermédiaire', statement: 'Montre comment la Résistance extérieure et la Résistance intérieure contribuent à la libération.', correction: 'La France libre, organisée autour de De Gaulle, poursuit la guerre depuis l’extérieur. En France, mouvements et réseaux renseignent les Alliés, sabotent, diffusent des informations et préparent l’insurrection. Leur unification politique est renforcée par le CNR en 1943.', skills: ['Résistance', 'Acteurs'] },
      { title: 'Caractériser le génocide', level: 'Difficile', statement: 'Explique pourquoi la Shoah constitue un génocide et cite deux modalités de sa mise en œuvre.', correction: 'La Shoah vise l’extermination des Juifs d’Europe en raison de leur identité assignée par les nazis. Elle passe notamment par les fusillades de masse à l’Est, les déportations et les centres de mise à mort.', skills: ['Génocide', 'Violences de masse'] },
      { title: 'Rédiger un paragraphe organisé', level: 'Difficile', statement: 'Rédige un paragraphe répondant à la question : « En quoi la Seconde Guerre mondiale est-elle une guerre d’anéantissement ? »', correction: 'La Seconde Guerre mondiale est une guerre d’anéantissement car elle mobilise des moyens militaires et économiques considérables et vise aussi les populations civiles. À l’Est, la guerre idéologique menée par les nazis s’accompagne de massacres de masse et du génocide des Juifs et des Roms. Les bombardements stratégiques, les sièges et les déplacements forcés touchent également les civils. Il faut toutefois illustrer chaque idée par des exemples précis.', skills: ['Rédaction', 'Guerre totale'] },
    ],
    revisionSheets: [{ title: 'Repères — 1929-1945', summary: ['Crise économique mondiale à partir de 1929.', 'Consolidation des régimes totalitaires dans les années 1930.', 'Guerre européenne à partir de 1939, mondiale à partir de 1941.', 'Défaite française, régime de Vichy et résistances.', 'Guerre d’anéantissement et génocide des Juifs d’Europe.'], mustKnow: ['1929 : krach de Wall Street.', '1933 : Hitler devient chancelier ; début du New Deal.', '1935 : lois de Nuremberg.', '1er septembre 1939 : invasion de la Pologne.', '18 juin 1940 : appel de De Gaulle.', '22 juin 1941 : opération Barbarossa.', '7 décembre 1941 : Pearl Harbor.', '6 juin 1944 : débarquement de Normandie.', '8 mai 1945 : capitulation allemande en Europe.'], methods: ['Construire une frise chronologique.', 'Distinguer régime de Vichy, France libre et Résistance intérieure.', 'Employer les notions de totalitarisme, collaboration, génocide et guerre d’anéantissement avec précision.'] }],
    sources: [{ title: 'Programme d’histoire-géographie de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921243A.htm', consultedAt: '2026-11-04', supports: ['Repères de programme et thèmes historiques'] }],
    sourceNote: 'Ressource de travail rédigée pour le thème 1 d’histoire de Terminale. Les repères et interprétations doivent être vérifiés avec le cours de l’enseignant et les documents étudiés. Statut brouillon : ne constitue pas une validation institutionnelle.',
    validationStatus: 'draft'
  },
  'hg-h2': {
  title: "La multiplication des acteurs internationaux dans un monde bipolaire (1945-1970)",
  objectives: [
    "Maîtriser les notions essentielles de « La multiplication des acteurs internationaux dans un monde bipolaire (1945-1970) ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Un monde à reconstruire en 1945",
      body: ["La Seconde Guerre mondiale bouleverse les rapports de puissance. Les États-Unis et l’URSS sortent renforcés, tandis que les puissances européennes sont affaiblies. L’ONU est créée pour organiser la sécurité collective et la coopération."]
    },
    {
      heading: "2. La formation des blocs",
      body: ["Les désaccords idéologiques et stratégiques conduisent à la constitution de deux ensembles concurrents. Les alliances, l’aide économique et les dispositifs militaires structurent progressivement la bipolarisation."]
    },
    {
      heading: "3. Crises et coexistence",
      body: ["Berlin, la guerre de Corée et Cuba montrent que la rivalité peut provoquer des crises majeures. La dissuasion nucléaire rend cependant une confrontation directe particulièrement dangereuse."]
    },
    {
      heading: "4. Décolonisation et nouveaux acteurs",
      body: ["L’Asie et l’Afrique connaissent de nombreuses indépendances. Les nouveaux États cherchent à défendre leur souveraineté et certains participent au mouvement des non-alignés, sans former un ensemble homogène."]
    },
    {
      heading: "5. Méthode et repères",
      body: ["Pour une composition, articuler chronologie, acteurs, échelles et notions. Ne pas réduire la période à un duel américano-soviétique : les décolonisations et les initiatives des nouveaux États transforment aussi l’ordre international."]
    }
  
      ,{ heading: 'Décolonisation, non-alignement et construction d’un ordre international', body: ['Après 1945, les deux superpuissances organisent des alliances militaires, économiques et idéologiques concurrentes. La bipolarisation se traduit par des crises, une course aux armements et des stratégies d’influence, mais elle ne signifie pas que tous les États se rangent durablement dans un bloc. Les organisations internationales deviennent aussi des lieux de confrontation diplomatique.', 'La décolonisation transforme profondément les relations internationales. De nouveaux États accèdent à l’indépendance et cherchent à défendre leur souveraineté, leur développement et leur marge de manœuvre. La conférence de Bandung en 1955 puis le mouvement des non-alignés illustrent la volonté de certains dirigeants de ne pas s’enfermer dans l’un des deux blocs, même si leurs positions restent diverses.', 'L’ONU affirme des principes de souveraineté et de sécurité collective, mais son action est limitée par le droit de veto des membres permanents du Conseil de sécurité. Pour étudier une crise, il faut identifier les acteurs locaux, les intérêts des puissances, les alliances et le rôle des institutions internationales.'] }],
  keyPoints: [
    "La Seconde Guerre mondiale bouleverse les rapports de puissance. Les États-Unis et l’URSS sortent renforcés, tandis que les puissances européennes sont affaiblies. L’ONU est créée pour organiser la sécurité collective et la coopération.",
    "Les désaccords idéologiques et stratégiques conduisent à la constitution de deux ensembles concurrents. Les alliances, l’aide économique et les dispositifs militaires structurent progressivement la bipolarisation.",
    "Berlin, la guerre de Corée et Cuba montrent que la rivalité peut provoquer des crises majeures. La dissuasion nucléaire rend cependant une confrontation directe particulièrement dangereuse.",
    "L’Asie et l’Afrique connaissent de nombreuses indépendances. Les nouveaux États cherchent à défendre leur souveraineté et certains participent au mouvement des non-alignés, sans former un ensemble homogène.",
    "Pour une composition, articuler chronologie, acteurs, échelles et notions. Ne pas réduire la période à un duel américano-soviétique : les décolonisations et les initiatives des nouveaux États transforment aussi l’ordre international.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Guerre froide » ?",
      back: "Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de guerre froide ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Bipolarisation » ?",
      back: "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de bipolarisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Organisation des relations internationales autour de deux pôles de puissance concurrents.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Endiguement » ?",
      back: "Politique américaine visant à contenir l’expansion du communisme.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de endiguement ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politique américaine visant à contenir l’expansion du communisme.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Dissuasion nucléaire » ?",
      back: "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de dissuasion nucléaire ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Décolonisation » ?",
      back: "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de décolonisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Processus par lequel des territoires colonisés accèdent à l’indépendance.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Non-alignement » ?",
      back: "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de non-alignement ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Tiers-monde » ?",
      back: "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de tiers-monde ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « OTAN » ?",
      back: "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de otan ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Pacte de Varsovie » ?",
      back: "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de pacte de varsovie ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Crise de Berlin » ?",
      back: "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de crise de berlin ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Crise de Cuba » ?",
      back: "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de crise de cuba ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Coexistence pacifique » ?",
      back: "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de coexistence pacifique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « ONU » ?",
      back: "Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de onu ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Décolonisation négociée » ?",
      back: "Accession à l’indépendance obtenue principalement par des négociations politiques, sans exclure les tensions.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de décolonisation négociée ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Accession à l’indépendance obtenue principalement par des négociations politiques, sans exclure les tensions.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Monde multipolaire » ?",
      back: "Système international dans lequel plusieurs centres de puissance influencent les relations internationales.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de monde multipolaire ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Système international dans lequel plusieurs centres de puissance influencent les relations internationales.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Guerre froide » ?",
      choices: [
        "Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque."
      ],
      answer: 0,
      explanation: "Guerre froide : Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Bipolarisation » ?",
      choices: [
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses."
      ],
      answer: 2,
      explanation: "Bipolarisation : Organisation des relations internationales autour de deux pôles de puissance concurrents.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Endiguement » ?",
      choices: [
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961."
      ],
      answer: 2,
      explanation: "Endiguement : Politique américaine visant à contenir l’expansion du communisme.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Dissuasion nucléaire » ?",
      choices: [
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération.",
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
        "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition."
      ],
      answer: 0,
      explanation: "Dissuasion nucléaire : Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Décolonisation » ?",
      choices: [
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs."
      ],
      answer: 2,
      explanation: "Décolonisation : Processus par lequel des territoires colonisés accèdent à l’indépendance.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Non-alignement » ?",
      choices: [
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective."
      ],
      answer: 2,
      explanation: "Non-alignement : Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Tiers-monde » ?",
      choices: [
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
        "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba."
      ],
      answer: 2,
      explanation: "Tiers-monde : Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « OTAN » ?",
      choices: [
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective."
      ],
      answer: 3,
      explanation: "OTAN : Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Pacte de Varsovie » ?",
      choices: [
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs."
      ],
      answer: 1,
      explanation: "Pacte de Varsovie : Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Crise de Berlin » ?",
      choices: [
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba."
      ],
      answer: 0,
      explanation: "Crise de Berlin : Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Crise de Cuba » ?",
      choices: [
        "Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba."
      ],
      answer: 3,
      explanation: "Crise de Cuba : Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Coexistence pacifique » ?",
      choices: [
        "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs."
      ],
      answer: 0,
      explanation: "Coexistence pacifique : Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « ONU » ?",
      choices: [
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération."
      ],
      answer: 3,
      explanation: "ONU : Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Décolonisation négociée » ?",
      choices: [
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
        "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition.",
        "Accession à l’indépendance obtenue principalement par des négociations politiques, sans exclure les tensions."
      ],
      answer: 3,
      explanation: "Décolonisation négociée : Accession à l’indépendance obtenue principalement par des négociations politiques, sans exclure les tensions.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Monde multipolaire » ?",
      choices: [
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Système international dans lequel plusieurs centres de puissance influencent les relations internationales.",
        "Processus par lequel des territoires colonisés accèdent à l’indépendance."
      ],
      answer: 2,
      explanation: "Monde multipolaire : Système international dans lequel plusieurs centres de puissance influencent les relations internationales.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances. » ?",
      choices: [
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
        "Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses.",
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens."
      ],
      answer: 1,
      explanation: "Guerre froide : Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Organisation des relations internationales autour de deux pôles de puissance concurrents. » ?",
      choices: [
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961.",
        "Orientation visant à limiter le risque de guerre directe entre les deux blocs malgré la poursuite de la compétition."
      ],
      answer: 1,
      explanation: "Bipolarisation : Organisation des relations internationales autour de deux pôles de puissance concurrents.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Politique américaine visant à contenir l’expansion du communisme. » ?",
      choices: [
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Organisation des relations internationales autour de deux pôles de puissance concurrents.",
        "Politique américaine visant à contenir l’expansion du communisme.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque."
      ],
      answer: 2,
      explanation: "Endiguement : Politique américaine visant à contenir l’expansion du communisme.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque. » ?",
      choices: [
        "Position d’États qui refusent l’intégration formelle dans l’un des deux blocs.",
        "Alliance militaire fondée en 1949 autour d’une clause de défense collective.",
        "Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
        "Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses."
      ],
      answer: 2,
      explanation: "Dissuasion nucléaire : Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Processus par lequel des territoires colonisés accèdent à l’indépendance. » ?",
      choices: [
        "Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens.",
        "Processus par lequel des territoires colonisés accèdent à l’indépendance.",
        "Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba.",
        "Ensemble de tensions autour du statut de Berlin, notamment le blocus de 1948-1949 et la construction du mur en 1961."
      ],
      answer: 1,
      explanation: "Décolonisation : Processus par lequel des territoires colonisés accèdent à l’indépendance.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Guerre froide",
      level: "Facile",
      statement: "Définissez « Guerre froide » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Affrontement durable entre les États-Unis et l’URSS, combinant rivalité idéologique, stratégique, économique et diplomatique sans guerre directe généralisée entre les deux superpuissances. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Endiguement",
      level: "Facile",
      statement: "Expliquez pourquoi « Endiguement » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Politique américaine visant à contenir l’expansion du communisme. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Décolonisation",
      level: "Facile",
      statement: "Distinguez « Décolonisation » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Processus par lequel des territoires colonisés accèdent à l’indépendance. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Tiers-monde",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « Tiers-monde ».",
      correction: "Une réponse complète définit précisément la notion : Expression historiquement utilisée pour désigner des États récemment décolonisés ou en développement, aux situations diverses. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Pacte de Varsovie",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Pacte de Varsovie ».",
      correction: "Une réponse complète définit précisément la notion : Alliance militaire créée en 1955 autour de l’URSS et des États socialistes européens. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Crise de Cuba",
      level: "Intermédiaire",
      statement: "Définissez « Crise de Cuba » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Confrontation d’octobre 1962 entre les États-Unis et l’URSS à propos de missiles soviétiques installés à Cuba. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : ONU",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « ONU » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Organisation internationale créée en 1945 pour favoriser la paix, la sécurité collective et la coopération. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Monde multipolaire",
      level: "Difficile",
      statement: "Distinguez « Monde multipolaire » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Système international dans lequel plusieurs centres de puissance influencent les relations internationales. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Bipolarisation",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Bipolarisation ».",
      correction: "Une réponse complète définit précisément la notion : Organisation des relations internationales autour de deux pôles de puissance concurrents. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Dissuasion nucléaire",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Dissuasion nucléaire ».",
      correction: "Une réponse complète définit précisément la notion : Stratégie fondée sur la menace de représailles nucléaires afin de prévenir une attaque. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "La multiplication des acteurs internationaux dans un monde bipolaire (1945-1970)",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-h3': {
  title: "Les remises en cause économiques, politiques et sociales des années 1970 à 1991",
  objectives: [
    "Maîtriser les notions essentielles de « Les remises en cause économiques, politiques et sociales des années 1970 à 1991 ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. La fin des Trente Glorieuses",
      body: ["Le ralentissement économique à partir des années 1970 met fin à la forte croissance de l’après-guerre. Les chocs pétroliers, l’inflation et les mutations productives fragilisent les modèles économiques."]
    },
    {
      heading: "2. Mutations sociales et politiques",
      body: ["Le chômage de masse, la transformation du travail et les recompositions industrielles modifient les sociétés. Les réponses politiques divergent selon les pays et les contextes."]
    },
    {
      heading: "3. Contestations et recompositions du monde",
      body: ["Les mouvements sociaux, les revendications démocratiques et les crises politiques remettent en cause certains régimes. Les trajectoires nationales restent cependant différentes."]
    },
    {
      heading: "4. La fin de la guerre froide",
      body: ["Les réformes de Gorbatchev, les mobilisations en Europe de l’Est et la chute du mur de Berlin accélèrent la fin de la division européenne. L’URSS disparaît en 1991."]
    },
    {
      heading: "5. Méthode et repères",
      body: ["Distinguer les transformations économiques de long terme, les événements politiques et leurs rythmes. Une chronologie précise aide à éviter de présenter 1989 comme une rupture isolée sans causes antérieures."]
    }
  
      ,{ heading: 'Crises économiques, transformations sociales et fin de la bipolarité', body: ['Les années 1970 marquent la fin d’une période de forte croissance dans les économies industrialisées. Les chocs pétroliers, le ralentissement de la productivité et les transformations de la concurrence internationale contribuent à une situation de stagflation, associant inflation élevée et croissance ralentie. Les réponses économiques varient selon les pays et évoluent au cours des décennies suivantes.', 'Les mutations productives s’accompagnent de transformations sociales : tertiarisation, montée du chômage de masse dans certains territoires, évolution des qualifications, féminisation de l’emploi et recomposition des protections sociales. Ces changements ne sont ni simultanés ni identiques partout. Il faut relier les évolutions économiques aux choix politiques et aux rapports sociaux.', 'Sur le plan international, les réformes engagées en URSS, les contestations dans les démocraties populaires et les difficultés du bloc soviétique contribuent à la fin de la guerre froide. La chute du mur de Berlin en 1989 puis la disparition de l’URSS en 1991 constituent des repères majeurs, mais les recompositions géopolitiques se poursuivent après ces dates.'] }],
  keyPoints: [
    "Le ralentissement économique à partir des années 1970 met fin à la forte croissance de l’après-guerre. Les chocs pétroliers, l’inflation et les mutations productives fragilisent les modèles économiques.",
    "Le chômage de masse, la transformation du travail et les recompositions industrielles modifient les sociétés. Les réponses politiques divergent selon les pays et les contextes.",
    "Les mouvements sociaux, les revendications démocratiques et les crises politiques remettent en cause certains régimes. Les trajectoires nationales restent cependant différentes.",
    "Les réformes de Gorbatchev, les mobilisations en Europe de l’Est et la chute du mur de Berlin accélèrent la fin de la division européenne. L’URSS disparaît en 1991.",
    "Distinguer les transformations économiques de long terme, les événements politiques et leurs rythmes. Une chronologie précise aide à éviter de présenter 1989 comme une rupture isolée sans causes antérieures.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Choc pétrolier » ?",
      back: "Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de choc pétrolier ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Stagflation » ?",
      back: "Situation combinant faible croissance, inflation élevée et chômage important.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de stagflation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Situation combinant faible croissance, inflation élevée et chômage important.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Crise économique » ?",
      back: "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de crise économique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Désindustrialisation » ?",
      back: "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de désindustrialisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Néolibéralisme » ?",
      back: "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de néolibéralisme ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Mondialisation » ?",
      back: "Intensification des échanges et des interdépendances à l’échelle mondiale.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de mondialisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Intensification des échanges et des interdépendances à l’échelle mondiale.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Tiers-mondisme » ?",
      back: "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de tiers-mondisme ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Dissidence » ?",
      back: "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de dissidence ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Perestroïka » ?",
      back: "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de perestroïka ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Glasnost » ?",
      back: "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de glasnost ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politique de transparence et d’assouplissement de l’expression publique en URSS.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Chute du mur de Berlin » ?",
      back: "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de chute du mur de berlin ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Dislocation de l’URSS » ?",
      back: "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de dislocation de l’urss ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Transition démocratique » ?",
      back: "Processus de passage d’un régime autoritaire à des institutions pluralistes et électives.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de transition démocratique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Processus de passage d’un régime autoritaire à des institutions pluralistes et électives.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Intégration européenne » ?",
      back: "Approfondissement des coopérations et institutions entre États européens.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de intégration européenne ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Approfondissement des coopérations et institutions entre États européens.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Révolution iranienne » ?",
      back: "Renversement de la monarchie iranienne en 1979 et instauration d’une République islamique.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de révolution iranienne ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Renversement de la monarchie iranienne en 1979 et instauration d’une République islamique.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Choc pétrolier » ?",
      choices: [
        "Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire."
      ],
      answer: 0,
      explanation: "Choc pétrolier : Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Stagflation » ?",
      choices: [
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Intensification des échanges et des interdépendances à l’échelle mondiale.",
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde."
      ],
      answer: 2,
      explanation: "Stagflation : Situation combinant faible croissance, inflation élevée et chômage important.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Crise économique » ?",
      choices: [
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance."
      ],
      answer: 3,
      explanation: "Crise économique : Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Désindustrialisation » ?",
      choices: [
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
        "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
        "Processus de passage d’un régime autoritaire à des institutions pluralistes et électives."
      ],
      answer: 0,
      explanation: "Désindustrialisation : Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Néolibéralisme » ?",
      choices: [
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Intensification des échanges et des interdépendances à l’échelle mondiale."
      ],
      answer: 2,
      explanation: "Néolibéralisme : Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Mondialisation » ?",
      choices: [
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
        "Intensification des échanges et des interdépendances à l’échelle mondiale."
      ],
      answer: 3,
      explanation: "Mondialisation : Intensification des échanges et des interdépendances à l’échelle mondiale.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Tiers-mondisme » ?",
      choices: [
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
        "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin."
      ],
      answer: 0,
      explanation: "Tiers-mondisme : Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Dissidence » ?",
      choices: [
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance."
      ],
      answer: 2,
      explanation: "Dissidence : Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Perestroïka » ?",
      choices: [
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Intensification des échanges et des interdépendances à l’échelle mondiale."
      ],
      answer: 1,
      explanation: "Perestroïka : Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Glasnost » ?",
      choices: [
        "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin."
      ],
      answer: 0,
      explanation: "Glasnost : Politique de transparence et d’assouplissement de l’expression publique en URSS.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Chute du mur de Berlin » ?",
      choices: [
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin."
      ],
      answer: 3,
      explanation: "Chute du mur de Berlin : Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Dislocation de l’URSS » ?",
      choices: [
        "Intensification des échanges et des interdépendances à l’échelle mondiale.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants."
      ],
      answer: 3,
      explanation: "Dislocation de l’URSS : Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Transition démocratique » ?",
      choices: [
        "Processus de passage d’un régime autoritaire à des institutions pluralistes et électives.",
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985."
      ],
      answer: 0,
      explanation: "Transition démocratique : Processus de passage d’un régime autoritaire à des institutions pluralistes et électives.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Intégration européenne » ?",
      choices: [
        "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
        "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
        "Approfondissement des coopérations et institutions entre États européens."
      ],
      answer: 3,
      explanation: "Intégration européenne : Approfondissement des coopérations et institutions entre États européens.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Révolution iranienne » ?",
      choices: [
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
        "Renversement de la monarchie iranienne en 1979 et instauration d’une République islamique.",
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance."
      ],
      answer: 2,
      explanation: "Révolution iranienne : Renversement de la monarchie iranienne en 1979 et instauration d’une République islamique.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Hausse brutale du prix du pétrole qui déstabilise les économies importatrices. » ?",
      choices: [
        "Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985."
      ],
      answer: 0,
      explanation: "Choc pétrolier : Hausse brutale du prix du pétrole qui déstabilise les économies importatrices.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Situation combinant faible croissance, inflation élevée et chômage important. » ?",
      choices: [
        "Disparition de l’Union soviétique en décembre 1991 et émergence de quinze États indépendants.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin.",
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Politique de transparence et d’assouplissement de l’expression publique en URSS."
      ],
      answer: 2,
      explanation: "Stagflation : Situation combinant faible croissance, inflation élevée et chômage important.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance. » ?",
      choices: [
        "Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Situation combinant faible croissance, inflation élevée et chômage important.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire."
      ],
      answer: 0,
      explanation: "Crise économique : Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire. » ?",
      choices: [
        "Opposition publique ou clandestine à un régime politique, notamment autoritaire.",
        "Intensification des échanges et des interdépendances à l’échelle mondiale.",
        "Courant politique et intellectuel soutenant les revendications des pays du tiers-monde.",
        "Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire."
      ],
      answer: 3,
      explanation: "Désindustrialisation : Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence. » ?",
      choices: [
        "Politique de transparence et d’assouplissement de l’expression publique en URSS.",
        "Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985.",
        "Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
        "Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin."
      ],
      answer: 2,
      explanation: "Néolibéralisme : Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Choc pétrolier",
      level: "Facile",
      statement: "Définissez « Choc pétrolier » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Hausse brutale du prix du pétrole qui déstabilise les économies importatrices. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Crise économique",
      level: "Facile",
      statement: "Expliquez pourquoi « Crise économique » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Période de perturbations durables de la production, de l’emploi, des échanges ou de la finance. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Néolibéralisme",
      level: "Facile",
      statement: "Distinguez « Néolibéralisme » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Courant de pensée et d’action publique privilégiant notamment les mécanismes de marché et la concurrence. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Tiers-mondisme",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « Tiers-mondisme ».",
      correction: "Une réponse complète définit précisément la notion : Courant politique et intellectuel soutenant les revendications des pays du tiers-monde. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Perestroïka",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Perestroïka ».",
      correction: "Une réponse complète définit précisément la notion : Politique de restructuration engagée en URSS par Mikhaïl Gorbatchev à partir de 1985. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Chute du mur de Berlin",
      level: "Intermédiaire",
      statement: "Définissez « Chute du mur de Berlin » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Événement du 9 novembre 1989 symbolisant l’effondrement de la division de Berlin. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Transition démocratique",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Transition démocratique » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Processus de passage d’un régime autoritaire à des institutions pluralistes et électives. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Révolution iranienne",
      level: "Difficile",
      statement: "Distinguez « Révolution iranienne » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Renversement de la monarchie iranienne en 1979 et instauration d’une République islamique. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Stagflation",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Stagflation ».",
      correction: "Une réponse complète définit précisément la notion : Situation combinant faible croissance, inflation élevée et chômage important. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Désindustrialisation",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Désindustrialisation ».",
      correction: "Une réponse complète définit précisément la notion : Recul de la part de l’industrie dans l’emploi et parfois dans la production d’un territoire. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "Les remises en cause économiques, politiques et sociales des années 1970 à 1991",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-h4': {
  title: "Le monde, l’Europe et la France depuis les années 1990",
  objectives: [
    "Maîtriser les notions essentielles de « Le monde, l’Europe et la France depuis les années 1990 ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Un nouvel ordre international incertain",
      body: ["La disparition de l’URSS ouvre une période de prépondérance américaine, mais les conflits, les attentats du 11 septembre 2001 et les interventions militaires montrent que la stabilité n’est pas acquise."]
    },
    {
      heading: "2. La mondialisation et ses tensions",
      body: ["Les échanges s’intensifient et les interdépendances progressent. Les crises financières, sanitaires et environnementales révèlent toutefois les vulnérabilités de cette intégration."]
    },
    {
      heading: "3. L’affirmation de nouvelles puissances",
      body: ["La montée de la Chine et d’autres puissances transforme les équilibres. Le système international devient plus complexe, sans que les États-Unis cessent d’y jouer un rôle majeur."]
    },
    {
      heading: "4. L’Europe et la France",
      body: ["L’Union européenne approfondit ses politiques et s’élargit. La France agit à la fois dans le cadre national, européen et multilatéral, avec des marges d’action et des contraintes."]
    },
    {
      heading: "5. Méthode et repères",
      body: ["Distinguer les échelles mondiale, européenne et nationale. Éviter les récits linéaires : les évolutions depuis 1991 sont marquées par des continuités, des ruptures et des crises."]
    }
  
      ,{ heading: 'Depuis 1991 : un ordre international en recomposition', body: ['La disparition de l’URSS en 1991 met fin à la bipolarité qui structurait la guerre froide. Les États-Unis disposent alors d’une position dominante, mais cette situation ne produit pas un ordre international stable. Les conflits régionaux, les interventions extérieures, les rivalités de puissance et les limites des organisations internationales montrent la persistance de tensions.', 'La mondialisation renforce les interdépendances économiques et technologiques, tout en créant des vulnérabilités. La montée en puissance de nouveaux acteurs, notamment en Asie, transforme les rapports de force. La puissance se mesure désormais par des capacités militaires et économiques, mais aussi par la maîtrise technologique, l’influence culturelle, les normes et la capacité à organiser des réseaux.', 'L’Europe et la France cherchent à préserver leur influence dans un environnement marqué par les enjeux énergétiques, climatiques, numériques et sécuritaires. Une analyse historique doit éviter l’idée d’un simple remplacement d’une puissance par une autre : l’ordre contemporain est composite, avec des coopérations et des rivalités qui se superposent.'] }],
  keyPoints: [
    "La disparition de l’URSS ouvre une période de prépondérance américaine, mais les conflits, les attentats du 11 septembre 2001 et les interventions militaires montrent que la stabilité n’est pas acquise.",
    "Les échanges s’intensifient et les interdépendances progressent. Les crises financières, sanitaires et environnementales révèlent toutefois les vulnérabilités de cette intégration.",
    "La montée de la Chine et d’autres puissances transforme les équilibres. Le système international devient plus complexe, sans que les États-Unis cessent d’y jouer un rôle majeur.",
    "L’Union européenne approfondit ses politiques et s’élargit. La France agit à la fois dans le cadre national, européen et multilatéral, avec des marges d’action et des contraintes.",
    "Distinguer les échelles mondiale, européenne et nationale. Éviter les récits linéaires : les évolutions depuis 1991 sont marquées par des continuités, des ruptures et des crises.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Hyperpuissance » ?",
      back: "Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de hyperpuissance ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Multilatéralisme » ?",
      back: "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de multilatéralisme ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Unilatéralisme » ?",
      back: "Action menée par un État sans accord préalable ou soutien collectif substantiel.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de unilatéralisme ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Action menée par un État sans accord préalable ou soutien collectif substantiel.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Terrorisme international » ?",
      back: "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de terrorisme international ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Puissance émergente » ?",
      back: "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de puissance émergente ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « BRICS » ?",
      back: "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de brics ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Union européenne » ?",
      back: "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de union européenne ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Élargissement » ?",
      back: "Processus d’adhésion de nouveaux États à l’Union européenne.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de élargissement ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Processus d’adhésion de nouveaux États à l’Union européenne.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Intégration régionale » ?",
      back: "Construction de coopérations et d’institutions entre États d’une même région.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de intégration régionale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Construction de coopérations et d’institutions entre États d’une même région.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Crise financière » ?",
      back: "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de crise financière ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Crise migratoire » ?",
      back: "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de crise migratoire ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Gouvernance mondiale » ?",
      back: "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de gouvernance mondiale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Puissance » ?",
      back: "Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de puissance ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Souveraineté » ?",
      back: "Autorité politique suprême d’un État sur son territoire et indépendance dans l’ordre international.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de souveraineté ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Autorité politique suprême d’un État sur son territoire et indépendance dans l’ordre international.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Transition énergétique » ?",
      back: "Transformation des systèmes de production et de consommation d’énergie.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de transition énergétique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Transformation des systèmes de production et de consommation d’énergie.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Hyperpuissance » ?",
      choices: [
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
        "Action menée par un État sans accord préalable ou soutien collectif substantiel."
      ],
      answer: 1,
      explanation: "Hyperpuissance : Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Multilatéralisme » ?",
      choices: [
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international."
      ],
      answer: 2,
      explanation: "Multilatéralisme : Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Unilatéralisme » ?",
      choices: [
        "Action menée par un État sans accord préalable ou soutien collectif substantiel.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Construction de coopérations et d’institutions entre États d’une même région."
      ],
      answer: 0,
      explanation: "Unilatéralisme : Action menée par un État sans accord préalable ou soutien collectif substantiel.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Terrorisme international » ?",
      choices: [
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
        "Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs."
      ],
      answer: 1,
      explanation: "Terrorisme international : Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Puissance émergente » ?",
      choices: [
        "Action menée par un État sans accord préalable ou soutien collectif substantiel.",
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international."
      ],
      answer: 3,
      explanation: "Puissance émergente : État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « BRICS » ?",
      choices: [
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Construction de coopérations et d’institutions entre États d’une même région.",
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes."
      ],
      answer: 2,
      explanation: "BRICS : Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Union européenne » ?",
      choices: [
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
        "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes."
      ],
      answer: 3,
      explanation: "Union européenne : Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Élargissement » ?",
      choices: [
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Action menée par un État sans accord préalable ou soutien collectif substantiel.",
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes."
      ],
      answer: 0,
      explanation: "Élargissement : Processus d’adhésion de nouveaux États à l’Union européenne.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Intégration régionale » ?",
      choices: [
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
        "Construction de coopérations et d’institutions entre États d’une même région.",
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes."
      ],
      answer: 1,
      explanation: "Intégration régionale : Construction de coopérations et d’institutions entre États d’une même région.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Crise financière » ?",
      choices: [
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Construction de coopérations et d’institutions entre États d’une même région.",
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle."
      ],
      answer: 3,
      explanation: "Crise financière : Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Crise migratoire » ?",
      choices: [
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
        "Action menée par un État sans accord préalable ou soutien collectif substantiel.",
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide."
      ],
      answer: 2,
      explanation: "Crise migratoire : Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Gouvernance mondiale » ?",
      choices: [
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
        "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué."
      ],
      answer: 1,
      explanation: "Gouvernance mondiale : Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Puissance » ?",
      choices: [
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Construction de coopérations et d’institutions entre États d’une même région.",
        "Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs."
      ],
      answer: 3,
      explanation: "Puissance : Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Souveraineté » ?",
      choices: [
        "Autorité politique suprême d’un État sur son territoire et indépendance dans l’ordre international.",
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
        "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux."
      ],
      answer: 0,
      explanation: "Souveraineté : Autorité politique suprême d’un État sur son territoire et indépendance dans l’ordre international.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Transition énergétique » ?",
      choices: [
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Transformation des systèmes de production et de consommation d’énergie.",
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
        "Action menée par un État sans accord préalable ou soutien collectif substantiel."
      ],
      answer: 1,
      explanation: "Transition énergétique : Transformation des systèmes de production et de consommation d’énergie.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide. » ?",
      choices: [
        "Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
        "Processus d’adhésion de nouveaux États à l’Union européenne.",
        "Construction de coopérations et d’institutions entre États d’une même région."
      ],
      answer: 0,
      explanation: "Hyperpuissance : Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes. » ?",
      choices: [
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
        "Ensemble des institutions, normes et coopérations qui cherchent à traiter des enjeux transnationaux.",
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes."
      ],
      answer: 3,
      explanation: "Multilatéralisme : Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Action menée par un État sans accord préalable ou soutien collectif substantiel. » ?",
      choices: [
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes.",
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
        "Action menée par un État sans accord préalable ou soutien collectif substantiel."
      ],
      answer: 3,
      explanation: "Unilatéralisme : Action menée par un État sans accord préalable ou soutien collectif substantiel.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales. » ?",
      choices: [
        "Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
        "Groupe de coopération réunissant initialement Brésil, Russie, Inde, Chine et Afrique du Sud, dont la composition a évolué.",
        "Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes.",
        "Processus d’adhésion de nouveaux États à l’Union européenne."
      ],
      answer: 0,
      explanation: "Terrorisme international : Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « État dont le poids économique, diplomatique ou militaire augmente dans le système international. » ?",
      choices: [
        "Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée.",
        "Dysfonctionnement majeur des marchés et institutions financières pouvant affecter l’économie réelle.",
        "État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
        "Construction de coopérations et d’institutions entre États d’une même région."
      ],
      answer: 2,
      explanation: "Puissance émergente : État dont le poids économique, diplomatique ou militaire augmente dans le système international.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Hyperpuissance",
      level: "Facile",
      statement: "Définissez « Hyperpuissance » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Terme utilisé dans les années 1990 pour souligner la prépondérance des États-Unis après la guerre froide. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Unilatéralisme",
      level: "Facile",
      statement: "Expliquez pourquoi « Unilatéralisme » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Action menée par un État sans accord préalable ou soutien collectif substantiel. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Puissance émergente",
      level: "Facile",
      statement: "Distinguez « Puissance émergente » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : État dont le poids économique, diplomatique ou militaire augmente dans le système international. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Union européenne",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « Union européenne ».",
      correction: "Une réponse complète définit précisément la notion : Organisation politique et économique d’États européens fondée sur des institutions et des politiques communes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Intégration régionale",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Intégration régionale ».",
      correction: "Une réponse complète définit précisément la notion : Construction de coopérations et d’institutions entre États d’une même région. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Crise migratoire",
      level: "Intermédiaire",
      statement: "Définissez « Crise migratoire » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Expression désignant une situation de fortes mobilités et de tensions politiques ou humanitaires ; elle doit être contextualisée. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Puissance",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Puissance » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Capacité d’un acteur à influencer les comportements et décisions d’autres acteurs. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Transition énergétique",
      level: "Difficile",
      statement: "Distinguez « Transition énergétique » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Transformation des systèmes de production et de consommation d’énergie. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Multilatéralisme",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Multilatéralisme ».",
      correction: "Une réponse complète définit précisément la notion : Mode de coopération dans lequel plusieurs États élaborent des règles ou décisions communes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Terrorisme international",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Terrorisme international ».",
      correction: "Une réponse complète définit précisément la notion : Violence politique organisée dont les réseaux, cibles ou effets dépassent les frontières nationales. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "Le monde, l’Europe et la France depuis les années 1990",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-g1': {
  title: "Mers et océans au cœur de la mondialisation",
  objectives: [
    "Maîtriser les notions essentielles de « Mers et océans au cœur de la mondialisation ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Des espaces essentiels aux flux",
      body: ["La majeure partie du commerce mondial en volume est transportée par mer. Les routes relient les grands pôles de production et de consommation et s’appuient sur des ports hiérarchisés."]
    },
    {
      heading: "2. Des routes et des points de passage",
      body: ["Les détroits et canaux concentrent des flux et constituent des points de vulnérabilité. Une perturbation locale peut avoir des effets à l’échelle mondiale."]
    },
    {
      heading: "3. Ressources et activités",
      body: ["Pêche, hydrocarbures offshore, énergies marines, tourisme et câbles sous-marins témoignent de la diversité des usages. Ces activités peuvent entrer en concurrence."]
    },
    {
      heading: "4. Des espaces fragiles et disputés",
      body: ["La pollution, la surpêche et le changement climatique menacent les écosystèmes. Les délimitations maritimes et l’accès aux ressources suscitent aussi des tensions."]
    },
    {
      heading: "5. Méthode et croquis",
      body: ["Un croquis doit hiérarchiser les flux, les façades, les points de passage et les espaces de tension. La légende doit être organisée et les figurés choisis selon leur nature."]
    }
  
      ,{ heading: 'Contrôler les routes et protéger les espaces maritimes', body: ['Les mers et océans constituent des espaces de circulation majeurs pour le commerce, les ressources énergétiques, les câbles sous-marins et les communications. Les routes maritimes relient les grands pôles de production et de consommation. Certains passages étroits, comme les détroits et canaux, concentrent les flux et deviennent des points sensibles en cas de conflit, d’accident ou de blocage.', 'Le droit de la mer distingue notamment la mer territoriale, la zone économique exclusive et la haute mer. Ces espaces n’accordent pas les mêmes droits aux États : la souveraineté territoriale est plus forte près des côtes, tandis que la ZEE donne des droits spécifiques sur l’exploration et l’exploitation des ressources. La haute mer relève de libertés encadrées par le droit international.', 'La puissance maritime ne se résume pas à posséder une flotte militaire. Elle comprend les capacités portuaires, la marine marchande, la surveillance, les connaissances scientifiques, les câbles et les moyens de sécuriser les approvisionnements. Les enjeux environnementaux imposent également de concilier exploitation, protection des écosystèmes et prévention des pollutions.'] }],
  keyPoints: [
    "La majeure partie du commerce mondial en volume est transportée par mer. Les routes relient les grands pôles de production et de consommation et s’appuient sur des ports hiérarchisés.",
    "Les détroits et canaux concentrent des flux et constituent des points de vulnérabilité. Une perturbation locale peut avoir des effets à l’échelle mondiale.",
    "Pêche, hydrocarbures offshore, énergies marines, tourisme et câbles sous-marins témoignent de la diversité des usages. Ces activités peuvent entrer en concurrence.",
    "La pollution, la surpêche et le changement climatique menacent les écosystèmes. Les délimitations maritimes et l’accès aux ressources suscitent aussi des tensions.",
    "Un croquis doit hiérarchiser les flux, les façades, les points de passage et les espaces de tension. La légende doit être organisée et les figurés choisis selon leur nature.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Maritimisation » ?",
      back: "Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de maritimisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Conteneurisation » ?",
      back: "Généralisation du transport de marchandises dans des conteneurs standardisés.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de conteneurisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Généralisation du transport de marchandises dans des conteneurs standardisés.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Façade maritime » ?",
      back: "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de façade maritime ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Hub portuaire » ?",
      back: "Port majeur organisant la redistribution des flux maritimes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de hub portuaire ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Port majeur organisant la redistribution des flux maritimes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Détroit stratégique » ?",
      back: "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de détroit stratégique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Canal interocéanique » ?",
      back: "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de canal interocéanique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « ZEE » ?",
      back: "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de zee ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Haute mer » ?",
      back: "Espaces marins situés au-delà des juridictions nationales.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de haute mer ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espaces marins situés au-delà des juridictions nationales.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Ressource halieutique » ?",
      back: "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de ressource halieutique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Surpêche » ?",
      back: "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de surpêche ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Câble sous-marin » ?",
      back: "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de câble sous-marin ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Route maritime » ?",
      back: "Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de route maritime ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Littoralisation » ?",
      back: "Concentration des populations et activités sur les littoraux.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de littoralisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Concentration des populations et activités sur les littoraux.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Piraterie maritime » ?",
      back: "Actes de violence ou de prédation en mer définis par le droit international.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de piraterie maritime ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Actes de violence ou de prédation en mer définis par le droit international.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Économie bleue » ?",
      back: "Activités économiques liées aux océans, dans une perspective affichée de durabilité.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de économie bleue ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Activités économiques liées aux océans, dans une perspective affichée de durabilité.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Maritimisation » ?",
      choices: [
        "Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
        "Généralisation du transport de marchandises dans des conteneurs standardisés.",
        "Port majeur organisant la redistribution des flux maritimes."
      ],
      answer: 0,
      explanation: "Maritimisation : Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Conteneurisation » ?",
      choices: [
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
        "Généralisation du transport de marchandises dans des conteneurs standardisés."
      ],
      answer: 3,
      explanation: "Conteneurisation : Généralisation du transport de marchandises dans des conteneurs standardisés.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Façade maritime » ?",
      choices: [
        "Espaces marins situés au-delà des juridictions nationales.",
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins."
      ],
      answer: 2,
      explanation: "Façade maritime : Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Hub portuaire » ?",
      choices: [
        "Concentration des populations et activités sur les littoraux.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
        "Port majeur organisant la redistribution des flux maritimes.",
        "Itinéraire emprunté par les navires pour transporter marchandises et énergie."
      ],
      answer: 2,
      explanation: "Hub portuaire : Port majeur organisant la redistribution des flux maritimes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Détroit stratégique » ?",
      choices: [
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
        "Port majeur organisant la redistribution des flux maritimes."
      ],
      answer: 1,
      explanation: "Détroit stratégique : Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Canal interocéanique » ?",
      choices: [
        "Espaces marins situés au-delà des juridictions nationales.",
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins."
      ],
      answer: 2,
      explanation: "Canal interocéanique : Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « ZEE » ?",
      choices: [
        "Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques."
      ],
      answer: 1,
      explanation: "ZEE : Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Haute mer » ?",
      choices: [
        "Généralisation du transport de marchandises dans des conteneurs standardisés.",
        "Port majeur organisant la redistribution des flux maritimes.",
        "Espaces marins situés au-delà des juridictions nationales.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays."
      ],
      answer: 2,
      explanation: "Haute mer : Espaces marins situés au-delà des juridictions nationales.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Ressource halieutique » ?",
      choices: [
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises."
      ],
      answer: 0,
      explanation: "Ressource halieutique : Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Surpêche » ?",
      choices: [
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
        "Espaces marins situés au-delà des juridictions nationales.",
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement."
      ],
      answer: 3,
      explanation: "Surpêche : Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Câble sous-marin » ?",
      choices: [
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
        "Généralisation du transport de marchandises dans des conteneurs standardisés.",
        "Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays."
      ],
      answer: 0,
      explanation: "Câble sous-marin : Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Route maritime » ?",
      choices: [
        "Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
        "Port majeur organisant la redistribution des flux maritimes.",
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises."
      ],
      answer: 0,
      explanation: "Route maritime : Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Littoralisation » ?",
      choices: [
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
        "Espaces marins situés au-delà des juridictions nationales.",
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Concentration des populations et activités sur les littoraux."
      ],
      answer: 3,
      explanation: "Littoralisation : Concentration des populations et activités sur les littoraux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Piraterie maritime » ?",
      choices: [
        "Actes de violence ou de prédation en mer définis par le droit international.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
        "Itinéraire emprunté par les navires pour transporter marchandises et énergie.",
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement."
      ],
      answer: 0,
      explanation: "Piraterie maritime : Actes de violence ou de prédation en mer définis par le droit international.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Économie bleue » ?",
      choices: [
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
        "Activités économiques liées aux océans, dans une perspective affichée de durabilité.",
        "Port majeur organisant la redistribution des flux maritimes."
      ],
      answer: 2,
      explanation: "Économie bleue : Activités économiques liées aux océans, dans une perspective affichée de durabilité.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale. » ?",
      choices: [
        "Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
        "Espaces marins situés au-delà des juridictions nationales.",
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources."
      ],
      answer: 0,
      explanation: "Maritimisation : Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Généralisation du transport de marchandises dans des conteneurs standardisés. » ?",
      choices: [
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques.",
        "Généralisation du transport de marchandises dans des conteneurs standardisés.",
        "Itinéraire emprunté par les navires pour transporter marchandises et énergie."
      ],
      answer: 2,
      explanation: "Conteneurisation : Généralisation du transport de marchandises dans des conteneurs standardisés.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Littoral concentrant ports, activités logistiques et connexions aux arrière-pays. » ?",
      choices: [
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
        "Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
        "Généralisation du transport de marchandises dans des conteneurs standardisés.",
        "Port majeur organisant la redistribution des flux maritimes."
      ],
      answer: 1,
      explanation: "Façade maritime : Littoral concentrant ports, activités logistiques et connexions aux arrière-pays.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Port majeur organisant la redistribution des flux maritimes. » ?",
      choices: [
        "Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources.",
        "Voie artificielle reliant deux espaces maritimes et raccourcissant les routes.",
        "Port majeur organisant la redistribution des flux maritimes.",
        "Espaces marins situés au-delà des juridictions nationales."
      ],
      answer: 2,
      explanation: "Hub portuaire : Port majeur organisant la redistribution des flux maritimes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Passage maritime étroit essentiel à la circulation des navires et des marchandises. » ?",
      choices: [
        "Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
        "Prélèvement de ressources halieutiques à un rythme supérieur à leur renouvellement.",
        "Ressource vivante issue de la pêche et de l’exploitation des organismes marins.",
        "Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques."
      ],
      answer: 0,
      explanation: "Détroit stratégique : Passage maritime étroit essentiel à la circulation des navires et des marchandises.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Maritimisation",
      level: "Facile",
      statement: "Définissez « Maritimisation » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Accroissement du rôle des mers et océans dans les échanges et l’organisation de l’économie mondiale. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Façade maritime",
      level: "Facile",
      statement: "Expliquez pourquoi « Façade maritime » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Littoral concentrant ports, activités logistiques et connexions aux arrière-pays. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Détroit stratégique",
      level: "Facile",
      statement: "Distinguez « Détroit stratégique » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Passage maritime étroit essentiel à la circulation des navires et des marchandises. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : ZEE",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « ZEE ».",
      correction: "Une réponse complète définit précisément la notion : Zone économique exclusive dans laquelle l’État côtier exerce des droits souverains sur les ressources. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Ressource halieutique",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Ressource halieutique ».",
      correction: "Une réponse complète définit précisément la notion : Ressource vivante issue de la pêche et de l’exploitation des organismes marins. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Câble sous-marin",
      level: "Intermédiaire",
      statement: "Définissez « Câble sous-marin » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Infrastructure de télécommunication posée au fond des mers, essentielle aux échanges numériques. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Littoralisation",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Littoralisation » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Concentration des populations et activités sur les littoraux. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Économie bleue",
      level: "Difficile",
      statement: "Distinguez « Économie bleue » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Activités économiques liées aux océans, dans une perspective affichée de durabilité. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Conteneurisation",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Conteneurisation ».",
      correction: "Une réponse complète définit précisément la notion : Généralisation du transport de marchandises dans des conteneurs standardisés. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Hub portuaire",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Hub portuaire ».",
      correction: "Une réponse complète définit précisément la notion : Port majeur organisant la redistribution des flux maritimes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "Mers et océans au cœur de la mondialisation",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-g2': {
  title: "Dynamiques territoriales, coopérations et tensions dans la mondialisation",
  objectives: [
    "Maîtriser les notions essentielles de « Dynamiques territoriales, coopérations et tensions dans la mondialisation ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Des territoires inégalement intégrés",
      body: ["La mondialisation met en réseau les territoires, mais l’intégration est sélective. Les métropoles, interfaces et grands corridors concentrent souvent les fonctions stratégiques."]
    },
    {
      heading: "2. Des dynamiques de recomposition",
      body: ["Les chaînes de valeur, les innovations et les politiques publiques transforment les spécialisations territoriales. Certains espaces gagnent en attractivité, d’autres connaissent des marginalisations."]
    },
    {
      heading: "3. Coopérations et concurrences",
      body: ["Les territoires coopèrent pour développer des infrastructures et attirer des activités, tout en se concurrençant pour les investissements, les emplois et les fonctions de commandement."]
    },
    {
      heading: "4. Inégalités et vulnérabilités",
      body: ["La concentration des richesses peut renforcer les inégalités socio-spatiales. Les dépendances aux réseaux mondiaux rendent aussi certains territoires vulnérables aux crises."]
    },
    {
      heading: "5. Méthode",
      body: ["Changer d’échelle permet de relier les trajectoires locales aux dynamiques nationales et mondiales. Une étude de cas doit articuler acteurs, stratégies, flux et inégalités."]
    }
  
      ,{ heading: 'Les réseaux, les métropoles et les recompositions territoriales', body: ['La mondialisation s’appuie sur des réseaux de transport, de communication, de finance et de production. Les métropoles concentrent souvent les fonctions de commandement, les sièges sociaux, les services spécialisés, les universités et les infrastructures de connexion. Les façades maritimes, les grands ports et les corridors logistiques jouent un rôle essentiel dans l’organisation des flux.', 'L’intégration d’un territoire dépend de son accessibilité, de ses compétences, de ses infrastructures, de ses institutions et de sa capacité à attirer les investissements. Un espace peut être fortement connecté à certains réseaux tout en restant dépendant de décisions prises ailleurs. Les périphéries ne sont pas nécessairement isolées : certaines se spécialisent dans le tourisme, l’agriculture, l’énergie ou des activités industrielles ciblées.', 'Les coopérations transfrontalières et les organisations régionales peuvent faciliter les échanges, mais elles coexistent avec des concurrences pour les investissements, les ressources et les fonctions de commandement. Une étude territoriale doit donc croiser les échelles locale, nationale et mondiale. Les chaînes de valeur fragmentées rendent les territoires interdépendants : une décision prise par une firme, une rupture d’approvisionnement ou une évolution des coûts de transport peut déplacer une activité. Les territoires tentent alors de renforcer leur attractivité, de diversifier leurs partenaires et de sécuriser certaines fonctions stratégiques. Cette recherche de résilience peut toutefois entrer en tension avec la logique de réduction des coûts.'] }],
  keyPoints: [
    "La mondialisation met en réseau les territoires, mais l’intégration est sélective. Les métropoles, interfaces et grands corridors concentrent souvent les fonctions stratégiques.",
    "Les chaînes de valeur, les innovations et les politiques publiques transforment les spécialisations territoriales. Certains espaces gagnent en attractivité, d’autres connaissent des marginalisations.",
    "Les territoires coopèrent pour développer des infrastructures et attirer des activités, tout en se concurrençant pour les investissements, les emplois et les fonctions de commandement.",
    "La concentration des richesses peut renforcer les inégalités socio-spatiales. Les dépendances aux réseaux mondiaux rendent aussi certains territoires vulnérables aux crises.",
    "Changer d’échelle permet de relier les trajectoires locales aux dynamiques nationales et mondiales. Une étude de cas doit articuler acteurs, stratégies, flux et inégalités.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Métropolisation » ?",
      back: "Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de métropolisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Mégapole » ?",
      back: "Agglomération comptant généralement plus de dix millions d’habitants.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de mégapole ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Agglomération comptant généralement plus de dix millions d’habitants.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Métropole mondiale » ?",
      back: "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de métropole mondiale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Interface » ?",
      back: "Espace de contact qui facilite les échanges entre ensembles géographiques.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de interface ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espace de contact qui facilite les échanges entre ensembles géographiques.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Littoralisation » ?",
      back: "Concentration des activités et populations sur les littoraux.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de littoralisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Concentration des activités et populations sur les littoraux.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Réseau » ?",
      back: "Ensemble de lieux reliés par des flux matériels ou immatériels.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de réseau ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ensemble de lieux reliés par des flux matériels ou immatériels.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Flux » ?",
      back: "Circulation de personnes, biens, capitaux, informations ou services.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de flux ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Circulation de personnes, biens, capitaux, informations ou services.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Centre et périphérie » ?",
      back: "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de centre et périphérie ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Fragmentation socio-spatiale » ?",
      back: "Séparation et inégalités entre groupes sociaux dans l’espace.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de fragmentation socio-spatiale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Séparation et inégalités entre groupes sociaux dans l’espace.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Zone franche » ?",
      back: "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de zone franche ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Relocalisation » ?",
      back: "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de relocalisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Délocalisation » ?",
      back: "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de délocalisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Coopération régionale » ?",
      back: "Coordination entre territoires ou États voisins pour des objectifs communs.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de coopération régionale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Coordination entre territoires ou États voisins pour des objectifs communs.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Corridor de transport » ?",
      back: "Axe structurant qui concentre infrastructures et circulations.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de corridor de transport ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Axe structurant qui concentre infrastructures et circulations.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Inégalité territoriale » ?",
      back: "Écart d’accès aux ressources, services, emplois ou équipements entre territoires.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de inégalité territoriale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Écart d’accès aux ressources, services, emplois ou équipements entre territoires.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Métropolisation » ?",
      choices: [
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Agglomération comptant généralement plus de dix millions d’habitants.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques.",
        "Concentration des populations, fonctions de commandement et activités dans les grandes villes."
      ],
      answer: 3,
      explanation: "Métropolisation : Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Mégapole » ?",
      choices: [
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Concentration des activités et populations sur les littoraux.",
        "Agglomération comptant généralement plus de dix millions d’habitants."
      ],
      answer: 3,
      explanation: "Mégapole : Agglomération comptant généralement plus de dix millions d’habitants.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Métropole mondiale » ?",
      choices: [
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir."
      ],
      answer: 1,
      explanation: "Métropole mondiale : Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Interface » ?",
      choices: [
        "Coordination entre territoires ou États voisins pour des objectifs communs.",
        "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques.",
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège."
      ],
      answer: 2,
      explanation: "Interface : Espace de contact qui facilite les échanges entre ensembles géographiques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Littoralisation » ?",
      choices: [
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Concentration des activités et populations sur les littoraux.",
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques."
      ],
      answer: 1,
      explanation: "Littoralisation : Concentration des activités et populations sur les littoraux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Réseau » ?",
      choices: [
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir."
      ],
      answer: 0,
      explanation: "Réseau : Ensemble de lieux reliés par des flux matériels ou immatériels.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Flux » ?",
      choices: [
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités."
      ],
      answer: 1,
      explanation: "Flux : Circulation de personnes, biens, capitaux, informations ou services.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Centre et périphérie » ?",
      choices: [
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
        "Agglomération comptant généralement plus de dix millions d’habitants.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques."
      ],
      answer: 1,
      explanation: "Centre et périphérie : Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Fragmentation socio-spatiale » ?",
      choices: [
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Concentration des activités et populations sur les littoraux."
      ],
      answer: 2,
      explanation: "Fragmentation socio-spatiale : Séparation et inégalités entre groupes sociaux dans l’espace.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Zone franche » ?",
      choices: [
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir."
      ],
      answer: 2,
      explanation: "Zone franche : Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Relocalisation » ?",
      choices: [
        "Agglomération comptant généralement plus de dix millions d’habitants.",
        "Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux."
      ],
      answer: 2,
      explanation: "Relocalisation : Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Délocalisation » ?",
      choices: [
        "Espace de contact qui facilite les échanges entre ensembles géographiques.",
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Concentration des activités et populations sur les littoraux.",
        "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché."
      ],
      answer: 3,
      explanation: "Délocalisation : Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Coopération régionale » ?",
      choices: [
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
        "Coordination entre territoires ou États voisins pour des objectifs communs.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Séparation et inégalités entre groupes sociaux dans l’espace."
      ],
      answer: 1,
      explanation: "Coopération régionale : Coordination entre territoires ou États voisins pour des objectifs communs.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Corridor de transport » ?",
      choices: [
        "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
        "Axe structurant qui concentre infrastructures et circulations.",
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège."
      ],
      answer: 2,
      explanation: "Corridor de transport : Axe structurant qui concentre infrastructures et circulations.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Inégalité territoriale » ?",
      choices: [
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Écart d’accès aux ressources, services, emplois ou équipements entre territoires.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques.",
        "Concentration des activités et populations sur les littoraux."
      ],
      answer: 1,
      explanation: "Inégalité territoriale : Écart d’accès aux ressources, services, emplois ou équipements entre territoires.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Concentration des populations, fonctions de commandement et activités dans les grandes villes. » ?",
      choices: [
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
        "Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
        "Circulation de personnes, biens, capitaux, informations ou services."
      ],
      answer: 2,
      explanation: "Métropolisation : Concentration des populations, fonctions de commandement et activités dans les grandes villes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Agglomération comptant généralement plus de dix millions d’habitants. » ?",
      choices: [
        "Transfert d’une activité vers un autre territoire, souvent pour réduire les coûts ou accéder à un marché.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
        "Agglomération comptant généralement plus de dix millions d’habitants.",
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège."
      ],
      answer: 2,
      explanation: "Mégapole : Agglomération comptant généralement plus de dix millions d’habitants.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux. » ?",
      choices: [
        "Concentration des activités et populations sur les littoraux.",
        "Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
        "Agglomération comptant généralement plus de dix millions d’habitants.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques."
      ],
      answer: 1,
      explanation: "Métropole mondiale : Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Espace de contact qui facilite les échanges entre ensembles géographiques. » ?",
      choices: [
        "Ensemble de lieux reliés par des flux matériels ou immatériels.",
        "Circulation de personnes, biens, capitaux, informations ou services.",
        "Relation spatiale marquée par des écarts de fonctions, de richesse ou de pouvoir.",
        "Espace de contact qui facilite les échanges entre ensembles géographiques."
      ],
      answer: 3,
      explanation: "Interface : Espace de contact qui facilite les échanges entre ensembles géographiques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Concentration des activités et populations sur les littoraux. » ?",
      choices: [
        "Concentration des activités et populations sur les littoraux.",
        "Séparation et inégalités entre groupes sociaux dans l’espace.",
        "Espace bénéficiant de règles fiscales ou douanières particulières pour attirer des activités.",
        "Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège."
      ],
      answer: 0,
      explanation: "Littoralisation : Concentration des activités et populations sur les littoraux.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Métropolisation",
      level: "Facile",
      statement: "Définissez « Métropolisation » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Concentration des populations, fonctions de commandement et activités dans les grandes villes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Métropole mondiale",
      level: "Facile",
      statement: "Expliquez pourquoi « Métropole mondiale » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Ville exerçant une influence majeure dans les réseaux économiques, politiques et culturels mondiaux. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Littoralisation",
      level: "Facile",
      statement: "Distinguez « Littoralisation » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Concentration des activités et populations sur les littoraux. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Flux",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « Flux ».",
      correction: "Une réponse complète définit précisément la notion : Circulation de personnes, biens, capitaux, informations ou services. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Fragmentation socio-spatiale",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Fragmentation socio-spatiale ».",
      correction: "Une réponse complète définit précisément la notion : Séparation et inégalités entre groupes sociaux dans l’espace. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Relocalisation",
      level: "Intermédiaire",
      statement: "Définissez « Relocalisation » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Retour ou déplacement d’activités productives vers un territoire plus proche du marché ou du siège. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Coopération régionale",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Coopération régionale » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Coordination entre territoires ou États voisins pour des objectifs communs. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Inégalité territoriale",
      level: "Difficile",
      statement: "Distinguez « Inégalité territoriale » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Écart d’accès aux ressources, services, emplois ou équipements entre territoires. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Mégapole",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Mégapole ».",
      correction: "Une réponse complète définit précisément la notion : Agglomération comptant généralement plus de dix millions d’habitants. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Interface",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Interface ».",
      correction: "Une réponse complète définit précisément la notion : Espace de contact qui facilite les échanges entre ensembles géographiques. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "Dynamiques territoriales, coopérations et tensions dans la mondialisation",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-g3': {
  title: "L’Union européenne dans la mondialisation : des dynamiques complexes",
  objectives: [
    "Maîtriser les notions essentielles de « L’Union européenne dans la mondialisation : des dynamiques complexes ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Un espace intégré mais hétérogène",
      body: ["L’Union européenne est un vaste marché et un acteur commercial majeur. Ses États présentent toutefois des niveaux de richesse, des spécialisations et des intérêts différents."]
    },
    {
      heading: "2. Des politiques communes",
      body: ["Le marché unique, la politique commerciale et les fonds de cohésion structurent l’intégration. Leur mise en œuvre suppose des compromis entre institutions, États et territoires."]
    },
    {
      heading: "3. Une puissance singulière",
      body: ["L’Union exerce une influence par ses normes, son marché et ses accords. Sa capacité diplomatique et militaire demeure plus fragmentée que celle d’un État unitaire."]
    },
    {
      heading: "4. Des défis contemporains",
      body: ["Dépendances énergétiques et technologiques, transition écologique, élargissement et tensions géopolitiques interrogent l’autonomie stratégique et la solidarité européenne."]
    },
    {
      heading: "5. Méthode",
      body: ["Distinguer l’Union européenne, la zone euro et l’espace Schengen. Pour un croquis, représenter les centres, les périphéries, les interfaces et les disparités régionales."]
    }
  
      ,{ heading: 'Élargissement, intégration et différenciations internes', body: ['L’Union européenne est une construction politique et économique fondée sur des traités successifs. Le marché unique organise la libre circulation des marchandises, des services, des capitaux et des personnes, tandis que l’union monétaire concerne les États ayant adopté l’euro. Ces deux niveaux d’intégration ne se confondent pas : tous les membres de l’Union n’appartiennent pas nécessairement à la zone euro.', 'L’intégration produit des interdépendances mais ne supprime pas les écarts territoriaux. Les grandes métropoles, les régions industrielles reconverties, les espaces ruraux et les régions périphériques n’ont pas les mêmes spécialisations ni les mêmes capacités d’attraction. Les politiques de cohésion cherchent à réduire ces écarts par des financements, des infrastructures et des programmes de développement, sans garantir une convergence automatique.', 'Les crises économiques, les débats sur les frontières, les transitions énergétiques et les divergences politiques peuvent ralentir l’action commune. Pour analyser l’Union, il faut donc distinguer les compétences partagées, les décisions intergouvernementales et les politiques conduites à l’échelle nationale. La politique monétaire commune impose également de raisonner à l’échelle de la zone euro : un taux d’intérêt unique s’applique à des économies dont la conjoncture, l’endettement et la structure productive peuvent différer. Les États disposent donc de marges nationales inégales pour répondre à un choc, ce qui nourrit les débats sur la coordination budgétaire et la solidarité européenne.'] }],
  keyPoints: [
    "L’Union européenne est un vaste marché et un acteur commercial majeur. Ses États présentent toutefois des niveaux de richesse, des spécialisations et des intérêts différents.",
    "Le marché unique, la politique commerciale et les fonds de cohésion structurent l’intégration. Leur mise en œuvre suppose des compromis entre institutions, États et territoires.",
    "L’Union exerce une influence par ses normes, son marché et ses accords. Sa capacité diplomatique et militaire demeure plus fragmentée que celle d’un État unitaire.",
    "Dépendances énergétiques et technologiques, transition écologique, élargissement et tensions géopolitiques interrogent l’autonomie stratégique et la solidarité européenne.",
    "Distinguer l’Union européenne, la zone euro et l’espace Schengen. Pour un croquis, représenter les centres, les périphéries, les interfaces et les disparités régionales.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Union européenne » ?",
      back: "Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de union européenne ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Marché unique » ?",
      back: "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de marché unique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Zone euro » ?",
      back: "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de zone euro ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Élargissement » ?",
      back: "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de élargissement ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Politique de cohésion » ?",
      back: "Politique européenne visant à réduire les écarts de développement entre régions.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de politique de cohésion ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politique européenne visant à réduire les écarts de développement entre régions.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Schengen » ?",
      back: "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de schengen ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Puissance normative » ?",
      back: "Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de puissance normative ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Politique commerciale commune » ?",
      back: "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de politique commerciale commune ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir «  subsidiarité » ?",
      back: "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de  subsidiarité ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Région ultrapériphérique » ?",
      back: "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de région ultrapériphérique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Frontière extérieure » ?",
      back: "Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de frontière extérieure ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Dépendance stratégique » ?",
      back: "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de dépendance stratégique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Transition écologique » ?",
      back: "Transformation des activités pour réduire les pressions environnementales et les émissions.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de transition écologique ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Transformation des activités pour réduire les pressions environnementales et les émissions.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Souveraineté européenne » ?",
      back: "Capacité collective des Européens à décider et agir dans des domaines stratégiques.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de souveraineté européenne ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Capacité collective des Européens à décider et agir dans des domaines stratégiques.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Cohésion territoriale » ?",
      back: "Recherche d’un développement équilibré et d’un accès équitable aux services entre territoires.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de cohésion territoriale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Recherche d’un développement équilibré et d’un accès équitable aux services entre territoires.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Union européenne » ?",
      choices: [
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
        "Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes."
      ],
      answer: 3,
      explanation: "Union européenne : Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Marché unique » ?",
      choices: [
        "Politique européenne visant à réduire les écarts de développement entre régions.",
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes."
      ],
      answer: 2,
      explanation: "Marché unique : Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Zone euro » ?",
      choices: [
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités."
      ],
      answer: 0,
      explanation: "Zone euro : Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Élargissement » ?",
      choices: [
        "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Transformation des activités pour réduire les pressions environnementales et les émissions.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs."
      ],
      answer: 1,
      explanation: "Élargissement : Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Politique de cohésion » ?",
      choices: [
        "Politique européenne visant à réduire les écarts de développement entre régions.",
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro."
      ],
      answer: 0,
      explanation: "Politique de cohésion : Politique européenne visant à réduire les écarts de développement entre régions.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Schengen » ?",
      choices: [
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible."
      ],
      answer: 1,
      explanation: "Schengen : Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Puissance normative » ?",
      choices: [
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
        "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels."
      ],
      answer: 2,
      explanation: "Puissance normative : Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Politique commerciale commune » ?",
      choices: [
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro."
      ],
      answer: 0,
      explanation: "Politique commerciale commune : Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à «  subsidiarité » ?",
      choices: [
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes.",
        "Politique européenne visant à réduire les écarts de développement entre régions.",
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants."
      ],
      answer: 0,
      explanation: " subsidiarité : Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Région ultrapériphérique » ?",
      choices: [
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs."
      ],
      answer: 2,
      explanation: "Région ultrapériphérique : Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Frontière extérieure » ?",
      choices: [
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
        "Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes."
      ],
      answer: 2,
      explanation: "Frontière extérieure : Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Dépendance stratégique » ?",
      choices: [
        "Politique européenne visant à réduire les écarts de développement entre régions.",
        "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations."
      ],
      answer: 1,
      explanation: "Dépendance stratégique : Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Transition écologique » ?",
      choices: [
        "Transformation des activités pour réduire les pressions environnementales et les émissions.",
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes."
      ],
      answer: 0,
      explanation: "Transition écologique : Transformation des activités pour réduire les pressions environnementales et les émissions.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Souveraineté européenne » ?",
      choices: [
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
        "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels.",
        "Capacité collective des Européens à décider et agir dans des domaines stratégiques."
      ],
      answer: 3,
      explanation: "Souveraineté européenne : Capacité collective des Européens à décider et agir dans des domaines stratégiques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Cohésion territoriale » ?",
      choices: [
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
        "Recherche d’un développement équilibré et d’un accès équitable aux services entre territoires.",
        "Politique européenne visant à réduire les écarts de développement entre régions."
      ],
      answer: 2,
      explanation: "Cohésion territoriale : Recherche d’un développement équilibré et d’un accès équitable aux services entre territoires.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes. » ?",
      choices: [
        "Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes."
      ],
      answer: 0,
      explanation: "Union européenne : Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes. » ?",
      choices: [
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs.",
        "Vulnérabilité liée à l’approvisionnement extérieur en biens ou ressources essentiels."
      ],
      answer: 0,
      explanation: "Marché unique : Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Ensemble des États membres de l’Union européenne ayant adopté l’euro. » ?",
      choices: [
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes.",
        "Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
        "Politique européenne visant à réduire les écarts de développement entre régions."
      ],
      answer: 2,
      explanation: "Zone euro : Ensemble des États membres de l’Union européenne ayant adopté l’euro.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Adhésion de nouveaux États à l’Union européenne selon des critères et négociations. » ?",
      choices: [
        "Espace de libre circulation sans contrôles systématiques aux frontières intérieures pour les États participants.",
        "Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
        "Politique de l’Union européenne encadrant les relations commerciales avec les pays tiers.",
        "Capacité à influencer les règles et standards par le droit, la réglementation et les normes."
      ],
      answer: 1,
      explanation: "Élargissement : Adhésion de nouveaux États à l’Union européenne selon des critères et négociations.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Politique européenne visant à réduire les écarts de développement entre régions. » ?",
      choices: [
        "Politique européenne visant à réduire les écarts de développement entre régions.",
        "Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible.",
        "Territoire éloigné du continent européen mais faisant partie de l’Union et reconnu par les traités.",
        "Limite séparant l’espace de libre circulation européen des territoires extérieurs."
      ],
      answer: 0,
      explanation: "Politique de cohésion : Politique européenne visant à réduire les écarts de développement entre régions.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Union européenne",
      level: "Facile",
      statement: "Définissez « Union européenne » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Union politique et économique de 27 États membres en 2026, dotée d’institutions et de politiques communes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Zone euro",
      level: "Facile",
      statement: "Expliquez pourquoi « Zone euro » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Ensemble des États membres de l’Union européenne ayant adopté l’euro. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Politique de cohésion",
      level: "Facile",
      statement: "Distinguez « Politique de cohésion » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Politique européenne visant à réduire les écarts de développement entre régions. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Puissance normative",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant « Puissance normative ».",
      correction: "Une réponse complète définit précisément la notion : Capacité à influencer les règles et standards par le droit, la réglementation et les normes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser :  subsidiarité",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à «  subsidiarité ».",
      correction: "Une réponse complète définit précisément la notion : Principe selon lequel l’action doit être menée au niveau le plus pertinent, notamment le plus proche des citoyens lorsque cela est possible. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Frontière extérieure",
      level: "Intermédiaire",
      statement: "Définissez « Frontière extérieure » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Limite séparant l’espace de libre circulation européen des territoires extérieurs. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Transition écologique",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Transition écologique » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Transformation des activités pour réduire les pressions environnementales et les émissions. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Cohésion territoriale",
      level: "Difficile",
      statement: "Distinguez « Cohésion territoriale » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Recherche d’un développement équilibré et d’un accès équitable aux services entre territoires. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Marché unique",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Marché unique ».",
      correction: "Une réponse complète définit précisément la notion : Espace économique fondé sur la libre circulation des biens, services, capitaux et personnes, selon les règles européennes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Élargissement",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Élargissement ».",
      correction: "Une réponse complète définit précisément la notion : Adhésion de nouveaux États à l’Union européenne selon des critères et négociations. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "L’Union européenne dans la mondialisation : des dynamiques complexes",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-g4': {
  title: "La France et ses régions dans l’Union européenne et dans la mondialisation",
  objectives: [
    "Maîtriser les notions essentielles de « La France et ses régions dans l’Union européenne et dans la mondialisation ».",
    "Situer les faits et dynamiques dans leur contexte et à plusieurs échelles.",
    "Construire une argumentation précise à partir d’exemples.",
    "Analyser les sources et distinguer faits, interprétations et opinions."
  ],
  course: [
    {
      heading: "1. Une insertion différenciée",
      body: ["La France est intégrée aux échanges européens et mondiaux par ses métropoles, ses ports, ses infrastructures et ses entreprises. Les territoires ne bénéficient pas tous de la même manière de cette insertion."]
    },
    {
      heading: "2. Des régions aux trajectoires diverses",
      body: ["Certaines régions profitent de la métropolisation et des activités innovantes ; d’autres doivent accompagner des reconversions industrielles ou faire face à l’éloignement."]
    },
    {
      heading: "3. L’outre-mer, atout et contraintes",
      body: ["Les territoires ultramarins donnent à la France une présence mondiale et maritime importante. Ils connaissent aussi des contraintes liées à l’éloignement, aux risques et aux dépendances économiques."]
    },
    {
      heading: "4. Politiques d’aménagement",
      body: ["L’État, les collectivités et l’Union européenne agissent sur les transports, les services, la formation et le développement économique pour renforcer la cohésion territoriale."]
    },
    {
      heading: "5. Méthode",
      body: ["Une étude territoriale doit combiner plusieurs échelles et s’appuyer sur des indicateurs précis. Éviter de présenter « la France » comme un espace homogène."]
    }
  
      ,{ heading: 'Des trajectoires régionales contrastées', body: ['L’insertion de la France dans la mondialisation s’appuie sur ses métropoles, ses ports, ses réseaux de transport, ses activités de recherche et ses liens avec le marché européen. Paris concentre de nombreuses fonctions de commandement, mais d’autres métropoles disposent de spécialisations industrielles, universitaires, logistiques, touristiques ou culturelles. Les effets de la mondialisation varient donc selon les régions.', 'Les politiques d’aménagement cherchent à améliorer l’accessibilité, soutenir les territoires fragiles, développer les services et accompagner les transitions économiques. Les financements européens, nationaux et régionaux peuvent contribuer à ces objectifs. Leur efficacité dépend toutefois de la qualité des projets, des compétences locales et de la capacité à coordonner les acteurs.', 'Les territoires ultramarins occupent une position particulière : ils donnent à la France une présence dans plusieurs océans et disposent d’atouts maritimes, écologiques et culturels. Ils sont aussi confrontés à l’éloignement, à la dépendance de certains approvisionnements, aux risques naturels et à des contraintes d’emploi et d’infrastructures. Il faut éviter de les réduire à une situation unique : leurs histoires et leurs économies sont diverses.'] }],
  keyPoints: [
    "La France est intégrée aux échanges européens et mondiaux par ses métropoles, ses ports, ses infrastructures et ses entreprises. Les territoires ne bénéficient pas tous de la même manière de cette insertion.",
    "Certaines régions profitent de la métropolisation et des activités innovantes ; d’autres doivent accompagner des reconversions industrielles ou faire face à l’éloignement.",
    "Les territoires ultramarins donnent à la France une présence mondiale et maritime importante. Ils connaissent aussi des contraintes liées à l’éloignement, aux risques et aux dépendances économiques.",
    "L’État, les collectivités et l’Union européenne agissent sur les transports, les services, la formation et le développement économique pour renforcer la cohésion territoriale.",
    "Une étude territoriale doit combiner plusieurs échelles et s’appuyer sur des indicateurs précis. Éviter de présenter « la France » comme un espace homogène.",
    "Les exemples doivent être datés, localisés et contextualisés."
  ],
  method: [
    "Définir les termes du sujet et délimiter la période ou l’espace étudié.",
    "Identifier les acteurs, leurs intérêts et leurs moyens.",
    "Organiser les connaissances autour d’une problématique.",
    "Mobiliser des exemples précis et changer d’échelle.",
    "Conclure en répondant explicitement à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Région » ?",
      back: "Collectivité territoriale française disposant de compétences définies par la loi.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de région ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Collectivité territoriale française disposant de compétences définies par la loi.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Aménagement du territoire » ?",
      back: "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de aménagement du territoire ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Métropole » ?",
      back: "Grande ville concentrant population, emplois et fonctions de commandement.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de métropole ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Grande ville concentrant population, emplois et fonctions de commandement.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « DROM » ?",
      back: "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de drom ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Dépendance ultramarine » ?",
      back: "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de dépendance ultramarine ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Interface frontalière » ?",
      back: "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de interface frontalière ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir «  attractivité » ?",
      back: "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de  attractivité ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Désindustrialisation » ?",
      back: "Recul de l’emploi industriel et transformation des systèmes productifs.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de désindustrialisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Recul de l’emploi industriel et transformation des systèmes productifs.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Reconversion » ?",
      back: "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de reconversion ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Littoralisation » ?",
      back: "Concentration des hommes et activités sur les côtes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de littoralisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Concentration des hommes et activités sur les côtes.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Réseau de transport » ?",
      back: "Infrastructure et services organisant les déplacements et échanges.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de réseau de transport ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Infrastructure et services organisant les déplacements et échanges.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Cohésion territoriale » ?",
      back: "Réduction des disparités et amélioration de l’accès aux ressources et services.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de cohésion territoriale ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Réduction des disparités et amélioration de l’accès aux ressources et services.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Région transfrontalière » ?",
      back: "Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de région transfrontalière ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Tourisme » ?",
      back: "Activité de déplacement temporaire générant des services et des flux.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de tourisme ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Activité de déplacement temporaire générant des services et des flux.",
      tags: [
        "notion",
        "analyse"
      ]
    },
    {
      front: "Comment définir « Métropolisation » ?",
      back: "Concentration des fonctions stratégiques dans les grandes villes.",
      tags: [
        "notion",
        "définition"
      ]
    },
    {
      front: "Quel enjeu permet d’éclairer la notion de métropolisation ?",
      back: "Elle aide à analyser les acteurs, les règles, les échelles et les conséquences d’une situation. Concentration des fonctions stratégiques dans les grandes villes.",
      tags: [
        "notion",
        "analyse"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Région » ?",
      choices: [
        "Collectivité territoriale française disposant de compétences définies par la loi.",
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
        "Grande ville concentrant population, emplois et fonctions de commandement.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques."
      ],
      answer: 0,
      explanation: "Région : Collectivité territoriale française disposant de compétences définies par la loi.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Aménagement du territoire » ?",
      choices: [
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers."
      ],
      answer: 2,
      explanation: "Aménagement du territoire : Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Métropole » ?",
      choices: [
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Concentration des hommes et activités sur les côtes.",
        "Grande ville concentrant population, emplois et fonctions de commandement."
      ],
      answer: 3,
      explanation: "Métropole : Grande ville concentrant population, emplois et fonctions de commandement.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « DROM » ?",
      choices: [
        "Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière.",
        "Réduction des disparités et amélioration de l’accès aux ressources et services.",
        "Infrastructure et services organisant les déplacements et échanges.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques."
      ],
      answer: 3,
      explanation: "DROM : Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Dépendance ultramarine » ?",
      choices: [
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
        "Grande ville concentrant population, emplois et fonctions de commandement.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques."
      ],
      answer: 0,
      explanation: "Dépendance ultramarine : Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à « Interface frontalière » ?",
      choices: [
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers."
      ],
      answer: 3,
      explanation: "Interface frontalière : Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Facile",
      question: "Quelle définition correspond le mieux à «  attractivité » ?",
      choices: [
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Concentration des hommes et activités sur les côtes.",
        "Réduction des disparités et amélioration de l’accès aux ressources et services.",
        "Infrastructure et services organisant les déplacements et échanges."
      ],
      answer: 0,
      explanation: " attractivité : Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Désindustrialisation » ?",
      choices: [
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
        "Grande ville concentrant population, emplois et fonctions de commandement."
      ],
      answer: 1,
      explanation: "Désindustrialisation : Recul de l’emploi industriel et transformation des systèmes productifs.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Reconversion » ?",
      choices: [
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers."
      ],
      answer: 0,
      explanation: "Reconversion : Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Littoralisation » ?",
      choices: [
        "Infrastructure et services organisant les déplacements et échanges.",
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Concentration des hommes et activités sur les côtes."
      ],
      answer: 3,
      explanation: "Littoralisation : Concentration des hommes et activités sur les côtes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Réseau de transport » ?",
      choices: [
        "Grande ville concentrant population, emplois et fonctions de commandement.",
        "Infrastructure et services organisant les déplacements et échanges.",
        "Collectivité territoriale française disposant de compétences définies par la loi.",
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace."
      ],
      answer: 1,
      explanation: "Réseau de transport : Infrastructure et services organisant les déplacements et échanges.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Cohésion territoriale » ?",
      choices: [
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
        "Réduction des disparités et amélioration de l’accès aux ressources et services.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole."
      ],
      answer: 1,
      explanation: "Cohésion territoriale : Réduction des disparités et amélioration de l’accès aux ressources et services.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Région transfrontalière » ?",
      choices: [
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière.",
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Recul de l’emploi industriel et transformation des systèmes productifs."
      ],
      answer: 1,
      explanation: "Région transfrontalière : Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Tourisme » ?",
      choices: [
        "Activité de déplacement temporaire générant des services et des flux.",
        "Concentration des hommes et activités sur les côtes.",
        "Réduction des disparités et amélioration de l’accès aux ressources et services.",
        "Infrastructure et services organisant les déplacements et échanges."
      ],
      answer: 0,
      explanation: "Tourisme : Activité de déplacement temporaire générant des services et des flux.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Intermédiaire",
      question: "Quelle définition correspond le mieux à « Métropolisation » ?",
      choices: [
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Grande ville concentrant population, emplois et fonctions de commandement.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
        "Concentration des fonctions stratégiques dans les grandes villes."
      ],
      answer: 3,
      explanation: "Métropolisation : Concentration des fonctions stratégiques dans les grandes villes.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Collectivité territoriale française disposant de compétences définies par la loi. » ?",
      choices: [
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Collectivité territoriale française disposant de compétences définies par la loi.",
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation."
      ],
      answer: 2,
      explanation: "Région : Collectivité territoriale française disposant de compétences définies par la loi.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Politiques visant à organiser la répartition des activités, équipements et services dans l’espace. » ?",
      choices: [
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
        "Concentration des hommes et activités sur les côtes.",
        "Réduction des disparités et amélioration de l’accès aux ressources et services.",
        "Infrastructure et services organisant les déplacements et échanges."
      ],
      answer: 0,
      explanation: "Aménagement du territoire : Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Grande ville concentrant population, emplois et fonctions de commandement. » ?",
      choices: [
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Politiques visant à organiser la répartition des activités, équipements et services dans l’espace.",
        "Grande ville concentrant population, emplois et fonctions de commandement.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques."
      ],
      answer: 2,
      explanation: "Métropole : Grande ville concentrant population, emplois et fonctions de commandement.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques. » ?",
      choices: [
        "Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements.",
        "Recul de l’emploi industriel et transformation des systèmes productifs.",
        "Territoire où se rencontrent des systèmes nationaux et des flux transfrontaliers.",
        "Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques."
      ],
      answer: 3,
      explanation: "DROM : Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques.",
      skill: "Notions, vocabulaire et compréhension"
    },
    {
      level: "Difficile",
      question: "Dans une étude de cas, quelle notion correspond à cette définition : « Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole. » ?",
      choices: [
        "Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation.",
        "Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
        "Concentration des hommes et activités sur les côtes.",
        "Infrastructure et services organisant les déplacements et échanges."
      ],
      answer: 1,
      explanation: "Dépendance ultramarine : Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole.",
      skill: "Notions, vocabulaire et compréhension"
    }
  ],
  exercises: [
    {
      title: "Définir : Région",
      level: "Facile",
      statement: "Définissez « Région » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Collectivité territoriale française disposant de compétences définies par la loi. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Métropole",
      level: "Facile",
      statement: "Expliquez pourquoi « Métropole » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Grande ville concentrant population, emplois et fonctions de commandement. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Dépendance ultramarine",
      level: "Facile",
      statement: "Distinguez « Dépendance ultramarine » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Expression à manier avec précaution pour analyser les liens économiques et institutionnels entre territoires ultramarins et métropole. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter :  attractivité",
      level: "Intermédiaire",
      statement: "Construisez un paragraphe argumenté mobilisant «  attractivité ».",
      correction: "Une réponse complète définit précisément la notion : Capacité d’un territoire à attirer habitants, entreprises, visiteurs ou investissements. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : Reconversion",
      level: "Intermédiaire",
      statement: "Analysez les acteurs, les échelles et les limites associés à « Reconversion ».",
      correction: "Une réponse complète définit précisément la notion : Transformation des activités et compétences d’un territoire après le déclin d’une spécialisation. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Définir : Réseau de transport",
      level: "Intermédiaire",
      statement: "Définissez « Réseau de transport » et illustrez-la par un exemple précis.",
      correction: "Une réponse complète définit précisément la notion : Infrastructure et services organisant les déplacements et échanges. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Expliquer : Région transfrontalière",
      level: "Intermédiaire",
      statement: "Expliquez pourquoi « Région transfrontalière » est un enjeu important du chapitre.",
      correction: "Une réponse complète définit précisément la notion : Espace organisé autour d’échanges et de coopérations de part et d’autre d’une frontière. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Distinguer : Métropolisation",
      level: "Difficile",
      statement: "Distinguez « Métropolisation » d’une notion proche.",
      correction: "Une réponse complète définit précisément la notion : Concentration des fonctions stratégiques dans les grandes villes. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Argumenter : Aménagement du territoire",
      level: "Difficile",
      statement: "Construisez un paragraphe argumenté mobilisant « Aménagement du territoire ».",
      correction: "Une réponse complète définit précisément la notion : Politiques visant à organiser la répartition des activités, équipements et services dans l’espace. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    },
    {
      title: "Analyser : DROM",
      level: "Difficile",
      statement: "Analysez les acteurs, les échelles et les limites associés à « DROM ».",
      correction: "Une réponse complète définit précisément la notion : Départements et régions d’outre-mer français, soumis à des statuts et adaptations spécifiques. Elle situe le contexte, identifie les acteurs concernés, mobilise un exemple pertinent et explique les enjeux plutôt que de simplement décrire.",
      skills: [
        "Connaissances",
        "Analyse",
        "Argumentation"
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources du cycle terminal — histoire-géographie / EMC",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/4368/enseigner-au-lycee-generaltechnologique",
      consultedAt: "2026-11-01",
      supports: [
        "La France et ses régions dans l’Union européenne et dans la mondialisation",
        "Programmes en vigueur du cycle terminal"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite à partir des programmes officiels du cycle terminal. Les exemples et documents doivent être approfondis avec les supports de cours ; relecture disciplinaire recommandée.",
  validationStatus: "draft"
},
  'hg-methodes': {
    title: "Méthodes : composition, étude critique de documents et croquis",
    objectives: [
      "Maîtriser les notions fondamentales de histoire-géographie liées à présentation du document et contexte historique.",
      "Utiliser une démarche rigoureuse pour analyser et résoudre une situation de histoire-géographie.",
      "Justifier les résultats, interpréter les démarches et identifier leurs limites."
    ],
    course: [
      { heading: "1. Présentation du document", body: ["En histoire-géographie, présentation du document constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement présentation du document, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "2. Contexte historique", body: ["En histoire-géographie, contexte historique constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement contexte historique, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "3. Changement d’échelle", body: ["En histoire-géographie, changement d’échelle constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement changement d’échelle, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "4. Acteurs et territoires", body: ["En histoire-géographie, acteurs et territoires constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement acteurs et territoires, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "5. Causalité", body: ["En histoire-géographie, causalité constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement causalité, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] }
    
      ,{ heading: 'Passer de la description à l’explication géographique', body: ['Décrire un territoire consiste à sélectionner des informations utiles sur sa localisation, ses populations, ses activités et ses réseaux. Expliquer consiste à relier ces éléments à des facteurs, des acteurs et des dynamiques. Une copie ne doit pas se limiter à nommer des lieux : elle doit montrer pourquoi les phénomènes se produisent et quelles conséquences ils entraînent.', 'L’analyse de documents géographiques exige de lire la légende, l’échelle, la date, la projection et la source. Une carte thématique ne montre que les phénomènes choisis par son auteur. Les contrastes doivent être interprétés avec prudence et replacés dans leur contexte spatial et temporel.', 'Un croquis de synthèse doit répondre à une problématique. La légende organise les informations en parties hiérarchisées et les figurés traduisent la nature des phénomènes : ponctuels, linéaires ou surfaciques. La lisibilité dépend de la sélection des informations autant que de leur exactitude.'] }],
    keyPoints: [
      "Présentation du document doit être défini, contextualisé et justifié.",
      "Contexte historique doit être défini, contextualisé et justifié.",
      "Changement d’échelle doit être défini, contextualisé et justifié.",
      "Acteurs et territoires doit être défini, contextualisé et justifié.",
      "Causalité doit être défini, contextualisé et justifié."
    ],
    method: [
      "Lire précisément la consigne et identifier le problème.",
      "Définir les notions et expliciter les hypothèses.",
      "Organiser les étapes du raisonnement.",
      "Justifier chaque affirmation avec une donnée, une propriété ou un exemple pertinent.",
      "Vérifier la cohérence de la conclusion et préciser ses limites."
    ],
    flashcards: [
      { front: "Comment définir présentation du document dans le cadre de histoire-géographie ? (repère 1)", back: "Présentation du document : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir contexte historique dans le cadre de histoire-géographie ? (repère 2)", back: "Contexte historique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir changement d’échelle dans le cadre de histoire-géographie ? (repère 3)", back: "Changement d’échelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir acteurs et territoires dans le cadre de histoire-géographie ? (repère 4)", back: "Acteurs et territoires : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de histoire-géographie ? (repère 5)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir chronologie dans le cadre de histoire-géographie ? (repère 6)", back: "Chronologie : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mise en relation dans le cadre de histoire-géographie ? (repère 7)", back: "Mise en relation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir croquis organisé dans le cadre de histoire-géographie ? (repère 8)", back: "Croquis organisé : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir légende hiérarchisée dans le cadre de histoire-géographie ? (repère 9)", back: "Légende hiérarchisée : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir critique de source dans le cadre de histoire-géographie ? (repère 10)", back: "Critique de source : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir présentation du document dans le cadre de histoire-géographie ? (repère 11)", back: "Présentation du document : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir contexte historique dans le cadre de histoire-géographie ? (repère 12)", back: "Contexte historique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir changement d’échelle dans le cadre de histoire-géographie ? (repère 13)", back: "Changement d’échelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir acteurs et territoires dans le cadre de histoire-géographie ? (repère 14)", back: "Acteurs et territoires : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de histoire-géographie ? (repère 15)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir chronologie dans le cadre de histoire-géographie ? (repère 16)", back: "Chronologie : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mise en relation dans le cadre de histoire-géographie ? (repère 17)", back: "Mise en relation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir croquis organisé dans le cadre de histoire-géographie ? (repère 18)", back: "Croquis organisé : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir légende hiérarchisée dans le cadre de histoire-géographie ? (repère 19)", back: "Légende hiérarchisée : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir critique de source dans le cadre de histoire-géographie ? (repère 20)", back: "Critique de source : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir présentation du document dans le cadre de histoire-géographie ? (repère 21)", back: "Présentation du document : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir contexte historique dans le cadre de histoire-géographie ? (repère 22)", back: "Contexte historique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir changement d’échelle dans le cadre de histoire-géographie ? (repère 23)", back: "Changement d’échelle : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir acteurs et territoires dans le cadre de histoire-géographie ? (repère 24)", back: "Acteurs et territoires : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de histoire-géographie ? (repère 25)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir chronologie dans le cadre de histoire-géographie ? (repère 26)", back: "Chronologie : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mise en relation dans le cadre de histoire-géographie ? (repère 27)", back: "Mise en relation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir croquis organisé dans le cadre de histoire-géographie ? (repère 28)", back: "Croquis organisé : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir légende hiérarchisée dans le cadre de histoire-géographie ? (repère 29)", back: "Légende hiérarchisée : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir critique de source dans le cadre de histoire-géographie ? (repère 30)", back: "Critique de source : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." }
    ],
    quiz: [
      { level: "Facile", question: "Face à une situation mobilisant « présentation du document », quelle démarche est la plus rigoureuse ? — cas 1", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir présentation du document, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « contexte historique », quelle démarche est la plus rigoureuse ? — cas 2", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir contexte historique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « changement d’échelle », quelle démarche est la plus rigoureuse ? — cas 3", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir changement d’échelle, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « acteurs et territoires », quelle démarche est la plus rigoureuse ? — cas 4", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir acteurs et territoires, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « causalité », quelle démarche est la plus rigoureuse ? — cas 5", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir causalité, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « chronologie », quelle démarche est la plus rigoureuse ? — cas 6", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir chronologie, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « mise en relation », quelle démarche est la plus rigoureuse ? — cas 7", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mise en relation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « croquis organisé », quelle démarche est la plus rigoureuse ? — cas 8", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir croquis organisé, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « légende hiérarchisée », quelle démarche est la plus rigoureuse ? — cas 9", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir légende hiérarchisée, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « critique de source », quelle démarche est la plus rigoureuse ? — cas 10", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir critique de source, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « présentation du document », quelle démarche est la plus rigoureuse ? — cas 11", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir présentation du document, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « contexte historique », quelle démarche est la plus rigoureuse ? — cas 12", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir contexte historique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « changement d’échelle », quelle démarche est la plus rigoureuse ? — cas 13", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir changement d’échelle, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « acteurs et territoires », quelle démarche est la plus rigoureuse ? — cas 14", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir acteurs et territoires, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « causalité », quelle démarche est la plus rigoureuse ? — cas 15", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir causalité, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « chronologie », quelle démarche est la plus rigoureuse ? — cas 16", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir chronologie, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « mise en relation », quelle démarche est la plus rigoureuse ? — cas 17", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mise en relation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « croquis organisé », quelle démarche est la plus rigoureuse ? — cas 18", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir croquis organisé, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « légende hiérarchisée », quelle démarche est la plus rigoureuse ? — cas 19", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir légende hiérarchisée, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « critique de source », quelle démarche est la plus rigoureuse ? — cas 20", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir critique de source, vérifier les conditions de mobilisation et justifier la conclusion." }
    ],
    exercises: [
      { title: "Application guidée : présentation du document — situation 1", level: "Facile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de présentation du document est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit présentation du document dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : contexte historique — situation 2", level: "Intermédiaire", statement: "Présente une situation de histoire-géographie dans laquelle la notion de contexte historique est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit contexte historique dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : changement d’échelle — situation 3", level: "Difficile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de changement d’échelle est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit changement d’échelle dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : acteurs et territoires — situation 4", level: "Facile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de acteurs et territoires est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit acteurs et territoires dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : causalité — situation 5", level: "Intermédiaire", statement: "Présente une situation de histoire-géographie dans laquelle la notion de causalité est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit causalité dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : chronologie — situation 6", level: "Difficile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de chronologie est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit chronologie dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : mise en relation — situation 7", level: "Facile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de mise en relation est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit mise en relation dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : croquis organisé — situation 8", level: "Intermédiaire", statement: "Présente une situation de histoire-géographie dans laquelle la notion de croquis organisé est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit croquis organisé dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : légende hiérarchisée — situation 9", level: "Difficile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de légende hiérarchisée est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit légende hiérarchisée dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : critique de source — situation 10", level: "Facile", statement: "Présente une situation de histoire-géographie dans laquelle la notion de critique de source est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit critique de source dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] }
    ],
    sources: [{ title: 'Programme d’histoire-géographie de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel / Éduscol', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921243A.htm', consultedAt: '2026-11-04', supports: ['Programme officiel d’histoire-géographie'] }],
    sourceNote: 'Ressource de travail structurée autour des compétences du programme. Les exemples sont génériques et doivent être adaptés aux cours et documents de classe. Statut draft : relecture disciplinaire nécessaire.',
    validationStatus: 'draft'
  }
};
