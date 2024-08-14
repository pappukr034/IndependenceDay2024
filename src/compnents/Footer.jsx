import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 px-3">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold tracking-wider">
            🇮🇳 Proud to be Indian | Happy Independence Day! 🇮🇳
          </span>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} | Designed with ❤️ by Pappu Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
