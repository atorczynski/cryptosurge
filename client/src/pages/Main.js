import React, { useEffect } from 'react';
import Coin from '../components/Coin';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';

import { cutFloatValue } from '../lib/helpers';
import LoadingCoinRender from '../components/LoadingCoinRender';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 379px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 379px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  background-color: lightgrey;
  overflow: hidden;
  margin-top: 20px;
`;

const JumbotronHeading = styled.h2`
  position: absolute;
  font-size: 30px;
`;
const JumbotronCaption = styled.h4`
  opacity: 0.8;
  position: absolute;
  top: 400px;
`;

const TrendingCoinsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  width: 25%;
  flex-wrap: wrap;
`;

export default function Main() {
  const [coins, setCoins] = React.useState([]);
  const [trendingCoins, setTrendingCoins] = React.useState([]);
  const [isLoading, setLoading] = React.useState();

  const createTrendColor = (currentChange) => {
    if (currentChange.toString().charAt(0) === '-') {
      return '#FF4136';
    } else {
      return '#008000';
    }
  };

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/`);
      const data = await response.json();
      setCoins(data);

      const trendingResponse = await fetch(
        'https://api.coingecko.com/api/v3/search/trending'
      );
      const trendingData = await trendingResponse.json();
      setTrendingCoins(trendingData.coins);
      console.log(trendingData.coins);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Jumbotron>
        <JumbotronHeading>
          Simple Lightweight Cryptocurrency Hub
        </JumbotronHeading>
        <JumbotronCaption>
          View All relevant Data in one Place.
        </JumbotronCaption>
        <Particles
          width={1300}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </Jumbotron>
      {isLoading ? (
        <LoadingCoinRender />
      ) : (
        <CoinContainer>
          {coins.map((coin) => (
            <Coin
              trendColor24h={createTrendColor(
                coin.market_data.price_change_percentage_24h
              )}
              trendColor7d={createTrendColor(
                coin.market_data.price_change_percentage_7d
              )}
              trendColor30d={createTrendColor(
                coin.market_data.price_change_percentage_30d
              )}
              link={coin.id}
              key={coin.id}
              coinName={coin.id}
              coinLogo={coin.image.thumb}
              change24h={cutFloatValue(
                coin.market_data.price_change_percentage_24h
              )}
              change7d={cutFloatValue(
                coin.market_data.price_change_percentage_7d
              )}
              change30d={cutFloatValue(
                coin.market_data.price_change_percentage_30d
              )}
              currentPrice={coin.market_data.current_price.usd}
            />
          ))}
        </CoinContainer>
      )}
      {/* {isLoading ? (
        ''
      ) : (
        <TrendingCoinsContainer>
          {trendingCoins.map((trendingCoin) => (
            <Coin
              coinName={trendingCoin.item.name}
              coinLogo={trendingCoin.item.thumb}
            />
          ))}
        </TrendingCoinsContainer>
      )} */}
    </Container>
  );
}
