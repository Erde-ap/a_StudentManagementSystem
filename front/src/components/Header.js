import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <Navbar color="info" light expand="md" fixed="top">
                <NavbarBrand>KOBEDENSHI</NavbarBrand>
                <Nav className="ml-1" navbar>
                    <NavItem>
                        <NavLink><Link to="/">ホーム</Link></NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink><Link to="student">生徒画面</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="change">変更届け</Link></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
