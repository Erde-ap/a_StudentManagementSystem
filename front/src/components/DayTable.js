import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import StudentData from '../models/StudentData'

class DayTable extends Component{
    render(){
        const dayData = this.props.dayData

        return(
                <tr key={dayData.id}>
                    <td>{dayData.day}</td>
                    <td>{StudentData.getDayOfTheWeek(dayData.year,dayData.month,dayData.day)}</td>
                    <td className={gridStyle(dayData.period1)}>{dayData.period1}</td>
                    <td className={gridStyle(dayData.period2)}>{dayData.period2}</td>
                    <td className={gridStyle(dayData.period3)}>{dayData.period3}</td>
                    <td className={gridStyle(dayData.period4)}>{dayData.period4}</td>
                    <td className={gridStyle(dayData.period5)}>{dayData.period5}</td>
                </tr>
        )
    }
}

function gridStyle(grid) {
    switch (grid){
        case 1 : return "table-warning"
        case 2 : return "table-danger"
        case 3 : return "table-info"
        case 4 : return "table-success"
        case 5 : return "table-primary"
        case 6 : return "holidays"
        default : return null
    }
}

export default DayTable