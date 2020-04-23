import styled from '@emotion/styled';

export const CoinDetailsTableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #aaaaaa;
  }
`;

export const CoinDetailsElement = styled.th`
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;
export const CoinDetailsElement2 = styled.td`
  color: ${(props) => props.theme.text};
`;

export const CoinDetailsTable = styled.table`
  width: 325px;
  height: 300px;
  text-align: left;

  border-collapse: collapse;
`;

export const CoinDetailsHeading = styled.h2`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  text-align: center;
  font-weight: 400;
`;
