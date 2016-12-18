import React, { Component, PropTypes } from 'react';
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
				<ul className="featured tools flex list">
					{toolsList.slice(0,2)}
				</ul>
			);
		} else {
			tools = (
				<ul className="tools flex list">
					{toolsList}
				</ul>
			);
		}

		return tools;
  }

	render() {
    const title = {
      title: 'Latest Tools'
    };

		return (
      <section className="tools section">
        <figure className="figure container">
          <Title meta={title} />
          {this.renderTools()}
        </figure>
      </section>
    );
	}
}

Tools.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Tools;
