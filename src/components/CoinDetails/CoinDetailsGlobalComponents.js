import styled from '@emotion/styled';

export const CoinDetailsHeading = styled.h2`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  text-align: center;
  font-weight: 400;
`;

export const AddBanner = styled.div`
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
  background-color: #fff;
  margin-top: 20px;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
`;
