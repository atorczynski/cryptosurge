import styled from '@emotion/styled';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 1100px;
  background-color: #e1e2e2;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.75);
  margin-top: 30px;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 10px;

  @media (max-width: 379px) {
    overflow: hidden;
  }
`;

export const NewsRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-left: 0px;
  padding: 0 20px 0 20px;
  cursor: pointer;
  transition: background-color 0.25s linear;

  :hover {
    background-color: #f2f2f2;
    text-decoration: underline;
  }

  @media (max-width: 379px) {
    height: auto;
    align-content: center;
    justify-content: center;
    overflow: hidden;
  }
`;

export const NewsInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: inherit;

  @media (max-width: 379px) {
    flex-direction: column;
    margin: 5px 0;
  }
`;

export const NewsInformationText = styled.p`
  opacity: 0.4;
  @media (max-width: 379px) {
    flex-direction: column;
    margin: 5px 0;
  }
`;

export const NewsHeading = styled.h4`
  width: 100%;
  margin-left: 10px;
  text-align: ${(props) => props.textAlign};

  @media (max-width: 379px) {
    width: 80%;
  }
`;

export const NewsCaption = styled.p`
  margin: 0;
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
`;
