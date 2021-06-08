import React from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
       style={{width: '100%'}}
      {...other}
    >
      {value === index && (
        <div style={{width: '100%'}}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TabPanel
