import React from 'react';
import { main, siteTitle, index, about } from './main-content.module.css';

const Layout = ({ pageTitle, page, content }) => {
  return (
    <main className={main}>
      <h1 className={siteTitle}>{pageTitle}</h1>
      
      {page === 'about' ? 
        <div className={about}>{content}</div> : 
        <div className={index}>{content}</div>}
    </main>
  );
};

export default Layout;
