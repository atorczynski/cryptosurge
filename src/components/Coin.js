import React from 'react';
import styled from '@emotion/styled';
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
  CoinHeader
} from './CoinComponents';

export default function Coin({
  coinLogo,
  coinName,
  change30d,
  change24h,
  change7d,
  currentPrice,
  link
}) {
  return (
    <CoinContainer to={`/${link}`}>
      <CoinHeader>
        <CoinLogo src={coinLogo} />
        <CoinName>{coinName}</CoinName>
      </CoinHeader>
      <Seperator />
      <CoinDetailsContainer>
        <CoinDetailElement>
          <CoinDetailText>Change 24h</CoinDetailText>
          <CoinDetailCall>{change24h}</CoinDetailCall>
        </CoinDetailElement>
        <CoinDetailElement>
          <CoinDetailText>Change 7d</CoinDetailText>
          <CoinDetailCall>{change7d}</CoinDetailCall>
        </CoinDetailElement>
        <CoinDetailElement>
          <CoinDetailText>Change 30d</CoinDetailText>
          <CoinDetailCall>{change30d}</CoinDetailCall>
        </CoinDetailElement>
      </CoinDetailsContainer>
      <CoinDetailPriceContainer>
        <CoinDetailCall>${currentPrice}</CoinDetailCall>
      </CoinDetailPriceContainer>
    </CoinContainer>
  );
}
