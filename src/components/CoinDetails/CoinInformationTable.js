import React from 'react';
import {
  CoinDetailsTable,
  CoinDetailsTableRow,
  CoinDetailsElement,
  CoinDetailsHeading,
} from './CoinInformationTableComponents';

export default function CoinInformationTable({
  market_cap_rank,
  coingecko_rank,
  asset_platform_id,
  hashingAlgorithm,
  block_time_in_minutes,
  public_interest_score,
  liquidity_score,
  tableHeading,
}) {
  return (
    <div>
      <CoinDetailsHeading>{tableHeading}</CoinDetailsHeading>
      <CoinDetailsTable>
        <tbody>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Coinmarket Rank</CoinDetailsElement>
            <CoinDetailsElement>{market_cap_rank}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Coingecko Rank</CoinDetailsElement>
            <CoinDetailsElement>{coingecko_rank}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Asset Platform</CoinDetailsElement>
            <CoinDetailsElement>{asset_platform_id}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Algorithm</CoinDetailsElement>
            <CoinDetailsElement>{hashingAlgorithm}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Blocktime</CoinDetailsElement>
            <CoinDetailsElement>
              {block_time_in_minutes} Minutes
            </CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Public Interest Score</CoinDetailsElement>
            <CoinDetailsElement>{public_interest_score}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>Liquidity Score</CoinDetailsElement>
            <CoinDetailsElement>{liquidity_score}</CoinDetailsElement>
          </CoinDetailsTableRow>
        </tbody>
      </CoinDetailsTable>
    </div>
  );
}
