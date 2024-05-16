import styled from 'styled-components';
import { Form } from 'formik';

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

export const StyledForm = styled(Form)`
    padding: 10px;
    border-radius: 8px;
    background-color: var(--add-bg-color);
    display: grid;
    grid-template-columns: repeat(1fr);
    gap: 10px;
    max-width: 560px;
    margin: 0 auto;

@media screen and (min-width: 768px) {
    gap: 16px;
    padding: 16px;
}

@media screen and (min-width: 1280px) {
    gap: 12px;
    padding: 16px;   
}
`