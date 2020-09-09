import styled from '@emotion/styled';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 1100px;
  background-color: #e1e2e2;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
  margin-top: 30px;
  overflow: unset;
  overflow-x: hidden;
  border-radius: 10px;
`;

export const NewsRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 150px;
  margin-left: 0px;
  cursor: pointer;
  transition: background-color 0.25s linear;

  :hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 379px) {
    height: 250px;
    align-content: center;
    justify-content: center;
  }
`;

export const NewsHeading = styled.h4`
  width: 100%;
  margin-left: 10px;

  :hover {
    text-decoration: underline;
  }
  @media (max-width: 379px) {
    width: 80%;
  }
`;

export const NewsCaption = styled.p`
  margin-left: 10px;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const NewsCaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NewsImage = styled.img`
  display: ${(props) => props.imgDisplay};
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-left: 10px;
`;
