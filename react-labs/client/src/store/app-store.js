import { combineReducers, createStore } from 'redux';
import rulesReducer from '../reducers/rules-reducer';

const rootReducer = combineReducers({
    rules: rulesReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;