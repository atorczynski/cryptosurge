import styled from '@emotion/styled';

export const TickerContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  margin-top: 30px;
  background-color: #e1e2e2;
  border-radius: 10px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  overflow: auto;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;

export const TickerTable = styled.table`
  text-align: center;
  border-collapse: collapse;
`;

export const TickerTableElement = styled.td`
  border-left: 0px;
  border-right: 0px;
  height: 40px;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  font-size: 12px;
  border-spacing: 0px;
`;
