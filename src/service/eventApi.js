import axios from "axios";

axios.defaults.baseURL = 'https://events-backend-zfed.onrender.com/api';

export const getItems = data => axios.get('/events', data);
 
export const setRegistration = (_id, newParticipant) => axios.post(`/events/${_id}/registration`, newParticipant);

export const getUsers = _id => axios.get(`/events/${_id}/participants`);

