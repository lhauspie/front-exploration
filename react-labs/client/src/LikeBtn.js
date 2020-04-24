import React from 'react';

const types = {
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
		return (
	                <a className="btn btn-default" title={this.props.type.title} onClick={this.increaseLikes}>
	                        {this.state.likes} <i className={"glyphicon " + this.props.type.className}></i>
	                </a>
		)
	}
}

LikeBtn.types = types;

