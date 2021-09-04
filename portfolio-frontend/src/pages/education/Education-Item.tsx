import { EducationDTO } from "../../../FETCHERS";


const EducationItem = (props: { educationItem: EducationDTO }) => {
    const { level, university, degreeCourse, description } = props.educationItem;

    return (
        <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-education-header">
                    <p>2007 - 2009</p>
                    <div className="h5">{level}</div>
                </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                    <div className="h5">{degreeCourse}</div>
                    <p className="category">{university}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default EducationItem;