import styled from '@emotion/styled';

export const TickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;

export const TickerTable = styled.table`
  text-align: center;
  border-collapse: collapse;
`;

export const TickerTableElement = styled.td``;
