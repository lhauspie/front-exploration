import React from "react";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { connect } from "react-redux";

import { Formik, Form, Field } from "formik";


const RuleForm = ({ rule }) => {
    const initialValues = {
        id: rule.id,
        title: rule.title || "",
        description: rule.description || "",
    };
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <Formik initialValues={initialValues}>
                    <Form>
                        <Field name="title" component={RuleTitleField} />
                        <Field name="description" component={RuleDescriptionField} />
                        <button type="submit" className="btn btn-primary pull-right">Submit</button>
                    </Form>
                </Formik>
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