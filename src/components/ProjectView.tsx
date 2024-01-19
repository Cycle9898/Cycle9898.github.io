import type { ProjectType } from "../data/myProjects";
import { MdOutlineDescription } from "react-icons/md";
import { FaGithub,FaTags } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

function ProjectView({ title,image,description,github,link,tags }: ProjectType) {
    return (
        <article className="project">
            <div className="project__image">
                <a href={link} target="_blank" title={link}>
                    <img src={image} alt={`Capture d'écran du projet "${title}"`} />
                </a>
            </div>

            <div className="project__details">
                <h4>{title}</h4>

                <p>
                    <MdOutlineDescription aria-label="Description du projet" title="Description" /> :
                    {" " + description}
                </p>

                <p>
                    <FaGithub aria-label="Lien vers le GitHub" title="GitHub" /> : {" "}
                    <a href={github} target="_blank" title={github}>{github}</a>
                </p>

                <p>
                    <LuLink aria-label="Lien vers le site" title="Lien" /> : {" "}
                    <a href={link} target="_blank" title={link}>{link}</a>
                </p>

                <div>
                    <FaTags aria-label="Tags des technologies utilisées" title="Technologies utilisées" /> :
                    <ul className="tags">{tags.map((tag,index) => <li key={index}>{tag}</li>)}</ul>
                </div>
            </div>
        </article>
    );
}

export default ProjectView;