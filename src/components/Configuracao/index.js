import Link from 'next/link'
import { Container, Box, ConfigIcon, DataIcon, FeedIcon, Helpcon, LanguageIcon, LocalIcon, MoonIcon, BoardIcon } from './styles';

function Configuracao({ togleTheme }) {

    return (
        <Container>
            <Box>
                <button onClick={togleTheme}><MoonIcon /> Aparência: Tema do Dispositivo</button>
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

export default Configuracao;
