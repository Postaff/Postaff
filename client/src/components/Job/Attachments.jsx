import React from 'react';
import {
  CardContent, 
  Typography, 
  CardMedia, 
  Card,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class Attachments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData
    }
  }

  render() {
    return (
      
      <Card style={{ flex: 1, height: 200, marginTop: 20, marginLeft: 50, marginRight:50}}>
        Attachments
      </Card>
     
    );
  }
}

export default Attachments;