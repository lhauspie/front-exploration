/**
 * Display a single rule.
 * Rule to display is set with the key `rule` on
 * the component props.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import LikeBtn from "./LikeBtn";
import "./Rule.css";

const Rule = ({ rule: { title, description, likes, dislikes, tags } }) => {
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
        <i
          className={`pull-right glyphicon glyphicon-chevron-${cssFolded}`}
        ></i>
      </div>
      <div data-testid="description" className={`panel-body ${folded ? "hidden" : ""}`}>
        <p>{description}</p>
      </div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {newTags}
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil"></i>
            </button>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <LikeBtn type="up" counter={likes} />
            <LikeBtn type="down" counter={dislikes} />
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

