import ProjectView from "../components/ProjectView";
import { myProjects } from "../data/myProjects";

function MyProjectsSection() {
    return (
        <section className="section" id="section-my-projects">
            <h3>Mes projets</h3>

            <div className="projects-container">
                {myProjects.map((project,index) => <ProjectView
                    key={project.id || index}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    github={project.github}
                    link={project.link}
                />)}
            </div>
        </section>
    );
}

export default MyProjectsSection;