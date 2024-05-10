import typescriptLogo from "../assets/images/Skills/typescript.png";
import nextJSLogo from "../assets/images/Skills/nextjs.png";
import reactLogo from "../assets/images/Skills/react.png";
import reduxLogo from "../assets/images/Skills/redux.png";
import sassLogo from "../assets/images/Skills/sass.png";
import tailwindcssLogo from "../assets/images/Skills/tailwindcss.png";
import bootstrapLogo from "../assets/images/Skills/bootstrap.png";
import jestLogo from "../assets/images/Skills/jest.png";
import nodejsLogo from "../assets/images/Skills/nodejs.png";
import mongodbLogo from "../assets/images/Skills/mongodb.png";
import mariabLogo from "../assets/images/Skills/mariadb.png";
import postgreSQLLogo from "../assets/images/Skills/PostgreSQL.png";

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
		name: "Next.JS",
		logo: nextJSLogo
	},
	{
		id: "Tech03",
		name: "React",
		logo: reactLogo
	},
	{
		id: "Tech04",
		name: "Redux",
		logo: reduxLogo
	},
	{
		id: "Tech05",
		name: "Sass",
		logo: sassLogo
	},
	{
		id: "Tech06",
		name: "Tailwind CSS",
		logo: tailwindcssLogo
	},
	{
		id: "Tech07",
		name: "Bootstrap",
		logo: bootstrapLogo
	},
	{
		id: "Tech08",
		name: "Jest",
		logo: jestLogo
	},
	{
		id: "Tech09",
		name: "Node.JS",
		logo: nodejsLogo
	},
	{
		id: "Tech10",
		name: "MongoDB (No SQL)",
		logo: mongodbLogo
	},
	{
		id: "Tech11",
		name: "MariaDB (SQL)",
		logo: mariabLogo
	},
	{
		id: "Tech12",
		name: "PostgreSQL (SQL)",
		logo: postgreSQLLogo
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
