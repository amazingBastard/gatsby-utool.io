import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Blog from 'containers/blog';
import Subscribe from 'containers/subscribe';

const style = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: 0,
    paddingBottom: rhythm(2)
  }
};

class BlogIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'Our Blog',
      description: 'We like talking to you. You\'re pretty swell.',
      punchline: 'Here are some of our thoughts on product design and development.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <Blog route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
};

export default BlogIndex;
