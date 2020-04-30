import React from "react";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { connect } from "react-redux";

import { Formik, Form, Field } from "formik";

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
                        <Field name="title" component={RuleTitleField} validate={validateTitle} />
                        <Field name="description" component={RuleDescriptionField} validate={validateDescription} />
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