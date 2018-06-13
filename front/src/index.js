import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import "./app.css";
import configureStore from './store/'
import App from './components/App';
import {
    fetchYearState,
    fetchMonthState,
    fetchCondel,
    fetchAlready,
    fetchStudentList
} from './actions/index'

const store = configureStore();


render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


//Storeの中身をサーバーから問い合わせ
store.dispatch(fetchMonthState(5));
store.dispatch(fetchYearState());
store.dispatch(fetchCondel());
store.dispatch(fetchAlready());
store.dispatch(fetchStudentList(0));


//Storeの中身をコンソールに表示
store.subscribe(() =>
    console.log(store.getState())
);
