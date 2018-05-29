export const patchNextMonth = month => ({
    type: 'ON_NEXT_Month',
    month
});
export const patchPrevMonth = month => ({
    type: 'ON_NEXT_Month',
    month
});

export const launchState = json => ({
    type: 'LAUNCH',
    json
});
