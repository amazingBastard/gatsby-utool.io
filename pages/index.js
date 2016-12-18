import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Hero from 'containers/hero/';
import Benefits from 'containers/benefits';
import Figures from 'containers/figures';
import Clients from 'containers/clients';
import CTA from 'containers/cta';
import Leadership from 'containers/leadership';
import Tools from 'containers/tools';
import Blog from 'containers/blog/';
import Subscribe from 'containers/subscribe';
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
          <Benefits />
          <Figures />
          <Clients />
          <CTA />
          <Leadership />
          <Tools route={route} />
          <Blog route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};

export default Index;
