import { find } from "lodash";
import { RULES_LOADED, ADD_RULE, UPDATE_RULE } from "../actions/rules-actions";
import { DO_LIKE, DO_DISLIKE } from "../actions/like-actions";

const initialState = [];

function rulesApp(state = initialState, action) {
    switch(action.type) {
        case RULES_LOADED:
            return [...action.rules];
        case DO_LIKE:
            let rulesAfterDoLike = [...state];
            const ruleToBeLiked = find(rulesAfterDoLike, { id: action.ruleId});
            rulesAfterDoLike[rulesAfterDoLike.indexOf(ruleToBeLiked)] = {
                ...ruleToBeLiked,
                likes: ruleToBeLiked.likes + 1,
            }
            return rulesAfterDoLike;
        case DO_DISLIKE:
            let rulesAfterDoDislike = [...state];
            const ruleToBeDisliked = find(rulesAfterDoDislike, { id: action.ruleId});
            rulesAfterDoDislike[rulesAfterDoDislike.indexOf(ruleToBeDisliked)] = {
                ...ruleToBeDisliked,
                dislikes: ruleToBeDisliked.dislikes + 1,
            }
            return rulesAfterDoDislike;
        case ADD_RULE:
            return [...state, action.rule];
        case UPDATE_RULE:
            let rulesAfterUpdateRule = [...state];
            const ruleToBeUpdated = find(rulesAfterUpdateRule, {id: action.rule.id});
            rulesAfterUpdateRule[rulesAfterUpdateRule.indexOf(ruleToBeUpdated)] = {
                ...ruleToBeUpdated,
                title: action.rule.title,
                description: action.rule.description,
            }
            return rulesAfterUpdateRule;
        default:
            return state;
    }
}

export default rulesApp;