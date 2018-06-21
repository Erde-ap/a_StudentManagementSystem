
const initialState = {};

export default function initialValues(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_INITIALISE':
            return {
                ...state, ...action.data
            };
        case 'LOAD_FIRST_LOGIN_INITIALISE':
            return {
                ...state,
                student_id:action.data
            };
        default:
            return state;
    }
}
