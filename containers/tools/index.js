import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Tool from 'components/tool';
import Title from 'components/title';

import 'containers/tools/index.css';

class Tools extends Component {
  renderTools() {
    const { route } = this.props;
    const pages = route.pages;
    const path = route.page.path;

    const title = {
      title: 'Latest Tools'
    };

		let tools;

		const toolsList = [];
		const sortedTools = sortBy(pages, (page) => access(page, 'data.date')
		).reverse();

		sortedTools.forEach((tool) => {
			if (access(tool, 'file.ext') === 'md' && access(tool, 'data.layout') === 'tool' && !include(tool.path, '/404')) {
				toolsList.push(<Tool meta={tool} key={tool.path} />);
			}
		});

		if (path === prefixLink('/')) {
			tools = (
        <figure className="figure container">
          <Title meta={title} />
  				<ul className="featured tools flex list">
  					{toolsList.slice(0,2)}
  				</ul>
          <Link className="link" to="/tools/">View all</Link>
        </figure>
			);
		} else {
			tools = (
        <figure className="figure container">
  				<ul className="tools flex list">
  					{toolsList}
  				</ul>
        </figure>
			);
		}

		return tools;
  }

	render() {
		return (
      <section className="tools section">
        {this.renderTools()}
      </section>
    );
	}
}

Tools.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Tools;
