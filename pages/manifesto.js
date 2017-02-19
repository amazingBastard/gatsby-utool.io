import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Values from 'containers/values';
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

class ManifestoIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'µTool Manifesto',
      description: 'We are uncovering better ways to collaborate together and produce more meaningful software.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <Values />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

ManifestoIndex.propTypes = {
  route: PropTypes.object
};

export default ManifestoIndex;
