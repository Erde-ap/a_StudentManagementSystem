
const initialState = {};

export default function initialValues(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_INITIALISE':
            return {
                ...state, ...action.data
            };
        default:
            return state;
    }
}
