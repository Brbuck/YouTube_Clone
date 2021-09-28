import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 148px;
    padding: 10px 15px;
    font-size: 1.3rem;
    border: 1px solid blue;
    background-color: transparent;
    color: blue;
    margin-left: 10px;
    

    span{
        font-size: 0.9rem;
        margin-left: 5px;
    }
  
`;

export default Button;

/* 
    interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`; */