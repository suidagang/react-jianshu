import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focuse:false
});
export default (state = defaultState,action) =>{
    if(action.type === actionTypes.SEARCH_FOCUSE){
        //immutable 对象的set方法，会结合之前immutable对象的值和设置的值，返回一个新的对象
        return state.set('focuse',true);
    };
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focuse',false);
    }
    return state;
}