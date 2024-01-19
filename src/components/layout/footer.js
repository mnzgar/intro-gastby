import React from 'react';
import { footer } from './footer.module.css';

const Footer = ({ title }) => {
  return (
    <footer className={footer}>
      <p>2024 &copy; {title}</p>
    </footer>
  );
};

export default Footer;
