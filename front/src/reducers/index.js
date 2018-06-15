import {combineReducers} from 'redux';
import student from './Student'
import teacher from './Teacher'
import auth from './Auth'
import { default as sendChange} from './SendChange'
import { reducer as formReducer } from 'redux-form'
import {routerReducer } from 'react-router-redux'


const reducers = combineReducers({
    student,
    teacher,
    sendChange,
    auth,
    router:routerReducer,
    form: formReducer
});

export default reducers;
