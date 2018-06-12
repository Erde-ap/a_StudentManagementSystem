import React from 'react';
import {connect} from 'react-redux';
import StudentListView from '../components/Teacher/StudentListView';
import {onUpdateMonthState} from "../actions";

const mapStateToProps = state => ({
    studentList: state.teacher.studentList,
    week: 0

});
const mapDispatchToProps = dispatch => ({
    onNextWeek: (week) => {
        console.log('Next');
        week++;
        dispatch(onUpdateMonthState(week))
    },
    onPrevWeek: (week) => {
        console.log('Prev');
        week--;
        dispatch(onUpdateMonthState(week))
    }
});

const StudentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentListView);

export default StudentList;
