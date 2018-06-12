import {connect} from 'react-redux';
import {StudentListView} from '../components/Teacher/StudentListView';
import {onUpdateMonthState} from '../actions/index'

const mapStateToProps = state => ({
    student: {

    }
});

const mapDispatchToProps = dispatch => ({
    onNextMonth: (month) => {
        console.log('Next');
        month === 12 ? month = 1 : month++;
        dispatch(onUpdateMonthState(month))
    },
    onPrevMonth: (month) => {
        console.log('Prev');
        month === 1 ? month = 12 : month--;
        dispatch(onUpdateMonthState(month))
    }
});

const StudentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList);

export default StudentList;
