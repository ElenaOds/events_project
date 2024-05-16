import styled from 'styled-components';

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
`