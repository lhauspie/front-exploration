import React from "react";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { connect } from "react-redux";

import { Formik, Form, Field } from "formik";
import { addRule, updateRule } from "./actions/rules-actions";
import isObjectEmpty from "./util/is-object-empty";

const validateTitle = (title) => {
    if (title === undefined || title.length === 0) {
        return "Title is mandatory";
    } else if (title.length > 50) {
        return "Title is too long (50 char. max.)";
    }
};

const validateDescription = (description) => {
    if (description !== undefined && description.length !== 0) {
        if (description.length < 5) {
            return "Description has not enough char. (5 char. min.)";
        } else if (description.length > 100) {
            return "Description is too long (100 char. max.)";
        }
    }
};


const RuleForm = ({ rule, addRule, updateRule }) => {
    const initialValues = {
        id: rule.id,
        title: rule.title || "",
        description: rule.description || "",
    };

    const handleSubmit = (rule_values) => {
        if (rule.id) {
            updateRule(rule_values);
        } else {
            addRule(rule_values);
        }
    };

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{rule.id ? "Edit rule" : "New rule"}</h3>
            </div>
            <div className="panel-body">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}>
                    {(form) => (
                        <Form>
                            <Field name="title" component={RuleTitleField} validate={validateTitle} />
                            <Field name="description" component={RuleDescriptionField} validate={validateDescription} />
                            <button type="submit"
                                    className="btn btn-primary pull-right"
                                    disabled={form.isSubmitting || !isObjectEmpty(form.errors) || !form.dirty}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

RuleForm.defaultProps = {
    rule: {
        title: "",
        description: "",
    }
};

const mapStateToProps = (state, props) => {
    const ruleId = Number(props.match.params.id);
    return {
        rule: state.rules.find(rule => rule.id === ruleId),
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addRule: (rule) => dispatch(addRule(rule)),
    updateRule: (rule) => dispatch(updateRule(rule)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleForm);