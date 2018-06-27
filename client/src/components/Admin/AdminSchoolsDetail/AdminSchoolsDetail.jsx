import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {graphql, compose} from 'react-apollo';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs';
import {withStyles} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  Grid,
} from '@material-ui/core';
import Profile from '../../Job/Profile.jsx';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AdminSchoolsDetail extends React.Component {
  render() {
    const {classes} = this.props;
console.log(this.props.data)
    if (this.props.data.loading) {
      return (
        <Fragment>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={8}>
                <Profile />
              </Grid>
              <Grid item xs={4}>
                <Paper style={{
                    width: '100%',
                    overflowX: 'auto',
                    marginTop: '50px',
                }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Open Requests</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">Number of Jobs</TableCell>
                        <TableCell component="th" scope="row">6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Status</TableCell>
                        <TableCell component="th" scope="row">2/6 Claimed</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Subjects</TableCell>
                        <TableCell component="th" scope="row">English, PE, Math</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Hours Available</TableCell>
                        <TableCell component="th" scope="row">78</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper style={{
                    width: '100%',
                    marginTop: '10px',
                    overflowX: 'auto',
                }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Job Description</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Grade</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.data.jobs.map(job => {
                        return (
                          <TableRow key={job.id}>
                            <TableCell component="th" scope="row">{job.description}</TableCell>
                            <TableCell>{job.subject}</TableCell>
                            <TableCell>{job.grade}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Fragment>
      );
    }
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_ALL_JOBS),
)(AdminSchoolsDetail);