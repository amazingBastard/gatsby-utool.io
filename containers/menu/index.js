import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import FaBars from 'react-icons/lib/fa/bars';

import 'containers/menu/index.css';

class Menu extends Component {

  componentDidMount() {
    const $window = $(window);
    const $menu = $('.menu.section');
    const $button = $menu.find('#toggleMenu');
    const $navButton = $menu.find('.navigation .button');
    const show = 'fadeIn';
    const hide = 'fadeOut';
    const open = 'open';
    const close = 'close';

    let position = $window.scrollTop(),
        isOpen = false,
        up = false,
        scrolling;

    $window.scroll(function () {
      scrolling = $window.scrollTop();

      // scrolling down and menu is closed
      if (scrolling > position && !up && !isOpen) {
        $button.removeClass(show).addClass(hide); // hide button
        up = !up;
        // scrolling up
      } else if (scrolling < position && up) {
        $button.removeClass(hide).addClass(show); // show button
        up = !up;
        // scrolled to bottom
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $button.removeClass(hide).addClass(show); // show button
      }

      position = scrolling;
    });

    // @TODO: add onClick handlers
    $button.click(function () {
      $button.removeClass(hide).addClass(show); // show button

      if ($menu.hasClass(open)) {
        $menu.removeClass(open).addClass(close); // close menu
        isOpen = !isOpen;
      } else {
        $menu.removeClass(close).addClass(open); // open menu
        isOpen = !isOpen;
      }
    });

    $navButton.click(function () {
      $menu.removeClass(open).addClass(close); // close menu
    });
  }

  render() {
    const { location, route } = this.props;
    const page = route.page;

    return (
      <section className="fluid menu section">
        <button type="button" className="animated menu icon button" id="toggleMenu">
          <FaBars className="icon" />
        </button>
        <figure className="menu container figure">
          <nav className="navigation">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about/">
              About
            </Link>
            <Link className="link" to="/manifesto/">
              Manifesto
            </Link>
            <Link className="link" to="/process/">
              Process
            </Link>
            <Link className="link" to="/work/">
              Work
            </Link>
            <Link className="link" to="/tools/">
              Tools
            </Link>
            <Link className="link" to="/blog/">
              Blog
            </Link>
          </nav>
        </figure>
      </section>
    )
  }
}

Menu.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Menu;
