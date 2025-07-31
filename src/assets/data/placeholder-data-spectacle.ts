//Spectacles
const cardData = [
	{
		id: 1,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		status: "En diffusion",
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
		theme: "Egalité fille garçon",
		resume: `**Maya** n'est pas comme les filles de son école : elle aime avoir les cheveux courts, elle est toujours habillée en vêtements de sport et elle passe son temps à chasser Baradring Mangetout, une créature qui habite dans la forêt. **Théo**, c'est un garçon mais il a les cheveux longs, il adore prendre des photos de paysage et jouer avec son ami Nana, une poupée qu'il a piqué à sa petite sœur.

Est ce grave qu'ils soient différents de leurs camarades de classe ?

**Est ce qu'ils sont normaux ?**

Moqués par les autres enfants et observés avec étonnement par les adultes, **Maya et Théo vont se rencontrer**, se dévoiler l'un à l'autre lors des péripéties qu'ils traverseront ensemble et découvrir à leur façon la complexité et la beauté du monde pour petit à petit se l'approprier.`,
		propos: `

La pièce parle avant tout de la **découverte de soi**, du retour à l'enfance, des premières collisions de l'individu avec l'opinion dominante, des codes de genre que les parents transmettent inconsciemment à leurs enfants. Nous revendiquons le besoin pour chaque enfant de trouver son propre chemin vers ce qui fera de lui un **adulte ouvert d'esprit et bien dans sa peau.**

Notre travail s'est axé principalement sur la recherche des notions même du **féminin** et du **masculin** dans toutes leurs complexités. Nous avons souhaité regarder ces deux forces à la façon du yin et du yang, indissociables, complémentaires dans l'équilibre de chaque individu qu'il soit homme ou femme. Ainsi, nous souhaitons que chacun puisse affronter les carcans dans lesquels la société moderne souhaite dès notre plus jeune âge nous enfermer (les publicités, les jouets, les codes couleurs…).`,
		jauge: "200 personnes",
		plateau: "Ouverture 5 m / profondeur 4 m / hauteur 3,5 m sous projecteurs.",
		regie: `Besoin d'une salle équipée en son et en lumière. Régisseur compagnie.

				Version avec technique réduite possible.`,
	},
	{
		id: 2,
		slug: "j-ai-17-ans-pour-toujours",
		status: "En diffusion",
		title: "J'ai 17ans pour toujours",
		public: "Tout public, à partir de 14 ans.",
		image_url: "/images/affiche_17ans.png",
		duration: "1 heure",
		writing: "Texte de Jacques Descorde",
		directedBy: "Mariana Georgieva et Sandra Wichurski",
		image_spec: "/images/affiche.png",
		music: "Junior Benyson, Guillaume Mahenc, Benoit Bornes et Idris Jimser",
		sceno: "Ariane Germain",
		light: "Rémi Dubot",
		video: "Mathilde Foriel-Destezet",
		assistant: "Magali Zaphiropoulo, Anita Schulski",
		theme: "L'adolescence",
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
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Centre culturel de Soupetard (31)",
	},
	{
		id: 2,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Théâtre des Préambules (31)",
	},
	{
		id: 3,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Espace culturel Saint Cyprien",
	},
	{
		id: 4,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "le Chapeau rouge (31)",
	},
	{
		id: 5,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Espace Marcel Pagnol (31)",
	},
	{
		id: 6,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Théâtre de la Brique Rouge",
	},
	{
		id: 7,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Espace Bazacle (31)",
	},
	{
		id: 8,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Théâtre au bout des doigts (47)",
	},
	{
		id: 9,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Le Vivier (40)",
	},
	{
		id: 10,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Centre culturel La Brique Rouge (31)",
	},
	{
		id: 11,
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
		name: "Avec l'aide du Conseil Départemental de la Haute Garonne",
	},
	{
		id: 12,
		slug: "j-ai-17-ans-pour-toujours",
		name: "Théâtre Le Hangar (31)",
	},
	{
		id: 13,
		slug: "j-ai-17-ans-pour-toujours",
		name: "La Petite Pierre (32)",
	},
	{
		id: 14,
		slug: "j-ai-17-ans-pour-toujours",
		name: "MJC de Castanet Tolosan (31)",
	},
	{
		id: 15,
		slug: "j-ai-17-ans-pour-toujours",
		name: "Mairie de Carbonne (11)",
	},
	{
		id: 16,
		slug: "j-ai-17-ans-pour-toujours",
		name: "La Filature de Mazel (30)",
	},
	{
		id: 17,
		slug: "j-ai-17-ans-pour-toujours",
		name: `Avec l'aide du Conseil Départemental de la Haute Garonne`,
	},
	{
		id: 18,
		slug: "j-ai-17-ans-pour-toujours",
		name: "MJC Croix Daurade (31)",
	},
	{
		id: 19,
		slug: "j-ai-17-ans-pour-toujours",
		name: "Espace Palumbo (31)",
	},
	{
		id: 20,
		slug: "j-ai-17-ans-pour-toujours",
		name: "Espace Marcel Pagnol (31)",
	},
	{
		id: 21,
		slug: "j-ai-17-ans-pour-toujours",
		name: "Avec l'aide du département de la Haute Garonne dans le cadre de « Artistes en scène, dispositif exceptionnel d'aide à la résidence de création avec actions culturelles et diffusion »",
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
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 6,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux2.webp",
		service: "carousel_te_souviens",
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 7,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux3.webp",
		service: "carousel_te_souviens",
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 8,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux4.webp",
		service: "carousel_te_souviens",
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 9,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux5.webp",
		service: "carousel_te_souviens",
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 10,
		photo: "/images/teSouviensTu/te_souviens_tu_jeux6.webp",
		service: "carousel_te_souviens",
		slug: "te-souviens-tu-du-jour-ou-j-ai-coupe-mes-cheveux",
	},
	{
		id: 11,
		photo: "/images/17ans/17ans1.png",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 12,
		photo: "/images/17ans/17ans2.jpg",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 13,
		photo: "/images/17ans/17ans3.jpg",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 14,
		photo: "/images/17ans/17ans4.jpg",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 15,
		photo: "/images/17ans/17ans5.jpg",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 16,
		photo: "/images/17ans/17ans6.jpg",
		service: "carousel_te_souviens",
		slug: "j-ai-17-ans-pour-toujours",
	},
	{
		id: 17,
		photo: "/images/ephad/carou1.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
	{
		id: 18,
		photo: "/images/ephad/carou2.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
	{
		id: 19,
		photo: "/images/ephad/carou3.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
	{
		id: 20,
		photo: "/images/ephad/carou4.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
	{
		id: 21,
		photo: "/images/ephad/carou5.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
	{
		id: 22,
		photo: "/images/ephad/carou6.jpg",
		service: "carousel_ephad",
		slug: "ephad",
	},
];

export { cardData, partnair, photo };
