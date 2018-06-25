import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";
<<<<<<< HEAD
=======
import LoginLanding from "../Login/LoginLanding.jsx";
>>>>>>> adds routing to homeLanding and LoginLanding view

class HomeLanding extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (  
      <div>
        <ul>
<<<<<<< HEAD
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/school">School</Link></li>
          <li><Link to="/sub">Sub</Link></li>
        </ul>  
=======
          <li><Link to="/login">Login</Link></li>
        </ul>
>>>>>>> adds routing to homeLanding and LoginLanding view
      </div>
    );
  }
}

export default HomeLanding;