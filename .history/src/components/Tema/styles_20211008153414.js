import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 70px;
    left: 72%;
    width: 310px;
    height: auto;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: column;   
    border: 1px solid ${props => props.theme.colors.border}; 

    p{
        font-size: 0.9rem;
    }
`

export const Theme = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #ccc;
    }

    input[type="checkbox"]{
        width: 30px;
        height: 30px;

    }

    label{
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
    }
`