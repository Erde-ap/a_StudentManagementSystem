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
                            <DropdownItem ><Link to="/student">生徒画面</Link></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem ><Link to="/top">トップ</Link></DropdownItem>
                            <DropdownItem ><Link to="/studentlist">生徒状況一覧</Link></DropdownItem>
                            <DropdownItem ><Link to="/changelist">変更届け一覧</Link></DropdownItem>
                        <DropdownItem><Link to="/daychange">出席日の変更</Link></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
