import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './../../components/useStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../components/theme';
import Container from '@material-ui/core/Container';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const paths = posts.map(post => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async content => {
  const id = content.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const post = await res.json();
  return {
    props: { post },
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
        </Card>
      </Container>
    </ThemeProvider>
  );
};
export default post;
