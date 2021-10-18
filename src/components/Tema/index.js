import {useContext} from 'react';
import {ThemeContext} from 'styled-components'

import {ArrowLeft, Container, Theme } from './styles';

function Tema({toggleTheme,  togleTheme}) {
    const { title } = useContext(ThemeContext)
    return (
        <Container>
            <span><ArrowLeft onClick={togleTheme}/>Aparência</span>
            <p>Esta configuração será usada apenas neste navegador</p>
            <Theme>
                <input type='checkbox'/>
                <label>Usar o Tema do Disposotivo</label>
            </Theme>
            <Theme>
                <input type='checkbox' checked={title === 'light'} onClick={togleTheme} onChange={toggleTheme} />
                <label>Tema claro</label>
            </Theme>
            <Theme>
                <input type='checkbox' checked={title === 'dark'} onClick={togleTheme} onChange={toggleTheme}  />
                <label>Tema escuro</label>
            </Theme>  
        </Container>
    );
}

export default Tema;
