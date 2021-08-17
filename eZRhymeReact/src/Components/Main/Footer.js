import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-300 text-center font-sans text-white text-xs p-1 absolute bottom-0 w-full">
      &copy; DripstaLtd Copyright {currentYear}
    </footer>
  );
}
