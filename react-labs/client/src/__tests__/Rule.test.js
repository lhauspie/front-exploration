import React from "react";
import { fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../util/render-with-redux";

import Rule from "../Rule";
import rules from "../data.json";

describe("Rule with description", function() {
	const ruleData = {
		"id": 1,
		"title": "TITLE",
		"description": "DESCRIPTION",
		"likes": 0,
		"dislikes": 0,
		"tags": ["TAG1", "TAG2"]
	};

	let renderedRule;
	beforeEach(function() {
		renderedRule = renderWithRedux(<Rule rule={ruleData} />, {initialState: {rules}});
	});

	afterEach(cleanup);

	it("should render rule.title", function() {
		const titleElement = renderedRule.getByText(ruleData.title);
		expect(titleElement).toBeInTheDocument();
	});

	it("should render rule.description", function() {
		const descriptionElement = renderedRule.getByText(ruleData.description);
		expect(descriptionElement).toBeInTheDocument();
	});

	it("should render a like button", function() {
		const likeBtnElement = renderedRule.getByTitle("+1");
		expect(likeBtnElement).toBeInTheDocument();
    });

    it("should render a dislike button", function() {
		const dislikeBtnElement = renderedRule.getByTitle("-1");
		expect(dislikeBtnElement).toBeInTheDocument();
    });

	it("should display rule tags", () => {
		ruleData.tags.forEach(tag => {
			const tagElement = renderedRule.getByText(tag);
			expect(tagElement).toBeInTheDocument();
		});
	});

	it("should hide description when clicking on title", function() {
		const descriptionElement = renderedRule.getByText(ruleData.description);
		expect(descriptionElement.parentNode).not.toHaveClass("hidden");
		const titleElement = renderedRule.getByText(ruleData.title);
		fireEvent.click(titleElement);
		expect(descriptionElement.parentNode).toHaveClass("hidden");
	});

	it("should show again description when clicking twice on title", function() {
		const descriptionElement = renderedRule.getByText(ruleData.description);
		expect(descriptionElement.parentNode).not.toHaveClass("hidden");
		const titleElement = renderedRule.getByText(ruleData.title);
		fireEvent.click(titleElement);
		expect(descriptionElement.parentNode).toHaveClass("hidden");
		fireEvent.click(titleElement);
		expect(descriptionElement.parentNode).not.toHaveClass("hidden");
	});
});


describe("Rule without description", function() {
	let renderedRule;

	beforeEach(function() {
		renderedRule = renderWithRedux(<Rule rule={ruleData} />, {initialState: {rules}});
	});

	afterEach(cleanup);

	const ruleData = {
		"id": 1,
		"title": "TITLE",
		"likes": 0,
		"dislikes": 0,
		"tags": ["TAG1"]
	};

	it("should hide description by deault", function() {
		// As the rule.description is undefined, we can't getByText(rule.description),
		// so we use getByTestId (even if not recommended) and use data-testid="description"  on the div we want to test
		const descriptionElement = renderedRule.getByTestId("rule_description");
        expect(descriptionElement).toHaveClass("hidden");
	});

	it("should show empty description when clicking on title", function() {
		const descriptionElement = renderedRule.getByTestId("rule_description");
		expect(descriptionElement).toHaveClass("hidden");
		const titleElement = renderedRule.getByText(ruleData.title);
		fireEvent.click(titleElement);
		expect(descriptionElement).not.toHaveClass("hidden");
	});

	it("should hide again description when clicking twice on title", function() {
		const descriptionElement = renderedRule.getByTestId("rule_description");
		expect(descriptionElement).toHaveClass("hidden");
		const titleElement = renderedRule.getByText(ruleData.title);
		fireEvent.click(titleElement);
		expect(descriptionElement).not.toHaveClass("hidden");
		fireEvent.click(titleElement);
		expect(descriptionElement).toHaveClass("hidden");
	});
});
