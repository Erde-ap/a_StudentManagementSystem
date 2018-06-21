import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from "react-redux";

const Auth = (props) => (props.isLogin ? props.children : <Redirect to='/'/>);

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin:state.auth.isLogin
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
