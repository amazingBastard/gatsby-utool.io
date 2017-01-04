import React, { Component, PropTypes } from 'react';

import 'containers/cta/index.css';

class CTA extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="fluid cta section">
        <a className="fluid primary cta button" href="#">
          Get Similar Results
          <span className="supporting">
            Reserve a free consultation
          </span>
        </a>
      </section>
    )
  }
}

CTA.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default CTA;
