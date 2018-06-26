import React from 'react';
import {Route, Link} from "react-router-dom";
import AdminSchedule from "../AdminSchedule/AdminSchedule.jsx";
import AdminJob from "../../Job/AdminJob.jsx";

class AdminLanding extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    console.log("Hey", this.props.match.url);
    return (
      <div>
        This is admin landing page
        <ul>
          <li><Link to={`${this.props.match.url}/jobDetails`}>JobDetail</Link></li>
        </ul>  
        <Route path={`${this.props.match.url}/:adminSubPages`} component={AdminJob} />
      </div>
    );
  }
}

export default AdminLanding;