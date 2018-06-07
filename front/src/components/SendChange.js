import React from 'react'
import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap'
import {Link} from "react-router-dom";
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {Redirect} from 'react-router'
import {postMessage} from '../actions/index'

let sendChange = ({handleSubmit, match, onSubmit, isFetching}) => {
    return (
        <Container>
            <Row className="mt-80">
                <Col lg={{size: 4, offset: 4}}>
                    <h1 className="text-center">出席状況の変更</h1>
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="exampleDate" lg={{size: 4, offset: 4}}>日付</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <h3>{match.params.date}</h3>
                        <Link to="/student">変更</Link>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" lg={{size: 4, offset: 4}}>時間</Label>
                    <Col lg={{size: 2, offset: 4}}>
                        <div>
                            <Input tag={Field} name="periodStart" component="select">
                                <option></option>
                                <option value="1">1限から</option>
                                <option value="2">2限から</option>
                                <option value="3">3限から</option>
                                <option value="4">4限から</option>
                                <option value="5">5限から</option>
                            </Input>
                        </div>
                    </Col>
                    <Col lg={{size: 2}}>
                        <div>
                            <Input tag={Field} name="periodEnd" component="select" value="1">
                                <option></option>
                                <option value="1">1限から</option>
                                <option value="2">2限から</option>
                                <option value="3">3限から</option>
                                <option value="4">4限から</option>
                                <option value="5">5限から</option>
                            </Input>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" lg={{size: 4, offset: 4}}>目的</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="req_type" component="select">
                            <option></option>
                            <option value="0">出席に変更</option>
                            <option value="1">遅刻に変更</option>
                            <option value="2">欠席に変更</option>
                            <option value="3">就活に変更</option>
                            <option value="4">病欠に変更</option>
                            <option value="5">公欠に変更</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" lg={{size: 4, offset: 4}}>理由(150文字以内)</Label>
                    <Col lg={{size: 4, offset: 4}}>
                        <Input tag={Field} name="reason" component="textarea" maxLength="150"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col lg={{size: 4, offset: 4}}>
                        {/*<Link to="/student">*/}
                        <Button color="primary" size="lg" block>送信</Button>
                        {/*</Link>*/}
                    </Col>
                </FormGroup>
            </form>
            {isFetching && (
                <Redirect to={'/student'}/>
            )}
        </Container>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {...state.sendChange},
        isFetching: state.student.isFetching
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: (values) => {
            for (let i = values.periodStart; i <= values.periodEnd; i++) {
                values = {
                    ...values,
                    ['period' + i]: values.req_type
                }
            }
            console.log(values);
            dispatch(postMessage(values));
        }
    }
};

sendChange = reduxForm({
    form: 'sendChangeState',
    enableReinitialize: true,
})(sendChange);

sendChange = connect(
    mapStateToProps,
    mapDispatchToProps
)(sendChange);

export default sendChange;
