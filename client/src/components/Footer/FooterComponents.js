import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 125px;
  width: 100%;
  background-color: #333333;
  margin-top: 50px;
  color: white;
  text-align: center;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 20px;
`;

export const HeartEmoji = styled.span`
  font-size: 25px;
  margin: 0;
  color: red;
  margin-right: 5px;
`;

export const FooterText = styled.p`
  margin-right: 5px;
  font-style: italic;
  font-weight: 700;
`;
export const FooterLinkExternal = styled.a`
  text-decoration: none;
  color: red;
  margin-right: 5px;
  font-weight: 700;
  text-transform: uppercase;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  color: red;
  margin-right: 5px;
  font-weight: 700;
  text-transform: uppercase;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
