import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {graphql, compose} from 'react-apollo';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
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

class AdminSchoolsSummary extends React.Component {
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
              <Grid item xs={4}>
                <Paper style={{
                    width: '100%',
                    overflowX: 'auto',
                    marginTop: '50px',
                }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>New Jobs to Review</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">Job Description 1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Job Description 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Job Description 3</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <div style={{marginTop:'65px'}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
                </div>
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
                        <TableCell>School Name</TableCell>
                        <TableCell>Contact Name</TableCell>
                        <TableCell>Main Phone</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.data.schools.map(school => {
                        return (
                          <TableRow key={school.id}>
                            <TableCell component="th" scope="row">
                              <Link to={`/admin/school/${school.id}`}>{school.school_name}</Link>
                            </TableCell>
                            <TableCell>{school.contact_name}</TableCell>
                            <TableCell>{school.main_phone}</TableCell>
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
  graphql(GET_ALL_SCHOOLS),
)(AdminSchoolsSummary);