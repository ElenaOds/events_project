import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/events/eventOperations';
import EventsList from '../../components/EventsList/EventsList';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';

import { Container, SectionTitle, Wrapper } from './Events.styled';

const Events = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.data);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    dispatch(getEvents())
    setPage(1);
  }, [dispatch, filter]);

 
  const filteredEvents = events.filter((event) =>
    filter ? event.title.toLowerCase().includes(filter) : events  
);


let eventsPerPage = 6;

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
    <Container>
     <SectionTitle>Choose the best events</SectionTitle>
     <Wrapper>
     <Filter setPage={setPage} placeholder={'search by title'}/>
     <p>{filteredEvents.length} events are found </p>
     </Wrapper>
     <EventsList events={filteredEvents} page={page} eventsPerPage={eventsPerPage}/>
     {filteredEvents.length > 0 && 
    <Pagination page={page} handleClickNext={handleClickNext} handleClickPrevoius={handleClickPrevoius} handlePageSet={handlePageSet} totalEvents={filteredEvents.length} eventsPerPage={eventsPerPage}/>
    }  
    </Container>
  )
}

export default Events;
