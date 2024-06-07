import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/events/eventOperations';

import EventCard from '../EventCard/EventCard';
import Pagination from '../Pagination/Pagination';
import { List } from './EventsList.styled';

const EventsList = () => {
  const [page, setPage ] = useState(1);
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);

    let eventsPerPage = 6;

    useEffect(() => {
      dispatch(getEvents());
    }, [dispatch]);

    const handleClickNext = () => {
      setPage((prevPage) => prevPage + 1)
    }

    const handleClickPrevoius = () => {
      setPage((prevPage) => prevPage - 1)
    }

    const handlePageSet = (pageNumber) => {
      setPage (pageNumber)
    }

  return (
    <>
    <List>
      {events.slice(page * 6 - 6, page * 6).map(event => {
        return (
          <EventCard key={event._id} event={event}/>
        )
      }
      )}    
    </List>
      <Pagination page={page} handleClickNext={handleClickNext} handleClickPrevoius={handleClickPrevoius} handlePageSet={handlePageSet} totalEvents={events.length} eventsPerPage={eventsPerPage}/>
    </>
  )
}

export default EventsList
