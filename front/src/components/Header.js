import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <Navbar color="info" light expand="md" fixed="top">
                <NavbarBrand>KOBEDENSHI</NavbarBrand>
                <Nav className="ml-1" navbar>
                    <NavItem>
                        <Link to="/">ホーム</Link>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="student">生徒画面</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="change">変更届け</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
