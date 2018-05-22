const student = (state = {year:[{}],    month:[{}]}, action) => {
    switch (action.type) {
        case 'LAUNCH' :
            return action.json;
        default:
            return state;
    }
};

export default  student