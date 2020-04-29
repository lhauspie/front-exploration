import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import rulesReducer from "../reducers/rules-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


const rootReducer = combineReducers({
    rules: rulesReducer,
});

const middleware = applyMiddleware(
	thunk,
	logger,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	composeEnhancers(middleware)
);

export default store;