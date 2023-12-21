import type { ProjectType } from "../data/myProjects";
import { MdOutlineDescription } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

function ProjectView({ title,image,description,github,link }: ProjectType) {
    return (
        <article className="project">
            <div className="project__image">
                <img src={image} alt={`Capture d'écran du projet "${title}"`} />
            </div>

            <div className="project__details">
                <h4>{title}</h4>

                <p className="project__description">
                    <span><MdOutlineDescription aria-label="Description du projet" title="Description" /> : </span>
                    <span>{description}</span>
                </p>

                <p className="project__link">
                    <span><FaGithub aria-label="Lien vers le GitHub" title="GitHub" /> : </span>
                    <a href={github} target="_blank" title={github}>{github}</a>
                </p>

                <p className="project__link">
                    <span><LuLink aria-label="Lien vers le site" title="Lien" /> : </span>
                    <a href={link} target="_blank" title={link}>{link}</a>
                </p>
            </div>
        </article>
    );
}

export default ProjectView;