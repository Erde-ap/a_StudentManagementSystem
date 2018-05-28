import {connect} from 'react-redux';
import {onNextMonth} from "../actions";
import StudentView from '../components/StudentView';


const mapStateToProps = state => ({
        student : state.student.month,
        studentYear : state.student.year
    });

const mapDispatchToProps = dispatch => ({
        onNextMonth : month => {
      dispatch(onNextMonth(month));
    }});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
