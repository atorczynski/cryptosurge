import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import AppBar from './components/AppBar';
import Main from './pages/Main';
import CoinPage from './pages/CoinPage';
import { ContentContainer } from './components/BodyHelpers';

import Footer from './components/Footer/Footer';
import Legal from './pages/Legal';
import CookieConsent from 'react-cookie-consent';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]);
  return windowSize;
}

function App() {
  const [windowSize] = React.useState(useWindowSize().width);
  const [cookieConsent, setCookieConsent] = React.useState(
    localStorage.getItem('cookieConsent')
  );

  React.useEffect(() => {}, []);

  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <AppBar />
      <Router>
        <ContentContainer paddingTop={windowSize < '700' ? '50px' : '80px'}>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path={'/coins/:id'} component={CoinPage} />
            <Route path={'/legal'}>
              <Legal />
            </Route>
          </Switch>
        </ContentContainer>
        <Footer />
        {cookieConsent ? (
          ''
        ) : (
          <CookieConsent
            cookieName={'cookieConsent'}
            onAccept={() => {
              localStorage.setItem('cookieConsent', true);
              setCookieConsent(true);
            }}
          >
            We use cookies to offer you a better browsing experience, analyze
            site traffic, personalize content, and serve targeted
            advertisements. Read about how we use cookies and how you can
            control them on our{' '}
            <a href={'http://localhost:3000/legal'}>Privacy Policy</a>. If you
            continue to use this site, you consent to our use of cookies.
          </CookieConsent>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
