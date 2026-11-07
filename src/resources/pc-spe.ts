import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'pc-composition': {
    title: 'Déterminer la composition d’un système par des méthodes physiques et chimiques',
    objectives: [
      'Exploiter des mesures physiques pour déterminer une concentration ou une quantité de matière.',
      'Modéliser les transformations acide-base par transfert d’ion hydrogène H⁺.',
      'Analyser un titrage pH-métrique ou conductimétrique et repérer l’équivalence.',
      'Choisir une méthode adaptée et expliciter ses limites.'
    ],
    course: [
      { heading: '1. Acides, bases et couples de Brønsted', body: [
        'Un acide de Brønsted est une espèce capable de céder un ion hydrogène H⁺ ; une base de Brønsted est capable de capter un ion H⁺. Un couple acide/base associe deux espèces qui ne diffèrent que par un H⁺.',
        'Une réaction acide-base s’interprète comme un transfert de H⁺ entre un acide et une base. Pour écrire son équation, on identifie les deux couples puis on équilibre les espèces et les charges.',
        'Une espèce amphotère peut se comporter comme un acide ou comme une base selon le partenaire réactionnel. L’eau est un exemple d’espèce amphotère.'
      ]},
      { heading: '2. pH et concentration en ions oxonium', body: [
        'Pour une solution aqueuse, le pH est relié à la concentration en ions oxonium par pH = −log([H₃O⁺]/c°), avec c° = 1 mol·L⁻¹. Numériquement, lorsque [H₃O⁺] est exprimée en mol·L⁻¹, on utilise souvent pH = −log([H₃O⁺]).',
        'La relation réciproque est [H₃O⁺] = c° × 10^(−pH). Une variation d’une unité de pH correspond à un facteur dix sur la concentration en ions oxonium.',
        'Il faut conserver les unités et distinguer le pH, grandeur sans unité, de la concentration exprimée en mol·L⁻¹.'
      ]},
      { heading: '3. Déterminer une concentration par méthode physique', body: [
        'La loi de Beer-Lambert relie l’absorbance A à la concentration c d’une espèce absorbante : A = k × c dans les conditions où la loi est applicable. Une gamme étalon permet de déterminer k ou d’utiliser une droite d’étalonnage.',
        'La conductivité d’une solution dépend des ions qu’elle contient et de leurs concentrations. Dans le domaine de validité de la loi de Kohlrausch, la conductivité s’écrit comme une somme des contributions ioniques : σ = Σ λᵢ × [Xᵢ].',
        'La quantité de matière d’un gaz peut être reliée à sa pression, son volume et sa température par l’équation d’état du gaz parfait : pV = nRT. Les unités doivent être cohérentes avec la valeur de R utilisée.'
      ]},
      { heading: '4. Titrage acide-base et équivalence', body: [
        'Un titrage permet de déterminer la quantité de matière ou la concentration d’une espèce en la faisant réagir avec une solution titrante de concentration connue. La réaction support doit être rapide, totale et unique dans les conditions de l’expérience.',
        'À l’équivalence, les réactifs ont été introduits dans les proportions stœchiométriques de l’équation de réaction. Pour une réaction 1:1, n(acide) initial = n(base) versée à l’équivalence ; pour d’autres coefficients, il faut utiliser les proportions de l’équation.',
        'Un suivi pH-métrique représente le pH en fonction du volume versé. L’équivalence se repère par la zone de variation rapide du pH, notamment à l’aide de la méthode des tangentes ou de la dérivée.',
        'Un suivi conductimétrique exploite la variation de conductivité au cours de l’ajout du titrant. La rupture de pente de la courbe permet de repérer l’équivalence.'
      ]},
      { heading: '5. Choisir et exploiter une méthode', body: [
        'Le choix dépend de la nature de l’espèce recherchée, des propriétés mesurables, de la présence d’interférents et de la gamme de concentrations. Une méthode d’étalonnage nécessite des solutions de référence adaptées.',
        'Une mesure n’est exploitable que si le protocole, les unités, les incertitudes et le domaine de validité de la relation utilisée sont pris en compte. Une droite d’étalonnage ne doit pas être extrapolée sans justification.'
      ]}
    ],
    keyPoints: [
      'Un acide cède H⁺ ; une base capte H⁺.',
      'Deux espèces d’un même couple acide/base diffèrent d’un ion H⁺.',
      'pH = −log([H₃O⁺]/c°) et [H₃O⁺] = c° × 10^(−pH).',
      'Beer-Lambert relie l’absorbance à la concentration dans son domaine de validité.',
      'La loi de Kohlrausch relie la conductivité aux concentrations ioniques.',
      'À l’équivalence, les quantités de matière respectent les coefficients stœchiométriques.',
      'Les courbes pH-métriques et conductimétriques permettent de repérer l’équivalence.'
    ],
    method: [
      'Identifier les espèces présentes et les couples acide/base éventuels.',
      'Écrire et équilibrer l’équation de la transformation étudiée.',
      'Choisir la relation adaptée à la mesure et vérifier son domaine de validité.',
      'Convertir les données dans des unités cohérentes.',
      'Pour un titrage, déterminer les proportions stœchiométriques à l’équivalence avant tout calcul.',
      'Présenter le résultat avec son unité et une précision cohérente avec les mesures.'
    ],
    flashcards: [
      { front: 'Qu’est-ce qu’un acide de Brønsted ?', back: 'Une espèce capable de céder un ion hydrogène H⁺.' },
      { front: 'Qu’est-ce qu’une base de Brønsted ?', back: 'Une espèce capable de capter un ion hydrogène H⁺.' },
      { front: 'Comment reconnaître deux espèces d’un même couple acide/base ?', back: 'Elles ne diffèrent que par un ion hydrogène H⁺.' },
      { front: 'Qu’est-ce qu’une espèce amphotère ?', back: 'Une espèce pouvant se comporter comme un acide ou comme une base.' },
      { front: 'Quelle relation relie le pH à [H₃O⁺] ?', back: 'pH = −log([H₃O⁺]/c°), avec c° = 1 mol·L⁻¹.' },
      { front: 'Comment retrouver [H₃O⁺] à partir du pH ?', back: '[H₃O⁺] = c° × 10^(−pH).' },
      { front: 'Que signifie une diminution du pH d’une unité ?', back: 'La concentration en ions oxonium est multipliée par dix.' },
      { front: 'Que relie la loi de Beer-Lambert ?', back: 'L’absorbance d’une solution à la concentration de l’espèce absorbante, dans son domaine de validité.' },
      { front: 'Que mesure un spectrophotomètre ?', back: 'L’absorbance d’un échantillon à une longueur d’onde choisie.' },
      { front: 'Que relie la loi de Kohlrausch ?', back: 'La conductivité d’une solution aux concentrations des ions présents, dans son domaine de validité.' },
      { front: 'Quelle relation d’état utilise-t-on pour un gaz parfait ?', back: 'pV = nRT.' },
      { front: 'Qu’est-ce qu’un titrage ?', back: 'Une méthode de dosage fondée sur une réaction entre l’espèce recherchée et un réactif titrant de concentration connue.' },
      { front: 'Que signifie l’équivalence d’un titrage ?', back: 'Les réactifs ont été introduits dans les proportions stœchiométriques de la réaction support.' },
      { front: 'Pourquoi faut-il équilibrer l’équation avant le calcul à l’équivalence ?', back: 'Les coefficients stœchiométriques déterminent les proportions entre les quantités de matière.' },
      { front: 'Que représente le volume équivalent ?', back: 'Le volume de solution titrante versé lorsque l’équivalence est atteinte.' },
      { front: 'Quel indice repère l’équivalence sur une courbe pH-métrique ?', back: 'La zone de variation rapide du pH, associée au point d’inflexion dans un cas usuel.' },
      { front: 'Quel indice repère l’équivalence en conductimétrie ?', back: 'Une rupture de pente sur la courbe de conductivité en fonction du volume versé.' },
      { front: 'Pourquoi une droite d’étalonnage ne doit-elle pas être extrapolée sans précaution ?', back: 'La relation linéaire peut ne plus être valable en dehors de la gamme étalonnée.' },
      { front: 'Quelle condition doit vérifier la réaction support d’un titrage ?', back: 'Elle doit être rapide, totale et unique dans les conditions de l’expérience.' },
      { front: 'Pourquoi faut-il vérifier les unités dans pV = nRT ?', back: 'La constante R est associée à un système d’unités précis ; des unités incohérentes faussent le résultat.' },
      { front: 'Que représente l’absorbance ?', back: 'Une grandeur caractérisant l’atténuation d’un faisceau lumineux traversant une solution à une longueur d’onde donnée.' },
      { front: 'À quoi sert une gamme étalon ?', back: 'À établir une relation entre une grandeur mesurée et des concentrations connues afin de doser un échantillon inconnu.' },
      { front: 'Qu’est-ce que la conductivité d’une solution ?', back: 'Une grandeur qui traduit sa capacité à conduire le courant électrique grâce aux ions mobiles qu’elle contient.' },
      { front: 'Quelle différence entre conductance et conductivité ?', back: 'La conductance caractérise une cellule de mesure et dépend de sa géométrie ; la conductivité est une grandeur propre à la solution.' },
      { front: 'Que représente λᵢ dans la loi de Kohlrausch ?', back: 'La conductivité molaire ionique de l’ion i dans les conditions considérées.' },
      { front: 'Quelles grandeurs interviennent dans pV = nRT ?', back: 'La pression p, le volume V, la quantité de matière n, la température absolue T et la constante des gaz parfaits R.' },
      { front: 'Pourquoi la température doit-elle être exprimée en kelvins dans pV = nRT ?', back: 'Parce que l’équation d’état utilise la température thermodynamique absolue.' },
      { front: 'Que désigne le réactif titrant ?', back: 'L’espèce de concentration connue, ajoutée progressivement à l’échantillon contenant l’espèce titrée.' },
      { front: 'Pourquoi une réaction de titrage doit-elle être unique ?', back: 'Pour que la quantité de titrant consommée soit reliée sans ambiguïté à la quantité de l’espèce recherchée.' },
      { front: 'Que permet la méthode des tangentes lors d’un titrage pH-métrique ?', back: 'D’estimer le volume équivalent à partir de la zone de saut de pH sur la courbe.' }
    ],
    quiz: [
      { level: 'Facile', question: 'Une base de Brønsted est une espèce qui :', choices: ['Cède H⁺', 'Capte H⁺', 'Cède un électron', 'Capte un neutron'], answer: 1, explanation: 'Une base de Brønsted capte un ion hydrogène H⁺.' },
      { level: 'Facile', question: 'Deux espèces conjuguées d’un même couple acide/base diffèrent par :', choices: ['Un ion H⁺', 'Un électron', 'Un atome d’oxygène', 'Une molécule d’eau entière'], answer: 0, explanation: 'La définition d’un couple acide/base de Brønsted repose sur un transfert de H⁺.' },
      { level: 'Intermédiaire', question: 'Une solution a [H₃O⁺] = 1,0 × 10⁻³ mol·L⁻¹. Son pH vaut :', choices: ['1', '2', '3', '11'], answer: 2, explanation: 'pH = −log(10⁻³) = 3. Le pH est l’opposé du logarithme décimal de la concentration en ions oxonium.' },
      { level: 'Intermédiaire', question: 'Dans son domaine de validité, la loi de Beer-Lambert relie principalement :', choices: ['La pression au volume', 'L’absorbance à la concentration', 'La masse à la température', 'Le pH au volume total'], answer: 1, explanation: 'L’absorbance est proportionnelle à la concentration de l’espèce absorbante pour les conditions adaptées.' },
      { level: 'Intermédiaire', question: 'À l’équivalence d’un titrage, les réactifs sont dans les proportions :', choices: ['Massiques', 'Stœchiométriques', 'Toujours égales en volume', 'Toujours égales en concentration'], answer: 1, explanation: 'L’équivalence est définie par le respect des coefficients de l’équation de réaction.' },
      { level: 'Difficile', question: 'On titre un acide HA par HO⁻ selon HA + HO⁻ → A⁻ + H₂O. À l’équivalence, quelle relation est correcte ?', choices: ['n(HA) initial = n(HO⁻) versée', '2n(HA) initial = n(HO⁻) versée', 'n(HA) initial = 2n(HO⁻) versée', 'n(HA) initial + n(HO⁻) versée = 0'], answer: 0, explanation: 'Les coefficients stœchiométriques sont 1 et 1 : les quantités introduites à l’équivalence sont égales.' },
      { level: 'Intermédiaire', question: 'Sur une courbe conductimétrique de titrage, l’équivalence est souvent repérée par :', choices: ['Une rupture de pente', 'Un maximum systématique de pH', 'Une température nulle', 'Une absorbance toujours nulle'], answer: 0, explanation: 'La composition ionique change de régime au passage de l’équivalence, ce qui peut produire une rupture de pente.' },
      { level: 'Difficile', question: 'Pourquoi faut-il rester dans la gamme d’une droite d’étalonnage ?', choices: ['Parce que la mesure devient nécessairement nulle', 'Parce que la relation utilisée peut ne plus être linéaire hors de cette gamme', 'Parce que les unités changent automatiquement', 'Parce que la concentration ne peut jamais être calculée'], answer: 1, explanation: 'La proportionnalité expérimentale est établie sur une plage donnée ; l’extrapolation n’est pas garantie.' },
      { level: 'Facile', question: 'Le pH est une grandeur :', choices: ['Sans unité', 'En mol·L⁻¹', 'En grammes', 'En pascals'], answer: 0, explanation: 'Le pH est défini par un logarithme d’un rapport de concentrations et est sans unité.' },
      { level: 'Intermédiaire', question: 'Une espèce amphotère peut :', choices: ['Seulement céder H⁺', 'Seulement capter H⁺', 'Céder ou capter H⁺ selon le partenaire', 'Uniquement échanger des électrons'], answer: 2, explanation: 'Une espèce amphotère peut jouer le rôle d’acide ou de base selon la réaction.' },
      { level: 'Intermédiaire', question: 'Dans une solution aqueuse, l’ion caractéristique de l’acidité utilisé dans la relation du pH est :', choices: ['H₃O⁺', 'HO⁻', 'Na⁺', 'Cl⁻'], answer: 0, explanation: 'Le pH est défini à partir de l’activité, approximée ici par la concentration, des ions oxonium H₃O⁺.' },
      { level: 'Intermédiaire', question: 'Dans une gamme étalon, les concentrations des solutions de référence sont :', choices: ['Inconnues', 'Connues', 'Toutes nécessairement nulles', 'Sans lien avec la mesure'], answer: 1, explanation: 'Les valeurs connues permettent d’établir la relation d’étalonnage.' },
      { level: 'Difficile', question: 'Pour un gaz parfait, si la quantité de matière et la température sont constantes, une diminution du volume entraîne :', choices: ['Une diminution de la pression', 'Une augmentation de la pression', 'Une pression constante', 'Une température nécessairement nulle'], answer: 1, explanation: 'Avec pV = nRT et n,T constants, p est inversement proportionnelle à V.' },
      { level: 'Intermédiaire', question: 'Lors d’un titrage, la solution titrante est généralement :', choices: ['De concentration connue', 'De concentration inconnue', 'Toujours de même volume que l’échantillon', 'Sans réactif'], answer: 0, explanation: 'La concentration connue du titrant permet de déterminer la quantité de matière introduite.' },
      { level: 'Difficile', question: 'Pour une réaction 2 A + B → produits, quelle relation s’applique à l’équivalence ?', choices: ['n(A) = n(B)', 'n(A)/2 = n(B)', '2n(A) = n(B)', 'n(A) + n(B) = 0'], answer: 1, explanation: 'Les quantités à l’équivalence sont dans le rapport des coefficients : n(A)/2 = n(B)/1.' },
      { level: 'Intermédiaire', question: 'Quel instrument permet un suivi pH-métrique ?', choices: ['Un pH-mètre', 'Un spectrophotomètre uniquement', 'Une balance', 'Un dynamomètre'], answer: 0, explanation: 'Le pH-mètre mesure le pH de la solution au cours de l’ajout du titrant.' },
      { level: 'Intermédiaire', question: 'Quel instrument permet de mesurer l’absorbance ?', choices: ['Un spectrophotomètre', 'Un conductimètre', 'Un manomètre', 'Un thermomètre'], answer: 0, explanation: 'Le spectrophotomètre mesure l’absorbance à une longueur d’onde choisie.' },
      { level: 'Difficile', question: 'Pourquoi la réaction support d’un titrage doit-elle être totale ?', choices: ['Pour que la transformation soit quantitative selon l’équation choisie', 'Pour éviter d’écrire une équation', 'Pour rendre le volume équivalent égal au volume initial', 'Pour supprimer les coefficients stœchiométriques'], answer: 0, explanation: 'Une réaction totale permet de relier quantitativement l’avancement aux quantités introduites.' },
      { level: 'Intermédiaire', question: 'Quelle grandeur doit être convertie en kelvins dans l’équation des gaz parfaits ?', choices: ['La température', 'La pression', 'Le volume', 'La quantité de matière'], answer: 0, explanation: 'L’équation pV = nRT utilise la température absolue exprimée en kelvins.' },
      { level: 'Intermédiaire', question: 'Lors d’un titrage pH-métrique, quelle grandeur est suivie en fonction du volume de titrant ajouté ?', choices: ['Le pH', 'La masse molaire', 'La longueur d’onde', 'La quantité de lumière incidente uniquement'], answer: 0, explanation: 'Le suivi pH-métrique consiste à mesurer le pH au fur et à mesure de l’ajout du titrant.' }
    ],
    exercises: [
      { title: 'Calculer un pH à partir d’une concentration', level: 'Facile', statement: 'Une solution aqueuse a une concentration en ions oxonium [H₃O⁺] = 2,0 × 10⁻⁴ mol·L⁻¹. Calculer son pH.', correction: 'pH = −log(2,0 × 10⁻⁴) ≈ 3,70. Le pH est sans unité.', skills: ['Logarithme décimal', 'Application numérique'], hints: ['Utiliser pH = −log([H₃O⁺]/c°).'] },
      { title: 'Retrouver une concentration à partir du pH', level: 'Intermédiaire', statement: 'Le pH d’une solution vaut 2,5. Déterminer sa concentration en ions oxonium.', correction: '[H₃O⁺] = c° × 10^(−pH) = 1 × 10⁻²⋅⁵ mol·L⁻¹ ≈ 3,2 × 10⁻³ mol·L⁻¹.', skills: ['Fonction réciproque du logarithme', 'Chiffres significatifs'], hints: ['Isoler la concentration dans la relation du pH.'] },
      { title: 'Exploiter un titrage 1:1', level: 'Intermédiaire', statement: 'On titre 20,0 mL d’une solution d’acide HA par une solution d’hydroxyde de sodium de concentration 0,100 mol·L⁻¹. L’équivalence est obtenue pour 15,0 mL de titrant. La réaction est HA + HO⁻ → A⁻ + H₂O. Déterminer la concentration initiale de HA.', correction: 'À l’équivalence, n(HA) = n(HO⁻) = Cb × Véq = 0,100 × 0,0150 = 1,50 × 10⁻³ mol. Donc Ca = n/Va = 1,50 × 10⁻³ / 0,0200 = 0,0750 mol·L⁻¹.', skills: ['Équivalence', 'Stœchiométrie', 'Concentration molaire'], hints: ['Commencer par calculer la quantité de matière de titrant versée à l’équivalence.'] },
      { title: 'Choisir une méthode de dosage', level: 'Difficile', statement: 'On souhaite déterminer la concentration d’une espèce colorée dissoute dans l’eau. Proposer une méthode physique adaptée, décrire le principe de l’étalonnage et citer une limite à vérifier.', correction: 'On peut utiliser la spectrophotométrie. On mesure l’absorbance de plusieurs solutions étalons de concentrations connues à une longueur d’onde adaptée, puis on trace A en fonction de c. On mesure ensuite l’absorbance de l’échantillon et on détermine sa concentration par lecture ou calcul sur la droite. Il faut vérifier que l’échantillon se situe dans la gamme étalonnée, que les autres espèces n’interfèrent pas et que les conditions expérimentales sont comparables.', skills: ['Choix d’un protocole', 'Étalonnage', 'Esprit critique'], hints: ['Relier la couleur de l’espèce à une mesure d’absorbance.'] },
      { title: 'Identifier un couple acide-base', level: 'Facile', statement: 'Dans le couple NH₄⁺/NH₃, identifier l’acide et la base et préciser la transformation reliant les deux espèces.', correction: 'NH₄⁺ est l’acide car il peut céder H⁺ ; NH₃ est la base car elle peut capter H⁺. La demi-équation associée s’écrit NH₄⁺ ⇌ NH₃ + H⁺.', skills: ['Couples acide-base', 'Transfert de proton'] },
      { title: 'Comparer deux pH', level: 'Intermédiaire', statement: 'Une solution A a un pH de 3 et une solution B un pH de 5. Comparer leurs concentrations en ions oxonium.', correction: '[H₃O⁺]A = 10⁻³ mol·L⁻¹ et [H₃O⁺]B = 10⁻⁵ mol·L⁻¹. La solution A est donc 100 fois plus concentrée en ions oxonium que la solution B.', skills: ['Logarithme décimal', 'Comparaison de concentrations'] },
      { title: 'Équivalence avec coefficients non unitaires', level: 'Difficile', statement: 'Une réaction de titrage s’écrit 2 A + B → produits. À l’équivalence, la quantité de matière de B versée vaut 4,0 mmol. Déterminer la quantité de matière de A initialement présente.', correction: 'À l’équivalence, n(A)/2 = n(B)/1. Donc n(A) = 2 × 4,0 = 8,0 mmol.', skills: ['Stœchiométrie', 'Équivalence'] },
      { title: 'Exploiter une relation de Beer-Lambert', level: 'Intermédiaire', statement: 'Une droite d’étalonnage suit A = 250 c, avec c exprimée en mol·L⁻¹. Un échantillon présente A = 0,50. Déterminer sa concentration, en supposant que l’échantillon est dans la gamme étalonnée.', correction: 'c = A/250 = 0,50/250 = 2,0 × 10⁻³ mol·L⁻¹.', skills: ['Étalonnage', 'Proportionnalité'] },
      { title: 'Vérifier les unités d’un gaz parfait', level: 'Difficile', statement: 'Expliquer quelles unités doivent être utilisées dans pV = nRT si R = 8,314 J·mol⁻¹·K⁻¹.', correction: 'Avec cette valeur de R, on utilise p en pascals, V en mètres cubes, n en moles et T en kelvins. Le produit pV s’exprime alors en joules.', skills: ['Analyse dimensionnelle', 'Gaz parfaits'] },
      { title: 'Interpréter une courbe de titrage', level: 'Intermédiaire', statement: 'Sur une courbe pH = f(V) présentant un saut marqué autour de 12,5 mL, expliquer comment estimer le volume équivalent et quelle information supplémentaire est nécessaire pour calculer la concentration de l’espèce titrée.', correction: 'Le volume équivalent peut être estimé au voisinage du point d’inflexion, au milieu du saut de pH, soit environ 12,5 mL. Pour calculer la concentration, il faut aussi connaître la concentration du titrant, le volume initial prélevé et l’équation équilibrée de la réaction.', skills: ['Lecture graphique', 'Titrage', 'Données nécessaires'] }
    ],
    revisionSheets: [{ title: 'Fiche méthode — composition d’un système', summary: ['Identifier les espèces et les couples acide/base.', 'Choisir une mesure physique ou un titrage adapté.', 'Exploiter les relations en respectant leurs domaines de validité.'], mustKnow: ['Acide : cède H⁺ ; base : capte H⁺.', 'pH = −log([H₃O⁺]/c°).', 'À l’équivalence, les proportions sont stœchiométriques.', 'Beer-Lambert : absorbance et concentration ; Kohlrausch : conductivité et concentrations ioniques.'], methods: ['Écrire la réaction support et l’équilibrer.', 'Identifier les données et convertir les unités.', 'Établir la relation à l’équivalence avant de calculer.', 'Conclure avec unité et précision adaptée.'] }],
    sources: [{ title: 'Programme de physique-chimie de terminale générale — spécialité', institution: 'Ministère de l’Éducation nationale, Bulletin officiel spécial n° 8 du 25 juillet 2019', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm', consultedAt: '2026-11-01', supports: ['Déterminer la composition d’un système par des méthodes physiques et chimiques', 'Transformations acide-base', 'Méthodes physiques et chimiques de dosage'] }, { title: 'Programmes et ressources en physique-chimie — voie générale et technologique', institution: 'Éduscol', url: 'https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt', consultedAt: '2026-11-01', supports: ['Périmètre du programme en vigueur et ressources d’accompagnement'] }],
    sourceNote: 'Ressource de travail rédigée à partir du programme officiel de spécialité physique-chimie de Terminale. Les relations sont à appliquer dans leurs domaines de validité ; les activités expérimentales dépendent du matériel et des protocoles de la classe. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'pc-evolution': {
    title: 'Modéliser l’évolution temporelle d’un système, siège d’une transformation',
    objectives: [
      'Suivre expérimentalement l’évolution d’une transformation chimique au cours du temps.',
      'Exploiter des mesures pour déterminer une vitesse volumique de réaction.',
      'Identifier les facteurs cinétiques et interpréter un temps de demi-réaction.',
      'Modéliser une évolution temporelle à l’aide d’une loi cinétique ou d’une équation différentielle simple.'
    ],
    course: [
      { heading: '1. Suivi temporel d’une transformation', body: [
        'Un suivi cinétique consiste à mesurer une grandeur physique liée à l’avancement ou à la concentration d’une espèce au cours du temps. Selon le système, on peut suivre l’absorbance, la conductivité, le pH, la pression ou prélever des échantillons à des dates définies.',
        'La grandeur mesurée doit être reliée à l’évolution chimique par une relation établie et utilisée dans son domaine de validité. Un étalonnage peut être nécessaire pour passer d’une mesure à une concentration.',
        'Le prélèvement et la mesure ne doivent pas perturber de manière significative le système étudié. Lorsque c’est nécessaire, on ralentit ou on arrête temporairement la transformation dans l’échantillon par une méthode adaptée.'
      ]},
      { heading: '2. Vitesse volumique de réaction', body: [
        'Pour un volume réactionnel V constant, la vitesse volumique de réaction est v(t) = (1/V) × dx/dt, où x est l’avancement et t le temps. Elle s’exprime usuellement en mol·L⁻¹·s⁻¹.',
        'La vitesse est liée à la pente de la tangente à la courbe x = f(t). Elle peut aussi être déterminée à partir de l’évolution d’une concentration, en tenant compte du coefficient stœchiométrique et du signe associé à un réactif consommé ou à un produit formé.',
        'La vitesse est généralement plus élevée au début d’une transformation puis diminue lorsque les concentrations des réactifs diminuent. Cette évolution dépend toutefois du mécanisme et des conditions expérimentales.'
      ]},
      { heading: '3. Facteurs cinétiques', body: [
        'La température est un facteur cinétique : une augmentation de température accélère généralement une transformation chimique. Elle modifie la proportion de collisions conduisant effectivement à une transformation.',
        'La concentration des réactifs peut influencer la vitesse : une concentration plus élevée augmente souvent la fréquence des rencontres entre entités réactives. La dépendance exacte relève de la loi de vitesse du système étudié.',
        'Un catalyseur augmente la vitesse d’une transformation en proposant un chemin réactionnel de plus faible énergie d’activation. Il est régénéré au cours du mécanisme et ne modifie pas l’état final d’équilibre d’un système réversible.'
      ]},
      { heading: '4. Temps de demi-réaction et modélisation', body: [
        'Le temps de demi-réaction t₁/₂ est la durée nécessaire pour que l’avancement atteigne la moitié de sa valeur finale : x(t₁/₂) = x_f/2. Il se lit sur une courbe d’avancement ou sur une grandeur qui lui est reliée de manière monotone.',
        'Pour une cinétique d’ordre 1 par rapport à un réactif A dans les conditions considérées, la concentration vérifie [A](t) = [A]₀ e^(−kt), avec k en s⁻¹ si le temps est exprimé en secondes. On en déduit t₁/₂ = ln(2)/k.',
        'Une équation différentielle traduit la variation instantanée d’une grandeur. Sa solution doit être compatible avec la condition initiale et les hypothèses du modèle. Il faut distinguer un modèle cinétique d’ordre 1 d’une loi universelle : l’ordre dépend de la transformation étudiée.'
      ]},
      { heading: '5. Exploiter et discuter un modèle', body: [
        'Pour confronter un modèle aux mesures, on représente les données, on estime les paramètres et on compare les valeurs calculées aux observations. Les écarts peuvent provenir des incertitudes, d’une approximation ou d’un modèle inadapté.',
        'Une transformation peut être suivie par une méthode continue ou discontinue. Le choix dépend de la durée caractéristique, des grandeurs accessibles et de la précision attendue.',
        'Une conclusion cinétique doit préciser les conditions expérimentales, les unités, la méthode de détermination de la vitesse et les limites de l’interprétation.'
      ]}
    ],
    keyPoints: [
      'Un suivi cinétique relie une mesure à l’évolution d’un système au cours du temps.',
      'Pour un volume constant, v(t) = (1/V) × dx/dt.',
      'La vitesse instantanée se lit à partir de la pente de la tangente à la courbe d’avancement.',
      'Température, concentration et catalyseur peuvent modifier la vitesse.',
      'Un catalyseur accélère la transformation sans modifier l’état final d’équilibre.',
      'Le temps de demi-réaction correspond à x = x_f/2.',
      'Pour une cinétique d’ordre 1 : [A](t) = [A]₀e^(−kt) et t₁/₂ = ln(2)/k.'
    ],
    method: [
      'Identifier la grandeur mesurée et établir son lien avec l’avancement ou une concentration.',
      'Tracer l’évolution temporelle en conservant les unités et les incertitudes.',
      'Déterminer la pente de la tangente à la date étudiée.',
      'Utiliser les coefficients stœchiométriques pour relier vitesse et concentrations.',
      'Lire le temps de demi-réaction à partir de la moitié de l’avancement final.',
      'Vérifier les hypothèses avant d’utiliser une loi cinétique et discuter les écarts au modèle.'
    ],
    flashcards: [
      {front:'Qu’est-ce qu’un suivi cinétique ?',back:'La mesure d’une grandeur liée à la transformation au cours du temps.'},
      {front:'Citer trois grandeurs utilisables pour un suivi cinétique.',back:'L’absorbance, la conductivité, le pH, la pression ou une concentration.'},
      {front:'Que représente l’avancement x ?',back:'Une grandeur exprimant la progression d’une transformation selon son équation chimique.'},
      {front:'Quelle est l’expression de la vitesse volumique ?',back:'v(t) = (1/V) × dx/dt pour un volume réactionnel constant.'},
      {front:'Quelle est l’unité usuelle de la vitesse volumique ?',back:'mol·L⁻¹·s⁻¹.'},
      {front:'Comment lire une vitesse instantanée sur x = f(t) ?',back:'En déterminant la pente de la tangente à la courbe à la date considérée, puis en divisant par V.'},
      {front:'Que signifie une pente forte sur la courbe x = f(t) ?',back:'L’avancement augmente rapidement à cette date.'},
      {front:'Comment évolue souvent la vitesse au cours d’une réaction ?',back:'Elle est souvent plus élevée au début puis diminue, selon le système étudié.'},
      {front:'Quel est l’effet général d’une hausse de température ?',back:'Elle accélère généralement la transformation chimique.'},
      {front:'Pourquoi une concentration plus élevée peut-elle accélérer une réaction ?',back:'Elle peut augmenter la fréquence des rencontres entre entités réactives.'},
      {front:'Qu’est-ce qu’un catalyseur ?',back:'Une espèce qui augmente la vitesse en proposant un chemin réactionnel de plus faible énergie d’activation.'},
      {front:'Un catalyseur est-il consommé dans le bilan global ?',back:'Non, il est régénéré au cours du mécanisme.'},
      {front:'Un catalyseur modifie-t-il l’état final d’équilibre ?',back:'Non, il accélère l’établissement de l’équilibre sans en modifier la composition à température donnée.'},
      {front:'Définir le temps de demi-réaction.',back:'La durée nécessaire pour atteindre la moitié de l’avancement final.'},
      {front:'Quelle relation définit t₁/₂ avec l’avancement ?',back:'x(t₁/₂) = x_f/2.'},
      {front:'Comment lire t₁/₂ sur une courbe d’avancement ?',back:'Repérer la moitié de l’avancement final puis lire la date correspondante.'},
      {front:'Quelle loi décrit la disparition d’un réactif pour un ordre 1 ?',back:'[A](t) = [A]₀e^(−kt), dans les conditions du modèle.'},
      {front:'Quelle est l’unité de k pour une cinétique d’ordre 1 ?',back:'Une unité inverse du temps, par exemple s⁻¹.'},
      {front:'Quelle expression donne t₁/₂ pour un ordre 1 ?',back:'t₁/₂ = ln(2)/k.'},
      {front:'Le temps de demi-réaction d’un ordre 1 dépend-il de [A]₀ ?',back:'Non, dans le modèle d’ordre 1 idéal, t₁/₂ = ln(2)/k.'},
      {front:'À quoi sert une courbe d’étalonnage dans un suivi ?',back:'À relier une grandeur mesurée à une concentration connue ou recherchée.'},
      {front:'Pourquoi faut-il vérifier le domaine de validité d’un étalonnage ?',back:'La relation utilisée peut ne plus être valable en dehors de la gamme étalonnée.'},
      {front:'Quelle différence entre suivi continu et discontinu ?',back:'Le suivi continu mesure sans interruption ; le discontinu repose sur des prélèvements à différentes dates.'},
      {front:'Pourquoi un prélèvement peut-il perturber un suivi ?',back:'Il peut modifier le volume, la composition ou les conditions du système étudié.'},
      {front:'Quel rôle joue le coefficient stœchiométrique dans la vitesse ?',back:'Il relie la variation de concentration d’une espèce à la vitesse de réaction.'},
      {front:'Que représente dx/dt ?',back:'La dérivée de l’avancement par rapport au temps, c’est-à-dire sa vitesse instantanée de variation.'},
      {front:'Que signifie une équation différentielle en cinétique ?',back:'Elle relie une grandeur à sa variation instantanée et modélise son évolution temporelle.'},
      {front:'Pourquoi une condition initiale est-elle nécessaire ?',back:'Elle permet de déterminer la solution particulière correspondant à l’état initial du système.'},
      {front:'Que peut révéler un écart entre modèle et mesures ?',back:'Une incertitude expérimentale, une approximation ou un modèle insuffisant.'},
      {front:'Pourquoi préciser les conditions expérimentales ?',back:'Parce que la vitesse dépend notamment de la température, des concentrations et de la présence d’un catalyseur.'}
    ],
    quiz: [
      {level:'Facile',question:'Quelle grandeur est suivie lors d’un suivi cinétique ?',choices:['Une grandeur liée à l’évolution du système','Uniquement la masse du récipient','La couleur du matériel','La quantité de solvant uniquement'],answer:0,explanation:'Le suivi porte sur une grandeur reliée à l’avancement ou à la concentration.'},
      {level:'Facile',question:'Pour un volume constant, quelle expression correspond à la vitesse volumique ?',choices:['(1/V) × dx/dt','V × dx/dt','dx × dt','V/dx'],answer:0,explanation:'La vitesse volumique est la dérivée de l’avancement divisée par le volume.'},
      {level:'Intermédiaire',question:'Sur une courbe x = f(t), la vitesse instantanée est reliée à…',choices:['La pente de la tangente','L’aire sous la courbe','La valeur initiale seule','La durée totale uniquement'],answer:0,explanation:'La dérivée dx/dt est la pente de la tangente.'},
      {level:'Facile',question:'Quel facteur cinétique accélère généralement une réaction ?',choices:['Une augmentation de température','Une diminution systématique de la température','La suppression des réactifs','Une augmentation du volume du récipient dans tous les cas'],answer:0,explanation:'Une température plus élevée accélère généralement la transformation.'},
      {level:'Intermédiaire',question:'Quel est le rôle d’un catalyseur ?',choices:['Accélérer la transformation par un autre chemin réactionnel','Augmenter la quantité finale de produit à l’équilibre','Être consommé totalement','Modifier les coefficients de l’équation'],answer:0,explanation:'Le catalyseur fournit un chemin réactionnel de plus faible énergie d’activation.'},
      {level:'Intermédiaire',question:'Le temps de demi-réaction correspond à…',choices:['La moitié de l’avancement final','La moitié de la température finale','La moitié du volume initial','La fin obligatoire de la transformation'],answer:0,explanation:'Par définition, x(t₁/₂) = x_f/2. Il se lit sur la courbe au moment où l’avancement atteint la moitié de sa valeur finale.'},
      {level:'Intermédiaire',question:'Pour une cinétique d’ordre 1, quelle loi décrit [A](t) ?',choices:['A initiale × e^(−kt)','A initiale + kt','A initiale / k','k / A initiale'],answer:0,explanation:'La décroissance exponentielle caractérise le modèle d’ordre 1.'},
      {level:'Intermédiaire',question:'Quelle est l’unité de k pour un ordre 1 si t est en secondes ?',choices:['s⁻¹','mol·L⁻¹','mol·L⁻¹·s⁻¹','s'],answer:0,explanation:'Le produit kt doit être sans dimension, donc k s’exprime en s⁻¹.'},
      {level:'Difficile',question:'Pour un ordre 1 avec k = 0,20 s⁻¹, quel est t₁/₂ ?',choices:['3,47 s','0,14 s','5,00 s','6,93 s'],answer:0,explanation:'t₁/₂ = ln(2)/0,20 ≈ 3,47 s. L’unité obtenue est la seconde, car k est exprimée en s⁻¹.'},
      {level:'Intermédiaire',question:'Pourquoi établir une courbe d’étalonnage ?',choices:['Pour convertir une mesure en concentration','Pour accélérer la réaction','Pour déterminer la température de fusion','Pour remplacer l’équation chimique'],answer:0,explanation:'L’étalonnage relie la mesure à des concentrations de référence.'},
      {level:'Intermédiaire',question:'Quel risque présente une extrapolation hors de la gamme étalonnée ?',choices:['La relation peut ne plus être valide','La réaction devient nécessairement totale','Le pH devient sans unité','La concentration devient négative automatiquement'],answer:0,explanation:'La relation expérimentale n’est garantie que dans son domaine validé.'},
      {level:'Facile',question:'Un suivi discontinu repose sur…',choices:['Des prélèvements à différentes dates','Une mesure permanente sans interruption','Une seule mesure finale','L’absence de mesure'],answer:0,explanation:'Le suivi discontinu utilise plusieurs mesures réalisées sur des échantillons prélevés.'},
      {level:'Intermédiaire',question:'Que faut-il vérifier avant d’utiliser une loi cinétique ?',choices:['Les hypothèses et le domaine de validité du modèle','Uniquement la couleur de la solution','Que le temps soit toujours nul','Que le catalyseur soit absent'],answer:0,explanation:'Une loi cinétique s’applique sous des hypothèses déterminées.'},
      {level:'Difficile',question:'Si x_f = 8,0 mmol, quelle valeur de x correspond à t₁/₂ ?',choices:['4,0 mmol','2,0 mmol','8,0 mmol','16 mmol'],answer:0,explanation:'La moitié de 8,0 mmol vaut 4,0 mmol. Le temps de demi-réaction est défini par rapport à l’avancement final.'},
      {level:'Intermédiaire',question:'Une pente de x(t) diminue au cours du temps. Que peut-on en déduire ?',choices:['La vitesse instantanée diminue','L’avancement devient négatif','Le volume augmente nécessairement','La réaction change forcément d’équation'],answer:0,explanation:'La pente représente dx/dt ; sa diminution traduit une vitesse plus faible.'},
      {level:'Intermédiaire',question:'Dans quel cas la température doit-elle être précisée ?',choices:['Lorsqu’on compare des vitesses de réaction','Uniquement lorsqu’on mesure une masse','Jamais en cinétique','Seulement après la fin de la réaction'],answer:0,explanation:'La température est un facteur cinétique et conditionne la comparaison.'},
      {level:'Difficile',question:'Pour une cinétique d’ordre 1, si k double, que devient le temps de demi-réaction ?',choices:['Il est divisé par deux','Il double','Il reste identique','Il est multiplié par quatre'],answer:0,explanation:'t₁/₂ = ln(2)/k est inversement proportionnel à k.'},
      {level:'Intermédiaire',question:'Pourquoi le coefficient stœchiométrique est-il nécessaire pour exploiter une concentration ?',choices:['Il relie la variation de cette espèce à l’avancement','Il donne directement la température','Il remplace le volume','Il indique la durée de mesure'],answer:0,explanation:'La définition de l’avancement fait intervenir les coefficients de l’équation.'},
      {level:'Intermédiaire',question:'Une mesure de conductivité peut suivre une réaction si…',choices:['La composition ionique évolue avec la transformation','Aucun ion n’est présent','La conductivité est indépendante de la solution','Le récipient est opaque'],answer:0,explanation:'La conductivité dépend des ions présents et de leurs concentrations.'},
      {level:'Difficile',question:'Quel élément permet de choisir entre plusieurs modèles cinétiques ?',choices:['La comparaison des prédictions aux mesures','Le nom du réactif uniquement','La forme du récipient','La couleur de l’étiquette'],answer:0,explanation:'Un modèle doit être confronté aux observations expérimentales.'}
    ],
    exercises: [
      {title:'Déterminer une vitesse volumique',level:'Facile',statement:'Dans un volume constant V = 0,50 L, l’avancement passe de 1,0 mmol à 3,0 mmol entre 10 s et 20 s. Estimer la vitesse volumique moyenne sur cet intervalle.',correction:'Δx = 2,0 mmol = 2,0 × 10⁻³ mol et Δt = 10 s. v_moy = Δx/(VΔt) = 2,0 × 10⁻³/(0,50 × 10) = 4,0 × 10⁻⁴ mol·L⁻¹·s⁻¹.',skills:['Calcul de variation','Vitesse volumique']},
      {title:'Lire un temps de demi-réaction',level:'Facile',statement:'L’avancement final vaut 12 mmol. À quelle valeur d’avancement le temps de demi-réaction est-il atteint ?',correction:'x(t₁/₂) = x_f/2 = 12/2 = 6,0 mmol.',skills:['Définition','Lecture de courbe']},
      {title:'Calculer la constante cinétique',level:'Intermédiaire',statement:'Une transformation suit un modèle d’ordre 1 et son temps de demi-réaction vaut 5,0 s. Calculer k.',correction:'k = ln(2)/t₁/₂ = 0,693/5,0 = 0,139 s⁻¹, soit 0,14 s⁻¹ avec deux chiffres significatifs.',skills:['Cinétique d’ordre 1','Calcul numérique']},
      {title:'Calculer une concentration à une date',level:'Intermédiaire',statement:'Pour un ordre 1, [A]₀ = 0,80 mol·L⁻¹ et k = 0,10 s⁻¹. Calculer [A] après 10 s.',correction:'[A](10) = 0,80 × e^(−0,10×10) = 0,80e⁻¹ ≈ 0,29 mol·L⁻¹.',skills:['Loi exponentielle','Application numérique']},
      {title:'Interpréter un facteur cinétique',level:'Intermédiaire',statement:'Deux expériences identiques sont réalisées à des températures différentes. La réaction est plus rapide dans l’expérience chaude. Interpréter cette observation.',correction:'La hausse de température augmente généralement la proportion de collisions conduisant à une transformation. La vitesse est donc plus élevée dans les conditions chaudes, toutes choses égales par ailleurs.',skills:['Facteurs cinétiques','Interprétation']},
      {title:'Exploiter une tangente',level:'Difficile',statement:'À une date donnée, la tangente à x(t) passe par les points (20 s ; 2,0 mmol) et (30 s ; 5,0 mmol). Le volume est 0,60 L. Estimer la vitesse volumique instantanée.',correction:'La pente vaut dx/dt = (5,0−2,0) mmol/(30−20) s = 0,30 mmol·s⁻¹ = 3,0×10⁻⁴ mol·s⁻¹. Donc v = (1/0,60)×3,0×10⁻⁴ = 5,0×10⁻⁴ mol·L⁻¹·s⁻¹.',skills:['Pente de tangente','Conversion d’unités']},
      {title:'Comparer deux catalyses',level:'Difficile',statement:'Une transformation atteint le même état final avec et sans catalyseur, mais plus rapidement en présence du catalyseur. Expliquer pourquoi cela ne contredit pas le rôle du catalyseur.',correction:'Le catalyseur modifie la vitesse en proposant un chemin réactionnel de plus faible énergie d’activation. Il ne modifie pas l’état final d’équilibre à température donnée ; il permet de l’atteindre plus rapidement.',skills:['Catalyse','Équilibre chimique']},
      {title:'Vérifier un temps de demi-réaction',level:'Intermédiaire',statement:'Un modèle d’ordre 1 donne k = 0,35 min⁻¹. Calculer t₁/₂ en minutes.',correction:'t₁/₂ = ln(2)/0,35 = 1,98 min, soit environ 2,0 min.',skills:['Cinétique d’ordre 1','Unités']},
      {title:'Discuter un protocole de suivi',level:'Difficile',statement:'On souhaite suivre une réaction très rapide par prélèvements manuels espacés de 30 s. Discuter la pertinence du protocole et proposer une amélioration générale.',correction:'Un intervalle de 30 s risque d’être trop long devant la durée caractéristique de la transformation : les premières étapes seraient mal décrites. Un suivi continu avec un capteur adapté, ou un dispositif d’acquisition plus rapide, permettrait d’obtenir davantage de points temporels.',skills:['Choix expérimental','Esprit critique']},
      {title:'Confronter un modèle aux mesures',level:'Difficile',statement:'Un modèle exponentiel décrit correctement les premières mesures mais s’écarte nettement des dernières. Citer deux causes possibles et une démarche de vérification.',correction:'Les écarts peuvent provenir d’incertitudes plus importantes, d’une modification des conditions expérimentales ou d’un modèle cinétique incomplet. Il faut vérifier les mesures et les conditions, examiner les résidus et comparer avec un modèle alternatif justifié.',skills:['Modélisation','Analyse critique']}
    ],
    revisionSheets: [{title:'Fiche méthode — cinétique',summary:['Relier une grandeur mesurée à l’avancement ou à une concentration.','Déterminer la vitesse à partir d’une pente.','Lire le temps de demi-réaction et vérifier les hypothèses du modèle.'],mustKnow:['v(t) = (1/V) × dx/dt.','t₁/₂ : x(t₁/₂) = x_f/2.','Ordre 1 : [A](t) = [A]₀e^(−kt) et t₁/₂ = ln(2)/k.','Température, concentration et catalyseur sont des facteurs cinétiques.'],methods:['Identifier la grandeur suivie et sa relation avec l’avancement.','Utiliser une tangente pour une vitesse instantanée.','Convertir les unités avant le calcul.','Comparer les données aux hypothèses du modèle.']}],
    sources: [{title:'Programme de physique-chimie de terminale générale — spécialité',institution:'Ministère de l’Éducation nationale, BO spécial n° 8 du 25 juillet 2019',url:'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm',consultedAt:'2026-11-01',supports:['Modéliser l’évolution temporelle d’un système, siège d’une transformation','Suivi temporel et modélisation macroscopique']},{title:'Programmes et ressources en physique-chimie — voie GT',institution:'Éduscol',url:'https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt',consultedAt:'2026-11-01',supports:['Ressources d’accompagnement sur le suivi temporel et la modélisation']}],
    sourceNote:'Ressource de travail construite à partir du programme officiel de spécialité physique-chimie de Terminale. Les lois cinétiques sont présentées avec leurs hypothèses et ne sont pas universelles. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus:'draft'
  },
  'pc-etat-final': {
    title: 'Prévoir l’état final d’un système, siège d’une transformation chimique',
    objectives: [
      'Établir un tableau d’avancement à partir de l’équation de réaction.',
      'Déterminer le réactif limitant et l’avancement maximal.',
      'Prévoir la composition finale d’un système chimique.',
      'Distinguer transformation totale et transformation non totale.',
      'Exploiter une constante d’équilibre et un quotient de réaction lorsque le modèle est fourni.'
    ],
    course: [
      { heading: '1. Avancement et tableau d’évolution', body: [
        'L’avancement x, exprimé en moles, quantifie l’évolution d’une transformation chimique selon l’équation ajustée. Pour une espèce A de coefficient stœchiométrique νA, sa quantité évolue de −νA x si A est un réactif et de +νA x si A est un produit.',
        'Un tableau d’avancement présente les quantités initiales, les variations et les quantités à l’état final. Il permet de relier la composition du système à une seule variable x lorsque l’équation de réaction est connue.',
        'Les quantités de matière ne peuvent pas devenir négatives. Cette contrainte permet de déterminer les valeurs possibles de x et donc l’avancement maximal.'
      ], example: { prompt: 'Pour A + 2 B → C, avec nA,0 = 0,10 mol et nB,0 = 0,15 mol, quelles expressions obtient-on ?', solution: 'À l’avancement x : nA = 0,10 − x ; nB = 0,15 − 2x ; nC = x. Les contraintes donnent x ≤ 0,10 et x ≤ 0,075, donc xmax = 0,075 mol et B est limitant.' } },
      { heading: '2. Réactif limitant et composition finale', body: [
        'L’avancement maximal est la plus grande valeur de x compatible avec la non-négativité de toutes les quantités de réactifs. Pour chaque réactif, on calcule ninitial/ν ; la plus petite de ces valeurs fixe xmax.',
        'Le réactif associé à la plus petite valeur est le réactif limitant. Les autres réactifs peuvent être introduits en excès et rester présents à l’état final.',
        'La composition finale se calcule en remplaçant x par l’avancement effectivement atteint dans les expressions du tableau. Pour une transformation totale, cet avancement est modélisé par xmax.'
      ] },
      { heading: '3. Transformations totales et non totales', body: [
        'Une transformation est dite totale dans le modèle usuel lorsque l’avancement final atteint l’avancement maximal : xf = xmax. Le réactif limitant est alors entièrement consommé selon l’équation de réaction.',
        'Une transformation non totale atteint un état final avant xmax : xf < xmax. Des réactifs et des produits peuvent alors coexister à l’état final.',
        'Le caractère total ou non total ne se déduit pas de la seule écriture de l’équation-bilan. Il dépend du système étudié et des conditions expérimentales.'
      ] },
      { heading: '4. Quotient de réaction et équilibre', body: [
        'Pour une équation écrite dans un sens donné, le quotient de réaction Qr s’exprime à partir des activités des produits et des réactifs, chacune élevée à son coefficient stœchiométrique. En solution diluée, les activités peuvent être approchées par des concentrations rapportées à une concentration standard ; les solides et liquides purs n’interviennent pas dans l’expression usuelle.',
        'À température donnée, la constante d’équilibre K est la valeur du quotient de réaction à l’équilibre. Elle est associée à l’équation écrite et à la température considérée.',
        'Le sens d’évolution spontanée peut être discuté en comparant Qr à K : si Qr est inférieur à K, l’évolution dans le sens direct est favorisée ; si Qr est supérieur à K, le sens inverse est favorisé ; si Qr = K, le système est à l’équilibre.'
      ] },
      { heading: '5. Méthode de résolution et limites', body: [
        'Il faut commencer par ajuster l’équation, convertir les données en quantités de matière et construire le tableau d’avancement. On détermine ensuite xmax, puis on calcule la composition finale à partir de xf.',
        'Pour un système à l’équilibre, on utilise l’expression de Qr correspondant exactement à l’équation fournie et on tient compte des données et hypothèses du modèle. Les concentrations doivent être exprimées dans des unités cohérentes.',
        'Un résultat doit être vérifié : conservation des éléments, cohérence des charges, quantités positives et respect des conditions annoncées. Les approximations doivent être explicitées.'
      ] }
    ],
    keyPoints: [
      'L’avancement x décrit l’évolution de la réaction en moles.',
      'Pour un réactif i, ni = ni,0 − νi x ; pour un produit, ni = ni,0 + νi x.',
      'xmax = min(ni,0/νi) sur les réactifs.',
      'Le réactif limitant correspond à la plus petite valeur ni,0/νi.',
      'Transformation totale : xf = xmax dans le modèle considéré.',
      'Transformation non totale : xf < xmax.',
      'À l’équilibre, Qr = K à température donnée.',
      'Comparer Qr et K permet de prévoir le sens d’évolution spontanée.'
    ],
    method: [
      'Écrire et ajuster l’équation de réaction.',
      'Convertir les données initiales en quantités de matière.',
      'Construire le tableau d’avancement avec les coefficients stœchiométriques.',
      'Calculer les valeurs ni,0/νi pour identifier le réactif limitant et xmax.',
      'Déterminer xf selon que la transformation est modélisée comme totale ou qu’un état d’équilibre est étudié.',
      'Calculer chaque quantité finale et vérifier qu’elle est positive ou nulle.',
      'Pour un équilibre, écrire Qr sans oublier les exposants stœchiométriques et comparer à K.'
    ],
    flashcards: [
      { front: 'Que représente l’avancement x ?', back: 'Une grandeur en moles qui quantifie l’évolution d’une transformation selon l’équation ajustée.' },
      { front: 'Quelle est l’unité de l’avancement ?', back: 'La mole (mol).' },
      { front: 'Comment évolue la quantité d’un réactif A de coefficient νA ?', back: 'nA = nA,0 − νA x.' },
      { front: 'Comment évolue la quantité d’un produit P de coefficient νP ?', back: 'nP = nP,0 + νP x.' },
      { front: 'Pourquoi faut-il ajuster l’équation avant le tableau d’avancement ?', back: 'Les coefficients stœchiométriques déterminent les variations de quantité de matière.' },
      { front: 'Comment déterminer xmax ?', back: 'Calculer ni,0/νi pour chaque réactif et retenir la plus petite valeur.' },
      { front: 'Qu’est-ce que le réactif limitant ?', back: 'Le réactif entièrement consommé en premier dans le modèle d’une transformation totale.' },
      { front: 'Qu’est-ce qu’un réactif en excès ?', back: 'Un réactif dont une quantité reste présente à l’état final lorsque l’autre réactif est limitant.' },
      { front: 'Que signifie xf = xmax ?', back: 'La transformation a atteint l’avancement maximal ; elle est totale dans le modèle considéré.' },
      { front: 'Que signifie xf < xmax ?', back: 'La transformation n’est pas totale ; l’état final est atteint avant consommation complète du réactif limitant.' },
      { front: 'Le caractère total se déduit-il de l’équation-bilan seule ?', back: 'Non, il dépend du système et des conditions expérimentales.' },
      { front: 'Comment calculer la quantité finale d’un réactif ?', back: 'Soustraire à sa quantité initiale le produit de son coefficient stœchiométrique par xf.' },
      { front: 'Comment calculer la quantité finale d’un produit ?', back: 'Ajouter à sa quantité initiale le produit de son coefficient stœchiométrique par xf.' },
      { front: 'Que vérifie-t-on sur les quantités finales ?', back: 'Elles doivent être positives ou nulles et respecter la conservation des éléments.' },
      { front: 'Qu’est-ce que le quotient de réaction Qr ?', back: 'Une grandeur construite à partir des activités des produits et des réactifs, avec les puissances stœchiométriques.' },
      { front: 'De quoi dépend la constante d’équilibre K ?', back: 'De la réaction écrite et de la température.' },
      { front: 'Quelle relation vérifie un système à l’équilibre ?', back: 'Qr = K.' },
      { front: 'Que prévoit-on si Qr < K ?', back: 'L’évolution spontanée dans le sens direct est favorisée.' },
      { front: 'Que prévoit-on si Qr > K ?', back: 'L’évolution spontanée dans le sens inverse est favorisée.' },
      { front: 'Que signifie Qr = K ?', back: 'Le système est à l’équilibre chimique dans les conditions considérées.' },
      { front: 'Pourquoi les coefficients stœchiométriques apparaissent-ils comme exposants dans Qr ?', back: 'Parce que l’expression du quotient suit les nombres stœchiométriques de l’équation ajustée.' },
      { front: 'Les solides purs interviennent-ils dans l’expression usuelle de Qr ?', back: 'Non, leur activité est prise égale à 1 et ils n’apparaissent pas dans l’expression usuelle.' },
      { front: 'Pourquoi faut-il préciser le sens de l’équation pour écrire Qr ?', back: 'Inverser l’équation inverse le quotient associé.' },
      { front: 'Que représente l’état final ?', back: 'L’état du système à la fin de son évolution étudiée, qu’il soit à l’équilibre ou non.' },
      { front: 'Quelle est la première étape d’un tableau d’avancement ?', back: 'Écrire et ajuster l’équation de réaction.' },
      { front: 'Pourquoi convertir les masses en quantités de matière ?', back: 'Le tableau d’avancement exprime les variations en moles.' },
      { front: 'Comment identifier le réactif limitant avec deux réactifs ?', back: 'Comparer les rapports quantité initiale/coefficient stœchiométrique.' },
      { front: 'Une quantité finale négative est-elle acceptable ?', back: 'Non, elle révèle une erreur de calcul ou un avancement incompatible.' },
      { front: 'K change-t-elle si l’on modifie les quantités initiales à température constante ?', back: 'Non, la constante d’équilibre dépend de la température, pas de la composition initiale.' },
      { front: 'Pourquoi vérifier les unités et les hypothèses du modèle ?', back: 'Pour garantir que les calculs et l’interprétation sont cohérents avec les données et les conditions.' }
    ],
    quiz: [
      { level: 'Facile', question: 'L’avancement d’une réaction s’exprime en :', choices: ['mol', 'g', 'L', 'mol·L⁻¹'], answer: 0, explanation: 'L’avancement est une quantité de matière et s’exprime en moles.' },
      { level: 'Facile', question: 'Pour un réactif A de coefficient 2, sa quantité à l’avancement x vaut :', choices: ['nA,0 − 2x', 'nA,0 + 2x', 'nA,0 − x/2', '2nA,0 − x'], answer: 0, explanation: 'Un réactif est consommé selon son coefficient : la variation est −2x.' },
      { level: 'Facile', question: 'Pour un produit P de coefficient 3, sa quantité finale vaut :', choices: ['nP,0 + 3xf', 'nP,0 − 3xf', 'nP,0 + xf/3', '3nP,0 − xf'], answer: 0, explanation: 'Un produit se forme ; sa quantité augmente de 3xf.' },
      { level: 'Facile', question: 'Le réactif limitant est celui qui :', choices: ['est consommé en premier', 'est toujours initialement minoritaire en masse', 'a le plus grand coefficient', 'est toujours liquide'], answer: 0, explanation: 'Il fixe xmax et est entièrement consommé si la transformation est totale.' },
      { level: 'Facile', question: 'Pour une transformation totale dans le modèle usuel :', choices: ['xf = xmax', 'xf = 0', 'xf > xmax', 'xf est toujours égal à 1 mol'], answer: 0, explanation: 'La transformation totale atteint l’avancement maximal.' },
      { level: 'Facile', question: 'Une transformation non totale vérifie :', choices: ['xf < xmax', 'xf > xmax', 'xf = xmax obligatoirement', 'xmax = 0 obligatoirement'], answer: 0, explanation: 'L’état final est atteint avant l’avancement maximal.' },
      { level: 'Intermédiaire', question: 'Pour A + 2B → C, nA,0 = 0,10 mol et nB,0 = 0,12 mol. Quel est xmax ?', choices: ['0,06 mol', '0,10 mol', '0,12 mol', '0,22 mol'], answer: 0, explanation: 'Les limites sont 0,10 mol pour A et 0,12/2 = 0,06 mol pour B ; B est limitant.' },
      { level: 'Intermédiaire', question: 'Dans A + B → C, nA,0 = 0,20 mol et nB,0 = 0,15 mol. Quel réactif est limitant ?', choices: ['B', 'A', 'C', 'Aucun, les quantités sont égales'], answer: 0, explanation: 'Les coefficients valent 1 ; le plus petit rapport initial est celui de B.' },
      { level: 'Intermédiaire', question: 'Pour 2A + B → C, nA,0 = 0,10 mol et nB,0 = 0,08 mol. xmax vaut :', choices: ['0,05 mol', '0,08 mol', '0,10 mol', '0,18 mol'], answer: 0, explanation: 'A impose x ≤ 0,10/2 = 0,05 mol et B impose x ≤ 0,08 mol.' },
      { level: 'Intermédiaire', question: 'Pour A + 2B → C et xf = 0,04 mol, la quantité consommée de B est :', choices: ['0,08 mol', '0,04 mol', '0,02 mol', '0,12 mol'], answer: 0, explanation: 'La variation de B vaut −2xf, soit −0,08 mol. Le coefficient stœchiométrique 2 signifie que B est consommé deux fois plus vite que l’avancement.' },
      { level: 'Intermédiaire', question: 'Si Qr < K, le sens d’évolution favorisé est :', choices: ['le sens direct', 'le sens inverse', 'aucun sens car Qr est nul', 'impossible à déterminer même si l’équation est connue'], answer: 0, explanation: 'Le système évolue spontanément dans le sens qui augmente Qr vers K.' },
      { level: 'Intermédiaire', question: 'À l’équilibre chimique, on a :', choices: ['Qr = K', 'Qr = 0', 'Qr > K toujours', 'Qr < K toujours'], answer: 0, explanation: 'La constante d’équilibre est la valeur de Qr à l’équilibre.' },
      { level: 'Intermédiaire', question: 'À température constante, la valeur de K :', choices: ['ne dépend pas des quantités initiales', 'est égale à la quantité du réactif limitant', 'varie avec le volume initial dans tous les cas', 'est toujours égale à 1'], answer: 0, explanation: 'K est caractéristique de la réaction écrite et de la température.' },
      { level: 'Intermédiaire', question: 'Pour écrire Qr, les concentrations des produits apparaissent :', choices: ['au numérateur avec leurs coefficients comme exposants', 'au dénominateur sans exposant', 'toujours à la puissance 1', 'uniquement si les produits sont solides'], answer: 0, explanation: 'Les activités des produits sont au numérateur, élevées à leurs coefficients stœchiométriques.' },
      { level: 'Difficile', question: 'Pour A + 2B → C, les quantités initiales sont 0,10 mol de A et 0,15 mol de B. À xmax, quelle quantité de A reste-t-il ?', choices: ['0,025 mol', '0 mol', '0,075 mol', '0,10 mol'], answer: 0, explanation: 'B limite la réaction à 0,075 mol ; A restant vaut 0,10 − 0,075 = 0,025 mol.' },
      { level: 'Difficile', question: 'Pour 2A + B → 3C, si xf = 0,020 mol, la quantité de C formée est :', choices: ['0,060 mol', '0,020 mol', '0,010 mol', '0,040 mol'], answer: 0, explanation: 'La quantité formée vaut 3xf = 0,060 mol. Le coefficient stœchiométrique de C est 3 : il multiplie l’avancement final.' },
      { level: 'Difficile', question: 'Pour A + B ⇌ C, si Qr > K, le système évolue spontanément :', choices: ['dans le sens inverse', 'dans le sens direct', 'sans changement de composition', 'vers une valeur de Qr encore plus grande'], answer: 0, explanation: 'Le sens inverse consomme C et tend à diminuer Qr jusqu’à K.' },
      { level: 'Difficile', question: 'Une quantité finale calculée négative indique :', choices: ['une erreur ou un avancement incompatible', 'une transformation très rapide', 'un équilibre stable', 'une unité incorrecte obligatoirement'], answer: 0, explanation: 'Une quantité de matière ne peut pas être négative ; il faut revoir l’avancement ou le calcul.' },
      { level: 'Difficile', question: 'Si l’équation chimique est inversée, le quotient associé :', choices: ['devient son inverse', 'reste toujours identique', 'devient nul', 'est égal à K au départ'], answer: 0, explanation: 'L’inversion échange numérateur et dénominateur dans l’expression du quotient.' },
      { level: 'Difficile', question: 'Pour une réaction à température fixée, modifier la composition initiale change :', choices: ['Qr initial, mais pas K', 'K, mais pas Qr initial', 'toujours K et Qr dans la même proportion', 'ni Qr ni K'], answer: 0, explanation: 'Qr dépend de la composition instantanée tandis que K est fixé par la température et la réaction.' }
    ],
    exercises: [
      { title: 'Identifier le réactif limitant', level: 'Facile', statement: 'On fait réagir 0,12 mol de A avec 0,08 mol de B selon A + 2B → C. Déterminer le réactif limitant et xmax.', correction: 'Pour A : 0,12/1 = 0,12 mol. Pour B : 0,08/2 = 0,04 mol. Donc xmax = 0,04 mol et B est limitant.', skills: ['Tableau d’avancement', 'Réactif limitant'] },
      { title: 'Calculer une composition finale', level: 'Facile', statement: 'Pour A + B → C, on introduit 0,20 mol de A et 0,15 mol de B. La transformation est totale. Calculer les quantités finales.', correction: 'B est limitant et xmax = 0,15 mol. À l’état final : nA = 0,20 − 0,15 = 0,05 mol ; nB = 0 ; nC = 0,15 mol si aucune quantité initiale de C.', skills: ['Composition finale', 'Stœchiométrie'] },
      { title: 'Exploiter un coefficient stœchiométrique', level: 'Facile', statement: 'Pour 2A + 3B → 4C, l’avancement atteint 0,010 mol. Calculer les quantités consommées de A et B et la quantité formée de C.', correction: 'A consommé : 2x = 0,020 mol. B consommé : 3x = 0,030 mol. C formé : 4x = 0,040 mol.', skills: ['Avancement', 'Coefficients stœchiométriques'] },
      { title: 'Comparer les rapports initiaux', level: 'Intermédiaire', statement: 'Pour 2A + B → D, nA,0 = 0,18 mol et nB,0 = 0,07 mol. Déterminer xmax et la quantité de A restante si la transformation est totale.', correction: 'A impose x ≤ 0,18/2 = 0,09 mol ; B impose x ≤ 0,07 mol. Donc xmax = 0,07 mol et B est limitant. Il reste nA = 0,18 − 2 × 0,07 = 0,04 mol.', skills: ['Réactif limitant', 'Quantité finale'] },
      { title: 'Étudier une transformation non totale', level: 'Intermédiaire', statement: 'Pour A + B ⇌ C, le tableau donne xmax = 0,10 mol et l’état final correspond à xf = 0,06 mol. La transformation est-elle totale ? Justifier.', correction: 'Non. Comme xf = 0,06 mol est inférieur à xmax = 0,10 mol, la transformation est non totale dans le modèle considéré.', skills: ['Transformation totale', 'Interprétation'] },
      { title: 'Retrouver une quantité initiale', level: 'Intermédiaire', statement: 'Pour A + 2B → C, à xf = 0,025 mol il reste 0,030 mol de B. Déterminer la quantité initiale de B.', correction: 'nB,f = nB,0 − 2xf. Donc nB,0 = 0,030 + 2 × 0,025 = 0,080 mol.', skills: ['Tableau d’avancement', 'Calcul littéral'] },
      { title: 'Analyser le sens d’évolution', level: 'Intermédiaire', statement: 'À une température donnée, un système vérifie Qr = 0,40 et K = 2,0 pour l’équation écrite dans le sens direct. Prévoir le sens d’évolution.', correction: 'Qr < K (0,40 < 2,0). L’évolution spontanée dans le sens direct est favorisée jusqu’à ce que Qr atteigne K à l’équilibre.', skills: ['Quotient de réaction', 'Équilibre'] },
      { title: 'Analyser une évolution inverse', level: 'Difficile', statement: 'Pour une réaction écrite A + B ⇌ C, on mesure Qr = 8,0 et K = 2,0. Quel sens d’évolution est favorisé et pourquoi ?', correction: 'Qr > K. Le sens inverse est favorisé ; il tend à diminuer le quotient de réaction jusqu’à la valeur K.', skills: ['Équilibre chimique', 'Sens d’évolution'] },
      { title: 'Construire un tableau complet', level: 'Difficile', statement: 'On étudie 2A + B → 3C avec nA,0 = 0,10 mol, nB,0 = 0,08 mol et nC,0 = 0. Déterminer xmax, le réactif limitant et la composition finale si la transformation est totale.', correction: 'A impose x ≤ 0,10/2 = 0,050 mol ; B impose x ≤ 0,08 mol. Donc xmax = 0,050 mol et A est limitant. À l’état final : nA = 0 ; nB = 0,08 − 0,05 = 0,030 mol ; nC = 3 × 0,05 = 0,150 mol.', skills: ['Tableau d’avancement', 'Composition finale', 'Stœchiométrie'] },
      { title: 'Vérifier la cohérence d’un résultat', level: 'Difficile', statement: 'Pour A + 2B → C, un calcul donne xf = 0,06 mol alors que nB,0 = 0,10 mol. Vérifier si cette valeur est compatible avec la quantité initiale de B.', correction: 'La quantité de B consommée serait 2 × 0,06 = 0,12 mol, supérieure aux 0,10 mol disponibles. Cette valeur de xf est impossible ; il faut xf ≤ 0,05 mol.', skills: ['Contrôle de cohérence', 'Avancement maximal'] }
    ],
    revisionSheets: [{ title: 'Fiche méthode — état final d’un système chimique', summary: ['L’avancement relie les quantités de matière à l’équation ajustée.', 'Le réactif limitant fixe l’avancement maximal.', 'La composition finale dépend de l’avancement final.', 'À l’équilibre, le quotient de réaction atteint K.'], mustKnow: ['Réactif : ni = ni,0 − νi x.', 'Produit : ni = ni,0 + νi x.', 'xmax = min(ni,0/νi) pour les réactifs.', 'Équilibre : Qr = K.'], methods: ['Ajuster l’équation.', 'Construire le tableau d’avancement.', 'Calculer xmax et identifier le limitant.', 'Déterminer xf et toutes les quantités finales.', 'Vérifier les signes, unités et conservations.'] }],
    sources: [{ title: 'Programme de physique-chimie de terminale générale — spécialité', institution: 'Ministère de l’Éducation nationale, Bulletin officiel spécial n° 8 du 25 juillet 2019', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm', consultedAt: '2026-11-01', supports: ['Prévoir l’état final d’un système, siège d’une transformation chimique', 'Évolution d’un système chimique', 'Équilibre chimique et quotient de réaction'] }],
    sourceNote: 'Ressource pédagogique de travail construite autour du programme de spécialité physique-chimie de Terminale. Les expressions de quotient de réaction doivent être adaptées à l’équation et aux conventions du cours. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'pc-synthese': {
    title: "Élaborer des stratégies en synthèse organique",
    objectives: [
      "Analyser une molécule cible et proposer des précurseurs possibles.",
      "Identifier des transformations organiques adaptées aux groupes caractéristiques.",
      "Justifier le recours à une protection ou à une activation.",
      "Calculer un rendement et un rendement global.",
      "Comparer des stratégies selon des critères chimiques, économiques, sanitaires et environnementaux."
    ],
    course: [
      { heading: "1. Objectifs et stratégie de synthèse", body: [
        "Une synthèse organique vise à préparer une espèce chimique à partir d’autres espèces en choisissant une succession raisonnée d’étapes. La stratégie dépend de la structure de la molécule cible, des fonctions présentes et des transformations accessibles.",
        "L’analyse rétrosynthétique consiste à partir de la molécule cible et à rechercher des précurseurs plus simples. On identifie les liaisons ou fonctions qui pourraient être formées ou modifiées lors des étapes de synthèse.",
        "Une stratégie doit tenir compte de la sélectivité, du rendement, du coût, de la disponibilité des réactifs, de la sécurité et de l’impact environnemental. Plusieurs voies peuvent conduire à la même molécule ; elles ne sont pas nécessairement équivalentes."
      ] },
      { heading: "2. Transformations et groupes caractéristiques", body: [
        "Les transformations usuelles en chimie organique comprennent notamment des réactions d’addition, de substitution, d’élimination, d’oxydation et de réduction. Le choix dépend des groupes caractéristiques et des réactifs employés.",
        "Un groupe caractéristique permet d’identifier une famille chimique et de prévoir certaines réactivités. Une transformation peut modifier une fonction sans changer le squelette carboné, ou modifier également la chaîne carbonée.",
        "Pour proposer une transformation, il faut vérifier la compatibilité des fonctions présentes et ne pas supposer qu’un réactif est sélectif sans justification expérimentale ou documentaire."
      ] },
      { heading: "3. Protection et activation", body: [
        "Lorsqu’une molécule possède plusieurs fonctions réactives, une transformation peut toucher une fonction non souhaitée. Une stratégie de protection consiste à transformer temporairement cette fonction en un groupe moins réactif dans les conditions de l’étape considérée.",
        "Après la transformation recherchée, le groupe protecteur est retiré : c’est la déprotection. Une protection ajoute donc au moins deux étapes et peut diminuer le rendement global.",
        "L’activation d’un réactif ou d’une fonction peut faciliter une transformation. Elle doit être distinguée d’une protection : l’activation augmente la réactivité utile, tandis que la protection limite temporairement une réactivité indésirable."
      ] },
      { heading: "4. Rendement et économie d’atomes", body: [
        "Le rendement d’une étape est le rapport entre la quantité de matière de produit réellement obtenue et la quantité maximale théorique, calculée à partir du réactif limitant et de l’équation ajustée. Il s’exprime souvent en pourcentage.",
        "Pour une succession d’étapes indépendantes, le rendement global est le produit des rendements successifs exprimés sous forme décimale. Plusieurs étapes de rendement inférieur à 100 % peuvent conduire à un rendement global nettement plus faible.",
        "L’économie d’atomes compare la masse molaire du produit recherché à la somme des masses molaires des réactifs selon l’équation stœchiométrique. Elle renseigne sur la proportion des atomes des réactifs retrouvée dans le produit souhaité, mais ne tient pas à elle seule compte des solvants, de l’énergie ou des pertes expérimentales."
      ] },
      { heading: "5. Analyse et validation d’un protocole", body: [
        "Un protocole de synthèse comporte le choix des réactifs, des quantités, du solvant, de la température, de la durée, du montage et des opérations d’isolement et de purification. Ces paramètres doivent être adaptés à la transformation et aux règles de sécurité.",
        "La chromatographie, la spectroscopie infrarouge, la résonance magnétique nucléaire ou la mesure d’une température de fusion peuvent contribuer à vérifier l’identité et la pureté d’un produit, selon les techniques étudiées et disponibles.",
        "Une bonne comparaison de stratégies prend en compte le rendement global, la sélectivité, le nombre d’étapes, les déchets, la toxicité, les risques, le coût et la disponibilité des substances. Aucun indicateur unique ne suffit à établir qu’une voie est la meilleure dans tous les contextes."
      ] }
    ],
    keyPoints: [
      "Une stratégie de synthèse relie des précurseurs à une molécule cible par une suite raisonnée de transformations.",
      "L’analyse rétrosynthétique part de la cible pour identifier des précurseurs possibles.",
      "La protection limite temporairement la réactivité d’une fonction ; la déprotection la restaure.",
      "Le rendement d’une étape compare la quantité obtenue à la quantité théorique maximale.",
      "Le rendement global de plusieurs étapes est le produit des rendements exprimés sous forme décimale.",
      "L’économie d’atomes est un indicateur théorique qui ne décrit pas tous les impacts du procédé.",
      "Une stratégie se compare selon plusieurs critères : rendement, sélectivité, sécurité, déchets, coût et énergie."
    ],
    method: [
      "Dessiner ou identifier la structure de la molécule cible et ses groupes caractéristiques.",
      "Effectuer une analyse rétrosynthétique pour proposer des précurseurs et des transformations.",
      "Vérifier la compatibilité des fonctions et envisager une protection si nécessaire.",
      "Ajuster les équations et identifier le réactif limitant avant de calculer une quantité théorique.",
      "Calculer chaque rendement puis le rendement global en utilisant des valeurs décimales.",
      "Comparer les voies sur plusieurs critères et expliciter les limites des indicateurs utilisés."
    ],
    flashcards: [
      { front: "Qu’est-ce qu’une synthèse organique ?", back: "La préparation d’une espèce organique à partir d’autres espèces par une ou plusieurs transformations." },
      { front: "Quel est le rôle d’une analyse rétrosynthétique ?", back: "Partir de la molécule cible pour rechercher des précurseurs et des étapes permettant de la construire." },
      { front: "Qu’appelle-t-on molécule cible ?", back: "La molécule que l’on souhaite obtenir à l’issue de la stratégie de synthèse." },
      { front: "Qu’est-ce qu’un précurseur en synthèse ?", back: "Une espèce utilisée comme point de départ d’une étape conduisant vers la molécule cible." },
      { front: "Citer trois critères de choix d’une voie de synthèse.", back: "Rendement, sélectivité, sécurité, coût, disponibilité des réactifs, déchets et impact environnemental." },
      { front: "Qu’est-ce qu’une réaction d’addition ?", back: "Une transformation où des entités se fixent sur une molécule, souvent au niveau d’une liaison multiple." },
      { front: "Qu’est-ce qu’une réaction de substitution ?", back: "Une transformation dans laquelle un atome ou groupe d’atomes est remplacé par un autre." },
      { front: "Qu’est-ce qu’une réaction d’élimination ?", back: "Une transformation conduisant au départ d’atomes ou de groupes et souvent à la formation d’une liaison multiple." },
      { front: "Que signifie oxyder une espèce organique ?", back: "Réaliser une transformation correspondant à une oxydation, souvent avec augmentation des liaisons à l’oxygène ou diminution des liaisons à l’hydrogène." },
      { front: "Que signifie réduire une espèce organique ?", back: "Réaliser une transformation correspondant à une réduction, souvent avec augmentation des liaisons à l’hydrogène ou diminution des liaisons à l’oxygène." },
      { front: "Pourquoi protéger une fonction chimique ?", back: "Pour limiter sa réactivité pendant une étape qui doit transformer une autre fonction." },
      { front: "Qu’est-ce qu’une déprotection ?", back: "Le retrait du groupe protecteur afin de retrouver la fonction initiale." },
      { front: "Quel est l’inconvénient fréquent d’une protection ?", back: "Elle ajoute des étapes et peut diminuer le rendement global." },
      { front: "Quelle différence entre protection et activation ?", back: "La protection diminue temporairement une réactivité indésirable ; l’activation facilite la transformation recherchée." },
      { front: "Comment calcule-t-on le rendement d’une étape ?", back: "Rendement = quantité de produit obtenue / quantité maximale théorique × 100 %." },
      { front: "Quel réactif sert à déterminer la quantité maximale théorique ?", back: "Le réactif limitant, en utilisant l’équation de réaction ajustée." },
      { front: "Comment calcule-t-on le rendement global de plusieurs étapes ?", back: "En multipliant les rendements successifs exprimés sous forme décimale." },
      { front: "Qu’est-ce que l’économie d’atomes ?", back: "La proportion de la masse des réactifs qui se retrouve théoriquement dans le produit recherché selon l’équation." },
      { front: "L’économie d’atomes tient-elle compte de l’énergie consommée ?", back: "Non, elle ne mesure pas directement la consommation énergétique ni tous les impacts du procédé." },
      { front: "Pourquoi ajuster l’équation d’une transformation ?", back: "Pour respecter la conservation des éléments et établir les proportions stœchiométriques." },
      { front: "À quoi sert une chromatographie dans le contrôle d’un produit ?", back: "À séparer les constituants d’un mélange et contribuer à évaluer la composition ou la pureté." },
      { front: "Que peut apporter un spectre infrarouge ?", back: "Des informations sur les liaisons et groupes caractéristiques présents dans une molécule." },
      { front: "Pourquoi purifier un produit de synthèse ?", back: "Pour éliminer des réactifs résiduels, sous-produits ou solvants et améliorer sa pureté." },
      { front: "Qu’est-ce que la sélectivité d’une transformation ?", back: "La capacité d’une transformation à favoriser la formation d’un produit ou d’un site réactionnel parmi plusieurs possibilités." },
      { front: "Pourquoi plusieurs fonctions dans une molécule compliquent-elles une synthèse ?", back: "Elles peuvent réagir dans les mêmes conditions et provoquer des transformations concurrentes." },
      { front: "Pourquoi le rendement global baisse-t-il souvent avec le nombre d’étapes ?", back: "Parce que le rendement global est le produit des rendements de chaque étape, généralement inférieurs ou égaux à 1." },
      { front: "Quel est l’intérêt de limiter le nombre d’étapes ?", back: "Réduire les pertes de matière, le temps, les coûts et souvent la quantité de déchets." },
      { front: "Pourquoi consulter les fiches de données de sécurité ?", back: "Pour connaître les dangers, les précautions de manipulation, le stockage et les mesures d’urgence." },
      { front: "Pourquoi le meilleur rendement ne suffit-il pas à choisir une stratégie ?", back: "Il faut aussi considérer la sécurité, la sélectivité, les déchets, le coût et l’impact environnemental." },
      { front: "Que doit contenir une conclusion de comparaison de synthèses ?", back: "Les critères comparés, les données utilisées, les limites et une justification du choix dans le contexte donné." }
    ],
    quiz: [
      { level: "Facile", question: "Quel est le point de départ d’une analyse rétrosynthétique ?", choices: ["La molécule cible", "Le déchet majoritaire", "Le solvant uniquement", "Le produit de purification"], answer: 0, explanation: "L’analyse remonte de la cible vers des précurseurs plus simples." },
      { level: "Facile", question: "Quel critère mesure la proportion de produit réellement obtenue par rapport au maximum théorique ?", choices: ["Le rendement", "La température de fusion", "La densité", "La solubilité"], answer: 0, explanation: "Le rendement compare la quantité obtenue à la quantité théorique maximale." },
      { level: "Facile", question: "Quelle opération limite temporairement la réactivité d’une fonction ?", choices: ["La protection", "La distillation", "La filtration", "La dilution"], answer: 0, explanation: "La protection rend temporairement une fonction moins réactive." },
      { level: "Facile", question: "Comment appelle-t-on le retrait d’un groupe protecteur ?", choices: ["Déprotection", "Activation", "Oxydation", "Extraction"], answer: 0, explanation: "La déprotection restaure la fonction protégée." },
      { level: "Intermédiaire", question: "Deux étapes ont des rendements de 80 % et 50 %. Quel est le rendement global ?", choices: ["40 %", "65 %", "30 %", "130 %"], answer: 0, explanation: "Le rendement global vaut 0,80 × 0,50 = 0,40, soit 40 %." },
      { level: "Intermédiaire", question: "Quel élément est nécessaire pour calculer la quantité théorique de produit ?", choices: ["L’équation ajustée et le réactif limitant", "La couleur du mélange", "Le volume du flacon seul", "La masse du solvant uniquement"], answer: 0, explanation: "La stœchiométrie de l’équation et le réactif limitant déterminent la quantité maximale." },
      { level: "Intermédiaire", question: "Quelle affirmation décrit l’économie d’atomes ?", choices: ["Elle évalue la part des atomes des réactifs retrouvée dans le produit visé", "Elle mesure directement l’énergie consommée", "Elle donne le temps de réaction", "Elle mesure la pureté expérimentale du produit"], answer: 0, explanation: "L’économie d’atomes est un indicateur théorique fondé sur l’équation de réaction." },
      { level: "Facile", question: "Quel outil peut séparer les constituants d’un mélange ?", choices: ["La chromatographie", "Le thermomètre seul", "La balance seule", "Le chronomètre"], answer: 0, explanation: "La chromatographie sépare les constituants selon leurs interactions avec les phases." },
      { level: "Intermédiaire", question: "Pourquoi une molécule polyfonctionnelle peut-elle nécessiter une protection ?", choices: ["Pour éviter qu’une fonction réagisse pendant la transformation d’une autre", "Pour augmenter automatiquement le rendement à 100 %", "Pour supprimer toutes les étapes", "Pour rendre le produit toujours soluble dans l’eau"], answer: 0, explanation: "Des fonctions concurrentes peuvent réagir dans les mêmes conditions." },
      { level: "Intermédiaire", question: "Quelle proposition distingue correctement activation et protection ?", choices: ["L’activation facilite une réaction ; la protection limite une réactivité indésirable", "Les deux termes désignent toujours la même opération", "La protection augmente nécessairement la vitesse de toutes les réactions", "L’activation consiste à purifier le produit"], answer: 0, explanation: "Les deux opérations ont des objectifs différents dans la stratégie." },
      { level: "Difficile", question: "Une voie comporte trois étapes de rendements 90 %, 80 % et 50 %. Quel est le rendement global ?", choices: ["36 %", "73,3 %", "40 %", "220 %"], answer: 0, explanation: "0,90 × 0,80 × 0,50 = 0,36, soit 36 %." },
      { level: "Intermédiaire", question: "Quel critère n’est pas directement mesuré par l’économie d’atomes ?", choices: ["La consommation énergétique réelle", "La proportion théorique d’atomes incorporés", "La stœchiométrie de l’équation", "La masse molaire du produit cible"], answer: 0, explanation: "L’économie d’atomes ne tient pas directement compte de l’énergie du procédé." },
      { level: "Facile", question: "À quoi sert un spectre infrarouge en analyse organique ?", choices: ["À obtenir des informations sur les liaisons et groupes caractéristiques", "À mesurer directement le rendement global", "À déterminer toujours la masse exacte", "À mesurer le volume du réacteur"], answer: 0, explanation: "Les bandes d’absorption renseignent sur certaines liaisons." },
      { level: "Intermédiaire", question: "Quel est l’intérêt d’une purification après synthèse ?", choices: ["Éliminer des impuretés et résidus", "Augmenter la quantité théorique", "Modifier les coefficients stœchiométriques", "Éviter de caractériser le produit"], answer: 0, explanation: "La purification améliore la pureté en séparant le produit des espèces indésirables." },
      { level: "Intermédiaire", question: "Quel choix est le plus pertinent pour comparer deux stratégies ?", choices: ["Examiner rendement, sécurité, déchets, coût et nombre d’étapes", "Comparer uniquement la couleur des produits", "Choisir toujours la voie la plus longue", "Ne considérer que le volume de solvant"], answer: 0, explanation: "Une comparaison pertinente repose sur plusieurs critères complémentaires." },
      { level: "Difficile", question: "Une étape donne 12 mmol de produit alors que la quantité théorique est 15 mmol. Quel est le rendement ?", choices: ["80 %", "125 %", "3 %", "27 %"], answer: 0, explanation: "12/15 × 100 = 80 %." },
      { level: "Facile", question: "Quel document décrit les dangers et précautions liés à un réactif ?", choices: ["La fiche de données de sécurité", "Le tableau périodique seul", "Le cahier de notes seul", "Le spectre IR"], answer: 0, explanation: "La fiche de données de sécurité rassemble les informations de prévention." },
      { level: "Intermédiaire", question: "Pourquoi limiter les étapes d’une synthèse peut-il être avantageux ?", choices: ["Cela peut réduire pertes, durée, coûts et déchets", "Cela garantit toujours un rendement de 100 %", "Cela rend inutile toute purification", "Cela supprime les risques chimiques"], answer: 0, explanation: "Moins d’étapes peut réduire les opérations et les pertes, sans garantir à lui seul la sécurité." },
      { level: "Difficile", question: "Une réaction concurrente forme un sous-produit. Quelle notion décrit la préférence de formation du produit souhaité ?", choices: ["La sélectivité", "La masse volumique", "La conductivité", "La pression"], answer: 0, explanation: "La sélectivité caractérise la préférence pour une voie ou un produit." },
      { level: "Intermédiaire", question: "Pourquoi faut-il justifier le choix des conditions expérimentales ?", choices: ["Elles influencent la transformation, la sélectivité, la sécurité et le rendement", "Elles n’ont jamais d’effet sur le résultat", "Elles servent uniquement à colorer le mélange", "Elles remplacent l’équation chimique"], answer: 0, explanation: "Les conditions doivent être adaptées au système et à la transformation visée." }
    ],
    exercises: [
      { title: "Calculer un rendement", level: "Facile", statement: "Une synthèse devait théoriquement produire 20,0 g d’un composé. La masse isolée après purification est de 15,0 g. Calculer le rendement.", correction: "R = 15,0 / 20,0 × 100 = 75,0 %. Le rendement est de 75,0 %.", skills: ["Rendement", "Pourcentage"] },
      { title: "Rendement global de deux étapes", level: "Facile", statement: "Une voie comporte deux étapes successives de rendements 80 % et 60 %. Calculer le rendement global.", correction: "R_global = 0,80 × 0,60 = 0,48, soit 48 %.", skills: ["Rendement global", "Pourcentages"] },
      { title: "Rendement global de trois étapes", level: "Intermédiaire", statement: "Trois étapes ont des rendements de 90 %, 75 % et 80 %. Déterminer le rendement global.", correction: "R_global = 0,90 × 0,75 × 0,80 = 0,54, soit 54 %.", skills: ["Rendement global", "Calcul"] },
      { title: "Quantité théorique et réactif limitant", level: "Intermédiaire", statement: "La réaction ajustée est A + 2 B → P. On introduit 0,10 mol de A et 0,15 mol de B. Déterminer le réactif limitant et la quantité maximale de P.", correction: "Pour 0,10 mol de A, il faudrait 0,20 mol de B ; on ne dispose que de 0,15 mol. B est limitant. Selon 2 B → P, n_max(P) = 0,15/2 = 0,075 mol.", skills: ["Stœchiométrie", "Réactif limitant"] },
      { title: "Comparer deux voies", level: "Intermédiaire", statement: "La voie A comporte deux étapes de rendements 70 % et 80 %. La voie B comporte une étape de rendement 50 %. Comparer leurs rendements globaux.", correction: "Voie A : 0,70 × 0,80 = 0,56, soit 56 %. Voie B : 50 %. Sur le seul critère du rendement global, A est supérieure. Il faut toutefois comparer aussi sécurité, déchets, coût et sélectivité.", skills: ["Comparaison", "Rendement"] },
      { title: "Économie d’atomes", level: "Difficile", statement: "Une équation théorique utilise des réactifs dont la somme des masses molaires stœchiométriques vaut 150 g·mol⁻¹. Le produit recherché a une masse molaire de 90 g·mol⁻¹. Calculer l’économie d’atomes.", correction: "Économie d’atomes = 90/150 × 100 = 60 %. Cette valeur théorique ne décrit pas à elle seule les déchets réels ni l’énergie consommée.", skills: ["Économie d’atomes", "Analyse critique"] },
      { title: "Identifier une fonction à protéger", level: "Intermédiaire", statement: "Une molécule possède deux fonctions réactives X et Y. L’étape souhaitée transforme X, mais le réactif utilisé peut aussi transformer Y. Proposer une stratégie générale.", correction: "On peut rechercher un groupe protecteur adapté à Y, réaliser la transformation de X dans des conditions compatibles, puis retirer le groupe protecteur. Il faut vérifier la sélectivité et la compatibilité des conditions de protection et déprotection.", skills: ["Protection", "Sélectivité"] },
      { title: "Analyser un contrôle chromatographique", level: "Intermédiaire", statement: "Un chromatogramme du produit isolé présente une tache principale et deux taches secondaires. Que peut-on conclure et quelle précaution prendre ?", correction: "L’échantillon contient au moins plusieurs espèces détectées dans les conditions de l’analyse. La tache principale peut correspondre au produit attendu si elle est comparée à un témoin ou à une référence ; le chromatogramme seul ne suffit pas toujours à identifier formellement les espèces.", skills: ["Chromatographie", "Interprétation"] },
      { title: "Choisir une méthode de caractérisation", level: "Intermédiaire", statement: "On souhaite vérifier la présence d’un groupe carbonyle dans un produit organique. Proposer une technique adaptée et préciser sa limite.", correction: "La spectroscopie infrarouge peut mettre en évidence une bande caractéristique de la liaison C=O. L’interprétation doit tenir compte des autres bandes et ne suffit pas toujours à établir seule la structure complète.", skills: ["Spectroscopie IR", "Limites"] },
      { title: "Évaluer une stratégie de synthèse", level: "Difficile", statement: "Une voie A présente un rendement de 85 % en une étape avec un réactif dangereux. Une voie B présente un rendement global de 70 % en deux étapes avec des réactifs moins dangereux et moins de déchets. Peut-on choisir uniquement A ? Justifier.", correction: "Non. Le rendement plus élevé de A est un avantage, mais la décision doit intégrer les risques, la gestion des déchets, les conditions opératoires, le coût et la disponibilité. B peut être préférable selon le contexte et les mesures de maîtrise des risques.", skills: ["Analyse multicritère", "Sécurité"] }
    ],
    revisionSheets: [{ title: 'Fiche méthode — stratégies de synthèse organique', summary: ['Partir de la molécule cible et remonter vers des précurseurs.','Identifier les transformations possibles et la compatibilité des fonctions.','Comparer les voies selon plusieurs critères, pas uniquement le rendement.'], mustKnow: ['Rendement = quantité obtenue / quantité théorique × 100 %.','Rendement global = produit des rendements successifs sous forme décimale.','Protection : limiter temporairement une réactivité ; déprotection : restaurer la fonction.','Économie d’atomes : indicateur théorique fondé sur l’équation ajustée.'], methods: ['Ajuster l’équation et déterminer le réactif limitant.','Calculer la quantité théorique puis le rendement.','Pour plusieurs étapes, multiplier les rendements décimaux.','Discuter sécurité, sélectivité, déchets, coût et limites des données.'] }],
    sources: [{ title: 'Programme de physique-chimie de terminale générale — spécialité', institution: 'Ministère de l’Éducation nationale, Bulletin officiel spécial n° 8 du 25 juillet 2019', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm', consultedAt: '2026-11-01', supports: ['Élaborer des stratégies en synthèse organique'] }, { title: 'Programmes et ressources en physique-chimie — voie générale et technologique', institution: 'Éduscol', url: 'https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt', consultedAt: '2026-11-01', supports: ['Ressources d’accompagnement du programme'] }],
    sourceNote: 'Ressource de travail rédigée à partir du programme officiel de spécialité physique-chimie de Terminale. Les exemples sont pédagogiques et les conditions expérimentales doivent être adaptées aux protocoles et aux règles de sécurité du laboratoire. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'pc-mouvement': {
    title: 'Décrire un mouvement',
    objectives: ['Définir et exploiter les vecteurs position, vitesse et accélération.', 'Établir les coordonnées cartésiennes de la vitesse et de l’accélération par dérivation.', 'Caractériser les mouvements rectilignes et circulaires.', 'Exploiter une chronophotographie ou une vidéo pour étudier un mouvement.'],
    course: [
      { heading: '1. Référentiel et description du mouvement', body: ['Décrire un mouvement nécessite de choisir un référentiel, constitué d’un repère spatial et d’une référence de temps. La description dépend du référentiel : un passager assis est immobile dans le référentiel du bus, mais en mouvement dans le référentiel terrestre.', 'La position d’un point M est repérée par le vecteur position OM⃗. En coordonnées cartésiennes, on peut écrire OM⃗ = x(t)i⃗ + y(t)j⃗ + z(t)k⃗.'] },
      { heading: '2. Vecteurs vitesse et accélération', body: ['Le vecteur vitesse est la dérivée du vecteur position : v⃗ = dOM⃗/dt. En coordonnées cartésiennes, v⃗ = ẋi⃗ + ẏj⃗ + żk⃗. Sa direction est tangente à la trajectoire et sa norme correspond à la valeur de la vitesse.', 'Le vecteur accélération est la dérivée du vecteur vitesse : a⃗ = dv⃗/dt. Ses coordonnées sont les dérivées des coordonnées de la vitesse. Les unités SI sont m·s⁻¹ pour la vitesse et m·s⁻² pour l’accélération.'] },
      { heading: '3. Mouvements rectilignes', body: ['Pour un mouvement rectiligne, la trajectoire est une droite. Le mouvement est uniforme si la norme de la vitesse est constante ; dans le cas rectiligne uniforme, le vecteur vitesse est constant et l’accélération est nulle.', 'Si l’accélération projetée ax est constante, vx(t)=vx,0+ax t et x(t)=x0+vx,0 t+½ax t². Le signe de ax décrit son orientation sur l’axe choisi ; il ne suffit pas à lui seul à dire si la vitesse augmente ou diminue.'] },
      { heading: '4. Mouvements circulaires et repère de Frenet', body: ['Dans un mouvement circulaire, le vecteur vitesse est tangent au cercle. Dans le repère de Frenet, l’accélération se décompose en une composante tangentielle at=dv/dt et une composante normale an=v²/R dirigée vers le centre.', 'Pour un mouvement circulaire uniforme, la norme de la vitesse est constante : at=0, mais an reste non nulle. Le vecteur accélération change donc la direction de la vitesse.'] },
      { heading: '5. Exploiter des données expérimentales', body: ['Une chronophotographie présente des positions prises à intervalles de temps réguliers. Les positions datées permettent d’estimer les vecteurs vitesse, puis les variations de vitesse et donc l’accélération.', 'Une estimation centrée de la vitesse au point Mi peut utiliser les positions précédente et suivante : v⃗i ≈ (OMi+1⃗−OMi−1⃗)/(2Δt). Les résultats sont approchés et dépendent de l’échelle, du pointage et de la précision temporelle.'] },
    ],
    keyPoints: ['Le mouvement est toujours décrit dans un référentiel précisé.', 'v⃗=dOM⃗/dt et a⃗=dv⃗/dt.', 'En mouvement rectiligne uniforme, a⃗=0.', 'Pour une accélération constante : vx=vx,0+ax t et x=x0+vx,0t+½ax t².', 'En mouvement circulaire uniforme, at=0 et an=v²/R vers le centre.', 'Les valeurs issues d’une vidéo ou d’une chronophotographie sont des estimations expérimentales.'],
    method: ['Choisir et nommer le référentiel et le repère.', 'Identifier les coordonnées de la position en fonction du temps.', 'Dériver chaque coordonnée une première fois pour obtenir la vitesse.', 'Dériver une seconde fois pour obtenir l’accélération.', 'Pour un cercle, identifier R, v et les composantes tangentielle et normale.', 'Vérifier les unités, les signes et les conditions initiales.'],
    flashcards: [
      { front: 'Qu’est-ce que le vecteur position ?', back: 'Le vecteur qui repère la position d’un point par rapport à l’origine d’un référentiel.' },
      { front: 'Comment définit-on le vecteur vitesse ?', back: 'Comme la dérivée temporelle du vecteur position : v⃗ = dOM⃗/dt.' },
      { front: 'Comment définit-on le vecteur accélération ?', back: 'Comme la dérivée temporelle du vecteur vitesse : a⃗ = dv⃗/dt.' },
      { front: 'Quelle est l’unité SI de la vitesse ?', back: 'Le mètre par seconde (m·s⁻¹).' },
      { front: 'Quelle est l’unité SI de l’accélération ?', back: 'Le mètre par seconde carrée (m·s⁻²).' },
      { front: 'Que représente la norme du vecteur vitesse ?', back: 'La valeur de la vitesse, toujours positive ou nulle.' },
      { front: 'Que signifie un mouvement rectiligne ?', back: 'La trajectoire est une droite.' },
      { front: 'Que signifie un mouvement uniforme ?', back: 'La norme de la vitesse reste constante.' },
      { front: 'Que signifie un mouvement rectiligne uniforme ?', back: 'La trajectoire est droite et le vecteur vitesse est constant.' },
      { front: 'Comment est le vecteur accélération en mouvement rectiligne uniforme ?', back: 'Il est nul. Le vecteur vitesse ne change ni de direction ni de valeur.' },
      { front: 'Comment est le vecteur accélération en mouvement rectiligne uniformément accéléré ?', back: 'Il est constant et colinéaire au mouvement, avec une projection algébrique constante.' },
      { front: 'Quelle est l’expression de x(t) pour une accélération constante ax ?', back: 'x(t) = x₀ + vx₀t + ½axt².' },
      { front: 'Quelle est l’expression de vx(t) pour une accélération constante ax ?', back: 'vx(t) = vx₀ + axt.' },
      { front: 'Que donne la dérivée de x(t) ?', back: 'La coordonnée vx(t) de la vitesse.' },
      { front: 'Que donne la dérivée de vx(t) ?', back: 'La coordonnée ax(t) de l’accélération.' },
      { front: 'Qu’est-ce qu’une chronophotographie ?', back: 'Une succession d’images prises à intervalles de temps réguliers.' },
      { front: 'À quoi sert le référentiel ?', back: 'À définir le repère spatial et la mesure du temps pour décrire le mouvement.' },
      { front: 'Pourquoi préciser le référentiel ?', back: 'Un même objet peut avoir des mouvements différents selon le référentiel choisi.' },
      { front: 'Dans un mouvement circulaire, quelle est la direction de v⃗ ?', back: 'La tangente à la trajectoire au point considéré.' },
      { front: 'Dans un mouvement circulaire uniforme, quelle est la direction de a⃗ ?', back: 'Elle est centripète, dirigée vers le centre du cercle.' },
      { front: 'Quelle est la norme de l’accélération normale en mouvement circulaire ?', back: 'an = v²/R.' },
      { front: 'Que représente R dans an = v²/R ?', back: 'Le rayon du cercle de trajectoire.' },
      { front: 'Quelle est la composante tangentielle de l’accélération ?', back: 'Elle traduit la variation de la norme de la vitesse : at = dv/dt.' },
      { front: 'Que vaut at en mouvement circulaire uniforme ?', back: 'Zéro, car la norme de la vitesse est constante.' },
      { front: 'Que vaut la composante normale en mouvement rectiligne ?', back: 'Zéro, car la direction de la vitesse ne change pas.' },
      { front: 'Comment déterminer une vitesse moyenne sur un intervalle ?', back: 'Par le déplacement vectoriel divisé par la durée ; la célérité moyenne utilise la distance parcourue.' },
      { front: 'Vitesse moyenne et célérité moyenne sont-elles identiques ?', back: 'Pas nécessairement : la première dépend du déplacement, la seconde de la distance parcourue.' },
      { front: 'Que signifie une accélération négative sur un axe ?', back: 'Le vecteur accélération est orienté dans le sens négatif de l’axe ; cela ne signifie pas toujours que la vitesse diminue.' },
      { front: 'Comment obtenir une accélération approchée avec des positions ?', back: 'En estimant d’abord les vitesses à partir des positions datées, puis la variation de vitesse sur la durée.' },
      { front: 'Quel contrôle faire sur une expression de x(t) ?', back: 'Vérifier les unités, la position initiale à t = 0 et la vitesse initiale obtenue par dérivation.' },
    ],
    quiz: [
      { level: 'Facile', question: 'La position d’un point est donnée par x(t). La coordonnée de sa vitesse est :', choices: ['dx/dt', 'd²x/dt²', '∫x dt', 'x/t'], answer: 0, explanation: 'La vitesse est la dérivée temporelle de la position.' },
      { level: 'Facile', question: 'L’accélération est :', choices: ['la dérivée de la vitesse', 'la dérivée de la position', 'la distance divisée par le temps', 'la norme de la vitesse'], answer: 0, explanation: 'Par définition, a⃗ = dv⃗/dt. Elle décrit la variation temporelle du vecteur vitesse, en norme et/ou en direction.' },
      { level: 'Facile', question: 'Un mouvement rectiligne uniforme possède un vecteur vitesse :', choices: ['constant', 'de norme constante mais de direction variable', 'toujours nul', 'dont la norme augmente'], answer: 0, explanation: 'La direction et la norme restent constantes. La trajectoire est droite et la vitesse ne varie ni en valeur ni en direction.' },
      { level: 'Facile', question: 'L’unité SI de l’accélération est :', choices: ['m·s⁻²', 'm·s⁻¹', 'km·h⁻¹', 'N·kg'], answer: 0, explanation: 'Une dérivée de vitesse par rapport au temps donne m·s⁻².' },
      { level: 'Facile', question: 'Une trajectoire circulaire uniforme a une accélération :', choices: ['dirigée vers le centre', 'tangentielle et constante non nulle', 'nulle', 'dirigée dans le sens du mouvement'], answer: 0, explanation: 'La direction de la vitesse change ; l’accélération est centripète.' },
      { level: 'Facile', question: 'Pour un mouvement circulaire uniforme, an vaut :', choices: ['v²/R', 'vR', 'R/v²', 'v/R²'], answer: 0, explanation: 'La composante normale vaut v²/R. Cette accélération est dirigée vers le centre du cercle.' },
      { level: 'Facile', question: 'Si x(t)=2+3t+2t² en unités SI, vx(t) vaut :', choices: ['3+4t', '2+3t', '4t', '3+2t'], answer: 0, explanation: 'On dérive x(t) : vx = 3 + 4t. La vitesse est la dérivée de la position par rapport au temps.' },
      { level: 'Intermédiaire', question: 'Pour x(t)=2+3t+2t², ax vaut :', choices: ['4 m·s⁻²', '2 m·s⁻²', '4t m·s⁻²', '3 m·s⁻²'], answer: 0, explanation: 'La dérivée de vx = 3 + 4t est 4. L’accélération est la dérivée de la vitesse ; elle est constante dans cet exemple.' },
      { level: 'Intermédiaire', question: 'Une accélération négative sur un axe signifie :', choices: ['qu’elle est orientée vers les x négatifs', 'que la vitesse diminue toujours', 'que le mobile recule nécessairement', 'que sa norme est négative'], answer: 0, explanation: 'Le signe donne l’orientation de la projection sur l’axe.' },
      { level: 'Intermédiaire', question: 'Une chronophotographie présente des clichés :', choices: ['séparés par des durées égales', 'pris à des distances égales', 'nécessairement flous', 'sans indication temporelle possible'], answer: 0, explanation: 'Les clichés sont généralement réalisés à intervalles réguliers.' },
      { level: 'Intermédiaire', question: 'La vitesse instantanée est tangente :', choices: ['à la trajectoire', 'au rayon vers le centre', 'à l’accélération dans tous les cas', 'à l’axe vertical'], answer: 0, explanation: 'Le vecteur vitesse est tangent à la trajectoire.' },
      { level: 'Intermédiaire', question: 'En mouvement rectiligne, la composante normale de l’accélération est :', choices: ['nulle', 'égale à v²/R', 'toujours positive', 'égale à v'], answer: 0, explanation: 'La direction de la vitesse ne change pas. La direction de la vitesse reste fixe, donc sa composante normale est nulle.' },
      { level: 'Intermédiaire', question: 'En mouvement circulaire uniforme, at vaut :', choices: ['0', 'v²/R', 'v/R', 'constante positive'], answer: 0, explanation: 'La norme de la vitesse est constante. L’accélération tangentielle traduit la variation de la valeur de la vitesse.' },
      { level: 'Intermédiaire', question: 'Si la vitesse passe de 4 à 10 m·s⁻¹ en 3 s, l’accélération moyenne projetée vaut :', choices: ['2 m·s⁻²', '6 m·s⁻²', '14 m·s⁻²', '0,5 m·s⁻²'], answer: 0, explanation: '(10 − 4)/3 = 2 m·s⁻². On divise la variation de vitesse par la durée de l’intervalle.' },
      { level: 'Difficile', question: 'Un objet immobile dans un bus peut être en mouvement dans :', choices: ['le référentiel terrestre', 'aucun référentiel', 'tous les référentiels', 'le référentiel du bus uniquement'], answer: 0, explanation: 'Le mouvement dépend du référentiel ; il peut bouger par rapport au sol.' },
      { level: 'Difficile', question: 'Pour x(t)=5−2t, la vitesse projetée est :', choices: ['−2 m·s⁻¹', '5 m·s⁻¹', '−2t m·s⁻¹', '5−2t m·s⁻¹'], answer: 0, explanation: 'La dérivée de 5−2t est −2. Le signe négatif indique un déplacement dans le sens négatif de l’axe choisi.' },
      { level: 'Difficile', question: 'Si le vecteur vitesse est constant, alors :', choices: ['l’accélération est nulle', 'la trajectoire est circulaire', 'la vitesse augmente', 'l’accélération est constante non nulle'], answer: 0, explanation: 'La dérivée d’un vecteur constant est nulle. Il n’existe aucune variation de vitesse, ni en valeur ni en direction.' },
      { level: 'Difficile', question: 'Le rayon d’une trajectoire circulaire double, à vitesse égale. an est :', choices: ['divisée par deux', 'multipliée par deux', 'multipliée par quatre', 'inchangée'], answer: 0, explanation: 'an = v²/R : doubler R divise an par deux. À vitesse inchangée, un cercle plus grand nécessite une accélération centripète plus faible.' },
      { level: 'Difficile', question: 'La dérivée de x(t)=x₀+v₀t+½at² est :', choices: ['v₀+at', 'x₀+v₀+at', '½at', 'v₀+½at'], answer: 0, explanation: 'La dérivée donne v(t)=v₀+at. On retrouve la relation usuelle d’un mouvement à accélération constante.' },
      { level: 'Difficile', question: 'Pour estimer l’accélération à partir d’une vidéo, il faut :', choices: ['exploiter l’évolution temporelle du vecteur vitesse', 'se limiter à mesurer la taille de l’objet', 'connaître uniquement la masse', 'mesurer une seule position'], answer: 0, explanation: 'L’accélération traduit la variation du vecteur vitesse au cours du temps.' },
    ],
    exercises: [
      { title: 'Dériver une loi horaire', level: 'Facile', statement: 'La position est x(t)=1,0+2,0t+0,50t² (SI). Déterminer vx(t) et ax(t).', correction: 'vx(t)=2,0+1,0t m·s⁻¹ ; ax(t)=1,0 m·s⁻².', skills: ['Dérivation'] },
      { title: 'Identifier un mouvement uniforme', level: 'Facile', statement: 'Un mobile suit une droite avec x(t)=4−3t. Caractériser son mouvement.', correction: 'vx=−3 m·s⁻¹ est constant et ax=0 : mouvement rectiligne uniforme dans le sens négatif de l’axe.', skills: ['Lecture de loi horaire'] },
      { title: 'Calculer une accélération moyenne', level: 'Facile', statement: 'La vitesse projetée passe de 5,0 à 11,0 m·s⁻¹ en 2,0 s. Calculer ax moyen.', correction: 'ax,moy=(11,0−5,0)/2,0=3,0 m·s⁻².', skills: ['Calcul de variation'] },
      { title: 'Analyser un signe', level: 'Intermédiaire', statement: 'Un mobile se déplace avec vx=+8 m·s⁻¹ et ax=−2 m·s⁻². Que peut-on dire instantanément de son évolution ?', correction: 'L’accélération est opposée à la vitesse : la norme de la vitesse diminue à cet instant.', skills: ['Interprétation vectorielle'] },
      { title: 'Mouvement circulaire', level: 'Intermédiaire', statement: 'Un point suit un cercle de rayon 0,50 m à la vitesse constante 4,0 m·s⁻¹. Calculer an.', correction: 'an=v²/R=16/0,50=32 m·s⁻², dirigée vers le centre.', skills: ['Mouvement circulaire'] },
      { title: 'Retrouver une loi horaire', level: 'Intermédiaire', statement: 'Un mouvement rectiligne a ax=−1,5 m·s⁻², x0=2,0 m et vx0=6,0 m·s⁻¹. Établir x(t).', correction: 'x(t)=2,0+6,0t−0,75t² (SI).', skills: ['Intégration cinématique'] },
      { title: 'Exploiter une chronophotographie', level: 'Intermédiaire', statement: 'Des positions successives sont relevées toutes les 0,10 s. Explique comment estimer la vitesse au point M2 avec les positions M1 et M3.', correction: 'Approximation centrée : v⃗(M2) ≈ [M1M3⃗]/(2Δt), avec Δt=0,10 s.', skills: ['Traitement de données'] },
      { title: 'Distinguer vitesse et accélération', level: 'Difficile', statement: 'Un mobile se déplace vers les x positifs. Sa vitesse projetée est positive mais décroît. Quel est le signe de ax ? Justifier.', correction: 'ax est négatif : la vitesse projetée positive diminue, donc sa dérivée est négative.', skills: ['Analyse de signe'] },
      { title: 'Comparer deux trajectoires circulaires', level: 'Difficile', statement: 'Deux mobiles ont la même vitesse. Le premier suit R1=2,0 m et le second R2=5,0 m. Comparer leurs accélérations normales.', correction: 'an1/an2=R2/R1=2,5. Le premier a une accélération normale 2,5 fois plus grande.', skills: ['Proportionnalité'] },
      { title: 'Vérifier une loi horaire', level: 'Difficile', statement: 'On propose x(t)=3+4t−2t² (SI). Donner x0, vx0 et ax, puis vérifier les unités des termes.', correction: 'x0=3 m ; vx=4−4t donc vx0=4 m·s⁻¹ ; ax=−4 m·s⁻². Chaque terme de x(t) est en mètres.', skills: ['Validation de modèle'] },
    ],
    revisionSheets: [{ title: 'Fiche méthode — décrire un mouvement', summary: ['Le référentiel conditionne la description du mouvement.','La vitesse est la dérivée du vecteur position.','L’accélération est la dérivée du vecteur vitesse.','Le mouvement circulaire uniforme possède une accélération centripète.'], mustKnow: ['v⃗ = dOM⃗/dt','a⃗ = dv⃗/dt','vx = vx,0 + ax t si ax est constant','x = x0 + vx,0 t + ½ax t² si ax est constant','an = v²/R et at = dv/dt dans le repère de Frenet'], methods: ['Définir le référentiel.','Écrire les coordonnées de la position.','Dériver pour obtenir vitesse puis accélération.','Identifier le type de mouvement.','Contrôler unités, signes et cohérence physique.'] }],
    sources: [{ title: 'Programme de l’enseignement de spécialité de physique-chimie de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm', consultedAt: '2026-11-01', supports: ['Décrire un mouvement : vecteurs position, vitesse et accélération', 'Coordonnées dans le repère de Frenet', 'Exploitation d’une vidéo ou chronophotographie'] }, { title: 'Programmes et ressources en physique-chimie — voie générale et technologique', institution: 'Éduscol', url: 'https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt', consultedAt: '2026-11-01', supports: ['Ressources officielles d’accompagnement du thème mouvement et interactions'] }],
    sourceNote: 'Ressource de travail alignée sur les notions et capacités du programme officiel de Terminale. Les expressions cinématiques sont utilisées dans les hypothèses précisées dans chaque exercice ; les données expérimentales conduisent à des estimations. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'pc-forces': {
    title: 'Relier les actions appliquées à un système à son mouvement',
    objectives: ['Réaliser un bilan des forces extérieures exercées sur un système.', 'Modéliser les actions mécaniques par des vecteurs forces.', 'Exploiter le principe d’inertie et la deuxième loi de Newton dans un référentiel galiléen.', 'Projeter les relations vectorielles sur des axes adaptés.', 'Identifier les couples d’actions réciproques conformément à la troisième loi de Newton.'],
    course: [
      { heading: "1. Système, référentiel et interactions", body: ["On commence par définir précisément le système étudié, puis le référentiel dans lequel on décrit son mouvement. En mécanique classique au programme, les lois de Newton sont appliquées dans un référentiel supposé galiléen.", "Un diagramme objet-interactions aide à recenser les objets qui agissent sur le système : Terre, support, fil, fluide ou autre objet en contact. On ne conserve ensuite dans le bilan que les forces extérieures exercées sur le système."] },
      { heading: "2. Modéliser une action mécanique par une force", body: ["Une force est représentée par un vecteur caractérisé par son point d’application, sa direction, son sens et sa valeur. Son unité SI est le newton (N).", "Le poids près de la surface terrestre est P⃗ = m g⃗ ; sa valeur est P = mg. La réaction normale d’un support est perpendiculaire à la surface. Une tension suit la direction du fil tendu. Les frottements de contact sont tangentiels à la surface et s’opposent au glissement relatif ou à sa tendance."] },
      { heading: "3. Principe d’inertie et résultante des forces", body: ["Dans un référentiel galiléen, si la somme vectorielle des forces extérieures est nulle, le vecteur vitesse est constant : le système reste au repos ou en mouvement rectiligne uniforme.", "Réciproquement, si le vecteur vitesse varie, la résultante des forces extérieures n’est pas nulle. Il faut distinguer vitesse et accélération : la résultante des forces détermine l’accélération, pas directement le sens de déplacement."] },
      { heading: "4. Deuxième loi de Newton", body: ["Pour un système de masse constante dans un référentiel galiléen, la deuxième loi de Newton s’écrit ΣF⃗ext = m a⃗. La résultante et l’accélération ont même direction et même sens.", "On choisit des axes adaptés puis on projette la relation sur chacun d’eux. Sur un axe x : ΣFext,x = m ax. Les signes dépendent du sens positif choisi. Les projections doivent être accompagnées de leurs unités."] },
      { heading: "5. Troisième loi de Newton et méthode", body: ["Si un objet A exerce sur un objet B une force F⃗A→B, alors B exerce sur A une force F⃗B→A = −F⃗A→B. Ces forces ont même direction et même valeur, des sens opposés, et s’exercent sur deux systèmes différents.", "Méthode : définir le système et le référentiel ; recenser les interactions ; représenter les forces extérieures ; choisir les axes ; appliquer une loi adaptée ; projeter ; calculer et vérifier les unités et la cohérence du résultat."] },
    ],
    keyPoints: ['Une force modélise une action mécanique et s’exprime en newtons.', 'Le poids près de la Terre vaut P = mg.', 'Dans un référentiel galiléen, ΣF⃗ext = 0 implique un vecteur vitesse constant.', 'Pour une masse constante : ΣF⃗ext = m a⃗.', 'La résultante des forces et l’accélération ont même direction et même sens.', 'Les forces d’action-réaction agissent sur deux systèmes différents.'],
    method: ['Définir le système étudié et le référentiel.', 'Faire le diagramme objet-interactions.', 'Dresser le bilan exhaustif des forces extérieures.', 'Représenter chaque force avec direction, sens et valeur connue.', 'Choisir des axes pertinents et projeter la deuxième loi de Newton.', 'Résoudre les équations puis vérifier unités, signes et cohérence physique.'],
    flashcards: [{front: "Qu’appelle-t-on système étudié ?", back: "La portion de matière ou l’objet choisi pour l’étude mécanique."}, {front: "Qu’est-ce que le référentiel d’étude ?", back: "Le solide de référence auquel on associe un repère spatial et une horloge."}, {front: "Qu’est-ce qu’une action mécanique ?", back: "Une action exercée par un objet sur le système, pouvant modifier son mouvement ou le déformer."}, {front: "Qu’est-ce qu’une force ?", back: "Une modélisation vectorielle d’une action mécanique."}, {front: "Quelles sont les caractéristiques d’une force ?", back: "Point d’application, direction, sens et valeur (intensité)."}, {front: "Quelle est l’unité SI d’une force ?", back: "Le newton (N)."}, {front: "Comment représente-t-on le poids ?", back: "Par un vecteur vertical dirigé vers le bas, de valeur P = mg près de la surface terrestre."}, {front: "Quelle est l’unité SI de la masse ?", back: "Le kilogramme (kg)."}, {front: "Quelle est l’unité usuelle de g ?", back: "Le newton par kilogramme (N·kg⁻¹), équivalent à m·s⁻²."}, {front: "Comment modéliser la réaction normale d’un support ?", back: "Par une force perpendiculaire à la surface de contact, orientée du support vers le système."}, {front: "Qu’est-ce qu’une tension ?", back: "Une force exercée par un fil ou un câble tendu, dirigée suivant le fil."}, {front: "Qu’est-ce que la force de frottement ?", back: "Une force de contact tangentielle qui s’oppose au glissement relatif ou à sa tendance."}, {front: "Énoncer le principe d’inertie.", back: "Dans un référentiel galiléen, si la somme vectorielle des forces est nulle, le système reste au repos ou en mouvement rectiligne uniforme."}, {front: "Quelle est la contraposée utile du principe d’inertie ?", back: "Si le vecteur vitesse n’est pas constant, alors la somme des forces n’est pas nulle dans un référentiel galiléen."}, {front: "Énoncer la deuxième loi de Newton.", back: "Dans un référentiel galiléen, la somme des forces extérieures vaut m a⃗ pour un système de masse constante."}, {front: "Quelle relation relie résultante des forces et accélération ?", back: "ΣF⃗ext = m a⃗."}, {front: "Que signifie une résultante des forces nulle ?", back: "L’accélération est nulle dans le référentiel galiléen considéré : la vitesse vectorielle est constante."}, {front: "Que signifie une résultante non nulle ?", back: "Le vecteur accélération est non nul et de même direction et sens que la résultante."}, {front: "Qu’est-ce qu’un référentiel galiléen ?", back: "Un référentiel dans lequel les lois de Newton s’appliquent sous leur forme usuelle."}, {front: "Pourquoi faire le bilan des forces ?", back: "Pour identifier toutes les actions extérieures avant d’appliquer une loi de Newton."}, {front: "Qu’est-ce qu’un diagramme objet-interactions ?", back: "Un schéma qui recense les objets en interaction avec le système étudié."}, {front: "Comment projeter la deuxième loi de Newton ?", back: "Choisir des axes puis projeter chaque vecteur force et l’accélération sur ces axes."}, {front: "Que vaut l’accélération d’un objet en équilibre de translation ?", back: "Zéro ; la somme vectorielle des forces extérieures est nulle."}, {front: "Une force et une vitesse ont-elles toujours la même direction ?", back: "Non. La résultante des forces donne la direction de l’accélération, pas nécessairement celle de la vitesse."}, {front: "Quelle est la différence entre masse et poids ?", back: "La masse caractérise l’inertie en kg ; le poids est une force gravitationnelle exprimée en N."}, {front: "Comment calculer le poids ?", back: "P = mg, avec m en kg et g en N·kg⁻¹."}, {front: "Que représente l’action réciproque dans la troisième loi de Newton ?", back: "La force exercée par B sur A, opposée à celle exercée par A sur B."}, {front: "Énoncer la troisième loi de Newton.", back: "Si A exerce sur B une force F⃗A→B, alors B exerce sur A −F⃗A→B."}, {front: "Les forces d’action-réaction s’exercent-elles sur le même système ?", back: "Non. Elles s’exercent sur deux systèmes différents."}, {front: "Quelle vérification effectuer dans un calcul de force ?", back: "Vérifier les unités, les signes des projections et la cohérence du sens de l’accélération."}],
    quiz: [{level: "Facile", question: "L’unité SI d’une force est :", choices: ["le newton", "le joule", "le watt", "le kilogramme"], answer: 0, explanation: "Le newton (N) est l’unité de force."}, {level: "Facile", question: "Près de la surface terrestre, la valeur du poids est :", choices: ["mg", "m/g", "g/m", "m+g"], answer: 0, explanation: "Le poids est la force gravitationnelle P = mg."}, {level: "Facile", question: "Le poids d’un objet est orienté :", choices: ["verticalement vers le bas", "horizontalement", "verticalement vers le haut", "dans le sens de sa vitesse"], answer: 0, explanation: "Près de la Terre, le poids est dirigé vers le centre terrestre."}, {level: "Facile", question: "La masse s’exprime en :", choices: ["kg", "N", "m·s⁻²", "J"], answer: 0, explanation: "Le kilogramme est l’unité SI de masse."}, {level: "Facile", question: "Une force est caractérisée par :", choices: ["point, direction, sens et valeur", "masse, vitesse et durée", "position et accélération seulement", "volume et température"], answer: 0, explanation: "Une force est un vecteur défini par ces quatre caractéristiques."}, {level: "Facile", question: "Dans un référentiel galiléen, si ΣF⃗ = 0 alors :", choices: ["a⃗ = 0", "v⃗ = 0 nécessairement", "la masse est nulle", "la trajectoire est circulaire"], answer: 0, explanation: "La deuxième loi donne m a⃗ = 0 ; pour m non nulle, a⃗ = 0."}, {level: "Facile", question: "La deuxième loi de Newton s’écrit :", choices: ["ΣF⃗ext = m a⃗", "ΣF⃗ext = m v⃗", "ΣF⃗ext = a⃗/m", "ΣF⃗ext = m/g"], answer: 0, explanation: "Pour une masse constante dans un référentiel galiléen, la résultante vaut m a⃗."}, {level: "Intermédiaire", question: "Un objet de masse 2,0 kg subit g = 9,8 N·kg⁻¹. Son poids vaut :", choices: ["19,6 N", "4,9 N", "11,8 N", "0,20 N"], answer: 0, explanation: "P = mg = 2,0 × 9,8 = 19,6 N."}, {level: "Intermédiaire", question: "La résultante des forces est de 12 N sur un objet de 3 kg. L’accélération vaut :", choices: ["4 m·s⁻²", "36 m·s⁻²", "9 m·s⁻²", "0,25 m·s⁻²"], answer: 0, explanation: "a = ΣF/m = 12/3 = 4 m·s⁻²."}, {level: "Intermédiaire", question: "Une force de 10 N vers +x et une force de 6 N vers −x agissent sur un système. La résultante projetée vaut :", choices: ["+4 N", "+16 N", "−4 N", "−16 N"], answer: 0, explanation: "En projection, ΣFx = 10 − 6 = +4 N."}, {level: "Intermédiaire", question: "Un objet se déplace à vitesse vectorielle constante. Dans un référentiel galiléen :", choices: ["ΣF⃗ext = 0", "ΣF⃗ext est dans le sens du mouvement", "son poids est nul", "sa masse est nulle"], answer: 0, explanation: "Le principe d’inertie relie vitesse constante et résultante nulle."}, {level: "Intermédiaire", question: "La réaction normale d’un plan horizontal est :", choices: ["perpendiculaire au plan", "parallèle au plan", "toujours égale au poids quelles que soient les autres forces", "orientée vers le bas"], answer: 0, explanation: "Par définition, la réaction normale est perpendiculaire à la surface."}, {level: "Intermédiaire", question: "Une tension exercée par un fil idéal est dirigée :", choices: ["suivant le fil", "perpendiculairement au fil", "toujours verticalement", "dans le sens de l’accélération"], answer: 0, explanation: "La force de tension suit la direction du fil tendu."}, {level: "Intermédiaire", question: "La troisième loi de Newton concerne :", choices: ["deux forces opposées exercées sur deux systèmes différents", "deux forces opposées sur un même système", "deux forces de même sens", "une force et une accélération"], answer: 0, explanation: "Les forces réciproques ont même direction et valeur, sens opposés, sur deux objets différents."}, {level: "Difficile", question: "Une masse de 5 kg a une accélération de 2 m·s⁻² vers l’est. La résultante vaut :", choices: ["10 N vers l’est", "2,5 N vers l’est", "10 N vers l’ouest", "7 N vers l’est"], answer: 0, explanation: "ΣF⃗ = m a⃗ = 5 × 2 = 10 N vers l’est."}, {level: "Difficile", question: "Un mobile avance vers +x mais ralentit. La résultante des forces projetée sur x est :", choices: ["négative", "positive", "nulle", "nécessairement égale au poids"], answer: 0, explanation: "Le ralentissement implique une accélération opposée à la vitesse, donc ax < 0."}, {level: "Difficile", question: "Un objet de 4 kg est immobile sur un support horizontal, sans autre force verticale que son poids et la réaction. La réaction vaut :", choices: ["39,2 N vers le haut si g=9,8 N·kg⁻¹", "4 N vers le haut", "39,2 N vers le bas", "0 N"], answer: 0, explanation: "L’équilibre vertical impose R − mg = 0, donc R = 4 × 9,8 = 39,2 N."}, {level: "Difficile", question: "Deux forces de 8 N et 6 N sont perpendiculaires. La norme de leur résultante vaut :", choices: ["10 N", "14 N", "2 N", "48 N"], answer: 0, explanation: "La norme vaut √(8² + 6²) = √100 = 10 N."}, {level: "Difficile", question: "Un système de masse constante subit une résultante constante non nulle. Dans un référentiel galiléen, son accélération est :", choices: ["constante et de même direction et sens que la résultante", "nulle", "opposée à la résultante", "nécessairement tangentielle à sa trajectoire"], answer: 0, explanation: "La deuxième loi donne a⃗ = ΣF⃗/m ; m et ΣF⃗ étant constants, a⃗ l’est aussi."}, {level: "Difficile", question: "Pourquoi les forces d’action-réaction ne s’annulent-elles pas dans le bilan d’un seul objet ?", choices: ["Parce qu’elles agissent sur deux objets différents", "Parce qu’elles ont des valeurs différentes", "Parce qu’elles sont toujours parallèles", "Parce que l’une est fictive"], answer: 0, explanation: "Elles ne sont pas appliquées au même système : une seule appartient au bilan de l’objet choisi."}],
    exercises: [{title: "Calculer un poids", level: "Facile", statement: "Un sac a une masse de 3,0 kg. Calculer son poids avec g = 9,8 N·kg⁻¹.", correction: "P = mg = 3,0 × 9,8 = 29,4 N, vertical vers le bas.", skills: ["Poids", "Unités"]}, {title: "Déterminer une accélération", level: "Facile", statement: "Une résultante horizontale de 15 N agit sur un chariot de 5,0 kg. Déterminer son accélération.", correction: "a = ΣF/m = 15/5,0 = 3,0 m·s⁻², dans le sens de la résultante.", skills: ["Deuxième loi de Newton"]}, {title: "Équilibre vertical", level: "Facile", statement: "Un objet immobile de masse 2,0 kg repose sur un support horizontal. Déterminer la réaction normale, avec g = 9,8 N·kg⁻¹.", correction: "L’équilibre impose R − mg = 0, donc R = 2,0 × 9,8 = 19,6 N vers le haut.", skills: ["Bilan des forces", "Équilibre"]}, {title: "Résultante sur un axe", level: "Intermédiaire", statement: "Deux forces horizontales de 18 N vers la droite et 7 N vers la gauche agissent sur un objet de 2,2 kg. Calculer ax.", correction: "ΣFx = 18 − 7 = 11 N ; ax = 11/2,2 = 5,0 m·s⁻² vers la droite.", skills: ["Projection", "Deuxième loi"]}, {title: "Identifier une accélération", level: "Intermédiaire", statement: "Un vélo avance vers l’est mais sa vitesse diminue. Donner le sens de son accélération et de la résultante des forces.", correction: "L’accélération est orientée vers l’ouest, opposée au vecteur vitesse ; la résultante a le même sens que l’accélération.", skills: ["Interprétation vectorielle"]}, {title: "Tension et poids", level: "Intermédiaire", statement: "Une masse de 0,80 kg est suspendue immobile à un fil vertical. Déterminer la tension, avec g = 9,8 N·kg⁻¹.", correction: "L’équilibre impose T − mg = 0 ; T = 0,80 × 9,8 = 7,84 N vers le haut.", skills: ["Tension", "Équilibre"]}, {title: "Deux forces perpendiculaires", level: "Intermédiaire", statement: "Deux forces perpendiculaires de 9 N et 12 N agissent sur un système de masse 5,0 kg. Calculer la norme de l’accélération.", correction: "La résultante vaut √(9²+12²)=15 N ; a = 15/5,0 = 3,0 m·s⁻².", skills: ["Somme vectorielle"]}, {title: "Action-réaction", level: "Difficile", statement: "Une personne pousse un mur avec une force de 120 N vers l’avant. Décrire la force exercée par le mur sur la personne.", correction: "Le mur exerce sur la personne une force de 120 N de même direction et de sens opposé. Les deux forces agissent sur deux systèmes distincts.", skills: ["Troisième loi de Newton"]}, {title: "Bilan complet", level: "Difficile", statement: "Un bloc de 4,0 kg est tiré horizontalement par une force de 20 N. Les frottements valent 4,0 N en sens opposé. Calculer son accélération horizontale.", correction: "ΣFx = 20 − 4,0 = 16 N ; ax = 16/4,0 = 4,0 m·s⁻² dans le sens de traction.", skills: ["Bilan des forces", "Frottements"]}, {title: "Analyser un mouvement", level: "Difficile", statement: "Un objet de 1,5 kg subit une résultante de 6,0 N vers le sud. Sa vitesse instantanée est dirigée vers le nord. Que peut-on conclure ?", correction: "a = 6,0/1,5 = 4,0 m·s⁻² vers le sud. L’accélération est opposée à la vitesse : la valeur de la vitesse diminue à cet instant.", skills: ["Lien forces-mouvement"]}],
    revisionSheets: [{ title: 'Fiche méthode — actions et mouvement', summary: ['Définir système et référentiel avant toute étude.', 'Une force est un vecteur qui modélise une action mécanique.', 'La deuxième loi relie la résultante des forces à l’accélération.', 'La troisième loi relie les forces réciproques exercées sur deux systèmes.'], mustKnow: ['P = mg', 'ΣF⃗ext = m a⃗ dans un référentiel galiléen pour une masse constante', 'ΣF⃗ext = 0 implique v⃗ constante', 'F⃗A→B = −F⃗B→A'], methods: ['Définir système et référentiel.', 'Recenser toutes les interactions extérieures.', 'Représenter et nommer les forces.', 'Projeter la deuxième loi sur les axes choisis.', 'Vérifier les unités et interpréter le sens de a⃗.'] }],
    sources: [{ title: 'Programme de l’enseignement de spécialité de physique-chimie de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm', consultedAt: '2026-11-01', supports: ['Modéliser les actions exercées sur un système', 'Relier les actions appliquées à un système à son mouvement', 'Exploiter les lois de Newton'] }, { title: 'Programmes et ressources en physique-chimie — voie générale et technologique', institution: 'Éduscol', url: 'https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt', consultedAt: '2026-11-01', supports: ['Ressources officielles d’accompagnement du thème mouvement et interactions'] }],
    sourceNote: 'Ressource de travail consacrée aux interactions et aux lois de Newton en Terminale. Les applications numériques précisent les hypothèses retenues, notamment le caractère galiléen du référentiel et la masse constante. Statut brouillon en attente de relecture disciplinaire.',
    validationStatus: 'draft'
  },
  'pc-fluides': {
    title: "Modéliser l’écoulement d’un fluide",
    objectives: [
      "Décrire les grandeurs utiles à l’étude d’un fluide au repos ou en écoulement.",
      "Exploiter les relations de pression, de poussée d’Archimède et de débit.",
      "Utiliser la conservation du débit et la relation de Bernoulli dans leurs domaines de validité."
    ],
    course: [
      {
        heading: "1. Décrire un fluide et la pression",
        body: [
          "Un fluide est un liquide ou un gaz. Sa masse volumique est ρ=m/V. La pression caractérise l’action pressante par unité de surface ; pour une force normale uniformément répartie, p=F/S.",
          "Dans un fluide au repos de masse volumique constante, la pression augmente avec la profondeur : entre deux points, p₂−p₁=ρg(z₁−z₂). La pression atmosphérique s’ajoute à la pression relative hydrostatique."
        ]
      },
      {
        heading: "2. Poussée d’Archimède",
        body: [
          "Tout corps immergé dans un fluide subit une force verticale vers le haut égale au poids du fluide déplacé : F_A=ρ_f V_immergé g.",
          "À l’équilibre d’un objet flottant, la poussée compense le poids. Le volume déplacé est le volume immergé, pas nécessairement le volume total du corps."
        ]
      },
      {
        heading: "3. Débit et vitesse moyenne",
        body: [
          "Le débit volumique Q mesure le volume traversant une section par unité de temps : Q=ΔV/Δt. Pour un écoulement uniforme, Q=S v, où v est la vitesse moyenne.",
          "Pour un fluide incompressible en régime permanent dans une conduite sans fuite, le débit se conserve : S₁v₁=S₂v₂. Une section plus faible implique une vitesse moyenne plus élevée."
        ]
      },
      {
        heading: "4. Écoulements et lignes de courant",
        body: [
          "Un écoulement permanent ne varie pas au cours du temps en un point donné. Une ligne de courant est tangente au vecteur vitesse en chacun de ses points.",
          "Les modèles distinguent notamment les écoulements laminaires et turbulents. Les fluides réels sont visqueux ; les frottements internes peuvent dissiper de l’énergie mécanique."
        ]
      },
      {
        heading: "5. Relation de Bernoulli",
        body: [
          "Pour un écoulement permanent d’un fluide incompressible, de viscosité négligeable, le long d’une ligne de courant, p+½ρv²+ρgz est constant.",
          "À altitude constante, si la vitesse augmente, la pression statique diminue dans le cadre de ce modèle. Bernoulli ne doit pas être appliquée sans vérifier ses hypothèses : pertes visqueuses, pompes ou écoulement turbulent peuvent nécessiter un modèle plus complet."
        ]
      }
    
      ,{ heading: 'Pression, poussée et équilibre d’un fluide', body: ['Dans un fluide au repos, la pression dépend de la profondeur, de la masse volumique et de l’intensité de la pesanteur. La relation hydrostatique s’applique dans un fluide homogène au repos et permet de comparer les pressions entre deux points situés à des hauteurs différentes.', 'La poussée d’Archimède est une force verticale dirigée vers le haut, égale au poids du fluide déplacé. Elle s’exerce sur un corps immergé et dépend du volume de fluide déplacé, pas directement de la masse de l’objet. Le comportement d’un objet dépend de la comparaison entre son poids et la poussée.', 'Pour résoudre un problème, il faut définir le système, représenter les forces, préciser si l’objet est totalement ou partiellement immergé et vérifier les unités. Une erreur fréquente consiste à confondre la pression, qui s’exprime en pascals, avec une force, qui s’exprime en newtons.'] }],
    keyPoints: [
      "ρ=m/V ; p=F/S ; Δp=ρgh pour une profondeur h dans un fluide au repos.",
      "F_A=ρ_f V_immergé g.",
      "Q=ΔV/Δt=S v pour une vitesse moyenne uniforme.",
      "S₁v₁=S₂v₂ pour un fluide incompressible en régime permanent.",
      "p+½ρv²+ρgz=constante dans les hypothèses de Bernoulli."
    ],
    method: [
      "Définir le système, le fluide et les hypothèses du modèle.",
      "Convertir les volumes, surfaces et durées en unités SI.",
      "Choisir la relation adaptée : hydrostatique, Archimède, débit ou Bernoulli.",
      "Écrire la conservation avant de remplacer par les valeurs numériques.",
      "Vérifier les unités, le signe et la cohérence physique du résultat."
    ],
    flashcards: [
      {
        front: "Qu’appelle-t-on un fluide ?",
        back: "Un liquide ou un gaz, qui peut s’écouler et ne conserve pas une forme propre."
      },
      {
        front: "Qu’est-ce que la masse volumique ρ ?",
        back: "La masse par unité de volume : ρ = m/V."
      },
      {
        front: "Quelle est l’unité SI de la masse volumique ?",
        back: "Le kilogramme par mètre cube (kg·m⁻³)."
      },
      {
        front: "Qu’est-ce que la pression ?",
        back: "Une grandeur qui caractérise l’action pressante exercée par unité de surface."
      },
      {
        front: "Quelle relation définit la pression uniforme sur une surface ?",
        back: "p = F/S lorsque la force pressante est perpendiculaire et uniformément répartie."
      },
      {
        front: "Quelle est l’unité SI de pression ?",
        back: "Le pascal (Pa), égal à un newton par mètre carré."
      },
      {
        front: "Comment varie la pression hydrostatique avec la profondeur ?",
        back: "Elle augmente avec la profondeur dans un fluide au repos de masse volumique constante."
      },
      {
        front: "Quelle relation donne la différence de pression hydrostatique ?",
        back: "p₂ − p₁ = ρg(z₁ − z₂), avec z₂ plus bas que z₁."
      },
      {
        front: "Qu’est-ce que la poussée d’Archimède ?",
        back: "La force verticale vers le haut exercée par un fluide sur un corps immergé."
      },
      {
        front: "Quelle est la valeur de la poussée d’Archimède ?",
        back: "F_A = ρ_f V_immergé g."
      },
      {
        front: "Que représente V_immergé ?",
        back: "Le volume de fluide déplacé, égal au volume immergé du corps."
      },
      {
        front: "Quand un objet flotte-t-il à l’équilibre ?",
        back: "Lorsque son poids et la poussée d’Archimède se compensent, avec une partie éventuellement émergée."
      },
      {
        front: "Qu’est-ce que le débit volumique Q ?",
        back: "Le volume de fluide traversant une section par unité de temps."
      },
      {
        front: "Quelle relation relie débit, vitesse moyenne et section ?",
        back: "Q = S·v pour un écoulement uniforme à travers la section."
      },
      {
        front: "Quelle est l’unité SI du débit volumique ?",
        back: "Le mètre cube par seconde (m³·s⁻¹)."
      },
      {
        front: "Que signifie un écoulement permanent ?",
        back: "En chaque point, les grandeurs de l’écoulement ne varient pas au cours du temps."
      },
      {
        front: "Que signifie un fluide incompressible ?",
        back: "Sa masse volumique est considérée constante dans les conditions étudiées."
      },
      {
        front: "Que dit la conservation du débit pour un fluide incompressible en régime permanent ?",
        back: "S₁v₁ = S₂v₂ dans une conduite sans fuite."
      },
      {
        front: "Que devient la vitesse si la section d’une conduite diminue ?",
        back: "Elle augmente si le débit se conserve."
      },
      {
        front: "Qu’est-ce qu’une ligne de courant ?",
        back: "Une courbe tangente en chaque point au vecteur vitesse du fluide."
      },
      {
        front: "Quelles hypothèses simplifient la relation de Bernoulli ?",
        back: "Écoulement permanent, fluide incompressible, viscosité négligée, le long d’une ligne de courant."
      },
      {
        front: "Quelle est la forme usuelle de Bernoulli ?",
        back: "p + ½ρv² + ρgz = constante le long d’une ligne de courant."
      },
      {
        front: "Que représente ½ρv² dans Bernoulli ?",
        back: "La contribution de pression dynamique, associée à l’énergie cinétique volumique."
      },
      {
        front: "Que représente ρgz dans Bernoulli ?",
        back: "La contribution liée à l’altitude dans l’énergie mécanique volumique."
      },
      {
        front: "Que prédit Bernoulli à altitude constante si la vitesse augmente ?",
        back: "La pression statique diminue, dans les hypothèses du modèle."
      },
      {
        front: "Pourquoi la viscosité est-elle importante dans un fluide réel ?",
        back: "Elle traduit les frottements internes et les dissipations mécaniques."
      },
      {
        front: "Qu’est-ce qu’un écoulement laminaire ?",
        back: "Un écoulement organisé en couches qui glissent les unes sur les autres."
      },
      {
        front: "Qu’est-ce qu’un écoulement turbulent ?",
        back: "Un écoulement présentant des fluctuations et des mouvements désordonnés."
      },
      {
        front: "Quelle différence entre pression absolue et pression relative ?",
        back: "La pression relative est mesurée par rapport à la pression atmosphérique."
      },
      {
        front: "Pourquoi préciser les hypothèses d’un modèle de fluide ?",
        back: "Pour savoir si les relations utilisées décrivent correctement la situation réelle."
      }
    ],
    quiz: [
      {
        level: "Facile",
        question: "L’unité SI de la pression est :",
        choices: [
          "Pa",
          "N",
          "kg·m⁻³",
          "m³·s⁻¹"
        ],
        answer: 0,
        explanation: "Le pascal est l’unité de pression.",
        skill: "Unités"
      },
      {
        level: "Facile",
        question: "La masse volumique est définie par :",
        choices: [
          "ρ = m/V",
          "ρ = V/m",
          "ρ = mV",
          "ρ = F/S"
        ],
        answer: 0,
        explanation: "La masse volumique est la masse divisée par le volume.",
        skill: "Masse volumique"
      },
      {
        level: "Facile",
        question: "Dans un liquide au repos, la pression augmente lorsque :",
        choices: [
          "la profondeur augmente",
          "la profondeur diminue",
          "la masse volumique devient nulle",
          "la température est toujours constante"
        ],
        answer: 0,
        explanation: "La pression hydrostatique croît avec la profondeur.",
        skill: "Hydrostatique"
      },
      {
        level: "Facile",
        question: "La poussée d’Archimède est dirigée :",
        choices: [
          "verticalement vers le haut",
          "verticalement vers le bas",
          "horizontalement",
          "dans le sens de l’écoulement"
        ],
        answer: 0,
        explanation: "La poussée d’Archimède est opposée au poids dans le cas usuel d’un fluide soumis à la pesanteur.",
        skill: "Archimède"
      },
      {
        level: "Facile",
        question: "Le débit volumique correspond :",
        choices: [
          "au volume traversant une section par unité de temps",
          "à la masse totale du tuyau",
          "à la pression par unité de surface",
          "à la vitesse multipliée par le temps"
        ],
        answer: 0,
        explanation: "C’est une quantité de volume par unité de temps.",
        skill: "Débit"
      },
      {
        level: "Intermédiaire",
        question: "Une force pressante de 20 N agit normalement sur 0,50 m². La pression vaut :",
        choices: [
          "40 Pa",
          "10 Pa",
          "20,5 Pa",
          "0,025 Pa"
        ],
        answer: 0,
        explanation: "p = F/S = 20/0,50 = 40 Pa.",
        skill: "Pression"
      },
      {
        level: "Intermédiaire",
        question: "Un liquide de masse volumique 1000 kg·m⁻³ est à 2,0 m sous la surface. Avec g = 10 N·kg⁻¹, la surpression vaut :",
        choices: [
          "20 000 Pa",
          "2 000 Pa",
          "10 000 Pa",
          "200 000 Pa"
        ],
        answer: 0,
        explanation: "Δp = ρgh = 1000 × 10 × 2,0 = 20 000 Pa.",
        skill: "Hydrostatique"
      },
      {
        level: "Intermédiaire",
        question: "Un objet déplace 2,0 L d’eau. Avec ρ = 1000 kg·m⁻³ et g = 10 N·kg⁻¹, la poussée vaut :",
        choices: [
          "20 N",
          "2,0 N",
          "200 N",
          "0,20 N"
        ],
        answer: 0,
        explanation: "2,0 L = 2,0×10⁻³ m³ ; F_A = ρVg = 20 N.",
        skill: "Archimède"
      },
      {
        level: "Intermédiaire",
        question: "Une conduite a une section divisée par deux. Pour un fluide incompressible en régime permanent, la vitesse moyenne :",
        choices: [
          "double",
          "est divisée par deux",
          "ne change pas",
          "devient nulle"
        ],
        answer: 0,
        explanation: "S₁v₁ = S₂v₂ : si S est divisée par deux, v double.",
        skill: "Continuité"
      },
      {
        level: "Intermédiaire",
        question: "Un débit de 0,012 m³·s⁻¹ traverse une section de 0,004 m². La vitesse moyenne est :",
        choices: [
          "3,0 m·s⁻¹",
          "0,048 m·s⁻¹",
          "0,00033 m·s⁻¹",
          "6,0 m·s⁻¹"
        ],
        answer: 0,
        explanation: "v = Q/S = 0,012/0,004 = 3,0 m·s⁻¹.",
        skill: "Débit"
      },
      {
        level: "Intermédiaire",
        question: "Dans Bernoulli, à altitude constante et sous ses hypothèses, une hausse de vitesse s’accompagne :",
        choices: [
          "d’une baisse de pression statique",
          "d’une hausse nécessaire de pression statique",
          "d’une masse volumique nulle",
          "d’un débit nul"
        ],
        answer: 0,
        explanation: "La somme p + ½ρv² reste constante.",
        skill: "Bernoulli"
      },
      {
        level: "Intermédiaire",
        question: "Un fluide incompressible est modélisé avec :",
        choices: [
          "une masse volumique constante",
          "une pression constante partout",
          "une vitesse constante partout",
          "une viscosité infinie"
        ],
        answer: 0,
        explanation: "Incompressible signifie que la masse volumique est constante dans le modèle.",
        skill: "Modélisation"
      },
      {
        level: "Difficile",
        question: "Dans un tube, S₁ = 6 cm², v₁ = 2 m·s⁻¹ et S₂ = 3 cm². v₂ vaut :",
        choices: [
          "4 m·s⁻¹",
          "1 m·s⁻¹",
          "2 m·s⁻¹",
          "12 m·s⁻¹"
        ],
        answer: 0,
        explanation: "S₁v₁ = S₂v₂ donc v₂ = 6×2/3 = 4 m·s⁻¹.",
        skill: "Continuité"
      },
      {
        level: "Difficile",
        question: "Un corps entièrement immergé déplace 5,0×10⁻⁴ m³ d’un liquide de masse volumique 800 kg·m⁻³. Avec g = 10, F_A vaut :",
        choices: [
          "4,0 N",
          "0,40 N",
          "40 N",
          "0,004 N"
        ],
        answer: 0,
        explanation: "F_A = 800 × 5,0×10⁻⁴ × 10 = 4,0 N.",
        skill: "Archimède"
      },
      {
        level: "Difficile",
        question: "Entre deux points d’une conduite horizontale idéale, v₂ > v₁. Alors :",
        choices: [
          "p₂ < p₁",
          "p₂ > p₁",
          "p₂ = p₁ toujours",
          "ρ₂ = 0"
        ],
        answer: 0,
        explanation: "Bernoulli à même altitude impose p + ½ρv² constant.",
        skill: "Bernoulli"
      },
      {
        level: "Difficile",
        question: "La pression hydrostatique relative à 3 m de profondeur dans l’eau (ρ=1000 kg·m⁻³, g=9,8) vaut :",
        choices: [
          "29 400 Pa",
          "9 800 Pa",
          "3 000 Pa",
          "294 000 Pa"
        ],
        answer: 0,
        explanation: "Δp = ρgh = 1000 × 9,8 × 3 = 29 400 Pa.",
        skill: "Hydrostatique"
      },
      {
        level: "Difficile",
        question: "Un flotteur est à l’équilibre. Son poids est 15 N. La poussée d’Archimède vaut :",
        choices: [
          "15 N vers le haut",
          "15 N vers le bas",
          "0 N",
          "30 N vers le haut"
        ],
        answer: 0,
        explanation: "À l’équilibre vertical, les deux forces se compensent.",
        skill: "Flottabilité"
      },
      {
        level: "Difficile",
        question: "Une conduite se rétrécit et le débit reste constant. Quelle grandeur est conservée ?",
        choices: [
          "Q = Sv",
          "S/v",
          "S + v",
          "ρS/v²"
        ],
        answer: 0,
        explanation: "Pour un fluide incompressible en régime permanent, le débit volumique est conservé.",
        skill: "Débit"
      },
      {
        level: "Difficile",
        question: "Quel phénomène est absent du modèle de Bernoulli idéal ?",
        choices: [
          "la dissipation visqueuse",
          "la pression",
          "la vitesse",
          "l’altitude"
        ],
        answer: 0,
        explanation: "Le modèle idéal néglige les pertes par viscosité.",
        skill: "Modèle"
      },
      {
        level: "Difficile",
        question: "Un débit de 2,4 L·s⁻¹ traverse un tuyau de section 8,0 cm². La vitesse moyenne vaut :",
        choices: [
          "3,0 m·s⁻¹",
          "0,30 m·s⁻¹",
          "30 m·s⁻¹",
          "0,003 m·s⁻¹"
        ],
        answer: 0,
        explanation: "Q = 2,4×10⁻³ m³·s⁻¹ et S = 8,0×10⁻⁴ m² ; v = 3,0 m·s⁻¹.",
        skill: "Débit"
      }
    ],
    exercises: [
      {
        title: "Calculer une masse volumique",
        level: "Facile",
        statement: "Un échantillon de 0,80 kg occupe 1,0×10⁻³ m³. Calculer sa masse volumique.",
        correction: "ρ = m/V = 0,80/(1,0×10⁻³) = 800 kg·m⁻³.",
        skills: [
          "Masse volumique"
        ]
      },
      {
        title: "Pression sur une surface",
        level: "Facile",
        statement: "Une force normale de 150 N agit sur une surface de 0,030 m². Calculer la pression.",
        correction: "p = F/S = 150/0,030 = 5,0×10³ Pa.",
        skills: [
          "Pression"
        ]
      },
      {
        title: "Pression en profondeur",
        level: "Facile",
        statement: "Calculer la surpression à 1,5 m sous la surface de l’eau. Prendre ρ=1000 kg·m⁻³ et g=9,8 N·kg⁻¹.",
        correction: "Δp = ρgh = 1000×9,8×1,5 = 1,47×10⁴ Pa.",
        skills: [
          "Hydrostatique"
        ]
      },
      {
        title: "Poussée d’Archimède",
        level: "Intermédiaire",
        statement: "Un objet immergé déplace 3,0 L d’eau. Calculer la poussée avec g=10 N·kg⁻¹ et ρ=1000 kg·m⁻³.",
        correction: "V=3,0×10⁻³ m³ ; F_A=ρVg=30 N vers le haut.",
        skills: [
          "Archimède"
        ]
      },
      {
        title: "Débit volumique",
        level: "Intermédiaire",
        statement: "0,60 m³ d’eau s’écoulent en 2,0 min. Calculer le débit en m³·s⁻¹.",
        correction: "Δt=120 s ; Q=V/Δt=0,60/120=5,0×10⁻³ m³·s⁻¹.",
        skills: [
          "Débit"
        ]
      },
      {
        title: "Vitesse dans une conduite",
        level: "Intermédiaire",
        statement: "Un débit de 6,0×10⁻³ m³·s⁻¹ traverse une section de 2,0×10⁻³ m². Calculer la vitesse moyenne.",
        correction: "v=Q/S=6,0×10⁻³/2,0×10⁻³=3,0 m·s⁻¹.",
        skills: [
          "Débit",
          "Vitesse"
        ]
      },
      {
        title: "Rétrécissement",
        level: "Intermédiaire",
        statement: "Une conduite passe de 12 cm² à 4,0 cm². La vitesse initiale est 1,5 m·s⁻¹. Déterminer la vitesse finale.",
        correction: "S₁v₁=S₂v₂ ; v₂=(12×1,5)/4,0=4,5 m·s⁻¹.",
        skills: [
          "Conservation du débit"
        ]
      },
      {
        title: "Flotteur",
        level: "Difficile",
        statement: "Un flotteur de poids 8,0 N est à l’équilibre dans l’eau. Déterminer le volume immergé avec ρ=1000 kg·m⁻³ et g=10 N·kg⁻¹.",
        correction: "À l’équilibre F_A=P ; V= P/(ρg)=8/(1000×10)=8,0×10⁻⁴ m³.",
        skills: [
          "Archimède",
          "Équilibre"
        ]
      },
      {
        title: "Bernoulli horizontal",
        level: "Difficile",
        statement: "Dans un fluide idéal de masse volumique 1000 kg·m⁻³, la vitesse passe de 2,0 à 4,0 m·s⁻¹ dans une conduite horizontale. Calculer p₂−p₁.",
        correction: "p₁+½ρv₁²=p₂+½ρv₂² ; p₂−p₁=½ρ(4−16)=−6000 Pa.",
        skills: [
          "Bernoulli"
        ]
      },
      {
        title: "Synthèse débit et pression",
        level: "Difficile",
        statement: "Dans une conduite horizontale idéale, la section est divisée par 3. La vitesse initiale est 1,0 m·s⁻¹ et la pression initiale 1,5×10⁵ Pa. Avec ρ=1000 kg·m⁻³, déterminer v₂ et p₂.",
        correction: "Continuité : v₂=3,0 m·s⁻¹. Bernoulli : p₂=p₁+½ρ(v₁²−v₂²)=1,5×10⁵−4000=1,46×10⁵ Pa.",
        skills: [
          "Continuité",
          "Bernoulli"
        ]
      }
    ],
    revisionSheets: [
      {
        title: "Fiche méthode — écoulement des fluides",
        summary: [
          "La pression hydrostatique augmente avec la profondeur.",
          "La poussée d’Archimède est égale au poids du fluide déplacé.",
          "Le débit volumique se conserve dans une conduite sans fuite pour un fluide incompressible en régime permanent.",
          "Bernoulli s’applique à un écoulement idéal sous des hypothèses précises."
        ],
        mustKnow: [
          "ρ=m/V",
          "p=F/S",
          "Δp=ρgh",
          "F_A=ρ_f V_immergé g",
          "Q=S v",
          "S₁v₁=S₂v₂",
          "p+½ρv²+ρgz=constante"
        ],
        methods: [
          "Définir le système, le fluide et les hypothèses du modèle.",
          "Convertir les volumes, surfaces et durées en unités SI.",
          "Choisir la relation adaptée : hydrostatique, Archimède, débit ou Bernoulli.",
          "Écrire la conservation avant de remplacer par les valeurs numériques.",
          "Vérifier les unités, le signe et la cohérence physique du résultat."
        ]
      }
    ],
    sources: [
      {
        title: "Programme de l’enseignement de spécialité de physique-chimie de terminale générale",
        institution: "Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019",
        url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm",
        consultedAt: "2026-11-01",
        supports: [
          "Modéliser la pression dans un fluide au repos",
          "Utiliser la poussée d’Archimède",
          "Exploiter la conservation du débit",
          "Utiliser la relation de Bernoulli"
        ]
      },
      {
        title: "Programmes et ressources en physique-chimie — voie générale et technologique",
        institution: "Éduscol",
        url: "https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt",
        consultedAt: "2026-11-01",
        supports: [
          "Ressources officielles d’accompagnement du programme de terminale"
        ]
      }
    ],
    sourceNote: "Ressource de travail construite à partir du programme officiel de terminale. Les modèles et relations sont utilisés dans les hypothèses indiquées ; les exercices sont des entraînements originaux et non des sujets officiels. Statut brouillon en attente de relecture disciplinaire.",
    validationStatus: "draft"
  },
  'pc-energie': {
    title: "Décrire les phénomènes énergétiques",
    objectives: [
      "Décrire un système thermodynamique et ses échanges avec l’extérieur.",
      "Relier les variations de température aux échanges thermiques.",
      "Utiliser le premier principe de la thermodynamique et l’équation d’état du gaz parfait."
    ],
    course: [
      {
        heading: "1. Système thermodynamique et énergie interne",
        body: [
          "On choisit un système et on distingue son environnement. Un système fermé échange de l’énergie mais pas de matière ; un système isolé n’échange ni matière ni énergie.",
          "L’énergie interne U décrit des contributions microscopiques, notamment cinétiques et potentielles. Sa variation dépend des échanges avec l’extérieur et de l’évolution de l’état du système."
        ]
      },
      {
        heading: "2. Température et capacité thermique",
        body: [
          "La température thermodynamique s’exprime en kelvins : T=θ+273,15. Pour un corps condensé sans changement d’état, on peut utiliser ΔU=mcΔT, où c est la capacité thermique massique.",
          "La capacité thermique C d’un système vérifie ΔU=CΔT dans le domaine de validité du modèle. C s’exprime en J·K⁻¹ et c en J·kg⁻¹·K⁻¹."
        ]
      },
      {
        heading: "3. Transferts thermiques",
        body: [
          "Un transfert thermique se produit spontanément du milieu le plus chaud vers le milieu le plus froid. Il peut se faire par conduction, convection ou rayonnement.",
          "La conduction se fait de proche en proche sans transport global de matière ; la convection implique un mouvement de fluide ; le rayonnement électromagnétique peut se propager dans le vide."
        ]
      },
      {
        heading: "4. Premier principe de la thermodynamique",
        body: [
          "Avec la convention où W et Q sont positifs lorsque le système reçoit de l’énergie, le premier principe s’écrit ΔU=W+Q.",
          "Un travail reçu augmente le bilan énergétique ; un transfert thermique cédé est négatif. Il faut annoncer la convention de signe avant tout calcul."
        ]
      },
      {
        heading: "5. Modèle du gaz parfait",
        body: [
          "Pour une quantité n de gaz parfait à la température absolue T, l’équation d’état est pV=nRT, avec R≈8,314 J·mol⁻¹·K⁻¹.",
          "Une transformation isotherme conserve T, isobare conserve p, isochore conserve V et adiabatique vérifie Q=0. Ces qualificatifs désignent une grandeur ou un échange qui reste constant ou nul."
        ]
      }
    
      ,{ heading: 'Bilan énergétique et choix du système', body: ['En thermodynamique, il faut d’abord définir le système étudié et les échanges avec l’extérieur. L’énergie interne varie sous l’effet des transferts thermiques et du travail reçu selon la convention de signe retenue. Un schéma des échanges permet de fixer les signes avant d’écrire le bilan.', 'La puissance mesure un transfert d’énergie par unité de temps. Le rendement compare l’énergie utile obtenue à l’énergie reçue ; il est inférieur ou égal à 1 pour un dispositif réel lorsque les pertes sont prises en compte. Un rendement élevé ne signifie pas que l’énergie totale est conservée sous une forme directement utile.', 'Les changements de température et d’état nécessitent de distinguer capacité thermique, chaleur latente et température. Lors d’un changement d’état à pression donnée, l’énergie échangée peut modifier l’état physique sans faire varier la température. Les unités et le choix du système doivent être vérifiés dans chaque bilan.'] }],
    keyPoints: [
      "T(K)=θ(°C)+273,15.",
      "Pour un corps condensé sans changement d’état : Q=mcΔT si le transfert thermique explique seul la variation.",
      "ΔU=W+Q avec W et Q positifs lorsqu’ils sont reçus par le système.",
      "pV=nRT avec T en kelvins et R≈8,314 J·mol⁻¹·K⁻¹.",
      "Adiabatique : Q=0 ; isotherme : T constante ; isobare : p constante ; isochore : V constant."
    ],
    method: [
      "Définir le système et préciser s’il est ouvert, fermé ou isolé.",
      "Convertir toutes les températures en kelvins pour l’équation du gaz parfait.",
      "Choisir la convention de signe de W et Q et la conserver.",
      "Écrire le premier principe avant de remplacer les valeurs.",
      "Pour un gaz parfait, identifier les variables constantes avant d’utiliser pV=nRT."
    ],
    flashcards: [
      {
        front: "Qu’est-ce qu’un système thermodynamique ?",
        back: "La portion de matière ou l’objet choisi pour étudier ses échanges d’énergie avec l’extérieur."
      },
      {
        front: "Qu’est-ce que l’environnement du système ?",
        back: "Tout ce qui n’appartient pas au système étudié."
      },
      {
        front: "Qu’est-ce qu’un système fermé ?",
        back: "Un système qui n’échange pas de matière avec l’extérieur, mais peut échanger de l’énergie."
      },
      {
        front: "Qu’est-ce qu’un système isolé ?",
        back: "Un système qui n’échange ni matière ni énergie avec l’extérieur."
      },
      {
        front: "Qu’est-ce que la température ?",
        back: "Une grandeur d’état liée à l’agitation microscopique ; elle se mesure en kelvins dans le SI."
      },
      {
        front: "Quelle relation convertit les degrés Celsius en kelvins ?",
        back: "T(K) = θ(°C) + 273,15."
      },
      {
        front: "Qu’est-ce que l’énergie interne U ?",
        back: "L’énergie microscopique du système, comprenant notamment les énergies cinétiques et potentielles des entités."
      },
      {
        front: "Qu’est-ce qu’un transfert thermique ?",
        back: "Un transfert d’énergie provoqué par une différence de température."
      },
      {
        front: "Quels sont les trois modes de transfert thermique ?",
        back: "Conduction, convection et rayonnement."
      },
      {
        front: "Qu’est-ce que la conduction ?",
        back: "Un transfert thermique de proche en proche sans transport global de matière."
      },
      {
        front: "Qu’est-ce que la convection ?",
        back: "Un transfert thermique associé au déplacement macroscopique d’un fluide."
      },
      {
        front: "Qu’est-ce que le rayonnement thermique ?",
        back: "Un transfert d’énergie par ondes électromagnétiques, possible même dans le vide."
      },
      {
        front: "Qu’est-ce que la capacité thermique C ?",
        back: "La grandeur reliant l’énergie reçue par un système à sa variation de température dans les conditions considérées."
      },
      {
        front: "Quelle relation utilise-t-on pour chauffer un corps sans changement d’état ?",
        back: "ΔU = CΔT, ou Q = mcΔT si la capacité thermique massique c est utilisée."
      },
      {
        front: "Quelle est l’unité de la capacité thermique massique ?",
        back: "J·kg⁻¹·K⁻¹."
      },
      {
        front: "Qu’est-ce que la capacité thermique massique ?",
        back: "L’énergie nécessaire pour élever de 1 K la température de 1 kg d’une substance, dans le domaine considéré."
      },
      {
        front: "Quel est le premier principe de la thermodynamique ?",
        back: "La variation d’énergie interne est égale à l’énergie reçue par travail et par transfert thermique : ΔU = W + Q avec la convention reçue positive."
      },
      {
        front: "Que signifie W > 0 avec la convention reçue positive ?",
        back: "Le système reçoit de l’énergie par travail."
      },
      {
        front: "Que signifie Q < 0 avec la convention reçue positive ?",
        back: "Le système cède de l’énergie par transfert thermique."
      },
      {
        front: "Qu’est-ce qu’un gaz parfait ?",
        back: "Un modèle de gaz dont les particules sont assimilées à des points sans interaction à distance, hors collisions."
      },
      {
        front: "Quelle est l’équation d’état du gaz parfait ?",
        back: "pV = nRT."
      },
      {
        front: "Que représente n dans pV=nRT ?",
        back: "La quantité de matière du gaz, exprimée en moles."
      },
      {
        front: "Quelle est la valeur de la constante des gaz parfaits R ?",
        back: "R ≈ 8,314 J·mol⁻¹·K⁻¹."
      },
      {
        front: "Pourquoi utiliser la température en kelvins dans l’équation du gaz parfait ?",
        back: "Parce que l’équation d’état utilise la température thermodynamique absolue."
      },
      {
        front: "Qu’est-ce qu’une transformation isotherme ?",
        back: "Une transformation au cours de laquelle la température reste constante."
      },
      {
        front: "Qu’est-ce qu’une transformation isochore ?",
        back: "Une transformation au cours de laquelle le volume reste constant."
      },
      {
        front: "Qu’est-ce qu’une transformation isobare ?",
        back: "Une transformation au cours de laquelle la pression reste constante."
      },
      {
        front: "Qu’est-ce qu’une transformation adiabatique ?",
        back: "Une transformation sans transfert thermique avec l’extérieur, Q=0."
      },
      {
        front: "Que signifie un bilan énergétique ?",
        back: "Un inventaire des énergies reçues, cédées, stockées et converties par le système."
      },
      {
        front: "Pourquoi faut-il préciser la convention de signe pour W et Q ?",
        back: "Pour éviter les erreurs de signe dans le premier principe."
      }
    ],
    quiz: [
      {
        level: "Facile",
        question: "L’unité SI de température thermodynamique est :",
        choices: [
          "kelvin",
          "degré Celsius",
          "joule",
          "watt"
        ],
        answer: 0,
        explanation: "La température absolue s’exprime en kelvins.",
        skill: "Température"
      },
      {
        level: "Facile",
        question: "Le rayonnement thermique peut se propager :",
        choices: [
          "dans le vide",
          "uniquement dans les solides",
          "uniquement dans les liquides",
          "sans transfert d’énergie"
        ],
        answer: 0,
        explanation: "Le rayonnement est électromagnétique et ne nécessite pas de milieu matériel.",
        skill: "Transferts"
      },
      {
        level: "Facile",
        question: "La convection concerne principalement :",
        choices: [
          "le déplacement d’un fluide",
          "la conduction dans un solide immobile",
          "la propagation dans le vide",
          "un changement de masse"
        ],
        answer: 0,
        explanation: "La convection associe transfert thermique et mouvement de matière.",
        skill: "Transferts"
      },
      {
        level: "Facile",
        question: "Un système fermé peut échanger avec l’extérieur :",
        choices: [
          "de l’énergie mais pas de matière",
          "de la matière mais pas d’énergie",
          "ni matière ni énergie",
          "uniquement de la masse"
        ],
        answer: 0,
        explanation: "C’est la définition d’un système fermé.",
        skill: "Système"
      },
      {
        level: "Facile",
        question: "L’équation d’état du gaz parfait est :",
        choices: [
          "pV = nRT",
          "pT = nRV",
          "pV = mRT",
          "p = nVRT"
        ],
        answer: 0,
        explanation: "C’est la relation d’état du modèle du gaz parfait.",
        skill: "Gaz parfait"
      },
      {
        level: "Intermédiaire",
        question: "Une température de 27 °C correspond environ à :",
        choices: [
          "300 K",
          "246 K",
          "27 K",
          "3100 K"
        ],
        answer: 0,
        explanation: "T = 27 + 273,15 ≈ 300 K.",
        skill: "Conversion"
      },
      {
        level: "Intermédiaire",
        question: "Un corps de capacité thermique 500 J·K⁻¹ gagne 4 K. Son énergie interne varie de :",
        choices: [
          "2000 J",
          "125 J",
          "504 J",
          "200 J"
        ],
        answer: 0,
        explanation: "ΔU = CΔT = 500×4 = 2000 J si aucun changement d’état n’intervient.",
        skill: "Capacité thermique"
      },
      {
        level: "Intermédiaire",
        question: "Pour chauffer 0,50 kg d’eau de 10 K, c=4200 J·kg⁻¹·K⁻¹, l’énergie vaut :",
        choices: [
          "21 000 J",
          "2100 J",
          "84 000 J",
          "840 J"
        ],
        answer: 0,
        explanation: "Q=mcΔT=0,50×4200×10=21 000 J.",
        skill: "Calorimétrie"
      },
      {
        level: "Intermédiaire",
        question: "Avec la convention reçue positive, Q négatif signifie que le système :",
        choices: [
          "cède de l’énergie thermique",
          "reçoit de l’énergie thermique",
          "ne change pas d’énergie",
          "reçoit nécessairement du travail"
        ],
        answer: 0,
        explanation: "Un transfert thermique sortant est négatif.",
        skill: "Premier principe"
      },
      {
        level: "Intermédiaire",
        question: "Dans une transformation isochore, la grandeur constante est :",
        choices: [
          "le volume",
          "la pression",
          "la température",
          "la quantité de matière nécessairement"
        ],
        answer: 0,
        explanation: "Isochore signifie volume constant.",
        skill: "Transformations"
      },
      {
        level: "Intermédiaire",
        question: "Pour un gaz parfait, si n et T sont constants, pV :",
        choices: [
          "reste constant",
          "double toujours",
          "est nul",
          "est égal à R"
        ],
        answer: 0,
        explanation: "L’équation pV=nRT impose pV constant si n et T sont constants.",
        skill: "Gaz parfait"
      },
      {
        level: "Intermédiaire",
        question: "Quel mode de transfert explique l’énergie du Soleil reçue par la Terre ?",
        choices: [
          "rayonnement",
          "conduction",
          "convection dans le vide",
          "diffusion matérielle"
        ],
        answer: 0,
        explanation: "Le rayonnement électromagnétique traverse l’espace.",
        skill: "Transferts"
      },
      {
        level: "Difficile",
        question: "Un système reçoit W=+300 J et Q=−100 J. ΔU vaut :",
        choices: [
          "+200 J",
          "+400 J",
          "−200 J",
          "−400 J"
        ],
        answer: 0,
        explanation: "ΔU=W+Q=300−100=+200 J.",
        skill: "Premier principe"
      },
      {
        level: "Difficile",
        question: "Un gaz parfait occupe 2,0×10⁻² m³ à 1,0×10⁵ Pa et 300 K. Avec R=8,31, n vaut environ :",
        choices: [
          "0,80 mol",
          "8,0 mol",
          "0,080 mol",
          "80 mol"
        ],
        answer: 0,
        explanation: "n=pV/(RT)=2000/(8,31×300)≈0,80 mol.",
        skill: "Gaz parfait"
      },
      {
        level: "Difficile",
        question: "Un corps de 2,0 kg, c=900 J·kg⁻¹·K⁻¹, se refroidit de 15 K. ΔU vaut :",
        choices: [
          "−27 000 J",
          "+27 000 J",
          "−1350 J",
          "+1350 J"
        ],
        answer: 0,
        explanation: "ΔU=mcΔT=2×900×(−15)=−27 000 J.",
        skill: "Calorimétrie"
      },
      {
        level: "Difficile",
        question: "Lors d’une transformation adiabatique, le transfert thermique Q est :",
        choices: [
          "nul",
          "positif nécessairement",
          "négatif nécessairement",
          "égal à ΔU dans tous les cas"
        ],
        answer: 0,
        explanation: "Adiabatique signifie absence de transfert thermique : Q=0.",
        skill: "Transformations"
      },
      {
        level: "Difficile",
        question: "Un gaz parfait subit une compression isotherme. Quelle grandeur reste constante ?",
        choices: [
          "la température",
          "la pression",
          "le volume",
          "la masse volumique"
        ],
        answer: 0,
        explanation: "Isotherme signifie température constante ; p et V peuvent varier.",
        skill: "Transformations"
      },
      {
        level: "Difficile",
        question: "Un système reçoit 500 J de travail et cède 200 J par transfert thermique. Sa variation d’énergie interne vaut :",
        choices: [
          "+300 J",
          "+700 J",
          "−300 J",
          "−700 J"
        ],
        answer: 0,
        explanation: "ΔU=W+Q=500−200=+300 J.",
        skill: "Premier principe"
      },
      {
        level: "Difficile",
        question: "Quel énoncé distingue correctement conduction et convection ?",
        choices: [
          "La conduction ne transporte pas globalement la matière, la convection implique un mouvement de fluide.",
          "La conduction exige le vide, la convection ne le nécessite pas.",
          "La convection ne transporte pas d’énergie.",
          "Les deux sont des rayonnements électromagnétiques."
        ],
        answer: 0,
        explanation: "La différence repose sur le transport macroscopique de matière dans la convection.",
        skill: "Transferts"
      },
      {
        level: "Difficile",
        question: "Un gaz parfait voit son volume doubler à pression constante et quantité de matière constante. Sa température absolue :",
        choices: [
          "double",
          "est divisée par deux",
          "reste constante",
          "devient nulle"
        ],
        answer: 0,
        explanation: "À pression constante, V/T est constant ; si V double, T double.",
        skill: "Gaz parfait"
      }
    ],
    exercises: [
      {
        title: "Convertir une température",
        level: "Facile",
        statement: "Convertir 20 °C en kelvins.",
        correction: "T=20+273,15=293,15 K.",
        skills: [
          "Température"
        ]
      },
      {
        title: "Énergie thermique reçue",
        level: "Facile",
        statement: "Une masse de 0,20 kg d’eau se réchauffe de 5,0 K. Avec c=4200 J·kg⁻¹·K⁻¹, calculer Q.",
        correction: "Q=mcΔT=0,20×4200×5,0=4200 J.",
        skills: [
          "Calorimétrie"
        ]
      },
      {
        title: "Variation d’énergie interne",
        level: "Facile",
        statement: "Un système reçoit 250 J de travail et 150 J de chaleur. Calculer ΔU avec la convention reçue positive.",
        correction: "ΔU=W+Q=250+150=400 J.",
        skills: [
          "Premier principe"
        ]
      },
      {
        title: "Bilan avec perte thermique",
        level: "Intermédiaire",
        statement: "Un système reçoit W=600 J et cède Q=−250 J. Déterminer ΔU.",
        correction: "ΔU=600−250=350 J.",
        skills: [
          "Premier principe"
        ]
      },
      {
        title: "Gaz parfait",
        level: "Intermédiaire",
        statement: "Calculer la quantité de matière de gaz dans V=0,010 m³, p=1,0×10⁵ Pa et T=300 K. R=8,31.",
        correction: "n=pV/(RT)=1000/(8,31×300)≈0,401 mol.",
        skills: [
          "Gaz parfait"
        ]
      },
      {
        title: "Chauffage d’un solide",
        level: "Intermédiaire",
        statement: "Un solide de 0,80 kg et de capacité thermique massique 750 J·kg⁻¹·K⁻¹ gagne 12 K. Calculer l’énergie reçue.",
        correction: "Q=mcΔT=0,80×750×12=7200 J.",
        skills: [
          "Calorimétrie"
        ]
      },
      {
        title: "Transformation isotherme",
        level: "Intermédiaire",
        statement: "Un gaz parfait à pression constante occupe 3,0 L à 250 K. Quel volume occupe-t-il à 300 K ?",
        correction: "À pression et quantité de matière constantes, V/T est constant. V₂=3,0×300/250=3,6 L.",
        skills: [
          "Gaz parfait",
          "Transformation"
        ]
      },
      {
        title: "Bilan complet",
        level: "Difficile",
        statement: "Un système reçoit 1,2 kJ de travail et perd 0,7 kJ par transfert thermique. Calculer ΔU en kJ.",
        correction: "ΔU=W+Q=1,2−0,7=+0,5 kJ.",
        skills: [
          "Premier principe"
        ]
      },
      {
        title: "Gaz parfait et pression",
        level: "Difficile",
        statement: "Un gaz parfait est enfermé dans un volume constant. Sa température passe de 300 K à 450 K. La pression initiale est 1,0×10⁵ Pa. Calculer la pression finale.",
        correction: "À V et n constants, p/T est constant. p₂=p₁T₂/T₁=1,0×10⁵×450/300=1,5×10⁵ Pa.",
        skills: [
          "Gaz parfait"
        ]
      },
      {
        title: "Synthèse calorimétrique",
        level: "Difficile",
        statement: "Un bloc de 1,5 kg, c=800 J·kg⁻¹·K⁻¹, refroidit de 40 °C à 25 °C. Calculer sa variation d’énergie interne puis interpréter le signe.",
        correction: "ΔT=−15 K ; ΔU=mcΔT=1,5×800×(−15)=−18 000 J. Le bloc perd 18 kJ d’énergie interne.",
        skills: [
          "Calorimétrie",
          "Interprétation"
        ]
      }
    ],
    revisionSheets: [
      {
        title: "Fiche méthode — énergie et thermodynamique",
        summary: [
          "Le système et la convention de signe doivent être définis avant le bilan.",
          "La variation d’énergie interne est égale aux énergies reçues par travail et transfert thermique.",
          "La relation Q=mcΔT s’utilise pour un corps sans changement d’état dans le modèle considéré.",
          "L’équation pV=nRT utilise la température absolue en kelvins."
        ],
        mustKnow: [
          "ΔU=W+Q",
          "Q=mcΔT",
          "T(K)=θ(°C)+273,15",
          "pV=nRT",
          "R≈8,314 J·mol⁻¹·K⁻¹",
          "Adiabatique : Q=0"
        ],
        methods: [
          "Définir le système et préciser s’il est ouvert, fermé ou isolé.",
          "Convertir toutes les températures en kelvins pour l’équation du gaz parfait.",
          "Choisir la convention de signe de W et Q et la conserver.",
          "Écrire le premier principe avant de remplacer les valeurs.",
          "Pour un gaz parfait, identifier les variables constantes avant d’utiliser pV=nRT."
        ]
      }
    ],
    sources: [
      {
        title: "Programme de l’enseignement de spécialité de physique-chimie de terminale générale",
        institution: "Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019",
        url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm",
        consultedAt: "2026-11-01",
        supports: [
          "Établir un bilan énergétique",
          "Calculer une énergie thermique",
          "Exploiter l’équation d’état du gaz parfait",
          "Interpréter une transformation thermodynamique"
        ]
      },
      {
        title: "Programmes et ressources en physique-chimie — voie générale et technologique",
        institution: "Éduscol",
        url: "https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt",
        consultedAt: "2026-11-01",
        supports: [
          "Ressources officielles d’accompagnement du programme de terminale"
        ]
      }
    ],
    sourceNote: "Ressource de travail construite à partir du programme officiel de terminale. Les modèles et relations sont utilisés dans les hypothèses indiquées ; les exercices sont des entraînements originaux et non des sujets officiels. Statut brouillon en attente de relecture disciplinaire.",
    validationStatus: "draft"
  },
  'pc-ondes': {
  title: "Caractériser les phénomènes ondulatoires",
  objectives: [
    "Décrire la propagation d’une onde mécanique et ses grandeurs caractéristiques.",
    "Exploiter les relations entre célérité, période, fréquence et longueur d’onde.",
    "Interpréter diffraction, interférences et effet Doppler.",
    "Mesurer des grandeurs ondulatoires à partir de données expérimentales."
  ],
  course: [
    {
      heading: "1. Propagation et transport",
      body: [
        "Une onde mécanique progressive est la propagation d’une perturbation dans un milieu matériel. Les points du milieu oscillent autour de leur position d’équilibre ; il n’y a pas de transport global de matière.",
        "La célérité v caractérise la vitesse de propagation. Pour une propagation uniforme, la distance parcourue pendant Δt est d = vΔt. La célérité dépend du milieu et des conditions de propagation."
      ]
    },
    {
      heading: "2. Ondes périodiques",
      body: [
        "Une onde périodique se répète dans le temps et, si elle est progressive, présente une périodicité spatiale. La période T est en secondes et la fréquence f en hertz ; f = 1/T.",
        "La longueur d’onde λ est la distance entre deux points consécutifs en phase. Pour une onde périodique : v = λf. Il faut convertir les millisecondes en secondes et vérifier les unités."
      ]
    },
    {
      heading: "3. Diffraction",
      body: [
        "La diffraction est l’étalement d’une onde lorsqu’elle rencontre une ouverture ou un obstacle. Elle est particulièrement visible lorsque la dimension caractéristique a est du même ordre de grandeur que la longueur d’onde λ.",
        "Pour une ouverture de largeur a, l’angle caractéristique est de l’ordre de λ/a dans le régime usuel des petits angles. Réduire a ou augmenter λ renforce l’étalement."
      ]
    },
    {
      heading: "4. Interférences",
      body: [
        "Deux ondes cohérentes qui se superposent peuvent produire des interférences. Pour deux sources ponctuelles en phase dans un milieu homogène, la différence de marche δ permet de prévoir les zones renforcées ou atténuées.",
        "Les interférences sont constructives si δ = kλ et destructives si δ = (k+1/2)λ, avec k entier. Pour les ondes lumineuses, le dispositif des fentes ou trous d’Young permet d’observer des franges."
      ]
    },
    {
      heading: "5. Effet Doppler et mesures",
      body: [
        "L’effet Doppler correspond à une variation de fréquence reçue due au mouvement relatif de la source et de l’observateur. Dans le cas usuel, une source qui s’approche produit une fréquence reçue plus élevée ; lorsqu’elle s’éloigne, elle est plus faible.",
        "Le niveau sonore s’exprime en décibels : L = 10 log10(I/I₀), avec I₀ = 1,0 × 10⁻¹² W·m⁻². Un oscilloscope permet de mesurer une période à partir de l’échelle temporelle."
      ]
    }
  ],
  keyPoints: [
    "Une onde mécanique progressive nécessite un milieu matériel.",
    "La fréquence est l’inverse de la période : f = 1/T.",
    "Pour une onde périodique : v = λf.",
    "La diffraction est notable lorsque l’ouverture est comparable à λ.",
    "δ = kλ donne des interférences constructives ; δ = (k+1/2)λ donne des interférences destructives.",
    "L’effet Doppler dépend du mouvement relatif source-observateur.",
    "Le niveau sonore est L = 10 log10(I/I₀)."
  ],
  method: [
    "Identifier le milieu et le phénomène étudié.",
    "Relever les données et convertir toutes les unités dans le SI.",
    "Choisir la relation adaptée : v = d/Δt, f = 1/T ou v = λf.",
    "Pour les interférences, calculer δ/λ et identifier la condition.",
    "Pour une question Doppler, préciser le sens du mouvement relatif.",
    "Présenter le résultat avec unité et interprétation."
  ],
  flashcards: [
    {
      front: "Qu’est-ce qu’une onde mécanique ?",
      back: "La propagation d’une perturbation dans un milieu matériel, sans transport global de matière."
    },
    {
      front: "Une onde transporte-t-elle de la matière ?",
      back: "Non, elle transporte de l’énergie et de l’information ; le milieu oscille localement."
    },
    {
      front: "Qu’est-ce que la célérité ?",
      back: "La vitesse de propagation d’une onde, en m·s⁻¹."
    },
    {
      front: "Relation entre distance, durée et célérité ?",
      back: "Pour une propagation uniforme : d = v × Δt."
    },
    {
      front: "Qu’est-ce qu’une onde progressive ?",
      back: "Une perturbation qui se propage de proche en proche."
    },
    {
      front: "Qu’est-ce qu’une onde périodique ?",
      back: "Une onde dont la perturbation se répète identiquement à intervalles réguliers."
    },
    {
      front: "Définition de la période T ?",
      back: "La durée d’un motif temporel complet, en secondes."
    },
    {
      front: "Définition de la fréquence f ?",
      back: "Le nombre de périodes par seconde, en hertz."
    },
    {
      front: "Relation période-fréquence ?",
      back: "f = 1/T."
    },
    {
      front: "Définition de la longueur d’onde λ ?",
      back: "La plus petite distance séparant deux points consécutifs en phase."
    },
    {
      front: "Relation entre célérité, longueur d’onde et fréquence ?",
      back: "v = λf pour une onde périodique."
    },
    {
      front: "Qu’est-ce que le retard de propagation ?",
      back: "La durée nécessaire à l’onde pour aller d’un point à un autre."
    },
    {
      front: "Qu’est-ce que la diffraction ?",
      back: "L’étalement d’une onde lorsqu’elle traverse une ouverture ou contourne un obstacle."
    },
    {
      front: "Quand la diffraction est-elle marquée ?",
      back: "Lorsque la dimension de l’ouverture ou de l’obstacle est du même ordre que λ."
    },
    {
      front: "Que devient l’angle de diffraction si l’ouverture diminue ?",
      back: "Il augmente, toutes choses égales par ailleurs."
    },
    {
      front: "Qu’est-ce qu’une interférence ?",
      back: "La superposition de deux ondes cohérentes dans une même région."
    },
    {
      front: "Condition d’interférences constructives ?",
      back: "La différence de marche δ = kλ, avec k entier."
    },
    {
      front: "Condition d’interférences destructives ?",
      back: "La différence de marche δ = (k + 1/2)λ, avec k entier."
    },
    {
      front: "Qu’est-ce que la différence de marche ?",
      back: "La différence entre les distances parcourues par deux ondes jusqu’au point étudié."
    },
    {
      front: "Qu’est-ce que l’effet Doppler ?",
      back: "La modification de la fréquence reçue liée au mouvement relatif de la source et de l’observateur."
    },
    {
      front: "Une source qui s’approche produit-elle une fréquence reçue plus haute ?",
      back: "Oui, dans le cas usuel d’une source qui s’approche d’un observateur fixe."
    },
    {
      front: "Qu’est-ce que le décalage Doppler ?",
      back: "La différence entre fréquence reçue et fréquence émise."
    },
    {
      front: "Un son plus aigu correspond-il à une fréquence plus grande ?",
      back: "Oui, la hauteur d’un son augmente avec sa fréquence."
    },
    {
      front: "Qu’est-ce que le niveau sonore ?",
      back: "Une grandeur logarithmique exprimée en décibels (dB)."
    },
    {
      front: "Formule du niveau sonore ?",
      back: "L = 10 log10(I/I₀), avec I₀ = 1,0 × 10⁻¹² W·m⁻²."
    },
    {
      front: "Que représente I dans le niveau sonore ?",
      back: "L’intensité sonore reçue, en W·m⁻²."
    },
    {
      front: "Deux ondes cohérentes ont-elles une différence de phase stable ?",
      back: "Oui, leur différence de phase reste constante."
    },
    {
      front: "Quel appareil peut visualiser un signal sonore électrique ?",
      back: "Un oscilloscope, avec un microphone et un dispositif adapté."
    },
    {
      front: "Comment mesurer une période sur un oscillogramme ?",
      back: "Mesurer la durée correspondant à un motif complet sur l’axe du temps."
    },
    {
      front: "Pourquoi préciser le milieu de propagation ?",
      back: "La célérité dépend des propriétés du milieu et peut changer lors d’un changement de milieu."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Une onde parcourt 12 m en 4,0 s. Quelle est sa célérité ?",
      choices: [
        "2,0 m·s⁻¹",
        "3,0 m·s⁻¹",
        "4,0 m·s⁻¹",
        "48 m·s⁻¹"
      ],
      answer: 1,
      explanation: "v = d/Δt = 12/4,0 = 3,0 m·s⁻¹."
    },
    {
      level: "Facile",
      question: "Une onde périodique a une période de 0,020 s. Quelle est sa fréquence ?",
      choices: [
        "20 Hz",
        "40 Hz",
        "50 Hz",
        "200 Hz"
      ],
      answer: 2,
      explanation: "f = 1/T = 1/0,020 = 50 Hz."
    },
    {
      level: "Facile",
      question: "Une onde a une fréquence de 5,0 Hz et une célérité de 10 m·s⁻¹. Quelle est sa longueur d’onde ?",
      choices: [
        "0,50 m",
        "2,0 m",
        "15 m",
        "50 m"
      ],
      answer: 1,
      explanation: "λ = v/f = 10/5,0 = 2,0 m."
    },
    {
      level: "Facile",
      question: "Quel phénomène correspond à l’étalement d’une onde à une ouverture ?",
      choices: [
        "Réfraction",
        "Diffraction",
        "Dispersion",
        "Absorption"
      ],
      answer: 1,
      explanation: "La diffraction est l’étalement d’une onde au passage d’une ouverture ou au voisinage d’un obstacle."
    },
    {
      level: "Facile",
      question: "Quelle condition favorise une diffraction marquée ?",
      choices: [
        "Ouverture très grande devant λ",
        "Ouverture du même ordre que λ",
        "Fréquence nulle",
        "Milieu immobile uniquement"
      ],
      answer: 1,
      explanation: "La diffraction est notable lorsque la dimension caractéristique est comparable à la longueur d’onde."
    },
    {
      level: "Facile",
      question: "Pour une interférence constructive, la différence de marche vaut :",
      choices: [
        "(k+1/2)λ",
        "kλ",
        "λ/4 seulement",
        "Aucune valeur définie"
      ],
      answer: 1,
      explanation: "Les interférences constructives correspondent à δ = kλ."
    },
    {
      level: "Facile",
      question: "Pour une interférence destructive, la différence de marche vaut :",
      choices: [
        "kλ",
        "(k+1/2)λ",
        "2kλ uniquement",
        "λ²"
      ],
      answer: 1,
      explanation: "Les interférences destructives correspondent à un déphasage impair de π, soit δ = (k+1/2)λ."
    },
    {
      level: "Facile",
      question: "Quel est l’unité de la fréquence ?",
      choices: [
        "Seconde",
        "Mètre",
        "Hertz",
        "Décibel"
      ],
      answer: 2,
      explanation: "La fréquence s’exprime en hertz (Hz), équivalent à s⁻¹."
    },
    {
      level: "Intermédiaire",
      question: "Une onde a une longueur d’onde de 0,80 m et une fréquence de 25 Hz. Sa célérité vaut :",
      choices: [
        "20 m·s⁻¹",
        "31,25 m·s⁻¹",
        "0,032 m·s⁻¹",
        "2,0 m·s⁻¹"
      ],
      answer: 0,
      explanation: "v = λf = 0,80 × 25 = 20 m·s⁻¹."
    },
    {
      level: "Intermédiaire",
      question: "Deux points sont séparés de 15 m. Une onde se propage à 3,0 m·s⁻¹. Quel retard les sépare ?",
      choices: [
        "0,20 s",
        "5,0 s",
        "12 s",
        "45 s"
      ],
      answer: 1,
      explanation: "τ = d/v = 15/3,0 = 5,0 s."
    },
    {
      level: "Intermédiaire",
      question: "Une source sonore s’approche d’un observateur fixe. La fréquence reçue est généralement :",
      choices: [
        "Plus faible",
        "Plus élevée",
        "Nulle",
        "Identique dans tous les cas"
      ],
      answer: 1,
      explanation: "L’approche de la source comprime les fronts d’onde reçus et augmente la fréquence apparente."
    },
    {
      level: "Intermédiaire",
      question: "Si l’intensité sonore est multipliée par 10, le niveau sonore augmente de :",
      choices: [
        "1 dB",
        "3 dB",
        "10 dB",
        "20 dB"
      ],
      answer: 2,
      explanation: "L = 10 log10(I/I₀) : multiplier I par 10 ajoute 10 dB."
    },
    {
      level: "Intermédiaire",
      question: "Une période mesurée sur un oscillogramme est 4,0 ms. La fréquence est :",
      choices: [
        "25 Hz",
        "40 Hz",
        "250 Hz",
        "400 Hz"
      ],
      answer: 2,
      explanation: "T = 4,0 × 10⁻³ s ; f = 1/T = 250 Hz."
    },
    {
      level: "Intermédiaire",
      question: "Deux ondes cohérentes arrivent avec δ = 2,5λ. L’interférence est :",
      choices: [
        "Constructive",
        "Destructive",
        "Impossible à déterminer même si les sources sont en phase",
        "Toujours nulle"
      ],
      answer: 1,
      explanation: "2,5λ = (2 + 1/2)λ : la condition destructive est satisfaite."
    },
    {
      level: "Intermédiaire",
      question: "Une ouverture passe de 4λ à λ/2. La diffraction devient :",
      choices: [
        "Moins marquée",
        "Plus marquée",
        "Inchangée",
        "Nulle"
      ],
      answer: 1,
      explanation: "La dimension de l’ouverture devient inférieure à λ : l’étalement est plus important."
    },
    {
      level: "Difficile",
      question: "Une onde se propage à 340 m·s⁻¹ avec une fréquence de 680 Hz. Sa longueur d’onde vaut :",
      choices: [
        "0,25 m",
        "0,50 m",
        "2,0 m",
        "4,6 m"
      ],
      answer: 1,
      explanation: "λ = v/f = 340/680 = 0,50 m."
    },
    {
      level: "Difficile",
      question: "Un son a un niveau de 60 dB. Son intensité vaut (I₀ = 10⁻¹² W·m⁻²) :",
      choices: [
        "10⁻⁶ W·m⁻²",
        "10⁻⁸ W·m⁻²",
        "10⁻¹⁸ W·m⁻²",
        "10⁶ W·m⁻²"
      ],
      answer: 0,
      explanation: "60 = 10 log10(I/I₀), donc I/I₀ = 10⁶ et I = 10⁻⁶ W·m⁻²."
    },
    {
      level: "Difficile",
      question: "Une onde met 0,15 s pour parcourir 51 m. Quelle est sa célérité ?",
      choices: [
        "3,4 m·s⁻¹",
        "34 m·s⁻¹",
        "340 m·s⁻¹",
        "765 m·s⁻¹"
      ],
      answer: 2,
      explanation: "v = 51/0,15 = 340 m·s⁻¹."
    },
    {
      level: "Difficile",
      question: "Deux sources en phase produisent une différence de marche de 3λ/2. On observe :",
      choices: [
        "Une interférence constructive",
        "Une interférence destructive",
        "Une absence de superposition",
        "Une réfraction"
      ],
      answer: 1,
      explanation: "3λ/2 = (1 + 1/2)λ : interférence destructive."
    },
    {
      level: "Difficile",
      question: "Une fréquence reçue est supérieure à la fréquence émise. Dans le cas Doppler usuel, la source et l’observateur :",
      choices: [
        "S’éloignent",
        "Se rapprochent",
        "Sont nécessairement immobiles",
        "Sont dans des milieux différents"
      ],
      answer: 1,
      explanation: "Un rapprochement relatif conduit à une fréquence reçue plus élevée dans la configuration usuelle."
    }
  ],
  exercises: [
    {
      title: "Mesurer une célérité",
      level: "Facile",
      statement: "Une perturbation parcourt 8,0 m en 2,5 s. Calculer sa célérité.",
      correction: "v = d/Δt = 8,0/2,5 = 3,2 m·s⁻¹.",
      skills: [
        "Calcul numérique",
        "Unités"
      ]
    },
    {
      title: "Période et fréquence",
      level: "Facile",
      statement: "Un signal périodique a une période de 5,0 ms. Calculer sa fréquence.",
      correction: "T = 5,0 × 10⁻³ s ; f = 1/T = 200 Hz.",
      skills: [
        "Conversion",
        "Périodicité"
      ]
    },
    {
      title: "Longueur d’onde",
      level: "Facile",
      statement: "Une onde de fréquence 12 Hz se propage à 6,0 m·s⁻¹. Déterminer λ.",
      correction: "λ = v/f = 6,0/12 = 0,50 m.",
      skills: [
        "Relation d’onde"
      ]
    },
    {
      title: "Retard de propagation",
      level: "Intermédiaire",
      statement: "Deux points sont distants de 24 m ; la célérité vaut 8,0 m·s⁻¹. Déterminer le retard.",
      correction: "τ = d/v = 24/8,0 = 3,0 s.",
      skills: [
        "Propagation"
      ]
    },
    {
      title: "Diffraction",
      level: "Intermédiaire",
      statement: "Une onde de longueur d’onde 2,0 cm rencontre une ouverture de 2,5 cm. Indiquer si la diffraction peut être marquée et justifier.",
      correction: "Oui : l’ouverture et la longueur d’onde sont du même ordre de grandeur. L’étalement peut donc être important.",
      skills: [
        "Analyse qualitative"
      ]
    },
    {
      title: "Interférences constructives",
      level: "Intermédiaire",
      statement: "Deux sources cohérentes en phase produisent au point M une différence de marche δ = 4λ. Qualifier l’interférence.",
      correction: "δ = kλ avec k = 4 entier : interférence constructive.",
      skills: [
        "Interférences"
      ]
    },
    {
      title: "Interférences destructives",
      level: "Intermédiaire",
      statement: "Au point N, δ = 1,5λ pour deux sources en phase. Qualifier l’interférence.",
      correction: "δ = (k+1/2)λ avec k = 1 : interférence destructive.",
      skills: [
        "Interférences"
      ]
    },
    {
      title: "Niveau sonore",
      level: "Difficile",
      statement: "L’intensité vaut 10⁻⁷ W·m⁻². Calculer le niveau avec I₀ = 10⁻¹² W·m⁻².",
      correction: "L = 10 log10(10⁵) = 50 dB.",
      skills: [
        "Logarithme",
        "Niveau sonore"
      ]
    },
    {
      title: "Analyse Doppler",
      level: "Difficile",
      statement: "Une sirène approche un observateur immobile. La fréquence perçue est-elle supérieure ou inférieure à celle émise ? Expliquer.",
      correction: "Elle est supérieure : les fronts d’onde sont reçus plus rapprochés lorsque la source s’approche.",
      skills: [
        "Effet Doppler"
      ]
    },
    {
      title: "Exploiter un oscillogramme",
      level: "Difficile",
      statement: "Sur un oscillogramme, 5 périodes occupent 20 ms. Déterminer T et f.",
      correction: "T = 20/5 = 4,0 ms = 4,0 × 10⁻³ s ; f = 1/T = 250 Hz.",
      skills: [
        "Lecture graphique",
        "Fréquence"
      ]
    }
  ],
  revisionSheets: [
    {
      title: "Fiche méthode — caractériser les phénomènes ondulatoires",
      summary: [
        "Une onde transporte de l’énergie et de l’information, sans transport global de matière.",
        "La période et la fréquence sont inverses.",
        "La célérité, la fréquence et la longueur d’onde sont liées.",
        "Diffraction, interférences et Doppler sont trois phénomènes distincts."
      ],
      mustKnow: [
        "f = 1/T",
        "v = λf",
        "δ = kλ : constructive",
        "δ = (k+1/2)λ : destructive",
        "L = 10 log10(I/I₀)"
      ],
      methods: [
        "Convertir les durées en secondes.",
        "Identifier la périodicité temporelle ou spatiale.",
        "Comparer l’ouverture à la longueur d’onde pour la diffraction.",
        "Calculer la différence de marche pour les interférences.",
        "Interpréter qualitativement le mouvement relatif pour Doppler."
      ]
    }
  ],
  sources: [
    {
      title: "Programme de l’enseignement de spécialité de physique-chimie de la classe terminale",
      institution: "Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019",
      url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm",
      consultedAt: "2026-11-01",
      supports: [
        "Caractériser la propagation d’une perturbation mécanique",
        "Mesurer période, longueur d’onde et célérité",
        "Étudier diffraction et interférences",
        "Étudier l’effet Doppler en acoustique"
      ]
    },
    {
      title: "Programmes et ressources en physique-chimie — voie générale et technologique",
      institution: "Éduscol",
      url: "https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Ressources officielles d’accompagnement du programme de terminale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail alignée sur le programme officiel de Terminale. Les exercices sont originaux et les modèles sont employés dans les hypothèses précisées. Statut brouillon en attente de relecture disciplinaire.",
  validationStatus: "draft"
},
  'pc-lumiere': {
  title: "Former des images et étudier la lumière",
  objectives: [
    "Construire et exploiter les images formées par une lentille mince convergente.",
    "Utiliser les relations de conjugaison et de grandissement avec les conventions algébriques.",
    "Décrire une lunette astronomique afocale et calculer son grossissement.",
    "Décrire la lumière par un flux de photons et exploiter E = hν.",
    "Interpréter qualitativement l’effet photoélectrique et son bilan énergétique."
  ],
  course: [
    {
      heading: "1. Lentille mince convergente",
      body: [
        "Une lentille convergente transforme un faisceau incident parallèle à l’axe optique en un faisceau convergeant au foyer image F′. Le centre optique O est traversé sans déviation dans le modèle de la lentille mince.",
        "La distance focale image est f′ = OF′. Avec l’axe orienté dans le sens de propagation, une lentille convergente possède f′ > 0. Les constructions utilisent les rayons particuliers passant par O, parallèles à l’axe ou passant par le foyer objet."
      ]
    },
    {
      heading: "2. Conjugaison et grandissement",
      body: [
        "Avec les distances algébriques et la convention usuelle : 1/OA′ − 1/OA = 1/OF′. Il faut attribuer un signe aux positions selon l’orientation de l’axe avant de remplacer les valeurs.",
        "Le grandissement γ = A′B′/AB = OA′/OA. Un grandissement négatif indique une image renversée ; sa valeur absolue compare les tailles. Une image réelle peut être recueillie sur un écran ; une image virtuelle est obtenue par prolongement des rayons."
      ]
    },
    {
      heading: "3. Lunette astronomique afocale",
      body: [
        "Une lunette afocale associe un objectif et un oculaire convergents. Pour un objet à l’infini, l’objectif forme une image intermédiaire dans son plan focal image, qui doit coïncider avec le plan focal objet de l’oculaire.",
        "Dans le modèle afocal, l’écartement des lentilles est f′objectif + f′oculaire. Le grossissement angulaire en valeur absolue est |G| = f′objectif/f′oculaire. Il est sans unité."
      ]
    },
    {
      heading: "4. Lumière et photons",
      body: [
        "La lumière peut être décrite comme un rayonnement électromagnétique et, dans certaines interactions, comme un flux de photons. Chaque photon transporte une énergie E = hν = hc/λ, avec h la constante de Planck et c la célérité de la lumière dans le vide.",
        "Une fréquence plus élevée correspond à une énergie photonique plus grande ; une longueur d’onde plus grande correspond à une énergie plus faible. Les unités doivent être converties en unités SI avant le calcul."
      ]
    },
    {
      heading: "5. Effet photoélectrique",
      body: [
        "L’effet photoélectrique est l’émission d’électrons par un matériau éclairé. Dans le modèle d’Einstein, un photon apporte son énergie à un électron ; l’émission n’est possible que si cette énergie atteint le travail d’extraction W.",
        "Si E = hν ≥ W, l’énergie cinétique maximale de l’électron est Ecin,max = hν − W. Augmenter l’intensité lumineuse augmente le nombre de photons reçus par unité de temps, mais ne compense pas une énergie photonique inférieure au seuil."
      ]
    }
  ],
  keyPoints: [
    "Une lentille convergente possède une distance focale image positive avec la convention usuelle.",
    "La relation de conjugaison doit être appliquée avec des distances algébriques.",
    "γ = A′B′/AB = OA′/OA.",
    "Une lunette afocale associe deux lentilles convergentes et a |G| = f′objectif/f′oculaire.",
    "L’énergie d’un photon vaut E = hν = hc/λ.",
    "L’effet photoélectrique exige Ephotons ≥ W.",
    "Ecin,max = hν − W lorsque l’émission est possible."
  ],
  method: [
    "Faire un schéma et orienter l’axe optique.",
    "Écrire les distances algébriques avant tout calcul.",
    "Appliquer la relation de conjugaison puis calculer le grandissement.",
    "Pour une lunette, identifier objectif, oculaire et plans focaux.",
    "Pour un photon, convertir fréquence ou longueur d’onde en SI.",
    "Comparer l’énergie du photon au travail d’extraction."
  ],
  flashcards: [
    {
      front: "Qu’est-ce qu’une lentille mince convergente ?",
      back: "Un système optique qui fait converger des rayons parallèles à l’axe vers le foyer image."
    },
    {
      front: "Qu’est-ce que le centre optique O ?",
      back: "Le point par lequel un rayon passe sans déviation dans le modèle de la lentille mince."
    },
    {
      front: "Qu’est-ce que l’axe optique ?",
      back: "L’axe de symétrie du système optique, orienté selon la propagation choisie."
    },
    {
      front: "Définition du foyer image F′ ?",
      back: "Le point où convergent les rayons incidents parallèles à l’axe après la lentille."
    },
    {
      front: "Définition de la distance focale f′ ?",
      back: "La distance algébrique OF′."
    },
    {
      front: "Une lentille convergente a-t-elle une distance focale image positive ?",
      back: "Oui, avec la convention algébrique usuelle où l’axe est orienté dans le sens de propagation."
    },
    {
      front: "Qu’est-ce qu’une image réelle ?",
      back: "Une image formée par la convergence effective des rayons lumineux ; elle peut être recueillie sur un écran."
    },
    {
      front: "Qu’est-ce qu’une image virtuelle ?",
      back: "Une image obtenue par le prolongement des rayons ; elle ne se recueille pas directement sur un écran."
    },
    {
      front: "Que signifie image droite ?",
      back: "Une image ayant le même sens vertical que l’objet."
    },
    {
      front: "Que signifie image renversée ?",
      back: "Une image dont l’orientation est inversée par rapport à l’objet."
    },
    {
      front: "Définition du grandissement γ ?",
      back: "Le rapport de la taille algébrique de l’image à celle de l’objet : γ = A′B′/AB."
    },
    {
      front: "Que signifie γ négatif ?",
      back: "L’image est renversée par rapport à l’objet."
    },
    {
      front: "Que signifie |γ| supérieur à 1 ?",
      back: "L’image est plus grande que l’objet."
    },
    {
      front: "Qu’est-ce qu’une lunette afocale ?",
      back: "Un instrument dont l’image d’un objet à l’infini est à l’infini ; les faisceaux émergents sont parallèles."
    },
    {
      front: "Quel est le rôle de l’objectif d’une lunette ?",
      back: "Former une image intermédiaire dans le plan focal image de l’objectif."
    },
    {
      front: "Quel est le rôle de l’oculaire ?",
      back: "Observer l’image intermédiaire et produire un faisceau émergent adapté à l’observation."
    },
    {
      front: "Qu’est-ce qu’un photon ?",
      back: "Un quantum d’énergie du rayonnement électromagnétique."
    },
    {
      front: "Énergie d’un photon ?",
      back: "E = hν = hc/λ."
    },
    {
      front: "Que vaut la constante de Planck h ?",
      back: "Environ 6,626 × 10⁻³⁴ J·s."
    },
    {
      front: "Que représente ν dans E = hν ?",
      back: "La fréquence du rayonnement, en hertz."
    },
    {
      front: "Comment varie l’énergie d’un photon avec la fréquence ?",
      back: "Elle augmente proportionnellement à la fréquence."
    },
    {
      front: "Comment varie l’énergie d’un photon avec la longueur d’onde ?",
      back: "Elle diminue lorsque la longueur d’onde augmente."
    },
    {
      front: "Qu’est-ce que l’effet photoélectrique ?",
      back: "L’émission d’électrons par un matériau éclairé lorsque les photons ont une énergie suffisante."
    },
    {
      front: "Qu’est-ce que le travail d’extraction ?",
      back: "L’énergie minimale nécessaire pour extraire un électron du matériau."
    },
    {
      front: "Condition énergétique de l’effet photoélectrique ?",
      back: "L’énergie du photon doit être au moins égale au travail d’extraction."
    },
    {
      front: "Quelle est l’unité de l’énergie d’un photon ?",
      back: "Le joule (J), parfois l’électronvolt (eV)."
    },
    {
      front: "Relation entre célérité, longueur d’onde et fréquence de la lumière dans le vide ?",
      back: "c = λν, avec c ≈ 3,00 × 10⁸ m·s⁻¹."
    },
    {
      front: "Que signifie une lunette de grossissement G ?",
      back: "Elle augmente l’angle apparent sous lequel l’objet est observé ; G est le rapport des angles."
    },
    {
      front: "Pourquoi utiliser un écran lors d’une mise au point ?",
      back: "Pour repérer la position où l’image réelle est nette."
    },
    {
      front: "Quelle précaution prendre avec une source lumineuse intense ?",
      back: "Ne jamais regarder directement une source intense ou le Soleil à travers un instrument optique."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Une lentille convergente forme sur un écran une image nette. Cette image est :",
      choices: [
        "Réelle",
        "Virtuelle",
        "Toujours droite",
        "Toujours à l’infini"
      ],
      answer: 0,
      explanation: "Une image recueillie sur un écran est réelle."
    },
    {
      level: "Facile",
      question: "Le foyer image F′ correspond au point où convergent les rayons :",
      choices: [
        "Parallèles à l’axe avant la lentille",
        "Passant par O",
        "Émis par F′ avant la lentille",
        "Perpendiculaires à l’axe"
      ],
      answer: 0,
      explanation: "Après une lentille convergente, les rayons incidents parallèles à l’axe convergent au foyer image."
    },
    {
      level: "Facile",
      question: "Le grandissement est défini par :",
      choices: [
        "AB/A′B′",
        "A′B′/AB",
        "OA/OA′",
        "f′/AB"
      ],
      answer: 1,
      explanation: "γ = A′B′/AB."
    },
    {
      level: "Facile",
      question: "Une image virtuelle peut-elle être recueillie directement sur un écran ?",
      choices: [
        "Oui toujours",
        "Non",
        "Seulement si γ > 1",
        "Seulement avec un miroir"
      ],
      answer: 1,
      explanation: "Une image virtuelle provient des prolongements des rayons et ne se forme pas par convergence réelle."
    },
    {
      level: "Facile",
      question: "L’énergie d’un photon est :",
      choices: [
        "E = hν",
        "E = h/ν",
        "E = mc",
        "E = λ/ν"
      ],
      answer: 0,
      explanation: "La relation de Planck donne E = hν."
    },
    {
      level: "Facile",
      question: "Si la fréquence d’un photon augmente, son énergie :",
      choices: [
        "Diminue",
        "Augmente",
        "Reste constante",
        "Devient nulle"
      ],
      answer: 1,
      explanation: "E = hν : l’énergie est proportionnelle à la fréquence."
    },
    {
      level: "Facile",
      question: "La célérité de la lumière dans le vide est environ :",
      choices: [
        "3,0 × 10⁶ m·s⁻¹",
        "3,0 × 10⁸ m·s⁻¹",
        "3,0 × 10¹⁰ m·s⁻¹",
        "340 m·s⁻¹"
      ],
      answer: 1,
      explanation: "La valeur de c dans le vide est environ 3,00 × 10⁸ m·s⁻¹."
    },
    {
      level: "Facile",
      question: "Une lunette afocale fournit pour un objet à l’infini un faisceau émergent :",
      choices: [
        "Convergent vers O",
        "Parallèle",
        "Toujours divergent",
        "Absorbé"
      ],
      answer: 1,
      explanation: "Dans une lunette afocale, l’image intermédiaire est dans le plan focal objet de l’oculaire, donnant un faisceau émergent parallèle."
    },
    {
      level: "Intermédiaire",
      question: "Une lentille a f′ = 10 cm. Un objet est placé à 30 cm devant elle. Avec 1/OA′ − 1/OA = 1/OF′, OA′ vaut :",
      choices: [
        "+15 cm",
        "−15 cm",
        "+30 cm",
        "+7,5 cm"
      ],
      answer: 0,
      explanation: "OA = −30 cm et OF′ = +10 cm ; 1/OA′ = 1/10 − 1/30 = 1/15, donc OA′ = +15 cm."
    },
    {
      level: "Intermédiaire",
      question: "AB = 2,0 cm et A′B′ = −6,0 cm. Le grandissement vaut :",
      choices: [
        "−3,0",
        "+3,0",
        "−0,33",
        "+0,33"
      ],
      answer: 0,
      explanation: "γ = A′B′/AB = −6,0/2,0 = −3,0."
    },
    {
      level: "Intermédiaire",
      question: "Un photon a une fréquence de 5,0 × 10¹⁴ Hz. Avec h = 6,63 × 10⁻³⁴ J·s, son énergie vaut :",
      choices: [
        "3,3 × 10⁻¹⁹ J",
        "1,3 × 10⁻⁴⁸ J",
        "7,5 × 10⁴⁷ J",
        "3,3 × 10⁻⁹ J"
      ],
      answer: 0,
      explanation: "E = hν = 6,63 × 10⁻³⁴ × 5,0 × 10¹⁴ = 3,315 × 10⁻¹⁹ J."
    },
    {
      level: "Intermédiaire",
      question: "Si la longueur d’onde dans le vide est divisée par deux, l’énergie du photon :",
      choices: [
        "Est divisée par deux",
        "Double",
        "Ne change pas",
        "Est multipliée par quatre"
      ],
      answer: 1,
      explanation: "E = hc/λ : diviser λ par deux double E."
    },
    {
      level: "Intermédiaire",
      question: "Pour une lentille convergente, un objet placé au-delà de 2f′ donne une image :",
      choices: [
        "Réelle, renversée et réduite",
        "Virtuelle et droite",
        "Réelle et agrandie",
        "À l’infini"
      ],
      answer: 0,
      explanation: "La construction géométrique montre une image réelle, renversée, située entre f′ et 2f′ et réduite."
    },
    {
      level: "Intermédiaire",
      question: "Le travail d’extraction d’un matériau vaut 2,0 eV. Un photon de 1,5 eV peut-il provoquer l’effet photoélectrique ?",
      choices: [
        "Oui",
        "Non",
        "Seulement si λ augmente",
        "Toujours, quelle que soit l’énergie"
      ],
      answer: 1,
      explanation: "L’énergie du photon est inférieure au travail d’extraction : l’électron ne peut pas être extrait."
    },
    {
      level: "Intermédiaire",
      question: "Dans une lunette afocale, la distance entre l’objectif et l’oculaire vaut, dans le modèle usuel :",
      choices: [
        "f′objectif − f′oculaire",
        "f′objectif + f′oculaire",
        "Leur produit",
        "Toujours zéro"
      ],
      answer: 1,
      explanation: "Les foyers image de l’objectif et objet de l’oculaire sont confondus : l’écartement est la somme des distances focales."
    },
    {
      level: "Difficile",
      question: "Un photon de longueur d’onde 500 nm a une énergie approximative (hc = 1,99 × 10⁻²⁵ J·m) :",
      choices: [
        "4,0 × 10⁻¹⁹ J",
        "1,0 × 10⁻¹⁶ J",
        "2,5 × 10⁻²⁵ J",
        "9,95 × 10⁻³² J"
      ],
      answer: 0,
      explanation: "E = hc/λ = 1,99 × 10⁻²⁵ /(5,00 × 10⁻⁷) ≈ 3,98 × 10⁻¹⁹ J."
    },
    {
      level: "Difficile",
      question: "Une lentille de focale 12 cm reçoit un objet à OA = −18 cm. La position image vaut :",
      choices: [
        "+36 cm",
        "−36 cm",
        "+7,2 cm",
        "−7,2 cm"
      ],
      answer: 0,
      explanation: "OA = −18 cm et OF′ = +12 cm. 1/OA′ = 1/12 − 1/18 = 1/36, donc OA′ = +36 cm."
    },
    {
      level: "Difficile",
      question: "Une lunette afocale a f′objectif = 80 cm et f′oculaire = 4,0 cm. Son grossissement angulaire en valeur absolue vaut :",
      choices: [
        "5,0",
        "20",
        "76",
        "84"
      ],
      answer: 1,
      explanation: "|G| = f′objectif/f′oculaire = 80/4,0 = 20."
    },
    {
      level: "Difficile",
      question: "Un matériau a un travail d’extraction de 3,0 × 10⁻¹⁹ J. Un photon apporte 4,0 × 10⁻¹⁹ J. L’énergie cinétique maximale de l’électron émis vaut :",
      choices: [
        "1,0 × 10⁻¹⁹ J",
        "3,0 × 10⁻¹⁹ J",
        "4,0 × 10⁻¹⁹ J",
        "7,0 × 10⁻¹⁹ J"
      ],
      answer: 0,
      explanation: "Bilan énergétique : Ecin,max = Ephoton − W = 1,0 × 10⁻¹⁹ J."
    },
    {
      level: "Difficile",
      question: "Un objet est placé entre O et F d’une lentille convergente. L’image est :",
      choices: [
        "Réelle et renversée",
        "Virtuelle, droite et agrandie",
        "Réelle et réduite",
        "À l’infini dans tous les cas"
      ],
      answer: 1,
      explanation: "Pour un objet situé à l’intérieur de la distance focale, les rayons émergents divergent et leurs prolongements donnent une image virtuelle, droite et agrandie."
    }
  ],
  exercises: [
    {
      title: "Construire une image réelle",
      level: "Facile",
      statement: "Une lentille convergente a une distance focale de 10 cm. Un objet est placé à 30 cm devant la lentille. Calculer OA′ avec 1/OA′ − 1/OA = 1/OF′.",
      correction: "OA = −30 cm et OF′ = +10 cm. 1/OA′ = 1/10 − 1/30 = 1/15, donc OA′ = +15 cm : image réelle.",
      skills: [
        "Conjugaison"
      ]
    },
    {
      title: "Calculer un grandissement",
      level: "Facile",
      statement: "Un objet de 3,0 cm donne une image de −6,0 cm. Calculer γ et interpréter.",
      correction: "γ = −6,0/3,0 = −2,0 : l’image est renversée et deux fois plus grande.",
      skills: [
        "Grandissement"
      ]
    },
    {
      title: "Énergie d’un photon",
      level: "Facile",
      statement: "Calculer l’énergie d’un photon de fréquence 6,0 × 10¹⁴ Hz avec h = 6,63 × 10⁻³⁴ J·s.",
      correction: "E = hν = 6,63 × 10⁻³⁴ × 6,0 × 10¹⁴ = 3,98 × 10⁻¹⁹ J.",
      skills: [
        "Photon",
        "Calcul numérique"
      ]
    },
    {
      title: "Longueur d’onde lumineuse",
      level: "Intermédiaire",
      statement: "Calculer la longueur d’onde dans le vide d’un rayonnement de fréquence 5,0 × 10¹⁴ Hz avec c = 3,00 × 10⁸ m·s⁻¹.",
      correction: "λ = c/ν = 3,00 × 10⁸ /(5,0 × 10¹⁴) = 6,0 × 10⁻⁷ m, soit 600 nm.",
      skills: [
        "Ondes électromagnétiques"
      ]
    },
    {
      title: "Effet photoélectrique",
      level: "Intermédiaire",
      statement: "Le travail d’extraction vaut 2,5 × 10⁻¹⁹ J et l’énergie du photon 4,0 × 10⁻¹⁹ J. Calculer l’énergie cinétique maximale.",
      correction: "Ecin,max = Ephoton − W = 1,5 × 10⁻¹⁹ J.",
      skills: [
        "Bilan énergétique"
      ]
    },
    {
      title: "Image virtuelle",
      level: "Intermédiaire",
      statement: "Un objet est placé à 6,0 cm devant une lentille convergente de focale 10 cm. Déterminer la nature de l’image.",
      correction: "OA = −6,0 cm ; 1/OA′ = 1/10 − 1/6 = −1/15, donc OA′ = −15 cm. L’image est virtuelle et droite ; γ = OA′/OA = 2,5, elle est agrandie.",
      skills: [
        "Conjugaison",
        "Interprétation"
      ]
    },
    {
      title: "Lunette afocale",
      level: "Intermédiaire",
      statement: "Une lunette a un objectif de 60 cm et un oculaire de 5,0 cm. Calculer la distance entre les lentilles dans le modèle afocal.",
      correction: "L’écartement vaut f′objectif + f′oculaire = 60 + 5,0 = 65 cm.",
      skills: [
        "Instrument optique"
      ]
    },
    {
      title: "Grossissement",
      level: "Difficile",
      statement: "Une lunette afocale a f′objectif = 75 cm et f′oculaire = 3,0 cm. Calculer la valeur absolue du grossissement.",
      correction: "|G| = f′objectif/f′oculaire = 75/3,0 = 25.",
      skills: [
        "Grossissement"
      ]
    },
    {
      title: "Énergie photon et seuil",
      level: "Difficile",
      statement: "Un matériau a un travail d’extraction de 2,2 eV. Un photon apporte 3,0 eV. Calculer l’énergie cinétique maximale en eV.",
      correction: "Ecin,max = 3,0 − 2,2 = 0,8 eV.",
      skills: [
        "Effet photoélectrique"
      ]
    },
    {
      title: "Conception expérimentale",
      level: "Difficile",
      statement: "Décrire un protocole simple pour mesurer la distance focale d’une lentille convergente à l’aide d’un objet lointain et d’un écran.",
      correction: "Orienter la lentille vers un objet très éloigné, déplacer l’écran jusqu’à obtenir une image nette, puis mesurer la distance lentille-écran. Pour un objet à l’infini, cette distance est approximativement f′.",
      skills: [
        "Démarche expérimentale"
      ]
    }
  ],
  revisionSheets: [
    {
      title: "Fiche méthode — former des images et étudier la lumière",
      summary: [
        "Une lentille convergente forme des images réelles ou virtuelles selon la position de l’objet.",
        "Les distances algébriques sont indispensables à la relation de conjugaison.",
        "La lunette afocale permet l’observation d’objets lointains sous un angle apparent augmenté.",
        "La lumière échange de l’énergie par photons : E = hν.",
        "L’effet photoélectrique possède une fréquence seuil liée au travail d’extraction."
      ],
      mustKnow: [
        "1/OA′ − 1/OA = 1/OF′",
        "γ = A′B′/AB = OA′/OA",
        "|G| = f′objectif/f′oculaire",
        "E = hν = hc/λ",
        "Ecin,max = hν − W si hν ≥ W"
      ],
      methods: [
        "Tracer l’axe et préciser les signes des positions.",
        "Distinguer image réelle et image virtuelle.",
        "Vérifier le signe et la valeur du grandissement.",
        "Pour une lunette afocale, faire coïncider les plans focaux intermédiaires.",
        "Convertir nm en m et eV en J si nécessaire."
      ]
    }
  ],
  sources: [
    {
      title: "Programme de l’enseignement de spécialité de physique-chimie de la classe terminale",
      institution: "Ministère de l’Éducation nationale — Bulletin officiel spécial n° 8 du 25 juillet 2019",
      url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm",
      consultedAt: "2026-11-01",
      supports: [
        "Former des images avec une lentille mince convergente",
        "Exploiter une lunette astronomique afocale",
        "Décrire la lumière par des photons",
        "Interpréter l’effet photoélectrique"
      ]
    },
    {
      title: "Programmes et ressources en physique-chimie — voie générale et technologique",
      institution: "Éduscol",
      url: "https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Ressources officielles d’accompagnement du programme de terminale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail alignée sur le programme officiel de Terminale. Les exercices sont originaux et les modèles sont employés dans les hypothèses précisées. Statut brouillon en attente de relecture disciplinaire.",
  validationStatus: "draft"
},
  'pc-electricite': {
  title: "Étudier les circuits électriques et les signaux",
  objectives: [
    "Relier intensité, charge électrique et durée dans un circuit.",
    "Décrire le comportement d’un condensateur et exploiter la relation q = Cu.",
    "Établir et résoudre les équations différentielles d’un circuit RC série en charge et en décharge.",
    "Déterminer une constante de temps et interpréter l’évolution temporelle d’un signal.",
    "Exploiter des mesures pour confronter un modèle exponentiel à une expérience."
  ],
  course: [
    {
      heading: "1. Charge électrique et intensité",
      body: [
        "L’intensité du courant traduit le débit de charge électrique à travers une section d’un conducteur. Pour un courant constant, I = ΔQ/Δt ; dans le cas général, i(t) = dq/dt. L’unité de l’intensité est l’ampère (A) et celle de la charge le coulomb (C).",
        "Une charge Q traversant un conducteur pendant une durée Δt peut être calculée par Q = IΔt lorsque I est constant. Il faut convertir les durées en secondes et vérifier la cohérence des unités.",
        "Dans une branche série, l’intensité est la même en tout point à un instant donné. Les lois des nœuds et des mailles permettent d’établir les relations entre les grandeurs électriques."
      ]
    },
    {
      heading: "2. Condensateur et stockage d’énergie",
      body: [
        "Un condensateur est constitué de deux conducteurs séparés par un isolant. Il peut stocker des charges opposées sur ses armatures et de l’énergie dans le champ électrique. Sa capacité C caractérise le rapport entre la charge q d’une armature et la tension u selon la convention adoptée : q = Cu.",
        "La capacité s’exprime en farads (F), la charge en coulombs et la tension en volts. La capacité dépend notamment de la géométrie du condensateur et du matériau isolant.",
        "L’énergie électrostatique stockée dans un condensateur idéal vaut Ec = 1/2 Cu². Elle s’exprime en joules. À capacité fixée, doubler la tension multiplie l’énergie par quatre.",
        "Comme i = dq/dt et q = Cu pour C constante, on obtient i = C du/dt. La tension aux bornes d’un condensateur idéal est continue : une variation instantanée exigerait un courant impulsionnel."
      ]
    },
    {
      heading: "3. Circuit RC série et constante de temps",
      body: [
        "Un circuit RC série associe une résistance R et un condensateur C. La loi d’Ohm donne uR = Ri. La loi des mailles relie les tensions des dipôles. En combinant ces relations avec i = C duC/dt, on obtient une équation différentielle du premier ordre.",
        "La constante de temps est τ = RC. Elle s’exprime en secondes puisque Ω × F = s. Elle caractérise la rapidité de l’évolution : plus R ou C est grande, plus τ est grande et plus le régime transitoire est lent.",
        "Pour une source constante E, la charge d’un condensateur initialement déchargé vérifie RC duC/dt + uC = E. Sa solution est uC(t) = E(1 − e^(−t/RC)).",
        "Lors d’une décharge sans générateur, RC duC/dt + uC = 0. Si la tension initiale vaut U0, alors uC(t) = U0 e^(−t/RC). Ces expressions supposent un circuit idéal et des paramètres R et C constants."
      ]
    },
    {
      heading: "4. Lire les signaux et les constantes de temps",
      body: [
        "Pendant la charge, la tension du condensateur augmente progressivement vers E. À t = τ, elle atteint environ 63 % de sa valeur finale. Pendant la décharge, elle diminue ; à t = τ, elle vaut environ 37 % de sa valeur initiale.",
        "Au bout d’environ 5τ, la charge est pratiquement terminée : la tension est proche de sa valeur finale. Cette règle est une approximation pratique, non une fin mathématique exacte de l’exponentielle.",
        "Le courant de charge décroît en valeur absolue vers zéro. En régime permanent continu idéal, la tension du condensateur est constante et le courant dans la branche RC est nul.",
        "Pour exploiter un enregistrement, on identifie d’abord la situation (charge ou décharge), la valeur initiale et la valeur finale, puis on repère la durée correspondant à 63 % de la variation ou à 37 % de la valeur initiale."
      ]
    },
    {
      heading: "5. Modélisation et limites expérimentales",
      body: [
        "Un modèle exponentiel doit être confronté aux mesures. On vérifie les unités, les conditions initiales, la valeur de la source et la cohérence de la constante de temps estimée. Des écarts peuvent provenir des tolérances des composants, de la résistance interne du générateur, des appareils de mesure ou d’un montage non idéal.",
        "Il faut distinguer les grandeurs mesurées et les grandeurs calculées, préciser les incertitudes pertinentes et éviter de conclure à partir d’un seul point. La répétition des mesures et l’analyse de l’ensemble de la courbe renforcent la fiabilité de l’interprétation."
      ]
    }
  ],
  keyPoints: [
    "I = ΔQ/Δt pour un courant constant et i(t) = dq/dt dans le cas général.",
    "Pour un condensateur idéal : q = Cu et i = C duC/dt.",
    "L’énergie stockée vaut Ec = 1/2 Cu².",
    "La constante de temps d’un circuit RC série est τ = RC.",
    "Charge : uC(t) = E(1 − e^(−t/RC)) pour un condensateur initialement déchargé.",
    "Décharge : uC(t) = U0 e^(−t/RC).",
    "À t = τ : environ 63 % de la valeur finale en charge et 37 % de la valeur initiale en décharge.",
    "Après environ 5τ, le régime permanent est pratiquement atteint."
  ],
  method: [
    "Identifier si le condensateur est en charge ou en décharge et préciser la condition initiale.",
    "Choisir les conventions de tension et de courant puis appliquer la loi des mailles.",
    "Utiliser uR = Ri et i = C duC/dt pour établir l’équation différentielle.",
    "Calculer τ = RC en convertissant R en ohms et C en farads.",
    "Remplacer les données dans la solution adaptée et vérifier les valeurs initiale et finale.",
    "Pour un relevé expérimental, repérer le niveau caractéristique à 63 % ou 37 % et estimer τ.",
    "Présenter le résultat avec son unité et discuter les écarts entre modèle et mesures."
  ],
  flashcards: [
    {
      front: "Quelle grandeur mesure l’intensité du courant électrique ?",
      back: "Le débit de charges électriques : i = dq/dt, en ampères."
    },
    {
      front: "Quelle est l’unité de l’intensité ?",
      back: "L’ampère (A)."
    },
    {
      front: "Quelle relation relie la charge transférée à un courant constant ?",
      back: "Q = I × Δt."
    },
    {
      front: "Quelle est l’unité de la charge électrique ?",
      back: "Le coulomb (C)."
    },
    {
      front: "Quelle relation relie tension, charge et énergie électrique ?",
      back: "E = Q × U."
    },
    {
      front: "Quelle est l’unité de la tension ?",
      back: "Le volt (V)."
    },
    {
      front: "Que représente la capacité C d’un condensateur ?",
      back: "Elle caractérise sa capacité à stocker une charge pour une tension donnée."
    },
    {
      front: "Quelle relation caractérise un condensateur idéal ?",
      back: "q = C × u, avec les conventions de signe choisies."
    },
    {
      front: "Quelle est l’unité de la capacité ?",
      back: "Le farad (F)."
    },
    {
      front: "Comment sont reliées les tensions aux bornes d’un condensateur et d’une résistance en série ?",
      back: "La loi des mailles donne uR + uC = E pour un générateur idéal de tension E."
    },
    {
      front: "Quelle relation donne la loi d’Ohm ?",
      back: "uR = R × i pour une résistance ohmique."
    },
    {
      front: "Quelle est l’unité de la résistance ?",
      back: "L’ohm (Ω)."
    },
    {
      front: "Quelle est la constante de temps d’un circuit RC série ?",
      back: "τ = R × C."
    },
    {
      front: "Quelle est l’unité de la constante de temps τ ?",
      back: "La seconde (s)."
    },
    {
      front: "Que vaut la constante de temps si R = 1 kΩ et C = 1 mF ?",
      back: "τ = 1 s, car 1000 Ω × 0,001 F = 1 s."
    },
    {
      front: "Quelle équation différentielle décrit la charge d’un condensateur par une source E dans un circuit RC série ?",
      back: "RC × duC/dt + uC = E."
    },
    {
      front: "Quelle équation différentielle décrit la décharge d’un condensateur dans une résistance ?",
      back: "RC × duC/dt + uC = 0."
    },
    {
      front: "Quelle est l’expression de uC(t) pendant la charge depuis un condensateur initialement déchargé ?",
      back: "uC(t) = E(1 − e^(−t/RC))."
    },
    {
      front: "Quelle est l’expression de uC(t) pendant la décharge depuis la tension U0 ?",
      back: "uC(t) = U0 e^(−t/RC)."
    },
    {
      front: "Que vaut uC à t = τ pendant une charge idéale ?",
      back: "Environ 63 % de sa valeur finale E."
    },
    {
      front: "Que vaut uC à t = τ pendant une décharge idéale ?",
      back: "Environ 37 % de sa valeur initiale U0."
    },
    {
      front: "Au bout d’environ combien de constantes de temps la charge est-elle pratiquement terminée ?",
      back: "Environ 5τ dans le modèle exponentiel usuel."
    },
    {
      front: "Comment évolue le courant pendant la charge d’un condensateur ?",
      back: "Il décroît en valeur absolue vers zéro dans le circuit RC série idéal."
    },
    {
      front: "Quelle est l’énergie stockée dans un condensateur ?",
      back: "Ec = 1/2 × C × u²."
    },
    {
      front: "De quoi dépend l’énergie stockée à capacité fixée ?",
      back: "Du carré de la tension aux bornes du condensateur."
    },
    {
      front: "Que signifie un régime transitoire ?",
      back: "La période pendant laquelle les grandeurs électriques évoluent vers leur régime permanent."
    },
    {
      front: "Que signifie un régime permanent en charge RC ?",
      back: "La tension du condensateur est constante et le courant est nul dans le modèle idéal en continu."
    },
    {
      front: "Quel effet a une résistance plus grande sur τ si C est fixe ?",
      back: "Elle augmente τ et ralentit l’évolution."
    },
    {
      front: "Quel effet a une capacité plus grande sur τ si R est fixe ?",
      back: "Elle augmente τ et ralentit l’évolution."
    },
    {
      front: "Pourquoi un condensateur ne peut-il pas changer instantanément de tension dans le modèle idéal ?",
      back: "Un saut instantané de tension nécessiterait un courant impulsionnel non borné."
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Quelle relation définit l’intensité instantanée du courant ?",
      choices: [
        "i = dq/dt",
        "i = q × t",
        "i = u/R²",
        "i = R × q"
      ],
      answer: 0,
      explanation: "L’intensité est le débit temporel de charge."
    },
    {
      level: "Facile",
      question: "Une charge de 12 C traverse un conducteur en 3 s. Quelle est l’intensité moyenne ?",
      choices: [
        "4 A",
        "9 A",
        "15 A",
        "36 A"
      ],
      answer: 0,
      explanation: "I = Q/Δt = 12/3 = 4 A."
    },
    {
      level: "Facile",
      question: "Quelle relation décrit un condensateur idéal ?",
      choices: [
        "q = C u",
        "q = C/u",
        "q = R u",
        "q = u/t"
      ],
      answer: 0,
      explanation: "La charge est proportionnelle à la tension, la constante étant la capacité."
    },
    {
      level: "Facile",
      question: "Quelle unité correspond au farad ?",
      choices: [
        "C/V",
        "V/C",
        "A/s",
        "Ω·s"
      ],
      answer: 0,
      explanation: "Un farad vaut un coulomb par volt."
    },
    {
      level: "Facile",
      question: "Dans un circuit RC série, quelle est la constante de temps ?",
      choices: [
        "RC",
        "R/C",
        "C/R",
        "1/(RC)"
      ],
      answer: 0,
      explanation: "Le produit R C a la dimension d’un temps."
    },
    {
      level: "Intermédiaire",
      question: "R = 2,0 kΩ et C = 500 µF. Quelle est τ ?",
      choices: [
        "1,0 s",
        "0,25 s",
        "2,5 s",
        "1000 s"
      ],
      answer: 0,
      explanation: "τ = 2000 × 500×10⁻⁶ = 1,0 s."
    },
    {
      level: "Intermédiaire",
      question: "Pendant la charge depuis un condensateur déchargé, quelle forme suit uC(t) ?",
      choices: [
        "E(1 − e^(−t/RC))",
        "E e^(−t/RC)",
        "E(1 + t/RC)",
        "E/(1 − t/RC)"
      ],
      answer: 0,
      explanation: "La tension croît exponentiellement de zéro vers E."
    },
    {
      level: "Intermédiaire",
      question: "Pendant une décharge libre, quelle forme suit uC(t) ?",
      choices: [
        "U0 e^(−t/RC)",
        "U0(1 − e^(−t/RC))",
        "U0 + t/RC",
        "U0 e^(t/RC)"
      ],
      answer: 0,
      explanation: "La tension décroît exponentiellement vers zéro."
    },
    {
      level: "Intermédiaire",
      question: "À t = τ pendant une charge, uC vaut environ…",
      choices: [
        "0,63 E",
        "0,37 E",
        "0,50 E",
        "0,95 E"
      ],
      answer: 0,
      explanation: "1 − e⁻¹ ≈ 0,632."
    },
    {
      level: "Intermédiaire",
      question: "À t = τ pendant une décharge, uC vaut environ…",
      choices: [
        "0,37 U0",
        "0,63 U0",
        "0,50 U0",
        "0,05 U0"
      ],
      answer: 0,
      explanation: "e⁻¹ ≈ 0,368."
    },
    {
      level: "Intermédiaire",
      question: "Quelle équation différentielle correspond à la charge avec une source constante E ?",
      choices: [
        "RC duC/dt + uC = E",
        "RC duC/dt − uC = E",
        "R duC/dt + C uC = 0",
        "duC/dt = E"
      ],
      answer: 0,
      explanation: "Elle résulte de la loi des mailles et des relations du condensateur et de la résistance."
    },
    {
      level: "Intermédiaire",
      question: "Quelle équation différentielle correspond à la décharge ?",
      choices: [
        "RC duC/dt + uC = 0",
        "RC duC/dt + uC = E",
        "RC duC/dt = E",
        "uC = RC"
      ],
      answer: 0,
      explanation: "Pendant la décharge, la maille ne contient plus la source."
    },
    {
      level: "Intermédiaire",
      question: "Si R double et C reste constant, τ…",
      choices: [
        "double",
        "est divisée par deux",
        "ne change pas",
        "est multipliée par quatre"
      ],
      answer: 0,
      explanation: "τ = RC est proportionnelle à R."
    },
    {
      level: "Intermédiaire",
      question: "Si C est multipliée par 3 et R inchangée, τ…",
      choices: [
        "est multipliée par 3",
        "est divisée par 3",
        "ne change pas",
        "est multipliée par 9"
      ],
      answer: 0,
      explanation: "τ = RC est proportionnelle à C."
    },
    {
      level: "Intermédiaire",
      question: "Quelle expression donne l’énergie d’un condensateur ?",
      choices: [
        "1/2 C u²",
        "C u²",
        "1/2 R i²",
        "C/u²"
      ],
      answer: 0,
      explanation: "L’énergie électrostatique stockée vaut la moitié du produit C u²."
    },
    {
      level: "Difficile",
      question: "Quelle est l’unité de l’énergie stockée ?",
      choices: [
        "joule",
        "watt",
        "farad",
        "ampère"
      ],
      answer: 0,
      explanation: "L’énergie s’exprime en joules."
    },
    {
      level: "Difficile",
      question: "En régime permanent continu idéal après charge complète, le courant vaut…",
      choices: [
        "0 A",
        "E/R",
        "E/C",
        "C/R"
      ],
      answer: 0,
      explanation: "La tension du condensateur ne varie plus, donc i = C duC/dt = 0."
    },
    {
      level: "Difficile",
      question: "Pour une charge RC, au bout de 5τ la tension est…",
      choices: [
        "très proche de E",
        "égale à zéro",
        "égale à E/2 exactement",
        "devenue négative"
      ],
      answer: 0,
      explanation: "1 − e⁻⁵ ≈ 0,993, soit environ 99,3 % de E."
    },
    {
      level: "Difficile",
      question: "Pourquoi la tension d’un condensateur est-elle continue dans le modèle idéal ?",
      choices: [
        "Un saut imposerait un courant impulsionnel",
        "La résistance est toujours nulle",
        "La charge est toujours nulle",
        "La tension est indépendante de la charge"
      ],
      answer: 0,
      explanation: "Comme i = C du/dt, une discontinuité de tension exigerait une impulsion de courant."
    },
    {
      level: "Difficile",
      question: "Quelle grandeur permet de suivre directement la charge stockée si C est connue ?",
      choices: [
        "La tension u, avec q = Cu",
        "La résistance R seule",
        "La durée seule",
        "La puissance du générateur seule"
      ],
      answer: 0,
      explanation: "La relation constitutive q = Cu relie charge et tension."
    }
  ],
  exercises: [
    {
      title: "Calculer une charge transférée",
      level: "Facile",
      statement: "Un courant constant de 0,40 A circule pendant 25 s. Calculer la charge transférée.",
      correction: "Q = IΔt = 0,40 × 25 = 10 C.",
      skills: [
        "Charge électrique",
        "Unités"
      ]
    },
    {
      title: "Déterminer une capacité",
      level: "Facile",
      statement: "Un condensateur porte une charge de 240 µC sous une tension de 12 V. Calculer sa capacité.",
      correction: "C = q/u = 240×10⁻⁶/12 = 20×10⁻⁶ F = 20 µF.",
      skills: [
        "Capacité",
        "Conversion"
      ]
    },
    {
      title: "Calculer une constante de temps",
      level: "Facile",
      statement: "Un circuit comporte R = 4,7 kΩ et C = 100 µF. Calculer τ.",
      correction: "τ = RC = 4700 × 100×10⁻⁶ = 0,47 s.",
      skills: [
        "Circuit RC",
        "Calcul"
      ]
    },
    {
      title: "Lire une charge à une constante de temps",
      level: "Intermédiaire",
      statement: "Un condensateur initialement déchargé est branché sur E = 6,0 V. Quelle tension atteint-il à t = τ ?",
      correction: "uC(τ) = E(1−e⁻¹) ≈ 0,632×6,0 = 3,8 V.",
      skills: [
        "Charge exponentielle",
        "Constante de temps"
      ]
    },
    {
      title: "Lire une décharge",
      level: "Intermédiaire",
      statement: "Un condensateur est initialement à 9,0 V. Il se décharge dans une résistance. Calculer sa tension à t = τ.",
      correction: "uC(τ) = U0e⁻¹ ≈ 0,368×9,0 = 3,3 V.",
      skills: [
        "Décharge exponentielle",
        "Calcul"
      ]
    },
    {
      title: "Établir l’équation de charge",
      level: "Intermédiaire",
      statement: "Un circuit série comprend un générateur idéal E, une résistance R et un condensateur C. Établir l’équation différentielle vérifiée par uC.",
      correction: "Loi des mailles : E = uR + uC. Or uR = Ri et i = C duC/dt. Donc RC duC/dt + uC = E.",
      skills: [
        "Loi des mailles",
        "Équation différentielle"
      ]
    },
    {
      title: "Déterminer R à partir de τ",
      level: "Intermédiaire",
      statement: "Un condensateur de 220 µF est associé à une résistance. La constante de temps mesurée est 0,66 s. Déterminer R.",
      correction: "R = τ/C = 0,66/(220×10⁻⁶) = 3,0×10³ Ω, soit 3,0 kΩ.",
      skills: [
        "Constante de temps",
        "Isolement d’une grandeur"
      ]
    },
    {
      title: "Calculer une énergie stockée",
      level: "Intermédiaire",
      statement: "Un condensateur de 470 µF est soumis à une tension de 10 V. Calculer l’énergie stockée.",
      correction: "Ec = 1/2 C u² = 0,5 × 470×10⁻⁶ × 10² = 0,0235 J.",
      skills: [
        "Énergie électrique",
        "Calcul"
      ]
    },
    {
      title: "Comparer deux circuits",
      level: "Difficile",
      statement: "Deux circuits ont la même capacité C. Le premier possède R1 = 1,0 kΩ et le second R2 = 3,0 kΩ. Comparer leurs constantes de temps et leur rapidité.",
      correction: "τ2 = R2C = 3R1C = 3τ1. Le second circuit évolue trois fois plus lentement au sens de sa constante de temps.",
      skills: [
        "Comparaison de modèles",
        "Interprétation"
      ]
    },
    {
      title: "Exploiter un relevé expérimental",
      level: "Difficile",
      statement: "Lors d’une décharge, la tension passe de 8,0 V à environ 2,9 V après 1,0 s. Estimer τ et expliquer la démarche.",
      correction: "2,9/8,0 ≈ 0,36, proche de e⁻¹ ≈ 0,368. La durée correspondant à environ 37 % de la tension initiale est une estimation de τ : τ ≈ 1,0 s.",
      skills: [
        "Analyse de données",
        "Modélisation"
      ]
    }
  ],
  revisionSheets: [
    {
      title: "Fiche méthode — circuits RC",
      summary: [
        "Relier la charge, le courant et la tension du condensateur.",
        "Établir l’équation différentielle à partir des lois électriques.",
        "Lire et interpréter la constante de temps sur un signal."
      ],
      mustKnow: [
        "q = Cu ; i = C duC/dt.",
        "τ = RC.",
        "Charge : uC = E(1 − e^(−t/τ)).",
        "Décharge : uC = U0e^(−t/τ).",
        "Ec = 1/2 Cu²."
      ],
      methods: [
        "Convertir systématiquement les unités.",
        "Vérifier les conditions initiales avant de choisir la solution.",
        "Contrôler les valeurs à t = 0 et lorsque t devient très grand.",
        "Comparer les mesures à la valeur caractéristique de 63 % ou 37 %."
      ]
    }
  ],
  sources: [
    {
      title: "Programme de physique-chimie de terminale générale — spécialité",
      institution: "Ministère de l’Éducation nationale, Bulletin officiel spécial n° 8 du 25 juillet 2019",
      url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm",
      consultedAt: "2026-11-01",
      supports: [
        "Étude des circuits électriques et évolution temporelle des signaux"
      ]
    },
    {
      title: "Programmes et ressources en physique-chimie — voie générale et technologique",
      institution: "Éduscol",
      url: "https://eduscol.education.gouv.fr/5829/programmes-et-ressources-en-physique-chimie-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Ressources d’accompagnement du programme de physique-chimie"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique de travail construite autour du modèle du circuit RC série idéal. Les résultats sont soumis aux hypothèses précisées dans le cours ; les écarts expérimentaux et les composants non idéaux doivent être pris en compte. Statut brouillon en attente de relecture disciplinaire.",
  validationStatus: "draft"
}
};
