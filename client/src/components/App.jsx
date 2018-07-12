import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import HomeLanding from './Home/HomeLanding';
import Login from './Home/Login';
import SchoolLanding from './School/SchoolLanding/SchoolLanding';
import SchoolJobRequestCreate from './School/SchoolLanding/SchoolJobRequestCreate';
import SchoolJobRequestEdit from './School/SchoolLanding/SchoolJobRequestEdit';
import SubLanding from './Sub/SubLanding/SubLanding';
import AdminLanding from './Admin/AdminLanding/AdminLanding';
import PrivateRoute from './PrivateRoute';
import AdminSubsSummary from './Admin/AdminSubsSummary/AdminSubsSummary';
import AdminSubsDetail from './Admin/AdminSubsDetail/AdminSubsDetail';
import AdminSchoolsSummary from './Admin/AdminSchoolsSummary/AdminSchoolsSummary';
import AdminSchoolsDetail from './Admin/AdminSchoolsDetail/AdminSchoolsDetail';
import NavBar from './Menu/NavBar';
import AdminSchedule from './Admin/AdminSchedule/AdminSchedule';
import AdminJob from './Job/AdminJob';
import JobForm from './Admin/AdminForms/AdminJobRequestForm';
import JobDetail from './Job/Detail';
import * as actions from '../actions/indexAction';
import SubJobDetail from './Sub/SubJobDetail/SubJobDetail';

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
    console.log('handlelogin/App.jsx', localStorage.getItem('schoolId'));
    this.setState({
      isLoggedIn: !!localStorage.getItem('token'),
      sasOption: localStorage.getItem('role'),
      username: localStorage.getItem('username'),
    });
  }

  render() {
    const { classes } = this.props;
    const log = this.state.isLoggedIn;
    const option = this.state.sasOption;
    console.log('I am in App.jsx', option);
    return (
      <React.Fragment>
        <main>
          <div className={classes.toolbar} />
          <BrowserRouter forceRefresh={true}>
            <div className={classes.content}>
              <NavBar username={this.state.username} isLoggedIn={log} option={option} clickLogout={this.clickLogout.bind(this)} onLogin={this.handleLogin.bind(this)}/>
              <Switch>
                <Route exact path="/" component={HomeLanding} />
                <Route path="/login" render={props => <Login {...props} clickLogout={this.clickLogout.bind(this)} slide={this.state.slide}/>}/>
                <PrivateRoute exact path="/admin" component={AdminLanding} log={log} />
                <PrivateRoute exact path="/admin/schedule" component={AdminSchedule} log={log} />
                <PrivateRoute exact path="/admin/schools" component={AdminSchoolsSummary} log={log} />
                <PrivateRoute exact path="/admin/schools/:schoolId" component={AdminSchoolsDetail} log={log} />
                <PrivateRoute exact path="/admin/subs" component={AdminSubsSummary} log={log} />
                <PrivateRoute exact path="/admin/subs/:subId" component={AdminSubsDetail} log={log} />
                <PrivateRoute exact path="/admin/jobs/:jobId" component={AdminJob} log={log} />
                <PrivateRoute exact path="/school" component={SchoolLanding} log={log} />
                <PrivateRoute exact path="/school/job/create" component={SchoolJobRequestCreate} log={log} />
                <PrivateRoute exact path="/school/job/edit/:jobId" component={SchoolJobRequestEdit} log={log} />
                <PrivateRoute exact path="/sub" component={SubLanding} log={log} />
                <PrivateRoute exact path="/sub/:subId" component={SubJobDetail} log={log} />
                <PrivateRoute exact path="/jobs/create" component={JobForm} log={log} />
                <PrivateRoute exact path="/jobs/:jobId" component={JobDetail} log={log} />
              </Switch>
            </div>
            {/* </div> */}
          </BrowserRouter>
        </main>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // height: '100%',
    // zIndex: 1,
    // overflow: 'hidden',
    // position: 'relative',
    // display: 'flex',
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    marginLeft: 200,
    height: '96vh',
    // background: '#f5f5f5',
  },
  toolbar: theme.mixins.toolbar,
});

export default compose(
  withStyles(styles),
  connect(null, actions),
)(App);
