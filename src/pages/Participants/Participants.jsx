import { useEffect } from 'react';
import { useParams, useLocation  } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux';
import { getParticipants } from '../../redux/participants/participantsOperations';

import LinkBack from '../../components/LinkBack/LinkBack';
import { Container, SectionTitle, List, Card, CardInfo, Wrapper, Text, StyledLink } from './Participants.styled'


const Participants = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { _id } = useParams();
  const events = useSelector((state) => state.events.data);
  const event = events.find(event => event._id === _id);
 const participants = useSelector((state) => state.participants.list);

  useEffect(() => {
    dispatch(getParticipants(_id));
  }, [dispatch, _id]);
 
  const backLinkHref = location.state?.from ?? "/events";

  return (
    <Container>
      <LinkBack backLinkHref={backLinkHref}/>
      <SectionTitle>List of participatns for {event.title} event</SectionTitle>
    <List>
        {participants.length === 0 ? 
        (
          <Wrapper>
        <Text>There are no registered participants. Be the first one and register for the event</Text>
        <StyledLink to={`/events/${event._id}/registration`} id={event._id}>Register</StyledLink>
        </Wrapper>
      ) : (
        participants.map(participant => {
    
    return (
      <Card key={participant._id} id={participant._id}>
        <CardInfo><span>Name: </span>{participant.name}</CardInfo>
        <CardInfo><span>E-mail: </span>{participant.email}</CardInfo>
    
      </Card>
    )

  }) 
)}
    </List>
    </Container>
  )

}

export default Participants
