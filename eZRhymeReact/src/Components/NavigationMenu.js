import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

const NavigationMenu = (props) => {
  return (
    <div>
      <div className="font-sans ">ezRhymeZ Logo</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="block" to="/" onClick={props.closeMenu}>
            <FontAwesomeIcon
              style={{
                color: 'var(--icon-blue)',
                fontSize: '1.6rem',
                marginRight: '.5rem',
              }}
              icon={faHome}
            />
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="block" to="/user-guides" onClick={props.closeMenu}>
            <FontAwesomeIcon
              style={{
                color: 'var(--icon-blue)',
                fontSize: '1.6rem',
                marginRight: '1rem',
              }}
              icon={faInfo}
            />
            User Guide
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="block"
            to="/contact"
            onClick={props.closeMenu}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon
              style={{
                color: 'var(--icon-blue)',
                fontSize: '1.6rem',
                marginRight: '.5rem',
                cursor: 'pointer',
              }}
              icon={faCommentDots}
            />
            Bug Report & Feedback
          </Link>
        </li>
        <li className="nav-item">
          <div className="block" href="#" onClick={props.closeMenu} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              style={{
                color: 'var(--icon-blue)',
                fontSize: '1.6rem',
                marginRight: '.5rem',
                cursor: 'pointer',
              }}
              icon={faYoutube}
            />
            Tutorials
          </div>
        </li>
        <li className="nav-item">
          <div className="block" onClick={props.closeMenu} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              style={{
                color: 'var(--icon-blue)',
                fontSize: '1.6rem',
                marginRight: '.5rem',
                cursor: 'pointer',
              }}
              icon={faDiscord}
            />
            Discord Connect
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
