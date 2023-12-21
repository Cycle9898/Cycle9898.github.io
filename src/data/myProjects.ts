import testImage from "../assets/images/Projects/ohmyfood_screen.jpg";

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
        title: "Projet test numéro 1",
        image: testImage,
        description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. ",
        github: "https://github.com/Cycle9898/OC_Projet-14_Wealth-Health_React-Custom-Dropdown-Lib",
        link: "http://cyril-clement.fr"
    },
    {
        id: "P02",
        title: "Projet test numéro 2",
        image: testImage,
        description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
        github: "https://github.com/Cycle9898/OC_Projet-14_Wealth-Health_React-Custom-Dropdown-Lib",
        link: "http://cyril-clement.fr"
    },
    {
        id: "P03",
        title: "Projet test numéro 3",
        image: testImage,
        description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
        github: "https://github.com/Cycle9898/OC_Projet-14_Wealth-Health_React-Custom-Dropdown-Lib",
        link: "http://cyril-clement.fr"
    }
];