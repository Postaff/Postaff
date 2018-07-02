import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import grey from '@material-ui/core/colors/grey';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as actions from '../../actions/indexAction.js';
import Auth from '../Shared/Auth.js';

const theme = createMuiTheme({
  overrides: {
    MuiSnackbarContent: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: grey[100],
      },
    },
  },
  SnackbarContent: {
    // color: rgb(49, 49, 49),
    // display: flex;
    // padding: ,
    // flex - wrap: wrap;
    // align - items: center;
    // pointer - events: initial;
    // backgroundColor: grey[100],
  },
  root: {
    // height: '100%',
    // maxheight: 500,
    float: 'right',
    backgroundColor: grey[100],
  },
  messageId: {
    backgroundColor: grey[100],
    margin: '2%',
    maxWidth: 500,
  },
  wrapper: {
    width: '2%' * 41,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: '2%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '2%',
    marginRight: '2%',
    width: 200,
  },
  close: {
    width: '2%' * 4,
    height: '2%' * 4,
  },
  radio: {
    color: 'green',
    '&$checked': {
      color: 'green',
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
  error: {
    color: 'red',
  },
});


// const LoginWrapper = withStyles(styles)(MySnackbarContent);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
      role: 'admin',
      open: false,
    };
    this.radioChange = this.radioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onSubmit() {
    this.props.login(this.state.user, () => {
      this.props.onLogin(this.state.role);
      this.handleClose();
    });
  }

  handleInput(key, event) {
    const user = this.state.user;
    user[key] = event.target.value;
    this.setState({ user });
  }

  handleClick() {
    this.setState({ open: true });
  }

  handleClose(event, reason) {
    if(reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  radioChange(event) {
    this.setState({ role: event.target.value });
  }

  render(props) {
    console.log('This is LoginComponent');
    const { handleSubmit } = this.props;
    const { classes } = this.props;
    const { clicked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button className={classes.button} onClick={this.handleClick}><Typography variant="title">Login</Typography></Button>
          <MuiThemeProvider theme={theme}>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={this.state.open}
              // className={classes.SnackbarContent}
              resumeHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={
                <span id="message-id"><div className={classes.messageId}>
                  <Typography variant="display1">Please Log In</Typography>
                  <Typography className={classes.error} variant="subheading">{this.props.errorMessage}</Typography>
                  <TextField
                    name="username"
                    value={this.state.user.username}
                    onChange={this.handleInput.bind(this, 'username')}
                    id="username-input"
                    label="Username"
                    className={classes.textField}
                    type="username"
                    margin="normal"
                  />
                  <TextField
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleInput.bind(this, 'password')}
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                  />
                  <div>
                    <FormControlLabel control={
                      <Radio
                        checked={this.state.role === 'admin'}
                        onChange={this.radioChange}
                        value="admin"
                        name="admin-radio-button"
                        aria-label="A"
                      />}
                    label="Admin" />
                    <FormControlLabel control={
                      <Radio
                        checked={this.state.role === 'sub'}
                        onChange={this.radioChange}
                        value="sub"
                        name="subs-radio-button"
                        aria-label="B"
                      />}
                    label="Subs" />
                    <FormControlLabel control={
                      <Radio
                        checked={this.state.role === 'school'}
                        onChange={this.radioChange}
                        value="school"
                        name="school-radio-button"
                        aria-label="C"
                      />}
                    label="School" />
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={this.onSubmit.bind(this)}
                  >
                  Submit
                  </Button>
                </div></span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="secondary"
                  className={classes.close}
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default compose(
  reduxForm({ form: 'login' }),
  connect(mapStateToProps, actions),
  withStyles(createMuiTheme),
)(Login);
