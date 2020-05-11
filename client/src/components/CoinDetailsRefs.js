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
import Skeleton from 'react-loading-skeleton';

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
        <CoinPrice currentChange={currentChange}>
          {!currentPrice ? '' : '$'}
          {currentPrice || <Skeleton width={40} />}
        </CoinPrice>
        <CoinName>{coinName || <Skeleton width={100} />}</CoinName>
        <CoinNameID>{coinNameID || <Skeleton width={40} />}</CoinNameID>
        {!coinImage ? (
          <Skeleton circle={true} width={90} height={90} />
        ) : (
          <CoinImage src={coinImage} />
        )}
        <CoinInformationContainer>
          {!coinSite ? (
            <Skeleton width={70} count={5} />
          ) : (
            <div>
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
            </div>
          )}
        </CoinInformationContainer>
      </CoinNameContainer>
    </CoinHeaderContainer>
  );
}
