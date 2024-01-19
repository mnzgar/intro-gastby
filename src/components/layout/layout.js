import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { container } from './layout.module.css';

import Header from './header';
import Navbar from './navbar';
import MainContent from './main-content';
import Footer from './footer';

const Layout = ({ pageTitle, page, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  
  return (
    <div className={container}>
      <Header title={data.site.siteMetadata.title} />
      <Navbar />
      <MainContent pageTitle={pageTitle} page={page} content={children} />
      <Footer title={data.site.siteMetadata.title} />
    </div>
  );
};

export default Layout;
