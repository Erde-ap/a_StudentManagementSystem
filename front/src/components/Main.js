import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChangeView from "./SendChange"
import ContactForm from './test'
import SendChange from "../container/SendChange";
import Top from "./Top";
import ChangeList from "./ChangeList"
import StudentList from "./StudentList"
import DayChange from "./DayChange"

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

<<<<<<< HEAD
export default Main
=======
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/"  component={Login} />
            <Route path="/student" component={Student} />
            <Route path="/top" component={Top} />
            <Route path="/changelist" component={ChangeList} />
            <Route path="/studentlist" component={StudentList} />
            <Route path="/daychange" component={DayChange} />
            <Route path="/change/:date" render={props => <SendChange match={props.match} />} />
        </Switch>
    </main>
);

export default Main;
>>>>>>> nakama
