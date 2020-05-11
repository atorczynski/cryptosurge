import React from 'react';

import {
  TickerContainer,
  TickerTable,
  TickerTableElement,
} from './TickerComponents';
import { CoinDetailsHeading } from './CoinDetailsGlobalComponents';

export function Ticker({
  heading,
  width,
  height,
  tickerTableContent,
  display,
}) {
  return (
    <TickerContainer height={height} width={width} display={display}>
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
      <TickerTableElement>{tableElement1}</TickerTableElement>
      <TickerTableElement>{tableElement2}</TickerTableElement>
      <TickerTableElement>{tableElement3}</TickerTableElement>
    </TickerTableElement>
  );
}
