import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import useStyles from './useStyles';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} style={{ minHeight: 500 }}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='March 29, 2021'
        />
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
        <div className={classes.bottomRow}>
          <div>
            <IconButton label='Favorite'>
              <FavoriteIcon />
            </IconButton>
            <IconButton label='share'>
              <ShareIcon />
            </IconButton>
          </div>
          <Link href={`/blog/${post.id}`}>
            <Button
              variant='outlined'
              size='small'
              color='secondery'
              style={{ color: '#434343', textTransform: 'none' }}
            >
              Veiw
            </Button>
          </Link>
        </div>
      </Card>
    </ThemeProvider>
  );
};
export default PostCard;
