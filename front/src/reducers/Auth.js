
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
                isLogin: action.data,
                token:action.token.session
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
        default:
            return state;
    }
}
