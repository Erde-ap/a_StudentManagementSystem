import {connect} from 'react-redux';
import {onNextTodo} from "../actions";
import StudentView from '../components/StudentView';


const mapStateToProps = state => ({
        student : state.student.month,
        studentYear : state.student.year
    });

const mapDispatchToProps = dispatch => ({
      onNextClick : month => {
      dispatch(onNextTodo(month));
    }});

const Student = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentView);

export default Student;
