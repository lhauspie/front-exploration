/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Rule from "./Rule";
import { doLoadRules } from "./actions/rules-actions.js";

const RuleList = ({ rules, loadRules }) => {
	useEffect(
		() => {
		    // Call `this.props.fetchRules` in the `componentDidMount` function of the RuleList component.
			loadRules();
		},
		[loadRules]
	);

    const newRules = rules.map(rule => <Rule key={rule.id} rule={rule} />);
    return <Fragment>{newRules}</Fragment>;
};

Rule.defaultProps = {
  rules: []
};

RuleList.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state, props) => ({
    rules: state.rules,
});

const mapDispatchToProps = (dispatch, props) => ({
    loadRules: () => {
        // the thunk middleware is avoiding us to write doLoadRules()(dispatch);
        dispatch(doLoadRules());
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleList);
