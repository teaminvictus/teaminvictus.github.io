/**
 * Created by pratikgarala on 10/4/17.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from "redux-logger";
import rootReducer from '../reducers/root_reducer';

const logger = createLogger();
const enhancers = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer,
    {},
    enhancers
);

export default store;