import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShowTimes } from '../../redux/showtimes';
import { 
  withStyles, 
  Container,
  Grid,
  Hidden,
} from '@material-ui/core';
import Styles from './Styles';
import HomeHeader from './HomeHeader';
import TabPanel from '../../components/TabPanel';
import TheatreTabs from './TheatreTabs';
import TheatreSelect from './TheatreSelect';
// import showTimeData from '../../mockedData/data/showtimes_combined_data.json';
import ShowTimeCard from './ShowTimeCard';


const Home = (props) => {
  const { classes } = props;
  const [ tabpanel, setTabpanel ] = useState('arclight');
  const dispatch = useDispatch();
  const showTimeData = useSelector( state => state.showtimes.schedules );
  const [ searchQuery, setQuery ] = useState('');
  
  useEffect(() => {
   dispatch(getShowTimes());
  /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    console.log(showTimeData);
  }, [showTimeData]);

  const handleOnClick = (selectedPanel) => {
    setTabpanel(selectedPanel);
  };
  const theatreValues = [
    {
      value: 'arclight',
      name: 'Arclight'
    },
    {
      value: 'pacific-theatres',
      name: 'Pacific Theatres'
    },
    {
      value: 'amc',
      name: 'AMC'
    }
  ];
  const handleOnChange = (event) => {
    setTabpanel(event.target.value);
  };
  const handleSearch = (query) => {
    setQuery(query.toLowerCase());
  }
  const searchFromCurrentEle = (currEle) => {
    if(!searchQuery) {
      return true;
    }
    if(currEle.title.toLowerCase().includes(searchQuery)){
      return true;
    }
    if(currEle.rating.toLowerCase().includes(searchQuery)){
      return true;
    }
    if(currEle.timetables.find(currTime => currTime.includes(searchQuery))){
      return true;
    }
    return false;
  };

  return (
    <Container maxWidth="lg" 
      className={classes.homeContainer}>
        <Grid 
          container 
          direction="column" 
          justify="flex-start"
          spacing={3}>
          <HomeHeader onChange={handleSearch}/> 
          
          <Hidden smDown >
            <TheatreTabs tabpanel={tabpanel} onClick={handleOnClick} /> 
          </Hidden>
          
          <Hidden mdUp>
            <TheatreSelect 
              tabpanel={tabpanel} 
              theatreValues={theatreValues} 
              onChange={handleOnChange} />    
          </Hidden>
          
          {showTimeData.map(({id, name, showtimes}) => {
            const { value } = theatreValues.find(theatre => theatre.name === name);
            return (
              <TabPanel 
                value={tabpanel} 
                index={value}
                style={{width: '100%', marginTop: '8px'}}
                key={`theatre-tab-${id}`} >
                <Grid item container direction="row" justify="flex-start" spacing={1}>
                 {showtimes.filter(currEle => {
                    return searchFromCurrentEle(currEle);
                 }).map(({title, ...otherProps}) => {
                    return (
                      <Grid item xs={12} sm={6} md={6} key={id + '-' + title}>
                        <ShowTimeCard id={id} title={title} {...otherProps} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            ); 
          })}
        </Grid>
    </Container>
  );
};

export default withStyles(Styles)(Home);
