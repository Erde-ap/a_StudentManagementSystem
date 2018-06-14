import React, {Component} from 'react'
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'

class DayChange extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:"2018/06/01"
        }
    }
    render(){
        return(
            <Container>
                <Row className="mt-80">
                    <Col lg={{size: 4, offset: 4}}>
                        <h1 className="text-center">出席日の変更</h1>
                    </Col>
                </Row>
                <form>
                    <FormGroup row>
                        <Label for="Date" lg={{size: 4, offset: 4}}>日付</Label>
                        <Col lg={{size: 4, offset: 4}}>
                            <Input type="date"name="date" id="exampleDate"/>
                        </Col>
                    </FormGroup>
                    <FormGroup Row>
                        <Label for="Change" lg={{size: 4, offset: 4}}>変更</Label>
                        <Col lg={{size: 4, offset: 4}}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>出席日に変更</option>
                                <option>休日に変更</option>
                                <option>午前休みに変更</option>
                                <option>午後休みに変更</option>
                            </Input>
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
            </Container>
        )
    }
}

export default DayChange