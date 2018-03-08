import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ToggleDisplay from 'react-toggle-display';
import * as ReactDOM from 'react-dom';

interface ContactState {
    firstName: string;
    lastName: string;
    isDisplay: boolean;
    
}

export class Contact extends React.Component<RouteComponentProps<{}>, ContactState>{
    constructor() {
        super();
        this.state = { firstName: "Admin Firstname", lastName: "Admin Last Name", isDisplay: false }
        this.handleClick = this.handleClick.bind(this);
        this.tick = this.tick.bind(this);
        setInterval(this.tick, 1000);
    }

    public render() {
        return <div>
            <h1>Contact us </h1>

            <p>Please contact to the following person:</p>

            {this.state.isDisplay ? < NameResult /> : ""}

            <button onClick={this.handleClick} > See person {this.state.isDisplay}</button>

            

            <ToggleDisplay show={this.state.isDisplay}>
                <p>I am rendered in a span (by default) and hidden with display:none when show is false.</p>
            </ToggleDisplay>

            

            <div id='clock-div'>
                
            </div>
            
            </div>;

    }

   

    handleClick() {
        console.log("button clicked.");
        this.setState({
            isDisplay: !this.state.isDisplay
        });

        console.log(this.state.isDisplay);
    }

    tick() {
        const element = (
        <div>
            <h1>Local Time</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>);

        ReactDOM.render(element, document.getElementById('clock-div'));
        
    }

}

var NameResult = React.createClass({
    render() {
        return <div>Jonny English</div>;
    }
});