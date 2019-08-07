
const initialState = {
    name: "fruit",
    list: []
}

export default (state= initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST' :
            return {state, ...action.list};
        default:
            return state;
    }
}