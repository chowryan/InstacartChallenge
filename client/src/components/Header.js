import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  bar: {
    color: 'white',
    backgroundColor: '#43B02A',
  },
  title: {
    flex: 1,
  },
  button: {
    color: 'white',
    backgroundColor: 'green',
  },
};

const Header = () => (
  <div style={styles.root}>
    <AppBar position="static" style={styles.bar}>
      <Toolbar>
        <Typography type="title" color="inherit" style={styles.title}>
          Instacart Shopper
        </Typography>
        <Button color="contrast" style={styles.button}>Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
