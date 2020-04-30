import React from "react";

const RuleTitleField = () => {
    return (
        <div className="form-group">
            <label htmlFor="rule-title">Title</label>
            <input type="text" className="form-control" id="rule-title" placeholder="Title" />
        </div>
    );
};

export default RuleTitleField;