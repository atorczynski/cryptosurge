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
  Seperator
} from './CoinComponents';

export default function Coin({
  coinName,
  coinLogo,
  CoinDetailDescription,
  CoinDetailChange,
  change1h,
  change24h,
  change7d
}) {
  return (
    <CoinContainer>
      <CoinLogo src={coinLogo} />
      <CoinName>{coinName}</CoinName>
      <Seperator />
      <CoinDetailsContainer>
        <CoinDetailElement>
          <CoinDetailText>Change 1h</CoinDetailText>
          <CoinDetailCall>{change1h}</CoinDetailCall>
        </CoinDetailElement>
        <CoinDetailElement>
          <CoinDetailText>Change 24h</CoinDetailText>
          <CoinDetailCall>{change24h}</CoinDetailCall>
        </CoinDetailElement>
        <CoinDetailElement>
          <CoinDetailText>Change 7d</CoinDetailText>
          <CoinDetailCall>{change7d}</CoinDetailCall>
        </CoinDetailElement>
      </CoinDetailsContainer>
      <CoinDetailPriceContainer>
        <CoinDetailCall>$9,122.22</CoinDetailCall>
      </CoinDetailPriceContainer>
    </CoinContainer>
  );
}
