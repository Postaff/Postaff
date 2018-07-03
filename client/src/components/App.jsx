import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLanding from './Home/HomeLanding.jsx';
import Login from './Home/Login.jsx';
import SchoolLanding from './School/SchoolLanding/SchoolLanding.jsx';
import SubLanding from './Sub/SubLanding/SubLanding.jsx';
import AdminLanding from './Admin/AdminLanding/AdminLanding.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import AdminSubsSummary from './Admin/AdminSubsSummary/AdminSubsSummary.jsx';
import AdminSubsDetail from './Admin/AdminSubsDetail/AdminSubsDetail.jsx';
import AdminSchoolsSummary from './Admin/AdminSchoolsSummary/AdminSchoolsSummary.jsx';
import AdminSchoolsDetail from './Admin/AdminSchoolsDetail/AdminSchoolsDetail.jsx';
import NavBar from './Menu/NavBar.jsx';
import AdminJob from './Job/AdminJob.jsx';
import AdminSchedule from './Admin/AdminSchedule/AdminSchedule.jsx';
import JobForm from './Admin/AdminForms/AdminJobRequestForm.jsx';
import * as actions from '../actions/indexAction.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: !!localStorage.getItem('token'),
      sasOption: localStorage.getItem('role'),
      slide: false,
      username: localStorage.getItem('username'),
    };
  }

  clickLogout() {
    this.props.logout();
    this.setState({
      isLoggedIn: !!localStorage.getItem('token'),
      sasOption: null,
    });
  }

  handleLogin(role) {
    this.setState({
      isLoggedIn: !!localStorage.getItem('token'),
      sasOption: role,
    });
  }

  render() {
    const log = this.state.isLoggedIn;
    const option = this.state.sasOption;
    console.log('I am in App.jsx', this.state.slide);
    console.log(this.state.isLoggedIn);
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <NavBar username={this.state.username} isLoggedIn={log} option={option} clickLogout={this.clickLogout.bind(this)} onLogin={this.handleLogin.bind(this)}/>
            <Switch>
              <Route exact path="/" component={HomeLanding} />
              <Route path="/login" render={props => <Login {...props} clickLogout={this.clickLogout.bind(this)} slide={this.state.slide}/>}
              />
              <PrivateRoute exact path="/admin" component={AdminLanding} log={log} />
              <PrivateRoute exact path="/admin/schedule" component={AdminSchedule} log={log} />
              <PrivateRoute exact path="/admin/schools" component={AdminSchoolsSummary} log={log} />
              <PrivateRoute exact path="/admin/schools/:schoolId" component={AdminSchoolsDetail} log={log} />
              <PrivateRoute exact path="/admin/subs" component={AdminSubsSummary} log={log} />
              <PrivateRoute exact path="/admin/subs/:subName" component={AdminSubsDetail} log={log} />
              <PrivateRoute exact path="/admin/jobs" component={AdminJob} log={log} />
              <PrivateRoute exact path="/school" component={SchoolLanding} log={log} />
              <PrivateRoute exact path="/sub" component={SubLanding} log={log} />
              <PrivateRoute exact path="/jobs/create" component={JobForm} log={log} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default compose(
  connect(null, actions),
)(App);
