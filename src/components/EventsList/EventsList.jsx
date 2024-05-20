import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/events/eventOperations';

import EventCard from '../EventCard/EventCard';
import { List } from './EventsList.styled';

const EventsList = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);

    useEffect(() => {
      dispatch(getEvents());
    }, [dispatch]);


  return (
    <List>
      {events.map(event => {
        return (
          <EventCard key={event._id} event={event}/>
        )
      }
      )}    
    </List>
  )
}

export default EventsList
