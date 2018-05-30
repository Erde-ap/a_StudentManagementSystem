const student = (state = {year: [{}], month: [{}]}, action) => {
    switch (action.type) {
        case 'LAUNCH' :
            return action.json;
        case 'ON_UPDATE_MONTH' :
            return Object.assign(state,action.month);
        default:
            return state;
    }
};

export default student
