import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import grey from '@material-ui/core/colors/grey';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as actions from '../../actions/indexAction.js';

const theme = createMuiTheme({
  overrides: {
    MuiSnackbarContent: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: grey[50],
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
    backgroundColor: grey[50],
  },
  messageId: {
    backgroundColor: grey[50],
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
      role: '',
      selectedValue: 'admin',
      open: false,
    };

    this.radioChange = this.radioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onSubmit(event) {
    const code = event.keyCode || 1;
    if(code === 13 || code === 1) { 
      this.props.login(this.state.user, () => {
        this.props.onLogin(this.state.role);
        this.handleClose();
      });
    }
  }


  handleLogin() {
    axios.post('/api/users/login', {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
    }).then((response) => {
      Auth.authenticateUser(response.data.token);
      this.props.onLogin(this.state.username, this.state.role);
    }).catch((error) => {
      console.log(error);
    });
  }

  handleInput(key, event) {
    const { user } = this.state;
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
    console.log('This is LoginComponent', this.props);
    const { handleSubmit } = this.props;

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Tooltip id="tooltip-left" title="Sign into your account" placement="left">
            <Button className={classes.button} onClick={this.handleClick}><Typography variant="title">Login</Typography></Button>
          </Tooltip>
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
                    onKeyUp={this.onSubmit.bind(this)}
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
                    onKeyUp={this.onSubmit.bind(this)}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={this.onSubmit.bind(this)}
                    onKeyPress={this.onSubmit.bind(this)}
                  >
                  Submit
                  </Button>
                </div></span>}
              action={[
                <Tooltip id="tooltip-icon" title="Cancel">
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="secondary"
                    className={classes.close}
                    onClick={this.handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>,
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
