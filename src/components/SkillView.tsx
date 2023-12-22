import type { SkillType } from "../data/mySkills";

function SkillView({ name,logo }: SkillType) {
    return (
        <article className="skill">
            <div className="skill__logo">
                <img src={logo} alt={`Logo de ${name}`} />
            </div>

            <h5>{name}</h5>
        </article>
    );
}

export default SkillView;