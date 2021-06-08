import React from 'react';
import { withStyles, Grid, Typography, OutlinedInput,InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Styles from './Styles';
import TheatersIcon from '@material-ui/icons/Theaters';

const HomeHeader = (props) => {
  const { classes, onChange: handleOnChange } = props;
  return (<>
    <Grid item>
      <Typography variant="h3">
        Yooshins Mooovie
      </Typography>
    </Grid>
    <Grid item container justify="center">
      <div className={classes.homeMediaBackground}>
        <TheatersIcon className={classes.homeMedia}/>
      </div>
    </Grid>
    <Grid item>
      <OutlinedInput
        className={classes.movieSearchBar}
        color="secondary"
        inputProps={{style: {
          backgroundColor: 'transparent'
        }}} 
        variant="outlined" 
        id="movie-search-bar"
        placeholder="Search Movie..."
        onChange={(e) => handleOnChange(e.target.value)}
        startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
        }
      />
    </Grid>
  </>);
};

export default withStyles(Styles)(HomeHeader);
