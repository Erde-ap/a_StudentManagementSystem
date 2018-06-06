import React, {Component} from 'react'
import {Container, Row, Col, Input, Button} from 'reactstrap'
import Header from './Header'

class Top extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <Row className="mt-100">
                    <Col lg={{size:4, offset:4}}>
                        <a href="/studentlist"><Button color="primary" size="lg" block>出席状況の一覧</Button></a>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <Col lg={{size:4, offset:4}}>
                        <a href="/changelist"><Button color="primary" size="lg" block>変更届け一覧</Button></a>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <Col lg={{size:4, offset:4}}>
                        <a href="/daychange"><Button color="primary" size="lg" block>出席日の変更</Button></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Top