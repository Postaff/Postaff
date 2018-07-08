import React, { Fragment } from 'react';
import {
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import {graphql, compose, Query} from 'react-apollo';
import { GET_SCHOOL_BY_USERNAME } from '../../../queries/jobFormQueries';

class SchoolNameFormField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    if (this.props.data.loading) {
      return <Fragment></Fragment>
    } else {
      return (
        <Fragment>
          <Grid item xs={12}>
            <Typography variant="display1">Job Request Form</Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              label="School Name"
              className={classes.textField}
              margin="normal"
              value={this.props.data.schoolByUsername.school_name}
              name="school"
              style={{ width: '90%' }}
            >
            </TextField>
          </Grid>
        </Fragment>
      );
    }
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
  withStyles(styles),
  graphql(GET_SCHOOL_BY_USERNAME, {
    options: () => ({
      variables: {
        username: (localStorage.getItem('username'))
      }
    })
  }),
)(SchoolNameFormField);
