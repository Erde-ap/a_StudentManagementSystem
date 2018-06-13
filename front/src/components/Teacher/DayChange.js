/*
import React, {Component} from 'react'
import {Container, Row, Popover, PopoverHeader, PopoverBody, Button} from 'reactstrap'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
// import Popup from 'react-popup'
// import '../../../node_modules/react-popup/style.css'
import DayChangeForm from "./DayChangeForm"


class DayChange extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            events:[
                {
                    title: '土曜日、日曜日',
                    dow: [0,6],
                    rendering: 'background',
                    color: 'red'
                },
                {
                    title: 'ゴミの日',
                    start: '2018-06-05T00:00:00',
                    end: '2018-06-05T18:00:00'
                },
                {
                    title: 'ゴミの日2nd',
                    start: '2018-06-05T00:00:00',
                    end: '2018-06-05T18:00:00'
                }
            ],
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="calendar_id" toggle={this.toggle}>
                        <PopoverHeader>出席日を変更します</PopoverHeader>
                        <PopoverBody>
                            <DayChangeForm/>
                        </PopoverBody>
                    </Popover>
                    <FullCalendar
                        id="calendar_id"
                        locale={'ja'}
                        header = {{
                            left: 'prev,next,today myCustomButton',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}
                        navLinks= {false} // 日付クリック時のアクションをなくす
                        editable= {false} // イベントをドラッグアンドドロップできなくする
                        events = {this.state.events}
                        selectable={true}
                        dayClick={(date) =>{
                            this.toggle()
                            //Popup.alert( <DayChangeForm date={date.format('YYYY/MM/DD')} /> )
                        } }
                    />
                </Row>
            </Container>
        )
    }
}

export default DayChange

*/

import React, {Component} from 'react'
import {Container, Row, Popover, PopoverHeader, PopoverBody, Button} from 'reactstrap'

class Example extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Button id="Popover1" onClick={this.toggle}>
                        Launch Popover
                    </Button>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverBody>Body</PopoverBody>
                    </Popover>
                </Row>
            </Container>
        )
    }
}

export default Example
/*


import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Chip from 'material-ui/Chip';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = (event) => {
        this.setState({
            open: !this.state.open,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={true} onLeftIconButtonTouchTap={this.handleToggle} />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                            animation={PopoverAnimationVertical}
                        >
                            <Menu>
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help &amp; feedback" />
                                <MenuItem primaryText="Settings" />
                                <MenuItem primaryText="Sign out" />
                            </Menu>
                        </Popover>
                    </div>
                    <header>
                        <List>
                            <ListItem leftAvatar={<Avatar src={logo} />}>
                                Welcome to React
                            </ListItem>
                        </List>
                    </header>

                    <Chip>
                        To Get started, edit <code>src/App.js</code> and save to reload.
                    </Chip>

                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;

*/
