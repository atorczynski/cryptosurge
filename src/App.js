import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = React.useState([]);
  async function getData() {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/`);
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(coins);
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <NavBar />
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          coinName={coin.id}
          coinLogo={coin.image.thumb}
          change24h={coin.market_data.price_change_percentage_24h}
          change7d={coin.market_data.price_change_percentage_7d}
          change30d={coin.market_data.price_change_percentage_30d}
          currentPrice={coin.market_data.current_price.usd}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
