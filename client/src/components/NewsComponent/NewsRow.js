import React from 'react';
import styled from '@emotion/styled';
import {
  NewsRowContainer,
  NewsImage,
  NewsHeading,
  NewsCaptionContainer,
  NewsCaption,
  ExternalLink,
} from './NewsComponents';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const BrokenImage = styled(BrokenImageIcon)`
  height: 100px;
  width: 100px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NoImageText = styled.p`
  margin: 0;
  text-align: center;
`;

export default function NewsRow({
  newsHeading,
  newsImageSrc,
  newsText,
  imgDisplay,
  newsRedirect,
}) {
  return (
    <ExternalLink href={newsRedirect}>
      <NewsRowContainer>
        <NewsHeading>{newsHeading}</NewsHeading>
        <NewsCaptionContainer>
          {!newsImageSrc ? (
            <ImageContainer>
              <BrokenImage />
              <NoImageText>No Image Found</NoImageText>
            </ImageContainer>
          ) : (
            <NewsImage src={newsImageSrc} imgDisplay={imgDisplay} />
          )}
          <NewsCaption>{newsText}</NewsCaption>
        </NewsCaptionContainer>
      </NewsRowContainer>
    </ExternalLink>
  );
}
