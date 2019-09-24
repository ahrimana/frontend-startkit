import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles'

/*
class BlogStripe extends React.Component {
    render () {
        return (
            <ListItem dense button>
                <Avatar>{this.props.blog.id}</Avatar>
                <ListItemText>{this.props.blog.title}</ListItemText>
                <ListItemSecondaryAction>
                    <Link href={`/blog/${this.props.blog.id}`}>
                        <Button variant="outlined">Details</Button>
                    </Link>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}
*/

class BlogStripe extends React.Component {
    render () {
      
      const date = this.props.blog.date.toString()
      
        return (
        <Card style={styles.sorting}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe">
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.blog.title}
          subheader={date}
        />
        <CardMedia
          image={this.props.blog.background}
          title="Paella dish"
          style={styles.media}
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        </Card>
    );
  }
}
export default BlogStripe;
