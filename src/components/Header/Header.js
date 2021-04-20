import React from 'react';
// import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <h1>{this.props.brand}&trade;</h1>
      </header>
    );
  }
}

export default Header;