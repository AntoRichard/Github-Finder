import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ show }) => {
  const style = {
    navbar: {
      width: '100%',
      height: '80px',
      backgroundColor: 'white',
      top: '0',
      marginTop: '-20px',
      position: 'fixed',
      color: '#000',
      fontSize: '18px',
      boxShadow: '1px 1px 10px 10px #cecece'
    },
    item: {
      listStyle: 'none',
      display: 'inline',
      padding: '10px',
      marginTop: '20px'
    }
  };
  if (show === 0) {
    style.backgroundColor = 'transparent';
    style.boxShadow = '0px';
  }
  return (
    <nav style={style.navbar}>
      <h2 style={{ paddingTop: '13px', paddingLeft: '15px' }}>Food Cart</h2>
      <ul
        className="nav-items"
        style={{
          display: 'inline',
          float: 'right',
          padding: '20px',
          marginTop: '-60px'
        }}
      >
        <li style={style.item}>Home</li>
        <li style={style.item}>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}>
            Cart
          </Link>{' '}
        </li>
        <li style={style.item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
