import React from 'react';
import styles from '../styles/Home.module.css';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <Grid maxWidth='lg' style={{ marginTop: '20px' }}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='400'
          image='https://source.unsplash.com/720x400/?nature'
          title='Contemplative Reptile'
        />
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            accumsan condimentum lorem, vel consequat ante finibus in. Nunc
            eleifend nibh est, quis vehicula dolor pellentesque a. Nulla feugiat
            gravida nunc in viverra. Donec ut volutpat eros. Curabitur eu risus
            bibendum, egestas mi ac, porttitor arcu. Etiam ultricies aliquet
            enim, at tincidunt metus convallis in. Cras arcu dolor, rhoncus sed
            porta eu, imperdiet et mauris. Proin eleifend tincidunt faucibus.
            Nullam rutrum neque nec massa lobortis varius. Sed viverra eros ex,
            eu ornare nisi feugiat quis. Fusce pellentesque ante mauris, in
            dapibus nulla mollis id. Duis pharetra libero at erat sagittis
            pharetra. Nulla condimentum interdum mi vitae blandit. Etiam
            vehicula pharetra quam, eu sagittis nisi dignissim ut. Integer
            luctus gravida odio sed luctus. Nullam rutrum neque nec massa
            lobortis varius. Sed viverra eros ex, eu ornare nisi feugiat quis.
            Fusce pellentesque ante mauris, in dapibus nulla mollis id. Duis
            pharetra libero at erat sagittis pharetra. Nulla condimentum
            interdum mi vitae
          </p>
        </CardContent>
      </Grid>
    </div>
  );
}
