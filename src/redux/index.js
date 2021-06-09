import { combineReducers } from 'redux'
import showtimesReducer from './showtimes'

export default combineReducers({
  showtimes: showtimesReducer,
  
});

