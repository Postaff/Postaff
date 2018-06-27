import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";
import NavBar from "../Menu/NavBar.jsx";

class HomeLanding extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (  
      <div>
        <NavBar/>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/school">School</Link></li>
          <li><Link to="/sub">Sub</Link></li>
        </ul>  
      </div>
    );
  }
}

export default HomeLanding;