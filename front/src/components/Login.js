import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Header from './Header'

class Login extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <Row className="mt-80">
                    <Col lg={{size:4,offset:4}}>
                        <h1 class="text-center">出席管理システム</h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup row className="mt-30">
                        <Label for="exampleDate" lg={{size:4, offset:4}}>学籍番号</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="studentNumber" name="studentNumber" id="studentNumberId" />
                        </Col>
                        <Label for="exampleDate" lg={{size:4, offset:4}}>パスワード</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="password" name="password" id="passwordId" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-50">
                        <Col lg={{size:4, offset:4}}>
                            <Button color="primary" size="lg" block>ログイン</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default Login