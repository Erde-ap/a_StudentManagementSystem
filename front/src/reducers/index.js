import {combineReducers} from 'redux';
import student from './Student'
import teacher from './Teacher'
import auth from './Auth'
import { default as sendChange} from './SendChange'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    student,
    teacher,
    sendChange,
    auth,
    form: formReducer
});

export default reducers;
