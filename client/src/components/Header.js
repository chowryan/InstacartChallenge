import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit" style={styles.flex}>
        Instacart Shopper
      </Typography>
      <Button color="contrast">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
