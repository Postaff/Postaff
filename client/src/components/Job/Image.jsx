import React from 'react';
import {
  CardContent, 
  Typography, 
  CardMedia, 
  Card,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData
    }
  }

  

  render() {
    return (
      
      <Card style={{ width: 275, height: 300, marginTop: 100, marginLeft: 50, marginRight: 30}}>
        <CardMedia  title="School Image" image={this.state.pageInfo.src} style={{height: 180}}/>
        <CardContent>
          <Typography>
            {this.state.pageInfo.name}
          </Typography>  
          <Typography>
            {this.state.pageInfo.address}
          </Typography>
          <Typography>
            {this.state.pageInfo.joined}
          </Typography>
        </CardContent> 
      </Card>
     
    );
  }
}

export default Image;