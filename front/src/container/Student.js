import {connect} from 'react-redux';
import StudentView from '../components/Student/StudentView';
import {onUpdateMonthState} from '../actions/index'

const mapStateToProps = state => ({
    student: state.student.month,
    studentYear: state.student.year,
    user:state.auth
});

const mapDispatchToProps = dispatch => ({
    onNextMonth: (month,studentId) => {
        console.log('Next');
        console.log(studentId);
        month === 12 ? month = 1 : month++;
        dispatch(onUpdateMonthState(month,studentId))
    },
    onPrevMonth: (month,studentId) => {
        console.log('Prev');
        month === 1 ? month = 12 : month--;
        dispatch(onUpdateMonthState(month,studentId))
    }
});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
