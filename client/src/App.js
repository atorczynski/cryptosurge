import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import AppBar from './components/AppBar';
import Main from './pages/Main';
import CoinPage from './pages/CoinPage';
import { ContentContainer } from './components/BodyHelpers';

import CookieConsent from 'react-cookie-consent';
import Footer from './components/Footer/Footer';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  console.log(windowSize);
  React.useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

function App() {
  const [windowSize] = React.useState(useWindowSize().width);
  console.log(windowSize);
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <AppBar />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Router>
        <ContentContainer paddingTop={windowSize < '700' ? '50px' : '80px'}>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path={'/coins/:id'} component={CoinPage} />
            <Route path={'/hello'}>
              <Main />
            </Route>
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
