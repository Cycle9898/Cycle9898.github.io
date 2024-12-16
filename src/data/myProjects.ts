export type ProjectType = {
	id?: string;
	title: string;
	image: string;
	description: string;
	github?: string;
	link?: string;
	tags: string[];
};

export const myProjects: ProjectType[] = [
	{
		id: "P05",
		title: "Zen Bank",
		image: "/assets/images/Projects/capture_ZenBank.jpeg",
		description:
			"Zen Bank est une application bancaire sur le web, créée avec Next.JS qui permet de lier vos comptes bancaires, consulter les informations et l'historique des transactions de ceux-ci et transférer des fonds.",
		github: "https://github.com/Cycle9898/ZenBank_Frontend",
		link: "https://zen-bank.vercel.app",
		tags: ["TypeScript", "Next.JS", "React", "Tailwind CSS", "Appwrite", "Dwolla", "NodeJS"]
	},
	{
		id: "P04",
		title: "Proposal Ranking Boards",
		image: "/assets/images/Projects/capturePRB.jpeg",
		description:
			"Un site web créé avec Next.JS qui permet de créer des boards pour poser des questions, à une communauté par exemple, et faire des propositions en retour, pour y répondre. De plus, un système de vote pour les propositions est mis en place. Les résultats sont paginés (boards et propositions) pour éviter d'avoir trop d'entrées par pages. Une barre de recherche est présente pour filtrer les propositions et les boards. Les données sont sauvegardés dans une base de données PostgreSQL et Prisma est utilisé pour interagir avec elle.",
		github: "https://github.com/Cycle9898/proposal-ranking-boards",
		link: "https://proposal-ranking-boards.vercel.app/",
		tags: ["TypeScript", "Next.JS", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "NodeJS"]
	},
	{
		id: "P03",
		title: "Wealth Health HRnet",
		image: "/assets/images/Projects/capture_hrnet.jpeg",
		description:
			"Ce projet est une application web créée, à partir d'une ancienne application jQuery, pour le service RH d'une entreprise fictive nommée Wealth Health. Elle leur permet de se connecter, d'ajouter ou de modifier une fiche salarié à l'aide d'un formulaire dédié, de consulter la liste des salariés ou de supprimer une entrée. L'application a été crée à l'aide de Vite.JS, React, React Context et TypeScript pour la partie Front-End et Node.JS, Express et MongoDB pour la partie Back-end. Un test de performance a également été réalisé avec Lighthouse pour comparer les performances de l'ancienne version sous jQuery avec la nouvelle sous React.",
		github: "https://github.com/Cycle9898/OC_Projet-14_Wealth-Health_HRnet",
		link: "https://www.cyril-clement.fr/OC_Projet-14_Wealth-Health_HRnet/",
		tags: [
			"TypeScript",
			"React",
			"React Context",
			"CSS",
			"SASS",
			"Swagger",
			"NodeJS",
			"Express",
			"MongoDB",
			"Lighthouse",
			"jQuery"
		]
	},
	{
		id: "P02",
		title: "Argent Bank",
		image: "/assets/images/Projects/capture_ArgentBank.jpeg",
		description:
			"Ce projet est une application web, créée avec React pour une banque fictive nommée Argent Bank. Elle a été intégrée à partir d'une maquette. Un utilisateur peut s'y connecter pour accéder à son espace client et arrive sur son tableau de bord pour gérer ses différents comptes en banque. La documentation de l'API V2 a été effectuée avec Swagger et un fichier YAML.",
		github: "https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Front",
		link: "https://www.cyril-clement.fr/OC_Projet-13_ArgentBank_Front/",
		tags: ["TypeScript", "React", "Redux", "CSS", "SASS", "Swagger", "NodeJS", "Express", "MongoDB"]
	},
	{
		id: "P01",
		title: "FishEye",
		image: "/assets/images/Projects/capture_FishEye.jpeg",
		description:
			"Ce projet est un site internet fictif regroupant des photographes freelance et leurs réalisations. Il a été intégré à partir d'une maquette à l'aide de HTML, CSS et JavaScript. L'objectif est d'avoir un site le plus accessible possible. Ce site est parfaitement utilisable avec un logiciel d'accessibilité comme un lecteur d'écran par exemple.",
		github: "https://github.com/Cycle9898/OC_Projet-6_FishEye",
		link: "https://www.cyril-clement.fr/OC_Projet-6_FishEye/",
		tags: ["HTML", "CSS", "JavaScript"]
	}
];
