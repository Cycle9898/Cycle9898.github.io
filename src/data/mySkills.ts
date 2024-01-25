import typescriptLogo from "../assets/images/Skills/typescript.png";
import reactLogo from "../assets/images/Skills/react.png";
import reduxLogo from "../assets/images/Skills/redux.png";
import sassLogo from "../assets/images/Skills/sass.png";
import bootstrapLogo from "../assets/images/Skills/bootstrap.png";
import jestLogo from "../assets/images/Skills/jest.png";
import nodejsLogo from "../assets/images/Skills/nodejs.png";
import mongodbLogo from "../assets/images/Skills/mongodb.png";

import gitLogo from "../assets/images/Skills/git.png";
import githubLogo from "../assets/images/Skills/github.png";
import viteLogo from "../assets/images/Skills/vite.png";
import figmaLogo from "../assets/images/Skills/figma.png";
import swaggerLogo from "../assets/images/Skills/swagger.png";
import lighthouseLogo from "../assets/images/Skills/lighthouse.png";
import linuxLogo from "../assets/images/Skills/linux.png";
import windowsLogo from "../assets/images/Skills/windows.png";

export type SkillType = {
    id?: string;
    name: string;
    logo: string;
};

export const technologies: SkillType[] = [
    {
        id: "Tech01",
        name: "TypeScript",
        logo: typescriptLogo
    },
    {
        id: "Tech02",
        name: "React",
        logo: reactLogo
    },
    {
        id: "Tech03",
        name: "Redux",
        logo: reduxLogo
    },
    {
        id: "Tech04",
        name: "Sass",
        logo: sassLogo
    },
    {
        id: "Tech05",
        name: "Bootstrap",
        logo: bootstrapLogo
    },
    {
        id: "Tech06",
        name: "Jest",
        logo: jestLogo
    },
    {
        id: "Tech07",
        name: "Node.JS",
        logo: nodejsLogo
    },
    {
        id: "Tech08",
        name: "MongoDB",
        logo: mongodbLogo
    }
];

export const tools: SkillType[] = [
    {
        id: "Tool01",
        name: "Git",
        logo: gitLogo
    },
    {
        id: "Tool02",
        name: "GitHub",
        logo: githubLogo
    },
    {
        id: "Tool03",
        name: "ViteJS",
        logo: viteLogo
    },
    {
        id: "Tool04",
        name: "Figma",
        logo: figmaLogo
    },
    {
        id: "Tool05",
        name: "Swagger",
        logo: swaggerLogo
    },
    {
        id: "Tool06",
        name: "Lighthouse",
        logo: lighthouseLogo
    },
    {
        id: "Tool07",
        name: "Linux",
        logo: linuxLogo
    },
    {
        id: "Tool08",
        name: "Windows",
        logo: windowsLogo
    }
];
