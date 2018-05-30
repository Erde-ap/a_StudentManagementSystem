import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Student from "../container/Student";

import Login from "./Login";
import SendChange from "./SendChange";
import Top from "./Top";
import ChangeList from "./ChangeList"
import StudentList from "./StudentList"
import DayChange from "./DayChange"


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/student" component={Student} />
            <Route path="/change" component={SendChange} />
            <Route path="/top" component={Top} />
            <Route path="/changelist" component={ChangeList} />
            <Route path="/studentlist" component={StudentList} />
            <Route path="/daychange" component={DayChange} />
        </Switch>
    </main>
);

export default Main;
