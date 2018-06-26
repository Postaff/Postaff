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
  
};

export default App;