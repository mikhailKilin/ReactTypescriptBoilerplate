import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux'

import HelloWorld from './containers/HelloWorld'

import '../public/styles/projects/main.scss'
import '../public/styles/admin/main.scss'
import '../public/styles/campaign-control/main.scss'
import '../public/styles/shared/horisontal-link.scss'
import '../public/styles/titles/main.scss'
import '../public/styles/navbar/main.scss'
import '../public/styles/metrics/main.scss'

import {rootReducer} from './reducers/rootReducer'

import * as injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)
//reduxRouterMiddleware.listenForReplays(store)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HelloWorld}>
                
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
