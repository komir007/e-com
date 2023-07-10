import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-200 text-black-300 py-4 rounded-md mx-3 mt-11 mb-5" >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">
          <p>© {new Date().getFullYear()} E-sports</p>
          <p>Tutti i diritti riservati</p>
        </div>
        <div className="text-sm">
          <p>Made by Mounir Er raqioui</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;