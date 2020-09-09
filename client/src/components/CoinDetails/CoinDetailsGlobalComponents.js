import styled from '@emotion/styled';

export const CoinDetailsHeading = styled.h2`
  color: ${(props) => props.theme.text};
  position: sticky;
  height: 20px;
  text-align: center;
  font-weight: 300;
`;

export const Underline = styled.hr`
  width: 100%;
  opacity: 50%;
  text-align: left;
  margin-left: 0;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AdBanner = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  border: 1px black solid;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const InfoContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #e1e2e2;
  margin-top: 20px;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;
