import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser}from "../../actions"


let Header = ({isLoginFunc, user,logoutButton}) => {
    return (
        <Navbar color="info" light expand="md" fixed="top">
            <NavbarBrand>KOBEDENSHI</NavbarBrand>
            <Nav className="ml-1" navbar>
                <NavItem>
                    {isLoginFunc(user.isLogin,user)}
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    {
                        user.name === undefined ? "" :
                            <NavLink>{user.name}</NavLink>
                    }
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        メニュー
                    </DropdownToggle>
                        {
                            user.isLogin ? user.permission === 0 ?
                                                    <DropdownMenu right>
                                                        <Link to="/student"><DropdownItem>生徒画面</DropdownItem></Link>
                                                        <DropdownItem onClick={logoutButton}>ログアウト</DropdownItem>
                                                    </DropdownMenu>

                                                  : <DropdownMenu right><Link to="/top"><DropdownItem>トップ</DropdownItem>
                                                    </Link> < Link to="/studentlist"><DropdownItem>生徒状況一覧</DropdownItem></Link>
                                                    <Link to="/changelist"><DropdownItem>変更届け一覧</DropdownItem></Link>
                                                    <Link to="/daychange"><DropdownItem>出席日の変更</DropdownItem></Link>
                                                    <DropdownItem onClick={logoutButton}>ログアウト</DropdownItem>
                                                    </DropdownMenu>
                                : ""
                        }
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth,
        isLoginFunc: (loginState,user) => {
            return loginState ? user.permission === 0 ?
                <Link to="/student">ホーム</Link> :
                <Link to="/studentlist">ホーム</Link>
                : <Link to="/">ホーム</Link>
        }
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        logoutButton: () => {
            return dispatch(logoutUser());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

