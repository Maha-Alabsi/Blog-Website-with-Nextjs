import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
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
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          View Post
        </Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
