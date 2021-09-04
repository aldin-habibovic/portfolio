import { EducationDTO } from '../../../FETCHERS';
import EducationItem from './Education-Item';

const EducationSection = (props: { educations: EducationDTO[] }) => {

    const content = props.educations.map((education: EducationDTO) =>
        <div className="card">
            <EducationItem educationItem={education}></EducationItem>
        </div>
    );

    return (
        <div className="section">
            <div className="container cc-education">
                <div className="h4 text-center mb-4 title">Education</div>
                {content}
            </div>
        </div>
    );
}

export default EducationSection;