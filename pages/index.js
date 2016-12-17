import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Hero from 'containers/hero/';
import Work from 'containers/work/';
import Blog from 'containers/blog/';
import { rhythm } from 'utils/typography';
import { config } from 'config';

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

class Index extends Component {
  render() {
    const { route } = this.props;

    return (
      <DocumentTitle title={config.siteTitle}>
        <main className="index page" style={style.page}>
          <Hero route={route} />
          <section className="benefits section">
            <h3 className="title">
                Attract customers with more
            </h3>
            <ul className="list">
              <li className="item">Growth Opportunities</li>
              <li className="item">Trial Signups</li>
              <li className="item">Leads</li>
              <li className="item">Sales and Purchases</li>
              <li className="item">Click-throughs</li>
            </ul>
          </section>
          <Work route={route} />
          <Blog route={route} />
        </main>
      </DocumentTitle>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};

export default Index;
