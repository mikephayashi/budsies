export default function testReducer(state = {name: "", avatarUri: "", avatarProps: {gender: "boy", hat: "Grey", skin: "Tan", shirt: "White", sweater: "Pink", glasses: "Brown"}}, action) {
    switch (action.type) {
        case 'TEST':
            return action;
        default:
            return state
    }
}