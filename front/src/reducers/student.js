const student = (state = {year: [{}], month: [{}]}, action) => {
    switch (action.type) {
        case 'LAUNCH' :
            return action.json;
        case 'NEXT_MONTH' :
            return {
                ...state,
                month : action.json.month
            };
        default:
            return state;
    }
};

export default student
