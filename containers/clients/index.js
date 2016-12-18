import React, { Component, PropTypes } from 'react';

import 'containers/benefits/index.css';

class Clients extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="clients section">
        <h3 className="title">
            Trusted by
        </h3>
        <div className="clients mobile half grid module">
          <div className="client cell">
            <img className="fluid image" src="/images/clients/jj.png" />
          </div>

          <div className="client cell">
            <img className="fluid image" src="/images/clients/pfizer.png" />
          </div>

          <div className="client cell">
            <img className="fluid image" src="/images/clients/sva.png" />
          </div>

          <div className="client cell">
            <img className="fluid image" src="/images/clients/amc.png" />
          </div>

          <div className="client cell">
            <img className="fluid image" src="/images/clients/thermofisher.png" />
          </div>

          <div className="client cell">
            <img className="fluid image" src="/images/clients/novo.png" />
          </div>
        </div>
      </section>
    )
  }
}

Clients.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Clients;
