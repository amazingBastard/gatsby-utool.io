import React, { Component, PropTypes } from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

import 'containers/leadership/index.css';

class Leadership extends Component {
  render() {
    const { meta, route } = this.props;

    return (
      <section className="leadership section">
        <div className="members grid">
          <div className="member cell">
            <figure className="card figure">
              <img className="fluid image" src="/images/members/husam_thumb.jpg" />
              <figcaption className="caption">
                <h6 className="name">
                  Husam Machlovi
                  <small className="title">
                    Partner, Design
                  </small>
                </h6>
                <div className="social">
                  <ul className="inline list">
                    <li className="item">
                      <a className="icon" href="http://twitter.com/hmachlovi" target="_blank">
                        <FaTwitter className="icon" />
                      </a>
                    </li>
                    <li className="item">
                      <a className="icon" href="http://www.linkedin.com/in/husammachlovi" target="_blank">
                        <FaLinkedin className="icon" />
                      </a>
                    </li>
                    <li className="item">
                      <a className="icon" href="http://github.com/hudat" target="_blank">
                        <FaGithub className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="member cell">
            <figure className="card figure">
              <img className="fluid image" src="/images/members/damir_thumb.jpg" />
              <figcaption className="caption">
                <h6 className="name">
                  Damir Vazgird
                  <small className="title">
                    Partner, Development
                  </small>
                </h6>
                <div className="social">
                  <ul className="inline list">
                    <li className="item">
                      <a className="icon" href="http://twitter.com/dvazgird" target="_blank">
                        <FaTwitter className="icon" />
                      </a>
                    </li>
                    <li className="item">
                      <a className="icon" href="http://www.linkedin.com/pub/damir-vazgird/35/665/926" target="_blank">
                        <FaLinkedin className="icon" />
                      </a>
                    </li>
                    <li className="item">
                      <a className="icon" href="http://github.com/amazingBastard" target="_blank">
                        <FaGithub className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    )
  }
}

Leadership.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Leadership;
