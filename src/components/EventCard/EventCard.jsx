import { Card, CardTitle, CardDescription, CardOrganizer, CardDate, StyledRegisterLink, StyledViewLink } from './EventCard.styled';

const EventCard = ({event}) => {
    const { _id, title, description, organizer, event_date } = event;

    const formattedDate = new Date(event_date).toLocaleDateString('dsb-DE', { day:"numeric", month:"numeric", year:"numeric" })
  return (
        <Card key={_id} id={_id}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardOrganizer>Organizer: {organizer}</CardOrganizer>
        <CardDate>Date: {formattedDate}</CardDate>
        <StyledRegisterLink to={`/events/${_id}/registration`} id={_id}>Register</StyledRegisterLink>
        <StyledViewLink to={`/events/${_id}/participants`} id={_id}>View</StyledViewLink>
      
    </Card>
  )
}

export default EventCard
