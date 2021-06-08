import React from 'react';
import { withStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Styles from './Styles';

const ShowTimeCard = (props) => {
  const { classes, id, title, rating, poster, timetables } = props;
  const ratingColor = rating === 'R' ? 'red' : 'blue'
  return (
    <Card className={classes.card} >
      <CardMedia 
        classes={{
          root: classes.movieThumbnailRoot,
          img: classes.movieThumbnailImg
        }}
        component="img"
        alt={`movie poster of ${title}`}
        title={title}
        image={poster}
      />
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          align="right" 
          style={{color: ratingColor}}>
          <b>{rating}</b>
        </Typography>
        <div className={classes.timetables} >
          {timetables.map( (currTime, index) => (
            <Typography 
              key={id + '-timetable-' + index} 
              variant="body2" 
              className={classes.timetableText}>
              {currTime}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(Styles)(ShowTimeCard);
