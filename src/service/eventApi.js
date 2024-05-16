import axios from "axios";

axios.defaults.baseURL = 'https://events-backend-zfed.onrender.com/api';

export const getItems = data => axios.get('/events', data);
 
export const setRegistration = data => axios.post(`/events/${data._id}/registration`, data.participants);

