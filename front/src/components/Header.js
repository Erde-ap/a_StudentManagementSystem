import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
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
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            画面遷移
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href="/student">生徒画面</DropdownItem>
                            <DropdownItem tag="a" href="/change">変更届け</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="/top">トップ</DropdownItem>
                            <DropdownItem tag="a" href="/studentlist">生徒状況一覧</DropdownItem>
                            <DropdownItem tag="a" href="/changelist">変更届け一覧</DropdownItem>
                            <DropdownItem tag="a" href="/daychange">出席日の変更</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
