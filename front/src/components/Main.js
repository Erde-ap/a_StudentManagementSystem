import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChangeView from "./SendChange"
import ContactForm from './test'

class Main extends React.Component {
    saveSettings(values) {
        // Handle form submit
        // Save form fields
    console.log(values)
    }
    render() {
        return (
        <main>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/student" component={Student}/>
                <Route path="/change/:id/:date" component={SendChangeView} onSubmit={this.saveSettings} />
                <Route path="/test" component={ContactForm} onSubmit={this.saveSettings} />
            </Switch>
        </main>
        )
    }
}

export default Main
