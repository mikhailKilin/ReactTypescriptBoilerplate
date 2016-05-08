import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

import HelloWorld from './containers/HelloWorld'

import {rootReducer} from './reducers/rootReducer'

const store = createStore(rootReducer)

const history = syncHistoryWithStore(browserHistory, store)
import * as injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={HelloWorld}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
