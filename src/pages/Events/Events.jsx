import EventsList from '../../components/EventsList/EventsList';

import { Container, SectionTitle } from './Events.styled';

const Events = () => {
       
  return (
    <Container>
     <SectionTitle>Choose the best events</SectionTitle>
     <EventsList/>
    </Container>
  )
}

export default Events
