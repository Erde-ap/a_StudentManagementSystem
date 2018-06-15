import React, {Component} from "react";
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'

class DayChangeForm extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <Container>
                <form>
                    <FormGroup row>
                        <Col lg={{size: 12}}>
                            <h4>{this.props.date.format('YYYY年MM月DD日')}　を</h4>
                        </Col>
                        <Col lg={{size: 12}}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>出席日に変更します</option>
                                <option>休日に変更します</option>
                                <option>午前休みに変更します</option>
                                <option>午後休みに変更します</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-50">
                        <Col lg={{size: 12}}>
                            {/*<Link to="/student">*/}
                            <Button color="primary" size="md" block>送信</Button>
                            {/*</Link>*/}
                        </Col>
                    </FormGroup>
                </form>
            </Container>
        )
    }
}

export default DayChangeForm