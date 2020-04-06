import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CoinContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  width: 150px;
  background: white;
  border-radius: 25px;
  margin: 20px;
  color: inherit;

  text-decoration: none;

  transition: all 0.5s ease;

  &:hover {
    background: lightgray;
    color: ${(props) => props.theme.action};
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 379px) {
    width: 150px;
  }
`;

export const Seperator = styled.hr`
  width: 90%;
  margin: 5px 0 5px 0;
`;
export const CoinName = styled.h2`
  margin: 0;
  font-size: 0.75rem;
  color: ${(props) => props.theme.action};
`;

export const CoinHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  background-color: inherit;
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
  color: ${(props) => props.trendColor};
`;

export const CoinDetailPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  border-radius: 0 0 25px 25px;
  background-color: lightgrey;

  justify-content: center;
  align-items: center;
`;
