import {connect} from 'react-redux';
import StudentData from '../models/StudentData'
import StudentView from '../components/StudentView';


const mapStateToProps = state => ({
    student: state.student.month,
    studentYear: state.student.year
});

const mapDispatchToProps = dispatch => ({
    onNextMonth: () => {
        console.log('Next');
        StudentData.updateMonth(dispatch,4)

    },
    onPrevMonth: () => {
        console.log('Prev');
        StudentData.updateMonth(dispatch,6)
    }
});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
