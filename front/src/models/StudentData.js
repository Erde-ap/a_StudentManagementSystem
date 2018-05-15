function launchState(student) {
    return {
        type: 'LAUNCH',
        student
    };
}

class StudentData {
    static async getStudentData(dispatch) {
        //   const result = await fetch('http://localhost:4200/task');
        //   dispatch(launchState(await result.json()));
        const result = {
            studentdata: [
                {
                    name: 'daichi',
                    number: 1
                },
                {
                    name: 'ike',
                    number: 2
                }
            ]
        };
        dispatch(launchState(result));
    }
}

export default StudentData;
