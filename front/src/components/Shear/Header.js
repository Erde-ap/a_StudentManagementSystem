import React from 'react';
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
import {connect} from "react-redux";


let Header = ({isLogin,isLoginFunc}) => {
    return (
        <Navbar color="info" light expand="md" fixed="top">
            <NavbarBrand>KOBEDENSHI</NavbarBrand>
            <Nav className="ml-1" navbar>
                <NavItem>
                    {isLoginFunc(isLogin)}
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
};


const mapStateToProps = (state, ownProps) => {
    return {
        isLogin:state.auth.isLogin,
        isLoginFunc: (loginState) =>  {
            return loginState ? <Link to="/student">ホーム</Link> : <Link to="/">ホーム</Link>
        }
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

