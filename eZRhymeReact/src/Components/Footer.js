import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="app-footer-copy">&copy; DripstaLtd Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;
