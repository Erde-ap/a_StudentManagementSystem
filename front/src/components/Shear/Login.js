import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import {connect} from "react-redux";
import {loginAuthPost}from'../../actions'

let Login = ({handleSubmit, onSubmit,isLogin}) => {
    return (
        <Container>
            <Row className="mt-80">
                <Col lg={{size: 4, offset: 4}}>
                    <h1 className="text-center">出席管理システム</h1>
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
                        <Input tag={Field} name="password" component="input"/>
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
        isLogin:state.auth.isLogin
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: (values) => {
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
