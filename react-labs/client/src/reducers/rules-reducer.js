import { RULES_LOADED, ADD_RULE, UPDATE_RULE } from "../actions/rules-actions";
import { DO_LIKE, DO_DISLIKE } from "../actions/like-actions";

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
        case ADD_RULE :
            return [...state, action.rule];
        case UPDATE_RULE :
            let newRulesUpdated = [...state];
            const ruleUpdated = newRulesUpdated.find(rule => rule.id === action.rule.id);
            ruleUpdated.title = action.rule.title;
            ruleUpdated.description = action.rule.description;
            return newRulesDislike;
        default :
            return state;
    }
}

export default rulesApp;