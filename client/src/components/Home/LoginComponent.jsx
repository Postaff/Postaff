import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import grey from '@material-ui/core/colors/grey';
import Auth from '../Shared/Auth.js';

const bodystyle = {
  background: grey[100],
};

const styles = theme => ({
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
    // backgroundColor: theme.palette.background.paper,
  },
  messageId: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit,
    maxWidth: 500,
  },
  wrapper: {
    width: theme.spacing.unit * 41,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
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
});


// const LoginWrapper = withStyles(styles)(MySnackbarContent);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usertype: null,
      role: 'admin',
      open: false,
    };
    this.radioChange = this.radioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    })
  }

  handleInput(key, event) {
    this.setState({
      [key]: event.target.value,
    })
  }

  handleClick() {
    this.setState({ open: true });
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  radioChange(event) {
    console.log(event.target.value);
    this.setState({ role: event.target.value });
  }

  render(props) {
    console.log('This is LoginComponent');
    const { classes } = this.props;
    const { clicked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>

          <Button className={classes.button}><Typography variant="title" onClick={this.handleClick}>Login</Typography></Button>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={this.state.open}
              className={classes.SnackbarContent}
            //   bodyStyle={bodystyle}
              resumeHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
            message={<span id="message-id"><div className={classes.messageId}>
                <Typography variant="display1">Please Log In</Typography>
                <TextField
                  onChange={this.handleInput.bind(this, 'username')}
                  id="username-input"
                  label="Username"
                  className={classes.textField}
                  type="username"
                  autoComplete="current-username"
                  margin="normal"
                />
                <TextField
                  onChange={this.handleInput.bind(this, 'password')}
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
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
                <Button variant="contained" color="secondary" className={classes.button} 
                  onClick={this.handleLogin.bind(this)}
                >
                {/* onClick={() => this.props.clickLogout(this.state.role)}> */}
                  {/* <Link to={`/${this.state.role}`}>Submit</Link> */}
                  Submit
                </Button>
              </div></span>}
                action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
                ]}
            />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
