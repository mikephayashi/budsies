export default function testReducer(state = {name: "", avatarIndex :0}, action) {
    switch (action.type) {
        case 'TEST':
            return action;
            // state = JSON.parse(JSON.stringify(action));
            // return state;
        default:
            return state
    }
}