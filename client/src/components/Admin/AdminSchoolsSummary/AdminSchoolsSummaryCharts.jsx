import React, {Fragment} from 'react';
import {Grid} from '@material-ui/core';

class AdminSchoolsSummaryCharts extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid item xs={8}>
          <div style={{marginTop:'65px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
          </div>
        </Grid>
      </Fragment>
    );
  }
}

export default AdminSchoolsSummaryCharts;