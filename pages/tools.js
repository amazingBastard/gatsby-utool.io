import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Tools from 'containers/tools';
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

class ToolsIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'Our Tools',
      description: 'We create efficient tools. Only the best tools.',
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <Tools route={route} />
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

ToolsIndex.propTypes = {
  route: PropTypes.object
};

export default ToolsIndex;
