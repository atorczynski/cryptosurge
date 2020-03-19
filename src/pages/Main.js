import React, { useEffect } from 'react';
import Coin from '../components/Coin';

export default function Main() {
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

  const [coins, setCoins] = React.useState([]);
  return (
    <div>
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          coinName={coin.id}
          coinLogo={coin.image.thumb}
          change24h={coin.market_data.price_change_percentage_24h}
          change7d={coin.market_data.price_change_percentage_7d}
          change30d={coin.market_data.price_change_percentage_3d}
          currentPrice={coin.market_data.current_price.usd}
        />
      ))}
    </div>
  );
}
