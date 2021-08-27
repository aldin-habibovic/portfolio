import SkillItem, { ISkillItem } from "./Skill-Item";

const Skills = () => {
    const skill1: ISkillItem = { name: "HTML1", progress: "20%" };
    const skill2: ISkillItem = { name: "CSS1", progress: "75%" };

    const skill3: ISkillItem = { name: "Javascript", progress: "60%" };
    const skill4: ISkillItem = { name: "SASS", progress: "60%" };

    const skill5: ISkillItem = { name: "Bootstrap", progress: "45%" };
    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Professional Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        <div className="row">
                            <SkillItem skill={skill1}></SkillItem>
                            <SkillItem skill={skill2}></SkillItem>
                        </div>
                        <div className="row">
                            <SkillItem skill={skill3}></SkillItem>
                            <SkillItem skill={skill4}></SkillItem>
                        </div>
                        <div className="row">
                            <SkillItem skill={skill5}></SkillItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;