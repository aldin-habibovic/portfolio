import { BasicInformationDTO } from "../../../FETCHERS";
import ContactForm from "./Conact-Form";

const ContactSection = (props: { basicInfos: BasicInformationDTO }) => {

    const { firstName, lastName, email, phone, address } = props.basicInfos;

    return (
        <div className="section" id="contact">
            <div className="cc-contact-information" style={{ backgroundImage: "url('images/munich_staticmap.png')" }}>
                <div className="container">
                    <div className="cc-contact">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="card mb-0" data-aos="zoom-in">
                                    <div className="h4 text-center title">Contact Me</div>
                                    <div className="row">
                                        <ContactForm></ContactForm>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <p className="mb-0"><strong>First name </strong></p>
                                                <p className="pb-2">{firstName}</p>
                                                <p className="mb-0"><strong>Last name </strong></p>
                                                <p className="pb-2">{lastName}</p>
                                                <p className="mb-0"><strong>Address </strong></p>
                                                <p className="pb-2">{address}</p>
                                                <p className="mb-0"><strong>Phone</strong></p>
                                                <p className="pb-2">{phone}</p>
                                                <p className="mb-0"><strong>Email</strong></p>
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;