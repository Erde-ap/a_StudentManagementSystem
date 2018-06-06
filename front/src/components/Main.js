import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login";
import Student from "../container/Student";
import SendChange from "../container/SendChange";


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/"  component={Login} />
            <Route path="/student" component={Student} />
            <Route path="/change/:id/:date" component={SendChange} />} />
        </Switch>
    </main>
);

export default Main;
