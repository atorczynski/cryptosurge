import styled from '@emotion/styled';

export const CoinHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  margin-top: 40px;
`;

export const CoinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 30px;
  border-right: solid 2px white;
`;

export const CoinInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: inherit;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

export const CoinInformationLink = styled.a`
  text-decoration: none;
  transition: all 0.5s ease;
  color: white;

  &:hover {
    color: ${(props) => props.theme.action};
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CoinName = styled.h1`
  color: ${(props) => props.theme.text};
  margin: 0px;
`;

export const CoinNameID = styled.h3`
  margin: 0px;
  font-size: 18px;
  color: ${(props) => props.theme.action};
`;

export const CoinImage = styled.img`
  margin-top: 20px;
  width: 50px;
`;
