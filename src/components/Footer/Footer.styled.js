import styled from 'styled-components';

export const StyledFooter = styled.footer`
    margin-top: auto;
    padding: 12px 16px;
    border-top: 1px solid var(--orange-color);
    text-align: center;
       
    @media screen and (min-width: 768px) {
        padding: 12px 18px; 
    }

    @media screen and (min-width: 1280px) {
        padding: 18px 24px; 
    }
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: var(--text-color);

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`;