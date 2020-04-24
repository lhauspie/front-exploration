/**
 * Display a like (or dislike) button.
 * This button is initialized with a type (set on component props):
 * - If type is "up", then a click on this button will increment counter.
 * - If type is "down", then a click on this button will decrement counter.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

const LikeBtn = ({ type, counter: initialCount }) => {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => {
    setCounter(prev => prev + 1);
  };
  const title = type === "up" ? "+1" : "-1";
  return (
    <button className="btn btn-default" title={title} onClick={increment}>
      {counter} <i className={`glyphicon glyphicon-thumbs-${type}`}/>
    </button>
  );
};

LikeBtn.defaultProps = {
  counter: 0
};

LikeBtn.propTypes = {
  type: PropTypes.oneOf(["up", "down"]).isRequired,
  counter: PropTypes.number
};

export default LikeBtn;
