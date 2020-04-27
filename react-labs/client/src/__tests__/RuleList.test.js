import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import rules from "../data.json";
import RuleList from "../RuleList";


describe('RuleList', function() {
    let renderedRuleList;

	beforeEach(function() {
		renderedRuleList = render(<RuleList rules={rules} />);
	});

	afterEach(cleanup);

	test("should display rules titles", () => {
		rules.forEach(rule => {
			const titleElement = renderedRuleList.getByText(rule.title);
			expect(titleElement).toBeInTheDocument();
		});
	});

	test("should display rules descriptions", () => {
		rules.filter(rule => rule.description)
			.forEach(rule => {
				const descriptionElement = renderedRuleList.getByText(rule.description);
				expect(descriptionElement).toBeInTheDocument();
			});
	});

	// The other parts of Rules are tested in the Rule.test.js
	// So no need to repeat tests here.
});
