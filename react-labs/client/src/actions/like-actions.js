/**
 * Like Actions.
 * Available actions:
 * - Like: increase the counter of like.
 * - Dislike: increase the counter of dislike.
 */
import axios from "axios";

export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

export function doLike(ruleId) {
    return async dispatch => {
        await axios.post(`/rest/rules/${ruleId}/likes`);
        dispatch({
            type: DO_LIKE,
            ruleId,
        });
    };
}

export function doDislike(ruleId) {
    return async dispatch => {
        await axios.post(`/rest/rules/${ruleId}/dislikes`);
        dispatch({
            type: DO_DISLIKE,
            ruleId,
        });
    };
}
