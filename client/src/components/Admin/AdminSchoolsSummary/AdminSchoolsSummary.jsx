import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import SchoolTable from '../../Shared/SchoolsTable';

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
    const { classes } = this.props;

    return this.props.data.loading
      ? <Fragment/>
      : <div className={classes.root}>
        <div style={{ padding: '0 1.5% 0 1.5%' }}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SchoolTable schools={this.props.data.schools} />
            </Grid>
          </Grid>
        </div>
      </div>;
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_ALL_SCHOOLS),
)(AdminSchoolsSummary);
