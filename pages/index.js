import React from 'react';
import styles from '../styles/Home.module.css';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

function Home() {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Welcome</h1>
      <Grid container maxWidth='lg' style={{ marginTop: '50px' }}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='380'
          image='/img/img5.jpg'
          title='Contemplative Reptile'
        />
        <CardContent style={{ marginTop: '40px' }}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='280'
                image='/img/img2.jpg'
                title='Contemplative Reptile'
              />
            </Grid>
            <Grid item xs={3}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='280'
                image='/img/img3.jpg'
                title='Contemplative Reptile'
              />
            </Grid>
            <Grid item xs={3}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='280'
                image='/img/img4.jpg'
                title='Contemplative Reptile'
              />
            </Grid>
            <Grid item xs={3}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='280'
                image='/img/img5.jpg'
                title='Contemplative Reptile'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </div>
  );
}

export default Home;
