import { SkillDTO } from "../../../FETCHERS";

const SkillItem = (props: { skill: SkillDTO }) => {
    const { name, progress } = props.skill;
    return (
        <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">{name}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                        aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: progress }}></div>
                    <span className="progress-value">{progress}</span>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;