import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class HomeLanding extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{
          marginTop: '4vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src="../Postaff_.png" style={{ width: '80%', minWidth: '670px', minHeight: '170px' }}></img>
        </div>
        <div style={{ textAlign: 'center', justifyContent: 'center' }}>
          <Typography variant="display4" gutterBottom>
          Staffing Solutions
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default HomeLanding;
