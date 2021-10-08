import {useContext} from 'react';
import Link from 'next/link';
import {ThemeContext} from 'styled-components'

import { Container, Theme } from './styles';

function Tema({toggleTheme, handleThema}) {
    const { title } = useContext(ThemeContext)
    return (
        <Container>
            <Link href='teste'><a>Aparência</a></Link>
            <p>Esta configuração será usada apenas neste navegador</p>
            <Theme>
                <input type='checkbox'  />
                <label>Usar o Tema do Disposotivo</label>
            </Theme>
            <Theme>
                <input type='checkbox' checked={title === 'light'} onClick={handleThema} onChange={toggleTheme} />
                <label>Tema claro</label>
            </Theme>
            <Theme>
                <input type='checkbox' checked={title === 'dark'} onChange={toggleTheme} onClick={handleThema} />
                <label>Tema escuro</label>
            </Theme>  
        </Container>
    );
}

export default Tema;