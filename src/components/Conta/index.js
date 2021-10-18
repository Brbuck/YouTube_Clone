import Link from 'next/link'
import { signOut, useSession } from "next-auth/client";


import { AccountIcon, Container, Box, BoxAccount, BoardIcon, ChannelIcon, ConfigIcon, DataIcon, FeedIcon, Helpcon, LanguageIcon, LogOutButton, LocalIcon, MoonIcon, PurchasesIcon, StudioIcon, SignOutIcon, ThemeButton } from './styles';


function Conta({togleTheme}) {
    const [session] = useSession();
  
    return (
        <Container>
            <BoxAccount>
                <img src={session?.user?.image} alt='user' />
                <div>
                    {session && <span>{session.user.name}!</span>}
                    <Link href='/teste'><a>Gerenciar sua Conta do Google</a></Link>
                </div>
            </BoxAccount>
            <Box>
                <Link href='/teste'><a><ChannelIcon /> Seu Canal</a></Link>
                <Link href='/teste'><a><PurchasesIcon /> Compras e Assinaturas</a></Link>
                <Link href='/teste'><a><StudioIcon /> YouTube Studio</a></Link>
                <Link href='/teste'><a><AccountIcon /> Alterar Conta</a></Link>
                <LogOutButton onClick={() => signOut({ callbackUrl: "/" })}><a><SignOutIcon /> Sair</a></LogOutButton>
            </Box>
            <Box>
                <ThemeButton onClick={togleTheme}><MoonIcon /> Aparência: Tema do Dispositivo</ThemeButton>
                <Link href='/teste'><a><LanguageIcon /> idioma: português</a></Link>
                <Link href='/teste'><a><LocalIcon /> local: Brasil</a></Link>
                <Link href='/teste'><a><ConfigIcon /> configurações</a></Link>
                <Link href='/teste'><a><DataIcon /> seus dados no youtube</a></Link>
                <Link href='/teste'><a><Helpcon /> ajuda</a></Link>
                <Link href='/teste'><a><FeedIcon /> enviar feedback</a></Link>
                <Link href='/teste'><a><BoardIcon /> atalhos do teclado</a></Link>
            </Box>
            <Box>
                <Link href='/teste'><a>modo restrito: desativado</a></Link>
            </Box>
        </Container>
    );
}

export default Conta;
