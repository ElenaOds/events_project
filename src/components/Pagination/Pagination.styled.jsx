import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    alihn-items: center;
    gap: 8px;

     @media screen and (min-width: 768px) {
        gap: 12px;
    }

    @media screen and (min-width: 1280px) {
        gap: 16px;  
    }
`

const button = `
    display: inline-block;
    background-color: var(--add-bg-color);
    font-weight: 400;
    font-size: 10px;
    color: var(--add-text-color);
     outline: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  
    @media screen and (min-width: 768px) {
        font-size: 12px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;    
    }
`;

export const PageBtn = styled.button`
    ${button};
    width: 50px;
    height: 24px;   

    &:disabled {
    background-color: var(--divider-color);
    cursor: not-allowed;
    }

     @media screen and (min-width: 768px) {
        width: 70px;
        height: 26px;  
    }

    @media screen and (min-width: 1280px) {
         width: 80px;
        height: 30px; 
    }
`

export const PageNumBtn = styled.button`
    ${button};
    width: 26px;
    height: 24px;
    
     @media screen and (min-width: 768px) {
        width: 26px;
        height: 26px;
    }

    @media screen and (min-width: 1280px) {
        width: 30px;
        height: 30px;
    }
`