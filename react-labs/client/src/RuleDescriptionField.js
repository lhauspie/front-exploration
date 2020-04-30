import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

const RuleDescriptionField = ({ field, form }) => {
    const errorClass = form.touched.description && form.errors.description ? "has-error" : "";
    return (
        <div className={"form-group " + errorClass}>
            <label htmlFor="rule-desc">Description</label>
            <textarea {...field} className="form-control" id="rule-desc" placeholder="Description" />
            <ErrorMessage name="description" component="span" className="help-block" />
        </div>
    );
};

RuleDescriptionField.defaultProps = {
    description: "",
};

RuleDescriptionField.propTypes = {
    description: PropTypes.string,
};

export default RuleDescriptionField;