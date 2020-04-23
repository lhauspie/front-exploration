import React from 'react';

export default class RuleList extends React.Component {

	render() {
		return (
			<div>
			{this.props.rules.map(item => <>
				<div key={item.id} className="panel panel-primary">
					<div className="panel-heading" role="presentation">
						{item.title}
						<i className="pull-right glyphicon glyphicon-chevron-down"></i>
					</div>
					<div className="panel-body">
						<p>{item.description}</p>
					</div>
					<div className="panel-footer">
						<div className="btn-toolbar">
						{item.tags.map(tag => <>
                                                        <span key={tag} className="badge">{tag}</span>
						</>)}
							<div className="btn-group btn-group-xs pull-right">
								<a className="btn btn-primary" title="Update">
									<i className="glyphicon glyphicon-pencil"></i>
								</a>
							</div>
							<div className="btn-group btn-group-xs pull-right">
								<a className="btn btn-default" title="+1">
									{item.likes} <i className="glyphicon glyphicon-thumbs-up"></i>
								</a>
								<a className="btn btn-default" title="-1">
					 				{item.dislikes} <i className="glyphicon glyphicon-thumbs-down"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</>)}
			</div>
		)
	}
}

RuleList.defaultProps = {
	rules: [],
}
