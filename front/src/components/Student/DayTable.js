import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

import StudentData from '../../models/StudentData'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loadInitializeState} from "../../actions";

let DayTable = props => {
    const {dayData, changeDate, onClick} = props;
    return (
        <tr key={dayData.id}>
            <td><Link
                to={`change/${dayData.student_id}/${dayData.year}-${changeDate(dayData.month)}-${changeDate(dayData.day)}`}
                onClick={() => onClick({
                    "req_year": `${dayData.year}`,
                    "req_month": `${dayData.month}`,
                    "req_day": `${dayData.day}`,
                    "student_id": `${dayData.student_id}`,
                    "reason": '',
                    "period1": `${dayData.period1}`,
                    "period2": `${dayData.period2}`,
                    "period3": `${dayData.period3}`,
                    "period4": `${dayData.period4}`,
                    "period5": `${dayData.period5}`,

                })}>
                {dayData.day}
            </Link>
            </td>
            <td>{StudentData.getDayOfTheWeek(dayData.year, dayData.month, dayData.day)}</td>
            {gridStyle(dayData.period1)}
            {gridStyle(dayData.period2)}
            {gridStyle(dayData.period3)}
            {gridStyle(dayData.period4)}
            {gridStyle(dayData.period5)}
        </tr>
    )
};

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
        case 8 :
            return <td></td>;
        case 9 :
            return <td className="none"></td>;
        default :
            return <td>{grid}</td>
    }
}

const mapStateToProps = (state, ownProps) => ({
    dayData: ownProps.dayData,
    changeDate: (date) => {
        return date > 10 ? date : `0${date}`
    }
});

const mapDispatchToProps = (dispatch, state) => {
    return {
        onClick: (values) => {
            dispatch(loadInitializeState(values))
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DayTable);
