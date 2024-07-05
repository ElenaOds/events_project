import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px;

    @media screen and (min-width: 768px) {
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

    @media screen and (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 22px;
        margin-bottom: 20px;
    }
`

export const StyledForm = styled.form`
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
    padding: 20px 16px;
}

@media screen and (min-width: 1280px) {
    gap: 18px;
    padding: 32px 16px;
}
`

const text = `
    font-weight: 400;
    font-size: 12px;
    color: var(--text-color);
  
    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;    
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > span {
        ${text}
        margin-bottom: 8px;
    }  
`;


export const RadioBtnGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 8px;
    justify-items: center;
`
export const RadioError = styled.div`
    grid-column: 2 / 4;
    grid-row:  3 / 4;
    justify-self: right;
    color: var(--high-color);
`

export const Text = styled.p`
    ${text}
    grid-column: 1 / 4;
    grid-row:  1 / 2;
    justify-self: left;
`;

export const RadioBtn = styled.span`
    ${text}
    margin-left: 8px;
`

export const Input = styled.input`
 appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
  padding: 8px 12px;
  height: 100%;
  ${text}
  border-radius: 8px;
  outline: none;
    border: 1px solid ${({ touched, error }) =>
    touched && error 
   ? 'var(--high-color)' 
   : 'var(--divider-color)'};
 


  margin-bottom: ${({  touched, error  }) => 
    touched && error
    ? '4px'
    : '20px'};
  



  &::placeholder {
    ${text}
    color: var(--divider-color);
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ touched, error }) => 
    touched && error
    ? 'var(--high-color)'
    : 'var(--orange-color)'};
  }
`


export const StyledError = styled.div`
    ${text}
    color: var(--high-color);
    text-align: right;
`;


export const Button = styled.button`
  display: block;
  text-align: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  background-color: var(--orange-color);
  border: none;
  padding: 8px;
  ${text}
  color: var(--add-text-color);
  border-radius: 8px;
  cursor: pointer;
  justify-self: center;


&:hover {
  background-color: var(--text-color);
}

&:disabled {
  background-color: var(--divider-color);
  cursor: not-allowed;
}
`;
