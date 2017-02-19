import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import About from 'containers/about';
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

class AboutIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'About µTool',
      description: 'We\'d be lying if we said we\'re made from different stuff. After all, we\'re all composed of oxgyen, carbon and hydrogen.',
      punchline: 'However, we are unique in our expertise, experience and process.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <About route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

AboutIndex.propTypes = {
  route: PropTypes.object
};

export default AboutIndex;
