const initialState = {
    studentList:[],
    condel: [{}],
    already: [{
        apply_date: "",
        req_date:""
    }],
    isFetching: false
};

export default function teacher(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_STUDENTLIST':
            return {
                ...state,
                isFetching: false,
                studentList: [...state.studentList, action.messages]
            };
        case 'RESET_STUDENTLIST':
            return {
                ...state,
                studentList: []
            };
        case 'LOAD_CONDEL':
            return {
                ...state,
                isFetching: false,
                condel: action.messages

            };
        case 'LOAD_ALREADY':
            return {
                ...state,
                isFetching: false,
                already: action.messages
            };
        default:
            return state;
    }
}
