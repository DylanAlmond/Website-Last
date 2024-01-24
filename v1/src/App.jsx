import HomePage from './components/HomePage/HomePage.lazy'
import PostPage from './components/PostPage/PostPage.lazy'
import WpPage from './components/wpPage/wpPage.lazy'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { base } from './styles/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { HashRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";
import Header from './components/Header/Header.lazy'
import Footer from './components/Footer/Footer.lazy'

library.add(faBars, faXmark, faLinkedin, faInstagram, faTwitter, faYoutube, faFacebook)

// const theme = { ...base, color: light };
const theme = base;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />

              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/work/:slug" element={<PostPage />} />
                <Route path="/:slug" element={<WpPage />} />
              </Routes>

            <Footer />
          </ThemeProvider>
        </HashRouter>
      </ApolloProvider>
    </>
  )
}

export default App
