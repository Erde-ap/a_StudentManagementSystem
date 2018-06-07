import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {Link} from "react-router-dom";


class Top extends Component{
    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Col lg={{size:4, offset:4}}>
                        <Link to="/studentlist"><Button color="primary" size="lg" block>出席状況の一覧</Button></Link>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <Col lg={{size:4, offset:4}}>
                        <Link to="/changelist"><Button color="primary" size="lg" block>変更届け一覧</Button></Link>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <Col lg={{size:4, offset:4}}>
                        <Link to="/daychange"><Button color="primary" size="lg" block>出席日の変更</Button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Top
