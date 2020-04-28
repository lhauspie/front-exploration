import React from 'react';
import { fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from '../util/render-with-redux';
import rules from "../data.json";

import LikeBtn from '../LikeBtn';

describe('LikeBtn', function() {
	afterEach(cleanup);

    it('should render a like button component', function() {
        const renderedLikeBtn = renderWithRedux(< LikeBtn type="up" ruleId={1} />, {initialState: {rules}});
		const buttonElement = renderedLikeBtn.getByRole("button");
		expect(buttonElement.title).toEqual("+1")
	});

    it('should render a dislike button component', function() {
        const renderedLikeBtn = renderWithRedux(< LikeBtn type="down" ruleId={1} />, {initialState: {rules}});
        const buttonElement = renderedLikeBtn.getByRole("button");
        expect(buttonElement.title).toEqual("-1")
    });

	it('should increment counter when clicked like button', function() {
		const renderedLikeBtn = renderWithRedux(< LikeBtn type="up" ruleId={1} />, {initialState: {rules}});
		const likeButtonElement = renderedLikeBtn.getByTitle("+1");
		expect(likeButtonElement).toHaveTextContent("0");
		fireEvent.click(likeButtonElement);
		expect(likeButtonElement).toHaveTextContent("1");
	});

	it('should increment counter when clicked dislike button', function() {
		const renderedLikeBtn = renderWithRedux(< LikeBtn type="down" ruleId={1} />, {initialState: {rules}});
		const likeButtonElement = renderedLikeBtn.getByTitle("-1");
		expect(likeButtonElement).toHaveTextContent("0");
		fireEvent.click(likeButtonElement);
		expect(likeButtonElement).toHaveTextContent("1");
	});
});
