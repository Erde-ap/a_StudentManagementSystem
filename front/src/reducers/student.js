const initialState = {
    year: [{}],
    month: [{}],
    isFetching: false
};

export default function student(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'YEAR_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                year: action.messages
            });
        case 'MONTH_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                month: action.messages
            });
        case 'UPDATE_MONTH_SUCCESS':
            return {
                ...state,
                month: action.messages
            };
        case 'ADD_MESSAGE':
            return Object.assign({}, state, {
                // isFetching: true
            });
        case 'ADD_MESSAGE_SUCCESS':
            return Object.assign({}, state, {
                // isFetching: false,
            });
        default:
            return state;
    }
}
