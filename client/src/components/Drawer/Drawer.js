import React from 'react';
import styled from '@emotion/styled';
import { Button, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const CloaseIconStyled = styled(CloseIcon)`
  cursor: pointer;
  margin-top: 20px;
`;

const buttonStyle = {
  size: '20px',
  backgroundColor: '#f2a900',
  width: 'inherit',
  textTransform: 'none',
  display: 'inherit',
  marginBottom: '10px',
  marginTop: '20px',
};

const DrawerConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d3d3d3;
  align-content: center;
  align-items: center;
  border-radius: 25px;
  width: auto;
  height: auto;
  margin-bottom: 10px;
  padding: ${(props) => props.padding};

  @media (max-width: 379px) {
    margin-left: 10px;
  }
`;

const DrawerHeading = styled.h3``;

export default function Drawer({
  buttonHeading,
  drawerContent,
  drawerHeading,
  padding,
}) {
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
        <DrawerConatiner padding={padding}>
          <DrawerHeading>{drawerHeading}</DrawerHeading>
          {drawerContent}
          <CloaseIconStyled
            onClick={() => {
              handleClick();
            }}
          />
        </DrawerConatiner>
      </Collapse>
    </React.Fragment>
  );
}
