import React from 'react';
import CoinDetails from '../components/CoinDetailsHead';

export default function CoinPage({ match }) {
  const [coin, setCoin] = React.useState({
    image: {},
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

  console.log(coin.links.repos_url.github);

  return (
    <CoinDetails
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
      displayAvailableBlockchain={checkAvailable(coin.links.blockchain_site[0])}
      displayAvailableGithub={checkGitHub(coin.links.repos_url.github)}
      displayAvailableReddit={checkAvailable(coin.links.subreddit_url)}
      coingecko_rank={coin.coingecko_rank}
      market_cap_rank={coin.market_cap_rank}
    />
  );
}
