import styled from '@emotion/styled';

export const NavbarElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: #111111;
  margin: 0px;
`;

export const HeadingElement = styled.a`
  font-size: 0.95rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-left: 12rem;
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.action};
  }
`;
