import { BasicInformationDTO } from '../../../FETCHERS';
import ReadMore from '../../common/components/Read-More';

const AboutSection = (props: { basicInfos: BasicInformationDTO }) => {
    const { firstName, lastName, age, email, phone, address, languages } = props.basicInfos;

    const desc = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.....Aysen ich liebe dich soooooooooo sehr ob du es glaubst oder nicht duuuu dummmmy :D"';

    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">About</div>
                                <p>Hello! I am Aldin Habibović. Software Engineer</p>
                                <ReadMore content={desc}></ReadMore>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Basic Information</div>
                                <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                    <div className="col-sm-8">{age}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                    <div className="col-sm-8">{email}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                    <div className="col-sm-8">{phone}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                    <div className="col-sm-8">{address}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                                    <div className="col-sm-8">{languages}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;