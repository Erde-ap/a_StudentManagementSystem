import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import "./app.css";

import App from './components/App';
import StudentData from './models/StudentData'

let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

//Storeの中身をサーバーから問い合わせ
store.dispatch(StudentData.getStudentData);


//Storeの中身をコンソールに表示
store.subscribe(() =>
    console.log(store.getState())
);
