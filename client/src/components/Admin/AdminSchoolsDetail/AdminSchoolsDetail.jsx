import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { graphql, compose } from 'react-apollo';
import {
  Grid,
} from '@material-ui/core';
import GET_SCHOOL_BY_ID from '../../../queries/fetchSchoolById';
import AdminSchoolsDetailProfile from './AdminSchoolsDetailProfile';
import AdminSchoolsChart from './AdminSchoolsChart';
import AdminSchoolsTable from './AdminSchoolsTable';

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
    const { classes } = this.props;
    let school = this.props.data.schoolById;
    console.log(this.props)
    if (this.props.data.loading) {
      return null;
    } else {
      return (
      <div style={{ margin: '1%', padding: '2%', marginTop: '0' }}>
        <Grid container spacing={24}>
          <AdminSchoolsDetailProfile school={school}/>
          <AdminSchoolsChart school={school}/>
          <AdminSchoolsTable school={school}/>
        </Grid>
      </div>
      );
    }
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_SCHOOL_BY_ID, {
    options: ownProps => ({
      variables: {
        id: ownProps.match.params.schoolId,
      }
    })
  }),
)(AdminSchoolsDetail);
