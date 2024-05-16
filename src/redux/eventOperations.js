import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

 import { getItems, 
  setRegistration 
} from '../service/eventApi';

 export const getEvents = createAsyncThunk('events/get', async (thunkAPI) => {
    try {
      const { data } = await getItems();
      return data;
    } catch (error) {
      toast.error('Events cannot be displayed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const createRegistration = createAsyncThunk('events/registration/create',
  async (_id, participants, thunkAPI) => {
    try {
      const { data } = await setRegistration(_id, participants);
      return data;
    } catch (error) {
      toast.error('Registration cannot be executed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

