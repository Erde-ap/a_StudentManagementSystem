import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChange from "./SendChange";


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/"  component={Login} />
            <Route path="/student" component={Student} />
            <Route path="/change/:date" render={props => <SendChange match={props.match} />} />
        </Switch>
    </main>
);

export default Main;
