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
} from './CoinComponents';

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
}) {
  return (
    <CoinContainer to={`/coins/${link}`}>
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
    </CoinContainer>
  );
}
