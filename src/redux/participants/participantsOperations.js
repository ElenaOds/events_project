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
      'participants/addParticipant', 
      async (payload, thunkAPI) => {
        const { _id, newParticipant } = payload;
        try {
          const { data } = await setRegistration(_id, newParticipant);
          return data;
        } catch (error) {
          console.error('Error adding participants:', error);
          toast.error('Participants cannot be added');
          return thunkAPI.rejectWithValue(error.message);
        }
      });