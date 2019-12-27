import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './style.css';

const ICONS = [faTwitter, faFacebook, faInstagram];

function Footer({className}) {
  return (
    <footer className={classNames('footer', className)}>
      <p className="footer__copy">&copy; 2018 K. Baranouskaya</p>
      <ul className="footer__icons">
        {ICONS.map((icon, index) => (
          <li key={index} className="footer__list-item">
            <a className="footer__icon-link" href=""><FontAwesomeIcon icon={icon}/></a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
