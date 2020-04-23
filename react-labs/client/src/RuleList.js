import React from 'react';
import Rule from './Rule';


export default class RuleList extends React.Component {

	render() {
		return (
			<div>
			{this.props.rules.map(item =>
				<Rule rule={item}/>
			)}
			</div>
		)
	}
}
