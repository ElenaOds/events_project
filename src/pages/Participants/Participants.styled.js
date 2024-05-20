import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`
    padding: 16px;

    @media screen and (min-width: 1768px) {
        padding: 18px; 
    }

    @media screen and (min-width: 1280px) {
        padding: 24px; 
    }
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 16px;
    color: var(--text-color);
    margin-bottom: 16px;

    @media screen and (min-width: 1768px) {
        font-size: 20px;
        margin-bottom: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 22px;
        margin-bottom: 20px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
`

const text = `
    font-weight: 400;
    font-size: 14px;
    color: var(--text-color);
  
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const CardInfo = styled.p`
    ${text}
    & > span {
        color: var(--orange-color);
    }
`

export const Card = styled.li`
    padding: 8px;
    border-radius: 8px;
    background-color: var(--add-bg-color);
    display: grid;
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

export const Wrapper = styled.div`
@media screen and (min-width: 480px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

@media screen and (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
}

@media screen and (min-width: 1280px) {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
}
`

export const Text = styled.p`
    ${text}
    margin-bottom: 12px;

    @media (min-width: 1280px) {
        margin-bottom: 14px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 16px;
    }
`

export const StyledLink = styled(Link)`
display: inline-block;
text-decoration: none;
text-align: center;
${text}
color: var(--add-text-color);
padding: 3px;
background: var(--add-bg-color);
width: 70px;
border-radius: 5px;

@media (min-width: 1280px) {
 width: 80px;
 padding: 5px;
}

&:hover,
&:focus {
 color: var(--add-text-color);
 background: var(--orange-color);
 outline: none;
}
`
