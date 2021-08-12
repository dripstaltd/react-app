import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
  return (
    <div>
      <div className="bold">The menu</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="block" to="/" onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="block" to="/about" onClick={props.closeMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="block" to="/products" onClick={props.closeMenu}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
