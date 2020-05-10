import React from 'react';
import {
  CoinHeaderContainer,
  CoinNameContainer,
  CoinName,
  CoinImage,
  CoinNameID,
  CoinInformationContainer,
  CoinInformationLink,
  CoinPrice,
} from './CoinDetailsRefsComponents';

export default function CoinDetailsRefs({
  coinName,
  coinImage,
  coinNameID,
  coinSite,
  coinForumSite,
  coinBlockChainSite,
  coinRedditSite,
  coinGithubSite,
  displayAvailableWebsite,
  displayAvailableForum,
  displayAvailableBlockchain,
  displayAvailableReddit,
  displayAvailableGithub,
  currentPrice,
  currentChange,
}) {
  return (
    <CoinHeaderContainer>
      <CoinNameContainer>
        <CoinPrice currentChange={currentChange}>${currentPrice}</CoinPrice>
        <CoinName>{coinName}</CoinName>
        <CoinNameID>({coinNameID})</CoinNameID>
        <CoinImage src={coinImage} />
        <CoinInformationContainer>
          <CoinInformationLink
            display={displayAvailableWebsite}
            href={coinSite}
          >
            Website
          </CoinInformationLink>
          <CoinInformationLink
            display={displayAvailableForum}
            href={coinForumSite}
          >
            Forum
          </CoinInformationLink>
          <CoinInformationLink
            display={displayAvailableBlockchain}
            href={coinBlockChainSite}
          >
            Blockchain Information
          </CoinInformationLink>
          <CoinInformationLink
            display={displayAvailableReddit}
            href={coinRedditSite}
          >
            Reddit
          </CoinInformationLink>
          <CoinInformationLink
            display={displayAvailableGithub}
            href={coinGithubSite}
          >
            GitHub Repository
          </CoinInformationLink>
        </CoinInformationContainer>
      </CoinNameContainer>
    </CoinHeaderContainer>
  );
}
