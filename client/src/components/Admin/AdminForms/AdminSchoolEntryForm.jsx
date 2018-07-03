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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class AdminSchoolEntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      contactName: '',
      contactTitle: '',
      email: '',
      phone: '',
      phoneExt: '',
      additionalInfo: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm(event) {
    console.log(this.state);
    this.setState({
      schoolName: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      contactName: '',
      contactTitle: '',
      email: '',
      phone: '',
      phoneExt: '',
      additionalInfo: '',
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form id="form">
          <Grid container spacing={24}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography variant="display1">School Entry Form</Typography>
                <TextField
                  label="School Name"
                  className={classes.textField}
                  margin="normal"
                  name="schoolName"
                  value={this.state.schoolName}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '90%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  className={classes.textField}
                  margin="normal"
                  name="street"
                  value={this.state.street}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '90%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City"
                  className={classes.textField}
                  margin="normal"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '45%' }}
                />
                <FormControl className={classes.formControl} style={{ width: '15%' }}>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    value={this.state.state}
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
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '24%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Name"
                  className={classes.textField}
                  margin="normal"
                  name="contactName"
                  value={this.state.contactName}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '45%' }}
                />
                <TextField
                  label="Contact Title"
                  className={classes.textField}
                  margin="normal"
                  name="contactTitle"
                  value={this.state.contactTitle}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '42%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  className={classes.textField}
                  margin="normal"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '45%' }}
                />
                <TextField
                  label="Phone"
                  type="tel"
                  className={classes.textField}
                  margin="normal"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '29.5%' }}
                />
                <TextField
                  label="Ext"
                  className={classes.textField}
                  margin="normal"
                  name="phoneExt"
                  value={this.state.phoneExt}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '10%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Additional Information"
                  margin="normal"
                  multiline
                  rows="4"
                  className={classes.textField}
                  name="additionalInfo"
                  value={this.state.additionalInfo}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '66%' }}
                />
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

export default withStyles(styles)(AdminSchoolEntryForm);
