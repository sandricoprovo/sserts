import React from 'react';

import footerDecal from '../../assets/footer_path.svg';

const Footer = () => (
  <footer className="footer__container">
    <h1 className="header2">Come Out & Enjoy</h1>
    <p className="paragraph footer__copy">1500 Young Street</p>
    <p className="paragraph footer__copy">Halifax, Nova Scotia</p>
    <p className="paragraph footer__copy">902-111-1111</p>
    <h2 className="paragraph footer__hours">
      Open Monday to Saturday from 8am 7pm
    </h2>
    <img src={footerDecal} alt="" />
  </footer>
);

export default Footer;
