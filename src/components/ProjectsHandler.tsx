"use client";

import ProjectView from "./ProjectView";
import { myProjects } from "../data/myProjects";
import { useState } from "react";

function ProjectsHandler() {
	const [projectsDisplayNb, setProjectsDisplayNb] = useState<number>(3);

	const switchProjectsDisplayNb = () => setProjectsDisplayNb(prevState => (prevState === 3 ? myProjects.length : 3));

	return (
		<div className="projects-handler">
			<div className="projects-container">
				{myProjects.map(
					(project, index) =>
						index < projectsDisplayNb && (
							<ProjectView
								key={project.id || index}
								title={project.title}
								image={project.image}
								description={project.description}
								github={project.github}
								link={project.link}
								tags={project.tags}
							/>
						)
				)}
			</div>

			<button className="main-button" onClick={switchProjectsDisplayNb}>
				{projectsDisplayNb === 3 ? "Afficher plus de projets" : "Réduire"}
			</button>
		</div>
	);
}

export default ProjectsHandler;
