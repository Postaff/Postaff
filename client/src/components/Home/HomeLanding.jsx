import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

class HomeLanding extends React.Component {
  
  render() {
    return (  
      <div>
        <ul>
          <li><Link to="/admin">Admin Main Page</Link></li>
        </ul>  
      </div>
    );
  }
}

export default HomeLanding;