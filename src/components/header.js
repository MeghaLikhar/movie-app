import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#" className="logo">
            <img src='https://www.xcentium.com/-/media/images/logo/xcentium-logo-dark.svg?h=111&iar=0&w=717&rev=c5fcdf17621c46499831bebd24654b21&hash=B514AC3FAFC33F7E5192334BCC4A71CF' />
          </a>
        </div>
        <ul className="navbar-menu">
          <li>
          <Link to={`/`}>
            Movies
          </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
