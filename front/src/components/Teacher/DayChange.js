import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import '../../../node_modules/fullcalendar/dist/gcal.js'
import Popup from 'react-popup'
import '../../../node_modules/react-popup/style.css'
import DayChangeForm from "./DayChangeForm"


class DayChange extends Component{
    constructor(props) {
        super(props);

        this.state = {
            events: [
                {
                    title: '平日',
                    dow: [1,2,3,4,5],
                    rendering: 'background',
                    color: '#A9D0F5'
                },
                {
                    title: '休日',
                    dow: [0,6],
                    rendering: 'background',
                    color: '#ff9f89'
                }
            ]
        }
    }
    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Popup/>
                    <FullCalendar
                        googleCalendarApiKey='AIzaSyApysSuJGEdzfD-OsYkD2TtCLGryDlqLjI'
                        id="calendar_id"
                        locale={'ja'}
                        header = {{
                            left: 'title',
                            right: 'prev,next,today myCustomButton'
                        }}
                        buttonText={{
                            today: '今日'
                        }}
                        navLinks= {false} // 日付の数字部分クリック時のアクションをなくす
                        editable= {false} // イベントをドラッグアンドドロップできなくする
                        events = {this.state.events}
                        selectable={true}
                        dayClick={(date) =>{
                            Popup.alert( <DayChangeForm date={date} />, "出席日の変更" )
                        } }

                    />
                </Row>
            </Container>
        )
    }
}

export default DayChange