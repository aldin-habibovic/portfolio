import { Component } from "react";


export interface IButtonSpinnerProps {
    loading: boolean;
}

export class ButtonSpinner extends Component<IButtonSpinnerProps> {

    render() {
        return (
            <div className="col">
                <button className="btn btn-primary" type="submit" disabled={this.props.loading}>{this.props.loading ? 'Sending...' : 'Send'}</button>
            </div>
        );
    }

}