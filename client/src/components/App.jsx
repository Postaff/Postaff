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



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
    
      <BrowserRouter> 
        <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomeLanding} /> 
          <Route path="/login" render={(props) => <Login {...props}/>} />
          <PrivateRoute exact path="/admin" component={AdminLanding} />
            <PrivateRoute exact path="/admin/schools/" component={AdminSchoolsSummary}/>
            <PrivateRoute exact path="/admin/schools/:schoolId" component={AdminSchoolsDetail}/>
            <PrivateRoute exact path="/admin/subs/" component={AdminSubsSummary}/>
            <PrivateRoute exact path="/admin/subs/:subId" component={AdminSubsDetail}/>
          <PrivateRoute exact path="/school" component={SchoolLanding} />
          <PrivateRoute exact path="/sub" component={SubLanding} />
        </Switch>  
        </div>
      </BrowserRouter>  
     
    );
  }
  
};

export default App;