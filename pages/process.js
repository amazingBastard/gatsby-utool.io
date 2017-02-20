import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Process from 'containers/process';
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

class ProcessIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'Our Process',
      description: 'We leverage the scientific method to arrive at our technical solutions.',
      punchline: 'We believe that iterative rounds of testing in design and development yields effective software.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <Process route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

ProcessIndex.propTypes = {
  route: PropTypes.object
};

export default ProcessIndex;
