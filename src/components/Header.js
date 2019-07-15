import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const Header = (props) => (
  <Fragment>
    <header className="header">
      <h1 className="title">{props.children}</h1>
    </header>
  </Fragment>
);

Header.defaultProps = {
  children: "RocketBook"
};

Header.propTypes = {
  children: PropTypes.string
}

export default Header;
