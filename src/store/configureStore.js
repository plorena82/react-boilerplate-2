import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create the store, notice the window.__REDUX_DEVTOOLS_EXTENSION added to support the chrome plugin to see the actions, slider to see actions through time, state, etc
export default () =>{
const store = createStore(
        combineReducers({
            auth: authReducer
        } ),
       composeEnhancers(applyMiddleware(thunk))
       //this line was replaced by the composeEnhancers to use thunk middleware and continue using the redux dev tools
       //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};