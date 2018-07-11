import React from 'react';
import {
  CardContent,
  Typography,
  CardMedia,
  Card,
  Paper,
} from '@material-ui/core';

class Profile extends React.Component {

  render() {
    const { school } = this.props
    console.log(school)
    return (
      <Paper>
        <center><img src="http://image.al.com/home/bama-media/width600/img/news_birmingham_impact/photo/gardendale-high-schooljpg-a90b5be907fd546b.jpg" alt="School Image" style={{
          borderRadius: '10%', maxHeight: '60%', maxWidth: '80%', objectFit: 'cover',
        }}/></center>
        <Typography variant="title" gutterBottom align="center">
          {school.school_name}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {`${school.address_street} ${school.address_city}, ${school.address_state} ${school.address_zipcode}`}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {school.contact_name}
        </Typography>
      </Paper>
    );
  }
}

export default Profile;
