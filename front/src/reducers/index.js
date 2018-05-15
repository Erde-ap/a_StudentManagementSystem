import {combineReducers} from 'redux';

const initialTask = {
    studentdata: []
};

const student = (state = initialTask, action) => {
    switch (action.type) {
        case 'LAUNCH' :
            return action.student;
        default:
            return state;
    }
};

const reducers = combineReducers({
    student
});

export default reducers
;
