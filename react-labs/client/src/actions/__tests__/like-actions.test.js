import { DO_LIKE, DO_DISLIKE, doLike, doDislike } from '../like-actions.js';
import "@testing-library/jest-dom/extend-expect";
import rules from '../../data.json';

describe('doLike', function() {
    it('should return an action of type DO_LIKE', function() {
        const action = doLike();
        expect(action.type).toEqual(DO_LIKE);
    });

    it('should return an action containing the good ruleId', function() {
        const action = doLike(1);
        expect(action.ruleId).toEqual(1);
    });
});

describe('doDislike', function() {
    it('should return an action of type DO_DISLIKE', function() {
        const action = doDislike();
        expect(action.type).toEqual(DO_DISLIKE);
    });

    it('should return an action containing the good ruleId', function() {
        const action = doDislike(1);
        expect(action.ruleId).toEqual(1);
    });
});
