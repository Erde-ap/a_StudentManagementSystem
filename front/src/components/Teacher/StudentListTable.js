import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
// import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loadInitializeState} from "../../actions";

let StudentListTable = props => {
    const {student,gridStyle,gridStyle2} = props;
    return (
        <tr>
            <td>{student.attendance_id}</td>
            <td>{student.name}</td>
            {gridStyle2(student.syueekiritu)}
            {gridStyle(student.day1_period1)}
            {gridStyle(student.day1_period2)}
            {gridStyle(student.day1_period3)}
            {gridStyle(student.day1_period4)}
            {gridStyle(student.day1_period5)}
            {gridStyle(student.day2_period1)}
            {gridStyle(student.day2_period2)}
            {gridStyle(student.day2_period3)}
            {gridStyle(student.day2_period4)}
            {gridStyle(student.day2_period5)}
            {gridStyle(student.day3_period1)}
            {gridStyle(student.day3_period2)}
            {gridStyle(student.day3_period3)}
            {gridStyle(student.day3_period4)}
            {gridStyle(student.day3_period5)}
            {gridStyle(student.day4_period1)}
            {gridStyle(student.day4_period2)}
            {gridStyle(student.day4_period3)}
            {gridStyle(student.day4_period4)}
            {gridStyle(student.day4_period5)}
            {gridStyle(student.day5_period1)}
            {gridStyle(student.day5_period2)}
            {gridStyle(student.day5_period3)}
            {gridStyle(student.day5_period4)}
            {gridStyle(student.day5_period5)}
        </tr>
    )
};
const mapStateToProps = (state, ownProps) => ({
    studentList: ownProps.student,
    gridStyle: (grid) => {
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
    },
    gridStyle2: (grid) => {
        return grid >= 80 ? <td>{grid}</td> : <td className="table-danger">{grid}</td>;
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
)(StudentListTable);
