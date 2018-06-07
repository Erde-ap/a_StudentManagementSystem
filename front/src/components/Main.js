import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChange from "./SendChange"
import Top from "./Top";
import ChangeList from "./ChangeList"
import StudentList from "./StudentList"
import DayChange from "./DayChange"

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/student" component={Student}/>
                    <Route path="/top" component={Top}/>
                    <Route path="/changelist" component={ChangeList}/>
                    <Route path="/studentlist" component={StudentList}/>
                    <Route path="/daychange" component={DayChange}/>
                    <Route path="/change/:id/:date" component={SendChange}/>
                </Switch>
            </main>
        )
    }
}

export default Main;
