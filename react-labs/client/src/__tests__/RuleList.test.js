import React from "react";
import _ from "lodash";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../util/render-with-redux";

import rules from "../data.json";
import RuleList from "../RuleList";

import {
    doLoadRules as mockDoLoadRules,
} from "../actions/rules-actions"
import mockRules from "../data.json";

// as we mock all the rules-actions file, we have to redefine everything is needed, even RULES_LOADED to match the reducer switch/case
jest.mock("../actions/rules-actions", () => {
    return {
        RULES_LOADED: "RULES_LOADED",
        doLoadRules: jest.fn(() => async dispatch => {
            Promise.resolve();
            dispatch({
                type: "RULES_LOADED",
                rules: mockRules,
            });
        }),
    }
});

describe("RuleList", function() {
    let renderedRuleList;

	beforeEach(function() {
		renderedRuleList = renderWithRedux(<RuleList />);
	});

    afterEach(() => {
        cleanup();
        mockDoLoadRules.mockClear();
    });

	it("should display rules titles", () => {
		rules.forEach(rule => {
			const titleElement = renderedRuleList.getByText(rule.title);
			expect(titleElement).toBeInTheDocument();
		});
	});

	it("should display rules descriptions", () => {
		rules.filter(rule => rule.description)
			.forEach(rule => {
				const descriptionElement = renderedRuleList.getByText(rule.description);
				expect(descriptionElement).toBeInTheDocument();
			});
	});

	// The other parts of Rules are tested in the Rule.test.js
	// So no need to repeat tests here.
});
