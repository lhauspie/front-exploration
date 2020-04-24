import React from 'react';
import './Rule.css';

export default class Rule extends React.Component {
	state = {
		folded: false,
	}

	constructor(props) {
		super(props);
		// Make sure that the description is hidden by default if it is empty.
		this.state.folded = this.props.rule.description ? false : true;
	}

	// Impossible to write a classical function (changeFoldedState() {}) because of the `this` in `this.setState`
	changeFoldedState = () => this.setState({
		folded : !this.state.folded,
	});


	render() {
		const descriptionClassName = this.state.folded ? "hidden" : "visible";
		const glyphiconChevronClassName = this.state.folded ? "glyphicon-chevron-up" : "glyphicon-chevron-down";

		return (
	                <div key={this.props.rule.id} className="panel panel-primary">
	                        <div className="panel-heading" role="presentation" onClick={this.changeFoldedState}>
	                                {this.props.rule.title}
	                                <i className={"pull-right glyphicon " + glyphiconChevronClassName}></i>
	                        </div>
	                        <div className={"panel-body " + descriptionClassName}>
	                                <p>{this.props.rule.description}</p>
	                        </div>
	                        <div className="panel-footer">
	                                <div className="btn-toolbar">
	                                {this.props.rule.tags.map(tag =>
	                                        <span key={tag} className="badge">{tag}</span>
	                                )}
	                                        <div className="btn-group btn-group-xs pull-right">
	                                                <a className="btn btn-primary" title="Update">
	                                                        <i className="glyphicon glyphicon-pencil"></i>
	                                                </a>
	                                        </div>
	                                        <div className="btn-group btn-group-xs pull-right">
	                                                <a className="btn btn-default" title="+1">
	                                                        {this.props.rule.likes} <i className="glyphicon glyphicon-thumbs-up"></i>
	                                                </a>
	                                                <a className="btn btn-default" title="-1">
	                                                        {this.props.rule.dislikes} <i className="glyphicon glyphicon-thumbs-down"></i>
	                                                </a>
	                                        </div>
	                                </div>
	                        </div>
	                </div>
		)
	}
}
