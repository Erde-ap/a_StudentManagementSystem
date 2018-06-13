import {connect} from 'react-redux';
import StudentListView from '../components/Teacher/StudentListView';
import {updateStudentList} from "../actions";

const mapStateToProps = state => ({
    studentList: desc_array(state.teacher.studentList,"attendance_id"),
    student:state.teacher.studentList[0]

});
let week = 0;
const mapDispatchToProps = dispatch => ({
    onNextWeek: () => {
        console.log('Next');
        week++;
        console.log(week)
        dispatch(updateStudentList(week))
    },
    onPrevWeek: () => {
        console.log('Prev');
        week--;
        console.log(week)
        dispatch(updateStudentList(week))
    }
});

const StudentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentListView);

export default StudentList;

function desc_array(data,key) {
    //デフォは降順(DESC)
    let num_a = -1;
    let num_b = 1;
    let order = 'asc';

    if(order === 'asc'){//指定があれば昇順(ASC)
        num_a = 1;
        num_b = -1;
    }

    data = data.sort(function(a, b){
        let x = a[key];
        let y = b[key];
        if (x > y) return num_a;
        if (x < y) return num_b;
        return 0;
    });

    return data
}
