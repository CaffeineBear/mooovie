import React from 'react';
import { 
  withStyles,
  Typography,
  Select, 
  MenuItem, 
} from '@material-ui/core';
import Styles from './Styles';

const TheatreSelect = (props) => {
  const { 
    classes, 
    tabpanel, 
    theatreValues, 
    onChange: handleOnChange
  } = props;
  return (<>
    <Typography variant="h6" >
      Select Theatre
    </Typography>
    <Select 
      variant="filled"
      value={tabpanel} 
      onChange={(e) => handleOnChange(e)}
      classes={{
        root: classes.theatreSelectRoot,
        filled: classes.theatreSelectFilled
      }}>
      <MenuItem value="">
        <em>Select Theatre</em>
      </MenuItem>
      {theatreValues.map(({value, name}) => (
        <MenuItem value={value} key={`theatremenu-${value}}`}>
          {name}
        </MenuItem>
      ))}
    </Select> 
  </>);
};

export default withStyles(Styles)(TheatreSelect);
