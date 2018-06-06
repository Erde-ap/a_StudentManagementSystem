import React from 'react'
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import {Link} from "react-router-dom";

const postDateCreate = (date) => {
    let arrayDate = date.split("-");
    arrayDate[3] = arrayDate[0] + "/" + arrayDate[1] + "/" + arrayDate[2];
    return arrayDate;
};

const SendChangeView = ({match,send}) => (
    <Container>
        <Row className="mt-80">
            <Col lg={{size: 4, offset: 4}}>
                <h1 className="text-center">出席状況の変更</h1>
            </Col>
        </Row>
        <Form id="postForm" name="postForm">
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
                    <Input type="select" name="periodStart" id="periodStart">
                        <option value={1}>1限から</option>
                        <option value={2}>2限から</option>
                        <option value={3}>3限から</option>
                        <option value={4}>4限から</option>
                        <option value={5}>5限から</option>
                    </Input>
                </Col>
                <Col lg={{size: 2}}>
                    <Input type="select" name="periodEnd" id="periodEnd">
                        <option value={1}>1限まで</option>
                        <option value={2}>2限まで</option>
                        <option value={3}>3限まで</option>
                        <option value={4}>4限まで</option>
                        <option value={5}>5限まで</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" lg={{size: 4, offset: 4}}>目的</Label>
                <Col lg={{size: 4, offset: 4}}>
                    <Input type="select" name="req_type" id="selectChange">
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
                    <Input type="textarea" maxLength="150" ref={(ref) => (this.myInput = ref)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col lg={{size: 4, offset: 4}}>
                    <Link to="/student"><Button color="primary" size="lg" type="submit" onClick={(event) => send(event)} block>送信</Button></Link>
                </Col>
            </FormGroup>
            <input type="hidden" name="student_id" value={match.params.id}/>
            <input type="hidden" name="req_year" value={postDateCreate(match.params.date)[0]}/>
            <input type="hidden" name="req_month" value={postDateCreate(match.params.date)[1]}/>
            <input type="hidden" name="req_day" value={postDateCreate(match.params.date)[2]}/>
            <input type="hidden" name="req_date" value={postDateCreate(match.params.date)[3]}/>
        </Form>

    </Container>
);

export default SendChangeView
