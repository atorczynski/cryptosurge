import styled from '@emotion/styled';

export const HeadingElement = styled.a`
  text-decoration: none;
  color: #fff;

  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.action};
  }
`;
