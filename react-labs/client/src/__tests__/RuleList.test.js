import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from '../util/render-with-redux';

import rules from "../data.json";
import RuleList from "../RuleList";

describe('RuleList', function() {
    let renderedRuleList;

	beforeEach(function() {
		renderedRuleList = renderWithRedux(<RuleList />, {rules: []});
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
