import {connect} from 'react-redux';
import StudentView from '../components/StudentView';




const mapStateToProps = state => ({
        students : state.student
    });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };

const Students = connect(
    mapStateToProps
    // mapDispatchToProps
)(StudentView);

export default Students;
