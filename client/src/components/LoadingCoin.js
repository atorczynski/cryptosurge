import React from 'react';
import {
  CoinContainer,
  CoinHeader,
  CoinDetailsContainer,
  CoinDetailElement,
  CoinDetailPriceContainer,
} from './CoinComponents';
import Skeleton from 'react-loading-skeleton';

export default function LoadingCoin() {
  return (
    <CoinContainer>
      <CoinHeader>
        <Skeleton width={30} height={30} circle={true} />
        <Skeleton width={60} />
      </CoinHeader>
      <CoinDetailsContainer>
        <CoinDetailElement>
          <Skeleton width={125} />
        </CoinDetailElement>
        <CoinDetailElement>
          <Skeleton width={115} />
        </CoinDetailElement>
        <CoinDetailElement>
          <Skeleton width={120} />
        </CoinDetailElement>
      </CoinDetailsContainer>
      <CoinDetailPriceContainer>
        <Skeleton width={65} />
      </CoinDetailPriceContainer>
    </CoinContainer>
  );
}
