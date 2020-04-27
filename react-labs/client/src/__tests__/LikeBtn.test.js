import React from 'react';
import { fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import "@testing-library/react/cleanup-after-each";

import ReactDOM from 'react-dom';
// import TestUtils from 'react-dom/test-utils';
// import {render} from 'react-testing-library';

import LikeBtn from '../LikeBtn';

describe('LikeBtn', function() {
	afterEach(cleanup);

        it('should render a like button component', function() {
                const renderedLikeBtn = render(< LikeBtn type="up" />);
		const buttonElement = renderedLikeBtn.getByRole("button");
		expect(buttonElement.title).toEqual("+1")
	});

        it('should render a dislike button component', function() {
                const renderedLikeBtn = render(< LikeBtn type="down" />);
                const buttonElement = renderedLikeBtn.getByRole("button");
                expect(buttonElement.title).toEqual("-1")
        });

	it('should increment counter when clicked like button', function() {
		const renderedLikeBtn = render(< LikeBtn type="up" />);
		const likeButtonElement = renderedLikeBtn.getByTitle("+1");
		expect(likeButtonElement).toHaveTextContent("0");
		fireEvent.click(likeButtonElement);
		expect(likeButtonElement).toHaveTextContent("1");
	});

	it('should increment counter when clicked dislike button', function() {
		const renderedLikeBtn = render(< LikeBtn type="down" />);
		const likeButtonElement = renderedLikeBtn.getByTitle("-1");
		expect(likeButtonElement).toHaveTextContent("0");
		fireEvent.click(likeButtonElement);
		expect(likeButtonElement).toHaveTextContent("1");
	});
});
