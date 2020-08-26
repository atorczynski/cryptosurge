import React from 'react';
import { NewsContainer } from './NewsComponents';
import {
  CoinDetailsHeading,
  Underline,
} from '../CoinDetails/CoinDetailsGlobalComponents';

export default function NewsComponent({ width, children }) {
  return (
    <NewsContainer width={width}>
      <CoinDetailsHeading>News</CoinDetailsHeading>
      <Underline />
      {children}
    </NewsContainer>
  );
}
