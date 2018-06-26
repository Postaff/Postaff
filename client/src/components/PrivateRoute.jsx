
import React from 'react';
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";



const PrivateRoute = ({ component: Component, path:Path }) => (
  <Route
    path={Path}
    render={props => true ? (<Component {...props} />) : (<Redirect to="/"/>)}
   />
);

  export default PrivateRoute;