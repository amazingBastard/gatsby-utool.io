import React, { Component, PropTypes } from 'react';

import 'containers/subscribe/index.css';

class Subscribe extends Component {
  handleSubmit(event) {
    event.preventDefault();

    console.log('submit subscribe form');
  }

  render() {
    const { meta } = this.props;

    // @TODO: create subscribe form component
    return (
      <section className="fluid subscribe section">
        <figure className="subscribe figure">
          <h5 className="title">
            Get on the mailing list:
          </h5>
          <form className="subscribe form" onSubmit={this.handleSubmit}>
            <div className="field group">
              <input type="email"
                     className="email input"
                     ref="email"
                     name="email"
                     placeholder="your_email@gmail.com" />
              <button type="submit" className="primary submit button">
                Submit
              </button>
            </div>
          </form>
        </figure>
      </section>
    );
  }
}

Subscribe.propTypes = {
  meta: PropTypes.object
};

export default Subscribe;
