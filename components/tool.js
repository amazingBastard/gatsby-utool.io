import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Summary from 'components/summary';
import { prefixLink } from 'gatsby-helpers';

class Tool extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="tool item">
				<Link className="tool link" to={prefixLink(meta.path)}>
					<h4 className="title">
						{meta.data.title}
						<small className="sub meta date">
							{moment(meta.data.date).calendar()}
						</small>
					</h4>
          <Summary body={meta.data.body} />
				</Link>
			</li>
		);
	}
}

Tool.propTypes = {
	meta: PropTypes.object
}

export default Tool;
