import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__navbar">
      <ul className="nav__links">
        <li className="nav__link header5">
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li className="nav__link header5">
          <Link
            to="/catering"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            Catering
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default withRouter(Header);
