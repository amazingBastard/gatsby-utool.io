import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Work from 'containers/work';
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

class WorkIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'Our Work',
      description: 'We\'re in the business of delivering measurable results.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <Work route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

WorkIndex.propTypes = {
  route: PropTypes.object
};

export default WorkIndex;
