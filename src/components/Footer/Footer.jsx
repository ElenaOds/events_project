import { StyledFooter, Text } from './Footer.styled'

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <StyledFooter>
      <Text>© {date}. All rights are reserved.</Text>
    </StyledFooter>
  )
}

export default Footer;