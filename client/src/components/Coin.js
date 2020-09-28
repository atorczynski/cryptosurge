import React from 'react';
import {
  CoinContainer,
  CoinName,
  CoinLogo,
  CoinDetailsContainer,
  CoinDetailText,
  CoinDetailElement,
  CoinDetailCall,
  CoinDetailPriceContainer,
  Seperator,
  CoinHeader,
  CoinContainerLink,
} from './CoinComponents';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from '@emotion/styled';

const FavIcon = styled(FavoriteBorderIcon)`
  color: #7b6dcc;
  margin: 0;
`;

const ActiveFavIcon = styled(FavoriteIcon)`
  color: #7b6dcc;
  margin: 0;
`;

export default function Coin({
  coinLogo,
  coinName,
  change30d,
  change24h,
  change7d,
  currentPrice,
  link,
  trendColor24h,
  trendColor7d,
  trendColor30d,
  onClick,
  isFavoriteCoin,
}) {
  const checkLink = (target) => {
    if (link === 'binancecoin') {
      return 'binance-coin';
    } else {
      return target;
    }
  };

  return (
    <CoinContainer>
      <CoinContainerLink to={`/coins/${checkLink(link)}`}>
        <CoinHeader>
          <CoinLogo src={coinLogo} />
          <CoinName>{coinName}</CoinName>
        </CoinHeader>
        <Seperator />
        <CoinDetailsContainer>
          <CoinDetailElement>
            <CoinDetailText>Change 24h</CoinDetailText>
            <CoinDetailCall trendColor={trendColor24h}>
              {change24h + ' %'}
            </CoinDetailCall>
          </CoinDetailElement>
          <CoinDetailElement>
            <CoinDetailText>Change 7d</CoinDetailText>
            <CoinDetailCall trendColor={trendColor7d}>
              {change7d + ' %'}
            </CoinDetailCall>
          </CoinDetailElement>
          <CoinDetailElement>
            <CoinDetailText>Change 30d</CoinDetailText>
            <CoinDetailCall trendColor={trendColor30d}>
              {change30d + ' %'}
            </CoinDetailCall>
          </CoinDetailElement>
        </CoinDetailsContainer>
        <CoinDetailPriceContainer>
          <CoinDetailCall>${currentPrice}</CoinDetailCall>
        </CoinDetailPriceContainer>
      </CoinContainerLink>
      {isFavoriteCoin ? (
        <ActiveFavIcon onClick={onClick} />
      ) : (
        <FavIcon onClick={onClick} />
      )}
    </CoinContainer>
  );
}
