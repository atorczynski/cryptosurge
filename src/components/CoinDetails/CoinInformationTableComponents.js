import styled from '@emotion/styled';

export const CoinDetailsTableRow = styled.tr`
  :nth-child(even) {
    background-color: #101010;
  }
`;

export const CoinDetailsElement = styled.th`
  color: ${(props) => props.theme.text};
`;
export const CoinDetailsElement2 = styled.td`
  color: ${(props) => props.theme.text};
`;

export const CoinDetailsTable = styled.table`
  width: 100%;
  height: 300px;
  border-collapse: collapse;
`;
