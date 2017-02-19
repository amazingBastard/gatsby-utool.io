import React, { Component, PropTypes } from 'react';

import 'containers/values/index.css';

class Values extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="values section">
        <h5 className="title">Values:</h5>
        <ul className="values list">
          <li className="value item">
            <strong className="title">Authenticity</strong>
            To be vulnerable and build real connections.
          </li>
          <li className="value item">
            <strong className="title">Adaptability</strong>
            To respond to change quickly and continually grow.
          </li>
          <li className="value item">
            <strong className="title">Simplicity</strong>
            To eliminate clutter and keep only what's meaningful.
          </li>
          <li className="value item">
            <strong className="title">Bravery</strong>
            To take risks and embrace the consequences.
          </li>
          <li className="value item">
            <strong className="title">Self-awareness</strong>
            To realize our strengths and collaborate effectively.
          </li>
        </ul>
      </section>
    )
  }
}

Values.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Values;
