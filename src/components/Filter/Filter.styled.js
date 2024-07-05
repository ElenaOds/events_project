import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    margin-bottom: 16px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
    padding: 5px;
    outline: none;

     @media screen and (min-width: 768px) {
      width: 500px;
      margin-bottom: 0;
    }

    &:hover,
    &:focus {
    border: 1px solid var(--orange-color);
    }
`