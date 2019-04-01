import { createStore ,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store;