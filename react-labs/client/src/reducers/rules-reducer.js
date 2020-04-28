import { RULES_LOADED } from '../actions/rules-actions';
import { DO_LIKE, DO_DISLIKE } from '../actions/like-actions';

const initialState = [];

function rulesApp(state = initialState, action) {
    switch(action.type) {
        case RULES_LOADED :
            return [...action.rules];
        case DO_LIKE :
            let newRulesLike = [...state];
            newRulesLike.find(rule => rule.id === action.ruleId).likes++;
            return newRulesLike;
        case DO_DISLIKE :
            let newRulesDislike = [...state];
            newRulesDislike.find(rule => rule.id === action.ruleId).dislikes++;
            return newRulesDislike;
        default :
            return state;
    }
}

export default rulesApp;