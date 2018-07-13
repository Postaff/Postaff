import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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

          <Typography variant="display2" gutterBottom>
            Feng Chen | Ainslie Hsu | Heshie London | Mayank Patel
          </Typography>
        </div>
        <div style={{
          padding: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <video width="80%" controls loop>
            <source src="/teamSquare.mp4" type="video/mp4" />
          </video>
          {/* <img src="../stack.png" style={{ width: '80%' }}></img> */}
        </div>
      </Fragment>
    );
  }
}

export default HomeLanding;
