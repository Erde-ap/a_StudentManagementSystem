
const initialState = {
    isLogin: false,
    token:""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_AUTH':
            return {
                ...state,
                isLogin: action.data,
                token:action.token.session
            };
        default:
            return state;
    }
}
