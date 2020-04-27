import { RULES_LOADED } from '../actions/rules-actions';

const initialState = [];

function rulesApp(state = initialState, action) {
    switch(action.type) {
        case RULES_LOADED :
            return [...action.rules];
        default :
            return state;
    }
}

export default rulesApp;