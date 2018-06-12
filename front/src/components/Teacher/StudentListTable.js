import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
// import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loadInitializeState} from "../../actions";

let StudentListTable = props => {
    const {studentList, checkId} = props;
    return (
        <React.Fragment>
            {checkId(studentList)}
        </React.Fragment>
    )
};
const mapStateToProps = (state, ownProps) => ({
    studentList: ownProps.studentList,
    changeDate: (date) => {
        return date > 10 ? date : `0${date}`
    },
    checkId: (studentList) => {
        return (
                    <tr>
                        <td>出席番号(足りない)</td>
                        <td>名前(足りない)</td>
                        <td className="table-danger">出席率(足りない)</td>
                        <td>{studentList.period1}</td>
                        <td>{studentList.period2}</td>
                        <td>{studentList.period3}</td>
                        <td>{studentList.period4}</td>
                        <td>{studentList.period5}</td>
                    </tr>
                )
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
