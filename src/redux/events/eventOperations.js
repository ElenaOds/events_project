import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

 import { getItems } from '../../service/eventApi.js';

 export const getEvents = createAsyncThunk('events/get', async (thunkAPI) => {
    try {
      const { data } = await getItems();
      return data;
    } catch (error) {
      toast.error('Events cannot be displayed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });


