import React from 'react';
import { NavbarElement, HeadingElement } from './NavBarComponents';

export default function NavBar() {
  return (
    <NavbarElement>
      <HeadingElement href={'/'}>CryptoSurge</HeadingElement>
    </NavbarElement>
  );
}
