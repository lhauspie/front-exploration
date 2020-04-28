/**
 * Display a like (or dislike) button.
 * This button is initialized with a type (set on component props):
 * - If type is "up", then a click on this button will increment counter.
 * - If type is "down", then a click on this button will decrement counter.
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { doLike, doDislike } from "./actions/like-actions.js";

const LikeBtn = ({ type, rules, ruleId, like, dislike }) => {
    const rule = rules.find(rule => rule.id === ruleId);
    const isUp = type === "up";
	const increment = () => {
	    if (isUp) {
	        like();
	    } else {
	        dislike();
	    }
	};
	const title = isUp ? "+1" : "-1";
	const counter = isUp ? rule.likes : rule.dislikes;

	return (
		<button className="btn btn-default" title={title} onClick={increment}>
			{counter} <i className={`glyphicon glyphicon-thumbs-${type}`}/>
		</button>
	);
};

LikeBtn.defaultProps = {
	counter: 0
};

LikeBtn.propTypes = {
	type: PropTypes.oneOf(["up", "down"]).isRequired,
	counter: PropTypes.number
};

const mapStateToProps = (state, props) => ({
    rules: state.rules,
});

const mapDispatchToProps = (dispatch, props) => ({
    like: () => {
        dispatch(doLike(props.ruleId));
    },
    dislike: () => {
        dispatch(doDislike(props.ruleId));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeBtn);
