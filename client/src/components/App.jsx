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
};

export default App;