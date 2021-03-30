// This file for rendering certain post from API
import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './../../components/useStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../components/theme';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { server } from '../../config/index';

//get data from external API
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const post = await res.json();
  return {
    props: { post },
  };
};

// //get data from apiData by id // API route
// export const getStaticProps = async context => {
//   const id = context.params.id;
//   const res = await fetch(`${server}/api/posts/${id}`);
//   const post = await res.json();
//   return {
//     props: { post },
//   };
// };

// //get data from apiData // API route
// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/posts`);
//   const posts = await res.json();
//   //to get array of the posts ids
//   const ids = posts.map(post => {
//     return post.id;
//   });
//   const paths = ids.map(id => {
//     return {
//       params: { id: id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

//get data from external API

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  //to get array of the posts ids
  const ids= posts.map(post => {
    return  post.id
  });
  const paths = ids.map(id => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const post = ({ post }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md' style={{ marginTop: '80px' }}>
        <Typography variant='h4' gutterBottom>
          {post.title}
        </Typography>
        <hr />
        <Card className={classes.root} style={{ marginTop: '20px' }}>
          <CardMedia
            className={classes.media}
            image={`https://source.unsplash.com/720x400/?${post.id}`}
            title={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {post.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {post.body}
            </Typography>
          </CardContent>
          <Link href='/blog'>
            <Button
              variant='outlined'
              size='small'
              color='secondery'
              style={{ margin: '10px' }}
            >
              Go Back
            </Button>
          </Link>
        </Card>
      </Container>
    </ThemeProvider>
  );
};
export default post;
