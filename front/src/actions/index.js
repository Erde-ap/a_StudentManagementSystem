import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MONTH_SUCCESS = 'MONTH_SUCCESS';
export const YEAR_SUCCESS = 'YEAR_SUCCESS';
export const UPDATE_MONTH_SUCCESS = 'UPDATE_MONTH_SUCCESS';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';

// launchState,onUpdateMonth

function requestMessageState() { // requestMessages
    return {
        type: FETCH_MESSAGES
    }
}

function receiveYearState(json) { // receiveMessages
    return {
        type: YEAR_SUCCESS,
        messages: json
    }
}

function receiveMonthState(json) { // receiveMessages
    return {
        type: MONTH_SUCCESS,
        messages: json
    }
}

function updateMonthState(json) { // receiveMessages
    return {
        type: UPDATE_MONTH_SUCCESS,
        messages: json
    }
}

function addNewMessage() {
    return {
        type: ADD_MESSAGE,
    };
}

function addNewMessageSuccess() {
    return {
        type: ADD_MESSAGE_SUCCESS,
    };
}

// メッセージ取得
export function fetchMonthState(month) {
    return dispatch => {
        dispatch(requestMessageState());
        return axios.get(`http://localhost:4200/test?student_id=1196500&month=${month}`).then((response) => {
            dispatch(receiveMonthState(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

export function onUpdateMonthState(month) {
    return dispatch => {
        dispatch(requestMessageState());
        return axios.get(`http://localhost:4200/test?student_id=1196500&month=${month}`).then((response) => {
            dispatch(updateMonthState(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

export function fetchYearState() {
    return dispatch => {
        dispatch(requestMessageState());
        return axios.get('http://localhost:4200/rate?student_id=1196500').then((response) => {
            let result = [];
            for (let num in response.data) {
                let n = {num: response.data[num]};
                result.push(n)
            }
            dispatch(receiveYearState(result))
        }).catch((response) => {
            console.log(response)
        });
    }
}

// メッセージ送信
export function postMessage(messageBody) {
    return dispatch => {
        console.log(messageBody)
        dispatch(addNewMessage());
        return axios.post('http://localhost:4200/changepost',
            {
                body: messageBody
            }, {withCredentials: true}
        ).then((response) => {
            dispatch(requestMessageState());
            dispatch(addNewMessageSuccess());
        }).catch((response) => {
            console.log(response)
        })
    }
}
