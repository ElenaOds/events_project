import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    padding: 12px 16px;
    border-bottom: 1px solid var(--orange-color);

    @media screen and (min-width: 768px) {
        padding: 12px 18px; 
    }

    @media screen and (min-width: 1280px) {
        padding: 18px 24px; 
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 18px;
    color: var(--orange-color);

    @media screen and (min-width: 768px) {
        font-size: 22px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 26px;
    }
`;