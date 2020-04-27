import reducer from '../rules-reducer.js';
import { RULES_LOADED } from '../../actions/rules-actions';
import "@testing-library/jest-dom/extend-expect";

import rules from '../../data.json';

describe('rulesApp', function() {
    it('should return no rules as initialState', function() {
        const action = {};
        const state = reducer([], action);
        expect(state).toEqual([]);
    });

    it('should return a state as an array containing the rules of the RULES_LOADED action', function() {
        const action = {
            type: RULES_LOADED,
            rules: [
                {
                    id: 1,
                    title: "TITLE 1",
                    description: "DESCRIPTION 1",
                },
            ],
        }
        const state = reducer([], action);
        expect(state).toEqual(action.rules);
    });

    it('should return a state as an array that contains no more than the rules of the RULES_LOADED action when called twice', function() {
        const action = {
            type: RULES_LOADED,
            rules: [
                {
                    id: 1,
                    title: "TITLE 1",
                    description: "DESCRIPTION 1",
                },
            ],
        }
        let state = reducer([], action);
        state = reducer(state, action);
        expect(state).toEqual(action.rules);
    });
})