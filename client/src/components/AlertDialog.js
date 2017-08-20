import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  container: {
    width: '400px',
    height: '100px',
  },
};
class AlertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'query',
    };
    this.startSending = this.startSending.bind(this);
    this.resetStatus = this.resetStatus.bind(this);
  }

  startSending() {
    console.log('starting to send');
    this.props.sendToServer();
    this.setState({ status: 'loading' });
    // fake status bar
    setTimeout(() => this.setState({ status: 'done' }), 2000);
  }

  resetStatus() {
    this.props.toggleAlert(false);
    this.setState({ status: 'query' });
  }

  render() {
    const { status } = this.state;
    let title;
    let text;
    let buttons;
    if (status === 'query') {
      title = 'Ready to apply?';
      text = 'Submit your application.';
      buttons = (
        <DialogActions>
          <Button color="accent" onClick={this.resetStatus}>
            Disagree
          </Button>
          <Button color="primary" onClick={this.startSending}>
            Agree
          </Button>
        </DialogActions>
      );
    } else if (status === 'loading') {
      title = 'Submitting Your Application ...';
      text = <LinearProgress />;
      buttons = (
        <DialogActions>
          <Button disabled>
            {' '}
          </Button>
        </DialogActions>
      );
    } else if (status === 'done') {
      title = 'Application submitted.';
      text = 'Congratulations, we look forward to working with you!';
      buttons = (
        <DialogActions>
          <Button color="primary" onClick={this.resetStatus}>
            OK
          </Button>
        </DialogActions>
      );
    }
    return (
      <Dialog open={this.props.open} onRequestClose={this.resetStatus}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent style={styles.container}>
          <DialogContentText>
            {text}
          </DialogContentText>
        </DialogContent>
        {buttons}
      </Dialog>
    );
  }
}

export default AlertDialog;
