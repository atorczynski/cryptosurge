import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HeadingElement } from './AppBarComponents';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const style = {
  backgroundColor: '#333',
  position: 'fixed',
};

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={style}>
        <Toolbar>
          <Typography variant='h6' className={classes.title} align={'center'}>
            <HeadingElement href={'/'}>Cryptodash.io</HeadingElement>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
