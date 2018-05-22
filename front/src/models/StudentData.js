import {launchState} from '../actions'

class StudentData {
    static async getStudentData(dispatch) {
        const result = await fetch('http://localhost:4200/test?student_id=1196500&month=5');
        dispatch(launchState( await result.json()));
    }

    static getDayOfTheWeek(year,month,day){
        var d = new Date(year,month-1,day);
        var dayNames = '日月火水木金土';
        var Dotw = dayNames[d.getDay()];
        return Dotw

    }
}

export default StudentData;
