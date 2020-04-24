import React from 'react';
import PropTypes from 'prop-types';
import Rule from './Rule';


export default class RuleList extends React.Component {
	render() {
		return (
			<div>
			{this.props.rules.map(item =>
				<Rule key={item.id} 
					title={item.title}
					description={item.description}
					tags={item.tags}
					likes={item.likes}
					dislikes={item.dislikes}/>
			)}
			</div>
		)
	}
}

RuleList.propTypes = {
	rules: PropTypes.array.isRequired,
}
