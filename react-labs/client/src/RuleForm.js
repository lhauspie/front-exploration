import React from "react";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { connect } from "react-redux";

const RuleForm = ({ rule }) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <form>
                    <RuleTitleField title={rule.title} />
                    <RuleDescriptionField description={rule.description} />
                    <button type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
    );
};

RuleForm.defaultProps = {
    rule: {}
};

const mapStateToProps = (state, props) => {
    const ruleId = Number(props.match.params.id);
    return {
        rule: state.rules.find(rule => rule.id === ruleId),
    };
};

const mapDispatchToProps = (dispatch, props) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleForm);