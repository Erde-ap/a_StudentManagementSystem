import {connect} from 'react-redux';
import StudentView from '../components/StudentView';
import {onUpdateMonthState} from '../actions/index'

const mapStateToProps = state => ({
    student: state.student.month,
    studentYear: state.student.year
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

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
