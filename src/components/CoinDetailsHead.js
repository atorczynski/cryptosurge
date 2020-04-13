import React from 'react';
import {
  CoinHeaderContainer,
  CoinNameContainer,
  CoinName,
  CoinImage,
  CoinNameID,
  CoinInformationContainer,
  CoinInformationLink,
  CoinDetailsInfoContainer,
  CoinDetailsBaseInformation,
  CoinDetailsHeading,
  CoinDetailsHeadingContainer,
} from './CoinDetailsHeadComponents';
import CoinInformationTable from './CoinDetails/CoinInformationTable';

export default function CoinDetailsHead({
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
  coingecko_rank,
  market_cap_rank,
  asset_platform_id,
}) {
  return (
    <CoinHeaderContainer>
      <CoinNameContainer>
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
      <CoinDetailsInfoContainer>
        <CoinDetailsBaseInformation>
          <CoinDetailsHeadingContainer>
            <CoinDetailsHeading>Base Information</CoinDetailsHeading>
          </CoinDetailsHeadingContainer>
          <CoinInformationTable
            coingecko_rank={coingecko_rank}
            market_cap_rank={market_cap_rank}
            asset_platform_id={asset_platform_id}
            
          />
        </CoinDetailsBaseInformation>
      </CoinDetailsInfoContainer>
    </CoinHeaderContainer>
  );
}
