import React from 'react';

export default class Rule extends React.Component {

	render() {
		return (
	                <div key={this.props.rule.id} className="panel panel-primary">
	                        <div className="panel-heading" role="presentation">
	                                {this.props.rule.title}
	                                <i className="pull-right glyphicon glyphicon-chevron-down"></i>
	                        </div>
	                        <div className="panel-body">
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
