import styled from '@emotion/styled';

export const NavbarElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: black;
  margin: 0px;
`;

export const HeadingElement = styled.h1`
  font-size: 0.95rem;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.action};
  }
`;
