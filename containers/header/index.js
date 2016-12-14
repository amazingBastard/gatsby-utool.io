import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'containers/header/index.css';

class Header extends Component {
  render() {
    const { location } = this.props;

    return (
      <header className="index header">
        <Headroom disableInlineStyles>
          <Link className="logo link" to={prefixLink('/')}>
            <div className="cube">
              <div className="face front">μ</div>
              <div className="face left">μ</div>
            </div>
          </Link>
        </Headroom>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Header;
