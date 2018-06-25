<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomeLanding from "./Home/HomeLanding.jsx";
import Login from "./Home/LoginComponent.jsx";
import SchoolLanding from "./School/SchoolLanding/SchoolLanding.jsx";
import SubLanding from "./Sub/SubLanding/SubLanding.jsx";
import AdminLanding from "./Admin/AdminLanding/AdminLanding.jsx"
import PrivateRoute from "./PrivateRoute.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={HomeLanding} /> 
          <Route path="/login" render={(props) => <Login {...props}/>} />
          <PrivateRoute path="/admin" component={AdminLanding} />
          <PrivateRoute path="/school" component={SchoolLanding} />
          <PrivateRoute path="/sub" component={SubLanding} />
        </Switch>  
      </BrowserRouter>  
     
    );
  }
  
=======
import React, {Component} from "react";
import { BrowserRouter, Route} from "react-router-dom";
import HomeLanding from "./Home/HomeLanding.jsx";
import LoginLanding from "./Login/LoginLanding.jsx";
// import AdminLandingOverview from "./Admin/AdminLanding/AdminLandingOverview.jsx";
// import AdminScheduleOverview from "./Admin/AdminSchedule/AdminScheduleOverview.jsx"
const App = () => {
  return (
    
    <BrowserRouter> 
      <div>
        <Route exact path="/" component={HomeLanding} /> 
        <Route path="/login" component={LoginLanding} />
        {/* <Route path="/admin" component={AdminLandingOverview} />
        <Route path="/admin/schedule" component={AdminScheduleOverview} /> */}
      </div>  
    </BrowserRouter>  
   
  );
>>>>>>> adds routing to homeLanding and LoginLanding view
};

export default App;