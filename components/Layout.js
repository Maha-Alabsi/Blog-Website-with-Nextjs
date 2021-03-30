import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';
import MetaData from './MetaData'

const Layout = ({ children }) => {
  return (
    <div>
      <MetaData/>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
