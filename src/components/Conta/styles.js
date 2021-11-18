import styled, { css } from 'styled-components';

import { BsPersonSquare } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SiYoutubestudio } from "react-icons/si";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

import { FiMoon } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { MdPersonPin } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";
import { FaRegKeyboard } from "react-icons/fa";

export const Container = styled.div`
    position: fixed;
    top: 0px;
    left: calc(100% - 380px);
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

    a{
        display: flex;
        align-items: center;
        padding: 10px;
        color: ${props => props.theme.colors.text};
        font-size: 1rem;

        &:hover{
            background-color:${props => props.theme.colors.hover};
        }
    }
  
`;

export const LogOutButton = styled.button`
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
  
`
export const ThemeButton = styled.button`
        width: 96%;
        padding: 10px;
        cursor: pointer;
        text-align: left;
        margin-left: 2%;
        font-size: 1rem;
        color:${props => props.theme.colors.text};

        &:hover{
            background-color:${props => props.theme.colors.hover};
        }
  
`

export const BoxAccount = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 15px;

    >img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 5px;
    }

    div{
        display: flex;
        flex-direction: column;

        span{
            font-size: 1rem;
            font-weight: 500;
        }

        >a{
            font-size: 1rem;
            color: blue;
        }
    }
`

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

export const ChannelIcon = styled(BsPersonSquare)`${CSSICON}`
export const PurchasesIcon = styled(RiMoneyDollarCircleLine)`${CSSICON}`
export const StudioIcon = styled(SiYoutubestudio)`${CSSICON}`
export const AccountIcon = styled(RiAccountBoxLine)`${CSSICON}`
export const SignOutIcon = styled(BiLogIn)`${CSSICON}`

export const MoonIcon = styled(FiMoon)`${CSSICON}`
export const LanguageIcon = styled(IoLanguageOutline)`${CSSICON}`
export const LocalIcon = styled(VscGlobe)`${CSSICON}`
export const ConfigIcon = styled(GoGear)`${CSSICON}`
export const DataIcon = styled(MdPersonPin)`${CSSICON}`
export const Helpcon = styled(FiHelpCircle)`${CSSICON}`
export const FeedIcon = styled(RiFeedbackLine)`${CSSICON}`
export const BoardIcon = styled(FaRegKeyboard)`${CSSICON}`


