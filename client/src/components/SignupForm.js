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
    color: 'green',
    fontSize: '30',
  },
  formContainer: {
    flex: 1,
    width: '30%',
    margin: '20px',
    display: 'flex',
    padding: '0 0 20px 0',
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
    backgroundColor: '#FF5722',
    minWidth: '300px',
    minHeight: '60px',
    margin: '30px 0px 0px 0px',
  },
  title: {
    flex: 1,
    color: 'green',
    padding: '20px 0',
  },
  list: {
    color: 'gray',
    padding: '20px 0',
    fontSize: '20',
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
    this.toggleEditMode();
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
              Earn money shopping and delivering groceries, giving customers more time to do what they love.
              <ul style={styles.list}>
                <li><b>Be Independent</b> - Schedule work around your own life.</li>
                <br />
                <li><b>Have Fun</b> - Spend time shopping, exploring new things and being active.</li>
                <br />
                <li><b>Earn extra income</b> - Get paid weekly. Work Sundays to maximize your hours and pay.</li>
                <br />
              </ul>
            </div>
          </div>
          <div style={styles.formContainer}>
            <div style={styles.flex}>
              <Typography type="headline" style={styles.title}>
                {editMode ? 'Edit Application' : 'Apply in under 5 minutes'}
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
                error={displayErrors && !lastName}
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
