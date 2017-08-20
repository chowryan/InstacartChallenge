import React, { Component } from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import AlertDialog from './AlertDialog';

const styles = {
  container: {
    display: 'flex',
    maxWidth: '960px',
    margin: '50px auto',
  },
  infoContainer: {
    flex: 1,
    width: '30%',
    margin: '20px',
  },
  info: {
    padding: '20px',
  },
  formContainer: {
    flex: 1,
    width: '30%',
    margin: '20px',
    display: 'flex',
  },
  flex: {
    margin: 'auto',
  },
  inputLeft: {
    width: '140px',
    margin: '0 10px 0 0',
  },
  inputRight: {
    width: '140px',
    margin: '0 0 0 10px',
  },
  input: {
    width: '300px',
  },
  button: {
    color: 'white',
    backgroundColor: 'green',
    minWidth: '300px',
    minHeight: '60px',
  },
  title: {
    flex: 1,
    color: 'green',
    padding: '20px 0',
  },
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    const storage = sessionStorage.getItem('instacartShopper');
    if (storage) {
      const { firstName, lastName, email, phone, zip, code } = JSON.parse(storage);
      this.state = {
        editMode: true,
        openAlert: false,
        displayErrors: false,
        firstName,
        lastName,
        email,
        phone,
        zip,
        code,
      };
    } else {
      this.state = {
        editMode: false,
        openAlert: false,
        displayErrors: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zip: '',
        code: '',
      };
    }
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  handleTextFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleEditMode() {
    this.setState({ editMode: true });
  }

  sendToServer() {
    const {
      firstName,
      lastName,
      email,
      phone,
      zip,
      code,
    } = this.state;
    const signupData = {
      firstName,
      lastName,
      email,
      phone,
      zip,
      code,
    };
    return axios.post('/signup', signupData)
      .then((res) => {
        sessionStorage.setItem('instacartShopper', JSON.stringify(res.data));
        this.toggleEditMode();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleAlert(bool) {
    const { firstName, lastName, email, phone, zip } = this.state;
    if (!firstName || !lastName || !email || !phone || !zip) {
      // use form error states
      this.setState({ displayErrors: true });
    } else {
      this.setState({ openAlert: bool });
    }
  }

  render() {
    const {
      editMode,
      displayErrors,
      openAlert,
      firstName,
      lastName,
      email,
      phone,
      zip,
      code,
    } = this.state;
    return (
      <div>
        <AlertDialog
          open={openAlert}
          sendToServer={this.sendToServer}
          toggleAlert={this.toggleAlert}
        />
        <Paper style={styles.container} elevation={5}>
          <div className="info-container" style={styles.infoContainer}>
            <div style={styles.info}>
              Lorem ipsum dolor sit amet, eget dapibus eget luctus quis imperdiet, ut pharetra bibendum et ac, suspendisse consectetuer vel elit odio. Dolor tempus orci sollicitudin feugiat ullamcorper, ipsum pellentesque duis, morbi praesent erat ut neque sit ante, vehicula tellus integer molestie.
            </div>
          </div>
          <div style={styles.formContainer}>
            <div style={styles.flex}>
              <Typography type="headline" style={styles.title}>
                {editMode ? 'Edit Application' : 'Apply Today!'}
              </Typography>
              <TextField
                error={displayErrors && !firstName}
                required
                name="firstName"
                label="First Name"
                margin="normal"
                defaultValue={firstName}
                style={styles.inputLeft}
                onChange={this.handleTextFieldChange}
              />
              <TextField
                error={displayErrors && !firstName}
                required
                name="lastName"
                label="Last Name"
                margin="normal"
                defaultValue={lastName}
                style={styles.inputRight}
                onChange={this.handleTextFieldChange}
              />
              <br />
              <TextField
                error={displayErrors && !email}
                required
                name="email"
                label="Email"
                margin="normal"
                defaultValue={email}
                style={styles.input}
                onChange={this.handleTextFieldChange}
              />
              <br />
              <TextField
                error={displayErrors && !phone}
                required
                name="phone"
                label="Phone"
                margin="normal"
                defaultValue={phone}
                style={styles.inputLeft}
                onChange={this.handleTextFieldChange}
              />
              <TextField
                error={displayErrors && !zip}
                required
                name="zip"
                label="Zip"
                margin="normal"
                defaultValue={zip}
                style={styles.inputRight}
                onChange={this.handleTextFieldChange}
              />
              <br />
              <TextField
                name="code"
                label="Referral Code (Optional)"
                margin="normal"
                defaultValue={code}
                style={styles.input}
                onChange={this.handleTextFieldChange}
              />
              <br />
              <Button
                style={styles.button}
                onClick={() => this.toggleAlert(true)}
              >
                {editMode ? 'SAVE CHANGES' : 'APPLY NOW >'}
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignupForm;
