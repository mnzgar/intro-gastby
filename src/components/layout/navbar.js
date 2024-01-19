import React from 'react';
import { Link } from 'gatsby';
import { nav, navList, navLink, navLinkText } from './navbar.module.css';

const Layout = () => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={navLink}>
        <Link to="/" className={navLinkText}>Inicio</Link>
        </li>
        <li className={navLink}>
        <Link to="/about" className={navLinkText}>Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
