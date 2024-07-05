import EventCard from '../EventCard/EventCard';
import { List } from './EventsList.styled';

const EventsList = ({ events, eventsPerPage, page }) => {

  return (
    <>
    <List>
        {events.slice((page - 1) * eventsPerPage, page * eventsPerPage).map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </List>     
    </>
  )
}

export default EventsList;
