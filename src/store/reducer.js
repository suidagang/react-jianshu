 //redux-immutable
import { combineReducers } from 'redux-immutable';
//as es6 方法 取别名
import { reducer as headerReducer } from '../common/header/store';


const reducer = combineReducers ( {
    header:headerReducer
});
export default reducer;
