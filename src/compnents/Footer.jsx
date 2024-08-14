import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 px-3">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="text-xl font-semibold tracking-wider text-center">
            Proud to be Indian | Happy Independence Day!
          </span>
        </div>
        <div className="text-sm text-gray-400 mt-5">
          © {new Date().getFullYear()} | Designed with ❤️ by Pappu Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
