import {launchState} from '../actions'

class StudentData {
    static async getStudentData(dispatch) {
        const result = await fetch('http://localhost:4200/test');
        dispatch(launchState( await result.json()));
    }
}

export default StudentData;
