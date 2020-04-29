import React from "react";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import rulesReducer from "../reducers/rules-reducer";
import thunk from "redux-thunk";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
    rules: rulesReducer,
});

const middleware = applyMiddleware(
	thunk
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const renderWithRedux = (
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState, composeEnhancers(middleware))
    } = {}
) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    };
};

export default renderWithRedux;
