import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomeLanding from "./Home/HomeLanding.jsx";
import Login from "./Home/LoginComponent.jsx";
import SchoolLanding from "./School/SchoolLanding/SchoolLanding.jsx";
import SubLanding from "./Sub/SubLanding/SubLanding.jsx";
import AdminLanding from "./Admin/AdminLanding/AdminLanding.jsx"
import PrivateRoute from "./PrivateRoute.jsx";
import AdminSubsSummary from "./Admin/AdminSubsSummary/AdminSubsSummary.jsx";
import AdminSubsDetail from "./Admin/AdminSubsDetail/AdminSubsDetail.jsx";
import AdminSchoolsSummary from "./Admin/AdminSchoolsSummary/AdminSchoolsSummary.jsx";
import AdminSchoolsDetail from "./Admin/AdminSchoolsDetail/AdminSchoolsDetail.jsx";
import NavBar from "./Menu/NavBar.jsx";
import AdminJob from "./Job/AdminJob.jsx";
import AdminSchedule from "./Admin/AdminSchedule/AdminSchedule.jsx";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false,
      sasOption: null
    }
  }

  clickLogout (option) {
    console.log("clickLogout is clicked")
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      sasOption: option
    })
  }

  render() {
    const log = this.state.isLoggedIn;
    const option = this.state.sasOption;
    console.log("I am in App.jsx")
    return (
      <div>
      <BrowserRouter>
        <div>
        <NavBar isLoggedIn={log} option={option} clickLogout={this.clickLogout.bind(this)}/>
        <Switch>
          <Route exact path="/" component={HomeLanding} /> 
          <Route path="/login" render={(props) => <Login {...props} clickLogout={this.clickLogout.bind(this)} />} />
          <PrivateRoute exact path="/admin" component={AdminLanding} log={log} />
            <PrivateRoute exact path="/admin/schedule" component={AdminSchedule} log={log} />
            <PrivateRoute exact path="/admin/schools" component={AdminSchoolsSummary} log={log} />
            <PrivateRoute exact path="/admin/schools/:schoolId" component={AdminSchoolsDetail} log={log} />
            <PrivateRoute exact path="/admin/subs" component={AdminSubsSummary} log={log} />
            <PrivateRoute exact path="/admin/subs/:subName" component={AdminSubsDetail} log={log} />
            <PrivateRoute exact path="/admin/jobs" component={AdminJob} log={log} />
          <PrivateRoute exact path="/school" component={SchoolLanding} log={log} />
          <PrivateRoute exact path="/sub" component={SubLanding} log={log} />
        </Switch>  
        </div>
      </BrowserRouter>

      <img src="../Postaff_.png" style={{ width: '100%', textAlign: 'center' }}></img>
     </div>
    );
  }

};

export default App;