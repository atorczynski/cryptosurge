import React from 'react';
import {
  CoinHeaderContainer,
  CoinNameContainer,
  CoinName,
  CoinImage,
  CoinNameID,
  CoinInformationContainer,
  CoinInformationLink,
} from './CoinDetailsComponents';

export default function CoinDetails({
  coinName,
  coinImage,
  coinNameID,
  coinSite,
  coinForumSite,
  coinBlockChainSite,
  coinRedditSite,
  coinGithubSite,
}) {
  return (
    <CoinHeaderContainer>
      <CoinNameContainer>
        <CoinName>{coinName}</CoinName>
        <CoinNameID>({coinNameID})</CoinNameID>
        <CoinImage src={coinImage} />
        <CoinInformationContainer>
          <CoinInformationLink href={coinSite}>Website</CoinInformationLink>
          <CoinInformationLink href={coinForumSite}>Forum</CoinInformationLink>
          <CoinInformationLink href={coinBlockChainSite}>
            Blockchain Information
          </CoinInformationLink>
          <CoinInformationLink href={coinRedditSite}>
            Reddit
          </CoinInformationLink>
          <CoinInformationLink href={coinGithubSite}>
            GitHub Repository
          </CoinInformationLink>
        </CoinInformationContainer>
      </CoinNameContainer>
    </CoinHeaderContainer>
  );
}
