import { useParams, useLocation  } from "react-router-dom";
import {  useSelector } from 'react-redux';
import LinkBack from '../../components/LinkBack/LinkBack';
import { Container, SectionTitle } from './Participants.styled'

const Participants = () => {
  const location = useLocation();
  const { _id } = useParams();
  const events = useSelector((state) => state.events.data);
  const event = events.find(event => event._id === _id);
  const { participants } = event;

  const backLinkHref = location.state?.from ?? "/events";

  return (
    <Container>
      <LinkBack backLinkHref={backLinkHref}/>
      <SectionTitle>List of participatns for {event.title} event</SectionTitle>
    <ul>
        
         {participants.map(participant => {
    
    return (
      <li key={participant._id} id={participant._id}>
        <p>{participant.name}</p>
        <p>{participant.email}</p>
    
      </li>
    )

  })}  
    </ul>
    </Container>
  )

}

export default Participants
