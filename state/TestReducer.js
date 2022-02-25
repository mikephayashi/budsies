export default function testReducer(state = "", action) {
    switch (action.type) {
        case 'TEST':
            state = JSON.parse(JSON.stringify(action.name));
            return state;
        default:
            return state
    }
}