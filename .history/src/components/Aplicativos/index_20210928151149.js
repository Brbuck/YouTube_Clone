import Link from 'next/link'
import { Container, Box } from './styles';

import { TvIcon } from './styles';
import { YouTubeIcon } from './styles';
import {MusicYtIcon} from './styles';
import {KidstIcon} from './styles'

function Aplicativos() {
    return (
        <Container>
            <Box>
                <Link href='/teste'><a><TvIcon/> YouTube TV</a></Link>
            </Box>
            <Box>
                <Link href='/music'><a><MusicYtIcon/>YouTube Music</a></Link>
                <Link href='/music'><a><KidstIcon/>YouTube Kids</a></Link>
            </Box>
            <Box>
                <Link href='/escola'><a><YouTubeIcon/>Escola de Criadores de Conteúdo</a></Link>
                <Link href='/artistas'><a><YouTubeIcon/>YouTube para Artistas</a></Link>
            </Box>
        </Container>
    );
}

export default Aplicativos;