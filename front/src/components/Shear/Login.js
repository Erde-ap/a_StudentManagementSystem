import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Container, Row, Col, FormGroup, Label, Input, Button,Alert} from 'reactstrap'
import {connect} from "react-redux";
import {loginAuthPost, fistLoginInitializeState} from '../../actions'
import {Redirect} from 'react-router-dom';

let Login = ({handleSubmit, onSubmit, isLogin, serverMessage,permission}) => {
    return isLogin ? permission === 0 ? (<Redirect to='/student'/>) : (<Redirect to='/studentlist'/>) : (
        <Container>
            <Row className="mt-80">
                <Col lg={{size: 4, offset: 4}}>
                    <h1 className="text-center">出席管理システム</h1>
                </Col>
            </Row>
            <Row className="mt-30">
                <Col lg={{size: 4, offset: 4}}>
                    {
                        serverMessage === "" ? "" :<Alert color="danger">{serverMessage}</Alert>
                    }
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <FormGroup row className="mt-30">
                    <Label for="exampleDate" lg={{size: 4, offset: 4}}>学籍番号</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="student_id" component="input"/>
                    </Col>
                    <Label for="exampleDate" lg={{size: 4, offset: 4}}>パスワード</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="password" type="password" component="input"/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mt-50">
                    <Col lg={{size: 4, offset: 4}}>
                        <Button color="primary" size="lg" block>ログイン</Button>
                    </Col>
                </FormGroup>
            </form>
        </Container>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.auth.isLogin,
        permission: state.auth.permission,
        serverMessage: state.auth.serverMessage
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: (values) => {
            console.log(values);
            dispatch(fistLoginInitializeState(values.student_id));
            dispatch(loginAuthPost(values));
        }
    }
};


Login = reduxForm({
    form: 'login',
})(Login);

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Login;
