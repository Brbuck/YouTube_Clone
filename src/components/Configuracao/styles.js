import styled, {css} from 'styled-components';

import {FiMoon} from "react-icons/fi";
import {IoLanguageOutline} from "react-icons/io5";
import {VscGlobe} from "react-icons/vsc";
import {GoGear} from "react-icons/go";
import {MdPersonPin} from "react-icons/md";
import {FiHelpCircle} from "react-icons/fi";
import {RiFeedbackLine} from "react-icons/ri";
import {FaRegKeyboard} from "react-icons/fa";

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
  
`;

export const Box = styled.div`
    padding: 8.4px 0px;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    text-transform: capitalize;

    button{
        width: 100%;
        padding: 10px;
        cursor: pointer;
        text-align: left;
        font-size: 1rem;
        color:${props => props.theme.colors.text};

        &:hover{
            background-color:${props => props.theme.colors.hover};
        }
    }

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

export const CSSICON = css`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: ${props => props.theme.colors.text};


    &:active{
        background-color: #D3D3D3;
        border-radius: 50%;
        
    }
`;

export const MoonIcon = styled(FiMoon)`${CSSICON}`
export const LanguageIcon = styled(IoLanguageOutline)`${CSSICON}`
export const LocalIcon = styled(VscGlobe)`${CSSICON}`
export const ConfigIcon = styled(GoGear)`${CSSICON}`
export const DataIcon = styled(MdPersonPin)`${CSSICON}`
export const Helpcon = styled(FiHelpCircle)`${CSSICON}`
export const FeedIcon = styled(RiFeedbackLine)`${CSSICON}`
export const BoardIcon = styled(FaRegKeyboard)`${CSSICON}`

