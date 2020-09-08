import styled from '@emotion/styled';

export const CoinDetailsTableRow = styled.tr`
  display: table-row;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  transition: all 0.25s ease-in;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const CoinDetailsElement = styled.th`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  @media (max-width: 379px) {
    padding-left: 20px;
  }
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
