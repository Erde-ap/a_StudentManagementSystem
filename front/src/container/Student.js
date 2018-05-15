import {connect} from 'react-redux';
import StudentView from '../components/StudentView';

const mapStateToProps = (state) => (
    {
        student: state.student.studentdata
    }
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };

const Student = connect(
    mapStateToProps
    // mapDispatchToProps
)(StudentView);

export default Student;
