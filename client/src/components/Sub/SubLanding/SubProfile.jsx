import React from 'react';
import {
  CardContent,
  Typography,
  CardMedia,
  Card,
  Paper,
} from '@material-ui/core';
import { graphql, compose } from 'react-apollo';
import GET_ALL_SUBBYID from '../../../queries/fetchSubById';


class SubProfile extends React.Component {
  render() {
    console.log('this is in sublanding/subprofile page', this.props.data.subById);
    if(this.props.data.loading) {
      return <div></div>;
    }
    return (
      <Paper style={{ width: '40%' }}>
        <center><img src={'https://www.sheffield.ac.uk/polopoly_fs/1.473214!/image/Childrenlying.jpg'} alt="School Image" style={{
          borderRadius: '50%', maxHeight: '60%', maxWidth: '80%', objectFit: 'cover',
        }}/></center>
        <Typography variant="title" gutterBottom align="center">
          {this.props.data.subById.name}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {this.props.data.subById.phone}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {this.props.data.subById.email}
        </Typography>
      </Paper>
    );
  }
}

export default compose(graphql(GET_ALL_SUBBYID))(SubProfile);