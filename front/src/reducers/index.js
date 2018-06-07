import {combineReducers} from 'redux';
import student from './Student'
import sendChange from './SendChange'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    student,
    sendChange,
    form: formReducer
});

export default reducers;
