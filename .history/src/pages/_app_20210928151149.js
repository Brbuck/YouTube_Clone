import React, {useState} from 'react'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
//import theme from '../styles/theme'
import Layout from '../components/Layout'
import { AuthProvider } from '../context/auth'
import { Provider } from 'next-auth/client'
import Header from '../components/Header'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'


const MyApp = ({ Component, pageProps}) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <AuthProvider>
      <ThemeProvider  theme={theme}>
        <Layout>
          <Header toggleTheme={toggleTheme} />
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
            <GlobalStyle />
          </Provider>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
