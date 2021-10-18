import { useState, useContext } from 'react';
import Image from 'next/image'
import { useAuth } from '../../context/auth';
import { signIn, useSession } from "next-auth/client";

import { ThemeContext } from 'styled-components';

import {
    Avatar,
    Box,
    Container,
    Search,
    Input,
    Button,
    Acesso,
    Logado,
    Lateral,
    CameraIcon,
    BellIcon,
    MenuIcon, HamburguerIcon, ConfigIcon, SearchIcon
} from './styles'

import LoginButton from '../Button'

import { HiMicrophone } from "react-icons/hi";
import Link from 'next/link'
import Data from './DataHeader'
import SubMenu from '../Submenu';
import Img from '../../assets/YouTube_logo.png'
import LogoYT_Branco from '../../assets/YT_branco.png'
import { FaRegUserCircle } from "react-icons/fa";
import Aplicativos from '../Aplicativos';
import Configuracao from '../Configuracao';
import Temas from '../Tema'


import Conta from '../Conta';

function Menu({ toggleTheme }) {
    const { title } = useContext(ThemeContext)
    const [session] = useSession();

    const { click, setClick } = useAuth();
    const handleClick = () => {
        setClick(!click)
    }   

    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(!isOpenModal)
        if (isOpenModal2 === true) {
            setIsOpenModal2(!isOpenModal2)
        }
        if(showTheme === true){
            setShowTheme(!showTheme)
        }
    }


    const [isOpenModal2, setIsOpenModal2] = useState(false)
    const openModal2 = () => {
        setIsOpenModal2(!isOpenModal2)
        if (isOpenModal === true) {
            setIsOpenModal(!isOpenModal)
        }

        if(showTheme === true){
            setShowTheme(!showTheme)
        }
    }

    const [showTheme, setShowTheme] = useState(false)
    const togleTheme = () => {
        setShowTheme(!showTheme)
        if(isOpenModal2 === true){
            setIsOpenModal2(!isOpenModal2)
        }
        if(showConta === true){
            setShowConta(!showConta)
        }
    }

    const [showConta, setShowConta] = useState(false)
    const handleShowConta = () =>{
        setShowConta(!showConta)
        if(isOpenModal2 === true){
            setIsOpenModal2(!isOpenModal2)
        }
    }

    

    return (
        <>
            <Container>
                <Box>
                    <HamburguerIcon onClick={handleClick} />
                    <Link href='/'>
                        <a>
                            <Image src={title === 'dark' ? LogoYT_Branco : Img} width={90} height={22} />
                        </a>
                    </Link>
                </Box>
                <Search>
                    <Input type='text' placeholder='Pesquisar' />
                    <Button><SearchIcon /></Button>
                    <span><HiMicrophone /></span>
                </Search>
                {!session ? (
                    <Acesso>
                        <MenuIcon onClick={openModal} />
                        {isOpenModal ? <Aplicativos /> : null}
                        <ConfigIcon  onClick={openModal2} />
                        {isOpenModal2 ? <Configuracao togleTheme={togleTheme} /> : null}
                        {showTheme ? <Temas togleTheme={togleTheme} toggleTheme={toggleTheme}/> : null}
                        <LoginButton onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}><FaRegUserCircle /><span>FAZER LOGIN</span></LoginButton>
                    </Acesso>

                ) : (
                    <Logado>
                        <Link href='/teste'><a><CameraIcon /></a></Link>
                        <MenuIcon onClick={openModal2} />
                        {isOpenModal2 ? <Configuracao  /> : null}
                        <Link href='/teste'><a><BellIcon /></a></Link>
                        <Avatar
                            alt="user"
                            src={session?.user?.image}
                            onClick={handleShowConta}
                        />
                        {showConta ? <Conta togleTheme={togleTheme} toggleTheme={toggleTheme} /> : null}
                        {showTheme ? <Temas togleTheme={togleTheme} toggleTheme={toggleTheme}/> : null}
                    </Logado>
                )}
                {/* {session && <h1>Hello, {session.user.name}!</h1>} */}

            </Container>
            <Lateral click={click}>
                {Data.map((item, index) => {
                    return (<SubMenu key={index} item={item} />)
                }

                )}
            </Lateral>
        </>
    );
}

export default Menu;
