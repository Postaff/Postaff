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




class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn : false
  //   }
  // }

  // clickLogout () {
  //   this.setState({
  //     isLoggedIn: !this.state.isLoggedIn
  //   })
  // }

  render() {
    console.log("I am in App.jsx")
    return (
      <div>
      <BrowserRouter>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeLanding} />
          <Route path="/login" render={(props) => <Login {...props}/>} />
          <PrivateRoute exact path="/admin" component={AdminLanding} />
            <PrivateRoute exact path="/admin/schools/" component={AdminSchoolsSummary}/>
            <PrivateRoute exact path="/admin/schools/:schoolId" component={AdminSchoolsDetail}/>
            <PrivateRoute exact path="/admin/subs" component={AdminSubsSummary}/>
            <PrivateRoute exact path="/admin/subs/:subName" component={AdminSubsDetail}/>
          <PrivateRoute exact path="/school" component={SchoolLanding} />
          <PrivateRoute exact path="/sub" component={SubLanding} />
        </Switch>
        </div>
      </BrowserRouter>

      <img src="../Postaff_.png" style={{ width: '100%', textAlign: 'center' }}></img>
     </div>
    );
  }

};

export default App;