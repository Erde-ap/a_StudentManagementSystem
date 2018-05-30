import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import StudentData from '../models/StudentData'
import {Link} from "react-router-dom";
class DayTable extends Component {
    render() {
        const dayData = this.props.dayData;

        return (
            <tr key={dayData.id}>
                <td><Link to={`change/2018-4-12`}>{dayData.day}</Link></td>
                <td>{StudentData.getDayOfTheWeek(dayData.year, dayData.month, dayData.day)}</td>
                {gridStyle(dayData.period1)}
                {gridStyle(dayData.period2)}
                {gridStyle(dayData.period3)}
                {gridStyle(dayData.period4)}
                {gridStyle(dayData.period5)}
            </tr>
        )
    }
}

function gridStyle(grid) {
    switch (grid) {
        case 1 :
            return <td className="table-warning">{grid}</td>;
        case 2 :
            return <td className="table-danger">{grid}</td>;
        case 3 :
            return <td className="table-info">{grid}</td>;
        case 4 :
            return <td className="table-success">{grid}</td>;
        case 5 :
            return <td className="table-primary">{grid}</td>;
        case 9 :
            return <td className="none"></td>;
        default :
            return <td>{grid}</td>
    }
}

export default DayTable