import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = (props) => {
  return (
    <div>
      <div className="font-sans ">le' ezRhymeZ Menu</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="block" to="/" onClick={props.closeMenu}>
            <FontAwesomeIcon
              style={{ color: 'var(--icon-gray)', fontSize: '1rem', marginRight: '.5rem' }}
              icon={faHome}
            />
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="block" to="/about" onClick={props.closeMenu}>
            <FontAwesomeIcon
              style={{ color: 'var(--icon-gray)', fontSize: '1.2rem', marginRight: '1rem' }}
              icon={faInfo}
            />
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="block" to="/settings" onClick={props.closeMenu}>
            <FontAwesomeIcon
              style={{ color: 'var(--icon-gray)', fontSize: '1rem', marginRight: '.5rem' }}
              icon={faCog}
            />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
