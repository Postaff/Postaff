import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, path: Path, log: Log }) => (
  <Route
    path={Path}
    render={props => (Log ? (<Component {...props} />) : (<Redirect to="/"/>))}
  />
);

export default PrivateRoute;
