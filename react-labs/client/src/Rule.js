import React from 'react';
import PropTypes from 'prop-types';
import './Rule.css';
import LikeBtn from './LikeBtn';

export default class Rule extends React.Component {
	state = {
		folded: false,
	}

	constructor(props) {
		super(props);
		// Make sure that the description is hidden by default if it is empty.
		this.state.folded = this.props.description ? false : true;
	}

	// Impossible to write a classical function (changeFoldedState() {}) because of the `this` in `this.setState`
	changeFoldedState = () => this.setState({
		folded : !this.state.folded,
	});


	render() {
		const descriptionClassName = this.state.folded ? "hidden" : "visible";
		const glyphiconChevronClassName = this.state.folded ? "glyphicon-chevron-up" : "glyphicon-chevron-down";

		return (
	                <div className="panel panel-primary">
	                        <div className="panel-heading" role="presentation" onClick={this.changeFoldedState}>
	                                {this.props.title}
	                                <i className={"pull-right glyphicon " + glyphiconChevronClassName}></i>
	                        </div>
	                        <div className={"panel-body " + descriptionClassName}>
	                                <p>{this.props.description}</p>
	                        </div>
	                        <div className="panel-footer">
	                                <div className="btn-toolbar">
	                                {this.props.tags.map(tag =>
	                                        <span key={tag} className="badge">{tag}</span>
	                                )}
	                                        <div className="btn-group btn-group-xs pull-right">
	                                                <a className="btn btn-primary" title="Update">
	                                                        <i className="glyphicon glyphicon-pencil"></i>
	                                                </a>
	                                        </div>
	                                        <div className="btn-group btn-group-xs pull-right">
							<LikeBtn type={LikeBtn.types.like} likes={this.props.likes}/>
							<LikeBtn type={LikeBtn.types.dislike} likes={this.props.dislikes}/>
	                                        </div>
	                                </div>
	                        </div>
	                </div>
		)
	}
}

Rule.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	likes: PropTypes.number.isRequired,
	dislikes: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
}
