import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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

class Login extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      clicked: true,
      username: '',
      password: '',
      usertype: null,
      selectedValue: 'admin',
    }
    this.handleChange = this.handleChange.bind(this);
    this.radioChange = this.radioChange.bind(this);
  }

  handleChange() {
    this.setState({ clicked: !this.state.clicked });
  };

  radioChange (event){
    console.log(event.target.value);
    this.setState({selectedValue: event.target.value});
  };


  render() {
    console.log("This is LoginComponent", this.props)
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
              <Button variant="contained" color="secondary" className={classes.button} onClick={()=>this.props.clickLogout(this.state.selectedValue)}>
                <Link to={`/${this.state.selectedValue}`}>Submit</Link>
              </Button>
              <div>
              <FormControlLabel   control={    
                <Radio
                  checked={this.state.selectedValue === 'admin'}
                  onChange={this.radioChange}
                  value="admin"
                  name="admin-radio-button"
                  aria-label="A"
                />}
              label="Admin"/>
              <FormControlLabel   control={  
                <Radio
                  checked={this.state.selectedValue === 'sub'}
                  onChange={this.radioChange}
                  value="sub"
                  name="subs-radio-button"
                  aria-label="B"
                />}
              label="Subs"/> 
              <FormControlLabel   control={   
                <Radio
                  checked={this.state.selectedValue === 'school'}
                  onChange={this.radioChange}
                  value="school"
                  name="school-radio-button"
                  aria-label="C"
                />}
              label="School" />  
      </div>
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
