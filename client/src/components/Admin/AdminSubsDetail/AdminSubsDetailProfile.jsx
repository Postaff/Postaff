import React from 'react';
import {
  Typography,
  Paper,
} from '@material-ui/core';

class AdminSubsDetailProfile extends React.Component {
  render() {
    const { email, name, phone, photo_url} = this.props.sub;
    return (
      <Paper style={{ width: '100%' }}>
        <center><img src={photo_url} alt="School Image" style={{
          borderRadius: '50%', maxHeight: '60%', maxWidth: '80%', objectFit: 'cover',
        }}/></center>
        <Typography variant="title" gutterBottom align="center">
          {name}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {phone}
        </Typography>
        <Typography variant="subheading" gutterBottom align="center">
          {email}
        </Typography>
      </Paper>
    );
  }
}

export default AdminSubsDetailProfile;
