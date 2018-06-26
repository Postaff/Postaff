import React from 'react';
import {
  CardContent, 
  Typography, 
  CardMedia, 
  Card,
  Paper,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData
    }
  }

  

  render() {
    return (
      <Paper>
        <center><img src={this.state.pageInfo.src} alt="School Image" style={{ borderRadius: '50%', maxHeight: '60%', maxWidth: '80%', objectFit: 'cover' }}/></center>
        <Typography variant="title" gutterBottom align="center">
          {this.state.pageInfo.name}
        </Typography>  
        <Typography variant="subheading" gutterBottom align="center">
          {this.state.pageInfo.address}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {this.state.pageInfo.joined}
        </Typography>
      </Paper>
    );
  }
}

export default Profile;