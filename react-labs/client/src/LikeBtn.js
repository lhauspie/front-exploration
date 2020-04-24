import PropTypes from 'prop-types';
import React from 'react';

const types = {
	like: 'like',
	dislike: 'dislike',
}

const typesValues = {
	like: {
		className: 'glyphicon-thumbs-up',
		title: '+1',
	},
	dislike: {
		className: 'glyphicon-thumbs-down',
		title: '-1',
	},
}

export default class LikeBtn extends React.Component {
        state = {
                likes: 0,
        }

	constructor(props) {
		super(props);
		this.state.likes = props.likes;
	}

	increaseLikes = () => {
		this.setState({
			likes: this.state.likes + 1,
		});
	}

	render() {
		var values = typesValues[this.props.type];
		return (
	                <a className="btn btn-default" title={values.title} onClick={this.increaseLikes}>
	                        {this.state.likes} <i className={"glyphicon " + values.className}></i>
	                </a>
		)
	}
}

LikeBtn.propTypes = {
	likes: PropTypes.number.isRequired,
	type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

LikeBtn.types = types;

