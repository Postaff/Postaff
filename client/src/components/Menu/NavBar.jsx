import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText,
  Divider, AppBar, Toolbar, Typography, Button, IconButton,
} from '@material-ui/core';
import {
  Home, Dashboard, Schedule, People, LocationCity, Work,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Login from '../Home/Login.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '2vh',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: '1vw',
  },
  list: {
    minWidth: 150,
    maxWidth: 250,
  },
  fullList: {
    width: 'auto',
  },
  sideBar: {
    minWidth: 230,
    maxWidth: '30vw',
    backgroundColor: theme.palette.background.paper,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle(open) {
    this.setState({
      isOpen: open,
    });
  }

  renderAdminSideBar() {
    const { classes } = this.props;
    return (
      <div className={classes.sideBar}>
        <List component="nav">
          <Link to={'/'}>
            <ListItem button>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
          </Link>
          {this.props.isLoggedIn && this.props.option === 'admin'
            ? <List>
              <Link to={'/admin'}>
                <ListItem button>
                  <ListItemIcon>
                    <Dashboard/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard"/>
                </ListItem>
              </Link>
              <Link to={'/admin/schedule'}>
                <ListItem button>
                  <ListItemIcon>
                    <Schedule/>
                  </ListItemIcon>
                  <ListItemText primary="Schedule"/>
                </ListItem>
              </Link>
              <Link to={'/admin/subs'}>
                <ListItem button>
                  <ListItemIcon>
                    <People/>
                  </ListItemIcon>
                  <ListItemText primary="Substitutes"/>
                </ListItem>
              </Link>
              <Link to={'/admin/schools'}>
                <ListItem button>
                  <ListItemIcon>
                    <LocationCity/>
                  </ListItemIcon>
                  <ListItemText primary="Schools"/>
                </ListItem>
              </Link>
              <Link to={'/admin/jobs'}>
                <ListItem button>
                  <ListItemIcon>
                    <Work/>
                  </ListItemIcon>
                  <ListItemText primary="Jobs"/>
                </ListItem>
              </Link>
            </List>
            : <div></div>}

          <Divider/>
        </List>
      </div>
    );
  }

  render() {
    console.log('this navbar.jsx');
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton onClick={() => this.handleToggle(true)} className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={this.state.isOpen}
              onClose={() => this.handleToggle(false)}
              onOpen={() => this.handleToggle(true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => this.handleToggle(false)}
                onKeyDown={() => this.handleToggle(false)}
              >
                {this.renderAdminSideBar()}
                <List component="nav">
                  <ListItem button>
                    <ListItemText primary="About"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Contact"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Careers"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Terms"/>
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
            <Typography variant="title" color="inherit" className={classes.flex}>
                Postaff
            </Typography>

            {!this.props.isLoggedIn
              ? <Login clickLogout={this.props.clickLogout} onLogin={this.props.onLogin}/>
              : 
              <div>
                <span>{`Hi ${this.props.username}   `}</span>               

              <Link to={{ pathname: '/', state: { clicked: false } }}>
                <Button color="inherit" onClick={() => this.props.clickLogout()}>
                  <Typography variant="subheading">Logout</Typography>
                </Button>
              </Link>
              </div>
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
