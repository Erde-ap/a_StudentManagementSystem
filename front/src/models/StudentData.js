import {launchState,onUpdateMonth} from '../actions'

class StudentData {
    static async getStudentData(dispatch) {
        const result = {year:[],month:[]};
        const result1 = await fetch('http://localhost:4200/test?student_id=1196500&month=5');
        // const result1 = await fetch('http://192.168.41.5:4200/test?student_id=1196500&month=5');
        const fetchResult = await fetch('http://localhost:4200/rate?student_id=1196500');
        // const fetchResult = await fetch('http://192.168.41.5:4200/rate?student_id=1196500');
        const result2 = await fetchResult.json();
        const result3 = [];
        for( let num in result2){
            let n = {num:result2[num]};
            result3.push( n )
        }
        result.year = await result3;
        result.month = await result1.json();
        dispatch(launchState(result));
    }

    static async updateMonth(dispatch, currentMonth){
        const getMonth = await fetch(`http://localhost:4200/test?student_id=1196500&month=${currentMonth}`);
        // const getMonth = await fetch(`http://192.168.41.5:4200/test?student_id=1196500&month=${currentMonth}`);
        const fetchMonth = await getMonth.json();
        dispatch(onUpdateMonth(await fetchMonth))
    }

    static getDayOfTheWeek(year, month, day) {
        let d = new Date(year, month - 1, day);
        let dayNames = '日月火水木金土';
        let Dotw = dayNames[d.getDay()];
        return Dotw

    }
}

export default StudentData;
