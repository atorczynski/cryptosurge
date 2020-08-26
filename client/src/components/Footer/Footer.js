import React from 'react';
import {
  FooterContainer,
  FooterLink,
  HeartEmoji,
  FooterText,
  FooterContentContainer,
  FooterLinkExternal,
} from './FooterComponents';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterText>Made with </FooterText>
        <HeartEmoji role={'img'} aria-label={"Heath Emoji"}>❤️</HeartEmoji>
        <FooterText> by </FooterText>
        <FooterLinkExternal href={'https://github.com/atorczynski'}>
          Artur Torczynski
        </FooterLinkExternal>
      </FooterContentContainer>
      <FooterContentContainer>
        <FooterText>Powered by </FooterText>
        <FooterLinkExternal href={'https://reactjs.org/'}>
          REACTJS
        </FooterLinkExternal>
        <FooterText>|</FooterText>
        <FooterLinkExternal href={'https://www.coingecko.com/'}>
          CoinGecko.com
        </FooterLinkExternal>
        <FooterText>|</FooterText>
        <FooterLinkExternal href={'https://coincap.io/'}>
          CoinCap.io
        </FooterLinkExternal>
      </FooterContentContainer>
      <FooterContentContainer>
        <FooterLink to={'/disclaimer'}>Privacy & Cookies</FooterLink>
      </FooterContentContainer>
    </FooterContainer>
  );
}
