import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Header from './Header'

class FirstLogin extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <Row className="mt-80">
                    <Col lg={{size:4,offset:4}}>
                        <h1 class="text-center">パスワードの変更</h1>
                    </Col>
                </Row>
                <Row className="mt-30">
                    <Col lg={{size:4,offset:4}}>
                        <h6 class="text-center">初期パスワードから変更する必要があります。</h6>
                    </Col>
                    <Col lg={{size:4,offset:4}}>
                        <h6 class="text-center">8文字以上の新しいパスワードに更新してください。</h6>
                    </Col>
                </Row>
                <Form>
                    <FormGroup row className="mt-30">
                        <Label for="exampleDate" lg={{size:4, offset:4}}>新しいパスワード</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="password" name="password" id="passwordId" />
                        </Col>
                        <Label for="exampleDate" lg={{size:4, offset:4}}>パスワードの確認</Label>
                        <Col lg={{size:4, offset:4}}>
                            <Input type="password" name="passwordConfirm" id="passwordConfirmId" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-50">
                        <Col lg={{size:4, offset:4}}>
                            <Button color="primary" size="lg" block>変更</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default FirstLogin