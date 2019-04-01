import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focuse:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1,
    total:0
});
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUSE:
            return state.set('focuse',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focuse',false);
        case actionTypes.CHANGE_LIST:
            //两种写法都可以
            // return state.set('list',action.data).set('totalPage',action.totalPage).set('total',action.total);
            return state.merge({
                list:action.data,
                totalPage:action.totalPage,
                total:action.total
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}