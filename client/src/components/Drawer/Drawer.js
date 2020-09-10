import React from 'react';
import styled from '@emotion/styled';
import { Button, Collapse } from '@material-ui/core';

const buttonStyle = {
  size: '20px',
  backgroundColor: '#f2a900',
  width: 'inherit',
  textTransform: 'none',
  display: 'inherit',
  marginBottom: '10px',
};

const DrawerConatiner = styled.div`
  background-color: inherit;
  width: inherit;
  height: 100px;
`;

export default function Drawer({ buttonHeading, drawerContent }) {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          handleClick();
          console.log(isOpen);
        }}
        style={buttonStyle}
      >
        Read more about {buttonHeading}
      </Button>
      <Collapse in={isOpen}>
        <DrawerConatiner>{drawerContent}</DrawerConatiner>
      </Collapse>
    </React.Fragment>
  );
}
