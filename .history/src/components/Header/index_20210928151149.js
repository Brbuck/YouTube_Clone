import { useState, useContext } from 'react';
import Image from 'next/image'
import { useAuth } from '../../context/auth';
import { signIn, signOut, useSession } from "next-auth/client";

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
    MenuIcon, HamburguerIcon, ConfigIcon,SearchIcon
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

import Switch from 'react-switch';


function Menu({toggleTheme}) {
    const { click, setClick } = useAuth();
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    const { title } = useContext(ThemeContext)

    const handleClick = () => {
        setClick(!click)

    }

    const handleModal = () => {
        setShowModal(!showModal)
        if (showModal2 === true) {
            setShowModal2(!showModal2)
        }
    }

    const handleModal2 = () => {
        setShowModal2(!showModal2)
        if (showModal === true) {
            setShowModal(!showModal)
        }
    }

    const [session] = useSession();

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
                       {/*  <input type='checkbox' checked={title === 'dark'} onChange={toggleTheme}></input> */}
                        <Switch
                            checked={title === 'dark'}
                            onChange={toggleTheme}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                        />
                        <MenuIcon onClick={handleModal} />
                        {showModal ? <Aplicativos /> : null}
                        <ConfigIcon onClick={handleModal2} />
                        {showModal2 ? <Configuracao /> : null}

                        {/*  <Link href='/teste'><a><MenuIcon /></a></Link> */}
                        {/* <Link href='./teste'><a><ConfigIcon /></a></Link> */}
                        <LoginButton onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}><FaRegUserCircle /><span>FAZER LOGIN</span></LoginButton>
                        {/*  <button onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}>
                            Fazer Login
                        </button> */}
                    </Acesso>

                ) : (
                    <Logado>
                        <Link href='/teste'><a><CameraIcon /></a></Link>
                        <Link href='/teste'><a><MenuIcon /></a></Link>
                        <Link href='/teste'><a><BellIcon /></a></Link>
                        <Avatar
                            onClick={() => signOut({ callbackUrl: "/" })}
                            alt="user"
                            src={session?.user?.image}

                        />
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

/*export async function getStaticProps() {
    const data = Data
    return {
      props: {
        itens:  data
      },
    }
  }*/

export default Menu;