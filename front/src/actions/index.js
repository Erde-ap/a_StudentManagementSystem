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
export const launchState = json => ({
    type: 'LAUNCH',
    json
});