const Styles = (theme) => ({
  homeContainer: {
    color: 'white',
    minHeight: '120vh',
  },
  homeContents: {
    minHeight: '100vh'
  },
  homeMediaBackground: {
    width: '10rem',
    height: '10rem',
    backgroundColor: theme.palette.primary.main,
  },
  homeMedia: {
    width: '10rem',
    height: '10rem',
    transform: 'rotate(20deg)'
  },
  movieSearchBar: {
    //backgroundColor: 'white'
    color: 'white',
    '& fieldset': {
      borderColor : theme.palette.primary.main
    }
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    color: 'white',
    height: '100%',
  },
  movieThumbnailRoot: {
    width: '10rem',
    height: '10rem',
    backgroundColor: 'black'
  },
  movieThumbnailImg: {
    objectFit: 'contain'
  },
  theatreTabs: {
  },
  theatreTab: {
    //fontSize: '2.5vw'  
  },
  theatreSelectRoot: {
    paddingTop: '10px',
    color: 'white',
  },
  theatreSelectFilled: {
    backgroundColor: theme.palette.primary.main
  },
  ratingText: {
    color: theme.palette.primary.main
  },
  timetables: {
    display: 'flex', 
    flexWrap: 'wrap',
    flexDirection: 'row', 
    justifyContent: 'flex-start',  
  },
  timetableText: {
    margin: theme.spacing(1)
  },
});

export default Styles;
