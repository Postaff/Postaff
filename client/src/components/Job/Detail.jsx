import React from 'react';
import {
  CardContent,
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData,
    };
  }

  render() {
    return (
      <Paper style={{ height: '100%' }}>
       <Typography variant="display1" gutterBottom>
         Detail
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Date Needed:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              { this.state.pageInfo.datesNeeded}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Status:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              { this.props.data ? 'Claimed' : this.state.pageInfo.status}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Subjects:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              { this.props.data ? this.props.data.sub : this.state.pageInfo.subjects}
            </Grid>
          </Grid>
        </Typography>
                  <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Grade:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              { this.props.data ? this.props.data.grade : this.state.pageInfo.grade}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Hours Availaible:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              { this.state.pageInfo.hours}
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    );
  }
}

export default Detail;
