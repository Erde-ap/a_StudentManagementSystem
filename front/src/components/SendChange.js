import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

const SendChange =  ({}) => (
            <Container>
                <Row className="mt-80">
                    <Col lg={{size:4,offset:4}}>
                        <h1 className="text-center">出席状況の変更</h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup row>
                        <Label for="exampleDate" lg={{size:4, offset:4}}>日付</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="date" name="date" id="dateId" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" lg={{size:4, offset:4}}>時間</Label>
                        <Col lg={{size:2, offset:4}}>
                            <Input type="select" name="selectTime" id="selectTime">
                                <option>1限から</option>
                                <option>2限から</option>
                                <option>3限から</option>
                                <option>4限から</option>
                                <option>5限から</option>
                            </Input>
                        </Col>
                        <Col lg={{size:2}}>
                            <Input type="select" name="selectTime" id="selectTime">
                                <option>1限まで</option>
                                <option>2限まで</option>
                                <option>3限まで</option>
                                <option>4限まで</option>
                                <option>5限まで</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" lg={{size:4, offset:4}}>目的</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="select" name="selectChange" id="selectChange">
                                <option>出席に変更</option>
                                <option>遅刻に変更</option>
                                <option>欠席に変更</option>
                                <option>就活に変更</option>
                                <option>病欠に変更</option>
                                <option>公欠に変更</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" lg={{size:4, offset:4}}>理由(150文字以内)</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="textarea" name="text" id="exampleText" maxlength="150"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col lg={{size:4, offset:4}}>
                            <Button color="primary" size="lg" block>送信</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )

export default SendChange
