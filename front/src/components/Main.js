import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Student from "../container/Student";

import Login from "./Login";
import SendChange from "./SendChange";


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/student" component={Student} />
            <Route path="/change" component={SendChange} />
        </Switch>
    </main>
);

export default Main;
