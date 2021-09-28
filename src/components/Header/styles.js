import styled, { css } from 'styled-components';

import { FiMenu } from "react-icons/fi";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export const Container = styled.header`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
  

`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 140px;
`

export const Search = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 10px;
    
    @media (min-width: 900px){
        width: 45%;
    }

    span{
        cursor: pointer;
        font-size: 20px;
        padding: 5px 7px;
        margin-left: 15px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.background};
    }
   
`

export const Input = styled.input`
    height: 30px;
    //width: min(580px, max(120px, 38vw));
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border-radius: 0;
    background-color: ${props => props.theme.colors.background};
    border: 1.5px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
   
    &:focus { outline: 0.5px solid blue; }
    
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 65px;
    padding: 3px;
    border-radius: 0;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secundary};
    border-top: 1px  solid ${props => props.theme.colors.secundary};
    border-right: 1px  solid ${props => props.theme.colors.secundary};
    border-bottom: 1px  solid ${props => props.theme.colors.secundary};
`
export const Logado = styled.nav`
    display: flex;
    align-items: center;
    
    a{
        margin: 0px 6px;
    }
    
`
export const Acesso = styled(Logado)``

export const Lateral = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 56px;
    //left: ${({ click }) => (click ? '0' : '-10%')};
    width: ${({ click }) => (click ? '240px' : '70px')};
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    //transition: ease-in 0.6s;
    overflow-y: auto;

    >span{
        margin-left: 30px;
    }

`
export const Avatar = styled.img`
    width: 30px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;

    margin: 0px 8px;
`

export const iconCSS = css`
    flex-shrink: 0;
    width: 35px;
    height: 35px;
    padding: 6px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;


    &:active{
        background-color: #D3D3D3;
        border-radius: 50%;
        
    }
`;

export const CameraIcon = styled(VscDeviceCameraVideo)`${iconCSS}`
export const BellIcon = styled(BsBell)`${iconCSS}`
export const MenuIcon = styled(CgMenuGridR)`${iconCSS}`
export const ConfigIcon = styled(BsThreeDotsVertical)`${iconCSS}`
export const SearchIcon = styled(BsSearch)`${iconCSS}; width: 30px;`

export const HamburguerIcon = styled(FiMenu)`
    flex-shrink: 0;
    width: 40px;
    height: 35px;
    padding: 6px;
    cursor: pointer;
    margin-right: 20px;
    color: ${props => props.theme.colors.text};

    &:active{
        background-color: #D3D3D3;
        border-radius: 50%;
        
    }
`
