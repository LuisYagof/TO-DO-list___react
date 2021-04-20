import React from 'react';
// import './Footer.css';

const Footer = props => {
    const output = <footer>
    <small>&copy; Copyright - {props.brand}</small>
  </footer>

  return output;
}

export default Footer;