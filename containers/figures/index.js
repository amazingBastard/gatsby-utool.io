import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import 'containers/figures/index.css';

class Figures extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="figures section">
        <h3 className="title">
          Recent track record
        </h3>

        <figure className="figure">
          <figcaption className="caption">
              2015 May
          </figcaption>
          <ul className="list">
            <li className="item">Increased Signups by 20% for Wholesale E-commerce Company</li>
            <li className="item">Increased Purchases by 17% for Wholesale E-commerce Company</li>
          </ul>
        </figure>

        <figure className="figure">
          <figcaption className="caption">
              2015 March
          </figcaption>
          <ul className="list">
            <li className="item">Increased Purchases by 32% for Yoga Studio</li>
            <li className="item">Increased Clickthroughs by 22% for TV Network</li>
          </ul>
        </figure>

        <Link className="route link" href="/work">See our work</Link>
      </section>
    )
  }
}

Figures.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Figures;
