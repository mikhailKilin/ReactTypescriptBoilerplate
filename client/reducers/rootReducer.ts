import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    todos:[],
    routing: routerReducer
})

export { rootReducer };
