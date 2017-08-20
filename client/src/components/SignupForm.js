import React, { Component } from 'react';
import axios from 'axios';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zip: '',
      code: '',
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
  }

  handleTextFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendToServer() {
    const { firstName, lastName, email, phone, zip, code } = this.state;
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      zip,
      code,
    } = this.state;
    return (
      <div>
        <div>
          <Typography type="headline">
            Apply Now!
          </Typography>
          <TextField
            required
            name="firstName"
            label="First Name"
            margin="normal"
            defaultValue={firstName}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <TextField
            required
            name="lastName"
            label="Last Name"
            margin="normal"
            defaultValue={lastName}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <TextField
            required
            name="email"
            label="Email"
            margin="normal"
            defaultValue={email}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <TextField
            required
            name="phone"
            label="Phone"
            margin="normal"
            defaultValue={phone}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <TextField
            required
            name="zip"
            label="Zip"
            margin="normal"
            defaultValue={zip}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <TextField
            name="code"
            label="Referral Code (Optional)"
            margin="normal"
            defaultValue={code}
            onChange={this.handleTextFieldChange}
          />
          <br />
          <Button
            onClick={this.sendToServer}
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    );
  }
}

export default SignupForm;
