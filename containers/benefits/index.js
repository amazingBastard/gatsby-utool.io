import React, { Component, PropTypes } from 'react';

import 'containers/benefits/index.css';

class Benefits extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="benefits section">
        <h5 className="title">
            Attract customers with more
        </h5>
        <ul className="list">
          <li className="item">Growth Opportunities</li>
          <li className="item">Trial Signups</li>
          <li className="item">Leads</li>
          <li className="item">Sales and Purchases</li>
          <li className="item">Click-throughs</li>
        </ul>
      </section>
    )
  }
}

Benefits.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Benefits;
