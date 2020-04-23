import React from 'react';
import styled from '@emotion/styled';
import { RadialChart, RadarChart, CircularGridLines } from 'react-vis';
import CoinDetailsRefs from '../components/CoinDetailsRefs';
import CoinInformationTable from '../components/CoinDetails/CoinInformationTable';

import { cutFloatValue } from '../lib/helpers';

const InformationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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

export default function CoinPage({ match }) {
  const [coin, setCoin] = React.useState({
    sentiment_votes_up_percentage: {},
    image: {},
    market_data: { ath: {}, atl: {} },
    categories: {},
    links: {
      homepage: [],
      blockchain_site: [],
      repos_url: {
        github: [],
      },
      official_forum_url: [],
    },
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
    { name: 'asdasd', domain: [0, 10] },
    { name: 'explosions', domain: [0, 10] },
    { name: 'wow', domain: [0, 10] },
  ];

  console.log(cutFloatValue(coin.community_score));

  return (
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
        displayAvailableForum={checkAvailable(coin.links.official_forum_url[0])}
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
          animation
          data={[
            {
              explosions: 10,
              wow: 10,
              asdasd: 10,
            },
          ]}
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
            left: 40,
            top: 40,
            bottom: 20,
            right: 20,
          }}
          width={300}
          height={300}
          animation={AnimationData}
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
  );
}
