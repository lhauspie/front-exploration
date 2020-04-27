import { RULES_LOADED, loadRules } from '../rules-actions.js';
import "@testing-library/jest-dom/extend-expect";
import rules from '../../data.json';

describe('loadRules', function() {
    it('should return an action of type RULES_LOADED', function() {
        const action = loadRules();
        expect(action.type).toEqual(RULES_LOADED);
    });

    it('should return an action containing 4 rules', function() {
        const action = loadRules();
        expect(action.rules).toHaveLength(4);
    });

    it('should return an action with rules that contains the data.json', function() {
        const action = loadRules();
        expect(action.rules).toEqual(rules);
    });
})