export const  testReducer=(state = [], action)=> {
    switch (action.type) {
        case 'SELECTED_LIST':
            state = JSON.parse(JSON.stringify(action.payload));
            return state;
        default:
            return state
    }
}