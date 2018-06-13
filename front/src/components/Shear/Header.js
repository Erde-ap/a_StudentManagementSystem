import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
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
                            <Link to="/student"><DropdownItem>生徒画面</DropdownItem></Link>
                            <DropdownItem divider/>
                            <Link to="/top"><DropdownItem>トップ</DropdownItem></Link>
                            <Link to="/studentlist"><DropdownItem>生徒状況一覧</DropdownItem></Link>
                            <Link to="/changelist"><DropdownItem>変更届け一覧</DropdownItem></Link>
                            <Link to="/daychange"><DropdownItem>出席日の変更</DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header