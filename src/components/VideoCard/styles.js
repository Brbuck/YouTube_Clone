import styled from 'styled-components';
//import Image from 'next/image'

export const Container = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: transparent;
    
   
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 160px;
    
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px 20px 20px 0px;
`

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >strong{
        font-size: 1rem;
        margin-bottom: 10px;
        color: ${props => props.theme.colors.text};
  
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    >span{
        font-size: 1rem;
        color: gray;
    }
`
 