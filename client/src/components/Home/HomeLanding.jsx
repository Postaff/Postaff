import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class HomeLanding extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{
          paddingLeft: '4em', paddingRight: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src="../Postaff_.png" style={{ width: '60%' }}></img>
        </div>
        <div style={{
          padding: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src="../stack.png" style={{ width: '40%' }}></img>
        </div>
      </Fragment>
    );
  }
}

export default HomeLanding;
