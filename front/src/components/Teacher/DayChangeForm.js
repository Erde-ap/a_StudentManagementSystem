import React, {Component} from "react";
import {Form, FormGroup, Label, Button, Input} from 'reactstrap'

class DayChangeForm extends Component {
    render() {
        return (
            <Form>
                <FormGroup tag="fieldset">
                    <legend><h3 className="text-center">出席日変更</h3></legend>
                    <Input type="date" name="date" id="dateId" value="date"/>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"/>{' '}
                            休日に変更する
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2"/>{' '}
                            出席日に変更する
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio3"/>{' '}
                            午前休みに変更する
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio4"/>{' '}
                            午後休みに変更する
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup row>
                    <Button color="primary" size="sm" block>送信</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default DayChangeForm