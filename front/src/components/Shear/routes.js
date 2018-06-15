import React from'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App'
import Header from './Header'
import Auth from './Auth'
import Login from "./Login";
import Student from "../../container/Student";
import SendChange from "../Student/SendChange"
import Top from "../Teacher/Top";
import ChangeList from '../../container/ChangeList'
import StudentList from "../../container/StudentList"
import DayChange from "../Teacher/DayChange"

const routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <App>
                <Switch>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Auth>
                            <Switch>
                                <Route path="/" component={Student}/>
                                <Route path="/top" component={Top}/>
                                <Route path="/changelist" component={ChangeList}/>
                                <Route path="/studentlist" component={StudentList}/>
                                <Route path="/daychange" component={DayChange}/>
                                <Route path="/change/:id/:date" component={SendChange}/>
                            </Switch>
                        </Auth>
                    </Switch>
                </Switch>
            </App>
        </BrowserRouter>
    )
};

export default routes;
