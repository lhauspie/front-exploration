import React from "react";

const RuleDescriptionField = () => {
    return (
        <div className="form-group">
            <label htmlFor="rule-desc">Description</label>
            <textarea className="form-control" id="rule-desc" placeholder="Description" />
        </div>
    );
};

export default RuleDescriptionField;