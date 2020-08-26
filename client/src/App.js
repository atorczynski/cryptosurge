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
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
