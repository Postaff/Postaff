import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  paper: {
    padding: '1%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class FormStyles extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;
    return (
      <Paper className={classes.paper}>
        <Typography variant="display1">This is a Basic Form</Typography>
          <TextField
          id="firstName-input"
          label="First Name"
          className={classes.textField}
          type="firstName"
          autoComplete="first-name"
          margin="normal"
        />
        <TextField
          id="lastName-input"
          label="Last Name"
          className={classes.textField}
          type="lastName"
          autoComplete="last-name"
          margin="normal"
          helperText="Please enter your last name"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(FormStyles);

/*
https://developers.google.com/web/fundamentals/design-and-ux/input/forms/#use_metadata_to_enable_auto-complete

some autocomplete terms

home tel, work tel, mobile tel:
tel-country-code
tel-national
tel-area-code
tel-local
tel-local-prefix
tel-local-suffix
tel-extension

street-address
address-level2
postal-code
*/