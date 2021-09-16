import React from "react"
import { ButtonSpinner } from "./Button-Spinner";
import { Alert } from 'reactstrap';
import SendEmailService from "../../services/send-email-service";
export interface IContactForm {
    name: string,
    subject: string,
    email: string,
    message: string,
    date: string
}

interface IContactFormState {
    contactForm: IContactForm
    isLoading: boolean;
    showSuccessMessage: boolean;
    showErrorMessage: boolean;
}


class ContactForm extends React.Component<{}, IContactFormState> {

    initialState = { name: '', subject: '', email: '', message: '', date: new Date().toLocaleString() };

    constructor(props: any) {
        super(props);
        this.state = {
            contactForm: this.initialState,
            isLoading: false,
            showSuccessMessage: false,
            showErrorMessage: false
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState(prevState => ({
            contactForm: { ...prevState.contactForm, [event.target.name]: event.target.value }
        }));
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.setState({ isLoading: true });

        SendEmailService.sendEMail(this.state.contactForm)
            .then((response: Response) => {
                this.setState({ isLoading: false });
                this.showInfoAlert();
                this.reset();
            }).catch((error) => {
                this.showErrorAlert();
            });
    }

    reset = () => {
        this.setState({ contactForm: this.initialState });

        this.resetAttribute('name');
        this.resetAttribute('subject');
        this.resetAttribute('email');
        this.resetAttribute('message');
    }

    resetAttribute(id: string) {
        (document.getElementById(id) as HTMLInputElement).value = '';
    }

    showInfoAlert() {
        this.setState({ showSuccessMessage: true }, () => {
            setTimeout(() => { this.setState({ showSuccessMessage: false }) }, 3000);
        });
    }

    showErrorAlert() {
        this.setState({ showErrorMessage: true }, () => {
            setTimeout(() => { this.setState({ showErrorMessage: false }) }, 3000);
        });
    }

    render() {
        const { isLoading, showSuccessMessage, showErrorMessage } = this.state;

        return (
            <div className="col-md-6" >
                <div className="card-body">
                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
                                    <input className="form-control" id="name" type="text" name="name" onChange={this.onChange} placeholder="Name" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text"></i></span>
                                    <input className="form-control"id="subject" type="text" name="subject" onChange={this.onChange} placeholder="Subject" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                    <input className="form-control" id="email" type="email" name="email" onChange={this.onChange} placeholder="E-mail" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <textarea className="form-control" id="message" name="message" onChange={this.onChange} placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ButtonSpinner loading={isLoading} />
                        </div>
                    </form>
                    <div className="row">
                        <div className="col">
                            <Alert style={{ backgroundColor: '#378C3F' }} isOpen={showSuccessMessage}>
                                Your message has been sent.
                            </Alert>
                            <Alert style={{ backgroundColor: '#943434' }} isOpen={showErrorMessage}>
                                Something went wrong, please try again.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;