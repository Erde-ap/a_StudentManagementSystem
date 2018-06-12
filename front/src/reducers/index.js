import {combineReducers} from 'redux';
import student from './Student'
import teacher from './Teacher'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    student,
    teacher,
    form: formReducer
});

export default reducers;
