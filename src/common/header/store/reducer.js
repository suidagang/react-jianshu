import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focuse:false,
    list:[]
});
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUSE:
            return state.set('focuse',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focuse',false);
        case actionTypes.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state;
    }
}