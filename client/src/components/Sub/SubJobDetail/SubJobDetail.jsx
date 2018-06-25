import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

class LoginLanding extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Hey am in login landing page")
    return (
      <div>
<<<<<<< HEAD
        <ul>
          <li><Link to="/admin">Admin Log in</Link></li>
          <li><Link to="/school">School Log in</Link></li>
          <li><Link to="/sub">Sub Log in</Link></li>
        </ul>  
=======
       <p>USERNAME</p>
       <p>PASSWORD</p>
>>>>>>> adds routing to homeLanding and LoginLanding view
      </div>
    );
  }
}

export default LoginLanding;