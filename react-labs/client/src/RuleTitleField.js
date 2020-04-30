import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

const RuleTitleField = ({ field, form }) => {
    const errorClass = form.touched.title && form.errors.title ? "has-error" : "";
    return (
        <div className={"form-group " + errorClass}>
            <label htmlFor="rule-title">Title</label>
            <input {...field} type="text" className="form-control" id="rule-title" placeholder="Title" />
            <ErrorMessage name="title" component="span" className="help-block" />
        </div>
    );
};

RuleTitleField.defaultProps = {
    title: "",
};

RuleTitleField.propTypes = {
    title: PropTypes.string,
}

export default RuleTitleField;