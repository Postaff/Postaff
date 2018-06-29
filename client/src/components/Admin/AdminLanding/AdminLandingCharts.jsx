import React from 'react';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

function AdminLandingCharts() {
  return (
    <Paper style={{ height: '100%', padding: '5%' }}>
      <Typography variant="subheading" gutterBottom>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            Stats
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            27
          </Grid>
        </Grid>
      </Typography>
      <Typography variant="subheading" gutterBottom>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            Stats
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            144
          </Grid>
        </Grid>
      </Typography>
    </Paper>
  );
}

export default AdminLandingCharts;
