import styled from 'styled-components';
import { Link } from "react-router-dom";

const text = `
    font-weight: 500;
    font-size: 14px;
    color: var(--text-color);
  
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const Card = styled.li`
    padding: 8px;
    border-radius: 8px;
    background-color: var(--add-bg-color);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 10px;
        padding: 10px;
    }

    @media screen and (min-width: 1280px) {
        gap: 12px;
        padding: 16px;   
    }
`

export const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 16px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    color: var(--orange-color);

    @media screen and (min-width: 1768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`

export const CardDescription = styled.p`
    ${text}
    grid-column: 1 / 3;
    grid-row:  2 / 3;
`

export const CardOrganizer = styled.p`
    ${text}
    grid-column: 1 / 3;
    grid-row:  3 / 4;
`

export const CardDate = styled.p`
    ${text}
    grid-column: 1 / 3;
    grid-row:  4 / 5;
`;

const link = `
    text-decoration: none;
    ${text}
    color: var(--add-text-color);
    justify-self: center;

    &:hover,
    &:focus {
    color: var(--orange-color);
    outline: none;
   }

`

export const StyledRegisterLink = styled(Link)`
    ${link}
    grid-column: 1 / 2;
    grid-row:  5 / 6;  
`
export const StyledViewLink = styled(Link)`
    ${link}
    grid-column: 2 / 3;
    grid-row:  5 / 6;    
`