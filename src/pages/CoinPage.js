import React from 'react';
import styled from '@emotion/styled';
import { RadialChart, RadarChart, CircularGridLines } from 'react-vis';
import TradingViewWidget from 'react-tradingview-widget';
import CoinDetailsRefs from '../components/CoinDetailsRefs';
import CoinInformationTable from '../components/CoinDetails/CoinInformationTable';
import { Ticker, TickerElement } from '../components/CoinDetails/Ticker';

import { cutFloatValue } from '../lib/helpers';
import { TickerTableElement } from '../components/CoinDetails/TickerComponents';
import { CoinDetailsTableRow } from '../components/CoinDetails/CoinInformationTableComponents';

const testArray = [1, 2, 3, 4];

const InformationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  height: 450px;
  flex-wrap: wrap;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;

const PieChartHeading = styled.h2`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  text-align: center;
  font-weight: 400;
`;
const PieChartCointainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LiveChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin-top: 30px;
  height: 500px;
  flex-wrap: wrap;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function CoinPage({ match }) {
  const [coin, setCoin] = React.useState({
    image: {},
    market_cap_rank: 4,
    block_time_in_minutes: 3,
    coingecko_score: 10,
    developer_score: 10,
    community_score: 10,
    liquidity_score: 10,
    public_interest_score: 10,
    market_data: { ath: {}, atl: {} },
    categories: {},
    tickers: [],
    links: {
      homepage: [],
      blockchain_site: [],
      repos_url: {
        github: [],
      },
      official_forum_url: [],
    },
    last: {},
  });

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${match.params.id}`
        );
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const checkAvailable = (target) => {
    const data = target;
    if (data === '' || data === null) {
      return 'none';
    } else {
      return 'flex';
    }
  };

  const checkGitHub = (target) => {
    if (!target.length) {
      return 'none';
    } else {
      return 'flex';
    }
  };

  const checkIfNull = (target) => {
    if (target === null) {
      return '-';
    } else {
      return target;
    }
  };

  const AnimationData = {
    damping: 9,
    stiffness: 20,
  };

  const DOMAIN = [
    { name: 'CoingeckoScore', domain: [0, 100] },
    { name: 'DeveloperScore', domain: [0, 100] },
    { name: 'CommunityScore', domain: [0, 100] },
    { name: 'LiquidityScore', domain: [0, 100] },
    { name: 'PublicInterestScore', domain: [0, 100] },
  ];

  const data = [
    {
      DeveloperScore: coin.developer_score,
      CommunityScore: coin.community_score,
      CoingeckoScore: coin.coingecko_score,
      LiquidityScore: coin.liquidity_score,
      PublicInterestScore: coin.public_interest_score,
    },
  ];

  //console.log(coin.links.blockchain_site);

  return (
    <div>
      <InformationBar>
        <CoinDetailsRefs
          coinName={coin.name}
          coinImage={coin.image.small}
          coinNameID={coin.symbol}
          coinSite={coin.links.homepage[0]}
          coinForumSite={coin.links.official_forum_url[0]}
          coinBlockChainSite={coin.links.blockchain_site[0]}
          coinRedditSite={coin.links.subreddit_url}
          coinGithubSite={coin.links.repos_url.github[0]}
          displayAvailableWebsite={checkAvailable(coin.links.homepage[0])}
          displayAvailableForum={checkAvailable(
            coin.links.official_forum_url[0]
          )}
          displayAvailableBlockchain={checkAvailable(
            coin.links.blockchain_site[0]
          )}
          displayAvailableGithub={checkGitHub(coin.links.repos_url.github)}
          displayAvailableReddit={checkAvailable(coin.links.subreddit_url)}
        ></CoinDetailsRefs>
        <CoinInformationTable
          tableHeading={'Base Information'}
          rowName1={'CoinGecko Rank'}
          rowEntry1={coin.coingecko_rank}
          rowName2={'CoinMarket Rank'}
          rowEntry2={coin.market_cap_rank}
          rowName3={'Type'}
          rowEntry3={checkIfNull(coin.categories[0])}
          rowName4={'All Time High'}
          rowEntry4={checkIfNull('$' + coin.market_data.ath.usd)}
          rowName5={'All Time Low'}
          rowEntry5={'$' + coin.market_data.atl.usd}
          rowName6={'Circulating Supply'}
          rowEntry6={coin.market_data.circulating_supply}
          rowName7={'Total Supply'}
          rowEntry7={coin.market_data.total_supply}
        />
        <PieChartCointainer>
          <PieChartHeading>Radial View</PieChartHeading>
          <RadarChart
            data={data}
            domains={DOMAIN}
            style={{
              polygons: {
                fillOpacity: 0.4,
                strokeWidth: 2,
                strokeOpacity: 1,
              },
              axes: {
                text: { opacity: 0.0 },
              },
              labels: {
                textAnchor: 'middle',
                fontSize: 11,
                fontWeight: 400,
              },
            }}
            margin={{
              left: 55,
              top: 50,
              bottom: 20,
              right: 65,
            }}
            width={350}
            height={300}
            animation={true}
          >
            <CircularGridLines
              tickValues={[...new Array(10)].map((v, i) => i / 9 - 1)}
              style={{ opacity: 0.1 }}
              style={{ fill: 'none', stroke: 'black' }}
            />
          </RadarChart>
        </PieChartCointainer>
        <PieChartCointainer>
          <PieChartHeading>Community Prediction</PieChartHeading>
          <RadialChart
            data={[
              {
                angle: coin.sentiment_votes_up_percentage,
                label: 'Buy',
              },
              {
                angle: coin.sentiment_votes_down_percentage,
                label: 'Sell',
              },
            ]}
            width={300}
            height={300}
            animation={AnimationData}
            labelsRadiusMultiplier={0.6}
            labelsStyle={{
              fontSize: 14,
            }}
            showLabels
          />
        </PieChartCointainer>
      </InformationBar>
      <MiddleContainer>
        <LiveChartContainer>
          <PieChartHeading>Live Data</PieChartHeading>
          <TradingViewWidget
            symbol={coin.symbol + 'USD'}
            locale='en'
            width={900}
            height={400}
          />
        </LiveChartContainer>
        <Ticker
          heading={'Live Stock Price'}
          width={'30%'}
          tickerTableContent={coin.tickers.map((ticker) => {
            if (ticker.target === 'USD' || ticker.target === 'USDT') {
              console.log(ticker);
              return (
                <CoinDetailsTableRow key={ticker.id}>
                  <TickerTableElement>{ticker.market.name}</TickerTableElement>
                  <TickerTableElement>
                    {cutFloatValue(ticker.last)}
                  </TickerTableElement>
                  <TickerTableElement>{ticker.volume}</TickerTableElement>
                </CoinDetailsTableRow>
              );
            }
          })}
        />
      </MiddleContainer>
    </div>
  );
}
