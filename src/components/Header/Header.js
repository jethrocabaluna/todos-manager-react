import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header className="header">
    <h1 className="header__text">{props.tagline}</h1>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;
