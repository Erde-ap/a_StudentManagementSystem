import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
//import Popup from 'react-popup'
//import {$} from 'jquery';
//import 'fullcalendar';


class DayChange extends Component{

    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <FullCalendar
                        id="user_id"
                        header = {{
                            left: 'prev,next today myCustomButton',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}
                        defaultDate={'2018-05-30'}
                        navLinks= {true} // can click day/week names to navigate views
                        editable= {true}
                        eventLimit= {true} // allow "more" link when too many events
                        selectable={true}
                        locale={'ja'}
                        dayClick={function(date,jsEvent,view) {
                            alert(date.format('YYYY/MM/DD'))
                        }}
                    />
                </Row>
            </Container>
        )
    }
}

export default DayChange
