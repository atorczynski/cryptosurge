import React from 'react';
import Coin from '../components/Coin';

export default {
  title: 'CoinView'
};

export function CoinView() {
  return (
    <Coin
      coinName={'BTC'}
      coinLogo={
        'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579'
      }
      CoinDetailDescription={'Change 24h'}
      change1h={'+ 2%'}
      change24h={'+ 8%'}
      change7d={'+ 50%'}
    />
  );
}
