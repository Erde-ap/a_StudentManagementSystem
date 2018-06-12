import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Student from "../../container/Student";
import SendChange from "../Student/SendChange"
import Top from "../Teacher/Top";
import ChangeList from '../../container/ChangeList'
import StudentList from "../../container/StudentList"
import DayChange from "../Teacher/DayChange"

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
