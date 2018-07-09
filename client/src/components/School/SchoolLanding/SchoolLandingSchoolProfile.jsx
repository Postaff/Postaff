import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { graphql, compose, Query } from 'react-apollo';
import { GET_SCHOOL_BY_USERNAME } from '../../../queries/jobFormQueries';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class SchoolLandingSchoolProfile extends React.Component {
  render() {
    const { classes } = this.props;
    let school = this.props.data.schoolByUsername;

    if (this.props.data.loading) {
      return null;
    } else {
      return (
        <Fragment>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={school.school_img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {school.school_name}
                </Typography>
                <Typography component="p">
                  {school.address_street}<br/>
                  {school.address_city}, {school.address_state} {school.address_zipcode}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      );
    }
  }
}

SchoolLandingSchoolProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  graphql(GET_SCHOOL_BY_USERNAME, {
    options: () => ({
      variables: {
        username: (localStorage.getItem('username'))
      }
    })
  }),
)(SchoolLandingSchoolProfile);
