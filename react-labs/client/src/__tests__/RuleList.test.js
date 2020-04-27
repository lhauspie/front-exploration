import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import rules from "../data.json";
import RuleList from "../RuleList";

// these imports are made to test RuleList with the integration of Redux
import { createStore, combineReducers } from "redux";
import rulesReducer from "../reducers/rules-reducer";
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  rules: rulesReducer
});

describe('RuleList', function() {
    let renderedRuleList;

	beforeEach(function() {
        const store = createStore(rootReducer, {rules: []});
		renderedRuleList = render(<Provider store={store}><RuleList /></Provider>);
	});

	afterEach(cleanup);

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
