import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const Nav = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Link href='/'>
              <a>
                <Typography
                  variant='body1'
                  className={classes.title}
                  color='secondary'
                >
                  MyBlog
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
