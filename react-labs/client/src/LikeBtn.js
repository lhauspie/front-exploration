/**
 * Display a like (or dislike) button.
 * This button is initialized with a type (set on component props):
 * - If type is "up", then a click on this button will increment counter.
 * - If type is "down", then a click on this button will decrement counter.
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { doLike, doDislike } from "./actions/like-actions.js";

const LikeBtn = ({ type, counter, like, dislike }) => {
    const isUp = type === "up";
	const increment = () => {
	    isUp ? like() : dislike();
	};
	const title = isUp ? "+1" : "-1";

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

const mapStateToProps = (state, props) => {
    const rule = state.rules.find(rule => rule.id === props.ruleId);
    const counter = props.type === "up" ? rule.likes : rule.dislikes;
    return ({
        // This line is the responsible of rerendering all the LikeBtn of the RuleList component when clicking one of them
    //    rules: state.rules,
        // So I replaced it to this next one and the LikeBtn Rendering is no more called for the other LikeBtn of the page but the one I clicked
    //    rule: state.rules.find(rule => rule.id === props.ruleId),
        // But we can be even more fine-grained by providing only the counter to be updated
        counter: counter,
    });
};

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
