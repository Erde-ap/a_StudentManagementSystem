import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';
import StudentData from './models/StudentData'

let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

store.subscribe(() =>
    console.log(store.getState())
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(StudentData.getStudentData);
