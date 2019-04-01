import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
//内部使用的action 不需要导出  统一放在顶部
const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data)
});
export  const searchFocuse = () => ({
    type:actionTypes.SEARCH_FOCUSE
});

export  const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((e)=>{
            console.log(e);
        })
    }
}