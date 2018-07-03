import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLanding from './Home/HomeLanding';
import Login from './Home/Login';
import SchoolLanding from './School/SchoolLanding/SchoolLanding';
import SubLanding from './Sub/SubLanding/SubLanding';
import AdminLanding from './Admin/AdminLanding/AdminLanding';
import PrivateRoute from './PrivateRoute';
import AdminSubsSummary from './Admin/AdminSubsSummary/AdminSubsSummary';
import AdminSubsDetail from './Admin/AdminSubsDetail/AdminSubsDetail';
import AdminSchoolsSummary from './Admin/AdminSchoolsSummary/AdminSchoolsSummary';
import AdminSchoolsDetail from './Admin/AdminSchoolsDetail/AdminSchoolsDetail';
import NavBar from './Menu/NavBar';
import AdminJob from './Job/AdminJob';
import AdminSchedule from './Admin/AdminSchedule/AdminSchedule';
import JobForm from './Admin/AdminForms/AdminJobRequestForm';
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
