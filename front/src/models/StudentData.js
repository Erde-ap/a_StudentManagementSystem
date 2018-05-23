import {launchState} from '../actions'

class StudentData {
    static async getStudentData(dispatch) {
        const result = {year:[],month:[]};
        const result1 = await fetch('http://localhost:4200/test?student_id=1196500&month=5');
        const fetchResult = await fetch('http://localhost:4200/rate?student_id=1196500');
        const result2 = await fetchResult.json();
        const result3 = [];
        for( let key in result2){
            let n = {num:result2[key]}
            result3.push( n )
        }

        result.year = await result3;
        result.month = await result1.json();
        dispatch(launchState(result))
    }

    static getDayOfTheWeek(year, month, day) {
        let d = new Date(year, month - 1, day);
        let dayNames = '日月火水木金土';
        let Dotw = dayNames[d.getDay()];
        return Dotw

    }
}

export default StudentData;
