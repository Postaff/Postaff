import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { compose } from 'react-apollo';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class AdminSchoolsDetailProfile extends React.Component {
  render() {
    const { classes } = this.props;
    let { school } = this.props;
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


export default compose(
  withStyles(styles),
)(AdminSchoolsDetailProfile);
