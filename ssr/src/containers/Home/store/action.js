import axios from 'axios';

const CHANGE_LIST = "CHANGE_LIST";

// action creator
const changeList = list => ({
    type: CHANGE_LIST,
    list
});

export const getList = () => {
    return (dispatch) => {
        return axios.get('list')
            .then((res) => {
                const list = rea.data.data;
                console.log(list);
                dispatch(changeList(list));
            })
    }
}

