import React from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {changePasswordPost} from "../../actions";

let FirstLogin = ({handleSubmit, onSubmit,isLogin}) => {
    return (
        <Container>
            <Row className="mt-80">
                <Col lg={{size: 4, offset: 4}}>
                    <h1 className="text-center">パスワードの変更</h1>
                </Col>
            </Row>
            <Row className="mt-30">
                <Col lg={{size: 4, offset: 4}}>
                    <h6 className="text-center">初期パスワードから変更する必要があります。</h6>
                </Col>
                <Col lg={{size: 4, offset: 4}}>
                    <h6 className="text-center">8文字以上の新しいパスワードに更新してください。</h6>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <FormGroup row className="mt-30">
                    <Label for="exampleDate" lg={{size: 4, offset: 4}}>新しいパスワード</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="first_password" component="input"/>
                    </Col>
                    <Label for="exampleDate" lg={{size: 4, offset: 4}}>パスワードの確認</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="second_password" component="input"/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mt-50">
                    <Col lg={{size: 4, offset: 4}}>
                        <Button color="primary" size="lg" block>変更</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {...state.sendChange},
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: (values) => {
            dispatch(changePasswordPost(values));
        }
    }
};


FirstLogin= reduxForm({
    form: 'sendChangeState',
    enableReinitialize: true,
})(FirstLogin);

FirstLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstLogin);

export default FirstLogin;

