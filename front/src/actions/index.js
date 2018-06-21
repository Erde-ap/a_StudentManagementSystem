import axios from 'axios';
import {push} from "react-router-redux";

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MONTH_SUCCESS = 'MONTH_SUCCESS';
export const YEAR_SUCCESS = 'YEAR_SUCCESS';
export const UPDATE_MONTH_SUCCESS = 'UPDATE_MONTH_SUCCESS';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const LOAD_INITIALISE = 'LOAD_INITIALISE';
export const LOAD_CONDEL = 'LOAD_CONDEL';
export const LOAD_ALREADY = 'LOAD_ALREADY';
export const LOAD_FIRST_LOGIN_INITIALISE = 'LOAD_FIRST_LOGIN_INITIALISE';
export const LOAD_STUDENTLIST = 'LOAD_STUDENTLIST';
export const RESET_STUDENTLIST = 'RESET_STUDENTLIST';
export const LOGIN_AUTH = 'LOGIN_AUTH';
export const FIRST_LOGIN = 'FIRST_LOGIN';
export const LOGOUT = 'LOGOUT';

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

export function fistLoginInitializeState(data) {
    return {
        type: LOAD_FIRST_LOGIN_INITIALISE,
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

function resetStudentList() {
    return {
        type: RESET_STUDENTLIST
    };

}

function loginAuth(studentId,message, token, name, permission, firstLogin, bool) {
    return {
        type: LOGIN_AUTH,
        studentId:studentId,
        message: message,
        token: token,
        name:name,
        permission:permission,
        isFirstLogin: firstLogin,
        state: bool,
    }
}

function logoutUserAction() {
    return {
        type: LOGOUT
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(logoutUserAction())
        dispatch(push("/"))
    }
}


//先生側生徒一覧画面を表示
export function updateStudentList(week) {
    return dispatch => {
        dispatch(requestMessageState());
        dispatch(resetStudentList());
        return api.get(`showlist?classes=1`).then((response) => {
            const list = response.data;
            list.map(list => {
                return api.get(`showweek?student_id=${list.student_id}&week=${week}`).then((response) => {
                    dispatch(loadStudentList(response.data))
                })
            })
        }).catch((response) => {
            console.log(response)
        });
    }
}

//先生側生徒一覧画面を表示
export function fetchStudentList(week) {
    return dispatch => {
        dispatch(requestMessageState());
        return api.get(`showlist?classes=1`).then((response) => {
            const list = response.data;
            list.map(list => {
                return api.get(`showweek?student_id=${list.student_id}&week=${week}`).then((response) => {
                    dispatch(loadStudentList(response.data))
                })
            })
        }).catch((response) => {
            console.log(response)
        });
    }
}

// 変更届けの承認、未承認の変更
export function onUpdateApprovalState(id, flag) {
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
export function onUpdateMonthState(month,studentId) {
    return dispatch => {
        dispatch(requestMessageState());
        console.log("action")
        console.log(month)
        console.log(studentId)
        return api.get(`test?student_id=${studentId}&month=${month}`).then((response) => {
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
        return api.post('changepost', messageBody
        ).then((response) => {
            console.log('送信成功');
            dispatch(addNewMessageSuccess());
        }).catch((response) => {
            console.log('送信失敗');
            dispatch(addNewMessageSuccess());
        })
    }
}

export function loginAuthPost(messageBody) {
    console.log(messageBody)
    return dispatch => {
        return api.post('selo', messageBody
        ).then((response) => {
            console.log(response)
            messageBody = response.data;
            messageBody.session === null ?
                //ID,passが違う時
                dispatch(loginAuth(
                    "",
                    messageBody.message,
                    messageBody.session,
                    "",
                    "",
                    "",
                    false,
                    false
                )) :
                //成功時
                dispatch(loginAuth(
                    messageBody.studentId,
                    messageBody.message,
                    messageBody.session,
                    messageBody.name,
                    messageBody.permission,
                    messageBody.firstLogin,
                    true
                ));
            dispatch(checkFirstLogin(messageBody.firstLogin))
        }).catch((response) => {
            console.log('送信失敗');
            dispatch(loginAuth('送信に失敗しました。', '', false, false));
        })
    }
}

function checkFirstLogin(isFirst) {
    return dispatch => {
        return isFirst ? dispatch(push('/student')) : dispatch(push('/first'))
    }
}

export function changePasswordPost(messageBody) {
    console.log(messageBody)
    return dispatch => {
        return api.post('passchange', messageBody
        ).then((response) => {
            console.log('送信成功');
            console.log(response);
            dispatch(push('/student'))
        }).catch((response) => {
            console.log('送信失敗');
        })
    }
}

