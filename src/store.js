import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({

});

let initState = {};

const middleware = [thunk];
const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;