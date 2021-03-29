import React from 'react';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
