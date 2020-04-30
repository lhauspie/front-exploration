/**
 * Display a single rule.
 * Rule to display is set with the key `rule` on
 * the component props.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import LikeBtn from "./LikeBtn";
import "./Rule.css";
import { Link } from "react-router-dom";

const Rule = ({ rule: { id, title, description, likes, dislikes, tags } }) => {
    const newTags = tags.map(tag => (
        <span key={tag} className="badge">
            {tag}
        </span>
    ));
    const [folded, setFolded] = useState(!description);
    const toggleFolded = () => setFolded(!folded);
    const cssFolded = folded ? "down" : "up";
    return (
        <div className="panel panel-primary">
            <div className="panel-heading" role="presentation" onClick={toggleFolded}>
                {title}
                <i className={`pull-right glyphicon glyphicon-chevron-${cssFolded}`} />
            </div>
            <div data-testid="rule_description" className={`panel-body ${folded ? "hidden" : ""}`}>
                <p>{description}</p>
            </div>
            <div className="panel-footer">
                <div className="btn-toolbar">
                    {newTags}
                    <div className="btn-group btn-group-xs pull-right">
                        <Link to={`/edit/${id}`} className="btn btn-primary" title="Update">
                            <i className="glyphicon glyphicon-pencil"></i>
                        </Link>
                    </div>
                    <div className="btn-group btn-group-xs pull-right">
                        <LikeBtn type="up" counter={likes} ruleId={id} />
                        <LikeBtn type="down" counter={dislikes} ruleId={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

Rule.defaultProps = {
  rule: {
    title: "",
    description: "",
    likes: 0,
    dislikes: 0,
    tags: []
  }
};

Rule.propTypes = {
  rule: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Rule;

