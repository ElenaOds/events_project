import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
 import { getUsers, setRegistration } from '../../service/eventApi.js';

 export const getParticipants = createAsyncThunk(
  'participants/fetchParticipants', 
  async (_id, thunkAPI) => {
    try {
      const { data } = await getUsers(_id);
      return data;
    } catch (error) {
      toast.error('Participants cannot be displayed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });


  export const getRegistration = createAsyncThunk(
    'participants/create', 
    async (_id, newParticipant, thunkAPI) => {
      try {
        const { data } = await setRegistration(_id, newParticipant);
        return data;
      } catch (error) {
        console.error('Error fetching participants:', error);
        toast.error('Participants cannot be displayed');
        return thunkAPI.rejectWithValue(error.message);
      }
    });