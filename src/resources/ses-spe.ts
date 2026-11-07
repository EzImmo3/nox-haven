import type { ChapterResourceV4 } from '../contentTypes';

export const resources: Record<string, ChapterResourceV4> = {
  'ses-croissance': {
    title:'Quels sont les sources et les défis de la croissance économique ?',
    objectives:['Définir et mesurer la croissance économique.','Expliquer le rôle du travail, du capital et de la productivité globale des facteurs.','Comprendre le rôle du progrès technique et des institutions.','Présenter les limites écologiques et les enjeux de soutenabilité.'],
    course:[
      {heading:'1. Définir et mesurer la croissance',body:['La croissance économique désigne l’augmentation durable de la production de biens et services d’une économie. Elle est généralement mesurée par le taux de variation du produit intérieur brut (PIB) en volume, c’est-à-dire corrigé de l’évolution des prix. Le PIB mesure la valeur des biens et services finaux produits sur un territoire pendant une période donnée.', 'Le PIB est un indicateur de production, pas une mesure complète du bien-être. Il ne renseigne pas directement sur la répartition des revenus, le travail domestique non rémunéré, la qualité de l’environnement ou toutes les dimensions de la qualité de vie.']},
      {heading:'2. Les facteurs de production',body:['La croissance peut provenir de l’augmentation des quantités de facteurs de production. Le travail dépend notamment du nombre de personnes en emploi, du temps travaillé et des qualifications. Le capital productif comprend les équipements, bâtiments et logiciels utilisés pour produire.', 'La productivité globale des facteurs (PGF) désigne la part de la croissance qui n’est pas expliquée par la seule augmentation mesurée du travail et du capital. Elle reflète notamment une meilleure combinaison des facteurs, l’organisation et le progrès technique.']},
      {heading:'3. Progrès technique, innovation et croissance endogène',body:['Le progrès technique correspond à l’amélioration des techniques et des connaissances permettant de produire plus efficacement ou de nouveaux biens et services. Les innovations peuvent être de produit, de procédé ou organisationnelles. Elles peuvent augmenter la productivité, transformer les emplois et déplacer les avantages concurrentiels.', 'Les théories de la croissance endogène mettent en évidence des mécanismes par lesquels la croissance peut être entretenue par des décisions et investissements internes à l’économie : capital humain, recherche-développement, infrastructures et accumulation de connaissances. Ces investissements peuvent produire des externalités positives : leurs bénéfices dépassent parfois ceux qui les financent.']},
      {heading:'4. Institutions et croissance',body:['Les institutions sont les règles formelles et informelles qui organisent les interactions économiques et sociales. Des droits de propriété sécurisés, un système juridique fiable, une concurrence encadrée, l’accès à l’éducation et des politiques publiques adaptées peuvent favoriser l’investissement et l’innovation.', 'Les institutions ne produisent pas mécaniquement la croissance : leurs effets dépendent de leur qualité, de leur légitimité, de leur application et du contexte historique. Il faut éviter les explications monocausales.']},
      {heading:'5. Les limites écologiques',body:['La croissance peut accroître les prélèvements de ressources, les émissions de gaz à effet de serre, les pollutions et les atteintes à la biodiversité. Les innovations peuvent réduire certaines pressions par unité produite, mais un effet rebond peut annuler une partie des gains si la consommation totale augmente.', 'La soutenabilité interroge la possibilité de satisfaire les besoins présents sans compromettre ceux des générations futures. Le débat porte notamment sur la substitution possible entre différentes formes de capital, les limites physiques, la transformation des modes de production et de consommation, ainsi que les politiques de transition.']}
    ],
    keyPoints:['La croissance est mesurée par l’évolution du PIB réel.','Le travail et le capital sont des facteurs de production.','La PGF rend compte de l’efficacité globale de leur combinaison.','Le progrès technique et les innovations soutiennent la productivité.','Le capital humain, la recherche et les infrastructures peuvent générer des externalités positives.','La croissance soulève des défis écologiques et sociaux.'],
    method:['Définir précisément croissance, PIB en volume, productivité et progrès technique.','Distinguer accumulation des facteurs et gains de productivité.','Expliquer les mécanismes avec des connecteurs causaux : investissement, qualification, innovation, externalité.','Mobiliser un exemple précis sans le substituer au raisonnement.','Présenter les limites du PIB et les enjeux de soutenabilité dans une partie distincte.'],
    flashcards:[

      {front:'Qu’est-ce que la croissance économique ?',back:'L’augmentation durable de la production de biens et services d’une économie.'},
      {front:'Comment mesure-t-on généralement la croissance ?',back:'Par le taux de variation du PIB en volume.'},
      {front:'Pourquoi utilise-t-on le PIB en volume ?',back:'Pour neutraliser l’effet de la variation des prix et mesurer l’évolution des quantités produites.'},
      {front:'Quels sont les deux grands facteurs de production ?',back:'Le travail et le capital.'},
      {front:'Qu’est-ce que la productivité globale des facteurs ?',back:'Un indicateur de l’efficacité de la combinaison du travail et du capital ; elle capte notamment les gains liés au progrès technique.'},
      {front:'Qu’est-ce que le progrès technique ?',back:'L’amélioration des connaissances et des techniques qui permet de produire autrement ou plus efficacement.'},
      {front:'Qu’est-ce que le capital humain ?',back:'Les connaissances, compétences et qualifications incorporées aux individus.'},
      {front:'Qu’est-ce qu’une externalité positive ?',back:'Un effet bénéfique d’une activité sur des tiers sans compensation monétaire directe.'},
      {front:'Pourquoi le PIB ne mesure-t-il pas tout le bien-être ?',back:'Il ne décrit pas complètement la répartition, les activités non marchandes, la santé, la qualité de vie ou l’état de l’environnement.'},
      {front:'Qu’est-ce que l’effet rebond ?',back:'Une hausse de l’utilisation ou de la consommation qui réduit ou annule les économies de ressources permises par un gain d’efficacité.'}
      ,
      {front:'Quelle différence existe entre PIB nominal et PIB en volume ?',back:'Le PIB nominal est évalué aux prix courants ; le PIB en volume neutralise les variations de prix.'},
      {front:'Qu’est-ce qu’un investissement productif ?',back:'Une dépense destinée à acquérir ou renouveler des moyens de production durables.'},
      {front:'Comment le capital physique contribue-t-il à la production ?',back:'Les équipements et infrastructures permettent de produire des biens et services.'},
      {front:'Qu’est-ce qu’une innovation de procédé ?',back:'Une nouvelle méthode de production ou de distribution qui transforme la façon de produire.'},
      {front:'Qu’est-ce qu’une innovation de produit ?',back:'La mise sur le marché d’un bien ou service nouveau ou sensiblement amélioré.'},
      {front:'Pourquoi les connaissances peuvent-elles être une source de croissance endogène ?',back:'Elles peuvent améliorer la productivité et se diffuser au-delà de l’organisation qui les a produites.'},
      {front:'Quel rôle les infrastructures peuvent-elles jouer dans la croissance ?',back:'Elles réduisent certains coûts, facilitent les échanges et soutiennent l’activité productive.'},
      {front:'Comment les institutions peuvent-elles encourager l’investissement ?',back:'Des règles prévisibles et des droits sécurisés réduisent l’incertitude et favorisent les projets de long terme.'},
      {front:'Qu’est-ce que la soutenabilité ?',back:'La capacité à répondre aux besoins présents sans compromettre la capacité des générations futures à répondre aux leurs.'},
      {front:'Pourquoi distinguer croissance et développement ?',back:'La croissance mesure l’évolution de la production, tandis que le développement renvoie à des transformations plus larges des conditions de vie.'},
      {front:'Qu’est-ce qu’une ressource non renouvelable ?',back:'Une ressource dont le stock se reconstitue à une échelle de temps très longue par rapport à son rythme d’utilisation.'},
      {front:'Que signifie découpler croissance et pressions environnementales ?',back:'Faire évoluer la production tout en réduisant les pressions écologiques, en valeur absolue ou relativement à la production.'},
      {front:'Pourquoi le progrès technique ne garantit-il pas à lui seul la soutenabilité ?',back:'Les gains d’efficacité peuvent être compensés par l’augmentation des volumes produits ou consommés.'},
      {front:'Qu’est-ce qu’une externalité négative ?',back:'Un coût imposé à des tiers sans être entièrement pris en compte dans le prix de marché.'},
      {front:'Comment une politique publique peut-elle limiter une externalité négative ?',back:'Elle peut réglementer, taxer, subventionner des alternatives ou mettre en place des dispositifs de marché.'},
      {front:'Pourquoi la productivité du travail peut-elle augmenter ?',back:'Grâce à de meilleurs équipements, à la formation, à l’organisation ou au progrès technique.'},
      {front:'Qu’est-ce que l’accumulation du capital ?',back:'L’augmentation du stock de capital productif par l’investissement net.'},
      {front:'Quelle différence entre invention et innovation ?',back:'L’invention crée une idée ou un procédé ; l’innovation correspond à sa mise en œuvre ou sa diffusion économique.'},
      {front:'Pourquoi la croissance peut-elle transformer la structure des emplois ?',back:'Les innovations et les changements de demande déplacent les activités entre secteurs et métiers.'},
      {front:'Quelle précaution prendre lorsqu’on utilise un exemple de croissance ?',back:'Préciser le mécanisme illustré et éviter de présenter un cas particulier comme une loi générale.'}
    ],
    quiz:[

      {level:'Facile',question:'La croissance économique correspond à :',choices:['Une hausse durable de la production','Une baisse générale des prix','Une hausse automatique des salaires'],answer:0,explanation:'La croissance porte sur l’augmentation de la production de biens et services.'},
      {level:'Facile',question:'Quel indicateur est généralement utilisé pour mesurer la croissance ?',choices:['Le PIB en volume','Le taux de chômage seul','Le niveau des exportations seul'],answer:0,explanation:'Le taux de variation du PIB réel est l’indicateur usuel.'},
      {level:'Facile',question:'Quels sont les facteurs de production classiques ?',choices:['Travail et capital','Prix et monnaie','Importations et exportations'],answer:0,explanation:'Le travail et le capital contribuent directement à la production.'},
      {level:'Intermédiaire',question:'Une hausse de la qualification des travailleurs agit notamment sur :',choices:['Le capital humain','Le niveau général des prix uniquement','La quantité de ressources naturelles'],answer:0,explanation:'Les qualifications et compétences constituent le capital humain.'},
      {level:'Intermédiaire',question:'La PGF permet notamment d’appréhender :',choices:['L’efficacité de la combinaison productive','Le seul nombre de salariés','Le niveau des impôts'],answer:0,explanation:'Elle mesure la contribution de l’efficacité globale au-delà de la seule accumulation des facteurs.'},
      {level:'Intermédiaire',question:'La recherche-développement peut favoriser la croissance car elle :',choices:['Produit des connaissances et innovations','Supprime toute rareté','Garantit une hausse immédiate du PIB'],answer:0,explanation:'La R&D peut produire des innovations et des connaissances diffusables.'},
      {level:'Intermédiaire',question:'Une externalité positive de l’éducation peut être :',choices:['Une diffusion des connaissances à d’autres personnes','Une hausse certaine de la pollution','Une baisse mécanique de la productivité'],answer:0,explanation:'Les compétences peuvent bénéficier à l’ensemble de la société.'},
      {level:'Difficile',question:'Pourquoi le PIB peut-il augmenter sans amélioration équivalente du bien-être ?',choices:['Parce qu’il ne mesure pas toutes les dimensions du bien-être','Parce qu’il exclut toute production marchande','Parce qu’il mesure directement les inégalités'],answer:0,explanation:'Le PIB est un indicateur de production et ne renseigne pas complètement sur la répartition ou l’environnement.'},
      {level:'Difficile',question:'Un gain d’efficacité énergétique est suivi d’une forte hausse de l’usage de l’énergie. Cela peut illustrer :',choices:['L’effet rebond','La désinflation','La substitution du travail au capital'],answer:0,explanation:'L’augmentation des usages peut compenser une partie des économies unitaires.'},
      {level:'Difficile',question:'Quelle proposition décrit le mieux la croissance endogène ?',choices:['La croissance peut être entretenue par l’accumulation de connaissances, de compétences et d’infrastructures','La croissance dépend exclusivement du climat','La croissance est indépendante des décisions d’investissement'],answer:0,explanation:'Les modèles de croissance endogène étudient des mécanismes internes d’accumulation et leurs externalités.'}
      ,
      {level:'Facile',question:'Le PIB en volume permet principalement de :',choices:['Neutraliser l’effet des prix','Mesurer directement les inégalités','Compter uniquement les exportations'],answer:0,explanation:'Le calcul en volume corrige l’effet de la variation des prix.'},
      {level:'Facile',question:'Une dépense de formation contribue directement à développer :',choices:['Le capital humain','Le capital naturel','Le stock de monnaie'],answer:0,explanation:'La formation développe les connaissances et compétences des travailleurs.'},
      {level:'Facile',question:'L’achat d’une machine de production constitue généralement :',choices:['Un investissement productif','Une consommation intermédiaire des ménages','Une exportation'],answer:0,explanation:'La machine est un capital fixe utilisé durablement dans la production.'},
      {level:'Intermédiaire',question:'Une innovation de procédé concerne :',choices:['Une nouvelle méthode de production','La seule hausse du prix de vente','La variation du taux de change'],answer:0,explanation:'Elle modifie la manière dont un bien ou service est produit ou distribué.'},
      {level:'Intermédiaire',question:'La croissance endogène insiste sur :',choices:['Les mécanismes internes d’accumulation et de diffusion des connaissances','L’absence de rôle des investissements','Une croissance uniquement déterminée par la météo'],answer:0,explanation:'Elle étudie notamment le capital humain, la R&D et les infrastructures.'},
      {level:'Intermédiaire',question:'Des droits de propriété sécurisés peuvent favoriser :',choices:['L’investissement à long terme','La disparition de toute incertitude économique','La suppression des échanges'],answer:0,explanation:'La sécurité juridique peut réduire certains risques liés aux projets d’investissement.'},
      {level:'Intermédiaire',question:'Une pollution imposant un coût à des riverains sans compensation est :',choices:['Une externalité négative','Une externalité positive','Un gain de productivité'],answer:0,explanation:'Le coût subi par les tiers n’est pas entièrement intégré dans la décision du producteur.'},
      {level:'Difficile',question:'Une baisse de l’énergie consommée par produit, accompagnée d’une forte hausse de la production, peut :',choices:['Ne pas réduire la consommation totale','Garantir une baisse absolue de la consommation','Supprimer les émissions par définition'],answer:0,explanation:'L’augmentation des volumes peut compenser les gains d’efficacité.'},
      {level:'Difficile',question:'La PGF ne doit pas être confondue avec :',choices:['La seule quantité de travail employée','L’efficacité globale de la combinaison productive','Une mesure résiduelle des gains de productivité'],answer:0,explanation:'La PGF ne correspond pas au seul volume de travail ; elle rend compte de l’efficacité globale.'},
      {level:'Difficile',question:'Quelle proposition distingue correctement croissance et développement ?',choices:['La croissance porte sur la production, le développement sur des transformations plus larges des conditions de vie','Les deux notions désignent toujours exactement la même chose','Le développement se mesure uniquement par le PIB nominal'],answer:0,explanation:'Le développement est multidimensionnel et ne se réduit pas à la hausse du PIB.'}
    ],
    exercises:[

      {title:'Calculer un taux de croissance',level:'Facile',statement:'Le PIB en volume passe de 2 000 milliards d’euros à 2 060 milliards. Calcule le taux de croissance et interprète-le.',correction:'Taux = ((2 060 − 2 000) / 2 000) × 100 = 3 %. La production mesurée par le PIB réel a augmenté de 3 % sur la période.',skills:['Calculer un taux de variation','Interpréter un indicateur']},
      {title:'Distinguer accumulation et productivité',level:'Intermédiaire',statement:'Une entreprise augmente son nombre de machines et forme ses salariés. Explique en quoi ces deux décisions peuvent contribuer à la croissance, en distinguant capital physique et capital humain.',correction:'L’achat de machines augmente le capital physique disponible et peut accroître les capacités de production. La formation augmente le capital humain, améliore les compétences et peut accroître la productivité du travail. Les effets dépendent de l’utilisation effective des équipements et de la qualité de la formation.',skills:['Distinguer les facteurs de production','Expliquer un mécanisme économique']},
      {title:'Construire un raisonnement sur les limites de la croissance',level:'Difficile',statement:'Montre que le progrès technique peut soutenir la croissance tout en ne supprimant pas automatiquement ses défis écologiques. Construis deux arguments complémentaires.',correction:'D’une part, les innovations peuvent améliorer l’efficacité énergétique, développer des procédés moins polluants et favoriser de nouvelles activités. D’autre part, elles ne garantissent pas une baisse de l’impact total : l’augmentation des volumes consommés peut produire un effet rebond, et certaines ressources ou fonctions écologiques sont difficilement substituables. Une réponse solide distingue donc l’impact par unité produite de l’impact total.',skills:['Mobiliser une notion','Construire une argumentation nuancée','Utiliser l’effet rebond']}
      ,
      {title:'Lire une évolution du PIB nominal et réel',level:'Facile',statement:'Le PIB nominal augmente de 5 % tandis que le niveau général des prix augmente de 2 %. Explique pourquoi la croissance en volume est inférieure à la croissance nominale, sans chercher une approximation exacte.',correction:'Le PIB nominal est évalué aux prix courants. Une partie de sa hausse provient donc de l’augmentation des prix. Le PIB en volume neutralise cet effet : sa progression est donc inférieure à 5 % lorsque les prix augmentent.',skills:['Distinguer valeur et volume','Interpréter un indicateur']},
      {title:'Identifier les facteurs de production',level:'Facile',statement:'Une entreprise recrute des salariés qualifiés et acquiert un logiciel de gestion. Identifie les facteurs ou formes de capital concernés et explique leur contribution possible.',correction:'Les salariés supplémentaires augmentent la quantité de travail. Leurs qualifications relèvent du capital humain. Le logiciel constitue un capital productif immatériel. Ces éléments peuvent accroître les capacités et l’efficacité de production, selon leur utilisation.',skills:['Identifier travail et capital','Mobiliser le capital humain']},
      {title:'Expliquer une externalité positive',level:'Intermédiaire',statement:'Une entreprise finance une recherche dont les résultats sont ensuite repris par d’autres entreprises. Explique pourquoi cette situation peut constituer une externalité positive.',correction:'L’entreprise supporte le coût initial de la recherche, mais les connaissances diffusées profitent également à d’autres acteurs. Une partie du bénéfice dépasse donc le rendement privé de l’investissement : c’est une externalité positive.',skills:['Définir une externalité','Expliquer un mécanisme']},
      {title:'Relier innovation et productivité',level:'Intermédiaire',statement:'Une entreprise automatise une étape de production. Présente deux mécanismes par lesquels cette innovation peut augmenter la productivité, puis une limite possible.',correction:'L’automatisation peut réduire le temps nécessaire par unité produite et améliorer la régularité ou la qualité. Elle peut aussi permettre de réaffecter le travail à des tâches complémentaires. Toutefois, elle nécessite des investissements, des compétences et une organisation adaptée ; elle peut également déplacer certains emplois.',skills:['Analyser une innovation','Nuancer un raisonnement']},
      {title:'Analyser le rôle des institutions',level:'Intermédiaire',statement:'Explique comment un système juridique prévisible et la protection des contrats peuvent favoriser l’investissement, en évitant une explication déterministe.',correction:'La prévisibilité des règles réduit l’incertitude sur l’exécution des contrats et la protection des investissements. Cela peut encourager des projets de long terme. Toutefois, l’effet dépend aussi de l’accès au financement, de la demande, des compétences et de l’application effective des règles.',skills:['Mobiliser les institutions','Construire une explication nuancée']},
      {title:'Distinguer croissance et bien-être',level:'Difficile',statement:'Un pays connaît une hausse de son PIB réel, mais les inégalités augmentent et la qualité de l’air se dégrade. Montre pourquoi on ne peut pas déduire automatiquement une amélioration générale du bien-être.',correction:'Le PIB réel renseigne sur la production en volume, mais ne décrit pas sa répartition. Une hausse de la production peut coexister avec une concentration des revenus. Le PIB ne mesure pas non plus directement les dommages environnementaux et leurs effets sanitaires. Il faut donc mobiliser des indicateurs complémentaires.',skills:['Discuter les limites du PIB','Argumenter à partir de plusieurs dimensions']},
      {title:'Discuter le découplage',level:'Difficile',statement:'Présente la différence entre découplage relatif et découplage absolu de la croissance et des pressions environnementales.',correction:'Le découplage est relatif lorsque les pressions environnementales augmentent moins vite que la production, ou diminuent par unité produite. Il est absolu lorsque les pressions totales diminuent alors que la production augmente. La distinction porte donc sur l’évolution totale, pas seulement sur l’intensité.',skills:['Définir précisément','Comparer deux notions']}
    
    
    
    ],
    validationStatus:'draft',
    sources: [{ title: 'Programme de spécialité SES de terminale générale', institution: 'Ministère de l’Éducation nationale — Bulletin officiel / Éduscol', url: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921253A.htm', consultedAt: '2026-11-04', supports: ['Sources et défis de la croissance économique'] }],
    sourceNote:'Contenu pédagogique original construit autour des objectifs du programme de Terminale spécialité SES en vigueur. Les exemples chiffrés sont fictifs et servent uniquement à l’entraînement.'
  },
  'ses-commerce': {title:"Quels sont les fondements du commerce international et de l’internationalisation de la production ?",objectives:["Expliquer les avantages comparatifs et les gains à l’échange, y compris entre pays de productivité comparable.","Distinguer compétitivité-prix et hors-prix et comprendre le rôle de la productivité des firmes.","Décrire l’internationalisation des chaînes de valeur et les stratégies des firmes multinationales.","Analyser les effets du commerce international sur les prix, les inégalités et les débats entre libre-échange et protectionnisme."],course:[{heading:"1. Pourquoi les pays échangent-ils ?",body:["Le commerce international désigne les échanges de biens et de services entre résidents d’économies différentes. Les pays peuvent se spécialiser dans les productions pour lesquelles ils disposent d’un avantage comparatif : le coût d’opportunité y est relativement plus faible. La spécialisation permet d’utiliser plus efficacement les ressources et peut accroître la production totale.","Dans le modèle ricardien, un pays peut avoir intérêt à se spécialiser même s’il est moins productif dans toutes les activités : ce sont les coûts relatifs, et non les seuls coûts absolus, qui déterminent l’avantage comparatif. Les échanges peuvent donc être mutuellement avantageux.","Les dotations factorielles, les ressources naturelles, le capital, le travail qualifié et les technologies contribuent aussi à expliquer les spécialisations. Ces facteurs ne déterminent toutefois pas mécaniquement les échanges : les institutions, les politiques publiques et les stratégies des entreprises comptent également."],example:{prompt:"Le pays A renonce à 2 unités de vêtements pour produire une unité de blé, tandis que le pays B renonce à 4 unités de vêtements. Quel pays possède l’avantage comparatif dans la production de blé ?",solution:"Le pays A possède l’avantage comparatif dans le blé, car son coût d’opportunité est plus faible : 2 unités de vêtements contre 4 pour le pays B. Cette comparaison porte sur le coût relatif. Pour déterminer la spécialisation complète des deux pays, il faudrait aussi connaître le coût d’opportunité des vêtements dans chacun d’eux."}},{heading:"2. Des échanges entre pays comparables",body:["Une part importante du commerce se réalise entre pays proches par leur niveau de développement et leurs dotations. Le commerce intrabranche correspond à l’échange simultané de produits appartenant à une même branche, par exemple des voitures de gammes différentes.","La différenciation des produits (qualité, marque, design, caractéristiques) et la recherche de variété expliquent ces échanges. Les économies d’échelle réduisent le coût moyen lorsque la production augmente : l’accès à un marché élargi permet aux entreprises de produire davantage et de répartir les coûts fixes.","La concurrence monopolistique combine de nombreuses entreprises proposant des variétés différenciées. Les consommateurs bénéficient d’un choix plus large, tandis que les producteurs peuvent exploiter des économies d’échelle."]},{heading:"3. Productivité des firmes et compétitivité",body:["La compétitivité-prix désigne la capacité à proposer des prix attractifs à qualité comparable. Elle dépend notamment des coûts de production, des salaires rapportés à la productivité, des coûts intermédiaires, du taux de change et des marges.","La compétitivité hors-prix repose sur des facteurs autres que le prix : qualité, innovation, réputation, délais, service après-vente, design et adaptation aux besoins. Elle permet de vendre même lorsque les prix sont plus élevés.","Les firmes les plus productives sont davantage capables de supporter les coûts fixes liés à l’exportation : prospection, adaptation aux normes, logistique et réseaux commerciaux. La productivité des entreprises contribue donc à la compétitivité du pays, mais toutes les firmes d’un même pays n’exportent pas."]},{heading:"4. L’internationalisation de la chaîne de valeur",body:["Une chaîne de valeur regroupe les étapes qui contribuent à la conception, la production, la commercialisation et au service d’un produit. Une firme peut répartir ces étapes entre plusieurs pays selon les coûts, les compétences, les infrastructures, la proximité des marchés ou la sécurité des approvisionnements.","Les investissements directs à l’étranger (IDE) correspondent à des opérations transfrontières visant à établir un intérêt durable et une influence significative dans une entreprise située à l’étranger. Les firmes multinationales organisent ainsi des filiales et des réseaux de production internationaux.","La fragmentation internationale de la production peut accroître l’efficacité et diffuser des technologies, mais elle crée aussi des interdépendances. Une rupture logistique, une tension géopolitique ou une catastrophe peut affecter plusieurs étapes de la production."]},{heading:"5. Effets et débats : libre-échange ou protectionnisme ?",body:["Le commerce peut faire baisser les prix, élargir le choix et favoriser les gains de productivité. Il peut contribuer à réduire les écarts de revenus entre pays lorsque certains pays rattrapent leur retard, mais les effets au sein de chaque pays sont inégaux.","Les consommateurs et les entreprises utilisant des intrants importés peuvent gagner au pouvoir d’achat ou en compétitivité. Certains travailleurs et territoires exposés à la concurrence peuvent subir des pertes d’emplois ou de revenus. Les effets dépendent des secteurs, des qualifications, de la mobilité et des politiques d’accompagnement.","Le libre-échange vise à réduire les obstacles aux échanges. Le protectionnisme utilise des droits de douane, quotas, normes ou subventions pour protéger certaines activités. Il peut soutenir une industrie naissante ou répondre à des enjeux stratégiques, mais il risque d’augmenter les prix, de provoquer des représailles et de réduire la concurrence. L’analyse doit comparer objectifs, coûts et effets distributifs."]}],keyPoints:["Échanges de biens et services entre économies nationales.","Avantage fondé sur un coût d’opportunité relativement plus faible.","Valeur de la meilleure possibilité à laquelle on renonce en faisant un choix.","Concentration relative de la production sur certaines activités.","Capacité à produire une quantité donnée avec moins de facteurs qu’un autre producteur.","Quantités relatives de travail, capital et ressources dont dispose une économie.","Modèle expliquant les échanges par les différences de productivité relative et les avantages comparatifs.","Échanges de produits appartenant à une même branche entre pays."],method:["Définir précisément les notions économiques mobilisées.","Identifier le mécanisme causal et ses étapes.","Distinguer corrélation, causalité et conditions de validité.","Appuyer chaque argument sur un exemple ou une donnée pertinente.","Nuancer le raisonnement en présentant les effets et limites."],flashcards:[{front:"Commerce international",back:"Échanges de biens et services entre économies nationales."},{front:"Avantage comparatif",back:"Avantage fondé sur un coût d’opportunité relativement plus faible."},{front:"Coût d’opportunité",back:"Valeur de la meilleure possibilité à laquelle on renonce en faisant un choix."},{front:"Spécialisation",back:"Concentration relative de la production sur certaines activités."},{front:"Avantage absolu",back:"Capacité à produire une quantité donnée avec moins de facteurs qu’un autre producteur."},{front:"Dotations factorielles",back:"Quantités relatives de travail, capital et ressources dont dispose une économie."},{front:"Modèle ricardien",back:"Modèle expliquant les échanges par les différences de productivité relative et les avantages comparatifs."},{front:"Commerce intrabranche",back:"Échanges de produits appartenant à une même branche entre pays."},{front:"Différenciation horizontale",back:"Différences de variété ou de caractéristiques sans hiérarchie unique de qualité."},{front:"Différenciation verticale",back:"Différences de qualité entre produits, généralement hiérarchisables."},{front:"Économies d’échelle",back:"Baisse du coût moyen lorsque le volume produit augmente."},{front:"Concurrence monopolistique",back:"Marché composé de nombreuses entreprises offrant des produits différenciés."},{front:"Compétitivité-prix",back:"Capacité à vendre à un prix compétitif à qualité comparable."},{front:"Compétitivité hors-prix",back:"Capacité à attirer les clients par la qualité, l’innovation, la marque ou le service."},{front:"Productivité",back:"Rapport entre une production et les facteurs mobilisés pour l’obtenir."},{front:"Coût unitaire",back:"Coût nécessaire pour produire une unité de bien ou de service."},{front:"Firme multinationale",back:"Entreprise qui contrôle ou coordonne des activités productives dans plusieurs pays."},{front:"IDE",back:"Investissement transfrontière établissant un intérêt durable et une influence dans une entreprise étrangère."},{front:"Chaîne de valeur",back:"Ensemble des étapes qui contribuent à créer et commercialiser un produit."},{front:"Fragmentation productive",back:"Répartition des étapes de production entre plusieurs entreprises ou territoires."},{front:"Externalisation",back:"Confier à un prestataire extérieur une activité auparavant réalisée en interne ou nouvellement organisée."},{front:"Délocalisation",back:"Transfert d’une activité productive vers un autre territoire."},{front:"Intrants",back:"Biens et services utilisés dans le processus de production."},{front:"Libre-échange",back:"Réduction des obstacles publics aux échanges internationaux."},{front:"Droit de douane",back:"Taxe prélevée sur un produit importé."},{front:"Quota d’importation",back:"Limitation quantitative des importations d’un produit."},{front:"Protectionnisme",back:"Mesures visant à protéger des producteurs nationaux de la concurrence étrangère."},{front:"Gains à l’échange",back:"Amélioration possible de la situation des participants grâce à la spécialisation et aux échanges."},{front:"Balance commerciale",back:"Différence entre la valeur des exportations et celle des importations de biens."},{front:"Risque de dépendance",back:"Vulnérabilité liée à la concentration des approvisionnements ou des débouchés."}],quiz:[{level:"Facile",question:"Quel critère fonde un avantage comparatif ?",choices:["Un coût d’opportunité relativement plus faible","Une productivité toujours supérieure","Un salaire nominal plus élevé","Un excédent commercial permanent"],answer:0,explanation:"L’avantage comparatif repose sur le coût relatif auquel une production est réalisée."},{level:"Intermédiaire",question:"Un pays moins productif dans toutes les productions peut-il gagner à échanger ?",choices:["Oui, si ses coûts relatifs diffèrent","Non, car seul l’avantage absolu compte","Seulement s’il exporte tout","Non, car les prix sont identiques"],answer:0,explanation:"La spécialisation dépend des coûts d’opportunité relatifs, pas uniquement des productivités absolues."},{level:"Difficile",question:"Quel échange illustre le commerce intrabranche ?",choices:["La France exporte et importe des automobiles","Un pays exporte du pétrole et importe du blé","Un ménage achète un service local","Une entreprise vend uniquement sur son marché national"],answer:0,explanation:"L’échange de variétés automobiles entre pays appartient à la même branche."},{level:"Facile",question:"Pourquoi les économies d’échelle favorisent-elles les échanges ?",choices:["Le marché élargi permet d’augmenter la production et de réduire le coût moyen","Elles suppriment tous les coûts fixes","Elles rendent les produits identiques","Elles empêchent la spécialisation"],answer:0,explanation:"Une production plus importante peut répartir les coûts fixes sur davantage d’unités."},{level:"Intermédiaire",question:"La compétitivité hors-prix repose notamment sur :",choices:["La qualité et l’innovation","Le seul taux de change","La baisse systématique des salaires","Les quotas d’importation"],answer:0,explanation:"Qualité, innovation, réputation et service sont des facteurs hors-prix."},{level:"Difficile",question:"Pourquoi toutes les entreprises n’exportent-elles pas ?",choices:["L’exportation comporte des coûts fixes que les firmes peu productives supportent difficilement","Les exportations sont interdites aux petites entreprises","La productivité ne joue aucun rôle","Les consommateurs étrangers n’achètent que des services"],answer:0,explanation:"Prospection, normes et logistique créent des coûts fixes d’accès aux marchés étrangers."},{level:"Facile",question:"Un IDE correspond à :",choices:["Un investissement durable donnant une influence dans une entreprise étrangère","Un achat ponctuel de produit importé","Un droit de douane","Une simple vente à l’étranger"],answer:0,explanation:"L’IDE implique une relation durable et une influence sur l’entreprise étrangère."},{level:"Intermédiaire",question:"Une chaîne de valeur désigne :",choices:["Les étapes contribuant à concevoir, produire et commercialiser un produit","La seule étape d’assemblage","La liste des clients d’une entreprise","Le montant des droits de douane"],answer:0,explanation:"La chaîne de valeur couvre plusieurs étapes allant de la conception à la commercialisation."},{level:"Difficile",question:"La fragmentation internationale de la production peut :",choices:["Accroître l’efficacité mais créer des interdépendances","Supprimer tout risque logistique","Rendre chaque pays autosuffisant","Éliminer les échanges intrabranches"],answer:0,explanation:"La répartition internationale peut améliorer l’efficacité et accroître l’exposition aux ruptures."},{level:"Facile",question:"Quel est un effet possible du commerce pour les consommateurs ?",choices:["Une baisse de prix et un choix plus large","Une hausse certaine de tous les salaires","La disparition de toute concurrence","Une égalisation automatique des revenus"],answer:0,explanation:"La concurrence et l’accès à davantage de variétés peuvent réduire certains prix et élargir le choix."},{level:"Intermédiaire",question:"Pourquoi les effets du commerce sont-ils inégalement répartis ?",choices:["Les secteurs, qualifications et territoires ne sont pas exposés de la même manière","Tous les travailleurs changent immédiatement de secteur","Les importations touchent uniquement les entreprises","Les prix ne changent jamais"],answer:0,explanation:"Les gains et pertes varient selon les activités et la capacité d’adaptation."},{level:"Difficile",question:"Quel instrument est protectionniste ?",choices:["Un droit de douane","La suppression des quotas","La reconnaissance mutuelle des normes","La réduction des barrières commerciales"],answer:0,explanation:"Le droit de douane taxe les importations et protège relativement les producteurs nationaux."},{level:"Facile",question:"Quel risque accompagne une hausse des droits de douane ?",choices:["Des représailles commerciales et une hausse des prix","Une disparition automatique du chômage","Une hausse certaine de la productivité","La fin des coûts de production"],answer:0,explanation:"Les partenaires peuvent riposter et les biens importés deviennent plus coûteux."},{level:"Intermédiaire",question:"La compétitivité-prix dépend notamment :",choices:["Des coûts unitaires et du taux de change","Uniquement de la publicité","Uniquement de la qualité perçue","Du nombre de langues parlées"],answer:0,explanation:"Les coûts rapportés à la production et le taux de change influencent le prix relatif."},{level:"Difficile",question:"Une différenciation verticale correspond à :",choices:["Des produits de niveaux de qualité différents","Des produits identiques vendus dans des pays différents","Des produits sans aucune caractéristique","Une différence uniquement de monnaie"],answer:0,explanation:"La différenciation verticale hiérarchise les produits selon leur qualité."},{level:"Facile",question:"La délocalisation désigne :",choices:["Le transfert d’une activité vers un autre territoire","La vente d’un produit à l’étranger sans transfert productif","La taxation des importations","La fusion de deux monnaies"],answer:0,explanation:"La délocalisation déplace géographiquement une activité de production."},{level:"Intermédiaire",question:"Quel facteur peut expliquer une implantation à l’étranger ?",choices:["La proximité d’un marché ou l’accès à des compétences","L’absence de tout débouché","La volonté de supprimer les clients","L’interdiction de produire dans le pays d’origine"],answer:0,explanation:"Les firmes choisissent leurs implantations selon coûts, compétences, infrastructures et marchés."},{level:"Difficile",question:"Le libre-échange vise principalement à :",choices:["Réduire les obstacles aux échanges","Interdire les importations","Fixer tous les prix mondiaux","Remplacer les entreprises nationales"],answer:0,explanation:"Le libre-échange réduit les barrières tarifaires et non tarifaires."},{level:"Facile",question:"Quel argument peut justifier temporairement une protection ?",choices:["Protéger une industrie naissante le temps qu’elle devienne compétitive","Garantir l’absence de concurrence pour toujours","Augmenter systématiquement les prix","Empêcher toute innovation"],answer:0,explanation:"Une industrie naissante peut nécessiter un temps d’apprentissage, sous conditions et avec évaluation."},{level:"Intermédiaire",question:"Une balance commerciale des biens excédentaire signifie que :",choices:["La valeur des exportations de biens dépasse celle des importations","Les importations dépassent les exportations","Les services sont nécessairement déficitaires","Le pays ne commerce pas"],answer:0,explanation:"Un excédent correspond à exportations de biens supérieures aux importations de biens."}],exercises:[{title:"Avantage comparatif et coûts d’opportunité",level:"Facile",statement:"Deux pays produisent du blé et du textile. Dans A, une journée de travail produit 10 unités de blé ou 5 textiles. Dans B, elle produit 6 blés ou 4 textiles. Calculez les coûts d’opportunité et identifiez les spécialisations relatives.",correction:"Dans A, 1 textile coûte 2 blés et 1 blé coûte 0,5 textile. Dans B, 1 textile coûte 1,5 blé et 1 blé coûte 2/3 textile. B a l’avantage comparatif en textile (1,5 < 2) ; A en blé (0,5 < 2/3). Les deux peuvent gagner à se spécialiser selon ces coûts relatifs.",skills:["Calcul de coûts relatifs","Avantage comparatif"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Avantage absolu et avantage comparatif",level:"Intermédiaire",statement:"Expliquez pourquoi le pays A, plus productif dans les deux biens, peut malgré tout importer un bien du pays B.",correction:"La productivité absolue ne suffit pas à déterminer la spécialisation. Il faut comparer les coûts d’opportunité : A peut être relativement meilleur dans un bien et B dans l’autre. L’échange permet alors à chacun de se concentrer sur son avantage comparatif.",skills:["Distinction absolu/relatif","Raisonnement économique"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Commerce intrabranche",level:"Difficile",statement:"Deux pays échangent des véhicules de gammes et marques différentes. Identifiez deux mécanismes explicatifs.",correction:"Il s’agit de commerce intrabranche. La différenciation des produits répond à une demande de variété ; les économies d’échelle permettent aux entreprises de produire à plus grande échelle pour un marché élargi et de réduire le coût moyen.",skills:["Définition","Différenciation","Économies d’échelle"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Compétitivité-prix",level:"Facile",statement:"Une entreprise réduit son coût unitaire de 8 % à qualité constante. Expliquez l’effet possible sur sa compétitivité.",correction:"À qualité constante, la baisse du coût unitaire peut permettre de réduire le prix de vente ou d’améliorer la marge. Si le prix baisse relativement à celui des concurrents, la compétitivité-prix s’améliore, toutes choses égales par ailleurs.",skills:["Coût unitaire","Compétitivité-prix"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Compétitivité hors-prix",level:"Intermédiaire",statement:"Une marque conserve des prix supérieurs mais améliore la fiabilité, le design et le service. Montrez comment elle peut rester compétitive.",correction:"La qualité, la fiabilité, le design et le service différencient l’offre. Des clients peuvent accepter un prix plus élevé pour ces caractéristiques : la firme renforce sa compétitivité hors-prix sans nécessairement réduire ses tarifs.",skills:["Facteurs hors-prix","Argumentation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Productivité et exportation",level:"Difficile",statement:"Pourquoi les entreprises les plus productives sont-elles souvent les plus présentes à l’exportation ?",correction:"L’accès aux marchés étrangers entraîne des coûts fixes : prospection, normes, transport, réseaux et adaptation. Les firmes productives disposent de marges et d’une efficacité suffisantes pour couvrir ces coûts ; les moins productives peuvent rester sur le marché national.",skills:["Productivité","Coûts fixes d’exportation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Chaîne de valeur",level:"Facile",statement:"Un téléphone est conçu dans un pays, ses composants sont produits dans plusieurs autres, puis assemblé et vendu ailleurs. Décrivez l’organisation productive.",correction:"La production est fragmentée en étapes réparties entre territoires. Chaque lieu accueille certaines tâches selon les compétences, les coûts, les infrastructures et l’accès aux marchés. La firme coordonne une chaîne de valeur internationale.",skills:["Fragmentation","Chaîne de valeur"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"IDE et exportation",level:"Intermédiaire",statement:"Distinguez l’exportation d’un produit et un investissement direct à l’étranger.",correction:"L’exportation est une vente transfrontière. L’IDE correspond à un investissement créant un intérêt durable et une influence dans une entreprise étrangère, par exemple la création ou l’acquisition d’une filiale.",skills:["Distinction des flux","IDE"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Effets distributifs",level:"Difficile",statement:"Expliquez pourquoi le commerce international peut bénéficier aux consommateurs tout en fragilisant certains salariés.",correction:"Les importations et la concurrence peuvent faire baisser les prix et élargir le choix. Mais les entreprises des secteurs exposés peuvent perdre des parts de marché, entraînant des suppressions ou transformations d’emplois. Les gains agrégés ne sont donc pas répartis uniformément.",skills:["Gains à l’échange","Inégalités internes"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Débat protectionnisme",level:"Facile",statement:"Présentez un argument en faveur du protectionnisme et deux limites possibles.",correction:"Une protection temporaire peut aider une industrie naissante ou sécuriser une activité stratégique. Mais elle peut augmenter les prix pour les consommateurs et les entreprises utilisant des intrants importés, réduire la pression concurrentielle et provoquer des représailles.",skills:["Argumentation nuancée","Effets des barrières"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]}],revisionSheets:[{title:"Synthèse et notions essentielles",summary:[["Le commerce international désigne les échanges de biens et de services entre résidents d’économies différentes. Les pays peuvent se spécialiser dans les productions pour lesquelles ils disposent d’un avantage comparatif : le coût d’opportunité y est relativement plus faible. La spécialisation permet d’utiliser plus efficacement les ressources et peut accroître la production totale.","Dans le modèle ricardien, un pays peut avoir intérêt à se spécialiser même s’il est moins productif dans toutes les activités : ce sont les coûts relatifs, et non les seuls coûts absolus, qui déterminent l’avantage comparatif. Les échanges peuvent donc être mutuellement avantageux.","Les dotations factorielles, les ressources naturelles, le capital, le travail qualifié et les technologies contribuent aussi à expliquer les spécialisations. Ces facteurs ne déterminent toutefois pas mécaniquement les échanges : les institutions, les politiques publiques et les stratégies des entreprises comptent également."],["Une part importante du commerce se réalise entre pays proches par leur niveau de développement et leurs dotations. Le commerce intrabranche correspond à l’échange simultané de produits appartenant à une même branche, par exemple des voitures de gammes différentes.","La différenciation des produits (qualité, marque, design, caractéristiques) et la recherche de variété expliquent ces échanges. Les économies d’échelle réduisent le coût moyen lorsque la production augmente : l’accès à un marché élargi permet aux entreprises de produire davantage et de répartir les coûts fixes.","La concurrence monopolistique combine de nombreuses entreprises proposant des variétés différenciées. Les consommateurs bénéficient d’un choix plus large, tandis que les producteurs peuvent exploiter des économies d’échelle."],["La compétitivité-prix désigne la capacité à proposer des prix attractifs à qualité comparable. Elle dépend notamment des coûts de production, des salaires rapportés à la productivité, des coûts intermédiaires, du taux de change et des marges.","La compétitivité hors-prix repose sur des facteurs autres que le prix : qualité, innovation, réputation, délais, service après-vente, design et adaptation aux besoins. Elle permet de vendre même lorsque les prix sont plus élevés.","Les firmes les plus productives sont davantage capables de supporter les coûts fixes liés à l’exportation : prospection, adaptation aux normes, logistique et réseaux commerciaux. La productivité des entreprises contribue donc à la compétitivité du pays, mais toutes les firmes d’un même pays n’exportent pas."],["Une chaîne de valeur regroupe les étapes qui contribuent à la conception, la production, la commercialisation et au service d’un produit. Une firme peut répartir ces étapes entre plusieurs pays selon les coûts, les compétences, les infrastructures, la proximité des marchés ou la sécurité des approvisionnements.","Les investissements directs à l’étranger (IDE) correspondent à des opérations transfrontières visant à établir un intérêt durable et une influence significative dans une entreprise située à l’étranger. Les firmes multinationales organisent ainsi des filiales et des réseaux de production internationaux.","La fragmentation internationale de la production peut accroître l’efficacité et diffuser des technologies, mais elle crée aussi des interdépendances. Une rupture logistique, une tension géopolitique ou une catastrophe peut affecter plusieurs étapes de la production."],["Le commerce peut faire baisser les prix, élargir le choix et favoriser les gains de productivité. Il peut contribuer à réduire les écarts de revenus entre pays lorsque certains pays rattrapent leur retard, mais les effets au sein de chaque pays sont inégaux.","Les consommateurs et les entreprises utilisant des intrants importés peuvent gagner au pouvoir d’achat ou en compétitivité. Certains travailleurs et territoires exposés à la concurrence peuvent subir des pertes d’emplois ou de revenus. Les effets dépendent des secteurs, des qualifications, de la mobilité et des politiques d’accompagnement.","Le libre-échange vise à réduire les obstacles aux échanges. Le protectionnisme utilise des droits de douane, quotas, normes ou subventions pour protéger certaines activités. Il peut soutenir une industrie naissante ou répondre à des enjeux stratégiques, mais il risque d’augmenter les prix, de provoquer des représailles et de réduire la concurrence. L’analyse doit comparer objectifs, coûts et effets distributifs."]],mustKnow:["Commerce international: Échanges de biens et services entre économies nationales.","Avantage comparatif: Avantage fondé sur un coût d’opportunité relativement plus faible.","Coût d’opportunité: Valeur de la meilleure possibilité à laquelle on renonce en faisant un choix.","Spécialisation: Concentration relative de la production sur certaines activités.","Avantage absolu: Capacité à produire une quantité donnée avec moins de facteurs qu’un autre producteur.","Dotations factorielles: Quantités relatives de travail, capital et ressources dont dispose une économie.","Modèle ricardien: Modèle expliquant les échanges par les différences de productivité relative et les avantages comparatifs.","Commerce intrabranche: Échanges de produits appartenant à une même branche entre pays.","Différenciation horizontale: Différences de variété ou de caractéristiques sans hiérarchie unique de qualité.","Différenciation verticale: Différences de qualité entre produits, généralement hiérarchisables.","Économies d’échelle: Baisse du coût moyen lorsque le volume produit augmente.","Concurrence monopolistique: Marché composé de nombreuses entreprises offrant des produits différenciés."],methods:["Commencer par définir les termes du sujet.","Présenter un mécanisme étape par étape.","Illustrer avec un exemple précis.","Nuancer les effets selon les acteurs et le contexte."]}],sources:[{title:"Programme de spécialité SES de terminale et ressources d’accompagnement",institution:"Ministère de l’Éducation nationale — Éduscol",url:"https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",consultedAt:"2026-11-01",supports:["Questionnements et objectifs d’apprentissage du chapitre","Notions et mécanismes attendus"]}],sourceNote:"Ressource pédagogique originale structurée à partir des objectifs du programme officiel. Les exemples chiffrés sont des situations didactiques construites pour l’entraînement et ne constituent pas des données statistiques officielles.",validationStatus:"draft"},
  'ses-chomage': {title:"Comment lutter contre le chômage ?",objectives:["Définir chômage, sous-emploi, taux de chômage et taux d’emploi.","Expliquer le chômage structurel par les frictions, inadéquations et asymétries d’information.","Analyser les effets ambivalents des institutions du marché du travail.","Expliquer le chômage conjoncturel et les politiques de soutien de la demande.","Comparer allégements du coût du travail, formation et flexibilisation."],course:[{heading:"1. Définir et mesurer le chômage",body:["Au sens du Bureau international du travail (BIT), est chômeur une personne en âge de travailler qui n’a pas travaillé pendant une période de référence, est disponible pour travailler et a effectué une recherche active d’emploi ou trouvé un emploi qui commence ultérieurement. Les critères doivent être réunis simultanément.","Le taux de chômage rapporte le nombre de chômeurs à la population active (personnes en emploi et chômeurs). Le taux d’emploi rapporte les personnes en emploi à la population correspondante en âge de travailler. Ces indicateurs n’ont donc pas le même dénominateur.","Le sous-emploi concerne notamment des personnes à temps partiel qui souhaitent travailler davantage et sont disponibles, ou certaines situations de chômage technique. Le halo autour du chômage regroupe des personnes proches du chômage mais qui ne satisfont pas tous les critères BIT."]},{heading:"2. Les sources du chômage structurel",body:["Le chômage structurel résulte de caractéristiques durables du fonctionnement du marché du travail et de l’économie. Les frictions désignent le temps nécessaire pour rechercher, diffuser et apparier offres et demandes d’emploi : l’information n’est pas instantanée.","Les inadéquations spatiales apparaissent lorsque les emplois et les personnes disponibles sont éloignés géographiquement. Les inadéquations de qualifications apparaissent lorsque les compétences des candidats ne correspondent pas aux besoins des employeurs. La formation, la mobilité et l’information peuvent améliorer l’appariement.","Les asymétries d’information peuvent conduire les employeurs à proposer un salaire d’efficience supérieur au salaire qui équilibrerait le marché. Ce salaire peut améliorer motivation, fidélité ou sélection des salariés, mais aussi contribuer à un chômage involontaire si le salaire reste au-dessus du niveau d’équilibre."]},{heading:"3. Institutions et chômage structurel",body:["Les institutions encadrent les relations de travail : salaire minimum, assurance chômage, règles de protection de l’emploi, négociation collective et dispositifs de formation. Elles peuvent protéger les salariés, soutenir les revenus et améliorer la qualité des emplois.","Le salaire minimum peut augmenter le coût du travail pour certains emplois peu productifs et freiner certaines embauches selon le contexte. Il peut aussi soutenir la demande, réduire la pauvreté laborieuse et inciter les entreprises à investir dans la productivité. Son effet dépend du niveau relatif, de la productivité et des réactions des entreprises.","La protection de l’emploi peut sécuriser les salariés et favoriser l’investissement en formation, mais des règles jugées trop coûteuses ou incertaines peuvent freiner certaines embauches. Il faut donc raisonner en termes d’effets possibles et de contexte, et non attribuer un effet unique à toutes les institutions."]},{heading:"4. Le chômage conjoncturel",body:["Le chômage conjoncturel varie avec l’activité économique. Lors d’un ralentissement, la demande globale adressée aux entreprises diminue ; elles réduisent leur production, leurs recrutements ou leurs effectifs. Une reprise peut au contraire stimuler l’emploi avec un certain délai.","Une politique de soutien de la demande globale peut prendre la forme d’une hausse des dépenses publiques, de transferts ou d’une baisse d’impôts, ou d’un assouplissement monétaire favorisant le crédit. La consommation et l’investissement peuvent augmenter, soutenant la production et l’emploi.","L’efficacité dépend de la situation économique, de la confiance, de l’endettement, des importations et des délais de transmission. Une relance peut aussi alimenter les prix ou les déficits si elle est mal calibrée."]},{heading:"5. Les politiques de lutte contre le chômage",body:["Les politiques d’allégement du coût du travail réduisent certaines cotisations ou charges pour rendre les embauches moins coûteuses, notamment pour les emplois peu qualifiés. Leur effet dépend de la réaction des entreprises et du financement de la mesure.","Les politiques de formation développent les compétences et réduisent les inadéquations de qualifications. Elles peuvent faciliter les reconversions et améliorer l’appariement, mais nécessitent du temps, une offre de formation adaptée et un accompagnement.","Les politiques de flexibilisation cherchent à faciliter l’ajustement de l’emploi, des horaires ou des contrats. Elles peuvent encourager les embauches en réduisant certaines incertitudes, mais une flexibilité excessive peut accroître la précarité et limiter l’investissement des salariés dans des compétences spécifiques. Une politique efficace combine souvent plusieurs instruments."]}],keyPoints:["Situation d’une personne sans emploi, disponible et en recherche active (ou ayant trouvé un emploi qui commence ultérieurement), selon les critères BIT.","Ensemble des personnes en emploi et des chômeurs.","Nombre de chômeurs divisé par la population active, multiplié par 100.","Nombre de personnes en emploi rapporté à la population de référence en âge de travailler.","Situation de personnes en emploi qui souhaitent et peuvent travailler davantage, notamment à temps partiel.","Personnes proches du chômage mais ne remplissant pas tous les critères du BIT.","Chômage lié à des caractéristiques durables du marché du travail et aux inadéquations.","Chômage lié aux variations de l’activité économique et de la demande."],method:["Définir précisément les notions économiques mobilisées.","Identifier le mécanisme causal et ses étapes.","Distinguer corrélation, causalité et conditions de validité.","Appuyer chaque argument sur un exemple ou une donnée pertinente.","Nuancer le raisonnement en présentant les effets et limites."],flashcards:[{front:"Chômage au sens du BIT",back:"Situation d’une personne sans emploi, disponible et en recherche active (ou ayant trouvé un emploi qui commence ultérieurement), selon les critères BIT."},{front:"Population active",back:"Ensemble des personnes en emploi et des chômeurs."},{front:"Taux de chômage",back:"Nombre de chômeurs divisé par la population active, multiplié par 100."},{front:"Taux d’emploi",back:"Nombre de personnes en emploi rapporté à la population de référence en âge de travailler."},{front:"Sous-emploi",back:"Situation de personnes en emploi qui souhaitent et peuvent travailler davantage, notamment à temps partiel."},{front:"Halo autour du chômage",back:"Personnes proches du chômage mais ne remplissant pas tous les critères du BIT."},{front:"Chômage structurel",back:"Chômage lié à des caractéristiques durables du marché du travail et aux inadéquations."},{front:"Chômage conjoncturel",back:"Chômage lié aux variations de l’activité économique et de la demande."},{front:"Friction",back:"Temps nécessaire pour rechercher, diffuser et apparier offres et demandes d’emploi."},{front:"Appariement",back:"Mise en correspondance d’une offre d’emploi et d’un candidat."},{front:"Inadéquation spatiale",back:"Décalage géographique entre les emplois disponibles et les personnes qui cherchent un emploi."},{front:"Inadéquation des qualifications",back:"Décalage entre compétences proposées et compétences demandées."},{front:"Asymétrie d’information",back:"Situation où les parties à un échange ne disposent pas de la même information."},{front:"Salaire d’efficience",back:"Salaire supérieur au niveau d’équilibre que l’employeur peut proposer pour accroître motivation, fidélité ou qualité du recrutement."},{front:"Salaire minimum",back:"Rémunération horaire ou mensuelle minimale fixée par la réglementation."},{front:"Institution du marché du travail",back:"Règle ou organisation encadrant l’emploi, les salaires et les relations professionnelles."},{front:"Protection de l’emploi",back:"Règles encadrant les contrats et les procédures de rupture du contrat de travail."},{front:"Assurance chômage",back:"Dispositif d’indemnisation de personnes ayant perdu leur emploi sous certaines conditions."},{front:"Demande globale",back:"Demande totale de biens et services adressée aux producteurs d’une économie."},{front:"Politique de relance",back:"Politique visant à soutenir l’activité par la demande, notamment via dépenses, transferts ou baisse d’impôts."},{front:"Politique monétaire expansionniste",back:"Action de la banque centrale visant à assouplir les conditions de financement."},{front:"Coût du travail",back:"Ensemble des dépenses supportées par l’employeur pour employer un salarié."},{front:"Allégement de cotisations",back:"Réduction de prélèvements liés à l’emploi destinée notamment à diminuer le coût du travail."},{front:"Formation professionnelle",back:"Acquisition ou actualisation de compétences utiles à l’activité professionnelle."},{front:"Reconversion",back:"Transition vers un métier ou secteur différent, nécessitant parfois de nouvelles compétences."},{front:"Flexibilisation",back:"Mesures facilitant l’ajustement du travail, des horaires ou des contrats."},{front:"Précarité",back:"Instabilité ou faible sécurité de la situation professionnelle et des revenus."},{front:"Emploi salarié",back:"Emploi exercé pour le compte d’un employeur dans le cadre d’une relation de subordination."},{front:"Productivité du travail",back:"Quantité produite rapportée au travail mobilisé."},{front:"Politique de l’emploi",back:"Ensemble des mesures visant à agir sur le niveau, la qualité ou l’accès à l’emploi."}],quiz:[{level:"Facile",question:"Quels critères définissent le chômage au sens du BIT ?",choices:["Sans emploi, disponible et en recherche active","Sans emploi et inscrit à une formation","Sans emploi et sans revenu","En emploi à temps partiel uniquement"],answer:0,explanation:"Les critères BIT sont cumulatifs : absence d’emploi, disponibilité et recherche active ou emploi futur déjà trouvé."},{level:"Intermédiaire",question:"Le dénominateur du taux de chômage est :",choices:["La population active","La population totale","La population en emploi uniquement","La population inactive"],answer:0,explanation:"La population active comprend les personnes en emploi et les chômeurs."},{level:"Difficile",question:"Le taux d’emploi rapporte les personnes en emploi :",choices:["À la population de référence en âge de travailler","Aux seuls chômeurs","À la population active uniquement","Aux seules personnes diplômées"],answer:0,explanation:"Le taux d’emploi mesure la part de la population de référence qui occupe un emploi."},{level:"Facile",question:"Le sous-emploi concerne notamment :",choices:["Des personnes en temps partiel souhaitant travailler davantage et disponibles","Toutes les personnes sans emploi","Les retraités uniquement","Les salariés à temps complet satisfaits"],answer:0,explanation:"Le sous-emploi concerne des personnes déjà en emploi mais dont le volume de travail est insuffisant."},{level:"Intermédiaire",question:"Le chômage structurel est principalement lié :",choices:["Aux caractéristiques durables du marché du travail","À une baisse temporaire de la demande seulement","À une hausse ponctuelle des exportations","À une variation quotidienne des prix"],answer:0,explanation:"Il renvoie aux inadéquations et institutions durables du marché du travail."},{level:"Difficile",question:"Une inadéquation spatiale signifie que :",choices:["Les emplois et candidats sont éloignés géographiquement","Les candidats ont toujours trop de diplômes","Les salaires sont identiques","Les entreprises n’ont aucun poste"],answer:0,explanation:"Le lieu des postes ne correspond pas à celui des personnes disponibles."},{level:"Facile",question:"Une inadéquation de qualifications apparaît lorsque :",choices:["Les compétences des candidats ne correspondent pas aux besoins des postes","Les emplois sont situés trop loin","Les entreprises ont trop de clients","Les prix augmentent"],answer:0,explanation:"Le décalage porte sur les compétences demandées et offertes."},{level:"Intermédiaire",question:"Le salaire d’efficience peut être proposé pour :",choices:["Améliorer motivation, fidélité ou qualité du recrutement","Réduire nécessairement le salaire nominal","Supprimer les asymétries d’information","Éliminer les coûts fixes"],answer:0,explanation:"Un salaire plus élevé peut limiter le turnover ou améliorer l’effort et la sélection."},{level:"Difficile",question:"Une institution du marché du travail peut :",choices:["Protéger les salariés tout en influençant les coûts d’embauche","Avoir toujours un effet négatif sur l’emploi","N’avoir aucun effet sur les relations professionnelles","Remplacer la demande globale"],answer:0,explanation:"Les institutions ont des effets ambivalents qui dépendent du contexte."},{level:"Facile",question:"Une baisse de la demande globale peut entraîner :",choices:["Une baisse de production et de recrutements","Une hausse certaine de tous les emplois","Une disparition des stocks","Une hausse automatique de productivité"],answer:0,explanation:"Les entreprises ajustent la production et l’emploi lorsque les débouchés diminuent."},{level:"Intermédiaire",question:"Le chômage conjoncturel est lié :",choices:["Aux fluctuations de l’activité économique","Aux seules différences de diplômes","Aux règles de contrat uniquement","Aux migrations uniquement"],answer:0,explanation:"Il varie avec la conjoncture et la demande adressée aux entreprises."},{level:"Difficile",question:"Une politique de relance budgétaire peut prendre la forme :",choices:["D’une hausse des dépenses publiques","D’une baisse de toutes les formations","D’une hausse des droits de douane uniquement","D’une interdiction du crédit"],answer:0,explanation:"Les dépenses publiques supplémentaires peuvent soutenir la demande globale."},{level:"Facile",question:"Un allégement du coût du travail vise à :",choices:["Rendre certaines embauches moins coûteuses","Augmenter les coûts fixes d’exportation","Réduire les compétences des salariés","Supprimer la population active"],answer:0,explanation:"La baisse de certaines cotisations peut diminuer le coût employeur."},{level:"Intermédiaire",question:"La formation agit surtout sur :",choices:["Les inadéquations de qualifications","Les fluctuations quotidiennes des prix","Le taux de change","Les droits de douane"],answer:0,explanation:"Elle améliore l’adéquation entre compétences disponibles et besoins des employeurs."},{level:"Difficile",question:"Une politique de flexibilisation peut avoir comme limite :",choices:["Une hausse possible de la précarité","Une disparition certaine des emplois","Une baisse automatique des importations","Une suppression des frictions"],answer:0,explanation:"Une flexibilité excessive peut fragiliser la stabilité des emplois."},{level:"Facile",question:"Pourquoi une relance peut-elle avoir des effets limités ?",choices:["Une partie de la demande supplémentaire peut se porter sur les importations","Elle augmente toujours immédiatement la productivité","Elle supprime toute incertitude","Elle ne modifie jamais les revenus"],answer:0,explanation:"Les fuites par les importations réduisent l’effet sur la production nationale."},{level:"Intermédiaire",question:"Le halo autour du chômage regroupe :",choices:["Des personnes proches du chômage ne satisfaisant pas tous les critères BIT","Toutes les personnes en CDI","Les seuls travailleurs indépendants","Les personnes en emploi à temps plein"],answer:0,explanation:"Ces personnes sont sans emploi et proches du marché du travail mais ne remplissent pas tous les critères."},{level:"Difficile",question:"Une hausse du taux de chômage peut-elle coexister avec une hausse du taux d’emploi ?",choices:["Oui, si la population active augmente plus vite que l’emploi","Non, les deux taux sont toujours complémentaires","Seulement si la population totale diminue","Jamais en période de croissance"],answer:0,explanation:"Les indicateurs ont des dénominateurs différents ; leurs évolutions ne sont pas mécaniquement opposées."},{level:"Facile",question:"Une politique active de l’emploi comprend notamment :",choices:["La formation et l’accompagnement des demandeurs d’emploi","Uniquement l’indemnisation passive","La fixation du taux de change","La taxation des exportations"],answer:0,explanation:"Les politiques actives cherchent à faciliter le retour à l’emploi et l’appariement."},{level:"Intermédiaire",question:"Pourquoi faut-il combiner plusieurs politiques contre le chômage ?",choices:["Parce que ses sources sont multiples et nécessitent des réponses adaptées","Parce qu’une politique unique est toujours interdite","Parce que le chômage est uniquement volontaire","Parce que les institutions sont sans effet"],answer:0,explanation:"Chômage conjoncturel, inadéquations et coûts d’embauche appellent des instruments complémentaires."}],exercises:[{title:"Calculer un taux de chômage",level:"Facile",statement:"Une économie compte 2,4 millions de chômeurs et 24 millions de personnes actives. Calculez le taux de chômage.",correction:"Taux = (2,4 / 24) × 100 = 10 %. Il faut diviser les chômeurs par la population active, et non par la population totale.",skills:["Calcul de pourcentage","Définition de la population active"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Distinguer taux de chômage et taux d’emploi",level:"Intermédiaire",statement:"Expliquez pourquoi ces deux indicateurs ne mesurent pas la même chose.",correction:"Le taux de chômage rapporte les chômeurs à la population active. Le taux d’emploi rapporte les personnes en emploi à une population de référence en âge de travailler. Leurs numérateurs et dénominateurs diffèrent.",skills:["Maîtrise des indicateurs"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Identifier le sous-emploi",level:"Difficile",statement:"Une personne travaille 20 heures par semaine à temps partiel, souhaite travailler davantage et est disponible. Quelle situation peut-elle illustrer ?",correction:"Elle peut relever du sous-emploi si les critères statistiques applicables sont réunis : elle occupe un emploi mais souhaite et peut travailler davantage. Elle n’est donc pas automatiquement chômeuse au sens du BIT.",skills:["Définition du sous-emploi","Distinction emploi/chômage"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Analyser une inadéquation spatiale",level:"Facile",statement:"Une région dispose de postes industriels vacants, tandis que des demandeurs d’emploi qualifiés résident loin et ne peuvent déménager. Identifiez le mécanisme et deux réponses possibles.",correction:"Il s’agit d’une inadéquation spatiale. Des réponses possibles sont l’aide à la mobilité, les transports, le logement près des bassins d’emploi et l’information sur les postes.",skills:["Diagnostic","Politiques d’appariement"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Analyser une inadéquation de qualifications",level:"Intermédiaire",statement:"Des entreprises recherchent des techniciens maîtrisant de nouveaux logiciels, mais les candidats ne possèdent pas ces compétences. Expliquez le mécanisme.",correction:"L’offre de travail ne correspond pas aux qualifications demandées : c’est une inadéquation de qualifications. La formation initiale ou continue et la reconversion peuvent réduire ce décalage.",skills:["Qualification","Formation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Salaire d’efficience",level:"Difficile",statement:"Expliquez comment un salaire supérieur au salaire d’équilibre peut à la fois améliorer le fonctionnement d’une entreprise et contribuer au chômage.",correction:"Il peut accroître motivation, fidélité et qualité du recrutement. Mais si le salaire reste supérieur au niveau qui équilibre offre et demande, certaines entreprises peuvent réduire leurs embauches, laissant des candidats sans emploi.",skills:["Asymétrie d’information","Salaire d’efficience"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Chômage conjoncturel",level:"Facile",statement:"Une baisse de la consommation conduit des entreprises à réduire leur production et leurs recrutements. Reconstituez la chaîne causale.",correction:"Baisse de consommation → baisse de la demande globale → diminution des débouchés → réduction de la production → baisse des recrutements ou suppressions d’emplois → hausse possible du chômage conjoncturel.",skills:["Chaîne causale","Conjoncture"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Évaluer une relance",level:"Intermédiaire",statement:"Présentez le mécanisme attendu d’une hausse des dépenses publiques et deux limites possibles.",correction:"La hausse des dépenses soutient la demande adressée aux entreprises, qui peuvent augmenter production et emploi. Les effets peuvent être limités par les importations, les délais, la faible confiance ou des tensions inflationnistes selon la situation.",skills:["Politique budgétaire","Limites"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Comparer deux politiques",level:"Difficile",statement:"Comparez une politique d’allégement du coût du travail et une politique de formation.",correction:"L’allégement réduit le coût employeur et peut encourager les embauches, notamment pour certains emplois. La formation améliore les compétences et l’appariement, mais ses effets sont plus longs. Les deux répondent à des mécanismes différents et peuvent être complémentaires.",skills:["Comparaison","Politiques de l’emploi"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Discuter la flexibilisation",level:"Facile",statement:"Montrez pourquoi la flexibilisation peut favoriser certaines embauches mais aussi produire des effets négatifs.",correction:"Elle peut faciliter l’ajustement des contrats et réduire l’incertitude des employeurs. Mais elle peut accroître l’instabilité des revenus et la précarité, réduire la fidélisation et freiner l’investissement dans les compétences. Son bilan dépend des règles et protections associées.",skills:["Argumentation nuancée","Flexibilisation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]}],revisionSheets:[{title:"Synthèse et notions essentielles",summary:[["Au sens du Bureau international du travail (BIT), est chômeur une personne en âge de travailler qui n’a pas travaillé pendant une période de référence, est disponible pour travailler et a effectué une recherche active d’emploi ou trouvé un emploi qui commence ultérieurement. Les critères doivent être réunis simultanément.","Le taux de chômage rapporte le nombre de chômeurs à la population active (personnes en emploi et chômeurs). Le taux d’emploi rapporte les personnes en emploi à la population correspondante en âge de travailler. Ces indicateurs n’ont donc pas le même dénominateur.","Le sous-emploi concerne notamment des personnes à temps partiel qui souhaitent travailler davantage et sont disponibles, ou certaines situations de chômage technique. Le halo autour du chômage regroupe des personnes proches du chômage mais qui ne satisfont pas tous les critères BIT."],["Le chômage structurel résulte de caractéristiques durables du fonctionnement du marché du travail et de l’économie. Les frictions désignent le temps nécessaire pour rechercher, diffuser et apparier offres et demandes d’emploi : l’information n’est pas instantanée.","Les inadéquations spatiales apparaissent lorsque les emplois et les personnes disponibles sont éloignés géographiquement. Les inadéquations de qualifications apparaissent lorsque les compétences des candidats ne correspondent pas aux besoins des employeurs. La formation, la mobilité et l’information peuvent améliorer l’appariement.","Les asymétries d’information peuvent conduire les employeurs à proposer un salaire d’efficience supérieur au salaire qui équilibrerait le marché. Ce salaire peut améliorer motivation, fidélité ou sélection des salariés, mais aussi contribuer à un chômage involontaire si le salaire reste au-dessus du niveau d’équilibre."],["Les institutions encadrent les relations de travail : salaire minimum, assurance chômage, règles de protection de l’emploi, négociation collective et dispositifs de formation. Elles peuvent protéger les salariés, soutenir les revenus et améliorer la qualité des emplois.","Le salaire minimum peut augmenter le coût du travail pour certains emplois peu productifs et freiner certaines embauches selon le contexte. Il peut aussi soutenir la demande, réduire la pauvreté laborieuse et inciter les entreprises à investir dans la productivité. Son effet dépend du niveau relatif, de la productivité et des réactions des entreprises.","La protection de l’emploi peut sécuriser les salariés et favoriser l’investissement en formation, mais des règles jugées trop coûteuses ou incertaines peuvent freiner certaines embauches. Il faut donc raisonner en termes d’effets possibles et de contexte, et non attribuer un effet unique à toutes les institutions."],["Le chômage conjoncturel varie avec l’activité économique. Lors d’un ralentissement, la demande globale adressée aux entreprises diminue ; elles réduisent leur production, leurs recrutements ou leurs effectifs. Une reprise peut au contraire stimuler l’emploi avec un certain délai.","Une politique de soutien de la demande globale peut prendre la forme d’une hausse des dépenses publiques, de transferts ou d’une baisse d’impôts, ou d’un assouplissement monétaire favorisant le crédit. La consommation et l’investissement peuvent augmenter, soutenant la production et l’emploi.","L’efficacité dépend de la situation économique, de la confiance, de l’endettement, des importations et des délais de transmission. Une relance peut aussi alimenter les prix ou les déficits si elle est mal calibrée."],["Les politiques d’allégement du coût du travail réduisent certaines cotisations ou charges pour rendre les embauches moins coûteuses, notamment pour les emplois peu qualifiés. Leur effet dépend de la réaction des entreprises et du financement de la mesure.","Les politiques de formation développent les compétences et réduisent les inadéquations de qualifications. Elles peuvent faciliter les reconversions et améliorer l’appariement, mais nécessitent du temps, une offre de formation adaptée et un accompagnement.","Les politiques de flexibilisation cherchent à faciliter l’ajustement de l’emploi, des horaires ou des contrats. Elles peuvent encourager les embauches en réduisant certaines incertitudes, mais une flexibilité excessive peut accroître la précarité et limiter l’investissement des salariés dans des compétences spécifiques. Une politique efficace combine souvent plusieurs instruments."]],mustKnow:["Chômage au sens du BIT: Situation d’une personne sans emploi, disponible et en recherche active (ou ayant trouvé un emploi qui commence ultérieurement), selon les critères BIT.","Population active: Ensemble des personnes en emploi et des chômeurs.","Taux de chômage: Nombre de chômeurs divisé par la population active, multiplié par 100.","Taux d’emploi: Nombre de personnes en emploi rapporté à la population de référence en âge de travailler.","Sous-emploi: Situation de personnes en emploi qui souhaitent et peuvent travailler davantage, notamment à temps partiel.","Halo autour du chômage: Personnes proches du chômage mais ne remplissant pas tous les critères du BIT.","Chômage structurel: Chômage lié à des caractéristiques durables du marché du travail et aux inadéquations.","Chômage conjoncturel: Chômage lié aux variations de l’activité économique et de la demande.","Friction: Temps nécessaire pour rechercher, diffuser et apparier offres et demandes d’emploi.","Appariement: Mise en correspondance d’une offre d’emploi et d’un candidat.","Inadéquation spatiale: Décalage géographique entre les emplois disponibles et les personnes qui cherchent un emploi.","Inadéquation des qualifications: Décalage entre compétences proposées et compétences demandées."],methods:["Commencer par définir les termes du sujet.","Présenter un mécanisme étape par étape.","Illustrer avec un exemple précis.","Nuancer les effets selon les acteurs et le contexte."]}],sources:[{title:"Programme de spécialité SES de terminale et ressources d’accompagnement",institution:"Ministère de l’Éducation nationale — Éduscol",url:"https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",consultedAt:"2026-11-01",supports:["Questionnements et objectifs d’apprentissage du chapitre","Notions et mécanismes attendus"]}],sourceNote:"Ressource pédagogique originale structurée à partir des objectifs du programme officiel. Les exemples chiffrés sont des situations didactiques construites pour l’entraînement et ne constituent pas des données statistiques officielles.",validationStatus:"draft"},
  'ses-finance': {title:"Comment expliquer les crises financières et réguler le système financier ?",objectives:["Décrire les crises financières des années 1930 et de 2008.","Expliquer la formation et l’éclatement d’une bulle spéculative.","Comprendre les paniques bancaires et les faillites en chaîne.","Analyser les canaux de transmission d’une crise financière à l’économie réelle.","Présenter la supervision et les ratios de solvabilité comme instruments de régulation."],course:[{heading:"1. Le système financier et les risques",body:["Le système financier met en relation les agents qui disposent d’une capacité de financement et ceux qui ont un besoin de financement. Les banques collectent des dépôts, accordent des crédits et assurent des paiements ; les marchés permettent l’émission et l’échange de titres.","Les banques réalisent une transformation : elles financent des crédits souvent longs à partir de ressources dont une partie peut être retirée à court terme. Cette transformation soutient le financement de l’économie mais crée un risque de liquidité. Les établissements sont également exposés au risque de crédit et aux variations de prix des actifs.","L’interconnexion des institutions et les engagements croisés peuvent propager les difficultés. Une perte dans un établissement peut fragiliser ses créanciers, réduire les prêts et affecter la confiance dans le système."]},{heading:"2. Bulles spéculatives et comportements mimétiques",body:["Une bulle spéculative apparaît lorsque le prix d’un actif s’éloigne durablement de sa valeur justifiée par les revenus ou fondamentaux attendus, sous l’effet d’anticipations de hausse. Les acheteurs espèrent revendre plus cher, ce qui alimente la hausse.","Les comportements mimétiques conduisent des agents à imiter les décisions des autres plutôt qu’à s’appuyer uniquement sur leur information propre. La hausse des prix peut alors renforcer la croyance en une hausse future : les anticipations deviennent autoréalisatrices.","Lorsque les anticipations se retournent, les ventes se multiplient et le prix chute. Les détenteurs d’actifs peuvent subir des pertes, les garanties perdent de la valeur et les établissements financiers peuvent être fragilisés."]},{heading:"3. Panique bancaire et crises historiques",body:["Une banque conserve une partie des dépôts sous forme liquide et prête le reste. Si de nombreux déposants craignent simultanément une faillite et retirent leurs fonds, la banque peut manquer de liquidités même si ses actifs ont une valeur supérieure à ses dettes à long terme : c’est une panique bancaire.","La crise des années 1930 associe notamment effondrement boursier, faillites bancaires, contraction du crédit, baisse de la production et montée du chômage. La crise de 2008 est liée notamment aux crédits immobiliers risqués, à la titrisation, à la hausse puis à la chute des prix immobiliers et à la défiance entre institutions financières.","Les crises ne sont pas identiques, mais elles montrent comment le levier, l’endettement, l’opacité et les interconnexions peuvent amplifier un choc initial."]},{heading:"4. De la finance à l’économie réelle",body:["Un effet de richesse négatif apparaît lorsque la baisse de la valeur des actifs réduit le patrimoine perçu des ménages, qui peuvent alors diminuer leur consommation. Les entreprises peuvent réduire leurs investissements lorsque leurs perspectives et leur accès au financement se dégradent.","Le collatéral est un actif donné en garantie d’un prêt. Lorsque son prix baisse, l’emprunteur doit parfois apporter davantage de garanties ou réduire sa dette. Les ventes forcées accentuent alors la baisse des prix, ce qui peut créer une spirale.","La contraction du crédit survient lorsque les banques, fragilisées ou inquiètes, réduisent les prêts ou durcissent leurs conditions. Les ménages et entreprises reportent consommation et investissement ; production et emploi peuvent reculer."]},{heading:"5. Réguler le système bancaire et financier",body:["La supervision bancaire consiste à surveiller les établissements, leurs risques, leur gouvernance et leur respect des règles. Les banques centrales et autorités compétentes peuvent demander des informations, imposer des mesures correctrices et intervenir en cas de fragilité.","Le ratio de solvabilité rapporte les fonds propres réglementaires aux actifs pondérés par les risques. Il vise à garantir que la banque dispose d’un coussin de capital capable d’absorber des pertes. Il ne supprime pas le risque, mais renforce la résilience.","La régulation cherche aussi à limiter l’aléa moral : si les acteurs pensent qu’ils seront toujours secourus, ils peuvent prendre davantage de risques. Des règles crédibles, une supervision et des mécanismes de résolution doivent limiter cette incitation tout en préservant la stabilité financière."]}],keyPoints:["Ensemble des institutions et marchés permettant le financement, les paiements et la circulation des actifs.","Situation d’un agent dont les ressources dépassent les dépenses sur une période.","Situation d’un agent dont les dépenses dépassent les ressources disponibles.","Activité par laquelle les banques collectent des ressources et accordent des crédits.","Risque de ne pas pouvoir faire face à des demandes de paiement immédiates.","Risque qu’un emprunteur ne rembourse pas sa dette.","Risque de perte lié aux variations des prix des actifs financiers.","Hausse autoentretenue du prix d’un actif, alimentée par des anticipations de hausse éloignées des fondamentaux."],method:["Définir précisément les notions économiques mobilisées.","Identifier le mécanisme causal et ses étapes.","Distinguer corrélation, causalité et conditions de validité.","Appuyer chaque argument sur un exemple ou une donnée pertinente.","Nuancer le raisonnement en présentant les effets et limites."],flashcards:[{front:"Système financier",back:"Ensemble des institutions et marchés permettant le financement, les paiements et la circulation des actifs."},{front:"Capacité de financement",back:"Situation d’un agent dont les ressources dépassent les dépenses sur une période."},{front:"Besoin de financement",back:"Situation d’un agent dont les dépenses dépassent les ressources disponibles."},{front:"Intermédiation bancaire",back:"Activité par laquelle les banques collectent des ressources et accordent des crédits."},{front:"Risque de liquidité",back:"Risque de ne pas pouvoir faire face à des demandes de paiement immédiates."},{front:"Risque de crédit",back:"Risque qu’un emprunteur ne rembourse pas sa dette."},{front:"Risque de marché",back:"Risque de perte lié aux variations des prix des actifs financiers."},{front:"Bulle spéculative",back:"Hausse autoentretenue du prix d’un actif, alimentée par des anticipations de hausse éloignées des fondamentaux."},{front:"Fondamentaux",back:"Éléments économiques sous-jacents pouvant justifier la valeur d’un actif."},{front:"Comportement mimétique",back:"Tendance à imiter les décisions des autres agents."},{front:"Anticipation autoréalisatrice",back:"Anticipation qui contribue à provoquer l’événement attendu."},{front:"Éclatement d’une bulle",back:"Retournement des anticipations entraînant des ventes et une forte baisse du prix de l’actif."},{front:"Panique bancaire",back:"Retraits massifs de dépôts motivés par la crainte d’une faillite bancaire."},{front:"Transformation bancaire",back:"Financement d’actifs souvent longs à partir de ressources pouvant être exigibles à court terme."},{front:"Titrisation",back:"Transformation de créances en titres financiers pouvant être vendus à des investisseurs."},{front:"Effet de levier",back:"Utilisation de l’endettement pour accroître la taille des positions par rapport aux fonds propres."},{front:"Crise systémique",back:"Crise menaçant le fonctionnement de l’ensemble du système financier."},{front:"Effet de richesse négatif",back:"Baisse de consommation liée à la diminution de la valeur du patrimoine perçu."},{front:"Collatéral",back:"Actif donné en garantie d’un prêt."},{front:"Vente forcée",back:"Cession rapide d’un actif pour répondre à une contrainte financière ou de garantie."},{front:"Contraction du crédit",back:"Réduction de l’offre de prêts ou durcissement des conditions d’octroi."},{front:"Économie réelle",back:"Activités de production, consommation, investissement et emploi, par opposition aux échanges purement financiers."},{front:"Crise de 1929",back:"Crise majeure déclenchée par le krach boursier de 1929 et prolongée par les faillites bancaires et la dépression des années 1930."},{front:"Crise de 2008",back:"Crise financière mondiale liée notamment aux crédits immobiliers risqués et à la diffusion des risques via la titrisation."},{front:"Supervision bancaire",back:"Surveillance prudentielle des banques et de leurs risques par les autorités compétentes."},{front:"Ratio de solvabilité",back:"Rapport entre fonds propres réglementaires et actifs pondérés par les risques."},{front:"Fonds propres",back:"Ressources appartenant aux propriétaires de la banque, capables d’absorber des pertes."},{front:"Aléa moral",back:"Incitation à prendre davantage de risques lorsque les conséquences négatives sont supportées en partie par autrui."},{front:"Régulation financière",back:"Règles et contrôles visant la stabilité, la transparence et la maîtrise des risques financiers."},{front:"Risque de contagion",back:"Propagation des difficultés d’un acteur financier à d’autres acteurs interconnectés."}],quiz:[{level:"Facile",question:"Quel est le rôle central du système financier ?",choices:["Mettre en relation capacités et besoins de financement","Fixer tous les salaires","Produire les biens de consommation","Remplacer les administrations publiques"],answer:0,explanation:"Le système financier facilite le financement et les paiements entre agents."},{level:"Intermédiaire",question:"Pourquoi la transformation bancaire crée-t-elle un risque de liquidité ?",choices:["Les dépôts peuvent être retirés avant l’échéance des crédits","Les banques ne détiennent aucun actif","Tous les crédits sont remboursés immédiatement","Les dépôts sont toujours investis en actions"],answer:0,explanation:"Les ressources exigibles à court terme financent des actifs souvent longs."},{level:"Difficile",question:"Une bulle spéculative se caractérise par :",choices:["Un prix alimenté par des anticipations de hausse autoentretenues","Une hausse justifiée uniquement par les dividendes","Une baisse durable des prix alimentaires","Une disparition de toute transaction"],answer:0,explanation:"Les anticipations de revente plus chère contribuent à entretenir la hausse."},{level:"Facile",question:"Le comportement mimétique consiste à :",choices:["Imiter les décisions d’autres agents","Calculer uniquement la valeur fondamentale","Refuser toute information","Éviter systématiquement les marchés"],answer:0,explanation:"Les agents suivent les choix observés chez les autres."},{level:"Intermédiaire",question:"Une anticipation autoréalisatrice est une anticipation qui :",choices:["Contribue à provoquer l’événement attendu","Est toujours exacte","Ne modifie aucun comportement","Est décidée par une banque centrale uniquement"],answer:0,explanation:"Les comportements suscités par l’anticipation peuvent la rendre vraie."},{level:"Difficile",question:"Une panique bancaire peut apparaître lorsque :",choices:["De nombreux déposants retirent simultanément leurs fonds","Les banques augmentent leurs fonds propres","Les crédits sont tous remboursés à l’heure","Les prix restent stables"],answer:0,explanation:"Les retraits massifs peuvent dépasser les liquidités immédiatement disponibles."},{level:"Facile",question:"La titrisation consiste à :",choices:["Transformer des créances en titres financiers","Transformer les dépôts en billets uniquement","Supprimer les dettes publiques","Fixer les taux de change"],answer:0,explanation:"Les créances sont regroupées ou transformées en titres pouvant être cédés."},{level:"Intermédiaire",question:"Quel élément a contribué à la crise de 2008 ?",choices:["Crédits immobiliers risqués et diffusion des risques par titrisation","Une récolte agricole exceptionnelle","La disparition des marchés financiers","Une hausse des salaires publics uniquement"],answer:0,explanation:"Les crédits immobiliers risqués et leur diffusion ont fragilisé le système."},{level:"Difficile",question:"Un effet de richesse négatif peut conduire les ménages à :",choices:["Réduire leur consommation après une baisse de patrimoine","Augmenter toujours leur consommation","Cesser de détenir des dépôts","Accroître automatiquement leur revenu"],answer:0,explanation:"La baisse de la valeur patrimoniale peut inciter à épargner davantage."},{level:"Facile",question:"Le collatéral est :",choices:["Un actif donné en garantie d’un prêt","Un impôt sur les dépôts","Un titre de propriété intellectuelle","Un taux d’intérêt directeur"],answer:0,explanation:"Le collatéral sécurise le prêt en servant de garantie."},{level:"Intermédiaire",question:"La baisse du prix du collatéral peut provoquer :",choices:["Des demandes de garanties supplémentaires et des ventes forcées","Une hausse certaine du crédit","La disparition des dettes","Une hausse automatique des fonds propres"],answer:0,explanation:"Une garantie dévalorisée peut déclencher des appels de marge ou des ventes."},{level:"Difficile",question:"La contraction du crédit peut affecter l’économie réelle en :",choices:["Limitant consommation et investissement financés par emprunt","Augmentant nécessairement les exportations","Supprimant les coûts de production","Accroissant la population active"],answer:0,explanation:"Des emprunteurs privés de financement réduisent certains projets et dépenses."},{level:"Facile",question:"Le ratio de solvabilité vise à mesurer :",choices:["Les fonds propres au regard des actifs pondérés par les risques","Le nombre de clients par agence","Les dépôts par habitant","Le taux de change"],answer:0,explanation:"Il mesure la capacité en capital à absorber les pertes au regard des risques."},{level:"Intermédiaire",question:"La supervision bancaire consiste à :",choices:["Surveiller les risques et le respect des règles prudentielles","Garantir les bénéfices des banques","Fixer les prix de tous les actifs","Remplacer les actionnaires"],answer:0,explanation:"Les autorités contrôlent les établissements et peuvent exiger des mesures correctrices."},{level:"Difficile",question:"L’aléa moral peut encourager :",choices:["Une prise de risque excessive si les pertes sont supportées par autrui","Une disparition du risque de crédit","Une hausse automatique de l’épargne","Une baisse de toutes les transactions"],answer:0,explanation:"L’assurance implicite d’un sauvetage peut affaiblir les incitations à la prudence."},{level:"Facile",question:"Pourquoi les interconnexions peuvent-elles amplifier une crise ?",choices:["Les pertes d’un acteur fragilisent ses créanciers et partenaires","Elles isolent chaque établissement","Elles suppriment les engagements croisés","Elles empêchent les retraits"],answer:0,explanation:"Les engagements réciproques transmettent les difficultés d’un établissement à l’autre."},{level:"Intermédiaire",question:"Quel est un canal de transmission vers l’économie réelle ?",choices:["La baisse des prix des actifs et de la consommation","La hausse automatique des compétences","La disparition des importations","La hausse certaine des investissements"],answer:0,explanation:"La perte de patrimoine peut réduire la consommation et les débouchés."},{level:"Difficile",question:"Quel est le rôle des fonds propres bancaires ?",choices:["Absorber une partie des pertes","Garantir que la banque ne fera jamais faillite","Remplacer tous les dépôts","Supprimer les crédits risqués"],answer:0,explanation:"Les fonds propres constituent un coussin qui absorbe les pertes avant les créanciers."},{level:"Facile",question:"Pourquoi une crise financière peut-elle faire augmenter le chômage ?",choices:["La contraction du crédit et de la demande réduit production et embauches","Les banques embauchent tous les chômeurs","Les prix des actifs déterminent directement les salaires","Le chômage est indépendant de l’activité"],answer:0,explanation:"La crise peut réduire le financement, la consommation, l’investissement et la production."},{level:"Intermédiaire",question:"Quel objectif poursuit la régulation financière ?",choices:["Limiter les risques systémiques et renforcer la stabilité","Garantir un rendement élevé à tous les investisseurs","Supprimer toute innovation financière","Fixer les profits des entreprises"],answer:0,explanation:"La régulation cherche à réduire les risques et à préserver le fonctionnement du système."}],exercises:[{title:"Décrire une bulle spéculative",level:"Facile",statement:"Présentez les étapes de formation puis d’éclatement d’une bulle spéculative.",correction:"Des achats motivés par l’espoir de revente plus chère font monter le prix. Le mimétisme et les anticipations autoréalisatrices renforcent la hausse. Lorsque la confiance se retourne, les ventes augmentent, le prix chute et les détenteurs subissent des pertes.",skills:["Anticipations","Mimétisme","Retournement"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Comprendre une panique bancaire",level:"Intermédiaire",statement:"Expliquez comment une banque peut connaître une crise de liquidité même si elle possède des actifs de valeur à long terme.",correction:"La banque finance des crédits longs avec des ressources dont une partie est retirable à court terme. Des retraits simultanés peuvent dépasser les liquidités disponibles. Elle doit alors vendre rapidement des actifs ou chercher un financement, parfois à perte.",skills:["Transformation bancaire","Risque de liquidité"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Comparer les crises de 1929 et 2008",level:"Difficile",statement:"Citez un élément commun et une différence entre les crises des années 1930 et de 2008.",correction:"Les deux crises ont entraîné une défiance financière, des difficultés bancaires, une contraction du crédit et une dégradation de l’activité. La crise de 2008 est notamment liée aux crédits immobiliers risqués, à la titrisation et à l’interconnexion des marchés contemporains.",skills:["Repères historiques","Comparaison"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Analyser l’effet de richesse",level:"Facile",statement:"La valeur du patrimoine financier des ménages diminue fortement. Expliquez un effet possible sur la consommation.",correction:"La baisse du patrimoine perçu peut inciter les ménages à épargner davantage ou à réduire leurs dépenses. La demande adressée aux entreprises diminue alors, ce qui peut peser sur la production et l’emploi.",skills:["Canal de transmission","Consommation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Expliquer le canal du collatéral",level:"Intermédiaire",statement:"Un bien immobilier donné en garantie perd 20 % de sa valeur. Expliquez pourquoi cela peut amplifier une crise.",correction:"La garantie vaut moins. Le prêteur peut demander des garanties supplémentaires ou un remboursement partiel. L’emprunteur peut vendre rapidement des actifs ; ces ventes accentuent la baisse des prix, réduisant encore la valeur des garanties.",skills:["Collatéral","Ventes forcées"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Contraction du crédit",level:"Difficile",statement:"Montrez comment une banque fragilisée peut transmettre une crise à des entreprises non financières.",correction:"La banque durcit les conditions ou réduit les prêts. Les entreprises financent moins facilement leurs stocks, investissements et trésorerie. Elles peuvent reporter des projets, réduire leur production et leurs recrutements, ce qui affecte l’économie réelle.",skills:["Crédit","Investissement","Emploi"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Calcul simplifié d’un ratio de solvabilité",level:"Facile",statement:"Une banque détient 12 milliards d’euros de fonds propres réglementaires et 100 milliards d’actifs pondérés par les risques. Calculez son ratio.",correction:"Ratio = 12 / 100 × 100 = 12 %. Le ratio rapporte les fonds propres réglementaires aux actifs pondérés par les risques. Il ne signifie pas que 12 % de tous les dépôts sont disponibles en liquidités.",skills:["Calcul de ratio","Solvabilité"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Expliquer l’aléa moral",level:"Intermédiaire",statement:"Pourquoi la perspective d’un sauvetage systématique peut-elle encourager une banque à prendre davantage de risques ?",correction:"Si les dirigeants et créanciers anticipent que les pertes seront prises en charge par la collectivité, le coût privé du risque diminue. L’établissement peut être incité à adopter des stratégies plus risquées : c’est l’aléa moral.",skills:["Incitations","Régulation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Présenter la supervision",level:"Difficile",statement:"Décrivez deux moyens par lesquels les autorités peuvent limiter les risques bancaires.",correction:"Elles peuvent contrôler les expositions, la gouvernance et la qualité des actifs, et imposer des exigences prudentielles de fonds propres ou des mesures correctrices. La supervision vise à détecter les fragilités avant qu’elles deviennent systémiques.",skills:["Supervision","Prudence"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]},{title:"Construire une réponse organisée",level:"Facile",statement:"Répondez à la question : « Comment une crise financière peut-elle devenir une crise économique ? »",correction:"Une crise financière peut partir de pertes sur actifs, d’une bulle ou de défauts de remboursement. Elle fragilise les banques, déclenche défiance et contraction du crédit. La baisse des prix d’actifs réduit le patrimoine et la valeur des garanties, provoquant ventes forcées et recul de la consommation et de l’investissement. La production et l’emploi diminuent. La régulation prudentielle, la supervision et des fonds propres suffisants cherchent à limiter ces mécanismes.",skills:["Plan argumenté","Canaux de transmission","Régulation"],hints:["Repérez les notions du chapitre mobilisées.","Justifiez chaque étape du raisonnement."]}],revisionSheets:[{title:"Synthèse et notions essentielles",summary:[["Le système financier met en relation les agents qui disposent d’une capacité de financement et ceux qui ont un besoin de financement. Les banques collectent des dépôts, accordent des crédits et assurent des paiements ; les marchés permettent l’émission et l’échange de titres.","Les banques réalisent une transformation : elles financent des crédits souvent longs à partir de ressources dont une partie peut être retirée à court terme. Cette transformation soutient le financement de l’économie mais crée un risque de liquidité. Les établissements sont également exposés au risque de crédit et aux variations de prix des actifs.","L’interconnexion des institutions et les engagements croisés peuvent propager les difficultés. Une perte dans un établissement peut fragiliser ses créanciers, réduire les prêts et affecter la confiance dans le système."],["Une bulle spéculative apparaît lorsque le prix d’un actif s’éloigne durablement de sa valeur justifiée par les revenus ou fondamentaux attendus, sous l’effet d’anticipations de hausse. Les acheteurs espèrent revendre plus cher, ce qui alimente la hausse.","Les comportements mimétiques conduisent des agents à imiter les décisions des autres plutôt qu’à s’appuyer uniquement sur leur information propre. La hausse des prix peut alors renforcer la croyance en une hausse future : les anticipations deviennent autoréalisatrices.","Lorsque les anticipations se retournent, les ventes se multiplient et le prix chute. Les détenteurs d’actifs peuvent subir des pertes, les garanties perdent de la valeur et les établissements financiers peuvent être fragilisés."],["Une banque conserve une partie des dépôts sous forme liquide et prête le reste. Si de nombreux déposants craignent simultanément une faillite et retirent leurs fonds, la banque peut manquer de liquidités même si ses actifs ont une valeur supérieure à ses dettes à long terme : c’est une panique bancaire.","La crise des années 1930 associe notamment effondrement boursier, faillites bancaires, contraction du crédit, baisse de la production et montée du chômage. La crise de 2008 est liée notamment aux crédits immobiliers risqués, à la titrisation, à la hausse puis à la chute des prix immobiliers et à la défiance entre institutions financières.","Les crises ne sont pas identiques, mais elles montrent comment le levier, l’endettement, l’opacité et les interconnexions peuvent amplifier un choc initial."],["Un effet de richesse négatif apparaît lorsque la baisse de la valeur des actifs réduit le patrimoine perçu des ménages, qui peuvent alors diminuer leur consommation. Les entreprises peuvent réduire leurs investissements lorsque leurs perspectives et leur accès au financement se dégradent.","Le collatéral est un actif donné en garantie d’un prêt. Lorsque son prix baisse, l’emprunteur doit parfois apporter davantage de garanties ou réduire sa dette. Les ventes forcées accentuent alors la baisse des prix, ce qui peut créer une spirale.","La contraction du crédit survient lorsque les banques, fragilisées ou inquiètes, réduisent les prêts ou durcissent leurs conditions. Les ménages et entreprises reportent consommation et investissement ; production et emploi peuvent reculer."],["La supervision bancaire consiste à surveiller les établissements, leurs risques, leur gouvernance et leur respect des règles. Les banques centrales et autorités compétentes peuvent demander des informations, imposer des mesures correctrices et intervenir en cas de fragilité.","Le ratio de solvabilité rapporte les fonds propres réglementaires aux actifs pondérés par les risques. Il vise à garantir que la banque dispose d’un coussin de capital capable d’absorber des pertes. Il ne supprime pas le risque, mais renforce la résilience.","La régulation cherche aussi à limiter l’aléa moral : si les acteurs pensent qu’ils seront toujours secourus, ils peuvent prendre davantage de risques. Des règles crédibles, une supervision et des mécanismes de résolution doivent limiter cette incitation tout en préservant la stabilité financière."]],mustKnow:["Système financier: Ensemble des institutions et marchés permettant le financement, les paiements et la circulation des actifs.","Capacité de financement: Situation d’un agent dont les ressources dépassent les dépenses sur une période.","Besoin de financement: Situation d’un agent dont les dépenses dépassent les ressources disponibles.","Intermédiation bancaire: Activité par laquelle les banques collectent des ressources et accordent des crédits.","Risque de liquidité: Risque de ne pas pouvoir faire face à des demandes de paiement immédiates.","Risque de crédit: Risque qu’un emprunteur ne rembourse pas sa dette.","Risque de marché: Risque de perte lié aux variations des prix des actifs financiers.","Bulle spéculative: Hausse autoentretenue du prix d’un actif, alimentée par des anticipations de hausse éloignées des fondamentaux.","Fondamentaux: Éléments économiques sous-jacents pouvant justifier la valeur d’un actif.","Comportement mimétique: Tendance à imiter les décisions des autres agents.","Anticipation autoréalisatrice: Anticipation qui contribue à provoquer l’événement attendu.","Éclatement d’une bulle: Retournement des anticipations entraînant des ventes et une forte baisse du prix de l’actif."],methods:["Commencer par définir les termes du sujet.","Présenter un mécanisme étape par étape.","Illustrer avec un exemple précis.","Nuancer les effets selon les acteurs et le contexte."]}],sources:[{title:"Programme de spécialité SES de terminale et ressources d’accompagnement",institution:"Ministère de l’Éducation nationale — Éduscol",url:"https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",consultedAt:"2026-11-01",supports:["Questionnements et objectifs d’apprentissage du chapitre","Notions et mécanismes attendus"]}],sourceNote:"Ressource pédagogique originale structurée à partir des objectifs du programme officiel. Les exemples chiffrés sont des situations didactiques construites pour l’entraînement et ne constituent pas des données statistiques officielles.",validationStatus:"draft"},
  'ses-europe': {
  title: "Quelles politiques économiques dans le cadre européen ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quelles politiques économiques dans le cadre européen ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Une intégration économique particulière",
      body: [
        "L’Union européenne organise un marché intérieur et des règles communes. Les États membres conservent des compétences budgétaires importantes, tandis que la politique monétaire est commune aux pays de la zone euro.",
        "Cette architecture crée une interdépendance : une décision nationale peut avoir des effets sur les partenaires, et les décisions communes doivent tenir compte de situations économiques différentes."
      ]
    },
    {
      heading: "2. Politique monétaire et stabilité des prix",
      body: [
        "La Banque centrale européenne conduit la politique monétaire de la zone euro. Les taux directeurs influencent les conditions de financement, la demande et, avec des délais, l’évolution des prix.",
        "Une hausse des taux peut contribuer à ralentir l’inflation, mais elle peut aussi freiner le crédit et l’investissement. Les effets dépendent du contexte et ne sont ni immédiats ni identiques pour tous."
      ]
    },
    {
      heading: "3. Politiques budgétaires nationales",
      body: [
        "Les budgets publics permettent de financer les services collectifs et d’agir sur la conjoncture. En période de ralentissement, certaines dépenses ou baisses d’impôts peuvent soutenir la demande ; en période de forte inflation, des mesures peuvent au contraire limiter les tensions.",
        "Les marges de manœuvre dépendent notamment du niveau de dette, du coût du financement et des règles communes. La politique budgétaire doit arbitrer entre stabilisation, investissement et soutenabilité."
      ]
    },
    {
      heading: "4. Coordination et limites",
      body: [
        "Une politique monétaire unique s’applique à des économies qui peuvent connaître des situations différentes. Un choc asymétrique rend donc l’ajustement plus difficile.",
        "La coordination, les mécanismes de solidarité et les réformes structurelles peuvent contribuer à réduire ces difficultés, mais ils supposent des choix politiques et des compromis entre États."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Distinguer politique monétaire, politique budgétaire et politique structurelle. Identifier l’autorité compétente, l’objectif, l’instrument et le délai d’action.",
        "Dans une réponse, expliquer les arbitrages : stabilité des prix, activité, emploi, investissement, dette et cohésion entre pays."
      ]
    }
  
      ,{ heading: 'L’intégration européenne : approfondissement et limites', body: ['La construction européenne associe une intégration économique et des institutions politiques. Le marché unique réduit les obstacles aux échanges et organise des règles communes ; l’euro facilite les échanges monétaires entre les États membres de la zone euro, mais implique aussi une politique monétaire commune qui ne répond pas toujours de la même manière aux situations nationales.', 'Les politiques européennes interviennent dans des domaines variés, avec des compétences et des procédures différentes. La politique agricole commune, la politique de cohésion, les règles de concurrence et les politiques commerciales illustrent cette diversité. Il faut distinguer ce qui relève de l’Union, des États et des collectivités territoriales.', 'L’Union reste traversée par des divergences sur la solidarité budgétaire, les frontières, l’énergie, la défense et l’élargissement. Ces désaccords ne signifient pas l’absence d’intégration : ils montrent que la construction européenne est un processus de négociation entre institutions et gouvernements.'] }],
  keyPoints: [
    "L’Union européenne organise un marché intérieur et des règles communes. Les États membres conservent des compétences budgétaires importantes, tandis que la politique monétaire est commune aux pays de la zone euro.",
    "La Banque centrale européenne conduit la politique monétaire de la zone euro. Les taux directeurs influencent les conditions de financement, la demande et, avec des délais, l’évolution des prix.",
    "Les budgets publics permettent de financer les services collectifs et d’agir sur la conjoncture. En période de ralentissement, certaines dépenses ou baisses d’impôts peuvent soutenir la demande ; en période de forte inflation, des mesures peuvent au contraire limiter les tensions.",
    "Une politique monétaire unique s’applique à des économies qui peuvent connaître des situations différentes. Un choc asymétrique rend donc l’ajustement plus difficile.",
    "Distinguer politique monétaire, politique budgétaire et politique structurelle. Identifier l’autorité compétente, l’objectif, l’instrument et le délai d’action.",
    "Auteurs et repères : Zone euro, BCE, Commission européenne et institutions budgétaires."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Union économique et monétaire » ?",
      back: "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de banque centrale européenne est-elle importante ?",
      back: "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Politique monétaire » ?",
      back: "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de politique budgétaire est-elle importante ?",
      back: "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Déficit public » ?",
      back: "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de dette publique est-elle importante ?",
      back: "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Stabilité des prix » ?",
      back: "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de coordination est-elle importante ?",
      back: "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Conjoncture » ?",
      back: "Évolution de l’activité économique à court terme.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de inflation est-elle importante ?",
      back: "Hausse durable du niveau général des prix. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Taux directeur » ?",
      back: "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de règles budgétaires est-elle importante ?",
      back: "Dispositifs encadrant les déficits et les dettes publics. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Choc asymétrique » ?",
      back: "Événement qui affecte différemment les économies d’une union monétaire.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de compétitivité est-elle importante ?",
      back: "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Politique structurelle » ?",
      back: "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de union économique et monétaire est-elle importante ?",
      back: "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Banque centrale européenne » ?",
      back: "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de politique monétaire est-elle importante ?",
      back: "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Politique budgétaire » ?",
      back: "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de déficit public est-elle importante ?",
      back: "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Dette publique » ?",
      back: "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de stabilité des prix est-elle importante ?",
      back: "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Coordination » ?",
      back: "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de conjoncture est-elle importante ?",
      back: "Évolution de l’activité économique à court terme. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Inflation » ?",
      back: "Hausse durable du niveau général des prix.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de taux directeur est-elle importante ?",
      back: "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Règles budgétaires » ?",
      back: "Dispositifs encadrant les déficits et les dettes publics.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de choc asymétrique est-elle importante ?",
      back: "Événement qui affecte différemment les économies d’une union monétaire. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Compétitivité » ?",
      back: "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de politique structurelle est-elle importante ?",
      back: "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Union économique et monétaire » ?",
      choices: [
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro.",
        "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps.",
        "Évolution de l’activité économique à court terme.",
        "Dispositifs encadrant les déficits et les dettes publics."
      ],
      answer: 0,
      explanation: "Union économique et monétaire : Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Banque centrale européenne » ?",
      choices: [
        "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix.",
        "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible.",
        "Hausse durable du niveau général des prix.",
        "Événement qui affecte différemment les économies d’une union monétaire."
      ],
      answer: 0,
      explanation: "Banque centrale européenne : Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Politique monétaire » ?",
      choices: [
        "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité.",
        "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques.",
        "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire.",
        "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix."
      ],
      answer: 0,
      explanation: "Politique monétaire : Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Politique budgétaire » ?",
      choices: [
        "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité.",
        "Évolution de l’activité économique à court terme.",
        "Dispositifs encadrant les déficits et les dettes publics.",
        "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie."
      ],
      answer: 0,
      explanation: "Politique budgétaire : Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Déficit public » ?",
      choices: [
        "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée.",
        "Hausse durable du niveau général des prix.",
        "Événement qui affecte différemment les économies d’une union monétaire.",
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro."
      ],
      answer: 0,
      explanation: "Déficit public : Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Dette publique » ?",
      choices: [
        "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps.",
        "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire.",
        "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix.",
        "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix."
      ],
      answer: 0,
      explanation: "Dette publique : Ensemble des engagements financiers des administrations publiques accumulés au fil du temps. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Stabilité des prix » ?",
      choices: [
        "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible.",
        "Dispositifs encadrant les déficits et les dettes publics.",
        "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie.",
        "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité."
      ],
      answer: 0,
      explanation: "Stabilité des prix : Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Coordination » ?",
      choices: [
        "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques.",
        "Événement qui affecte différemment les économies d’une union monétaire.",
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro.",
        "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité."
      ],
      answer: 0,
      explanation: "Coordination : Organisation de décisions communes ou compatibles entre plusieurs autorités publiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Conjoncture » ?",
      choices: [
        "Évolution de l’activité économique à court terme.",
        "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix.",
        "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix.",
        "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée."
      ],
      answer: 0,
      explanation: "Conjoncture : Évolution de l’activité économique à court terme. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Inflation » ?",
      choices: [
        "Hausse durable du niveau général des prix.",
        "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie.",
        "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité.",
        "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps."
      ],
      answer: 0,
      explanation: "Inflation : Hausse durable du niveau général des prix. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Taux directeur » ?",
      choices: [
        "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire.",
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro.",
        "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité.",
        "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible."
      ],
      answer: 0,
      explanation: "Taux directeur : Taux fixé par une banque centrale qui influence le coût du refinancement bancaire. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Règles budgétaires » ?",
      choices: [
        "Dispositifs encadrant les déficits et les dettes publics.",
        "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix.",
        "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée.",
        "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques."
      ],
      answer: 0,
      explanation: "Règles budgétaires : Dispositifs encadrant les déficits et les dettes publics. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Choc asymétrique » ?",
      choices: [
        "Événement qui affecte différemment les économies d’une union monétaire.",
        "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité.",
        "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps.",
        "Évolution de l’activité économique à court terme."
      ],
      answer: 0,
      explanation: "Choc asymétrique : Événement qui affecte différemment les économies d’une union monétaire. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Compétitivité » ?",
      choices: [
        "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix.",
        "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité.",
        "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible.",
        "Hausse durable du niveau général des prix."
      ],
      answer: 0,
      explanation: "Compétitivité : Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Politique structurelle » ?",
      choices: [
        "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie.",
        "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée.",
        "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques.",
        "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire."
      ],
      answer: 0,
      explanation: "Politique structurelle : Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Union économique et monétaire » ? — question 2",
      choices: [
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro.",
        "Ensemble des engagements financiers des administrations publiques accumulés au fil du temps.",
        "Évolution de l’activité économique à court terme.",
        "Dispositifs encadrant les déficits et les dettes publics."
      ],
      answer: 0,
      explanation: "Union économique et monétaire : Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Banque centrale européenne » ? — question 2",
      choices: [
        "Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix.",
        "Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible.",
        "Hausse durable du niveau général des prix.",
        "Événement qui affecte différemment les économies d’une union monétaire."
      ],
      answer: 0,
      explanation: "Banque centrale européenne : Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Politique monétaire » ? — question 2",
      choices: [
        "Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité.",
        "Organisation de décisions communes ou compatibles entre plusieurs autorités publiques.",
        "Taux fixé par une banque centrale qui influence le coût du refinancement bancaire.",
        "Capacité d’une économie ou d’une entreprise à soutenir la concurrence, par les prix ou hors-prix."
      ],
      answer: 0,
      explanation: "Politique monétaire : Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Politique budgétaire » ? — question 2",
      choices: [
        "Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité.",
        "Évolution de l’activité économique à court terme.",
        "Dispositifs encadrant les déficits et les dettes publics.",
        "Action publique visant à transformer durablement le fonctionnement et les capacités productives de l’économie."
      ],
      answer: 0,
      explanation: "Politique budgétaire : Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles politiques économiques dans le cadre européen ? », quelle proposition définit correctement « Déficit public » ? — question 2",
      choices: [
        "Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée.",
        "Hausse durable du niveau général des prix.",
        "Événement qui affecte différemment les économies d’une union monétaire.",
        "Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro."
      ],
      answer: 0,
      explanation: "Déficit public : Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Union économique et monétaire",
      level: "Facile",
      statement: "Définissez union économique et monétaire et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Espace dans lequel les États coordonnent leurs politiques économiques et partagent une monnaie, pour les membres de la zone euro. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Banque centrale européenne",
      level: "Facile",
      statement: "Expliquez le rôle de banque centrale européenne dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Institution chargée de conduire la politique monétaire de la zone euro, avec pour objectif principal la stabilité des prix. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Politique monétaire",
      level: "Facile",
      statement: "Distinguez politique monétaire de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Action sur les taux d’intérêt et les conditions de financement pour agir sur la monnaie, le crédit et l’activité. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Politique budgétaire",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant politique budgétaire à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Action des administrations publiques sur les dépenses et les recettes, notamment pour stabiliser l’activité. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Déficit public",
      level: "Intermédiaire",
      statement: "Définissez déficit public et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Situation dans laquelle les dépenses publiques dépassent les recettes sur une période donnée. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Dette publique",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de dette publique dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Ensemble des engagements financiers des administrations publiques accumulés au fil du temps. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Stabilité des prix",
      level: "Intermédiaire",
      statement: "Distinguez stabilité des prix de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Situation dans laquelle le niveau général des prix évolue faiblement et de manière prévisible. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Coordination",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant coordination à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Organisation de décisions communes ou compatibles entre plusieurs autorités publiques. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Conjoncture",
      level: "Difficile",
      statement: "Définissez conjoncture et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Évolution de l’activité économique à court terme. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Inflation",
      level: "Difficile",
      statement: "Expliquez le rôle de inflation dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Hausse durable du niveau général des prix. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-structure': {
  title: "Comment est structurée la société française actuelle ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Comment est structurée la société française actuelle ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Décrire la structure sociale",
      body: [
        "La société française est différenciée selon la profession, le revenu, le patrimoine, le diplôme, le genre, l’âge et le lieu de résidence. Aucun indicateur isolé ne suffit à décrire toutes les positions sociales.",
        "Les professions et catégories socioprofessionnelles (PCS) constituent un outil statistique utile, mais elles ne résument pas toutes les dimensions des identités et des inégalités."
      ]
    },
    {
      heading: "2. Classes et stratification",
      body: [
        "Marx met l’accent sur les rapports de production et les conflits entre classes. Weber propose une analyse multidimensionnelle des positions, qui tient compte des ressources économiques, du prestige et du pouvoir.",
        "Les analyses contemporaines discutent la persistance des classes, leur fragmentation et la diversité des trajectoires. Il faut distinguer les catégories statistiques des groupes qui se reconnaissent comme collectifs."
      ]
    },
    {
      heading: "3. Ressources et capitaux",
      body: [
        "Les individus disposent de ressources inégalement réparties. Bourdieu distingue notamment capital économique, culturel et social ; leur combinaison contribue à expliquer les pratiques et les trajectoires.",
        "Le diplôme, le patrimoine et les réseaux peuvent se cumuler et se transmettre, mais les trajectoires ne sont jamais entièrement déterminées par l’origine sociale."
      ]
    },
    {
      heading: "4. Transformations de la société",
      body: [
        "La salarisation, la tertiarisation, l’élévation des qualifications et la féminisation de l’emploi ont transformé la structure sociale. Ces évolutions n’effacent pas les inégalités.",
        "Les positions sociales varient aussi selon le cycle de vie, le territoire, les configurations familiales et les discriminations. Les analyses doivent croiser plusieurs variables."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Pour caractériser la structure sociale, combiner plusieurs critères et préciser les indicateurs mobilisés.",
        "Éviter de confondre moyenne et médiane, revenu et patrimoine, catégorie statistique et classe sociale. Appuyer l’analyse sur des données datées et contextualisées."
      ]
    }
  
      ,{ heading: 'Mobiliser les catégories sociales avec prudence', body: ['La structure socioprofessionnelle décrit la répartition de la population selon des catégories construites à partir de la profession, du statut, de la qualification et de la position dans l’organisation du travail. Les catégories statistiques permettent de comparer des groupes, mais elles ne résument pas toutes les dimensions de l’identité sociale.', 'Les transformations de l’emploi, la salarisation, la tertiarisation, la féminisation et l’élévation des qualifications modifient la composition des groupes sociaux. Ces évolutions peuvent rendre certaines frontières moins nettes, sans faire disparaître les inégalités de revenus, de patrimoine, de conditions de travail ou de prestige.', 'Pour étudier la structure sociale, il faut distinguer la position objective, les pratiques et les représentations. Deux personnes classées dans la même catégorie peuvent avoir des expériences différentes selon le genre, l’âge, le territoire, l’origine sociale ou le patrimoine. Les statistiques doivent donc être interprétées avec leur champ et leurs limites.'] }],
  keyPoints: [
    "La société française est différenciée selon la profession, le revenu, le patrimoine, le diplôme, le genre, l’âge et le lieu de résidence. Aucun indicateur isolé ne suffit à décrire toutes les positions sociales.",
    "Marx met l’accent sur les rapports de production et les conflits entre classes. Weber propose une analyse multidimensionnelle des positions, qui tient compte des ressources économiques, du prestige et du pouvoir.",
    "Les individus disposent de ressources inégalement réparties. Bourdieu distingue notamment capital économique, culturel et social ; leur combinaison contribue à expliquer les pratiques et les trajectoires.",
    "La salarisation, la tertiarisation, l’élévation des qualifications et la féminisation de l’emploi ont transformé la structure sociale. Ces évolutions n’effacent pas les inégalités.",
    "Pour caractériser la structure sociale, combiner plusieurs critères et préciser les indicateurs mobilisés.",
    "Auteurs et repères : Marx, Weber, Bourdieu et travaux statistiques de l’Insee."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Structure sociale » ?",
      back: "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de pcs est-elle importante ?",
      back: "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Stratification sociale » ?",
      back: "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de revenu est-elle importante ?",
      back: "Flux de ressources monétaires perçues pendant une période. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Patrimoine » ?",
      back: "Stock d’actifs détenus à un moment donné, diminué des dettes.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de capital culturel est-elle importante ?",
      back: "Ressources culturelles incorporées, objectivées ou institutionnalisées. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Capital économique » ?",
      back: "Ressources financières et matérielles mobilisables.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de capital social est-elle importante ?",
      back: "Ressources accessibles grâce aux relations et réseaux. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Classe sociale » ?",
      back: "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de individualisation est-elle importante ?",
      back: "Processus par lequel les trajectoires et choix individuels prennent une place accrue. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Âge » ?",
      back: "Dimension du cycle de vie qui influence les positions et pratiques sociales.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de genre est-elle importante ?",
      back: "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Diplôme » ?",
      back: "Titre attestant officiellement d’un niveau de formation ou de qualification.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de ségrégation est-elle importante ?",
      back: "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Inégalité » ?",
      back: "Différence d’accès à des ressources ou positions socialement valorisées.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de structure sociale est-elle importante ?",
      back: "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « PCS » ?",
      back: "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de stratification sociale est-elle importante ?",
      back: "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Revenu » ?",
      back: "Flux de ressources monétaires perçues pendant une période.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de patrimoine est-elle importante ?",
      back: "Stock d’actifs détenus à un moment donné, diminué des dettes. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Capital culturel » ?",
      back: "Ressources culturelles incorporées, objectivées ou institutionnalisées.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de capital économique est-elle importante ?",
      back: "Ressources financières et matérielles mobilisables. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Capital social » ?",
      back: "Ressources accessibles grâce aux relations et réseaux.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de classe sociale est-elle importante ?",
      back: "Groupe défini par une position et des conditions sociales communes, selon différentes approches. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Individualisation » ?",
      back: "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de âge est-elle importante ?",
      back: "Dimension du cycle de vie qui influence les positions et pratiques sociales. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Genre » ?",
      back: "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de diplôme est-elle importante ?",
      back: "Titre attestant officiellement d’un niveau de formation ou de qualification. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Ségrégation » ?",
      back: "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de inégalité est-elle importante ?",
      back: "Différence d’accès à des ressources ou positions socialement valorisées. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Structure sociale » ?",
      choices: [
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie.",
        "Ressources culturelles incorporées, objectivées ou institutionnalisées.",
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes."
      ],
      answer: 0,
      explanation: "Structure sociale : Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « PCS » ?",
      choices: [
        "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale.",
        "Ressources financières et matérielles mobilisables.",
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
        "Titre attestant officiellement d’un niveau de formation ou de qualification."
      ],
      answer: 0,
      explanation: "PCS : Nomenclature statistique qui classe les individus selon leur profession et leur position sociale. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Stratification sociale » ?",
      choices: [
        "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir.",
        "Ressources accessibles grâce aux relations et réseaux.",
        "Dimension du cycle de vie qui influence les positions et pratiques sociales.",
        "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources."
      ],
      answer: 0,
      explanation: "Stratification sociale : Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Revenu » ?",
      choices: [
        "Flux de ressources monétaires perçues pendant une période.",
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes.",
        "Différence d’accès à des ressources ou positions socialement valorisées."
      ],
      answer: 0,
      explanation: "Revenu : Flux de ressources monétaires perçues pendant une période. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Patrimoine » ?",
      choices: [
        "Stock d’actifs détenus à un moment donné, diminué des dettes.",
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
        "Titre attestant officiellement d’un niveau de formation ou de qualification.",
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie."
      ],
      answer: 0,
      explanation: "Patrimoine : Stock d’actifs détenus à un moment donné, diminué des dettes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Capital culturel » ?",
      choices: [
        "Ressources culturelles incorporées, objectivées ou institutionnalisées.",
        "Dimension du cycle de vie qui influence les positions et pratiques sociales.",
        "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources.",
        "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale."
      ],
      answer: 0,
      explanation: "Capital culturel : Ressources culturelles incorporées, objectivées ou institutionnalisées. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Capital économique » ?",
      choices: [
        "Ressources financières et matérielles mobilisables.",
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes.",
        "Différence d’accès à des ressources ou positions socialement valorisées.",
        "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir."
      ],
      answer: 0,
      explanation: "Capital économique : Ressources financières et matérielles mobilisables. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Capital social » ?",
      choices: [
        "Ressources accessibles grâce aux relations et réseaux.",
        "Titre attestant officiellement d’un niveau de formation ou de qualification.",
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie.",
        "Flux de ressources monétaires perçues pendant une période."
      ],
      answer: 0,
      explanation: "Capital social : Ressources accessibles grâce aux relations et réseaux. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Classe sociale » ?",
      choices: [
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
        "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources.",
        "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale.",
        "Stock d’actifs détenus à un moment donné, diminué des dettes."
      ],
      answer: 0,
      explanation: "Classe sociale : Groupe défini par une position et des conditions sociales communes, selon différentes approches. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Individualisation » ?",
      choices: [
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
        "Différence d’accès à des ressources ou positions socialement valorisées.",
        "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir.",
        "Ressources culturelles incorporées, objectivées ou institutionnalisées."
      ],
      answer: 0,
      explanation: "Individualisation : Processus par lequel les trajectoires et choix individuels prennent une place accrue. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Âge » ?",
      choices: [
        "Dimension du cycle de vie qui influence les positions et pratiques sociales.",
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie.",
        "Flux de ressources monétaires perçues pendant une période.",
        "Ressources financières et matérielles mobilisables."
      ],
      answer: 0,
      explanation: "Âge : Dimension du cycle de vie qui influence les positions et pratiques sociales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Genre » ?",
      choices: [
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes.",
        "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale.",
        "Stock d’actifs détenus à un moment donné, diminué des dettes.",
        "Ressources accessibles grâce aux relations et réseaux."
      ],
      answer: 0,
      explanation: "Genre : Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Diplôme » ?",
      choices: [
        "Titre attestant officiellement d’un niveau de formation ou de qualification.",
        "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir.",
        "Ressources culturelles incorporées, objectivées ou institutionnalisées.",
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches."
      ],
      answer: 0,
      explanation: "Diplôme : Titre attestant officiellement d’un niveau de formation ou de qualification. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Ségrégation » ?",
      choices: [
        "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources.",
        "Flux de ressources monétaires perçues pendant une période.",
        "Ressources financières et matérielles mobilisables.",
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue."
      ],
      answer: 0,
      explanation: "Ségrégation : Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Inégalité » ?",
      choices: [
        "Différence d’accès à des ressources ou positions socialement valorisées.",
        "Stock d’actifs détenus à un moment donné, diminué des dettes.",
        "Ressources accessibles grâce aux relations et réseaux.",
        "Dimension du cycle de vie qui influence les positions et pratiques sociales."
      ],
      answer: 0,
      explanation: "Inégalité : Différence d’accès à des ressources ou positions socialement valorisées. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Structure sociale » ? — question 2",
      choices: [
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie.",
        "Ressources culturelles incorporées, objectivées ou institutionnalisées.",
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes."
      ],
      answer: 0,
      explanation: "Structure sociale : Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « PCS » ? — question 2",
      choices: [
        "Nomenclature statistique qui classe les individus selon leur profession et leur position sociale.",
        "Ressources financières et matérielles mobilisables.",
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
        "Titre attestant officiellement d’un niveau de formation ou de qualification."
      ],
      answer: 0,
      explanation: "PCS : Nomenclature statistique qui classe les individus selon leur profession et leur position sociale. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Stratification sociale » ? — question 2",
      choices: [
        "Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir.",
        "Ressources accessibles grâce aux relations et réseaux.",
        "Dimension du cycle de vie qui influence les positions et pratiques sociales.",
        "Séparation spatiale ou sociale de groupes qui disposent d’un accès inégal aux ressources."
      ],
      answer: 0,
      explanation: "Stratification sociale : Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Revenu » ? — question 2",
      choices: [
        "Flux de ressources monétaires perçues pendant une période.",
        "Groupe défini par une position et des conditions sociales communes, selon différentes approches.",
        "Rapports sociaux qui organisent des différences et inégalités entre femmes et hommes.",
        "Différence d’accès à des ressources ou positions socialement valorisées."
      ],
      answer: 0,
      explanation: "Revenu : Flux de ressources monétaires perçues pendant une période. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment est structurée la société française actuelle ? », quelle proposition définit correctement « Patrimoine » ? — question 2",
      choices: [
        "Stock d’actifs détenus à un moment donné, diminué des dettes.",
        "Processus par lequel les trajectoires et choix individuels prennent une place accrue.",
        "Titre attestant officiellement d’un niveau de formation ou de qualification.",
        "Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie."
      ],
      answer: 0,
      explanation: "Patrimoine : Stock d’actifs détenus à un moment donné, diminué des dettes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Structure sociale",
      level: "Facile",
      statement: "Définissez structure sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Organisation de la société en groupes différenciés selon les ressources, les positions et les modes de vie. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : PCS",
      level: "Facile",
      statement: "Expliquez le rôle de pcs dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Nomenclature statistique qui classe les individus selon leur profession et leur position sociale. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Stratification sociale",
      level: "Facile",
      statement: "Distinguez stratification sociale de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Hiérarchisation de la société en groupes inégalement dotés en ressources et en pouvoir. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Revenu",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant revenu à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Flux de ressources monétaires perçues pendant une période. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Patrimoine",
      level: "Intermédiaire",
      statement: "Définissez patrimoine et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Stock d’actifs détenus à un moment donné, diminué des dettes. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Capital culturel",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de capital culturel dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Ressources culturelles incorporées, objectivées ou institutionnalisées. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Capital économique",
      level: "Intermédiaire",
      statement: "Distinguez capital économique de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Ressources financières et matérielles mobilisables. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Capital social",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant capital social à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Ressources accessibles grâce aux relations et réseaux. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Classe sociale",
      level: "Difficile",
      statement: "Définissez classe sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Groupe défini par une position et des conditions sociales communes, selon différentes approches. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Individualisation",
      level: "Difficile",
      statement: "Expliquez le rôle de individualisation dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Processus par lequel les trajectoires et choix individuels prennent une place accrue. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-ecole': {
  title: "Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Les fonctions de l’École",
      body: [
        "L’École transmet des savoirs, des méthodes et des normes communes. Elle contribue à la socialisation, à la formation des citoyens et à la préparation à la vie professionnelle.",
        "Elle peut favoriser l’émancipation et la mobilité sociale en donnant accès à des qualifications. Son action dépend cependant des conditions d’apprentissage et des ressources disponibles."
      ]
    },
    {
      heading: "2. Massification et démocratisation",
      body: [
        "La massification correspond à l’augmentation de la scolarisation. Elle ne signifie pas automatiquement la disparition des inégalités de réussite ou d’orientation.",
        "La démocratisation suppose que les chances de réussite et l’accès aux filières ne dépendent pas fortement de l’origine sociale. Il faut donc étudier les parcours, les filières et les résultats selon les groupes."
      ]
    },
    {
      heading: "3. Origine sociale et réussite",
      body: [
        "Les ressources familiales, notamment le capital culturel, peuvent faciliter la compréhension des attentes scolaires et l’accès à certaines pratiques.",
        "Les mécanismes sont multiples : conditions matérielles, familiarité avec les codes scolaires, information sur l’orientation, attentes et autocensure. Ils ne doivent pas être transformés en déterminisme individuel."
      ]
    },
    {
      heading: "4. Diplômes et mobilité",
      body: [
        "Les diplômes contribuent à structurer l’accès aux emplois et aux positions sociales. Leur rendement dépend de la conjoncture, du niveau de diplôme et des caractéristiques des emplois.",
        "La hausse du niveau de formation peut coexister avec une concurrence accrue entre diplômés et avec des inégalités persistantes de parcours."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Distinguer massification, démocratisation, égalité des chances et mobilité sociale.",
        "Mobiliser des données comparant les groupes sociaux et préciser ce qu’elles mesurent : accès, réussite, orientation, diplôme ou insertion."
      ]
    }
  
      ,{ heading: 'Massification, démocratisation et inégalités scolaires', body: ['La massification scolaire désigne l’allongement de la scolarisation et l’accès d’une part croissante d’une génération aux niveaux d’enseignement secondaire et supérieur. La démocratisation suppose davantage : elle interroge la réduction des écarts de réussite et d’accès aux différentes filières selon l’origine sociale, le genre ou le territoire.', 'Les ressources familiales influencent les conditions d’apprentissage : familiarité avec les attentes scolaires, disponibilité, espace de travail, accompagnement et information sur les parcours. Les établissements et les politiques éducatives peuvent atténuer ou renforcer ces écarts selon la répartition des moyens, les pratiques pédagogiques et l’orientation.', 'Le diplôme protège souvent contre le chômage et facilite l’accès à certaines professions, mais sa valeur dépend du niveau, de la spécialité, du contexte économique et de l’expérience. La relation entre diplôme et mobilité sociale n’est donc pas automatique. Il faut distinguer l’accès à l’école, la réussite, l’orientation, l’obtention du diplôme et la position professionnelle ultérieure.'] }],
  keyPoints: [
    "L’École transmet des savoirs, des méthodes et des normes communes. Elle contribue à la socialisation, à la formation des citoyens et à la préparation à la vie professionnelle.",
    "La massification correspond à l’augmentation de la scolarisation. Elle ne signifie pas automatiquement la disparition des inégalités de réussite ou d’orientation.",
    "Les ressources familiales, notamment le capital culturel, peuvent faciliter la compréhension des attentes scolaires et l’accès à certaines pratiques.",
    "Les diplômes contribuent à structurer l’accès aux emplois et aux positions sociales. Leur rendement dépend de la conjoncture, du niveau de diplôme et des caractéristiques des emplois.",
    "Distinguer massification, démocratisation, égalité des chances et mobilité sociale.",
    "Auteurs et repères : Durkheim, Bourdieu, Passeron, Baudelot et Establet."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Massification scolaire » ?",
      back: "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de démocratisation scolaire est-elle importante ?",
      back: "Réduction des inégalités d’accès et de réussite entre groupes sociaux. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité des chances » ?",
      back: "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de capital culturel est-elle importante ?",
      back: "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Socialisation » ?",
      back: "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de orientation est-elle importante ?",
      back: "Processus de choix et d’affectation dans les parcours de formation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Ségrégation scolaire » ?",
      back: "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de rendement du diplôme est-elle importante ?",
      back: "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Reproduction sociale » ?",
      back: "Transmission intergénérationnelle de positions et d’inégalités sociales.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de méritocratie est-elle importante ?",
      back: "Principe qui attribue les positions aux mérites individuels évalués selon des critères. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Autocensure » ?",
      back: "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de effet établissement est-elle importante ?",
      back: "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Compétence » ?",
      back: "Capacité à mobiliser des connaissances et savoir-faire dans une situation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de qualification est-elle importante ?",
      back: "Ensemble des capacités reconnues pour exercer une activité professionnelle. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Mobilité sociale » ?",
      back: "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de massification scolaire est-elle importante ?",
      back: "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Démocratisation scolaire » ?",
      back: "Réduction des inégalités d’accès et de réussite entre groupes sociaux.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité des chances est-elle importante ?",
      back: "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Capital culturel » ?",
      back: "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de socialisation est-elle importante ?",
      back: "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Orientation » ?",
      back: "Processus de choix et d’affectation dans les parcours de formation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de ségrégation scolaire est-elle importante ?",
      back: "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Rendement du diplôme » ?",
      back: "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de reproduction sociale est-elle importante ?",
      back: "Transmission intergénérationnelle de positions et d’inégalités sociales. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Méritocratie » ?",
      back: "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de autocensure est-elle importante ?",
      back: "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Effet établissement » ?",
      back: "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de compétence est-elle importante ?",
      back: "Capacité à mobiliser des connaissances et savoir-faire dans une situation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Qualification » ?",
      back: "Ensemble des capacités reconnues pour exercer une activité professionnelle.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mobilité sociale est-elle importante ?",
      back: "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Massification scolaire » ?",
      choices: [
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation.",
        "Processus de choix et d’affectation dans les parcours de formation.",
        "Transmission intergénérationnelle de positions et d’inégalités sociales.",
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages."
      ],
      answer: 0,
      explanation: "Massification scolaire : Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Démocratisation scolaire » ?",
      choices: [
        "Réduction des inégalités d’accès et de réussite entre groupes sociaux.",
        "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements.",
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation."
      ],
      answer: 0,
      explanation: "Démocratisation scolaire : Réduction des inégalités d’accès et de réussite entre groupes sociaux. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Égalité des chances » ?",
      choices: [
        "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires.",
        "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme.",
        "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité.",
        "Ensemble des capacités reconnues pour exercer une activité professionnelle."
      ],
      answer: 0,
      explanation: "Égalité des chances : Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Capital culturel » ?",
      choices: [
        "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires.",
        "Transmission intergénérationnelle de positions et d’inégalités sociales.",
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie."
      ],
      answer: 0,
      explanation: "Capital culturel : Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Socialisation » ?",
      choices: [
        "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques.",
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation.",
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation."
      ],
      answer: 0,
      explanation: "Socialisation : Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Orientation » ?",
      choices: [
        "Processus de choix et d’affectation dans les parcours de formation.",
        "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité.",
        "Ensemble des capacités reconnues pour exercer une activité professionnelle.",
        "Réduction des inégalités d’accès et de réussite entre groupes sociaux."
      ],
      answer: 0,
      explanation: "Orientation : Processus de choix et d’affectation dans les parcours de formation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Ségrégation scolaire » ?",
      choices: [
        "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements.",
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires."
      ],
      answer: 0,
      explanation: "Ségrégation scolaire : Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Rendement du diplôme » ?",
      choices: [
        "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme.",
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation.",
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation.",
        "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires."
      ],
      answer: 0,
      explanation: "Rendement du diplôme : Avantages professionnels ou sociaux associés à l’obtention d’un diplôme. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Reproduction sociale » ?",
      choices: [
        "Transmission intergénérationnelle de positions et d’inégalités sociales.",
        "Ensemble des capacités reconnues pour exercer une activité professionnelle.",
        "Réduction des inégalités d’accès et de réussite entre groupes sociaux.",
        "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques."
      ],
      answer: 0,
      explanation: "Reproduction sociale : Transmission intergénérationnelle de positions et d’inégalités sociales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Méritocratie » ?",
      choices: [
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires.",
        "Processus de choix et d’affectation dans les parcours de formation."
      ],
      answer: 0,
      explanation: "Méritocratie : Principe qui attribue les positions aux mérites individuels évalués selon des critères. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Autocensure » ?",
      choices: [
        "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité.",
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation.",
        "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires.",
        "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements."
      ],
      answer: 0,
      explanation: "Autocensure : Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Effet établissement » ?",
      choices: [
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages.",
        "Réduction des inégalités d’accès et de réussite entre groupes sociaux.",
        "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques.",
        "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme."
      ],
      answer: 0,
      explanation: "Effet établissement : Influence des caractéristiques et pratiques d’un établissement sur les apprentissages. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Compétence » ?",
      choices: [
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation.",
        "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires.",
        "Processus de choix et d’affectation dans les parcours de formation.",
        "Transmission intergénérationnelle de positions et d’inégalités sociales."
      ],
      answer: 0,
      explanation: "Compétence : Capacité à mobiliser des connaissances et savoir-faire dans une situation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Qualification » ?",
      choices: [
        "Ensemble des capacités reconnues pour exercer une activité professionnelle.",
        "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires.",
        "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements.",
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères."
      ],
      answer: 0,
      explanation: "Qualification : Ensemble des capacités reconnues pour exercer une activité professionnelle. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Mobilité sociale » ?",
      choices: [
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques.",
        "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme.",
        "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité."
      ],
      answer: 0,
      explanation: "Mobilité sociale : Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Massification scolaire » ? — question 2",
      choices: [
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation.",
        "Processus de choix et d’affectation dans les parcours de formation.",
        "Transmission intergénérationnelle de positions et d’inégalités sociales.",
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages."
      ],
      answer: 0,
      explanation: "Massification scolaire : Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Démocratisation scolaire » ? — question 2",
      choices: [
        "Réduction des inégalités d’accès et de réussite entre groupes sociaux.",
        "Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements.",
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation."
      ],
      answer: 0,
      explanation: "Démocratisation scolaire : Réduction des inégalités d’accès et de réussite entre groupes sociaux. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Égalité des chances » ? — question 2",
      choices: [
        "Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires.",
        "Avantages professionnels ou sociaux associés à l’obtention d’un diplôme.",
        "Renoncement à certaines possibilités par anticipation de leur difficulté ou de leur inaccessibilité.",
        "Ensemble des capacités reconnues pour exercer une activité professionnelle."
      ],
      answer: 0,
      explanation: "Égalité des chances : Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Capital culturel » ? — question 2",
      choices: [
        "Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires.",
        "Transmission intergénérationnelle de positions et d’inégalités sociales.",
        "Influence des caractéristiques et pratiques d’un établissement sur les apprentissages.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie."
      ],
      answer: 0,
      explanation: "Capital culturel : Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle est l’action de l’École sur les destins individuels et sur l’évolution de la société ? », quelle proposition définit correctement « Socialisation » ? — question 2",
      choices: [
        "Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques.",
        "Principe qui attribue les positions aux mérites individuels évalués selon des critères.",
        "Capacité à mobiliser des connaissances et savoir-faire dans une situation.",
        "Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation."
      ],
      answer: 0,
      explanation: "Socialisation : Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Massification scolaire",
      level: "Facile",
      statement: "Définissez massification scolaire et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Augmentation de l’accès à l’enseignement et de la durée moyenne de scolarisation. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Démocratisation scolaire",
      level: "Facile",
      statement: "Expliquez le rôle de démocratisation scolaire dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Réduction des inégalités d’accès et de réussite entre groupes sociaux. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Égalité des chances",
      level: "Facile",
      statement: "Distinguez égalité des chances de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Principe selon lequel les origines sociales ne devraient pas déterminer les parcours scolaires. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Capital culturel",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant capital culturel à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Ensemble de ressources culturelles qui facilitent les apprentissages et la familiarité avec les attentes scolaires. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Socialisation",
      level: "Intermédiaire",
      statement: "Définissez socialisation et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Processus d’apprentissage et d’intériorisation de normes, valeurs et pratiques. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Orientation",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de orientation dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Processus de choix et d’affectation dans les parcours de formation. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Ségrégation scolaire",
      level: "Intermédiaire",
      statement: "Distinguez ségrégation scolaire de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Concentration différenciée des élèves selon leur origine sociale ou leur niveau dans les établissements. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Rendement du diplôme",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant rendement du diplôme à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Avantages professionnels ou sociaux associés à l’obtention d’un diplôme. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Reproduction sociale",
      level: "Difficile",
      statement: "Définissez reproduction sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Transmission intergénérationnelle de positions et d’inégalités sociales. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Méritocratie",
      level: "Difficile",
      statement: "Expliquez le rôle de méritocratie dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Principe qui attribue les positions aux mérites individuels évalués selon des critères. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-mobilite': {
  title: "Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Mesurer la mobilité",
      body: [
        "La mobilité intergénérationnelle compare la position d’un individu à celle de ses parents. La mobilité intragénérationnelle observe les changements au cours de la vie.",
        "Les tables de mobilité permettent de décrire les trajectoires. Les tables de destinée partent de l’origine ; les tables de recrutement partent de la position atteinte."
      ]
    },
    {
      heading: "2. Mobilité structurelle et fluidité",
      body: [
        "La transformation de la structure des emplois peut produire de la mobilité structurelle, même sans changement des chances relatives entre origines sociales.",
        "La fluidité sociale s’intéresse aux chances relatives d’accès aux positions selon l’origine. Elle ne se confond donc pas avec le volume global de mobilité."
      ]
    },
    {
      heading: "3. Les facteurs de mobilité",
      body: [
        "La scolarisation, les diplômes, les transformations économiques, les migrations et les changements de structure familiale peuvent influencer les trajectoires.",
        "Les ressources familiales et les réseaux contribuent également aux possibilités d’orientation et d’insertion, sans déterminer mécaniquement les destins individuels."
      ]
    },
    {
      heading: "4. Limites et déclassement",
      body: [
        "La mobilité observée ne signifie pas toujours une amélioration des conditions de vie : les positions peuvent changer dans une structure d’emplois elle-même transformée.",
        "Le déclassement peut être défini par rapport au diplôme, à l’origine sociale ou à une position antérieure. Il faut préciser le critère retenu."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Lire soigneusement les lignes, colonnes, pourcentages et catégories d’une table de mobilité.",
        "Distinguer mobilité absolue, mobilité relative, mobilité structurelle et fluidité. Une comparaison temporelle exige des catégories comparables."
      ]
    }
  
      ,{ heading: 'Lire une table de mobilité avec méthode', body: ['La mobilité sociale désigne le changement de position sociale d’un individu ou d’un groupe. Les tables de destinée décrivent la position atteinte par les individus selon leur origine sociale ; les tables de recrutement décrivent l’origine sociale des membres d’une catégorie. Le sens de lecture et le dénominateur doivent être identifiés avant toute interprétation.', 'La mobilité observée combine la mobilité structurelle, liée à la transformation de la structure des emplois, et la mobilité nette ou fluidité sociale, qui renvoie aux différences de chances relatives d’accès aux positions. Une société peut connaître une mobilité importante parce que les catégories professionnelles ont changé de taille sans que l’égalité des chances progresse dans la même proportion.', 'L’école, les diplômes, les ressources familiales, les réseaux, les transformations économiques et les politiques publiques influencent les trajectoires. Les tables ne décrivent pas toute l’expérience individuelle et reposent sur des catégories qui peuvent évoluer. Il faut donc commenter les tendances sans transformer une association statistique en causalité automatique.'] }],
  keyPoints: [
    "La mobilité intergénérationnelle compare la position d’un individu à celle de ses parents. La mobilité intragénérationnelle observe les changements au cours de la vie.",
    "La transformation de la structure des emplois peut produire de la mobilité structurelle, même sans changement des chances relatives entre origines sociales.",
    "La scolarisation, les diplômes, les transformations économiques, les migrations et les changements de structure familiale peuvent influencer les trajectoires.",
    "La mobilité observée ne signifie pas toujours une amélioration des conditions de vie : les positions peuvent changer dans une structure d’emplois elle-même transformée.",
    "Lire soigneusement les lignes, colonnes, pourcentages et catégories d’une table de mobilité.",
    "Auteurs et repères : Sorokin, Bourdieu et analyses statistiques de la mobilité."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Mobilité sociale » ?",
      back: "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mobilité intergénérationnelle est-elle importante ?",
      back: "Comparaison entre la position sociale d’un individu et celle de ses parents. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Mobilité intragénérationnelle » ?",
      back: "Évolution de la position sociale d’un individu au cours de sa propre vie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mobilité structurelle est-elle importante ?",
      back: "Mobilité liée à la transformation de la structure des emplois et des catégories sociales. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Fluidité sociale » ?",
      back: "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de table de destinée est-elle importante ?",
      back: "Table indiquant la position sociale atteinte selon l’origine sociale. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Table de recrutement » ?",
      back: "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de déclassement est-elle importante ?",
      back: "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Reproduction sociale » ?",
      back: "Maintien relatif des positions sociales d’une génération à l’autre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de ressources familiales est-elle importante ?",
      back: "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Diplôme » ?",
      back: "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de structure des emplois est-elle importante ?",
      back: "Répartition des emplois entre secteurs, professions et qualifications. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Ascension sociale » ?",
      back: "Accès à une position socialement plus élevée que celle de l’origine.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de déclassement scolaire est-elle importante ?",
      back: "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité des chances » ?",
      back: "Principe d’indépendance des trajectoires à l’égard des origines sociales.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mobilité sociale est-elle importante ?",
      back: "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Mobilité intergénérationnelle » ?",
      back: "Comparaison entre la position sociale d’un individu et celle de ses parents.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mobilité intragénérationnelle est-elle importante ?",
      back: "Évolution de la position sociale d’un individu au cours de sa propre vie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Mobilité structurelle » ?",
      back: "Mobilité liée à la transformation de la structure des emplois et des catégories sociales.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de fluidité sociale est-elle importante ?",
      back: "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Table de destinée » ?",
      back: "Table indiquant la position sociale atteinte selon l’origine sociale.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de table de recrutement est-elle importante ?",
      back: "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Déclassement » ?",
      back: "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de reproduction sociale est-elle importante ?",
      back: "Maintien relatif des positions sociales d’une génération à l’autre. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Ressources familiales » ?",
      back: "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de diplôme est-elle importante ?",
      back: "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Structure des emplois » ?",
      back: "Répartition des emplois entre secteurs, professions et qualifications.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de ascension sociale est-elle importante ?",
      back: "Accès à une position socialement plus élevée que celle de l’origine. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Déclassement scolaire » ?",
      back: "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité des chances est-elle importante ?",
      back: "Principe d’indépendance des trajectoires à l’égard des origines sociales. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité sociale » ?",
      choices: [
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Table indiquant la position sociale atteinte selon l’origine sociale.",
        "Maintien relatif des positions sociales d’une génération à l’autre.",
        "Répartition des emplois entre secteurs, professions et qualifications."
      ],
      answer: 0,
      explanation: "Mobilité sociale : Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité intergénérationnelle » ?",
      choices: [
        "Comparaison entre la position sociale d’un individu et celle de ses parents.",
        "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée.",
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
        "Accès à une position socialement plus élevée que celle de l’origine."
      ],
      answer: 0,
      explanation: "Mobilité intergénérationnelle : Comparaison entre la position sociale d’un individu et celle de ses parents. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité intragénérationnelle » ?",
      choices: [
        "Évolution de la position sociale d’un individu au cours de sa propre vie.",
        "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine.",
        "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles.",
        "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé."
      ],
      answer: 0,
      explanation: "Mobilité intragénérationnelle : Évolution de la position sociale d’un individu au cours de sa propre vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité structurelle » ?",
      choices: [
        "Mobilité liée à la transformation de la structure des emplois et des catégories sociales.",
        "Maintien relatif des positions sociales d’une génération à l’autre.",
        "Répartition des emplois entre secteurs, professions et qualifications.",
        "Principe d’indépendance des trajectoires à l’égard des origines sociales."
      ],
      answer: 0,
      explanation: "Mobilité structurelle : Mobilité liée à la transformation de la structure des emplois et des catégories sociales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Fluidité sociale » ?",
      choices: [
        "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale.",
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
        "Accès à une position socialement plus élevée que celle de l’origine.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie."
      ],
      answer: 0,
      explanation: "Fluidité sociale : Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Table de destinée » ?",
      choices: [
        "Table indiquant la position sociale atteinte selon l’origine sociale.",
        "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles.",
        "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé.",
        "Comparaison entre la position sociale d’un individu et celle de ses parents."
      ],
      answer: 0,
      explanation: "Table de destinée : Table indiquant la position sociale atteinte selon l’origine sociale. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Table de recrutement » ?",
      choices: [
        "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée.",
        "Répartition des emplois entre secteurs, professions et qualifications.",
        "Principe d’indépendance des trajectoires à l’égard des origines sociales.",
        "Évolution de la position sociale d’un individu au cours de sa propre vie."
      ],
      answer: 0,
      explanation: "Table de recrutement : Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Déclassement » ?",
      choices: [
        "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine.",
        "Accès à une position socialement plus élevée que celle de l’origine.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Mobilité liée à la transformation de la structure des emplois et des catégories sociales."
      ],
      answer: 0,
      explanation: "Déclassement : Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Reproduction sociale » ?",
      choices: [
        "Maintien relatif des positions sociales d’une génération à l’autre.",
        "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé.",
        "Comparaison entre la position sociale d’un individu et celle de ses parents.",
        "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale."
      ],
      answer: 0,
      explanation: "Reproduction sociale : Maintien relatif des positions sociales d’une génération à l’autre. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Ressources familiales » ?",
      choices: [
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
        "Principe d’indépendance des trajectoires à l’égard des origines sociales.",
        "Évolution de la position sociale d’un individu au cours de sa propre vie.",
        "Table indiquant la position sociale atteinte selon l’origine sociale."
      ],
      answer: 0,
      explanation: "Ressources familiales : Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Diplôme » ?",
      choices: [
        "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Mobilité liée à la transformation de la structure des emplois et des catégories sociales.",
        "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée."
      ],
      answer: 0,
      explanation: "Diplôme : Certification de formation pouvant faciliter l’accès à certaines positions professionnelles. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Structure des emplois » ?",
      choices: [
        "Répartition des emplois entre secteurs, professions et qualifications.",
        "Comparaison entre la position sociale d’un individu et celle de ses parents.",
        "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale.",
        "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine."
      ],
      answer: 0,
      explanation: "Structure des emplois : Répartition des emplois entre secteurs, professions et qualifications. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Ascension sociale » ?",
      choices: [
        "Accès à une position socialement plus élevée que celle de l’origine.",
        "Évolution de la position sociale d’un individu au cours de sa propre vie.",
        "Table indiquant la position sociale atteinte selon l’origine sociale.",
        "Maintien relatif des positions sociales d’une génération à l’autre."
      ],
      answer: 0,
      explanation: "Ascension sociale : Accès à une position socialement plus élevée que celle de l’origine. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Déclassement scolaire » ?",
      choices: [
        "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé.",
        "Mobilité liée à la transformation de la structure des emplois et des catégories sociales.",
        "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée.",
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille."
      ],
      answer: 0,
      explanation: "Déclassement scolaire : Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Égalité des chances » ?",
      choices: [
        "Principe d’indépendance des trajectoires à l’égard des origines sociales.",
        "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale.",
        "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine.",
        "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles."
      ],
      answer: 0,
      explanation: "Égalité des chances : Principe d’indépendance des trajectoires à l’égard des origines sociales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité sociale » ? — question 2",
      choices: [
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie.",
        "Table indiquant la position sociale atteinte selon l’origine sociale.",
        "Maintien relatif des positions sociales d’une génération à l’autre.",
        "Répartition des emplois entre secteurs, professions et qualifications."
      ],
      answer: 0,
      explanation: "Mobilité sociale : Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité intergénérationnelle » ? — question 2",
      choices: [
        "Comparaison entre la position sociale d’un individu et celle de ses parents.",
        "Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée.",
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
        "Accès à une position socialement plus élevée que celle de l’origine."
      ],
      answer: 0,
      explanation: "Mobilité intergénérationnelle : Comparaison entre la position sociale d’un individu et celle de ses parents. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité intragénérationnelle » ? — question 2",
      choices: [
        "Évolution de la position sociale d’un individu au cours de sa propre vie.",
        "Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine.",
        "Certification de formation pouvant faciliter l’accès à certaines positions professionnelles.",
        "Situation dans laquelle le niveau de diplôme dépasse celui généralement requis pour l’emploi occupé."
      ],
      answer: 0,
      explanation: "Mobilité intragénérationnelle : Évolution de la position sociale d’un individu au cours de sa propre vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Mobilité structurelle » ? — question 2",
      choices: [
        "Mobilité liée à la transformation de la structure des emplois et des catégories sociales.",
        "Maintien relatif des positions sociales d’une génération à l’autre.",
        "Répartition des emplois entre secteurs, professions et qualifications.",
        "Principe d’indépendance des trajectoires à l’égard des origines sociales."
      ],
      answer: 0,
      explanation: "Mobilité structurelle : Mobilité liée à la transformation de la structure des emplois et des catégories sociales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ? », quelle proposition définit correctement « Fluidité sociale » ? — question 2",
      choices: [
        "Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale.",
        "Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille.",
        "Accès à une position socialement plus élevée que celle de l’origine.",
        "Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie."
      ],
      answer: 0,
      explanation: "Fluidité sociale : Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Mobilité sociale",
      level: "Facile",
      statement: "Définissez mobilité sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Changement de position sociale d’un individu par rapport à son origine ou au cours de sa vie. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Mobilité intergénérationnelle",
      level: "Facile",
      statement: "Expliquez le rôle de mobilité intergénérationnelle dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Comparaison entre la position sociale d’un individu et celle de ses parents. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Mobilité intragénérationnelle",
      level: "Facile",
      statement: "Distinguez mobilité intragénérationnelle de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Évolution de la position sociale d’un individu au cours de sa propre vie. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Mobilité structurelle",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant mobilité structurelle à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Mobilité liée à la transformation de la structure des emplois et des catégories sociales. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Fluidité sociale",
      level: "Intermédiaire",
      statement: "Définissez fluidité sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Degré auquel les chances d’accéder aux positions sociales sont indépendantes de l’origine sociale. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Table de destinée",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de table de destinée dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Table indiquant la position sociale atteinte selon l’origine sociale. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Table de recrutement",
      level: "Intermédiaire",
      statement: "Distinguez table de recrutement de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Table indiquant l’origine sociale des personnes appartenant à une catégorie donnée. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Déclassement",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant déclassement à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Position sociale ou professionnelle inférieure à celle attendue au regard du diplôme ou de l’origine. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Reproduction sociale",
      level: "Difficile",
      statement: "Définissez reproduction sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Maintien relatif des positions sociales d’une génération à l’autre. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Ressources familiales",
      level: "Difficile",
      statement: "Expliquez le rôle de ressources familiales dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Ensemble des ressources économiques, culturelles et relationnelles transmises ou mobilisables dans la famille. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-travail': {
  title: "Quelles mutations du travail et de l’emploi ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quelles mutations du travail et de l’emploi ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Distinguer travail et emploi",
      body: [
        "Le travail désigne une activité productive au sens large ; l’emploi renvoie à une position professionnelle reconnue. Les activités domestiques et bénévoles sont du travail sans constituer nécessairement un emploi.",
        "Le salariat reste une forme majeure d’emploi, mais les statuts et les organisations se diversifient."
      ]
    },
    {
      heading: "2. Transformations des organisations",
      body: [
        "La tertiarisation, la numérisation et l’automatisation transforment les tâches, les qualifications et les relations professionnelles.",
        "Les formes d’organisation évoluent : travail en équipe, objectifs, autonomie relative, contrôle numérique et télétravail peuvent coexister."
      ]
    },
    {
      heading: "3. Flexibilité et précarité",
      body: [
        "La flexibilité peut permettre d’ajuster l’activité aux variations de la demande. Elle peut aussi transférer une partie des risques sur les travailleurs.",
        "La précarité ne se réduit pas au type de contrat : elle peut concerner les horaires, les revenus, la continuité d’activité ou l’accès aux droits."
      ]
    },
    {
      heading: "4. Sens et intégration",
      body: [
        "Le travail peut procurer un revenu, une reconnaissance, des relations sociales et un sentiment d’utilité. Il peut aussi être source de contraintes et de risques.",
        "L’intégration professionnelle dépend de la qualité de l’emploi, des collectifs de travail, des protections et de la possibilité de participer aux décisions."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Analyser séparément les transformations des statuts, des tâches, des organisations et des conditions de travail.",
        "Éviter les affirmations générales sur « la fin du travail » : distinguer les secteurs, les professions et les groupes concernés."
      ]
    }
  
      ,{ heading: 'Comprendre les effets des nouvelles organisations du travail', body: ['Le travail désigne une activité productive, rémunérée ou non, tandis que l’emploi correspond à une activité professionnelle déclarée et rémunérée dans un cadre institutionnel. Cette distinction permet de ne pas confondre travail domestique, bénévolat, activité indépendante et emploi salarié. Les transformations de l’emploi ne résument donc pas toutes les transformations du travail.', 'La numérisation, l’automatisation, la sous-traitance et les nouvelles formes de management modifient le contenu des tâches, l’autonomie et le contrôle. Certaines organisations renforcent la coopération et la polyvalence ; d’autres intensifient les rythmes, standardisent les procédures ou rendent les horaires plus imprévisibles. Les effets varient selon les métiers, les qualifications et les secteurs.', 'La flexibilité peut aider les entreprises à s’adapter à la demande, mais elle peut aussi accroître l’instabilité des revenus et des horaires. Le télétravail élargit l’autonomie pour certaines activités tout en brouillant parfois la frontière entre temps professionnel et temps personnel. Une analyse doit distinguer la flexibilité choisie de la flexibilité subie et tenir compte des protections collectives.'] }],
  keyPoints: [
    "Le travail désigne une activité productive au sens large ; l’emploi renvoie à une position professionnelle reconnue. Les activités domestiques et bénévoles sont du travail sans constituer nécessairement un emploi.",
    "La tertiarisation, la numérisation et l’automatisation transforment les tâches, les qualifications et les relations professionnelles.",
    "La flexibilité peut permettre d’ajuster l’activité aux variations de la demande. Elle peut aussi transférer une partie des risques sur les travailleurs.",
    "Le travail peut procurer un revenu, une reconnaissance, des relations sociales et un sentiment d’utilité. Il peut aussi être source de contraintes et de risques.",
    "Analyser séparément les transformations des statuts, des tâches, des organisations et des conditions de travail.",
    "Auteurs et repères : Durkheim, Marx, Taylor, Friedmann et approches contemporaines du travail."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Travail » ?",
      back: "Activité productive mobilisant des compétences et des efforts, rémunérée ou non.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de emploi est-elle importante ?",
      back: "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Chômage » ?",
      back: "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de salariat est-elle importante ?",
      back: "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Tertiarisation » ?",
      back: "Augmentation de la part des activités de services dans l’emploi et la production.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de précarisation est-elle importante ?",
      back: "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Flexibilité » ?",
      back: "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de qualification est-elle importante ?",
      back: "Ensemble des compétences reconnues nécessaires à une activité professionnelle. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Taylorisme » ?",
      back: "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de télétravail est-elle importante ?",
      back: "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Automatisation » ?",
      back: "Remplacement ou assistance de certaines tâches par des systèmes techniques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de plateformisation est-elle importante ?",
      back: "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Identité professionnelle » ?",
      back: "Représentation de soi et appartenance construites autour de l’activité et du métier.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de conditions de travail est-elle importante ?",
      back: "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Qualité de l’emploi » ?",
      back: "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de travail est-elle importante ?",
      back: "Activité productive mobilisant des compétences et des efforts, rémunérée ou non. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Emploi » ?",
      back: "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de chômage est-elle importante ?",
      back: "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Salariat » ?",
      back: "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de tertiarisation est-elle importante ?",
      back: "Augmentation de la part des activités de services dans l’emploi et la production. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Précarisation » ?",
      back: "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de flexibilité est-elle importante ?",
      back: "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Qualification » ?",
      back: "Ensemble des compétences reconnues nécessaires à une activité professionnelle.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de taylorisme est-elle importante ?",
      back: "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Télétravail » ?",
      back: "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de automatisation est-elle importante ?",
      back: "Remplacement ou assistance de certaines tâches par des systèmes techniques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Plateformisation » ?",
      back: "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de identité professionnelle est-elle importante ?",
      back: "Représentation de soi et appartenance construites autour de l’activité et du métier. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Conditions de travail » ?",
      back: "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de qualité de l’emploi est-elle importante ?",
      back: "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Travail » ?",
      choices: [
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non.",
        "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible.",
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs."
      ],
      answer: 0,
      explanation: "Travail : Activité productive mobilisant des compétences et des efforts, rémunérée ou non. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Emploi » ?",
      choices: [
        "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné.",
        "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail.",
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
        "Représentation de soi et appartenance construites autour de l’activité et du métier."
      ],
      answer: 0,
      explanation: "Emploi : Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Chômage » ?",
      choices: [
        "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT.",
        "Ensemble des compétences reconnues nécessaires à une activité professionnelle.",
        "Remplacement ou assistance de certaines tâches par des systèmes techniques.",
        "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle."
      ],
      answer: 0,
      explanation: "Chômage : Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Salariat » ?",
      choices: [
        "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération.",
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs.",
        "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail."
      ],
      answer: 0,
      explanation: "Salariat : Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Tertiarisation » ?",
      choices: [
        "Augmentation de la part des activités de services dans l’emploi et la production.",
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
        "Représentation de soi et appartenance construites autour de l’activité et du métier.",
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non."
      ],
      answer: 0,
      explanation: "Tertiarisation : Augmentation de la part des activités de services dans l’emploi et la production. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Précarisation » ?",
      choices: [
        "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible.",
        "Remplacement ou assistance de certaines tâches par des systèmes techniques.",
        "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle.",
        "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné."
      ],
      answer: 0,
      explanation: "Précarisation : Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Flexibilité » ?",
      choices: [
        "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail.",
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs.",
        "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail.",
        "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT."
      ],
      answer: 0,
      explanation: "Flexibilité : Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Qualification » ?",
      choices: [
        "Ensemble des compétences reconnues nécessaires à une activité professionnelle.",
        "Représentation de soi et appartenance construites autour de l’activité et du métier.",
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non.",
        "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération."
      ],
      answer: 0,
      explanation: "Qualification : Ensemble des compétences reconnues nécessaires à une activité professionnelle. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Taylorisme » ?",
      choices: [
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
        "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle.",
        "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné.",
        "Augmentation de la part des activités de services dans l’emploi et la production."
      ],
      answer: 0,
      explanation: "Taylorisme : Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Télétravail » ?",
      choices: [
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
        "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail.",
        "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT.",
        "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible."
      ],
      answer: 0,
      explanation: "Télétravail : Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Automatisation » ?",
      choices: [
        "Remplacement ou assistance de certaines tâches par des systèmes techniques.",
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non.",
        "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération.",
        "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail."
      ],
      answer: 0,
      explanation: "Automatisation : Remplacement ou assistance de certaines tâches par des systèmes techniques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Plateformisation » ?",
      choices: [
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs.",
        "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné.",
        "Augmentation de la part des activités de services dans l’emploi et la production.",
        "Ensemble des compétences reconnues nécessaires à une activité professionnelle."
      ],
      answer: 0,
      explanation: "Plateformisation : Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Identité professionnelle » ?",
      choices: [
        "Représentation de soi et appartenance construites autour de l’activité et du métier.",
        "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT.",
        "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible.",
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution."
      ],
      answer: 0,
      explanation: "Identité professionnelle : Représentation de soi et appartenance construites autour de l’activité et du métier. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Conditions de travail » ?",
      choices: [
        "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle.",
        "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération.",
        "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail.",
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques."
      ],
      answer: 0,
      explanation: "Conditions de travail : Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Qualité de l’emploi » ?",
      choices: [
        "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail.",
        "Augmentation de la part des activités de services dans l’emploi et la production.",
        "Ensemble des compétences reconnues nécessaires à une activité professionnelle.",
        "Remplacement ou assistance de certaines tâches par des systèmes techniques."
      ],
      answer: 0,
      explanation: "Qualité de l’emploi : Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Travail » ? — question 2",
      choices: [
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non.",
        "Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible.",
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs."
      ],
      answer: 0,
      explanation: "Travail : Activité productive mobilisant des compétences et des efforts, rémunérée ou non. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Emploi » ? — question 2",
      choices: [
        "Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné.",
        "Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail.",
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
        "Représentation de soi et appartenance construites autour de l’activité et du métier."
      ],
      answer: 0,
      explanation: "Emploi : Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Chômage » ? — question 2",
      choices: [
        "Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT.",
        "Ensemble des compétences reconnues nécessaires à une activité professionnelle.",
        "Remplacement ou assistance de certaines tâches par des systèmes techniques.",
        "Ensemble des dimensions matérielles, organisationnelles et relationnelles de l’activité professionnelle."
      ],
      answer: 0,
      explanation: "Chômage : Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Salariat » ? — question 2",
      choices: [
        "Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération.",
        "Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution.",
        "Organisation d’activités par des plateformes numériques mettant en relation offreurs et demandeurs.",
        "Appréciation multidimensionnelle portant notamment sur rémunération, stabilité, autonomie et conditions de travail."
      ],
      answer: 0,
      explanation: "Salariat : Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles mutations du travail et de l’emploi ? », quelle proposition définit correctement « Tertiarisation » ? — question 2",
      choices: [
        "Augmentation de la part des activités de services dans l’emploi et la production.",
        "Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques.",
        "Représentation de soi et appartenance construites autour de l’activité et du métier.",
        "Activité productive mobilisant des compétences et des efforts, rémunérée ou non."
      ],
      answer: 0,
      explanation: "Tertiarisation : Augmentation de la part des activités de services dans l’emploi et la production. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Travail",
      level: "Facile",
      statement: "Définissez travail et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Activité productive mobilisant des compétences et des efforts, rémunérée ou non. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Emploi",
      level: "Facile",
      statement: "Expliquez le rôle de emploi dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Situation dans laquelle une personne exerce une activité professionnelle reconnue dans un cadre donné. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Chômage",
      level: "Facile",
      statement: "Distinguez chômage de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Situation d’une personne sans emploi, disponible et à la recherche d’un emploi selon la définition du BIT. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Salariat",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant salariat à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Relation d’emploi dans laquelle un salarié travaille sous l’autorité d’un employeur en échange d’une rémunération. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Tertiarisation",
      level: "Intermédiaire",
      statement: "Définissez tertiarisation et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Augmentation de la part des activités de services dans l’emploi et la production. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Précarisation",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de précarisation dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Développement de situations d’emploi caractérisées par une instabilité ou une protection plus faible. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Flexibilité",
      level: "Intermédiaire",
      statement: "Distinguez flexibilité de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Capacité d’adapter les volumes, horaires, rémunérations ou organisations du travail. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Qualification",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant qualification à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Ensemble des compétences reconnues nécessaires à une activité professionnelle. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Taylorisme",
      level: "Difficile",
      statement: "Définissez taylorisme et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Organisation du travail fondée sur la division des tâches et la séparation entre conception et exécution. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Télétravail",
      level: "Difficile",
      statement: "Expliquez le rôle de télétravail dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Organisation dans laquelle une activité professionnelle est effectuée à distance grâce aux outils numériques. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-engagement': {
  title: "Comment expliquer l’engagement politique dans les sociétés démocratiques ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Comment expliquer l’engagement politique dans les sociétés démocratiques ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Les formes de participation",
      body: [
        "L’engagement politique ne se limite pas au vote. Il peut prendre la forme d’adhésion, de militantisme, de manifestation, de pétition, de boycott ou d’actions numériques.",
        "Les formes conventionnelles et non conventionnelles peuvent se compléter et évoluer selon les contextes."
      ]
    },
    {
      heading: "2. Ressources et socialisation",
      body: [
        "Les ressources disponibles — temps, compétences, réseaux, moyens matériels — influencent la possibilité de participer. La socialisation familiale, scolaire et professionnelle contribue à former les dispositions politiques.",
        "Les expériences et les événements peuvent aussi déclencher ou transformer un engagement. Les trajectoires restent diverses."
      ]
    },
    {
      heading: "3. Pourquoi agir collectivement ?",
      body: [
        "Le paradoxe de l’action collective souligne qu’un individu peut bénéficier d’un résultat collectif sans participer à sa production. Les organisations utilisent parfois des incitations et des solidarités pour favoriser la mobilisation.",
        "Les rétributions symboliques, l’identité collective et le sentiment d’efficacité peuvent expliquer l’engagement au-delà des seuls bénéfices matériels."
      ]
    },
    {
      heading: "4. Transformations des mobilisations",
      body: [
        "Les mouvements sociaux utilisent des répertoires d’action qui varient selon les périodes : grèves, manifestations, campagnes, occupations, actions en ligne.",
        "Le numérique facilite la diffusion et la coordination, mais ne remplace pas automatiquement l’organisation, les ressources et les relations durables."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Distinguer participation électorale, militantisme, action collective et abstention.",
        "Expliquer l’engagement par une combinaison de ressources, socialisation, incitations, identités et contexte politique."
      ]
    }
  
      ,{ heading: 'Des répertoires d’action qui évoluent', body: ['La participation politique ne se limite pas au vote. Elle comprend l’adhésion à un parti ou à une association, le militantisme, les manifestations, les pétitions, les grèves, les boycotts et les mobilisations numériques. Ces formes d’action peuvent se compléter ou répondre à des objectifs différents : influencer une décision, défendre une cause ou rendre visible un problème.', 'L’engagement dépend des ressources disponibles, comme le temps, les compétences, les réseaux et les ressources économiques, mais aussi de la socialisation politique. La famille, l’école, les groupes de pairs, les médias et les expériences collectives contribuent à former des habitudes et des opinions. Ces facteurs rendent certaines formes de participation plus accessibles que d’autres.', 'Les mobilisations contemporaines utilisent souvent des organisations souples, des campagnes en ligne et des coalitions ponctuelles. Le numérique réduit certains coûts de coordination, mais ne garantit pas une participation durable ni un accès égal à la visibilité. Pour analyser un mouvement, il faut identifier ses objectifs, ses acteurs, ses ressources, ses modes d’action et ses résultats.'] }],
  keyPoints: [
    "L’engagement politique ne se limite pas au vote. Il peut prendre la forme d’adhésion, de militantisme, de manifestation, de pétition, de boycott ou d’actions numériques.",
    "Les ressources disponibles — temps, compétences, réseaux, moyens matériels — influencent la possibilité de participer. La socialisation familiale, scolaire et professionnelle contribue à former les dispositions politiques.",
    "Le paradoxe de l’action collective souligne qu’un individu peut bénéficier d’un résultat collectif sans participer à sa production. Les organisations utilisent parfois des incitations et des solidarités pour favoriser la mobilisation.",
    "Les mouvements sociaux utilisent des répertoires d’action qui varient selon les périodes : grèves, manifestations, campagnes, occupations, actions en ligne.",
    "Distinguer participation électorale, militantisme, action collective et abstention.",
    "Auteurs et repères : Olson, Hirschman, Tilly, Gaxie et travaux contemporains de science politique."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Engagement politique » ?",
      back: "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de participation conventionnelle est-elle importante ?",
      back: "Participation institutionnalisée, comme le vote ou l’adhésion à un parti. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Participation non conventionnelle » ?",
      back: "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de militantisme est-elle importante ?",
      back: "Engagement régulier et organisé au service d’une cause ou d’une organisation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Répertoire d’action » ?",
      back: "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de incitation sélective est-elle importante ?",
      back: "Avantage ou coût individuel lié à la participation à une organisation collective. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Ressources militantes » ?",
      back: "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de socialisation politique est-elle importante ?",
      back: "Processus par lequel se forment les attitudes, valeurs et pratiques politiques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Rétribution symbolique » ?",
      back: "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de mouvement social est-elle importante ?",
      back: "Action collective durable portée par des groupes autour d’une revendication ou d’un changement. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Abstention » ?",
      back: "Fait de ne pas participer à un scrutin auquel on est inscrit.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de action collective est-elle importante ?",
      back: "Coordination d’individus poursuivant un objectif commun. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Opportunité politique » ?",
      back: "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de cause collective est-elle importante ?",
      back: "Enjeu présenté comme méritant une action commune. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Répertoire numérique » ?",
      back: "Ensemble d’actions militantes utilisant les outils et réseaux numériques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de engagement politique est-elle importante ?",
      back: "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Participation conventionnelle » ?",
      back: "Participation institutionnalisée, comme le vote ou l’adhésion à un parti.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de participation non conventionnelle est-elle importante ?",
      back: "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Militantisme » ?",
      back: "Engagement régulier et organisé au service d’une cause ou d’une organisation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de répertoire d’action est-elle importante ?",
      back: "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Incitation sélective » ?",
      back: "Avantage ou coût individuel lié à la participation à une organisation collective.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de ressources militantes est-elle importante ?",
      back: "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Socialisation politique » ?",
      back: "Processus par lequel se forment les attitudes, valeurs et pratiques politiques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de rétribution symbolique est-elle importante ?",
      back: "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Mouvement social » ?",
      back: "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de abstention est-elle importante ?",
      back: "Fait de ne pas participer à un scrutin auquel on est inscrit. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Action collective » ?",
      back: "Coordination d’individus poursuivant un objectif commun.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de opportunité politique est-elle importante ?",
      back: "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Cause collective » ?",
      back: "Enjeu présenté comme méritant une action commune.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de répertoire numérique est-elle importante ?",
      back: "Ensemble d’actions militantes utilisant les outils et réseaux numériques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Engagement politique » ?",
      choices: [
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause.",
        "Avantage ou coût individuel lié à la participation à une organisation collective.",
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
        "Coordination d’individus poursuivant un objectif commun."
      ],
      answer: 0,
      explanation: "Engagement politique : Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Participation conventionnelle » ?",
      choices: [
        "Participation institutionnalisée, comme le vote ou l’adhésion à un parti.",
        "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir.",
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation."
      ],
      answer: 0,
      explanation: "Participation conventionnelle : Participation institutionnalisée, comme le vote ou l’adhésion à un parti. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Participation non conventionnelle » ?",
      choices: [
        "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition.",
        "Processus par lequel se forment les attitudes, valeurs et pratiques politiques.",
        "Fait de ne pas participer à un scrutin auquel on est inscrit.",
        "Enjeu présenté comme méritant une action commune."
      ],
      answer: 0,
      explanation: "Participation non conventionnelle : Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Militantisme » ?",
      choices: [
        "Engagement régulier et organisé au service d’une cause ou d’une organisation.",
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
        "Coordination d’individus poursuivant un objectif commun.",
        "Ensemble d’actions militantes utilisant les outils et réseaux numériques."
      ],
      answer: 0,
      explanation: "Militantisme : Engagement régulier et organisé au service d’une cause ou d’une organisation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Répertoire d’action » ?",
      choices: [
        "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique.",
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation.",
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause."
      ],
      answer: 0,
      explanation: "Répertoire d’action : Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Incitation sélective » ?",
      choices: [
        "Avantage ou coût individuel lié à la participation à une organisation collective.",
        "Fait de ne pas participer à un scrutin auquel on est inscrit.",
        "Enjeu présenté comme méritant une action commune.",
        "Participation institutionnalisée, comme le vote ou l’adhésion à un parti."
      ],
      answer: 0,
      explanation: "Incitation sélective : Avantage ou coût individuel lié à la participation à une organisation collective. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Ressources militantes » ?",
      choices: [
        "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir.",
        "Coordination d’individus poursuivant un objectif commun.",
        "Ensemble d’actions militantes utilisant les outils et réseaux numériques.",
        "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition."
      ],
      answer: 0,
      explanation: "Ressources militantes : Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Socialisation politique » ?",
      choices: [
        "Processus par lequel se forment les attitudes, valeurs et pratiques politiques.",
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation.",
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause.",
        "Engagement régulier et organisé au service d’une cause ou d’une organisation."
      ],
      answer: 0,
      explanation: "Socialisation politique : Processus par lequel se forment les attitudes, valeurs et pratiques politiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Rétribution symbolique » ?",
      choices: [
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
        "Enjeu présenté comme méritant une action commune.",
        "Participation institutionnalisée, comme le vote ou l’adhésion à un parti.",
        "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique."
      ],
      answer: 0,
      explanation: "Rétribution symbolique : Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Mouvement social » ?",
      choices: [
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
        "Ensemble d’actions militantes utilisant les outils et réseaux numériques.",
        "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition.",
        "Avantage ou coût individuel lié à la participation à une organisation collective."
      ],
      answer: 0,
      explanation: "Mouvement social : Action collective durable portée par des groupes autour d’une revendication ou d’un changement. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Abstention » ?",
      choices: [
        "Fait de ne pas participer à un scrutin auquel on est inscrit.",
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause.",
        "Engagement régulier et organisé au service d’une cause ou d’une organisation.",
        "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir."
      ],
      answer: 0,
      explanation: "Abstention : Fait de ne pas participer à un scrutin auquel on est inscrit. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Action collective » ?",
      choices: [
        "Coordination d’individus poursuivant un objectif commun.",
        "Participation institutionnalisée, comme le vote ou l’adhésion à un parti.",
        "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique.",
        "Processus par lequel se forment les attitudes, valeurs et pratiques politiques."
      ],
      answer: 0,
      explanation: "Action collective : Coordination d’individus poursuivant un objectif commun. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Opportunité politique » ?",
      choices: [
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation.",
        "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition.",
        "Avantage ou coût individuel lié à la participation à une organisation collective.",
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement."
      ],
      answer: 0,
      explanation: "Opportunité politique : Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Cause collective » ?",
      choices: [
        "Enjeu présenté comme méritant une action commune.",
        "Engagement régulier et organisé au service d’une cause ou d’une organisation.",
        "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir.",
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement."
      ],
      answer: 0,
      explanation: "Cause collective : Enjeu présenté comme méritant une action commune. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Répertoire numérique » ?",
      choices: [
        "Ensemble d’actions militantes utilisant les outils et réseaux numériques.",
        "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique.",
        "Processus par lequel se forment les attitudes, valeurs et pratiques politiques.",
        "Fait de ne pas participer à un scrutin auquel on est inscrit."
      ],
      answer: 0,
      explanation: "Répertoire numérique : Ensemble d’actions militantes utilisant les outils et réseaux numériques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Engagement politique » ? — question 2",
      choices: [
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause.",
        "Avantage ou coût individuel lié à la participation à une organisation collective.",
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
        "Coordination d’individus poursuivant un objectif commun."
      ],
      answer: 0,
      explanation: "Engagement politique : Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Participation conventionnelle » ? — question 2",
      choices: [
        "Participation institutionnalisée, comme le vote ou l’adhésion à un parti.",
        "Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir.",
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation."
      ],
      answer: 0,
      explanation: "Participation conventionnelle : Participation institutionnalisée, comme le vote ou l’adhésion à un parti. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Participation non conventionnelle » ? — question 2",
      choices: [
        "Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition.",
        "Processus par lequel se forment les attitudes, valeurs et pratiques politiques.",
        "Fait de ne pas participer à un scrutin auquel on est inscrit.",
        "Enjeu présenté comme méritant une action commune."
      ],
      answer: 0,
      explanation: "Participation non conventionnelle : Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Militantisme » ? — question 2",
      choices: [
        "Engagement régulier et organisé au service d’une cause ou d’une organisation.",
        "Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement.",
        "Coordination d’individus poursuivant un objectif commun.",
        "Ensemble d’actions militantes utilisant les outils et réseaux numériques."
      ],
      answer: 0,
      explanation: "Militantisme : Engagement régulier et organisé au service d’une cause ou d’une organisation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Comment expliquer l’engagement politique dans les sociétés démocratiques ? », quelle proposition définit correctement « Répertoire d’action » ? — question 2",
      choices: [
        "Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique.",
        "Action collective durable portée par des groupes autour d’une revendication ou d’un changement.",
        "Caractéristique du contexte institutionnel et politique qui facilite ou contraint la mobilisation.",
        "Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause."
      ],
      answer: 0,
      explanation: "Répertoire d’action : Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Engagement politique",
      level: "Facile",
      statement: "Définissez engagement politique et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Participation volontaire à des actions visant à influencer les décisions collectives ou défendre une cause. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Participation conventionnelle",
      level: "Facile",
      statement: "Expliquez le rôle de participation conventionnelle dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Participation institutionnalisée, comme le vote ou l’adhésion à un parti. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Participation non conventionnelle",
      level: "Facile",
      statement: "Distinguez participation non conventionnelle de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Action collective en dehors des canaux institutionnels habituels, comme une manifestation ou une pétition. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Militantisme",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant militantisme à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Engagement régulier et organisé au service d’une cause ou d’une organisation. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Répertoire d’action",
      level: "Intermédiaire",
      statement: "Définissez répertoire d’action et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Ensemble des moyens d’action collective disponibles et utilisés dans un contexte historique. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Incitation sélective",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de incitation sélective dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Avantage ou coût individuel lié à la participation à une organisation collective. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Ressources militantes",
      level: "Intermédiaire",
      statement: "Distinguez ressources militantes de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Temps, compétences, argent, réseaux et savoir-faire mobilisables pour agir. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Socialisation politique",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant socialisation politique à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Processus par lequel se forment les attitudes, valeurs et pratiques politiques. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Rétribution symbolique",
      level: "Difficile",
      statement: "Définissez rétribution symbolique et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Satisfaction, reconnaissance ou sentiment d’utilité associé à l’engagement. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Mouvement social",
      level: "Difficile",
      statement: "Expliquez le rôle de mouvement social dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Action collective durable portée par des groupes autour d’une revendication ou d’un changement. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-justice': {
  title: "Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Définir l’égalité et l’équité",
      body: [
        "L’égalité peut porter sur les droits, les chances ou les situations. Ces dimensions ne conduisent pas toujours aux mêmes politiques.",
        "L’équité consiste à tenir compte de différences pertinentes pour rendre une règle plus juste ; elle ne signifie pas simplement traiter chacun différemment."
      ]
    },
    {
      heading: "2. Conceptions de la justice",
      body: [
        "Les conceptions libérales mettent l’accent sur les libertés et les droits. Rawls défend des libertés égales, une juste égalité des chances et un principe de différence favorable aux moins avantagés.",
        "D’autres approches insistent sur les capacités réelles, les besoins, la reconnaissance ou les effets des inégalités sur la participation sociale."
      ]
    },
    {
      heading: "3. Redistribution et protection sociale",
      body: [
        "La redistribution peut être verticale, lorsqu’elle réduit les écarts entre niveaux de revenu, ou horizontale, lorsqu’elle couvre des risques partagés.",
        "Les prélèvements et transferts financent des services et protections, mais soulèvent des débats sur leur efficacité, leur financement et leurs effets incitatifs."
      ]
    },
    {
      heading: "4. Quelles inégalités accepter ?",
      body: [
        "Certaines différences peuvent être considérées comme compatibles avec la justice si elles respectent les droits et améliorent la situation des moins favorisés. D’autres entretiennent des privilèges ou empêchent l’accès réel aux opportunités.",
        "Il faut examiner les causes, les conséquences et les mécanismes de reproduction des inégalités, plutôt que juger uniquement leur ampleur."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Préciser le critère de justice mobilisé : droits, chances, besoins, résultats ou capacités.",
        "Distinguer égalité formelle et égalité réelle, puis discuter les effets attendus et les limites des politiques."
      ]
    }
  
      ,{ heading: 'Distinguer égalité, équité et redistribution', body: ['L’égalité peut concerner les droits, les ressources, les chances ou les résultats. Ces dimensions ne conduisent pas aux mêmes politiques. L’égalité formelle garantit les mêmes règles, tandis que l’égalité réelle s’intéresse aux écarts de situation et aux obstacles qui empêchent certains individus d’exercer effectivement leurs droits.', 'Les conceptions de la justice sociale divergent sur la place de la liberté, du mérite, des besoins et de la solidarité. Une approche peut privilégier l’égalité des chances, une autre la réduction des inégalités de ressources ou la protection des plus défavorisés. Dans un raisonnement, il faut présenter le critère retenu et ses conséquences concrètes plutôt que réduire une théorie à un slogan.', 'La redistribution verticale réduit les écarts de niveau de vie entre ménages par les prélèvements et les prestations. La redistribution horizontale protège contre certains risques au cours de la vie, comme la maladie, le chômage ou la vieillesse. Les politiques sociales peuvent réduire la pauvreté et sécuriser les parcours, mais elles soulèvent des questions de financement, de ciblage et d’incitations.'] }],
  keyPoints: [
    "L’égalité peut porter sur les droits, les chances ou les situations. Ces dimensions ne conduisent pas toujours aux mêmes politiques.",
    "Les conceptions libérales mettent l’accent sur les libertés et les droits. Rawls défend des libertés égales, une juste égalité des chances et un principe de différence favorable aux moins avantagés.",
    "La redistribution peut être verticale, lorsqu’elle réduit les écarts entre niveaux de revenu, ou horizontale, lorsqu’elle couvre des risques partagés.",
    "Certaines différences peuvent être considérées comme compatibles avec la justice si elles respectent les droits et améliorent la situation des moins favorisés. D’autres entretiennent des privilèges ou empêchent l’accès réel aux opportunités.",
    "Préciser le critère de justice mobilisé : droits, chances, besoins, résultats ou capacités.",
    "Auteurs et repères : Aristote, Rousseau, Rawls, Sen et débats sur la redistribution."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Justice sociale » ?",
      back: "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité est-elle importante ?",
      back: "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Équité » ?",
      back: "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité des droits est-elle importante ?",
      back: "Garantie de droits identiques pour les individus. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité des chances » ?",
      back: "Principe visant à limiter l’influence des origines sur l’accès aux positions.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité des situations est-elle importante ?",
      back: "Réduction des écarts de ressources ou de conditions de vie. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Redistribution » ?",
      back: "Transferts et prélèvements publics qui modifient la répartition des revenus.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de protection sociale est-elle importante ?",
      back: "Ensemble des dispositifs collectifs couvrant les risques sociaux. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Imposition progressive » ?",
      back: "Système dans lequel le taux d’imposition augmente avec la base imposable.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de méritocratie est-elle importante ?",
      back: "Principe d’attribution des positions selon des mérites évalués. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Discrimination » ?",
      back: "Traitement défavorable fondé sur un critère illégitime ou prohibé.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de justice distributive est-elle importante ?",
      back: "Réflexion sur la répartition juste des biens, ressources et avantages. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Rawls » ?",
      back: "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de incitation est-elle importante ?",
      back: "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Pauvreté » ?",
      back: "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de justice sociale est-elle importante ?",
      back: "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité » ?",
      back: "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de équité est-elle importante ?",
      back: "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité des droits » ?",
      back: "Garantie de droits identiques pour les individus.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de égalité des chances est-elle importante ?",
      back: "Principe visant à limiter l’influence des origines sur l’accès aux positions. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Égalité des situations » ?",
      back: "Réduction des écarts de ressources ou de conditions de vie.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de redistribution est-elle importante ?",
      back: "Transferts et prélèvements publics qui modifient la répartition des revenus. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Protection sociale » ?",
      back: "Ensemble des dispositifs collectifs couvrant les risques sociaux.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de imposition progressive est-elle importante ?",
      back: "Système dans lequel le taux d’imposition augmente avec la base imposable. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Méritocratie » ?",
      back: "Principe d’attribution des positions selon des mérites évalués.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de discrimination est-elle importante ?",
      back: "Traitement défavorable fondé sur un critère illégitime ou prohibé. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Justice distributive » ?",
      back: "Réflexion sur la répartition juste des biens, ressources et avantages.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de rawls est-elle importante ?",
      back: "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Incitation » ?",
      back: "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de pauvreté est-elle importante ?",
      back: "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Justice sociale » ?",
      choices: [
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société.",
        "Réduction des écarts de ressources ou de conditions de vie.",
        "Système dans lequel le taux d’imposition augmente avec la base imposable.",
        "Réflexion sur la répartition juste des biens, ressources et avantages."
      ],
      answer: 0,
      explanation: "Justice sociale : Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité » ?",
      choices: [
        "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu.",
        "Transferts et prélèvements publics qui modifient la répartition des revenus.",
        "Principe d’attribution des positions selon des mérites évalués.",
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés."
      ],
      answer: 0,
      explanation: "Égalité : Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Équité » ?",
      choices: [
        "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes.",
        "Ensemble des dispositifs collectifs couvrant les risques sociaux.",
        "Traitement défavorable fondé sur un critère illégitime ou prohibé.",
        "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement."
      ],
      answer: 0,
      explanation: "Équité : Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité des droits » ?",
      choices: [
        "Garantie de droits identiques pour les individus.",
        "Système dans lequel le taux d’imposition augmente avec la base imposable.",
        "Réflexion sur la répartition juste des biens, ressources et avantages.",
        "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable."
      ],
      answer: 0,
      explanation: "Égalité des droits : Garantie de droits identiques pour les individus. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité des chances » ?",
      choices: [
        "Principe visant à limiter l’influence des origines sur l’accès aux positions.",
        "Principe d’attribution des positions selon des mérites évalués.",
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés.",
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société."
      ],
      answer: 0,
      explanation: "Égalité des chances : Principe visant à limiter l’influence des origines sur l’accès aux positions. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité des situations » ?",
      choices: [
        "Réduction des écarts de ressources ou de conditions de vie.",
        "Traitement défavorable fondé sur un critère illégitime ou prohibé.",
        "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement.",
        "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu."
      ],
      answer: 0,
      explanation: "Égalité des situations : Réduction des écarts de ressources ou de conditions de vie. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Redistribution » ?",
      choices: [
        "Transferts et prélèvements publics qui modifient la répartition des revenus.",
        "Réflexion sur la répartition juste des biens, ressources et avantages.",
        "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable.",
        "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes."
      ],
      answer: 0,
      explanation: "Redistribution : Transferts et prélèvements publics qui modifient la répartition des revenus. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Protection sociale » ?",
      choices: [
        "Ensemble des dispositifs collectifs couvrant les risques sociaux.",
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés.",
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société.",
        "Garantie de droits identiques pour les individus."
      ],
      answer: 0,
      explanation: "Protection sociale : Ensemble des dispositifs collectifs couvrant les risques sociaux. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Imposition progressive » ?",
      choices: [
        "Système dans lequel le taux d’imposition augmente avec la base imposable.",
        "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement.",
        "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu.",
        "Principe visant à limiter l’influence des origines sur l’accès aux positions."
      ],
      answer: 0,
      explanation: "Imposition progressive : Système dans lequel le taux d’imposition augmente avec la base imposable. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Méritocratie » ?",
      choices: [
        "Principe d’attribution des positions selon des mérites évalués.",
        "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable.",
        "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes.",
        "Réduction des écarts de ressources ou de conditions de vie."
      ],
      answer: 0,
      explanation: "Méritocratie : Principe d’attribution des positions selon des mérites évalués. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Discrimination » ?",
      choices: [
        "Traitement défavorable fondé sur un critère illégitime ou prohibé.",
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société.",
        "Garantie de droits identiques pour les individus.",
        "Transferts et prélèvements publics qui modifient la répartition des revenus."
      ],
      answer: 0,
      explanation: "Discrimination : Traitement défavorable fondé sur un critère illégitime ou prohibé. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Justice distributive » ?",
      choices: [
        "Réflexion sur la répartition juste des biens, ressources et avantages.",
        "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu.",
        "Principe visant à limiter l’influence des origines sur l’accès aux positions.",
        "Ensemble des dispositifs collectifs couvrant les risques sociaux."
      ],
      answer: 0,
      explanation: "Justice distributive : Réflexion sur la répartition juste des biens, ressources et avantages. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Rawls » ?",
      choices: [
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés.",
        "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes.",
        "Réduction des écarts de ressources ou de conditions de vie.",
        "Système dans lequel le taux d’imposition augmente avec la base imposable."
      ],
      answer: 0,
      explanation: "Rawls : Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Incitation » ?",
      choices: [
        "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement.",
        "Garantie de droits identiques pour les individus.",
        "Transferts et prélèvements publics qui modifient la répartition des revenus.",
        "Principe d’attribution des positions selon des mérites évalués."
      ],
      answer: 0,
      explanation: "Incitation : Mécanisme qui modifie les coûts ou bénéfices associés à un comportement. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Pauvreté » ?",
      choices: [
        "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable.",
        "Principe visant à limiter l’influence des origines sur l’accès aux positions.",
        "Ensemble des dispositifs collectifs couvrant les risques sociaux.",
        "Traitement défavorable fondé sur un critère illégitime ou prohibé."
      ],
      answer: 0,
      explanation: "Pauvreté : Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Justice sociale » ? — question 2",
      choices: [
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société.",
        "Réduction des écarts de ressources ou de conditions de vie.",
        "Système dans lequel le taux d’imposition augmente avec la base imposable.",
        "Réflexion sur la répartition juste des biens, ressources et avantages."
      ],
      answer: 0,
      explanation: "Justice sociale : Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité » ? — question 2",
      choices: [
        "Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu.",
        "Transferts et prélèvements publics qui modifient la répartition des revenus.",
        "Principe d’attribution des positions selon des mérites évalués.",
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés."
      ],
      answer: 0,
      explanation: "Égalité : Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Équité » ? — question 2",
      choices: [
        "Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes.",
        "Ensemble des dispositifs collectifs couvrant les risques sociaux.",
        "Traitement défavorable fondé sur un critère illégitime ou prohibé.",
        "Mécanisme qui modifie les coûts ou bénéfices associés à un comportement."
      ],
      answer: 0,
      explanation: "Équité : Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité des droits » ? — question 2",
      choices: [
        "Garantie de droits identiques pour les individus.",
        "Système dans lequel le taux d’imposition augmente avec la base imposable.",
        "Réflexion sur la répartition juste des biens, ressources et avantages.",
        "Situation de ressources insuffisantes pour atteindre un niveau de vie considéré comme acceptable."
      ],
      answer: 0,
      explanation: "Égalité des droits : Garantie de droits identiques pour les individus. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? », quelle proposition définit correctement « Égalité des chances » ? — question 2",
      choices: [
        "Principe visant à limiter l’influence des origines sur l’accès aux positions.",
        "Principe d’attribution des positions selon des mérites évalués.",
        "Philosophe qui propose des principes de justice garantissant libertés égales et attention aux moins avantagés.",
        "Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société."
      ],
      answer: 0,
      explanation: "Égalité des chances : Principe visant à limiter l’influence des origines sur l’accès aux positions. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Justice sociale",
      level: "Facile",
      statement: "Définissez justice sociale et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Principe d’organisation visant à évaluer la répartition des ressources, droits et positions dans une société. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Égalité",
      level: "Facile",
      statement: "Expliquez le rôle de égalité dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Principe selon lequel des personnes doivent bénéficier de mêmes droits ou traitements selon le critère retenu. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Équité",
      level: "Facile",
      statement: "Distinguez équité de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Principe d’ajustement des règles aux situations pour tenir compte des différences pertinentes. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Égalité des droits",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant égalité des droits à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Garantie de droits identiques pour les individus. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Égalité des chances",
      level: "Intermédiaire",
      statement: "Définissez égalité des chances et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Principe visant à limiter l’influence des origines sur l’accès aux positions. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Égalité des situations",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de égalité des situations dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Réduction des écarts de ressources ou de conditions de vie. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Redistribution",
      level: "Intermédiaire",
      statement: "Distinguez redistribution de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Transferts et prélèvements publics qui modifient la répartition des revenus. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Protection sociale",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant protection sociale à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Ensemble des dispositifs collectifs couvrant les risques sociaux. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Imposition progressive",
      level: "Difficile",
      statement: "Définissez imposition progressive et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Système dans lequel le taux d’imposition augmente avec la base imposable. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Méritocratie",
      level: "Difficile",
      statement: "Expliquez le rôle de méritocratie dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Principe d’attribution des positions selon des mérites évalués. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-environnement': {
  title: "Quelle action publique pour l’environnement ?",
  objectives: [
    "Maîtriser les notions centrales du questionnement : Quelle action publique pour l’environnement ?",
    "Expliquer les mécanismes économiques et sociaux associés.",
    "Mobiliser des exemples et des données avec prudence.",
    "Construire un raisonnement structuré et nuancé."
  ],
  course: [
    {
      heading: "1. Pourquoi une action publique ?",
      body: [
        "Les dommages environnementaux sont souvent des externalités : les coûts imposés à la société ne sont pas entièrement intégrés dans les décisions privées.",
        "Les ressources communes peuvent être surexploitées lorsque chacun a intérêt à prélever davantage et que les règles de gestion sont insuffisantes."
      ]
    },
    {
      heading: "2. Les instruments économiques",
      body: [
        "Une taxe environnementale modifie les prix afin d’inciter à réduire les dommages. Une subvention soutient des alternatives moins polluantes.",
        "Les quotas échangeables fixent une quantité maximale et permettent des échanges de droits. Chaque instrument comporte des conditions d’efficacité et des effets distributifs."
      ]
    },
    {
      heading: "3. Normes et institutions",
      body: [
        "Les normes imposent des obligations et peuvent être adaptées aux risques. Les politiques publiques combinent souvent réglementation, fiscalité, information et investissements.",
        "La gestion des biens communs suppose des règles légitimes, une surveillance, des sanctions proportionnées et la participation des usagers."
      ]
    },
    {
      heading: "4. Échelles et justice",
      body: [
        "Les problèmes environnementaux dépassent souvent les frontières et nécessitent une coopération internationale. Les responsabilités historiques et les capacités d’action sont inégalement réparties.",
        "Les politiques doivent prendre en compte les effets sur les ménages, les territoires et les générations futures afin de limiter les injustices de la transition."
      ]
    },
    {
      heading: "5. Méthode",
      body: [
        "Identifier la défaillance de marché, l’échelle du problème et les acteurs concernés.",
        "Comparer les instruments selon leur efficacité, leur coût, leur équité, leur acceptabilité et leur capacité à être contrôlés."
      ]
    }
  
      ,{ heading: 'Comparer les instruments de l’action publique', body: ['Les externalités négatives apparaissent lorsqu’une activité impose des coûts à des tiers sans que ceux-ci soient intégralement pris en compte dans le prix. La pollution en est un exemple. L’action publique cherche à modifier les incitations ou les règles afin de rapprocher les décisions privées de l’intérêt collectif, tout en tenant compte des coûts de mise en œuvre et des effets sociaux.', 'Une taxe environnementale augmente le coût des activités polluantes et incite à réduire les émissions lorsque les acteurs peuvent modifier leurs comportements. Un marché de quotas fixe une quantité totale d’émissions autorisées et permet l’échange de droits. Une norme impose une limite ou une technologie. Les subventions peuvent soutenir l’innovation et l’adoption d’équipements moins polluants.', 'Aucun instrument n’est automatiquement supérieur dans toutes les situations. Le choix dépend de la mesure des dommages, de la capacité à contrôler les émissions, de l’existence d’alternatives et de l’acceptabilité sociale. Une politique efficace doit également traiter les inégalités d’exposition et de pouvoir d’achat, ainsi que la coordination entre échelles locale, nationale et internationale.'] }],
  keyPoints: [
    "Les dommages environnementaux sont souvent des externalités : les coûts imposés à la société ne sont pas entièrement intégrés dans les décisions privées.",
    "Une taxe environnementale modifie les prix afin d’inciter à réduire les dommages. Une subvention soutient des alternatives moins polluantes.",
    "Les normes imposent des obligations et peuvent être adaptées aux risques. Les politiques publiques combinent souvent réglementation, fiscalité, information et investissements.",
    "Les problèmes environnementaux dépassent souvent les frontières et nécessitent une coopération internationale. Les responsabilités historiques et les capacités d’action sont inégalement réparties.",
    "Identifier la défaillance de marché, l’échelle du problème et les acteurs concernés.",
    "Auteurs et repères : Pigou, Coase, Ostrom et politiques climatiques contemporaines."
  ],
  method: [
    "Définir les termes du sujet et délimiter le questionnement.",
    "Présenter les mécanismes en identifiant les acteurs et les variables.",
    "Mobiliser un exemple ou une donnée contextualisée et datée.",
    "Distinguer corrélation, causalité et jugement normatif.",
    "Conclure en répondant précisément à la question."
  ],
  flashcards: [
    {
      front: "Comment définir « Bien commun » ?",
      back: "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de externalité est-elle importante ?",
      back: "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Taxe pigouvienne » ?",
      back: "Taxe visant à faire prendre en compte le coût social d’une externalité négative.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de norme environnementale est-elle importante ?",
      back: "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Quota échangeable » ?",
      back: "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de passager clandestin est-elle importante ?",
      back: "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Transition écologique » ?",
      back: "Transformation des modes de production et de consommation afin de réduire les pressions environnementales.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de principe pollueur-payeur est-elle importante ?",
      back: "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Subvention » ?",
      back: "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de réglementation est-elle importante ?",
      back: "Ensemble de règles contraignantes encadrant les comportements. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Coopération internationale » ?",
      back: "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de soutenabilité est-elle importante ?",
      back: "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Empreinte carbone » ?",
      back: "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de biodiversité est-elle importante ?",
      back: "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Acceptabilité sociale » ?",
      back: "Degré d’adhésion ou de contestation d’une mesure par les populations concernées.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de bien commun est-elle importante ?",
      back: "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Externalité » ?",
      back: "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de taxe pigouvienne est-elle importante ?",
      back: "Taxe visant à faire prendre en compte le coût social d’une externalité négative. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Norme environnementale » ?",
      back: "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de quota échangeable est-elle importante ?",
      back: "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Passager clandestin » ?",
      back: "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de transition écologique est-elle importante ?",
      back: "Transformation des modes de production et de consommation afin de réduire les pressions environnementales. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Principe pollueur-payeur » ?",
      back: "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de subvention est-elle importante ?",
      back: "Aide publique qui réduit le coût d’une activité jugée souhaitable. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Réglementation » ?",
      back: "Ensemble de règles contraignantes encadrant les comportements.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de coopération internationale est-elle importante ?",
      back: "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Soutenabilité » ?",
      back: "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de empreinte carbone est-elle importante ?",
      back: "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Comment définir « Biodiversité » ?",
      back: "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes.",
      tags: [
        "SES",
        "notion"
      ]
    },
    {
      front: "Pourquoi la notion de acceptabilité sociale est-elle importante ?",
      back: "Degré d’adhésion ou de contestation d’une mesure par les populations concernées. Elle aide à analyser les mécanismes et les enjeux du chapitre.",
      tags: [
        "SES",
        "notion"
      ]
    }
  ],
  quiz: [
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Bien commun » ?",
      choices: [
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui.",
        "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation.",
        "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures."
      ],
      answer: 0,
      explanation: "Bien commun : Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Externalité » ?",
      choices: [
        "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché.",
        "Transformation des modes de production et de consommation afin de réduire les pressions environnementales.",
        "Ensemble de règles contraignantes encadrant les comportements.",
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit."
      ],
      answer: 0,
      explanation: "Externalité : Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Taxe pigouvienne » ?",
      choices: [
        "Taxe visant à faire prendre en compte le coût social d’une externalité négative.",
        "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation.",
        "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières.",
        "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes."
      ],
      answer: 0,
      explanation: "Taxe pigouvienne : Taxe visant à faire prendre en compte le coût social d’une externalité négative. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Norme environnementale » ?",
      choices: [
        "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques.",
        "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures.",
        "Degré d’adhésion ou de contestation d’une mesure par les populations concernées."
      ],
      answer: 0,
      explanation: "Norme environnementale : Règle imposant des limites ou des obligations afin de réduire les dommages écologiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Quota échangeable » ?",
      choices: [
        "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés.",
        "Ensemble de règles contraignantes encadrant les comportements.",
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit.",
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui."
      ],
      answer: 0,
      explanation: "Quota échangeable : Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Passager clandestin » ?",
      choices: [
        "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation.",
        "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières.",
        "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes.",
        "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché."
      ],
      answer: 0,
      explanation: "Passager clandestin : Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Facile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Transition écologique » ?",
      choices: [
        "Transformation des modes de production et de consommation afin de réduire les pressions environnementales.",
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures.",
        "Degré d’adhésion ou de contestation d’une mesure par les populations concernées.",
        "Taxe visant à faire prendre en compte le coût social d’une externalité négative."
      ],
      answer: 0,
      explanation: "Transition écologique : Transformation des modes de production et de consommation afin de réduire les pressions environnementales. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Principe pollueur-payeur » ?",
      choices: [
        "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation.",
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit.",
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui.",
        "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques."
      ],
      answer: 0,
      explanation: "Principe pollueur-payeur : Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Subvention » ?",
      choices: [
        "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
        "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes.",
        "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché.",
        "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés."
      ],
      answer: 0,
      explanation: "Subvention : Aide publique qui réduit le coût d’une activité jugée souhaitable. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Réglementation » ?",
      choices: [
        "Ensemble de règles contraignantes encadrant les comportements.",
        "Degré d’adhésion ou de contestation d’une mesure par les populations concernées.",
        "Taxe visant à faire prendre en compte le coût social d’une externalité négative.",
        "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation."
      ],
      answer: 0,
      explanation: "Réglementation : Ensemble de règles contraignantes encadrant les comportements. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Coopération internationale » ?",
      choices: [
        "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières.",
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui.",
        "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques.",
        "Transformation des modes de production et de consommation afin de réduire les pressions environnementales."
      ],
      answer: 0,
      explanation: "Coopération internationale : Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Soutenabilité » ?",
      choices: [
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures.",
        "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché.",
        "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés.",
        "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation."
      ],
      answer: 0,
      explanation: "Soutenabilité : Capacité à répondre aux besoins présents sans compromettre ceux des générations futures. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Empreinte carbone » ?",
      choices: [
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit.",
        "Taxe visant à faire prendre en compte le coût social d’une externalité négative.",
        "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation.",
        "Aide publique qui réduit le coût d’une activité jugée souhaitable."
      ],
      answer: 0,
      explanation: "Empreinte carbone : Quantification des émissions de gaz à effet de serre associées à une activité ou un produit. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Biodiversité » ?",
      choices: [
        "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes.",
        "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques.",
        "Transformation des modes de production et de consommation afin de réduire les pressions environnementales.",
        "Ensemble de règles contraignantes encadrant les comportements."
      ],
      answer: 0,
      explanation: "Biodiversité : Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Intermédiaire",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Acceptabilité sociale » ?",
      choices: [
        "Degré d’adhésion ou de contestation d’une mesure par les populations concernées.",
        "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés.",
        "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation.",
        "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières."
      ],
      answer: 0,
      explanation: "Acceptabilité sociale : Degré d’adhésion ou de contestation d’une mesure par les populations concernées. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Bien commun » ? — question 2",
      choices: [
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui.",
        "Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation.",
        "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures."
      ],
      answer: 0,
      explanation: "Bien commun : Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Externalité » ? — question 2",
      choices: [
        "Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché.",
        "Transformation des modes de production et de consommation afin de réduire les pressions environnementales.",
        "Ensemble de règles contraignantes encadrant les comportements.",
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit."
      ],
      answer: 0,
      explanation: "Externalité : Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Taxe pigouvienne » ? — question 2",
      choices: [
        "Taxe visant à faire prendre en compte le coût social d’une externalité négative.",
        "Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation.",
        "Coordination entre États et acteurs pour traiter des problèmes dépassant les frontières.",
        "Diversité du vivant à plusieurs niveaux : gènes, espèces et écosystèmes."
      ],
      answer: 0,
      explanation: "Taxe pigouvienne : Taxe visant à faire prendre en compte le coût social d’une externalité négative. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Norme environnementale » ? — question 2",
      choices: [
        "Règle imposant des limites ou des obligations afin de réduire les dommages écologiques.",
        "Aide publique qui réduit le coût d’une activité jugée souhaitable.",
        "Capacité à répondre aux besoins présents sans compromettre ceux des générations futures.",
        "Degré d’adhésion ou de contestation d’une mesure par les populations concernées."
      ],
      answer: 0,
      explanation: "Norme environnementale : Règle imposant des limites ou des obligations afin de réduire les dommages écologiques. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    },
    {
      level: "Difficile",
      question: "Dans le chapitre « Quelle action publique pour l’environnement ? », quelle proposition définit correctement « Quota échangeable » ? — question 2",
      choices: [
        "Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés.",
        "Ensemble de règles contraignantes encadrant les comportements.",
        "Quantification des émissions de gaz à effet de serre associées à une activité ou un produit.",
        "Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui."
      ],
      answer: 0,
      explanation: "Quota échangeable : Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés. Les autres propositions correspondent à d’autres notions du programme.",
      skill: "Maîtrise des notions et mécanismes"
    }
  ],
  exercises: [
    {
      title: "Définir : Bien commun",
      level: "Facile",
      statement: "Définissez bien commun et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Ressource dont l’usage est difficilement excluable et dont la consommation peut réduire la disponibilité pour autrui. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Externalité",
      level: "Facile",
      statement: "Expliquez le rôle de externalité dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Effet d’une activité sur des tiers qui n’est pas entièrement intégré dans le prix de marché. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Taxe pigouvienne",
      level: "Facile",
      statement: "Distinguez taxe pigouvienne de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Taxe visant à faire prendre en compte le coût social d’une externalité négative. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Norme environnementale",
      level: "Intermédiaire",
      statement: "Construisez un raisonnement mobilisant norme environnementale à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Règle imposant des limites ou des obligations afin de réduire les dommages écologiques. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Quota échangeable",
      level: "Intermédiaire",
      statement: "Définissez quota échangeable et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Plafond global d’émissions ou d’usage accompagné de droits pouvant être échangés. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Définir : Passager clandestin",
      level: "Intermédiaire",
      statement: "Expliquez le rôle de passager clandestin dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Acteur qui bénéficie d’un bien collectif sans contribuer à son financement ou à sa préservation. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Expliquer : Transition écologique",
      level: "Intermédiaire",
      statement: "Distinguez transition écologique de deux notions proches.",
      correction: "La réponse doit définir précisément la notion : Transformation des modes de production et de consommation afin de réduire les pressions environnementales. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Distinguer : Principe pollueur-payeur",
      level: "Difficile",
      statement: "Construisez un raisonnement mobilisant principe pollueur-payeur à partir d’une situation économique ou sociale.",
      correction: "La réponse doit définir précisément la notion : Principe selon lequel le responsable d’une pollution doit supporter les coûts associés à sa prévention ou réparation. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Raisonner : Subvention",
      level: "Difficile",
      statement: "Définissez subvention et illustrez la notion par un exemple.",
      correction: "La réponse doit définir précisément la notion : Aide publique qui réduit le coût d’une activité jugée souhaitable. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    },
    {
      title: "Mobiliser : Réglementation",
      level: "Difficile",
      statement: "Expliquez le rôle de réglementation dans le questionnement du chapitre.",
      correction: "La réponse doit définir précisément la notion : Ensemble de règles contraignantes encadrant les comportements. Elle doit ensuite expliciter le mécanisme, préciser les acteurs concernés et proposer un exemple pertinent.",
      skills: [
        "Définition",
        "Analyse",
        "Argumentation"
      ],
      hints: [
        "Repérez le mécanisme principal du chapitre.",
        "Distinguez les faits, les mécanismes et les jugements de valeur."
      ]
    }
  ],
  sources: [
    {
      title: "Programmes et ressources en sciences économiques et sociales — voie GT",
      institution: "Ministère de l’Éducation nationale — Éduscol",
      url: "https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt",
      consultedAt: "2026-11-01",
      supports: [
        "Programme officiel de spécialité SES de terminale générale"
      ]
    }
  ],
  sourceNote: "Ressource pédagogique originale alignée sur le programme officiel de SES de Terminale générale. Les données chiffrées doivent être actualisées à partir de sources statistiques fiables avant usage en dissertation ; validation disciplinaire humaine recommandée.",
  validationStatus: "draft"
},
  'ses-methodes': {
    title: "Méthodes : raisonnement, dissertation, épreuve composée et exploitation de documents",
    objectives: [
      "Maîtriser les notions fondamentales de SES liées à questionnement économique et mécanisme causal.",
      "Utiliser une démarche rigoureuse pour analyser et résoudre une situation de SES.",
      "Justifier les résultats, interpréter les démarches et identifier leurs limites."
    ],
    course: [
      { heading: "1. Questionnement économique", body: ["En SES, questionnement économique constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement questionnement économique, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "2. Mécanisme causal", body: ["En SES, mécanisme causal constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement mécanisme causal, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "3. Variable", body: ["En SES, variable constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement variable, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "4. Corrélation", body: ["En SES, corrélation constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement corrélation, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] },
      { heading: "5. Causalité", body: ["En SES, causalité constitue un outil pour décrire, organiser et interpréter une situation. Il faut en préciser le sens, les conditions d’utilisation et les limites.", "Pour mobiliser correctement causalité, on commence par identifier les données utiles, on explicite le raisonnement, puis on vérifie que la conclusion répond bien à la question posée."] }
    
      ,{ heading: 'Construire une réponse économique et sociale rigoureuse', body: ['Une réponse en SES doit définir les notions, présenter un mécanisme et l’appuyer sur un exemple ou une donnée pertinente. Une affirmation comme « le chômage augmente » doit préciser la période, la population concernée et l’indicateur utilisé. Les chiffres ne remplacent pas l’explication : ils servent à étayer un raisonnement.', 'Dans une dissertation, l’introduction définit les termes, fait apparaître une tension et formule une problématique. Le développement organise des arguments progressifs, chacun appuyé par des connaissances et des exemples. Dans une épreuve composée, il faut respecter la consigne propre à chaque partie : mobilisation de connaissances, étude de document ou raisonnement argumenté.', 'L’étude de document demande de lire le titre, la source, la date, le champ et les unités avant d’interpréter les données. Il faut citer les informations utiles, effectuer les calculs demandés et mobiliser ses connaissances sans paraphraser le document. Une conclusion doit répondre à la question et rester proportionnée aux éléments disponibles.'] }],
    keyPoints: [
      "Questionnement économique doit être défini, contextualisé et justifié.",
      "Mécanisme causal doit être défini, contextualisé et justifié.",
      "Variable doit être défini, contextualisé et justifié.",
      "Corrélation doit être défini, contextualisé et justifié.",
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
      { front: "Comment définir questionnement économique dans le cadre de SES ? (repère 1)", back: "Questionnement économique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mécanisme causal dans le cadre de SES ? (repère 2)", back: "Mécanisme causal : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir variable dans le cadre de SES ? (repère 3)", back: "Variable : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir corrélation dans le cadre de SES ? (repère 4)", back: "Corrélation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de SES ? (repère 5)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir donnée statistique dans le cadre de SES ? (repère 6)", back: "Donnée statistique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir lecture de graphique dans le cadre de SES ? (repère 7)", back: "Lecture de graphique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mobilisation du cours dans le cadre de SES ? (repère 8)", back: "Mobilisation du cours : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir raisonnement AEI dans le cadre de SES ? (repère 9)", back: "Raisonnement aei : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir limite d’un indicateur dans le cadre de SES ? (repère 10)", back: "Limite d’un indicateur : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir questionnement économique dans le cadre de SES ? (repère 11)", back: "Questionnement économique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mécanisme causal dans le cadre de SES ? (repère 12)", back: "Mécanisme causal : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir variable dans le cadre de SES ? (repère 13)", back: "Variable : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir corrélation dans le cadre de SES ? (repère 14)", back: "Corrélation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de SES ? (repère 15)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir donnée statistique dans le cadre de SES ? (repère 16)", back: "Donnée statistique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir lecture de graphique dans le cadre de SES ? (repère 17)", back: "Lecture de graphique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mobilisation du cours dans le cadre de SES ? (repère 18)", back: "Mobilisation du cours : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir raisonnement AEI dans le cadre de SES ? (repère 19)", back: "Raisonnement aei : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir limite d’un indicateur dans le cadre de SES ? (repère 20)", back: "Limite d’un indicateur : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir questionnement économique dans le cadre de SES ? (repère 21)", back: "Questionnement économique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mécanisme causal dans le cadre de SES ? (repère 22)", back: "Mécanisme causal : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir variable dans le cadre de SES ? (repère 23)", back: "Variable : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir corrélation dans le cadre de SES ? (repère 24)", back: "Corrélation : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir causalité dans le cadre de SES ? (repère 25)", back: "Causalité : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir donnée statistique dans le cadre de SES ? (repère 26)", back: "Donnée statistique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir lecture de graphique dans le cadre de SES ? (repère 27)", back: "Lecture de graphique : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir mobilisation du cours dans le cadre de SES ? (repère 28)", back: "Mobilisation du cours : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir raisonnement AEI dans le cadre de SES ? (repère 29)", back: "Raisonnement aei : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." },
      { front: "Comment définir limite d’un indicateur dans le cadre de SES ? (repère 30)", back: "Limite d’un indicateur : notion à définir précisément dans son contexte, à distinguer des notions proches et à mobiliser avec une justification adaptée." }
    ],
    quiz: [
      { level: "Facile", question: "Face à une situation mobilisant « questionnement économique », quelle démarche est la plus rigoureuse ? — cas 1", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir questionnement économique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « mécanisme causal », quelle démarche est la plus rigoureuse ? — cas 2", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mécanisme causal, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « variable », quelle démarche est la plus rigoureuse ? — cas 3", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir variable, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « corrélation », quelle démarche est la plus rigoureuse ? — cas 4", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir corrélation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « causalité », quelle démarche est la plus rigoureuse ? — cas 5", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir causalité, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « donnée statistique », quelle démarche est la plus rigoureuse ? — cas 6", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir donnée statistique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « lecture de graphique », quelle démarche est la plus rigoureuse ? — cas 7", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir lecture de graphique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « mobilisation du cours », quelle démarche est la plus rigoureuse ? — cas 8", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mobilisation du cours, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « raisonnement AEI », quelle démarche est la plus rigoureuse ? — cas 9", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir raisonnement AEI, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « limite d’un indicateur », quelle démarche est la plus rigoureuse ? — cas 10", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir limite d’un indicateur, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « questionnement économique », quelle démarche est la plus rigoureuse ? — cas 11", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir questionnement économique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « mécanisme causal », quelle démarche est la plus rigoureuse ? — cas 12", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mécanisme causal, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « variable », quelle démarche est la plus rigoureuse ? — cas 13", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir variable, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « corrélation », quelle démarche est la plus rigoureuse ? — cas 14", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir corrélation, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « causalité », quelle démarche est la plus rigoureuse ? — cas 15", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir causalité, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « donnée statistique », quelle démarche est la plus rigoureuse ? — cas 16", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir donnée statistique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « lecture de graphique », quelle démarche est la plus rigoureuse ? — cas 17", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir lecture de graphique, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Difficile", question: "Face à une situation mobilisant « mobilisation du cours », quelle démarche est la plus rigoureuse ? — cas 18", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir mobilisation du cours, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Facile", question: "Face à une situation mobilisant « raisonnement AEI », quelle démarche est la plus rigoureuse ? — cas 19", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir raisonnement AEI, vérifier les conditions de mobilisation et justifier la conclusion." },
      { level: "Intermédiaire", question: "Face à une situation mobilisant « limite d’un indicateur », quelle démarche est la plus rigoureuse ? — cas 20", choices: ["Définir la notion, expliciter les conditions et justifier son usage", "Appliquer une règle sans vérifier les hypothèses", "Remplacer l’analyse par un exemple isolé", "Énoncer une conclusion sans argument"], answer: 0, explanation: "La démarche rigoureuse consiste à définir limite d’un indicateur, vérifier les conditions de mobilisation et justifier la conclusion." }
    ],
    exercises: [
      { title: "Application guidée : questionnement économique — situation 1", level: "Facile", statement: "Présente une situation de SES dans laquelle la notion de questionnement économique est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit questionnement économique dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : mécanisme causal — situation 2", level: "Intermédiaire", statement: "Présente une situation de SES dans laquelle la notion de mécanisme causal est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit mécanisme causal dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : variable — situation 3", level: "Difficile", statement: "Présente une situation de SES dans laquelle la notion de variable est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit variable dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : corrélation — situation 4", level: "Facile", statement: "Présente une situation de SES dans laquelle la notion de corrélation est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit corrélation dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : causalité — situation 5", level: "Intermédiaire", statement: "Présente une situation de SES dans laquelle la notion de causalité est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit causalité dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : donnée statistique — situation 6", level: "Difficile", statement: "Présente une situation de SES dans laquelle la notion de donnée statistique est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit donnée statistique dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : lecture de graphique — situation 7", level: "Facile", statement: "Présente une situation de SES dans laquelle la notion de lecture de graphique est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit lecture de graphique dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : mobilisation du cours — situation 8", level: "Intermédiaire", statement: "Présente une situation de SES dans laquelle la notion de mobilisation du cours est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit mobilisation du cours dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : raisonnement AEI — situation 9", level: "Difficile", statement: "Présente une situation de SES dans laquelle la notion de raisonnement AEI est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit raisonnement AEI dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] },
      { title: "Application guidée : limite d’un indicateur — situation 10", level: "Facile", statement: "Présente une situation de SES dans laquelle la notion de limite d’un indicateur est pertinente. Définis-la, explique les étapes de ton raisonnement et indique une limite ou une vérification nécessaire.", correction: "Une réponse satisfaisante définit limite d’un indicateur dans son contexte, justifie chaque étape, utilise les informations pertinentes et termine par une interprétation cohérente. La limite doit être explicitement reliée à la situation.", skills: ["Définition et mobilisation des notions", "Raisonnement structuré", "Justification et esprit critique"] }
    ],
    sources: [{ title: 'Programmes et ressources en sciences économiques et sociales — voie GT', institution: 'Ministère de l’Éducation nationale — Bulletin officiel / Éduscol', url: 'https://eduscol.education.gouv.fr/5838/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-gt', consultedAt: '2026-11-04', supports: ['Méthodes et épreuves de spécialité SES'] }],
    sourceNote: 'Ressource de travail structurée autour des compétences du programme. Les exemples sont génériques et doivent être adaptés aux cours et documents de classe. Statut draft : relecture disciplinaire nécessaire.',
    validationStatus: 'draft'
  }
};
