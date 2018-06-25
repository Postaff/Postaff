import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";
import LoginLanding from "../Login/LoginLanding.jsx";

class HomeLanding extends React.Component {
  render() {
    return (  
      <div>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default HomeLanding;