import captureHrnet from "../assets/images/Projects/capture_hrnet.jpeg";
import captureArgentBank from "../assets/images/Projects/capture_ArgentBank.jpeg";
import capturePetitsPlats from "../assets/images/Projects/capture_petits-plats.jpeg";
import captureFishEye from "../assets/images/Projects/capture_FishEye.jpeg";
import captureOhmyfood from "../assets/images/Projects/capture_ohmyfood.jpeg";

export type ProjectType = {
    id?: string,
    title: string,
    image: string,
    description: string,
    github: string,
    link: string
}

export const myProjects: ProjectType[] = [
    {
        id: "P01",
        title: "OpenClassrooms projet 14 : Wealth Health HRnet",
        image: captureHrnet,
        description: "Ce projet est une application web, créée avec React pour le service RH d'une entreprise fictive nommée Wealth Health. Elle leur permet de se connecter, d'ajouter ou de modifier une fiche salarié à l'aide d'un formulaire dédié, de consulter la liste des salariés ou de supprimer une entrée. L'application a été crée à l'aide de Vite.JS, React, React Context et TypeScript pour la partie Front-End et Node.JS, Express et MongoDB pour la partie Back-end. Un test de performance a également été réalisé avec Lighthouse.",
        github: "https://github.com/Cycle9898/OC_Projet-14_Wealth-Health_HRnet",
        link: "https://www.cyril-clement.fr/OC_Projet-14_Wealth-Health_HRnet/"
    },
    {
        id: "P02",
        title: "OpenClassrooms projet 13 : Argent Bank",
        image: captureArgentBank,
        description: "Ce projet est une application web, créée avec React pour une banque fictive nommée Argent Bank. Elle a été intégrée à partir d'une maquette. Un utilisateur peut s'y connecter pour accéder à son espace client et arrive sur son tableau de bord pour gérer ses différents comptes en banque. La documentation de l'API V2 a été effectuée avec Swagger et un fichier YAML.",
        github: "https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Front",
        link: "https://www.cyril-clement.fr/OC_Projet-13_ArgentBank_Front/"
    },
    {
        id: "P03",
        title: "OpenClassrooms projet 7 : Les petits plats",
        image: capturePetitsPlats,
        description: "Ce projet est un site internet de recette de cuisine permettant de trouver une recette à l'aide d'une barre de recherche et de filtres. Il a été intégré à partir d'une maquette à l'aide de HTML, CSS et JavaScript. L'objectif est d'avoir un algorithme, écris en JavaScript, pour la recherche et les filtres le plus performant possible. Des tests de performance ont été réalisés entre les 2 algorithmes retenus. Sur GitHub, on peut retrouver un algorithme par branche.",
        github: "https://github.com/Cycle9898/OC_Projet-7_Les-petits-plats",
        link: "https://www.cyril-clement.fr/OC_Projet-7_Les-petits-plats/"
    },
    {
        id: "P04",
        title: "OpenClassrooms projet 6 : FishEye",
        image: captureFishEye,
        description: "Ce projet est un site internet fictif regroupant des photographes freelance et leurs réalisations. Il a été intégré à partir d'une maquette à l'aide de HTML, CSS et JavaScript. L'objectif est d'avoir un site le plus accessible possible. Ce site est parfaitement utilisable avec un logiciel d'accessibilité comme un lecteur d'écran par exemple.",
        github: "https://github.com/Cycle9898/OC_Projet-6_FishEye",
        link: "https://www.cyril-clement.fr/OC_Projet-6_FishEye/"
    },
    {
        id: "P05",
        title: "OpenClassrooms projet 3 : Ohmyfood",
        image: captureOhmyfood,
        description: "Ce projet est un site internet de démonstration regroupant les cartes de plusieurs restaurants. Il a été intégré à partir d'une maquette à l'aide de HTML et CSS. L'objectif est d'avoir un site le plus fidèle possible à la maquette et également d'implémenter les différentes animations demandées en CSS.",
        github: "https://github.com/Cycle9898/OC_Projet-3_Ohmyfood",
        link: "https://www.cyril-clement.fr/OC_Projet-3_Ohmyfood/index.html"
    }
];