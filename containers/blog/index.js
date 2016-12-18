import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Post from 'components/post';
import Title from 'components/title';

import 'containers/blog/index.css';

class Blog extends Component {
  renderPosts() {
    const { route } = this.props;
    const pages = route.pages;
    const path = route.page.path;

    const title = {
      title: 'From the Blog'
    };

		let posts;

		const postsList = [];
		const sortedPosts = sortBy(pages, (page) => access(page, 'data.date')
		).reverse();

		sortedPosts.forEach((post) => {
			if (access(post, 'file.ext') === 'md' && access(post, 'data.layout') === 'post' && !include(post.path, '/404')) {
				postsList.push(<Post meta={post} key={post.path} />);
			}
		});

		if (path === prefixLink('/')) {
			posts = (
        <figure className="figure container">
          <Title meta={title} />
  				<ul className="featured posts flex list">
  					{postsList.slice(0,2)}
  				</ul>
          <Link className="link" to="/blog/">View our blog</Link>
        </figure>
			);
		} else {
			posts = (
        <figure className="figure container">
  				<ul className="posts flex list">
  					{postsList}
  				</ul>
        </figure>
			);
		}

		return posts;
  }

	render() {
		return (
      <section className="blog section">
        {this.renderPosts()}
      </section>
    );
	}
};

Blog.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Blog;
