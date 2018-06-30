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

class AdminSchoolsSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      phoneExt: '',
      email: '',
      school: '',
      subject: '',
      grade: '',
      jobDescription: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      additionalInformation: '',
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
      name: '',
      phone: '',
      phoneExt: '',
      email: '',
      school: '',
      subject: '',
      grade: '',
      jobDescription: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      additionalInformation: '',
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <form>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Typography variant="display1">Substitute Teacher Request Form</Typography>
              <TextField
                label="Contact Name"
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
                label="Phone"
                type="tel"
                className={classes.textField}
                margin="normal"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
                style={{ width: '30%' }}
              />
              <TextField
                label="Ext"
                className={classes.textField}
                margin="normal"
                name="phoneExt"
                value={this.state.phoneExt}
                onChange={this.handleChange.bind(this)}
                style={{width: "10%"}}
              />
              <TextField
                label="Email"
                type="email"
                className={classes.textField}
                margin="normal"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                style={{ width: '45%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="School Name"
                className={classes.textField}
                margin="normal"
                name="school"
                value={this.state.school}
                onChange={this.handleChange.bind(this)}
                style={{ width: '90%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                className={classes.textField}
                margin="normal"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this)}
                style={{ width: '65%' }}
              />
            <FormControl className={classes.formControl} style={{ width: '23%' }}>
              <InputLabel>Grade</InputLabel>
              <Select
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange.bind(this)}
              >
                <MenuItem value="Pre-K">Pre-K</MenuItem>
                <MenuItem value="K">K</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Description"
                className={classes.textField}
                type="jobDescription"
                margin="normal"
                name="jobDescription"
                value={this.state.jobDescription}
                onChange={this.handleChange.bind(this)}
                style={{ width: '90%', marginBottom: '5%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange.bind(this)}
                style={{ width: '28.5%' }}
              />
              <TextField
                label="Start Time"
                type="time"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                name="startTime"
                value={this.state.startTime}
                onChange={this.handleChange.bind(this)}
                style={{ width: '13%' }}
              />
              <TextField
                label="End Date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleChange.bind(this)}
                style={{ width: '28%' }}
              />
              <TextField
                label="End Time"
                type="time"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                name="endTime"
                value={this.state.endTime}
                onChange={this.handleChange.bind(this)}
                style={{ width: '13%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Additional Information"
                margin="normal"
                multiline
                rows="4"
                className={classes.textField}
                name="additionalInformation"
                value={this.state.additionalInformation}
                onChange={this.handleChange.bind(this)}
                style={{ width: '68.5%' }}
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
    );
  }
}

export default withStyles(styles)(AdminSchoolsSummary);
