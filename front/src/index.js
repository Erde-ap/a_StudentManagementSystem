import React from 'react'
import ReactDOM from 'react-dom'
import "./app.css";
import App from './components/App';
import {
    fetchYearState,
    fetchMonthState,
    fetchCondel,
    fetchAlready,
} from './actions/index'
import thunk from 'redux-thunk';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Switch } from 'react-router'
import {connect} from "react-redux";
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'


const history = createHistory();
const middleware = [
    routerMiddleware(history),
    thunk];
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

const ConnectedSwitch = connect(state => ({
    location: state.router.location
}))(Switch);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConnectedSwitch>
                <App/>
            </ConnectedSwitch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

//Storeの中身をサーバーから問い合わせ
store.dispatch(fetchMonthState(6));
store.dispatch(fetchYearState());
store.dispatch(fetchCondel());
store.dispatch(fetchAlready());
// store.dispatch(fetchStudentList(0));


//Storeの中身をコンソールに表示
store.subscribe(() =>
    console.log(store.getState())
);
