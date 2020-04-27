/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Rule from "./Rule";
import { loadRules } from "./actions/rules-actions.js";

const RuleList = ({ rules, fetchRules }) => {
	useEffect(
		() => {
		    // Call `this.props.fetchRules` in the `componentDidMount` function of the RuleList component.
			fetchRules();
		},
		[fetchRules]
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
    fetchRules: () => {
        dispatch(loadRules());
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleList);
