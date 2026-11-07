import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'mexp-complexes': {
    title:'Nombres complexes',
    objectives:['Connaître la forme algébrique et les opérations.','Utiliser le conjugué et le module.','Passer à la forme trigonométrique lorsque cela est pertinent.','Interpréter géométriquement les nombres complexes.'],
    course:[
      {heading:'1. Forme algébrique',body:['Un nombre complexe s’écrit z=a+ib, où a et b sont réels et i²=−1. a est la partie réelle Re(z), b sa partie imaginaire Im(z). Deux nombres complexes sont égaux si et seulement si leurs parties réelle et imaginaire sont égales.', 'Les opérations suivent les règles usuelles de calcul en remplaçant i² par −1. Ainsi (a+ib)(c+id)=(ac−bd)+i(ad+bc).']},
      {heading:'2. Conjugué et module',body:['Le conjugué de z=a+ib est z̄=a−ib. On a z z̄=a²+b², qui est un réel positif ou nul. Si z est non nul, son inverse vaut 1/z=z̄/|z|².', 'Le module de z, noté |z|, vaut √(a²+b²). Dans le plan complexe, il représente la distance entre l’origine O et le point M d’affixe z. La distance entre les points d’affixes zA et zB est |zB−zA|.']},
      {heading:'3. Argument et forme trigonométrique',body:['Pour z non nul, un argument θ est un angle orienté entre l’axe réel positif et le vecteur associé à z. Les arguments sont définis modulo 2π. La forme trigonométrique est z=r(cos θ+i sin θ), avec r=|z|>0.', 'Le produit de deux nombres complexes non nuls multiplie les modules et additionne les arguments. Le quotient divise les modules et soustrait les arguments. Ces propriétés facilitent les calculs de puissances et de racines.']},
      {heading:'4. Interprétation géométrique',body:['À tout nombre complexe z=a+ib correspond un point M(a;b) dans le plan complexe, appelé point d’affixe z. L’addition correspond à l’addition des vecteurs. Le module donne une distance à l’origine et |zB−zA| donne la distance AB.', 'Les transformations peuvent être traduites par des opérations complexes : multiplier par un réel positif change l’échelle ; multiplier par un complexe de module 1 correspond à une rotation de centre O.']}
    
      ,{ heading: 'Forme algébrique, module et forme trigonométrique', body: ['Un nombre complexe z=a+ib est caractérisé par sa partie réelle a et sa partie imaginaire b. Le plan complexe associe à z un point de coordonnées (a;b). Le module est la distance à l’origine et l’argument décrit une direction, définie modulo 2π lorsque z est non nul.', 'Le conjugué permet de simplifier les quotients : z×z̄=|z|². Pour diviser deux complexes, on multiplie le numérateur et le dénominateur par le conjugué du dénominateur, qui doit être non nul. Les propriétés du module transforment les produits et quotients en produits et quotients de longueurs.', 'La forme trigonométrique relie module et argument. Elle est particulièrement utile pour les produits, les quotients et les puissances, car les modules se multiplient tandis que les arguments s’additionnent modulo 2π. Il faut toutefois traiter séparément le complexe nul, qui n’a pas d’argument.'] }],
    keyPoints:['i²=−1 et z=a+ib.','Conjugué : z̄=a−ib.','Module : |z|=√(a²+b²).','z z̄=|z|².','La forme trigonométrique utilise le module et un argument.','Le produit additionne les arguments et multiplie les modules.'],
    method:['Pour une égalité, identifier séparément les parties réelle et imaginaire.','Pour un quotient, multiplier numérateur et dénominateur par le conjugué du dénominateur.','Pour une interprétation géométrique, traduire les différences d’affixes en vecteurs.','En forme trigonométrique, vérifier que le module est positif et que l’argument est cohérent modulo 2π.'],
    flashcards:[

      {front:'Quelle est la forme algébrique d’un nombre complexe ?',back:'z=a+ib avec a,b réels et i²=−1.'},
      {front:'Que valent Re(z) et Im(z) pour z=a+ib ?',back:'Re(z)=a et Im(z)=b.'},
      {front:'Quel est le conjugué de a+ib ?',back:'a−ib. Le conjugué conserve la partie réelle et change le signe de la partie imaginaire.'},
      {front:'Quelle est la formule du module ?',back:'|a+ib|=√(a²+b²).'},
      {front:'Que vaut z×z̄ ?',back:'|z|²=a²+b².'},
      {front:'Comment calculer l’inverse d’un complexe non nul ?',back:'1/z=z̄/|z|².'},
      {front:'Que représente le module dans le plan complexe ?',back:'La distance entre l’origine et le point d’affixe z.'},
      {front:'Comment exprimer la distance entre deux points d’affixes zA et zB ?',back:'AB=|zB−zA|.'},
      {front:'Que signifie un argument de z ?',back:'Un angle orienté associé au vecteur représentant z, défini modulo 2π.'},
      {front:'Que se passe-t-il pour les arguments lors d’un produit ?',back:'Ils s’additionnent modulo 2π.'}
      ,
      {front:'Quand deux complexes sont-ils égaux ?',back:'Lorsque leurs parties réelle et imaginaire sont respectivement égales.'},
      {front:'Comment additionner deux complexes ?',back:'On additionne séparément les parties réelles et les coefficients de i.'},
      {front:'Comment multiplier deux complexes sous forme algébrique ?',back:'On développe puis on remplace i² par −1 avant de réduire.'},
      {front:'Quelle propriété relie un complexe et son conjugué ?',back:'z × z̄ = |z|², qui est réel positif ou nul.'},
      {front:'Quel est le module d’un complexe réel positif ?',back:'Sa valeur absolue, donc le réel lui-même.'},
      {front:'Le complexe nul possède-t-il un argument ?',back:'Non : son module est nul et sa direction n’est pas définie.'},
      {front:'Pourquoi l’argument est-il défini modulo 2π ?',back:'Ajouter un tour complet ne change pas la direction du vecteur.'},
      {front:'Quelle est la forme trigonométrique d’un complexe non nul ?',back:'z=r(cos θ+i sin θ), avec r>0 et θ un argument de z.'},
      {front:'Comment obtenir le module d’un produit zw ?',back:'|zw|=|z|×|w|.'},
      {front:'Comment obtenir un argument d’un quotient z/w ?',back:'Un argument de z moins un argument de w, modulo 2π.'},
      {front:'Que représente zB−zA dans le plan complexe ?',back:'L’affixe du vecteur AB.'},
      {front:'Quelle transformation correspond à la multiplication par un réel positif k ?',back:'Une homothétie de centre O et de rapport k.'},
      {front:'Quelle transformation correspond à la multiplication par e^(iθ) ?',back:'Une rotation de centre O et d’angle θ.'},
      {front:'Quel est le module de e^(iθ) ?',back:'Il vaut 1.'},
      {front:'Comment simplifier une puissance d’un complexe en forme trigonométrique ?',back:'On élève le module à la puissance et on multiplie l’argument par l’exposant.'},
      {front:'Quelle précaution prendre pour calculer un inverse ?',back:'Vérifier que le complexe est non nul.'},
      {front:'Quelle est la distance entre O et le point d’affixe z ?',back:'Le module |z|.'},
      {front:'Que vaut le conjugué du conjugué de z ?',back:'z lui-même. La seconde conjugaison annule le changement de signe initial.'},
      {front:'Quel est le produit d’un complexe par son conjugué sous forme a+ib ?',back:'a²+b².'},
      {front:'Comment interpréter géométriquement une multiplication par un complexe de module r et d’argument θ ?',back:'Une rotation de θ combinée à une homothétie de rapport r, de centre O.'}
    ],
    quiz:[

      {level:'Facile',question:'Quelle est la valeur de i² ?',choices:['1','−1','i'],answer:1,explanation:'C’est la propriété fondamentale de l’unité imaginaire.'},
      {level:'Facile',question:'La partie imaginaire de 3−5i est :',choices:['3','−5','5'],answer:1,explanation:'Dans a+ib, la partie imaginaire est le coefficient réel b.'},
      {level:'Facile',question:'Le conjugué de 2+7i est :',choices:['2−7i','−2+7i','−2−7i'],answer:0,explanation:'On conserve la partie réelle et on change le signe de la partie imaginaire.'},
      {level:'Intermédiaire',question:'Quel est le module de 3+4i ?',choices:['5','7','25'],answer:0,explanation:'|3+4i|=√(9+16)=5. Le module correspond à la distance entre l’origine et le point d’affixe 3+4i.'},
      {level:'Intermédiaire',question:'Quel est le produit (1+i)(1−i) ?',choices:['2','0','2i'],answer:0,explanation:'C’est le produit d’un complexe par son conjugué : 1−i²=2.'},
      {level:'Intermédiaire',question:'La distance entre les points d’affixes 1+i et 4+i vaut :',choices:['3','√10','5'],answer:0,explanation:'La distance est |(4+i)−(1+i)|=|3|=3. Les deux points ont la même ordonnée ; leur écart horizontal vaut 3.'},
      {level:'Intermédiaire',question:'Deux arguments d’un même complexe non nul diffèrent de :',choices:['π uniquement','Un multiple de 2π','Un multiple de π/2'],answer:1,explanation:'Un argument est défini modulo 2π. Ajouter un multiple entier de 2π ne change pas la direction représentée.'},
      {level:'Difficile',question:'Si z et w sont non nuls, quel est le module de zw ?',choices:['|z|+|w|','|z||w|','|z|−|w|'],answer:1,explanation:'Le module est multiplicatif. Cette propriété permet de transformer un produit complexe en produit de distances.'},
      {level:'Difficile',question:'Multiplier un complexe par e^{iθ} correspond géométriquement à :',choices:['Une translation','Une rotation de centre O et d’angle θ','Une homothétie de rapport 0'],answer:1,explanation:'Le facteur a un module égal à 1 et un argument θ.'},
      {level:'Difficile',question:'Pour z≠0, quelle expression donne son inverse ?',choices:['z̄/|z|²','z/|z|²','|z|²z̄'],answer:0,explanation:'On utilise z z̄=|z|². La formule consiste à diviser le conjugué par le carré du module.'}
      ,
      {level:'Facile',question:'Pour z=−2+3i, quelle est la partie réelle ?',choices:['−2','3','−3'],answer:0,explanation:'Dans z=a+ib, la partie réelle est le nombre a.'},
      {level:'Facile',question:'Le conjugué de −4−i est :',choices:['−4+i','4−i','4+i'],answer:0,explanation:'Le conjugué conserve la partie réelle et change le signe de la partie imaginaire.'},
      {level:'Facile',question:'Le module de 5i vaut :',choices:['5','−5','25'],answer:0,explanation:'|5i|=√(0²+5²)=5. Le point est situé sur l’axe imaginaire, à cinq unités de l’origine.'},
      {level:'Intermédiaire',question:'Le produit (2+i)(2−i) vaut :',choices:['5','3','4i'],answer:0,explanation:'Le produit de deux conjugués vaut 2²+1²=5. Les termes imaginaires s’annulent dans le produit des conjugués.'},
      {level:'Intermédiaire',question:'L’inverse de 1+i est :',choices:['(1−i)/2','1−i','(1+i)/2'],answer:0,explanation:'1/(1+i)=(1−i)/((1+i)(1−i))=(1−i)/2. On multiplie numérateur et dénominateur par le conjugué pour obtenir une forme algébrique.'},
      {level:'Intermédiaire',question:'Les points d’affixes zA=−1+2i et zB=2+2i sont séparés par une distance :',choices:['3','√13','5'],answer:0,explanation:'|zB−zA|=|3|=3. Les parties imaginaires étant égales, la distance est la différence des parties réelles.'},
      {level:'Intermédiaire',question:'Un argument de −1 est :',choices:['π modulo 2π','π/2 modulo 2π','0 modulo 2π'],answer:0,explanation:'Le point d’affixe −1 est sur l’axe réel négatif.'},
      {level:'Difficile',question:'Si z=2(cos θ+i sin θ), quel est le module de z³ ?',choices:['8','6','2'],answer:0,explanation:'Le module d’une puissance est la puissance du module : |z³|=2³=8.'},
      {level:'Difficile',question:'Multiplier une affixe z par 3i correspond à :',choices:['Une rotation de π/2 et une homothétie de rapport 3','Une translation de vecteur 3i','Une rotation de π et une homothétie de rapport 1'],answer:0,explanation:'Le complexe 3i a pour module 3 et pour argument π/2.'},
      {level:'Difficile',question:'Si z est non nul et réel, son argument est :',choices:['0 si z>0 ou π si z<0, modulo 2π','Toujours π/2','Toujours indéfini'],answer:0,explanation:'Un réel non nul est porté par l’axe réel, positif ou négatif.'}
    ],
    exercises:[

      {title:'Calculer avec la forme algébrique',level:'Facile',statement:'Soient z=2+3i et w=1−2i. Calculer z+w puis zw sous forme algébrique.',correction:'z+w=3+i. zw=(2+3i)(1−2i)=2−4i+3i−6i²=8−i puisque i²=−1.',skills:['Additionner des complexes','Développer et réduire']},
      {title:'Conjugué, module et inverse',level:'Intermédiaire',statement:'Soit z=3−4i. Déterminer son conjugué, son module et son inverse.',correction:'Le conjugué est z̄=3+4i. Le module vaut √(9+16)=5. L’inverse vaut z̄/|z|²=(3+4i)/25.',skills:['Utiliser le conjugué','Calculer un module','Calculer un inverse']},
      {title:'Interprétation géométrique',level:'Difficile',statement:'Dans le plan complexe, A et B ont pour affixes zA=1+i et zB=3+2i. Calculer AB et donner les coordonnées du vecteur AB.',correction:'Le vecteur AB a pour coordonnées (3−1 ; 2−1)=(2;1). Son affixe est zB−zA=2+i. La distance AB vaut |2+i|=√(4+1)=√5.',skills:['Passer des affixes aux coordonnées','Calculer une distance']}
      ,
      {title:'Résoudre une égalité de complexes',level:'Facile',statement:'Déterminer les réels x et y tels que (x+1)+i(2y−3)=4+5i.',correction:'Deux complexes sont égaux si leurs parties réelle et imaginaire sont égales. x+1=4 donc x=3 ; 2y−3=5 donc y=4.',skills:['Identifier les parties réelle et imaginaire','Résoudre un système simple']},
      {title:'Calculer un quotient',level:'Intermédiaire',statement:'Mettre (2+i)/(1−i) sous forme algébrique.',correction:'On multiplie par le conjugué 1+i : ((2+i)(1+i))/((1−i)(1+i))=(1+3i)/2=1/2+3i/2.',skills:['Utiliser le conjugué','Réduire une expression complexe']},
      {title:'Déterminer un argument',level:'Intermédiaire',statement:'Donner le module et un argument de z=−1+i.',correction:'Le module vaut √(1+1)=√2. Le point (−1;1) est dans le deuxième quadrant ; un argument est 3π/4 modulo 2π.',skills:['Calculer un module','Repérer un quadrant']},
      {title:'Calculer une distance dans le plan complexe',level:'Intermédiaire',statement:'A et B ont pour affixes zA=2−i et zB=−1+3i. Calculer AB.',correction:'AB=|zB−zA|=|−3+4i|=√(9+16)=5.',skills:['Utiliser la différence d’affixes','Calculer un module']},
      {title:'Étudier une transformation',level:'Difficile',statement:'Le point M d’affixe z est transformé en M’ d’affixe z’=iz. Décrire la transformation géométrique.',correction:'Le complexe i a pour module 1 et pour argument π/2. La transformation est donc une rotation de centre O et d’angle π/2.',skills:['Interpréter une multiplication complexe','Mobiliser module et argument']},
      {title:'Utiliser la forme trigonométrique pour une puissance',level:'Difficile',statement:'Soit z=2(cos(π/6)+i sin(π/6)). Donner une forme trigonométrique de z⁴.',correction:'Le module devient 2⁴=16 et l’argument 4×π/6=2π/3. Ainsi z⁴=16(cos(2π/3)+i sin(2π/3)).',skills:['Appliquer la formule de Moivre','Calculer un argument']},
      {title:'Justifier une propriété de distance',level:'Difficile',statement:'Soient A et B d’affixes a et b. Expliquer pourquoi AB=|b−a|.',correction:'L’affixe du vecteur AB est b−a. La norme d’un vecteur d’affixe complexe w est |w|. La distance AB, égale à la norme du vecteur AB, vaut donc |b−a|.',skills:['Relier affixe et vecteur','Justifier une formule géométrique']}
    
    
    
    ],
    validationStatus:'draft',
    sources: [{ title: 'Programmes et ressources en mathématiques — voie GT', institution: 'Ministère de l’Éducation nationale — Bulletin officiel / Éduscol', url: 'https://eduscol.education.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt', consultedAt: '2026-11-04', supports: ['Programme et ressources des options mathématiques'] }],
    sourceNote:'Contenu pédagogique original fondé sur les notions du programme de mathématiques expertes en vigueur en Terminale pour 2026-2027. Les arguments sont toujours définis modulo 2π.'
  },
  'mexp-arithmetique': {
  title: "Arithmétique",
  objectives: [
    "Connaître et définir les notions centrales de « Arithmétique ».",
    "Choisir une méthode adaptée et justifier chaque étape du raisonnement.",
    "Contrôler les conditions d’application et la cohérence des résultats.",
    "Mobiliser les outils du chapitre dans des problèmes variés."
  ],
  course: [
    {
      heading: "1. Divisibilité et division euclidienne",
      body: [
        "Pour des entiers a et b avec b>0, il existe un unique couple (q,r) tel que a=bq+r et 0≤r<b.",
        "La divisibilité se traduit par un reste nul dans la division euclidienne."
      ]
    },
    {
      heading: "2. PGCD et algorithme d’Euclide",
      body: [
        "Le PGCD de deux entiers se calcule par divisions euclidiennes successives jusqu’à obtenir un reste nul.",
        "L’identité de Bézout permet ensuite d’écrire le PGCD comme combinaison linéaire des deux entiers."
      ]
    },
    {
      heading: "3. Congruences",
      body: [
        "La congruence modulo n permet de calculer avec les restes. Elle est compatible avec l’addition et la multiplication.",
        "On peut réduire les nombres modulo n à chaque étape, ce qui simplifie les calculs de puissances."
      ]
    },
    {
      heading: "4. Nombres premiers et théorèmes",
      body: [
        "Un nombre premier possède exactement deux diviseurs positifs. La décomposition en facteurs premiers est unique à l’ordre près.",
        "Les théorèmes de Bézout, Gauss et Fermat permettent de démontrer des propriétés de divisibilité et de congruence."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Préciser le modulo et réduire les expressions étape par étape.",
        "Pour une divisibilité, rechercher un reste ou une combinaison de Bézout et vérifier les hypothèses des théorèmes."
      ]
    }
  
      ,{ heading: 'Raisonner avec les congruences', body: ['La division euclidienne de a par b, avec b non nul, s’écrit a=bq+r avec un reste r compris entre 0 inclus et |b| exclu. L’algorithme d’Euclide exploite cette écriture pour calculer le PGCD : le PGCD de deux entiers est égal au PGCD du diviseur et du reste. Le procédé s’arrête lorsque le reste devient nul.', 'Deux entiers a et b sont congrus modulo n lorsque leur différence est divisible par n. Les congruences permettent de raisonner sur les restes et de simplifier des calculs portant sur de grandes puissances. On peut additionner et multiplier des congruences, mais une division ou une simplification par un facteur exige de vérifier les conditions d’inversibilité modulo n.', 'L’identité de Bézout affirme que le PGCD de a et b peut s’écrire comme une combinaison entière de a et b. Lorsque le PGCD de a et n vaut 1, a possède un inverse modulo n. Cette condition est essentielle pour résoudre certaines équations de congruence ; elle ne doit pas être supposée automatiquement.'] }],
  keyPoints: [
    "Divisibilité et division euclidienne — Pour des entiers a et b avec b>0, il existe un unique couple (q,r) tel que a=bq+r et 0≤r<b.",
    "PGCD et algorithme d’Euclide — Le PGCD de deux entiers se calcule par divisions euclidiennes successives jusqu’à obtenir un reste nul.",
    "Congruences — La congruence modulo n permet de calculer avec les restes. Elle est compatible avec l’addition et la multiplication.",
    "Nombres premiers et théorèmes — Un nombre premier possède exactement deux diviseurs positifs. La décomposition en facteurs premiers est unique à l’ordre près.",
    "Méthode — Préciser le modulo et réduire les expressions étape par étape.",
    "Notions essentielles : Divisibilité, Multiple, Diviseur, Nombre premier, PGCD, Algorithme d’Euclide, Congruence, Reste."
  ],
  method: [
    "Lire l’énoncé et relever les données, les inconnues et les contraintes.",
    "Identifier la notion ou le théorème pertinent et vérifier ses hypothèses.",
    "Écrire les calculs de façon lisible, sans sauter les étapes décisives.",
    "Contrôler le résultat par une substitution, un ordre de grandeur ou une propriété.",
    "Conclure en répondant précisément à la question posée."
  ],
  flashcards: [
    {
      front: "Définir : Divisibilité — carte 1",
      back: "a divise b s’il existe un entier k tel que b=ak.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur multiple ? — carte 2",
      back: "Entier obtenu en multipliant un autre entier par un entier. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser diviseur dans un exercice ? — carte 3",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Entier divisant exactement un autre entier.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Nombre premier — carte 4",
      back: "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur pgcd ? — carte 5",
      back: "Plus grand diviseur commun de deux entiers. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser algorithme d’euclide dans un exercice ? — carte 6",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Méthode de calcul du PGCD par divisions euclidiennes successives.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Congruence — carte 7",
      back: "Relation a≡b mod n lorsque n divise a−b.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur reste ? — carte 8",
      back: "Entier obtenu après division euclidienne. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser division euclidienne dans un exercice ? — carte 9",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Écriture a=bq+r avec 0≤r<b pour b positif.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Bézout — carte 10",
      back: "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur inverse modulo n ? — carte 11",
      back: "Classe d’un entier dont le produit avec un autre vaut 1 modulo n. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser théorème de gauss dans un exercice ? — carte 12",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Si a divise bc et si a est premier avec b, alors a divise c.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Parité — carte 13",
      back: "Propriété d’un entier d’être pair ou impair.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur décomposition en facteurs premiers ? — carte 14",
      back: "Écriture unique d’un entier positif comme produit de nombres premiers. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser petit théorème de fermat dans un exercice ? — carte 15",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Divisibilité — carte 16",
      back: "a divise b s’il existe un entier k tel que b=ak.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur multiple ? — carte 17",
      back: "Entier obtenu en multipliant un autre entier par un entier. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser diviseur dans un exercice ? — carte 18",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Entier divisant exactement un autre entier.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Nombre premier — carte 19",
      back: "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur pgcd ? — carte 20",
      back: "Plus grand diviseur commun de deux entiers. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser algorithme d’euclide dans un exercice ? — carte 21",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Méthode de calcul du PGCD par divisions euclidiennes successives.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Congruence — carte 22",
      back: "Relation a≡b mod n lorsque n divise a−b.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur reste ? — carte 23",
      back: "Entier obtenu après division euclidienne. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser division euclidienne dans un exercice ? — carte 24",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Écriture a=bq+r avec 0≤r<b pour b positif.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Bézout — carte 25",
      back: "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur inverse modulo n ? — carte 26",
      back: "Classe d’un entier dont le produit avec un autre vaut 1 modulo n. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser théorème de gauss dans un exercice ? — carte 27",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Si a divise bc et si a est premier avec b, alors a divise c.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Parité — carte 28",
      back: "Propriété d’un entier d’être pair ou impair.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur décomposition en facteurs premiers ? — carte 29",
      back: "Écriture unique d’un entier positif comme produit de nombres premiers. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser petit théorème de fermat dans un exercice ? — carte 30",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Divisibilité » ? — variante 1",
      choices: [
        "a divise b s’il existe un entier k tel que b=ak.",
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
        "Relation a≡b mod n lorsque n divise a−b.",
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers."
      ],
      answer: 0,
      explanation: "Divisibilité : a divise b s’il existe un entier k tel que b=ak. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Multiple » ? — variante 2",
      choices: [
        "Entier obtenu en multipliant un autre entier par un entier.",
        "Plus grand diviseur commun de deux entiers.",
        "Entier obtenu après division euclidienne.",
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n."
      ],
      answer: 0,
      explanation: "Multiple : Entier obtenu en multipliant un autre entier par un entier. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Diviseur » ? — variante 3",
      choices: [
        "Entier divisant exactement un autre entier.",
        "Méthode de calcul du PGCD par divisions euclidiennes successives.",
        "Écriture a=bq+r avec 0≤r<b pour b positif.",
        "Si a divise bc et si a est premier avec b, alors a divise c."
      ],
      answer: 0,
      explanation: "Diviseur : Entier divisant exactement un autre entier. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Nombre premier » ? — variante 4",
      choices: [
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
        "Relation a≡b mod n lorsque n divise a−b.",
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
        "Propriété d’un entier d’être pair ou impair."
      ],
      answer: 0,
      explanation: "Nombre premier : Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « PGCD » ? — variante 5",
      choices: [
        "Plus grand diviseur commun de deux entiers.",
        "Entier obtenu après division euclidienne.",
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n.",
        "Écriture unique d’un entier positif comme produit de nombres premiers."
      ],
      answer: 0,
      explanation: "PGCD : Plus grand diviseur commun de deux entiers. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Algorithme d’Euclide » ? — variante 6",
      choices: [
        "Méthode de calcul du PGCD par divisions euclidiennes successives.",
        "Écriture a=bq+r avec 0≤r<b pour b positif.",
        "Si a divise bc et si a est premier avec b, alors a divise c.",
        "Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p."
      ],
      answer: 0,
      explanation: "Algorithme d’Euclide : Méthode de calcul du PGCD par divisions euclidiennes successives. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Congruence » ? — variante 7",
      choices: [
        "Relation a≡b mod n lorsque n divise a−b.",
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
        "Propriété d’un entier d’être pair ou impair.",
        "a divise b s’il existe un entier k tel que b=ak."
      ],
      answer: 0,
      explanation: "Congruence : Relation a≡b mod n lorsque n divise a−b. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Reste » ? — variante 8",
      choices: [
        "Entier obtenu après division euclidienne.",
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n.",
        "Écriture unique d’un entier positif comme produit de nombres premiers.",
        "Entier obtenu en multipliant un autre entier par un entier."
      ],
      answer: 0,
      explanation: "Reste : Entier obtenu après division euclidienne. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Division euclidienne » ? — variante 9",
      choices: [
        "Écriture a=bq+r avec 0≤r<b pour b positif.",
        "Si a divise bc et si a est premier avec b, alors a divise c.",
        "Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p.",
        "Entier divisant exactement un autre entier."
      ],
      answer: 0,
      explanation: "Division euclidienne : Écriture a=bq+r avec 0≤r<b pour b positif. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Bézout » ? — variante 10",
      choices: [
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
        "Propriété d’un entier d’être pair ou impair.",
        "a divise b s’il existe un entier k tel que b=ak.",
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs."
      ],
      answer: 0,
      explanation: "Bézout : Identité exprimant le PGCD comme combinaison linéaire de deux entiers. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Inverse modulo n » ? — variante 11",
      choices: [
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n.",
        "Écriture unique d’un entier positif comme produit de nombres premiers.",
        "Entier obtenu en multipliant un autre entier par un entier.",
        "Plus grand diviseur commun de deux entiers."
      ],
      answer: 0,
      explanation: "Inverse modulo n : Classe d’un entier dont le produit avec un autre vaut 1 modulo n. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Théorème de Gauss » ? — variante 12",
      choices: [
        "Si a divise bc et si a est premier avec b, alors a divise c.",
        "Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p.",
        "Entier divisant exactement un autre entier.",
        "Méthode de calcul du PGCD par divisions euclidiennes successives."
      ],
      answer: 0,
      explanation: "Théorème de Gauss : Si a divise bc et si a est premier avec b, alors a divise c. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Parité » ? — variante 13",
      choices: [
        "Propriété d’un entier d’être pair ou impair.",
        "a divise b s’il existe un entier k tel que b=ak.",
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
        "Relation a≡b mod n lorsque n divise a−b."
      ],
      answer: 0,
      explanation: "Parité : Propriété d’un entier d’être pair ou impair. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Décomposition en facteurs premiers » ? — variante 14",
      choices: [
        "Écriture unique d’un entier positif comme produit de nombres premiers.",
        "Entier obtenu en multipliant un autre entier par un entier.",
        "Plus grand diviseur commun de deux entiers.",
        "Entier obtenu après division euclidienne."
      ],
      answer: 0,
      explanation: "Décomposition en facteurs premiers : Écriture unique d’un entier positif comme produit de nombres premiers. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Petit théorème de Fermat » ? — variante 15",
      choices: [
        "Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p.",
        "Entier divisant exactement un autre entier.",
        "Méthode de calcul du PGCD par divisions euclidiennes successives.",
        "Écriture a=bq+r avec 0≤r<b pour b positif."
      ],
      answer: 0,
      explanation: "Petit théorème de Fermat : Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Divisibilité » ? — variante 16",
      choices: [
        "a divise b s’il existe un entier k tel que b=ak.",
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
        "Relation a≡b mod n lorsque n divise a−b.",
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers."
      ],
      answer: 0,
      explanation: "Divisibilité : a divise b s’il existe un entier k tel que b=ak. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Multiple » ? — variante 17",
      choices: [
        "Entier obtenu en multipliant un autre entier par un entier.",
        "Plus grand diviseur commun de deux entiers.",
        "Entier obtenu après division euclidienne.",
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n."
      ],
      answer: 0,
      explanation: "Multiple : Entier obtenu en multipliant un autre entier par un entier. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Diviseur » ? — variante 18",
      choices: [
        "Entier divisant exactement un autre entier.",
        "Méthode de calcul du PGCD par divisions euclidiennes successives.",
        "Écriture a=bq+r avec 0≤r<b pour b positif.",
        "Si a divise bc et si a est premier avec b, alors a divise c."
      ],
      answer: 0,
      explanation: "Diviseur : Entier divisant exactement un autre entier. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « Nombre premier » ? — variante 19",
      choices: [
        "Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs.",
        "Relation a≡b mod n lorsque n divise a−b.",
        "Identité exprimant le PGCD comme combinaison linéaire de deux entiers.",
        "Propriété d’un entier d’être pair ou impair."
      ],
      answer: 0,
      explanation: "Nombre premier : Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Arithmétique », quelle proposition décrit correctement « PGCD » ? — variante 20",
      choices: [
        "Plus grand diviseur commun de deux entiers.",
        "Entier obtenu après division euclidienne.",
        "Classe d’un entier dont le produit avec un autre vaut 1 modulo n.",
        "Écriture unique d’un entier positif comme produit de nombres premiers."
      ],
      answer: 0,
      explanation: "PGCD : Plus grand diviseur commun de deux entiers. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    }
  ],
  exercises: [
    {
      title: "Identifier : Divisibilité",
      level: "Facile",
      statement: "Repérez les données, les inconnues et les hypothèses utiles dans une situation portant sur divisibilité. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : a divise b s’il existe un entier k tel que b=ak. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Calculer : Diviseur",
      level: "Facile",
      statement: "Effectuez un calcul détaillé mobilisant diviseur. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Entier divisant exactement un autre entier. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Justifier : PGCD",
      level: "Facile",
      statement: "Démontrez la propriété ou la conclusion à l’aide de pgcd. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Plus grand diviseur commun de deux entiers. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Interpréter : Congruence",
      level: "Intermédiaire",
      statement: "Expliquez ce que signifie le résultat obtenu avec congruence. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Relation a≡b mod n lorsque n divise a−b. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Modéliser : Division euclidienne",
      level: "Intermédiaire",
      statement: "Traduisez la situation en écriture mathématique en utilisant division euclidienne. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Écriture a=bq+r avec 0≤r<b pour b positif. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Résoudre : Inverse modulo n",
      level: "Intermédiaire",
      statement: "Résolvez le problème en explicitant les étapes avec inverse modulo n. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Classe d’un entier dont le produit avec un autre vaut 1 modulo n. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Vérifier : Parité",
      level: "Intermédiaire",
      statement: "Contrôlez la validité d’une proposition à l’aide de parité. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Propriété d’un entier d’être pair ou impair. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Comparer : Petit théorème de Fermat",
      level: "Difficile",
      statement: "Comparez deux démarches possibles mobilisant petit théorème de fermat. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Si p est premier et p ne divise pas a, alors a^(p−1)≡1 mod p. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Conjecturer : Multiple",
      level: "Difficile",
      statement: "Formulez une conjecture à partir de quelques cas puis indiquez comment la démontrer avec multiple. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Entier obtenu en multipliant un autre entier par un entier. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Synthétiser : Nombre premier",
      level: "Difficile",
      statement: "Rédigez une solution structurée qui mobilise nombre premier. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Entier naturel supérieur à 1 ayant exactement deux diviseurs positifs. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en mathématiques — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5784/programmes-et-ressources-en-mathematiques-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme de mathématiques de terminale générale en vigueur pour 2026-2027"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale structurée à partir du programme officiel de Terminale 2026-2027. Les exercices sont des entraînements génériques et doivent être relus par un enseignant avant validation éditoriale.",
  validationStatus: "draft"
},
  'mexp-graphes': {
  title: "Graphes et matrices",
  objectives: [
    "Connaître et définir les notions centrales de « Graphes et matrices ».",
    "Choisir une méthode adaptée et justifier chaque étape du raisonnement.",
    "Contrôler les conditions d’application et la cohérence des résultats.",
    "Mobiliser les outils du chapitre dans des problèmes variés."
  ],
  course: [
    {
      heading: "1. Représenter un réseau",
      body: [
        "Un graphe modélise des relations entre objets : les sommets représentent les objets et les arêtes ou arcs les liens.",
        "Le choix d’un graphe orienté ou non orienté dépend du caractère directionnel de la relation."
      ]
    },
    {
      heading: "2. Chemins et connexité",
      body: [
        "Un chemin relie deux sommets par une succession d’arêtes. Un graphe est connexe si tout couple de sommets peut être relié.",
        "Les degrés donnent des informations locales sur le réseau et aident à étudier certaines propriétés."
      ]
    },
    {
      heading: "3. Matrices d’adjacence",
      body: [
        "La matrice d’adjacence code les relations entre sommets. Dans un graphe non orienté simple, elle est symétrique et sa diagonale est nulle.",
        "Les coefficients des puissances de la matrice d’adjacence comptent des chemins de longueur donnée entre les sommets."
      ]
    },
    {
      heading: "4. Calcul matriciel",
      body: [
        "Le produit matriciel dépend de l’ordre des facteurs : en général AB n’est pas égal à BA.",
        "La matrice identité joue le rôle de neutre pour le produit. Les dimensions doivent être vérifiées avant le calcul."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Définir les sommets et les liens avant de construire la matrice.",
        "Vérifier l’orientation, l’ordre des sommets et interpréter les coefficients des puissances."
      ]
    }
  
      ,{ heading: 'Lire les puissances d’une matrice d’adjacence', body: ['Un graphe non orienté modélise des relations réciproques ; un graphe orienté distingue le sens des arcs. Le degré d’un sommet non orienté compte ses arêtes incidentes. Dans un graphe orienté, on distingue degré entrant et degré sortant. Ces notions décrivent la structure locale du réseau.', 'La matrice d’adjacence code les relations entre sommets : une entrée indique la présence d’une arête ou d’un arc entre deux sommets. Pour un graphe simple non orienté, cette matrice est symétrique. Les puissances de la matrice permettent de compter des marches de longueur donnée entre les sommets, ce qui relie le calcul matriciel à l’étude des chemins.', 'Il faut distinguer une marche, qui peut repasser par un sommet, un chemin simple, qui ne répète pas de sommet, et un cycle, qui revient au point de départ. La connexité indique si les sommets sont reliés par des chemins. Une matrice d’adjacence et sa puissance fournissent des outils de calcul, mais l’interprétation doit toujours revenir au réseau représenté.'] }],
  keyPoints: [
    "Représenter un réseau — Un graphe modélise des relations entre objets : les sommets représentent les objets et les arêtes ou arcs les liens.",
    "Chemins et connexité — Un chemin relie deux sommets par une succession d’arêtes. Un graphe est connexe si tout couple de sommets peut être relié.",
    "Matrices d’adjacence — La matrice d’adjacence code les relations entre sommets. Dans un graphe non orienté simple, elle est symétrique et sa diagonale est nulle.",
    "Calcul matriciel — Le produit matriciel dépend de l’ordre des facteurs : en général AB n’est pas égal à BA.",
    "Méthode — Définir les sommets et les liens avant de construire la matrice.",
    "Notions essentielles : Graphe, Sommet, Arête, Arc, Degré, Chemin, Cycle, Connexité."
  ],
  method: [
    "Lire l’énoncé et relever les données, les inconnues et les contraintes.",
    "Identifier la notion ou le théorème pertinent et vérifier ses hypothèses.",
    "Écrire les calculs de façon lisible, sans sauter les étapes décisives.",
    "Contrôler le résultat par une substitution, un ordre de grandeur ou une propriété.",
    "Conclure en répondant précisément à la question posée."
  ],
  flashcards: [
    {
      front: "Définir : Graphe — carte 1",
      back: "Ensemble de sommets reliés par des arêtes.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur sommet ? — carte 2",
      back: "Élément d’un graphe. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser arête dans un exercice ? — carte 3",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Lien entre deux sommets dans un graphe non orienté.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Arc — carte 4",
      back: "Lien orienté entre deux sommets.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur degré ? — carte 5",
      back: "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser chemin dans un exercice ? — carte 6",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Suite de sommets reliés successivement.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Cycle — carte 7",
      back: "Chemin fermé revenant à son sommet initial.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur connexité ? — carte 8",
      back: "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice d’adjacence dans un exercice ? — carte 9",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Matrice indiquant les liens entre les sommets.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Puissance de matrice — carte 10",
      back: "Produit répété d’une matrice par elle-même.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur matrice identité ? — carte 11",
      back: "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice nulle dans un exercice ? — carte 12",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Matrice dont tous les coefficients sont nuls.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Produit matriciel — carte 13",
      back: "Opération définie lorsque les dimensions sont compatibles.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur graphe orienté ? — carte 14",
      back: "Graphe dont les arêtes ont un sens. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser modélisation dans un exercice ? — carte 15",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Traduction d’une situation en sommets, liens et matrices.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Graphe — carte 16",
      back: "Ensemble de sommets reliés par des arêtes.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur sommet ? — carte 17",
      back: "Élément d’un graphe. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser arête dans un exercice ? — carte 18",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Lien entre deux sommets dans un graphe non orienté.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Arc — carte 19",
      back: "Lien orienté entre deux sommets.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur degré ? — carte 20",
      back: "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser chemin dans un exercice ? — carte 21",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Suite de sommets reliés successivement.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Cycle — carte 22",
      back: "Chemin fermé revenant à son sommet initial.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur connexité ? — carte 23",
      back: "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice d’adjacence dans un exercice ? — carte 24",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Matrice indiquant les liens entre les sommets.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Puissance de matrice — carte 25",
      back: "Produit répété d’une matrice par elle-même.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur matrice identité ? — carte 26",
      back: "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice nulle dans un exercice ? — carte 27",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Matrice dont tous les coefficients sont nuls.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Produit matriciel — carte 28",
      back: "Opération définie lorsque les dimensions sont compatibles.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur graphe orienté ? — carte 29",
      back: "Graphe dont les arêtes ont un sens. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser modélisation dans un exercice ? — carte 30",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Traduction d’une situation en sommets, liens et matrices.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Graphe » ? — variante 1",
      choices: [
        "Ensemble de sommets reliés par des arêtes.",
        "Lien orienté entre deux sommets.",
        "Chemin fermé revenant à son sommet initial.",
        "Produit répété d’une matrice par elle-même."
      ],
      answer: 0,
      explanation: "Graphe : Ensemble de sommets reliés par des arêtes. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Sommet » ? — variante 2",
      choices: [
        "Élément d’un graphe.",
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté.",
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin.",
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs."
      ],
      answer: 0,
      explanation: "Sommet : Élément d’un graphe. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Arête » ? — variante 3",
      choices: [
        "Lien entre deux sommets dans un graphe non orienté.",
        "Suite de sommets reliés successivement.",
        "Matrice indiquant les liens entre les sommets.",
        "Matrice dont tous les coefficients sont nuls."
      ],
      answer: 0,
      explanation: "Arête : Lien entre deux sommets dans un graphe non orienté. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Arc » ? — variante 4",
      choices: [
        "Lien orienté entre deux sommets.",
        "Chemin fermé revenant à son sommet initial.",
        "Produit répété d’une matrice par elle-même.",
        "Opération définie lorsque les dimensions sont compatibles."
      ],
      answer: 0,
      explanation: "Arc : Lien orienté entre deux sommets. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Degré » ? — variante 5",
      choices: [
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté.",
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin.",
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs.",
        "Graphe dont les arêtes ont un sens."
      ],
      answer: 0,
      explanation: "Degré : Nombre d’arêtes incidentes à un sommet dans un graphe non orienté. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Chemin » ? — variante 6",
      choices: [
        "Suite de sommets reliés successivement.",
        "Matrice indiquant les liens entre les sommets.",
        "Matrice dont tous les coefficients sont nuls.",
        "Traduction d’une situation en sommets, liens et matrices."
      ],
      answer: 0,
      explanation: "Chemin : Suite de sommets reliés successivement. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Cycle » ? — variante 7",
      choices: [
        "Chemin fermé revenant à son sommet initial.",
        "Produit répété d’une matrice par elle-même.",
        "Opération définie lorsque les dimensions sont compatibles.",
        "Ensemble de sommets reliés par des arêtes."
      ],
      answer: 0,
      explanation: "Cycle : Chemin fermé revenant à son sommet initial. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Connexité » ? — variante 8",
      choices: [
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin.",
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs.",
        "Graphe dont les arêtes ont un sens.",
        "Élément d’un graphe."
      ],
      answer: 0,
      explanation: "Connexité : Propriété selon laquelle deux sommets quelconques sont reliés par un chemin. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Matrice d’adjacence » ? — variante 9",
      choices: [
        "Matrice indiquant les liens entre les sommets.",
        "Matrice dont tous les coefficients sont nuls.",
        "Traduction d’une situation en sommets, liens et matrices.",
        "Lien entre deux sommets dans un graphe non orienté."
      ],
      answer: 0,
      explanation: "Matrice d’adjacence : Matrice indiquant les liens entre les sommets. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Puissance de matrice » ? — variante 10",
      choices: [
        "Produit répété d’une matrice par elle-même.",
        "Opération définie lorsque les dimensions sont compatibles.",
        "Ensemble de sommets reliés par des arêtes.",
        "Lien orienté entre deux sommets."
      ],
      answer: 0,
      explanation: "Puissance de matrice : Produit répété d’une matrice par elle-même. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Matrice identité » ? — variante 11",
      choices: [
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs.",
        "Graphe dont les arêtes ont un sens.",
        "Élément d’un graphe.",
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté."
      ],
      answer: 0,
      explanation: "Matrice identité : Matrice carrée avec des 1 sur la diagonale et 0 ailleurs. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Matrice nulle » ? — variante 12",
      choices: [
        "Matrice dont tous les coefficients sont nuls.",
        "Traduction d’une situation en sommets, liens et matrices.",
        "Lien entre deux sommets dans un graphe non orienté.",
        "Suite de sommets reliés successivement."
      ],
      answer: 0,
      explanation: "Matrice nulle : Matrice dont tous les coefficients sont nuls. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Produit matriciel » ? — variante 13",
      choices: [
        "Opération définie lorsque les dimensions sont compatibles.",
        "Ensemble de sommets reliés par des arêtes.",
        "Lien orienté entre deux sommets.",
        "Chemin fermé revenant à son sommet initial."
      ],
      answer: 0,
      explanation: "Produit matriciel : Opération définie lorsque les dimensions sont compatibles. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Graphe orienté » ? — variante 14",
      choices: [
        "Graphe dont les arêtes ont un sens.",
        "Élément d’un graphe.",
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté.",
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin."
      ],
      answer: 0,
      explanation: "Graphe orienté : Graphe dont les arêtes ont un sens. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Modélisation » ? — variante 15",
      choices: [
        "Traduction d’une situation en sommets, liens et matrices.",
        "Lien entre deux sommets dans un graphe non orienté.",
        "Suite de sommets reliés successivement.",
        "Matrice indiquant les liens entre les sommets."
      ],
      answer: 0,
      explanation: "Modélisation : Traduction d’une situation en sommets, liens et matrices. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Graphe » ? — variante 16",
      choices: [
        "Ensemble de sommets reliés par des arêtes.",
        "Lien orienté entre deux sommets.",
        "Chemin fermé revenant à son sommet initial.",
        "Produit répété d’une matrice par elle-même."
      ],
      answer: 0,
      explanation: "Graphe : Ensemble de sommets reliés par des arêtes. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Sommet » ? — variante 17",
      choices: [
        "Élément d’un graphe.",
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté.",
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin.",
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs."
      ],
      answer: 0,
      explanation: "Sommet : Élément d’un graphe. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Arête » ? — variante 18",
      choices: [
        "Lien entre deux sommets dans un graphe non orienté.",
        "Suite de sommets reliés successivement.",
        "Matrice indiquant les liens entre les sommets.",
        "Matrice dont tous les coefficients sont nuls."
      ],
      answer: 0,
      explanation: "Arête : Lien entre deux sommets dans un graphe non orienté. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Arc » ? — variante 19",
      choices: [
        "Lien orienté entre deux sommets.",
        "Chemin fermé revenant à son sommet initial.",
        "Produit répété d’une matrice par elle-même.",
        "Opération définie lorsque les dimensions sont compatibles."
      ],
      answer: 0,
      explanation: "Arc : Lien orienté entre deux sommets. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Graphes et matrices », quelle proposition décrit correctement « Degré » ? — variante 20",
      choices: [
        "Nombre d’arêtes incidentes à un sommet dans un graphe non orienté.",
        "Propriété selon laquelle deux sommets quelconques sont reliés par un chemin.",
        "Matrice carrée avec des 1 sur la diagonale et 0 ailleurs.",
        "Graphe dont les arêtes ont un sens."
      ],
      answer: 0,
      explanation: "Degré : Nombre d’arêtes incidentes à un sommet dans un graphe non orienté. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    }
  ],
  exercises: [
    {
      title: "Identifier : Graphe",
      level: "Facile",
      statement: "Repérez les données, les inconnues et les hypothèses utiles dans une situation portant sur graphe. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Ensemble de sommets reliés par des arêtes. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Calculer : Arête",
      level: "Facile",
      statement: "Effectuez un calcul détaillé mobilisant arête. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Lien entre deux sommets dans un graphe non orienté. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Justifier : Degré",
      level: "Facile",
      statement: "Démontrez la propriété ou la conclusion à l’aide de degré. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Nombre d’arêtes incidentes à un sommet dans un graphe non orienté. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Interpréter : Cycle",
      level: "Intermédiaire",
      statement: "Expliquez ce que signifie le résultat obtenu avec cycle. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Chemin fermé revenant à son sommet initial. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Modéliser : Matrice d’adjacence",
      level: "Intermédiaire",
      statement: "Traduisez la situation en écriture mathématique en utilisant matrice d’adjacence. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Matrice indiquant les liens entre les sommets. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Résoudre : Matrice identité",
      level: "Intermédiaire",
      statement: "Résolvez le problème en explicitant les étapes avec matrice identité. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Matrice carrée avec des 1 sur la diagonale et 0 ailleurs. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Vérifier : Produit matriciel",
      level: "Intermédiaire",
      statement: "Contrôlez la validité d’une proposition à l’aide de produit matriciel. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Opération définie lorsque les dimensions sont compatibles. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Comparer : Modélisation",
      level: "Difficile",
      statement: "Comparez deux démarches possibles mobilisant modélisation. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Traduction d’une situation en sommets, liens et matrices. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Conjecturer : Sommet",
      level: "Difficile",
      statement: "Formulez une conjecture à partir de quelques cas puis indiquez comment la démontrer avec sommet. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Élément d’un graphe. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Synthétiser : Arc",
      level: "Difficile",
      statement: "Rédigez une solution structurée qui mobilise arc. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Lien orienté entre deux sommets. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en mathématiques — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5784/programmes-et-ressources-en-mathematiques-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme de mathématiques de terminale générale en vigueur pour 2026-2027"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale structurée à partir du programme officiel de Terminale 2026-2027. Les exercices sont des entraînements génériques et doivent être relus par un enseignant avant validation éditoriale.",
  validationStatus: "draft"
},
  'mexp-algo': {
  title: "Algorithmique et programmation — Mathématiques expertes",
  objectives: [
    "Connaître et définir les notions centrales de « Algorithmique et programmation — Mathématiques expertes ».",
    "Choisir une méthode adaptée et justifier chaque étape du raisonnement.",
    "Contrôler les conditions d’application et la cohérence des résultats.",
    "Mobiliser les outils du chapitre dans des problèmes variés."
  ],
  course: [
    {
      heading: "1. Concevoir un algorithme",
      body: [
        "Un algorithme doit préciser les entrées, les sorties et les opérations. Les boucles et conditions traduisent la logique du problème.",
        "Les algorithmes d’arithmétique et de graphes exigent une gestion rigoureuse des indices et des cas limites."
      ]
    },
    {
      heading: "2. Boucles et invariants",
      body: [
        "Un invariant est une propriété vraie avant et après chaque itération. Il permet de justifier la correction d’un algorithme.",
        "La terminaison nécessite une condition d’arrêt atteignable et, pour une boucle, une quantité qui évolue vers cette condition."
      ]
    },
    {
      heading: "3. Récursivité et calcul efficace",
      body: [
        "Une fonction récursive doit comporter un cas de base et un appel qui rapproche de ce cas.",
        "L’exponentiation rapide utilise la parité de l’exposant pour réduire le nombre de multiplications."
      ]
    },
    {
      heading: "4. Graphes et matrices",
      body: [
        "Les parcours de graphes marquent les sommets visités afin d’éviter les répétitions infinies. Les opérations matricielles nécessitent des dimensions compatibles.",
        "Les tests sur de petits graphes et matrices permettent de repérer les erreurs d’indices et de convention."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Écrire une spécification simple avant le code : préconditions, résultat attendu et cas limites.",
        "Tester le cas minimal, un cas général et un cas frontière ; justifier correction et terminaison."
      ]
    }
  
      ,{ heading: 'Prouver la terminaison et l’invariant d’une boucle', body: ['Un algorithme correct doit produire le résultat attendu pour les entrées autorisées et terminer son exécution. Pour une boucle, on peut identifier un invariant : une propriété vraie avant la première itération et conservée à chaque passage. À la sortie, l’invariant combiné à la condition d’arrêt permet souvent de justifier le résultat.', 'La récursivité consiste à définir une fonction à partir de cas plus simples du même problème. Une fonction récursive doit comporter un cas de base et un appel qui rapproche effectivement de ce cas. Sans progression vers le cas de base, l’exécution peut ne jamais se terminer.', 'Le choix entre une boucle et une fonction récursive dépend de la structure du problème et de la lisibilité attendue. Dans tous les cas, on teste les cas limites, on vérifie le type et le domaine des entrées et on explique pourquoi le calcul produit le résultat annoncé.'] }],
  keyPoints: [
    "Concevoir un algorithme — Un algorithme doit préciser les entrées, les sorties et les opérations. Les boucles et conditions traduisent la logique du problème.",
    "Boucles et invariants — Un invariant est une propriété vraie avant et après chaque itération. Il permet de justifier la correction d’un algorithme.",
    "Récursivité et calcul efficace — Une fonction récursive doit comporter un cas de base et un appel qui rapproche de ce cas.",
    "Graphes et matrices — Les parcours de graphes marquent les sommets visités afin d’éviter les répétitions infinies. Les opérations matricielles nécessitent des dimensions compatibles.",
    "Méthode — Écrire une spécification simple avant le code : préconditions, résultat attendu et cas limites.",
    "Notions essentielles : Boucle, Invariant, Terminaison, Récursivité, Complexité, Euclide, Exponentiation rapide, Parcours de graphe."
  ],
  method: [
    "Lire l’énoncé et relever les données, les inconnues et les contraintes.",
    "Identifier la notion ou le théorème pertinent et vérifier ses hypothèses.",
    "Écrire les calculs de façon lisible, sans sauter les étapes décisives.",
    "Contrôler le résultat par une substitution, un ordre de grandeur ou une propriété.",
    "Conclure en répondant précisément à la question posée."
  ],
  flashcards: [
    {
      front: "Définir : Boucle — carte 1",
      back: "Structure répétant un bloc d’instructions.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur invariant ? — carte 2",
      back: "Propriété conservée à chaque passage dans une boucle. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser terminaison dans un exercice ? — carte 3",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Garantie que l’algorithme s’arrête.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Récursivité — carte 4",
      back: "Définition ou fonction faisant appel à elle-même.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur complexité ? — carte 5",
      back: "Quantité de ressources nécessaires à un algorithme. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser euclide dans un exercice ? — carte 6",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Algorithme itératif calculant le PGCD.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Exponentiation rapide — carte 7",
      back: "Calcul d’une puissance en réduisant le nombre de multiplications.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur parcours de graphe ? — carte 8",
      back: "Exploration systématique des sommets et arêtes. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice dans un exercice ? — carte 9",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Tableau rectangulaire de nombres organisé en lignes et colonnes.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Indice — carte 10",
      back: "Position d’un élément dans une liste ou matrice.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur condition d’arrêt ? — carte 11",
      back: "Test qui met fin à une boucle ou à une récursion. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser précondition dans un exercice ? — carte 12",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Hypothèse devant être satisfaite avant l’exécution.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Postcondition — carte 13",
      back: "Propriété attendue à la fin de l’exécution.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur test unitaire ? — carte 14",
      back: "Vérification d’un comportement sur un cas déterminé. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser trace dans un exercice ? — carte 15",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Suivi détaillé des valeurs et instructions exécutées.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Boucle — carte 16",
      back: "Structure répétant un bloc d’instructions.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur invariant ? — carte 17",
      back: "Propriété conservée à chaque passage dans une boucle. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser terminaison dans un exercice ? — carte 18",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Garantie que l’algorithme s’arrête.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Récursivité — carte 19",
      back: "Définition ou fonction faisant appel à elle-même.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur complexité ? — carte 20",
      back: "Quantité de ressources nécessaires à un algorithme. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser euclide dans un exercice ? — carte 21",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Algorithme itératif calculant le PGCD.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Exponentiation rapide — carte 22",
      back: "Calcul d’une puissance en réduisant le nombre de multiplications.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur parcours de graphe ? — carte 23",
      back: "Exploration systématique des sommets et arêtes. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser matrice dans un exercice ? — carte 24",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Tableau rectangulaire de nombres organisé en lignes et colonnes.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Indice — carte 25",
      back: "Position d’un élément dans une liste ou matrice.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur condition d’arrêt ? — carte 26",
      back: "Test qui met fin à une boucle ou à une récursion. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser précondition dans un exercice ? — carte 27",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Hypothèse devant être satisfaite avant l’exécution.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Définir : Postcondition — carte 28",
      back: "Propriété attendue à la fin de l’exécution.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Quelle propriété faut-il retenir sur test unitaire ? — carte 29",
      back: "Vérification d’un comportement sur un cas déterminé. Vérifier les hypothèses avant d'utiliser cette propriété.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    },
    {
      front: "Comment mobiliser trace dans un exercice ? — carte 30",
      back: "Identifier les données, écrire la relation mathématique adaptée, effectuer le calcul puis contrôler le résultat. Repère : Suivi détaillé des valeurs et instructions exécutées.",
      tags: [
        "mathématiques",
        "notion",
        "terminale"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Boucle » ? — variante 1",
      choices: [
        "Structure répétant un bloc d’instructions.",
        "Définition ou fonction faisant appel à elle-même.",
        "Calcul d’une puissance en réduisant le nombre de multiplications.",
        "Position d’un élément dans une liste ou matrice."
      ],
      answer: 0,
      explanation: "Boucle : Structure répétant un bloc d’instructions. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Invariant » ? — variante 2",
      choices: [
        "Propriété conservée à chaque passage dans une boucle.",
        "Quantité de ressources nécessaires à un algorithme.",
        "Exploration systématique des sommets et arêtes.",
        "Test qui met fin à une boucle ou à une récursion."
      ],
      answer: 0,
      explanation: "Invariant : Propriété conservée à chaque passage dans une boucle. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Terminaison » ? — variante 3",
      choices: [
        "Garantie que l’algorithme s’arrête.",
        "Algorithme itératif calculant le PGCD.",
        "Tableau rectangulaire de nombres organisé en lignes et colonnes.",
        "Hypothèse devant être satisfaite avant l’exécution."
      ],
      answer: 0,
      explanation: "Terminaison : Garantie que l’algorithme s’arrête. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Récursivité » ? — variante 4",
      choices: [
        "Définition ou fonction faisant appel à elle-même.",
        "Calcul d’une puissance en réduisant le nombre de multiplications.",
        "Position d’un élément dans une liste ou matrice.",
        "Propriété attendue à la fin de l’exécution."
      ],
      answer: 0,
      explanation: "Récursivité : Définition ou fonction faisant appel à elle-même. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Complexité » ? — variante 5",
      choices: [
        "Quantité de ressources nécessaires à un algorithme.",
        "Exploration systématique des sommets et arêtes.",
        "Test qui met fin à une boucle ou à une récursion.",
        "Vérification d’un comportement sur un cas déterminé."
      ],
      answer: 0,
      explanation: "Complexité : Quantité de ressources nécessaires à un algorithme. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Euclide » ? — variante 6",
      choices: [
        "Algorithme itératif calculant le PGCD.",
        "Tableau rectangulaire de nombres organisé en lignes et colonnes.",
        "Hypothèse devant être satisfaite avant l’exécution.",
        "Suivi détaillé des valeurs et instructions exécutées."
      ],
      answer: 0,
      explanation: "Euclide : Algorithme itératif calculant le PGCD. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Exponentiation rapide » ? — variante 7",
      choices: [
        "Calcul d’une puissance en réduisant le nombre de multiplications.",
        "Position d’un élément dans une liste ou matrice.",
        "Propriété attendue à la fin de l’exécution.",
        "Structure répétant un bloc d’instructions."
      ],
      answer: 0,
      explanation: "Exponentiation rapide : Calcul d’une puissance en réduisant le nombre de multiplications. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Parcours de graphe » ? — variante 8",
      choices: [
        "Exploration systématique des sommets et arêtes.",
        "Test qui met fin à une boucle ou à une récursion.",
        "Vérification d’un comportement sur un cas déterminé.",
        "Propriété conservée à chaque passage dans une boucle."
      ],
      answer: 0,
      explanation: "Parcours de graphe : Exploration systématique des sommets et arêtes. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Matrice » ? — variante 9",
      choices: [
        "Tableau rectangulaire de nombres organisé en lignes et colonnes.",
        "Hypothèse devant être satisfaite avant l’exécution.",
        "Suivi détaillé des valeurs et instructions exécutées.",
        "Garantie que l’algorithme s’arrête."
      ],
      answer: 0,
      explanation: "Matrice : Tableau rectangulaire de nombres organisé en lignes et colonnes. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Indice » ? — variante 10",
      choices: [
        "Position d’un élément dans une liste ou matrice.",
        "Propriété attendue à la fin de l’exécution.",
        "Structure répétant un bloc d’instructions.",
        "Définition ou fonction faisant appel à elle-même."
      ],
      answer: 0,
      explanation: "Indice : Position d’un élément dans une liste ou matrice. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Condition d’arrêt » ? — variante 11",
      choices: [
        "Test qui met fin à une boucle ou à une récursion.",
        "Vérification d’un comportement sur un cas déterminé.",
        "Propriété conservée à chaque passage dans une boucle.",
        "Quantité de ressources nécessaires à un algorithme."
      ],
      answer: 0,
      explanation: "Condition d’arrêt : Test qui met fin à une boucle ou à une récursion. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Précondition » ? — variante 12",
      choices: [
        "Hypothèse devant être satisfaite avant l’exécution.",
        "Suivi détaillé des valeurs et instructions exécutées.",
        "Garantie que l’algorithme s’arrête.",
        "Algorithme itératif calculant le PGCD."
      ],
      answer: 0,
      explanation: "Précondition : Hypothèse devant être satisfaite avant l’exécution. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Postcondition » ? — variante 13",
      choices: [
        "Propriété attendue à la fin de l’exécution.",
        "Structure répétant un bloc d’instructions.",
        "Définition ou fonction faisant appel à elle-même.",
        "Calcul d’une puissance en réduisant le nombre de multiplications."
      ],
      answer: 0,
      explanation: "Postcondition : Propriété attendue à la fin de l’exécution. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Test unitaire » ? — variante 14",
      choices: [
        "Vérification d’un comportement sur un cas déterminé.",
        "Propriété conservée à chaque passage dans une boucle.",
        "Quantité de ressources nécessaires à un algorithme.",
        "Exploration systématique des sommets et arêtes."
      ],
      answer: 0,
      explanation: "Test unitaire : Vérification d’un comportement sur un cas déterminé. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Trace » ? — variante 15",
      choices: [
        "Suivi détaillé des valeurs et instructions exécutées.",
        "Garantie que l’algorithme s’arrête.",
        "Algorithme itératif calculant le PGCD.",
        "Tableau rectangulaire de nombres organisé en lignes et colonnes."
      ],
      answer: 0,
      explanation: "Trace : Suivi détaillé des valeurs et instructions exécutées. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Boucle » ? — variante 16",
      choices: [
        "Structure répétant un bloc d’instructions.",
        "Définition ou fonction faisant appel à elle-même.",
        "Calcul d’une puissance en réduisant le nombre de multiplications.",
        "Position d’un élément dans une liste ou matrice."
      ],
      answer: 0,
      explanation: "Boucle : Structure répétant un bloc d’instructions. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Invariant » ? — variante 17",
      choices: [
        "Propriété conservée à chaque passage dans une boucle.",
        "Quantité de ressources nécessaires à un algorithme.",
        "Exploration systématique des sommets et arêtes.",
        "Test qui met fin à une boucle ou à une récursion."
      ],
      answer: 0,
      explanation: "Invariant : Propriété conservée à chaque passage dans une boucle. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Terminaison » ? — variante 18",
      choices: [
        "Garantie que l’algorithme s’arrête.",
        "Algorithme itératif calculant le PGCD.",
        "Tableau rectangulaire de nombres organisé en lignes et colonnes.",
        "Hypothèse devant être satisfaite avant l’exécution."
      ],
      answer: 0,
      explanation: "Terminaison : Garantie que l’algorithme s’arrête. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Récursivité » ? — variante 19",
      choices: [
        "Définition ou fonction faisant appel à elle-même.",
        "Calcul d’une puissance en réduisant le nombre de multiplications.",
        "Position d’un élément dans une liste ou matrice.",
        "Propriété attendue à la fin de l’exécution."
      ],
      answer: 0,
      explanation: "Récursivité : Définition ou fonction faisant appel à elle-même. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Algorithmique et programmation — Mathématiques expertes », quelle proposition décrit correctement « Complexité » ? — variante 20",
      choices: [
        "Quantité de ressources nécessaires à un algorithme.",
        "Exploration systématique des sommets et arêtes.",
        "Test qui met fin à une boucle ou à une récursion.",
        "Vérification d’un comportement sur un cas déterminé."
      ],
      answer: 0,
      explanation: "Complexité : Quantité de ressources nécessaires à un algorithme. Les autres propositions définissent d'autres notions du chapitre.",
      skill: "Connaissances et raisonnement mathématique"
    }
  ],
  exercises: [
    {
      title: "Identifier : Boucle",
      level: "Facile",
      statement: "Repérez les données, les inconnues et les hypothèses utiles dans une situation portant sur boucle. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Structure répétant un bloc d’instructions. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Calculer : Terminaison",
      level: "Facile",
      statement: "Effectuez un calcul détaillé mobilisant terminaison. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Garantie que l’algorithme s’arrête. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Justifier : Complexité",
      level: "Facile",
      statement: "Démontrez la propriété ou la conclusion à l’aide de complexité. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Quantité de ressources nécessaires à un algorithme. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Interpréter : Exponentiation rapide",
      level: "Intermédiaire",
      statement: "Expliquez ce que signifie le résultat obtenu avec exponentiation rapide. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Calcul d’une puissance en réduisant le nombre de multiplications. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Modéliser : Matrice",
      level: "Intermédiaire",
      statement: "Traduisez la situation en écriture mathématique en utilisant matrice. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Tableau rectangulaire de nombres organisé en lignes et colonnes. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Résoudre : Condition d’arrêt",
      level: "Intermédiaire",
      statement: "Résolvez le problème en explicitant les étapes avec condition d’arrêt. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Test qui met fin à une boucle ou à une récursion. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Vérifier : Postcondition",
      level: "Intermédiaire",
      statement: "Contrôlez la validité d’une proposition à l’aide de postcondition. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Propriété attendue à la fin de l’exécution. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Comparer : Trace",
      level: "Difficile",
      statement: "Comparez deux démarches possibles mobilisant trace. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Suivi détaillé des valeurs et instructions exécutées. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Conjecturer : Invariant",
      level: "Difficile",
      statement: "Formulez une conjecture à partir de quelques cas puis indiquez comment la démontrer avec invariant. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Propriété conservée à chaque passage dans une boucle. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    },
    {
      title: "Synthétiser : Récursivité",
      level: "Difficile",
      statement: "Rédigez une solution structurée qui mobilise récursivité. Présentez les étapes du raisonnement et donnez une conclusion explicite.",
      correction: "Une solution attendue commence par préciser les hypothèses et les notations. Elle mobilise la propriété suivante : Définition ou fonction faisant appel à elle-même. Le calcul doit être posé étape par étape, les conditions d’application vérifiées et le résultat interprété dans le contexte.",
      skills: [
        "Modélisation",
        "Calcul",
        "Justification"
      ],
      hints: [
        "Commencez par identifier les données et la propriété pertinente.",
        "Vérifiez les hypothèses avant d’appliquer une formule."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en mathématiques — voie générale",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5784/programmes-et-ressources-en-mathematiques-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme de mathématiques de terminale générale en vigueur pour 2026-2027"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale structurée à partir du programme officiel de Terminale 2026-2027. Les exercices sont des entraînements génériques et doivent être relus par un enseignant avant validation éditoriale.",
  validationStatus: "draft"
}
};
