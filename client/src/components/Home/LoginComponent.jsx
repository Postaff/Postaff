import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const styles = theme => ({
  root: {
    height: '100%',
    maxheight: 500,
    float: 'right'
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
  }
});

class Login extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      clicked: this.props.location.state.clicked,
      username: '',
      password: '',
      usertype: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log("This is LoginComponent")
    const { classes } = this.props;
    const { clicked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {/* <Button className={classes.button}><Typography variant="title" onClick={this.handleChange} aria-label="collapse">Login</Typography></Button> */}
          <Slide direction="down" in={clicked} mountOnEnter unmountOnExit>
            <Paper elevation={6} className={classes.paper}>
              <Typography variant="display2">Please Log In</Typography>
                <TextField
                id="username-input"
                label="Username"
                className={classes.textField}
                type="username"
                autoComplete="current-username"
                margin="normal"
              />
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <Button variant="contained" color="secondary" className={classes.button} onClick={()=>this.props.clickLogout()}>
                <Link to='/admin'>Submit</Link>
              </Button>
            </Paper>
          </Slide>
        </div>
      </div>
    );
  }
}

// LoginLanding.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Login);
