import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import access from 'safe-access';
import find from 'lodash/find';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';

import 'containers/process/index.css';

class Process extends Component {
  render() {
    const { meta, route } = this.props;
    const pages = route.pages;
    const page = route.page;
    const processPage = find(pages, {requirePath: "process/index.md"});

    return (
      <section className="process section">
        <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: processPage.data.body}} />
      </section>
    );
  }
}

Process.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Process;
