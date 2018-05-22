// export const launch = () => {
//     return {
//         type: 'LAUNCH'
//     };
// };
// function launchState(students) {
//     return {
//         type: 'LAUNCH',
//         students
//     };
// }
export const onNextTodo = month => ({
    type: 'ON_NEXT_TODO',
    month
})

export const launchState = json => ({
    type: 'LAUNCH',
    json
});