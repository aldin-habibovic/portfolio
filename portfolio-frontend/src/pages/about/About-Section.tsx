import { BasicInformationDTO } from '../../../FETCHERS';
import ReadMore from '../../common/components/Read-More';


const AboutSection = (props: { basicInfos: BasicInformationDTO }) => {
    const { description, age, email, phone, address, languages } = props.basicInfos;

    const asCommaSeparatedString = (value?: string[]) => value?.join(', ');

    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">About</div>
                                <p>Hi! I am Aldin Habibović. Software Engineer. Orginially from Bosnia and Herzegowin. Currently lving and working in Germany (Munich).</p>
                                <ReadMore content={description}></ReadMore>
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
                                    <div className="col-sm-8">{asCommaSeparatedString(languages)}</div>
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