import reducer from "../rules-reducer.js";
import { RULES_LOADED } from "../../actions/rules-actions";
import { doLike, doDislike } from "../../actions/like-actions";
import "@testing-library/jest-dom/extend-expect";

import rules from "../../data.json";

describe("rulesApp", function() {
    it("should return no rules as initialState", function() {
        const action = {};
        const state = reducer([], action);
        expect(state).toEqual([]);
    });

    it("should return a state as an array containing the rules of the RULES_LOADED action", function() {
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

    it("should return a state as an array that contains no more than the rules of the RULES_LOADED action when called twice", function() {
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

    it("should increase likes of the good rule in state on DO_LIKE action", function() {
        const ruleIdToLike = 1;
        const rules = [
            {
                id: 0,
                title: "TITLE 0",
                description: "DESCRIPTION 0",
                likes: 0,
                dislikes: 0,
            },
            {
                id: ruleIdToLike,
                title: "TITLE 1",
                description: "DESCRIPTION 1",
                likes: 0,
                dislikes: 0,
            },
        ];
        const state = reducer(rules, doLike(ruleIdToLike));
        const likedRule = state.find(rule => rule.id === ruleIdToLike);
        expect(likedRule.id).toEqual(ruleIdToLike);
        expect(likedRule.likes).toEqual(1);
    });

    it("should increase dislikes of the good rule in state on DO_DISLIKE action", function() {
        const ruleIdToDislike = 1;
        const rules = [
            {
                id: 0,
                title: "TITLE 0",
                description: "DESCRIPTION 0",
                likes: 0,
                dislikes: 0,
            },
            {
                id: ruleIdToDislike,
                title: "TITLE 1",
                description: "DESCRIPTION 1",
                likes: 0,
                dislikes: 0,
            },
        ];

        const state = reducer(rules, doDislike(ruleIdToDislike));
        const likedRule = state.find(rule => rule.id === ruleIdToDislike);
        expect(likedRule.id).toEqual(ruleIdToDislike);
        expect(likedRule.dislikes).toEqual(1);
    });
})