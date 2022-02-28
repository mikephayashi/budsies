export default function testReducer(state = {name: "", avatarUri: ""}, action) {
    switch (action.type) {
        case 'TEST':
            return action;
        default:
            return state
    }
}