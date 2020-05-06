import React from 'react';
import styled from '@emotion/styled';

import {
  TickerContainer,
  TickerTable,
  TickerTableElement,
} from './TickerComponents';
import { CoinDetailsHeading } from './CoinDetailsGlobalComponents';

export function Ticker({ heading, width, height, tickerTableContent }) {
  return (
    <TickerContainer height={height} width={width}>
      <CoinDetailsHeading>{heading}</CoinDetailsHeading>
      <TickerTable>
        <tbody>
          <tr>
            <th>Market</th>
            <th>Last Price</th>
            <th>Volume</th>
          </tr>
          {tickerTableContent}
        </tbody>
      </TickerTable>
    </TickerContainer>
  );
}

export function TickerElement(tableElement1, tableElement2, tableElement3) {
  return (
    <TickerTableElement>
      <td>{tableElement1}</td>
      <td>{tableElement2}</td>
      <td>{tableElement3}</td>
    </TickerTableElement>
  );
}
