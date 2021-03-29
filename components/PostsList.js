import React from 'react';
import PostCard from './PostCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const PostsList = ({ posts }) => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container justify='center' spacing={4}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default PostsList;
