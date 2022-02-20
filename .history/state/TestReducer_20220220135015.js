export default const testReducer=(state = [], action)=> {
    switch (action.type) {
        case 'TEST':
            state = JSON.parse(JSON.stringify(action.payload));
            return state;
        default:
            return state
    }
}