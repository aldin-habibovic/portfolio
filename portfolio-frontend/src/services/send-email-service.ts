import { IContactForm } from "../pages/contact/Conact-Form";

const SNED_EMAIL_API = 'https://us-central1-my-portfolio-323610.cloudfunctions.net/emails';

const SendEmailService =  {

    sendEMail(contactForm: IContactForm) {
        return fetch(SNED_EMAIL_API, {
            method: "POST",
            body: JSON.stringify(contactForm),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    }

}

export default SendEmailService;

