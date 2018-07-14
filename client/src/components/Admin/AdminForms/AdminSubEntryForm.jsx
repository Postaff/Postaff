import React from 'react';
import FileUpload from '@material-ui/icons/FileUpload';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';


import indigo from '@material-ui/core/colors/indigo';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  checked: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    color: indigo[600],
    '&$checked': {
      color: indigo[500],
    },
  },
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class AdminSubEntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      phone_alt: '',
      email: '',
      address_street: '',
      address_city: '',
      address_zipcode: '',
      address_state: '',
      work_eligibility: false,
      permitted: false,
      permitted_exp_date: '',
      special_ed: false,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(name, event) {
    this.setState({
      [name]: event.target.checked,
    });
  }

  submitForm(event) {
    this.setState({
      name: '',
      phone: '',
      phone_alt: '',
      email: '',
      address_street: '',
      address_city: '',
      address_zipcode: '',
      address_state: '',
      work_eligibility: false,
      permitted: false,
      permitted_exp_date: '',
      special_ed: false,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form id="form" >
          <Grid container spacing={24}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography variant="display1">Substitute Entry Form</Typography>
                <TextField
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '90%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  className={classes.textField}
                  margin="normal"
                  name="address_street"
                  value={this.state.address_street}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '90%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City"
                  className={classes.textField}
                  margin="normal"
                  name="address_city"
                  value={this.state.address_city}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '45%' }}
                />
                <FormControl className={classes.formControl} style={{ width: '15%' }}>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="address_state"
                    value={this.state.address_state}
                    onChange={this.handleChange.bind(this)}
                  >
                    <MenuItem value="AL">AL</MenuItem>
                    <MenuItem value="AK">AK</MenuItem>
                    <MenuItem value="AZ">AZ</MenuItem>
                    <MenuItem value="AR">AR</MenuItem>
                    <MenuItem value="CA">CA</MenuItem>
                    <MenuItem value="CO">CO</MenuItem>
                    <MenuItem value="CT">CT</MenuItem>
                    <MenuItem value="DE">DE</MenuItem>
                    <MenuItem value="DC">DC</MenuItem>
                    <MenuItem value="FL">FL</MenuItem>
                    <MenuItem value="GA">GA</MenuItem>
                    <MenuItem value="HI">HI</MenuItem>
                    <MenuItem value="ID">ID</MenuItem>
                    <MenuItem value="IL">IL</MenuItem>
                    <MenuItem value="IN">IN</MenuItem>
                    <MenuItem value="IA">IA</MenuItem>
                    <MenuItem value="KS">KS</MenuItem>
                    <MenuItem value="KY">KY</MenuItem>
                    <MenuItem value="LA">LA</MenuItem>
                    <MenuItem value="ME">ME</MenuItem>
                    <MenuItem value="MD">MD</MenuItem>
                    <MenuItem value="MA">MA</MenuItem>
                    <MenuItem value="MI">MI</MenuItem>
                    <MenuItem value="MN">MN</MenuItem>
                    <MenuItem value="MS">MS</MenuItem>
                    <MenuItem value="MO">MO</MenuItem>
                    <MenuItem value="MT">MT</MenuItem>
                    <MenuItem value="NE">NE</MenuItem>
                    <MenuItem value="NV">NV</MenuItem>
                    <MenuItem value="NH">NH</MenuItem>
                    <MenuItem value="NJ">NJ</MenuItem>
                    <MenuItem value="NM">NM</MenuItem>
                    <MenuItem value="NY">NY</MenuItem>
                    <MenuItem value="NC">NC</MenuItem>
                    <MenuItem value="ND">ND</MenuItem>
                    <MenuItem value="OH">OH</MenuItem>
                    <MenuItem value="OK">OK</MenuItem>
                    <MenuItem value="OR">OR</MenuItem>
                    <MenuItem value="PA">PA</MenuItem>
                    <MenuItem value="RI">RI</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="SD">SD</MenuItem>
                    <MenuItem value="TN">TN</MenuItem>
                    <MenuItem value="TX">TX</MenuItem>
                    <MenuItem value="UT">UT</MenuItem>
                    <MenuItem value="VT">VT</MenuItem>
                    <MenuItem value="VA">VA</MenuItem>
                    <MenuItem value="WA">WA</MenuItem>
                    <MenuItem value="WV">WV</MenuItem>
                    <MenuItem value="WI">WI</MenuItem>
                    <MenuItem value="WY">WY</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Zip Code"
                  className={classes.textField}
                  margin="normal"
                  name="address_zipcode"
                  value={this.state.address_zipcode}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '23%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  margin="normal"
                  className={classes.textField}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '90%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  type="tel"
                  className={classes.textField}
                  margin="normal"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '43%' }}
                />
                <TextField
                  label="Alt. Phone"
                  type="tel"
                  className={classes.textField}
                  margin="normal"
                  name="phone_alt"
                  value={this.state.phone_alt}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '43%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.permitted}
                      onClick={this.handleClick.bind(this, 'permitted')}
                      name="permitted"
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="Permit on File"
                />
                <TextField
                  label="Permit Exp. Date"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="permitted_exp_date"
                  value={this.state.permitted_exp_date}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '46.5%', marginTop: '5%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.work_eligibility}
                      onClick={this.handleClick.bind(this, 'work_eligibility')}
                      name="work_eligibility"
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="Employment Eligibility Verified"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.special_ed}
                      onClick={this.handleClick.bind(this, 'special_ed')}
                      name="special_ed"
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="Special Ed"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="flat-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="flat-button-file">
                  <Button component="span" color="primary" className={classes.button}>
                  Upload
                    <FileUpload className={classes.rightIcon} />
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.submitForm.bind(this)}>
                Submit
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(AdminSubEntryForm);
