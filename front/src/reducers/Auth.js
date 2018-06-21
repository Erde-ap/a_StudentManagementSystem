
const initialState = {
    isLogin: false,
    token:"",
    serverMessage:""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_AUTH':
            return {
                ...state,
                studentId:action.studentId,
                serverMessage:action.message,
                token:action.token,
                name:action.name,
                permission:action.permission,
                isFirstLogin:action.isFirstLogin,
                isLogin: action.state,
            };
        case 'FIRST_LOGIN':
            return {
                ...state,
                isFirstLogin:true
            };
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                serverMessage:action.data
            };
        case 'LOGOUT':
            return {
                ...state,
                studentId:"",
                serverMessage:"",
                token:"",
                name:"",
                permission:0,
                isFirstLogin:false,
                isLogin: false,
            }
        default:
            return state;
    }
}



// messageBody.message,
//     messageBody.session,
//     messageBody.name,
//     messageBody.permission,
//     messageBody.firstLogin,
//     true
