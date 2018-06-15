import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Auth from './Auth'
import Student from "../../container/Student";
import SendChange from "../Student/SendChange"
import Top from "../Teacher/Top";
import ChangeList from '../../container/ChangeList'
import StudentList from "../../container/StudentList"
import DayChange from "../Teacher/DayChange"
import {connect} from "react-redux";
import FirstLogin from "./FirstLogin";

const ConnectedSwitch = connect(state => ({
    location: state.router.location
}))(Switch);

class Main extends React.Component {

    render() {
        return (
            <main>
                <ConnectedSwitch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/test" component={FirstLogin}/>
                    <Auth>
                        <ConnectedSwitch>
                            <Route path="/first" component={FirstLogin}/>
                            <Route path="/student" component={Student}/>
                            <Route path="/top" component={Top}/>
                            <Route path="/changelist" component={ChangeList}/>
                            <Route path="/studentlist" component={StudentList}/>
                            <Route path="/daychange" component={DayChange}/>
                            <Route path="/change/:id/:date" component={SendChange}/>
                        </ConnectedSwitch>
                    </Auth>
                </ConnectedSwitch>
            </main>
        )
    }
}

export default Main;
