import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChange from "../container/SendChange";
import Top from "./Top";
import ChangeList from "./ChangeList"
import StudentList from "./StudentList"
import DayChange from "./DayChange"


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
