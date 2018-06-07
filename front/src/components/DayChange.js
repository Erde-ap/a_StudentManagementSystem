import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Popup from 'react-popup'
import '../../node_modules/react-popup/style.css'
import DayChangeForm from "./DayChangeForm"


class DayChange extends Component{
    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Popup/>
                    <FullCalendar
                        id="user_id"
                        themeSystem = {'bootstrap4'}
                        locale={'ja'}
                        header = {{
                            left: 'prev,next,today myCustomButton',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}
                        defaultDate={'2018-06-05'}
                        navLinks= {true} // can click day/week names to navigate views
                        editable= {true}
                        eventLimit= {true} // allow "more" link when too many events
                        selectable={true}
                        fc-sun={[{
                            backgroundColor: "FFe5e5"
                        }]}
                        dayClick={(date) =>{
                            Popup.alert( <DayChangeForm date={date.format('YYYY/MM/DD')} /> )
                        } }
                    />
                </Row>
            </Container>
        )
    }
}

export default DayChange