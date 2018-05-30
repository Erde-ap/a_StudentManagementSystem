import {connect} from 'react-redux';
import StudentData from '../models/StudentData'
import StudentView from '../components/StudentView';


const mapStateToProps = state => ({
    student: state.student.month,
    studentYear: state.student.year
});

const mapDispatchToProps = dispatch => ({
    onNextMonth: (month) => {
        console.log('Next');
        month === 12 ? month = 1 : month++;
        StudentData.updateMonth(dispatch,month)

    },
    onPrevMonth: (month) => {
        console.log('Prev');
        month === 1 ? month = 12 : month--;
        StudentData.updateMonth(dispatch,month)
    }
});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
