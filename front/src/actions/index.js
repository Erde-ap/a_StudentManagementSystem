import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MONTH_SUCCESS = 'MONTH_SUCCESS';
export const YEAR_SUCCESS = 'YEAR_SUCCESS';
export const UPDATE_MONTH_SUCCESS = 'UPDATE_MONTH_SUCCESS';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const LOAD_INITIALISE = 'LOAD_INITIALISE';
export const LOAD_CONDEL = 'LOAD_CONDEL';
export const LOAD_ALREADY = 'LOAD_ALREADY';
export const LOAD_STUDENTLIST = 'LOAD_STUDENTLIST';

const axiosBase = axios;
const api = axiosBase.create({
    baseURL: 'http://localhost:4200/',
    headers: {
        'ContentType': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

// fetchの開始
function requestMessageState() {
    return {
        type: FETCH_MESSAGES
    }
}

// jsonの受け取り(年)
function receiveYearState(json) { // receiveMessages
    return {
        type: YEAR_SUCCESS,
        messages: json
    }
}

// jsonの受け取り(月)
function receiveMonthState(json) { // receiveMessages
    return {
        type: MONTH_SUCCESS,
        messages: json
    }
}

// 月の更新
function updateMonthState(json) { // receiveMessages
    return {
        type: UPDATE_MONTH_SUCCESS,
        messages: json
    }
}

export function loadInitializeState(data) {
    return {
        type: LOAD_INITIALISE,
        data: data
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

function loadCondel(json) {
    return {
        type: LOAD_CONDEL,
        messages: json
    };
}

function loadAlready(json) {
    return {
        type: LOAD_ALREADY,
        messages: json
    };
}

function loadStudentList(json) {
    return {
        type: LOAD_STUDENTLIST,
        messages: json
    };

}

//先生側生徒一覧画面を表示
export function fetchStudentList(week) {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`showweek?classes=1&week=${week}`).then((response) => {
            dispatch(loadStudentList(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

// 変更届けの承認、未承認の変更
export function onUpdateApprovalState(id,flag){
    return dispatch => {
        dispatch(addNewMessage());
        return api.get(`checkpost?id=${id}&student_id=9990000&approval_state=${flag}`
        ).then((response) => {
            console.log('送信成功');
            dispatch(fetchCondel());
            dispatch(fetchAlready());
            dispatch(addNewMessageSuccess());
        }).catch((response) => {
            console.log('送信失敗');
            dispatch(addNewMessageSuccess());
        })
    }
}

// 変更届け一覧の情報取得(未読)
export function fetchCondel() {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`condel?student_id=9900000`).then((response) => {
            dispatch(loadCondel(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

//変更届け一覧の情報取得(履歴)
export function fetchAlready() {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`already?student_id=9900000`).then((response) => {
            dispatch(loadAlready(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

// メッセージ取得
export function fetchMonthState(month) {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`test?student_id=1196500&month=${month}`).then((response) => {
            dispatch(receiveMonthState(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

// 月の更新
export function onUpdateMonthState(month) {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`test?student_id=1196500&month=${month}`).then((response) => {
            dispatch(updateMonthState(response.data));
        }).catch((response) => {
            console.log(response)
        });
    }
}

// １年間の出席率
export function fetchYearState() {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get('rate?student_id=1196500').then((response) => {
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
        dispatch(addNewMessage());
        return api.post('changepost',messageBody
        ).then((response) => {
            console.log('送信成功');
            dispatch(addNewMessageSuccess());
        }).catch((response) => {
            console.log('送信失敗');
            dispatch(addNewMessageSuccess());
        })
    }
}

