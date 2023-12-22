import SkillView from "../components/SkillView";
import { technologies,tools } from "../data/mySkills";

function MySkillsSection() {
    return (
        <section className="section" id="section-my-skills">
            <h3>Mes compétences</h3>

            <h4>Technologies</h4>

            <div className="skills-container">
                {technologies.map((techno,index) => <SkillView
                    key={techno.id || index}
                    name={techno.name}
                    logo={techno.logo}
                />)}
            </div>

            <h4>Outils</h4>

            <div className="skills-container">
                {tools.map((tool,index) => <SkillView
                    key={tool.id || index}
                    name={tool.name}
                    logo={tool.logo}
                />)}
            </div>
        </section>
    );
}

export default MySkillsSection;