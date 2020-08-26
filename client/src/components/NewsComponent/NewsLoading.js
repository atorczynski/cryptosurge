import React from 'react';
import styled from '@emotion/styled';
import {
  NewsRowContainer,
  NewsHeading,
  NewsCaptionContainer,
  NewsCaption,
} from './NewsComponents';
import Skeleton from 'react-loading-skeleton';
import { Underline } from '../CoinDetails/CoinDetailsGlobalComponents';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export default function NewsLoading({ newsHeading }) {
  return (
    <NewsRowContainer>
      <NewsHeading>{newsHeading}</NewsHeading>
      <NewsCaptionContainer>
        <ImageContainer>
          <Skeleton width={100} height={100} />
        </ImageContainer>

        <NewsCaption>
          <Skeleton height={12} width={400} count={6} />
        </NewsCaption>
      </NewsCaptionContainer>
      <Underline />
    </NewsRowContainer>
  );
}
