import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Popup from 'react-popup'
import '../../../node_modules/react-popup/style.css'
import DayChangeForm from "./DayChangeForm"
import $ from "jquery"

class Prompt extends Component{
    constructor(props) {
        super(props);

        this.state = {
            events:[
                {
                    title: '土曜日、日曜日',
                    dow: [0,6],
                    rendering: 'background',
                    color: 'red'
                },
                {
                    title: 'ゴミの日',
                    start: '2018-06-05T00:00:00',
                    end: '2018-06-05T18:00:00'
                },
                {
                    title: 'ゴミの日2nd',
                    start: '2018-06-05T00:00:00',
                    end: '2018-06-05T18:00:00'
                }
            ],
            value: this.props.defaultValue
        };

        this.onChange = (e) => this._onChange(e);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        }
    }

    _onChange(e) {
        let value = e.target.value;

        this.setState({value: value});
    }

    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Popup/>
                    <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.value} onChange={this.onChange} />;
                    <FullCalendar
                        id="calendar_id"
                        locale={'ja'}
                        header = {{
                            left: 'prev,next,today myCustomButton',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}
                        navLinks= {false} // 日付クリック時のアクションをなくす
                        editable= {false} // イベントをドラッグアンドドロップできなくする
                        events = {this.state.events}
                        selectable={true}
                        dayClick={(date) =>{
                            Popup.alert( <DayChangeForm date={date.format('YYYY/MM/DD')} /> )
                        } }
                    />
                </Row>
            </Container>
        )
    }
}

/** Prompt plugin */
Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {
    let promptValue = null;
    let promptChange = function (value) {
        promptValue = value;
    };

    this.create({
        title: 'What\'s your name?',
        content: <Prompt onChange={promptChange} placeholder={placeholder} value={defaultValue} />,
        buttons: {
            left: ['cancel'],
            right: [{
                text: 'Save',
                key: '⌘+s',
                className: 'success',
                action: function () {
                    callback(promptValue);
                    Popup.close();
                }
            }]
        }
    });
});

/** Call the plugin */
Popup.plugins().prompt('', 'Type your name', function (value) {
    Popup.alert('You typed: ' + value);
});

export default Prompt