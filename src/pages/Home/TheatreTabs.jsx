import React from 'react';
import { 
  withStyles,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import Styles from './Styles';

const TheatreTabs = (props) => {
  const {tabpanel, classes, onClick: handleOnClick} = props; 
  return (
    <AppBar position="relative">
      <Tabs value={tabpanel} centered 
        className={classes.theatreTabs}>
        <Tab 
          label="Arclight" 
          value="arclight" 
          onClick={() => {handleOnClick('arclight')}}
          className={classes.theatreTab}
        />
        <Tab 
          label="Pacific Theatres" 
          value="pacific-theatres"
          onClick={() => {handleOnClick('pacific-theatres')}}
          className={classes.theatreTab}
        />
        <Tab label="AMC" value="amc"
          onClick={() => {handleOnClick('amc')}}
          className={classes.theatreTab}
        />
      </Tabs>
      </AppBar>
  );
};

export default withStyles(Styles)(TheatreTabs);
