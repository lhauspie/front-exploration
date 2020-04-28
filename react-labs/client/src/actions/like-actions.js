/**
 * Like Actions.
 * Available actions:
 * - Like: increase the counter of like.
 * - Dislike: increase the counter of dislike.
 */
export const DO_LIKE = 'DO_LIKE';
export const DO_DISLIKE = 'DO_DISLIKE';

function action(type, ruleId) {
    return {
        type,
        ruleId,
    };
}
export function doLike(ruleId) {
    return action(DO_LIKE, ruleId);
}

export function doDislike(ruleId) {
    return action(DO_DISLIKE, ruleId);
}
