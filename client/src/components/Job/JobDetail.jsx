import React from 'react';
import {
  CardContent, 
  Typography, 
  CardMedia, 
  Card,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class JobDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData
    }
  }

  render() {
    return (
      
      <Card style={{flex:1, height: 300, marginTop: 100, marginRight:50}}>
        <CardContent>
         <Typography style={{marginBottom: 16}}>
           Request Details
          </Typography>
          <Typography style={{marginBottom: 16}}>
           Date Needed:- { this.state.pageInfo.datesNeeded}
          </Typography>  
          <Typography style={{marginBottom: 16}}>
            Status:- { this.state.pageInfo.status}
          </Typography>
          <Typography style={{marginBottom: 16}}>
            Subjects:- { this.state.pageInfo.subjects}
          </Typography>
          <Typography style={{marginBottom: 16}}>
            Grade:- { this.state.pageInfo.grade}
          </Typography>
          <Typography style={{marginBottom: 16}}>
            Hours Availaible:- { this.state.pageInfo.hours}
          </Typography>
        </CardContent> 
      </Card>
     
    );
  }
}

export default JobDetail;