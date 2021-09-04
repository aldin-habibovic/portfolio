import EducationItem, { IEducationItem } from './Education-Item';

const EducationSection = (props: { educations: IEducationItem[] }) => {

    /*
    const educationItem1: IEducationItem = {
        start: new Date(), end: new Date(), level: 'Master Degree', university: 'University of Sarajevo', degreeCourse: 'Master of Mathematics, department: Theoretical Computer Science', description:
            "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
    };

    const educationItem2: IEducationItem = {
        start: new Date(), end: new Date(), level: "Bachelor's Degree", university: 'University of Bihac', degreeCourse: 'Bachelor of Computer Science', description:
            "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
    };

    const educationItem3: IEducationItem = {
        start: new Date(), end: new Date(), level: 'High School', university: 'High School of Sanski Most', degreeCourse: 'Electrotechnik', description:
            "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
    };
*/

    // const educations = [educationItem1, educationItem2, educationItem3];

    const content = props.educations.map((education: IEducationItem) =>
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