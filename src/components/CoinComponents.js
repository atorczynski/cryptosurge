import styled from '@emotion/styled';

export const Seperator = styled.hr`
  width: 90%;
  margin-top: 0;
`;

export const CoinListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 180px;
  width: 125px;
  background-color: white;
  margin: 20px;
  border-radius: 25px;
`;

export const CoinName = styled.h2`
  margin-top: 3px;
  font-size: 0.75rem;
  color: ${(props) => props.theme.action};
`;

export const CoinLogo = styled.img`
  margin-top: 5px;
`;

export const CoinDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const CoinDetailElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CoinDetailText = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;
export const CoinDetailCall = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const CoinDetailPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  border-radius: 0 0 25px 25px;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;
