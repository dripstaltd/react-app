import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
      &copy; DripstaLtd Copyright {currentYear}
    </footer>
  );
}

export default Footer;
