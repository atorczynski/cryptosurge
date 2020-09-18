import React from 'react';
import styled from '@emotion/styled';
import {
  CoinDetailsTable,
  CoinDetailsTableRow,
  CoinDetailsElement,
} from './CoinInformationTableComponents';
import { CoinDetailsHeading, Underline } from './CoinDetailsGlobalComponents';

const InformationContainer = styled.div``;

export default function CoinInformationTable({
  rowEntry1,
  rowEntry2,
  rowEntry3,
  rowEntry4,
  rowEntry5,
  rowEntry6,
  rowEntry7,
  rowName1,
  rowName2,
  rowName3,
  rowName4,
  rowName5,
  rowName6,
  rowName7,
  tableHeading,
}) {
  return (
    <InformationContainer>
      <CoinDetailsHeading>{tableHeading}</CoinDetailsHeading>
      <Underline />
      <CoinDetailsTable>
        <tbody>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName1}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry1}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName2}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry2}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName3}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry3}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName4}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry4}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName5}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry5}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName6}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry6}</CoinDetailsElement>
          </CoinDetailsTableRow>
          <CoinDetailsTableRow>
            <CoinDetailsElement>{rowName7}</CoinDetailsElement>
            <CoinDetailsElement>{rowEntry7}</CoinDetailsElement>
          </CoinDetailsTableRow>
        </tbody>
      </CoinDetailsTable>
    </InformationContainer>
  );
}
