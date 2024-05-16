import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
   display: inline-block;
   text-decoration: none;
   text-align: center;
   font-weight: 500;
   font-size: 12px;
   color: var(--add-text-color);
   padding: 3px;
   background: var(--add-bg-color);
   margin-bottom: 16px;
   width: 60px;
   border-radius: 5px;
   

   @media (min-width: 768px) {
    margin-bottom: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 14px;
    width: 70px;
    margin-bottom: 20px;
  }

   &:hover,
   &:focus {
    color: var(--add-text-color);
    background: var(--orange-color);
    outline: none;
   }
`