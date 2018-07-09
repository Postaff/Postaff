import React from 'react';
import {	withRouter } from 'react-router-dom';
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
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import {
  GET_ALL_SCHOOLS,
  NEW_JOB,
} from '../../../queries/jobFormQueries.js';

class SchoolJobRequestCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: this.props.location.state.schoolName,
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
    const {
      school, subject, grade, jobDescription, startDate,
      startTime, endDate, endTime, additionalInformation,
    } = this.state;
    this.props.mutate({
      variables: {
        input: {
          schoolId: '1',
          school,
          subject,
          grade,
          jobDescription,
          startDate,
          endDate,
          startTime,
          endTime,
          additionalInformation,
        },
      },
    });

    this.setState({
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

    this.props.history.push('/school');
  }

  render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    if (this.props.data.loading || this.props.schoolName.loading) {
      return <div></div>;
    }

>>>>>>> Remove school name component
=======
    if(this.props.data.loading) {
      return <div></div>;
    }
>>>>>>> Render school name by username on new job form via navbar
=======
>>>>>>> Fix styling of new and edit forms to be consistent
    const { classes } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , marginTop: '2.5%', paddingTop: '2.5%'}}>
        <form>
          <Grid container spacing={8}>
            <Paper className={classes.paper}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Remove school name component
              <Grid item xs={12}>
                <Typography variant="display1">Job Request Form</Typography>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  label="School Name"
                  className={classes.textField}
                  margin="normal"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  value={this.state.school}
                  name="school"
<<<<<<< HEAD
=======
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select the school"
>>>>>>> Return user to dashboard once form is submitted
                  style={{ width: '90%', textAlign: 'left' }}
                >
                </TextField>
              </Grid>
=======
              <SchoolNameFormField />
>>>>>>> Create separate school name form field component
=======
                  value={this.props.schoolName.schoolByUsername.school_name}
=======
=======
                  onChange={this.handleChange.bind(this)}
>>>>>>> Render school name by username on new job form via navbar
=======
>>>>>>> Fix styling of new and edit forms to be consistent
                  value={this.state.school}
>>>>>>> Revert changes in new job request form
                  name="school"
                  style={{ width: '90%', textAlign: 'left' }}
                >
                </TextField>
<<<<<<< HEAD
               </Grid>
>>>>>>> Remove school name component
=======
              </Grid>
>>>>>>> Render school name by username on new job form via navbar
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
                <FormControl className={classes.formControl} style={{ width: '23%', textAlign: 'left' }}>
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
                  className={classes.textField}
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
                  className={classes.textField}
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
                  style={{ width: '71%' }}
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

export default compose(
  graphql(NEW_JOB),
  graphql(GET_ALL_SCHOOLS),
  withStyles(styles),
)(SchoolJobRequestCreate);
