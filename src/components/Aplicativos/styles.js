import styled, {css} from 'styled-components';

import {SiYoutubetv } from "react-icons/si";
import {IoLogoYoutube } from "react-icons/io";
import {SiYoutubegaming } from "react-icons/si";
import {SiYoutubestudio} from "react-icons/si";

export const Container = styled.div`
    position: fixed;
    top: 70px;
    left: calc(100% - 360px);
    width: 310px;
    height: auto;
    background-color: ${props => props.theme.colors.primary};
    

    display: flex;
    flex-direction: column;   
    border: 1px solid ${props => props.theme.colors.border}; 
  
`;

export const Box = styled.div`
    padding: 8.4px 0px;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};

    a{
        display: flex;
        align-items: center;
        padding: 10px;
        color: ${props => props.theme.colors.text};
        

        &:hover{
            background-color:${props => props.theme.colors.hover};
        }
    }
  
`;

export const iconsCSS = css`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #FF0000;


    &:active{
        background-color: #D3D3D3;
        border-radius: 50%;
        
    }
`;

export const TvIcon = styled(SiYoutubetv)`${iconsCSS}`
export const YouTubeIcon = styled(IoLogoYoutube)`${iconsCSS}`
export const MusicYtIcon = styled(SiYoutubegaming)`${iconsCSS}`
export const KidstIcon = styled(SiYoutubestudio)`${iconsCSS}`
