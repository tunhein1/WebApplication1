import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ToggleDisplay   from 'react-toggle-display';

interface ContactState {
    firstName: string;
    lastName: string;
    isDisplay: boolean;
    
}

export class Contact extends React.Component<RouteComponentProps<{}>, ContactState>{
    constructor() {
        super();
        this.state = { firstName: "Admin Firstname", lastName: "Admin Last Name", isDisplay: false }
    }

    public render() {
        return <div>
            <h1>Contact us </h1>

            <p>Please contact to the following person:</p>

            {this.state.isDisplay ? < NameResult /> : ""}

            <button onClick={() => { this.handleClick }}>See person {this.state.isDisplay}</button>

            

            <ToggleDisplay show={this.state.isDisplay}>
                I am rendered in a span (by default) and hidden with display:none when show is false.
        </ToggleDisplay>

            </div>;

    }

   

    handleClick() {
        this.setState({
            isDisplay: !this.state.isDisplay
        });
    }

}

var NameResult = React.createClass({
    render() {
        return <div>Jonny English</div>;
    }
});