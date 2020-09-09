import styled from '@emotion/styled';

export const CoinHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin-top: 40px;
`;

export const CoinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 30px;
`;

export const CoinDetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  margin-left: 20px;
`;

export const CoinDetailsBaseInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 325px;
`;

export const CoinDetailsHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: ${(props) => props.display};
  text-decoration: none;
  transition: all 0.5s ease;
  color: ${(props) => props.theme.text};

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

export const CoinPrice = styled.h2`
  color: ${(props) => props.currentChange};
`;
