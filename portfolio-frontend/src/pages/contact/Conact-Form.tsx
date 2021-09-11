import React from "react"

class ContactForm extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            subject: '',
            email: '',
            message: '',
            date: new Date().toLocaleString()
        }
    }

    onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: event.target.value })
    }

    onSubjectChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch('https://us-central1-my-portfolio-323610.cloudfunctions.net/emails', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        });
    }

    render() {
        return (
            <div className="col-md-6" >
                <div className="card-body">
                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
                                    <input className="form-control" type="text" name="name" onChange={this.onNameChange.bind(this)} placeholder="Name" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text"></i></span>
                                    <input className="form-control" type="text" name="Subject" onChange={this.onSubjectChange.bind(this)} placeholder="Subject" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                    <input className="form-control" type="email" name="_replyto" onChange={this.onEmailChange.bind(this)} placeholder="E-mail" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" onChange={this.onMessageChange.bind(this)} placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;