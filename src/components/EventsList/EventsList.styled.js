import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    @media screen and (min-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
`