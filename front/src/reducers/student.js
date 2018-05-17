const student = (state = [{}], action) => {
    switch (action.type) {
        case 'LAUNCH' :
            return action.json;
        default:
            return state;
    }
};

export default  student