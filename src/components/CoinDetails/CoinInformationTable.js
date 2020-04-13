import React from 'react';
import {
  CoinDetailsTable,
  CoinDetailsTableRow,
  CoinDetailsElement2,
} from './CoinInformationTableComponents';

export default function CoinInformationTable({
  market_cap_rank,
  coingecko_rank,
}) {
  return (
    <CoinDetailsTable>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coinmarket Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{market_cap_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coingecko Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{coingecko_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coinmarket Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{market_cap_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coingecko Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{coingecko_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coinmarket Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{market_cap_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coingecko Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{coingecko_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
      <CoinDetailsTableRow>
        <CoinDetailsElement2>Coinmarket Rank</CoinDetailsElement2>
        <CoinDetailsElement2>{market_cap_rank}</CoinDetailsElement2>
      </CoinDetailsTableRow>
    </CoinDetailsTable>
  );
}
