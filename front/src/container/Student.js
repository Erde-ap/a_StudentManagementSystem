import {connect} from 'react-redux';
import {patchNextMonth, patchPrevMonth} from "../actions";
import StudentView from '../components/StudentView';


const mapStateToProps = state => ({
    student: state.student.month,
    studentYear: state.student.year
});

const mapDispatchToProps = dispatch => ({
    onNextMonth: () => {
        console.log('Next');
        dispatch(patchNextMonth());
    },
    onPrevMonth: () => {
        console.log('Prev');
        dispatch(patchPrevMonth());
    }
});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
