import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { AppBar, Toolbar } from '@material-ui/core';

const Nav = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar>
          <Toolbar>
            <Link href='/'>
              <a>
                <Typography variant='h5' className={styles.navItem}>
                  BLOG
                </Typography>
              </a>
            </Link>
            <div className={styles.nav}>
              <Link href='/'>
                <a>
                  <Typography variant='body1' className={styles.navItem}>
                    Home
                  </Typography>
                </a>
              </Link>
              <Link href='/about'>
                <a>
                  <Typography variant='body1' className={styles.navItem}>
                    About
                  </Typography>
                </a>
              </Link>
              <Link href='/blog'>
                <a>
                  <Typography variant='body1' className={styles.navItem}>
                    Blog
                  </Typography>
                </a>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};
export default Nav;
