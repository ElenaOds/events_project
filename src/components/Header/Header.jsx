import { StyledHeader, Title, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={`/events`}>
      <Title>Events</Title>

      </StyledLink>
     
    </StyledHeader>
  )
}

export default Header
