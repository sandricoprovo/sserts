import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <main className="main__container">{children}</main>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
