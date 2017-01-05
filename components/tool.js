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
					<h6 className="title">
						{meta.data.title}
					</h6>
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
