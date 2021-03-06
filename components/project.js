import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Summary from 'components/summary';
import { prefixLink } from 'gatsby-helpers';

class Project extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="project item">
				<Link className="project link" to={prefixLink(meta.path)}>
					<h6 className="title">
						{meta.data.title}
					</h6>
          <Summary body={meta.data.body} />
				</Link>
			</li>
		);
	}
}

Project.propTypes = {
	meta: PropTypes.object
}

export default Project;
