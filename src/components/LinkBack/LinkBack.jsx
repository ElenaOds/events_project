import { StyledLink } from './LinkBack.styled';

const LinkBack = ({backLinkHref}) => {
  return (
    <StyledLink to={backLinkHref}>Go back</StyledLink>
  )
}

export default LinkBack;

