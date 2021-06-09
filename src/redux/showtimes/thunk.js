import { createAsyncThunk } from "@reduxjs/toolkit";
import config from '../../config';

const BACKEND_ENDPOINT = config.backend_endpoint;

export const getShowTimes = createAsyncThunk(
  'theatre/getShowTimes',
  async () => {
    // Attempt to send email to others.
    let result = await fetch(BACKEND_ENDPOINT + 'showtimes');
    if(result.status !== 200){
      throw new Error(result.error.message);
    }
    result = await result.json();
    //console.log(JSON.stringify(result, null, 2));
    return result;
  }
);
