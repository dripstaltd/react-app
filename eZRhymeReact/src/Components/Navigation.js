import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

import NavigationMenu from './NavigationMenu';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    reverse: showMenu,
    delay: 0,
  });

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 0,
  });

  return (
    <nav>
      <span className="">
        <FontAwesomeIcon
          style={{ color: 'white', fontSize: '1.2rem' }}
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>

      {maskTransitions(
        (styles, item) =>
          item && (
            <animated.div
              className="nav-overlay"
              style={styles}
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransitions(
        (styles, item) =>
          item && (
            <animated.div className="nav-menu" style={styles}>
              <NavigationMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
