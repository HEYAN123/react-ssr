
const initialState = {
    name: "fruit",
    list: ['barry']
}

export default (state= initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST' :
            return {...state, list: action.list};
        default:
            return state;
    }
}