import axios from 'axios';

const CHANGE_LIST = "CHANGE_LIST";

// action creator
const changeList = list => ({
    type: CHANGE_LIST,
    list
});

export const getList = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/api/list')
            .then((res) => {
                const list = res.data.data;
                dispatch(changeList(list));
            })
    }
}

