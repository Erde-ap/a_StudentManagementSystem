import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Container, Row, Col, Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap'
import {
    Collapse,
    NavbarToggler,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

class Header extends Component{
    render(){
        return(
            <Navbar color="info" light expand="md" fixed="top">
                <NavbarBrand href="/">KOBEDENSHI</NavbarBrand>
                <Nav className="ml-1" navbar>
                    <NavItem>
                        ホーム
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">ログアウト</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">パスワード変更</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header