//Spectacles
const cardData = [
	{
		id: 1,
		title: "Te souviens tu du jour ou j'ai coupé mes cheveux ?",
		public: "Spectacle familial, à partir de 5 ans.",
		duration: "45 minutes",
		image_url: "/images/affiche_te_souviens_tu.webp",
		image_spec: "/images/te_souviens_tu.jpg",
		writing: "Mariana Georgieva et Sandra Wichurski",
		directedBy: "Mariana Georgieva et Sandra Wichurski",
		interpretation: "Coline Bonnemayre et Sandra Wichurski",
		music: "Guillaume Mahenc, Raji Elmasri et Benoît Bornes",
		illustration: "Mona Costa",
		poster: "Julien Durand",
		assistant: "Françoise Longeard, Mylène Mauries et Anita Schultz-Moszkowski",
		shortResume:
			"Découvrez Maya et Theo, un garçon aux cheveux long, une fille au cheveux court",
		resume: `**Maya** n'est pas comme les filles de son école : elle aime avoir les cheveux courts, elle est toujours habillée en vêtements de sport et elle passe son temps à chasser Baradring Mangetout, une créature qui habite dans la forêt. **Théo**, c'est un garçon mais il a les cheveux longs, il adore prendre des photos de paysage et jouer avec son ami Nana, une poupée qu'il a piqué à sa petite sœur.

Est ce grave qu'ils soient différents de leurs camarades de classe ?

**Est ce qu'ils sont normaux ?**

Moqués par les autres enfants et observés avec étonnement par les adultes, **Maya et Théo vont se rencontrer**, se dévoiler l'un à l'autre lors des péripéties qu'ils traverseront ensemble et découvrir à leur façon la complexité et la beauté du monde pour petit à petit se l'approprier.

La pièce parle avant tout de la **découverte de soi**, du retour à l'enfance, des premières collisions de l'individu avec l'opinion dominante, des codes de genre que les parents transmettent inconsciemment à leurs enfants. Nous revendiquons le besoin pour chaque enfant de trouver son propre chemin vers ce qui fera de lui un **adulte ouvert d'esprit et bien dans sa peau.**

Notre travail s'est axé principalement sur la recherche des notions même du **féminin** et du **masculin** dans toutes leurs complexités. Nous avons souhaité regarder ces deux forces à la façon du yin et du yang, indissociables, complémentaires dans l'équilibre de chaque individu qu'il soit homme ou femme. Ainsi, nous souhaitons que chacun puisse affronter les carcans dans lesquels la société moderne souhaite dès notre plus jeune âge nous enfermer (les publicités, les jouets, les codes couleurs…).`,
		jauge: "200 personnes",
		plateau: "Ouverture 5 m / profondeur 4 m / hauteur 3,5 m sous projecteurs.",
		regie: `Besoin d'une salle équipée en son et en lumière. Régisseur compagnie.

				Version avec technique réduite possible.`,
	},
	{
		id: 2,
		title: "J'ai 17ans pour toujours",
		public: "Tout public, à partir de 14 ans.",
		image_url: "/images/affiche_17ans.png",
		duration: "1 heure",
		writing: "Texte de Jacques Descorde",
		directedBy: "Mariana Georgieva et Sandra Wichurski",
		image_spec: "/images/affiche.png",
		music: "GJunior Benyson, Guillaume Mahenc, Benoit Bornes et Idris Jimser",
		sceno: "Ariane Germain",
		light: "Rémi Dubot",
		video: "Mathilde Foriel-Destezet",
		assistant: "Magali Zaphiropoulo, Anita Schulski",
		shortResume: "Stella et Adèle, deux filles que tout oppose",
		resume: `**Stella et Adèle**, deux amies de 17 ans, passent une énième nuit, perchées sur le toit de leur immeuble.
		Stella ne parle plus à son père suite à la mort de sa mère. Adèle attend depuis plusieurs jours des nouvelles de son amoureux qui s'est enfui de chez lui.  
		
**Obnubilées par leurs préoccupations personnelles, les deux filles traversent des nuits ensemble** à rêver d'une vie meilleure. Elles inventent des histoires sur la vie des gens qu'elles aperçoivent à travers les fenêtres et balcons encore éclairés des immeubles d'en face. Elles se moquent du désespoir des autres pour ne pas penser aux fragilités de leurs propres histoires.  
		
**Mais cette nuit sera différente.** Cette nuit marquera le point final de leur enfance et ne leur permettra plus d'échapper à leurs destinés.`,
		jauge: "200 personnes",
		plateau: "Ouverture 8 m / profondeur 6 m / hauteur 3,5 m sous projecteurs.",
		regie: `Sol recouvert de tapis de danse noir. Salle noir total. Besoin d'une salle équipée en son et en lumière. 
		
				Régisseur (son, vidéo, lumière) compagnie.`,
	},
];

const partnair = [
	{
		id: 1,
		id_spec: 1,
		name: "Centre culturel de Soupetard (31)",
	},
	{
		id: 2,
		id_spec: 1,
		name: "Théâtre des Préambules (31)",
	},
	{
		id: 3,
		id_spec: 1,
		name: "Espace culturel Saint Cyprien",
	},
	{
		id: 4,
		id_spec: 1,
		name: "le Chapeau rouge (31)",
	},
	{
		id: 5,
		id_spec: 1,
		name: "Espace Marcel Pagnol (31)",
	},
	{
		id: 6,
		id_spec: 1,
		name: "Théâtre de la Brique Rouge",
	},
	{
		id: 7,
		id_spec: 1,
		name: "Espace Bazacle (31)",
	},
	{
		id: 8,
		id_spec: 1,
		name: "Théâtre au bout des doigts (47)",
	},
	{
		id: 9,
		id_spec: 1,
		name: "Le Vivier (40)",
	},
	{
		id: 10,
		id_spec: 1,
		name: "Centre culturel La Brique Rouge (31)",
	},
	{
		id: 11,
		id_spec: 1,
		name: "Avec l'aide du Conseil Départemental de la Haute Garonne",
	},
	{
		id: 12,
		id_spec: 2,
		name: "Théâtre Le Hangar (31)",
	},
	{
		id: 13,
		id_spec: 2,
		name: "La Petite Pierre (32)",
	},
	{
		id: 14,
		id_spec: 2,
		name: "MJC de Castanet Tolosan (31)",
	},
	{
		id: 15,
		id_spec: 2,
		name: "Mairie de Carbonne (11)",
	},
	{
		id: 16,
		id_spec: 2,
		name: "La Filature de Mazel (30)",
	},
	{
		id: 17,
		id_spec: 2,
		name: `Avec l'aide du Conseil Départemental de la Haute Garonne`,
	},
	{
		id: 18,
		id_spec: 2,
		name: "MJC Croix Daurade (31)",
	},
	{
		id: 19,
		id_spec: 2,
		name: "Espace Palumbo (31)",
	},
	{
		id: 20,
		id_spec: 2,
		name: "Espace Marcel Pagnol (31)",
	},
	{
		id: 21,
		id_spec: 2,
		name: "Avec l'aide du département de la Haute Garonne dans le cadre de « Artistes en scène, dispositif exceptionnel d'aide à la résidence de création avec actions culturelles et diffusion »",
	},
];

const date = [
	{
		id: 1,
		id_spec: 1,
		date: "06/05/2025 ",
		place: "Théâtre des Préambules",
		info: "Scolaire CP/CE1",
		hour: "10h et à 14h30",
	},
	{
		id: 2,
		id_spec: 1,
		date: " 10/05/2025",
		place: "Auditorium de Balma",
		info: "Scolaire CM1/CM2",
		hour: "10h et à 14h30",
	},
	{
		id: 3,
		id_spec: 1,
		date: "09/02/2025",
		place: "Collectif Tohu Bohu",
		info: "Annulé",
	},
];

const datePassed = [
	{
		id: 1,
		id_spec: 1,
		place: "Théâtre des Préambules (31)",
	},
	{
		id: 2,
		id_spec: 1,
		place: "Théâtre du Fil à Plomb (31).",
	},
	{
		id: 3,
		id_spec: 1,
		place: "Salle Boris Vian (31)",
	},
	{
		id: 9,
		id_spec: 1,
		place: "Festival TAPAGES au Théâtre du Grand Rond (31)",
	},
	{
		id: 4,
		id_spec: 1,
		place: "Centre Culturel de Soupetard (31)",
	},
	{
		id: 5,
		id_spec: 1,
		place: "Théâtre du Chien Blanc (31)",
	},
	{
		id: 6,
		id_spec: 1,
		place: "Première : Théâtre des Préambules (31)",
	},
	{
		id: 7,
		id_spec: 2,
		place: "Première : Espace Marcel Pagnol (31)",
	},
	{
		id: 8,
		id_spec: 2,
		place: "Avant-première : Espace Palumbo (31)",
	},
];

const buttonSpec = [
	{
		id: 1,
		name: "les spectacles",
		link: "/spectacles",
		img_src: "/images/test.png",
	},
	{
		id: 2,
		name: "les dates",
		link: "/dates",
		img_src: "/images/chair.png",
	},
];

const photo = [
	{
		id: 1,
		photo: "/images/affiche.png",
		service: "carousel_accueil",
	},
	{
		id: 2,
		photo: "/images/j_ai_17_ans_scene.jpg",
		service: "carousel_accueil",
	},
	{
		id: 3,
		photo: "/images/j_ai_17ans_pour_toujours.png",
		service: "carousel_accueil",
	},
	{
		id: 4,
		photo: "/images/te_souviens_tu.jpg",
		service: "carousel_accueil",
	},
	{
		id: 5,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 6,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux2.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 7,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux3.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 8,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux4.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 9,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux5.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 10,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux6.webp",
		service: "carousel_te_souviens",
		id_spec: 1,
	},
	{
		id: 11,
		photo: "/images/17ans/17ans1.png",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
	{
		id: 12,
		photo: "/images/17ans/17ans2.jpg",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
	{
		id: 13,
		photo: "/images/17ans/17ans3.jpg",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
	{
		id: 14,
		photo: "/images/17ans/17ans4.jpg",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
	{
		id: 15,
		photo: "/images/17ans/17ans5.jpg",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
	{
		id: 16,
		photo: "/images/17ans/17ans6.jpg",
		service: "carousel_te_souviens",
		id_spec: 2,
	},
];

//mediation

const mediation = [
	{
		id: 1,
		name: "Théâtre-Primaire",
		title: `" Chevalier comme un garçon, princesse comme une fille ? "`,
		photoPres: "/images/mediation.webp",
		photoSeance: "/images/primaire1.jpg",
		photoDate: "/images/primaire2.png",
		type: "Parcours théâtral",
		public: "8/12 ANS",
		duration: "Adaptable",
		theme: "Egalité fille-Garçon",
		pres: `Ce projet a été créé dans le cadre de l'appel à projet **« Passeport pour l'art » par la Mairie de Toulouse** à destination des établissements scolaire mais il reste adaptable pour tout type de structure accueillant des jeunes entre 8 et 12 ans. 
		
Par ce projet nommé :

**« Chevalier comme un garçon, princesse comme une fille ? »**

La Comagnie L'Enclos cherche à **questionner les primaires** sur un sujet complexe que sont **les stéréotypes liés au genre.**
Dès leur plus jeune âge, les enfants sont **orientés dans leurs choix** selon leurs sexe. **Le conte renforce davantage la transmission** des stéréotypes liés aux genres (les filles s'identifient à la princesse douce et jolie et les garçons, au chevalier fort et courageux…). Par le biais de la **déconstruction des codes** du conte traditionnel, les enfants pourront réinventer les histoires contées afin de **s'amuser avec les normes** qui régissent les genres et découvrir une autre manière de créer ensemble..`,
		organisation: "Le projet se développe en 4 temps :",
		first: `**Temps 1 :** Jeux théâtraux sur l'égalité fille-garçon`,

		presFirst: `Au début du parcours, l'important c'est de rencontrer les enfants, et de créer une **première réflexion autour de la thématique**, par le biais du jeu.

**Objectif :** 

Apprendre à se connaître, voir les ressemblances et les différences entre garçon et fille.`,
		second: "**Temps 2 :** Travail scénique autour du conte classique",
		presSecond: `Ensuite, nous allons prendre le temps de relire des extraits de **conte classique** que nous connaissons tous, et s'amuser à jouer les situations que l'on retrouve dedans, tout en identifiant ce qui **nous pose question sur le rôle attribué à chacun des genres.**

**Objectif :**  

S'exprimer devant les autres, jouer une situation, un personnage, prendre conscience du rôle attribué à chaque personnage par rapport à son genre.
`,
		third: "**Temps 3 :** Travail scénique autour du conte contemporain",
		presThird: `Puis nous nous amusons à tout **déconstruire par l'improvisation**, par l'écriture de scénettes, où on tente de se libérer des stéréotypes de genre que l'on retrouve facilement dans les contes traditionnels.

**Objectif :**

Développer l'imagination par l'improvisation, se libérer des carcans dans lesquels nous sommes plongés depuis notre enfance tout en s'amusant.
`,
		fourth: "**Temps 4 :** Création d'une forme théâtrale",
		presFourth: `Pour finir, nous créons sous une **forme théâtrale** notre propre conte dont l'histoire vient tout droit de l'imaginaire des enfants où chacun pourra apprendre quelques répliques et prendra plaisir à jouer des **personnages libérés des codes de genre.**

**Objectif :**

Jouer un personnage avec un texte, rendre crédible son personnage qui ne correspond pas à ce que l'on a l'habitude de voir dans les contes traditionnels.`,
		final: "**Séance finale :** Restitution et Bilan",
		presFinal: `Pour finir en beauté, **nous invitons les parents et des élèves d'autres classes à voir la forme théâtrale** créée pour l'occasion où chaque enfant devra affronter le stress de jouer devant un public. Nous prendrons également le temps de faire **un bilan** du chemin parcouru afin de connaitre les retours des enfants autour de cette expérience riche qu'ils ont vécu et des **réflexions qui ont émergé autour de la thématique.**`,
		material: ["Costumes", "Paravents scéniques", "Enceinte"],
		extract: `Extrait du conte « La Princesse au petit » pois d'Hans Christian Andersen`,
		textExtract: `« Il était une fois un prince qui voulait épouser une princesse, mais une vraie princesse.

Il fit le tour de la Terre pour en trouver une mais il y avait toujours quelque chose qui clochait ; des princesses, il n'en manquait pas, mais étaient elles de vraies princesses ?

C'était difficile à apprécier ; toujours une chose ou l'autre ne lui semblait pas parfaite. Il rentra chez lui tout triste, il aurait tant voulu rencontrer une véritable princesse. »`,
		thanks:
			"La Mairie de Toulouse, les instituteurs des écoles (Antoine, Matthieu et Laure) et les enfants.",
	},
	{
		id: 2,
		name: "Théâtre - College",
		title: `" Du texte à la scène ! Autour de Stroboscopie de Sébastien Joanniez " 
`,
		photoPres: "/images/mediation_college.jpg",
		photoSeance: "/images/college1.webp",
		photoDate: "/images/college2.png",
		type: "Parcours théâtral",
		public: "12/16 ANS",
		duration: "Adaptable",
		theme: "Egalité fille-Garçon",
		pres: `Ce projet a été créé dans le cadre de l'appel à projet **« Parcours laique et citoyen » par le département de la Haute Garonne** à destination des établissements scolaires mais il reste adaptable pour tout type de structure accueillant des jeunes entre 12 et 16 ans. Par ce projet nommé :
**« Du texte à la scène ! Autour de Stroboscopie de Sébastien Joanniez »**
Nous souhaitons que les collégiens travaillent sur des extraits du texte « Stroboscopie » de Sébastien Joanniez qui met en scène **la rencontre entre un garçon et une fille** qui discutent ensemble « de ce qu'ils croient savoir de l'autre ». Par le biais du théâtre, nous voulons provoquer **la rencontre entre les filles et les garçons d'une même classe**, ayant l'habitude de se côtoyer sans vraiment se connaître, tout en cherchant **à déconstruire les codes et stéréotypes liés aux genres.**`,
		organisation: "Le projet se déroule en 3 temps :",
		first: "**Temps 1 :** Découverte de la pièce",
		presFirst: `Dans un premier temps après avoir fait des exercices d'échauffement, **nous lisons la pièce ensemble pour avoir un premier avis** de son contenu et des problématique que le texte soulève concernant la thématique de l'égalité fille-garçon.

**Objectif :**

Développer l'esprit critique, savoir identifier les problématiques dans une pièce de théâtre, provoquer la réflexion autour de la thématique`,
		second: `**Temps 2 :** Improvisations autour de l'égalité fille-garçon`,
		presSecond: `C'est par **l'improvisation** que les élèves peuvent se lâcher et commencer tout doucement à interagir ensemble, à apprendre à se connaitre, et ainsi permettre **le débat sur les stéréotypes de genre.**

**Objectif :**

Développer l'imaginaire, s'exprimer devant le reste du groupe, développer sa réflexion autour de la thématique proposé par le biais du jeu.`,
		third: "**Temps 3 :** Travail scénique autour de la pièce",
		presThird: `Pour finir, nous commençons **un travail de mise en scène de la pièce**, chacun a quelques répliques à jouer, et nous cherchons comment dire ce texte avec une écriture très contemporaine. Comment ce garçon et cette fille se rencontrent et apprennent à **apprécier l'autre dans ses ressemblances et ses différences.** Comment en réalisant un projet commun, garçon et fille d'une même classe vont apprendre à se découvrir et à s'entraider.

**Objectifs :**

Apprendre à jouer un texte de théâtre, développer son esprit de groupe, l'écoute de ses partenaires, comprendre les enjeux du texte.`,
		final: "**Séance finale :** Restitution et Bilan",
		presFinal: `Pour finir, il est essentiel que le groupe puisse faire **une restitution du travail abouti** sous une forme théâtrale. C'est le moment où garçons et filles se soutiennent pour arriver à passer devant le public (en général devant d'autres jeunes de leur âge). C'est un moment toujours plein d'enthousiasme, de rire et de d'épanouissement. Puis vient **le temps du bilan**, le moment où chacun peut donner ses retours, ses ressentis sur l'expérience vécue et ainsi repartir grandi de ces moments de partage entre garçons et filles…`,
		extract: "Extrait de la pièce :",
		textExtract: `Chœur filles : Tu me trouves grosse ?

		
**Chœur garçons** : Non.

**Chœur filles** : J'ai peur de devenir grande et grosse.

**Chœur garçons** : J'ai peur de devenir bête et moche.

**Chœur filles** : J'ai peur de me mettre en jupe.

**Chœur garçons** : De pleurer.

**Chœur filles** : Chut ! Il y a quelqu'un !`,
		thanks:
			"Le Conseil Départemental de la Haute Garonne, à la professeur (Madame Chevalier et Madame Pichard) et les collégiens.",
	},
	{
		id: 3,
		name: "théâtre - EPHAD",
		title: "« Le crépitement du vinyle »",
		photoPres: "/images/mediation_ephad.jpg",
		photoSeance: "/images/ephad1.jpg",
		photoDate: "/images/ephad2.jpg",
		type: "Parcours théâtral",
		public: "EPHAD",
		duration: "Adaptable",
		theme: "LE SOUVENIR, transmission, Lien intergénérationnel",
		pres: `Pour ce projet créé dans le cadre de l'appel à projet **« Fonds de soutien à l'initiative culturelle » par le département de la Haute Garonne** L'Enclos **travaille avec les résidents d'un EHPAD** en périphérie des villes ou en milieu rural **afin de ramener la culture à ceux qui ne peuvent que difficilement y avoir accès** par le biais de son projet
**«  Le crépitement du vinyle" ».**
Le projet est né de l'envie, pour nous les générations actuelles de se poser la fameuse question : **« c'était comment déjà avant ? ».** De prendre le temps d'écouter les histoires d'autrefois, **avec la nostalgie de l'ancien**, les photos en noir et blanc, le crépitement du vinyle, ou encore l'odeur des bons petits plats maison..
C'est pourquoi, nous avons voulu aller **à la rencontre des résidents** pour les écouter, pour leur rappeler à quel point nous avons besoin **de leurs paroles pleine de sagesse.**`,
		organisation: "Le projet s'articule autour de deux axes :",
		first: "**Premier axe :** Le souvenir",
		presFirst: `Sur les premières séances, nous concentrons uniquement notre attention sur **l'Expression** autour du **souvenir de cette époque passée**, époque à laquelle les résidents étaient dans la vie active. Pour cela, nous avons choisi comme thématique **« Cuisine et Mode » et « Culture et Divertissement »**.
Par le biais d'un enregistreur, **nous recueillons les paroles** qui jaillissent **du groupe** et parfois **de l'intime** des anecdotes qu'aiment tant nous faire partager nos ainés.
Les supports choisis pour ce premier axe sont des textes non théâtraux, des extraits vidéos, des extraits sonores, et des objets d'époque.

**Objectifs :**

Favoriser le contact social, la prise de parole, la confiance en soi, l'importance de la transmission.`,
		second: "**Deuxième axe :** Initiation au jeu théâtral",
		presSecond: `Les résidents pourront dans un deuxième temps **s'amuser à lire des extraits de pièce de théâtre**, avec des monologues et des dialogues tout en s'initiant à y mettre des intentions de jeu.

**Objectifs :**

Favoriser le lâcher prise, la confiance en soi, travailler sur la voix, l'écoute active et se divertir.`,
		final: "**Séance finale :** Exposition et restitution",
		presFinal: `Pour finir en beauté, la dernière séance sera consacrée au **vernissage d'une exposition** avec casque audio, installée au préalable par la Compagnie L'Enclos au sein même de l'EHPAD, qui retrace les paroles échangées lors des ateliers du premier axe. Puis sera suivi d'une **restitution des textes travaillés** dans le second axe par les résidents devant leurs familles et les autres résidents. Un groupe d'enfant ou d'adolescent est invité à venir partagé également ce moment pour **renforcer le lien intergénérationnel**, pour permettre la transmission d'une époque passée à la nouvelle génération. **Un moment toujours très riche et émouvant.**`,
		material: [
			"Enregistreur zoom",
			"Vidéoprojecteur",
			"Extraits vidéo, texte",
			"Objet d'époque",
			"Cubes d'exposition",
			"Radios (4)",
			"Casques (4)",
		],

		thanks:
			"Le Conseil Départemental de la Haute Garonne, les animatrices des EHPAD (Cathy Morant, Marie-Christine Durban, Martine) ,Aurélié Bordet (art thérapeute) Hee Jen Kim et Mathilde Foriel-Destezet (vidéaste et montage), Mélissa Mathieu (curateur d'art) et Pauline Drolet (régisseuse), les résidents.",
		credit: "Pauline Drolet",
	},
];

const intervention = [
	{
		id: 1,
		id_med: 1,
		date: "Année 2021-22 :",
		info: "Projet réalisé à l'école élémentaire publique Jean Zay (31).",
	},
	{
		id: 2,
		id_med: 1,
		date: "Année 2022-23 :",
		info: "Projet réalisé à l'école élémentaire publique Niboul (31).",
	},
	{
		id: 3,
		id_med: 1,
		date: "Année 2023-24 :",
		info: "Projet réalisé à l'école élémentaire publique Fontaine Bayonne (31)",
	},
	{
		id: 4,
		id_med: 2,
		date: "Année 2022-23 :",
		info: "Projet réalisé au sein du collège Bellevue (31).",
	},
	{
		id: 5,
		id_med: 2,
		date: "Année 2023-24 :",
		info: "Projet réalisé au sein du collège Jean Mermoz (31)",
	},
	{
		id: 6,
		id_med: 3,
		date: "Année 2021-22 :",
		info: "Projet réalisé au sein de l'EHPAD Le Castelet à Muret (31).",
	},
	{
		id: 7,
		id_med: 3,
		date: "Année 2022-23 :",
		info: "Projet réalisé au sein de l'EHPAD Tiers Temps à Blagnac (31).",
	},
	{
		id: 8,
		id_med: 3,
		date: "Année 2023-24 :",
		info: "Projet réalisé au de l'EHPAD La Tout Totier Edenis à Castelginest (31)",
	},
];
export {
	cardData,
	buttonSpec,
	partnair,
	date,
	datePassed,
	photo,
	mediation,
	intervention,
};
