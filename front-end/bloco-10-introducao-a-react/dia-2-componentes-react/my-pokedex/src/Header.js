import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css'

class Header extends Component {
  render() {
    const { title } = this.props
    return (
    <header className='header-container'>
      <h1>{title}</h1>
    </header>)
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header