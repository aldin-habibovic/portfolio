import { SkillDTO } from "../../../FETCHERS";
import SkillItem from "./Skill-Item";

const SkillSection = (props: { skills: SkillDTO[] }) => {

    const content = props.skills.map((item, index, arr) => {
        if (index % 2 === 0) {
            const pair = arr.slice(index, index + 2);

            return (
                <div className="row">
                    {
                        pair.map((skill) => {
                            return (
                                <SkillItem skill={skill} />
                            )
                        })
                    }
                </div>
            )
        }
        return "";
    });

    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Professional Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillSection;