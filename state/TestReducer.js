export default function testReducer(state = {name: "", avatarIndex: 0}, action) {
    switch (action.type) {
        case 'TEST':
            return action;
        default:
            return state
    }
}