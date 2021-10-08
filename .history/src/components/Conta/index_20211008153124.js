import Link from 'next/link'

import { AccountIcon, Container, Box, BoxAccount, BoardIcon, ChannelIcon, ConfigIcon, DataIcon, FeedIcon, Helpcon, LanguageIcon, LocalIcon, MoonIcon, PurchasesIcon, StudioIcon, SignOutIcon } from './styles';


function Conta() {
    return (
        <Container>
            <BoxAccount>
                <div>
                    <span>Antonio Ribeiro' Ribeiro</span>
                    <Link href='/teste'><a>Gerenciar sua Conta do Google</a></Link>
                </div>
            </BoxAccount>
            <Box>
                <Link href='/teste'><a><ChannelIcon /> Seu Canal</a></Link>
                <Link href='/teste'><a><PurchasesIcon /> Compras e Assinaturas</a></Link>
                <Link href='/teste'><a><StudioIcon /> YouTube Studio</a></Link>
                <Link href='/teste'><a><AccountIcon /> Alterar Conta</a></Link>
                <Link href='/teste'><a><SignOutIcon /> Sair</a></Link>
            </Box>
            <Box>
                <Link href='/teste'><a><MoonIcon /> Aparência: Tema do Dispositivo</a></Link>
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