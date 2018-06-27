import React, {Component} from 'react';
import {styles} from '../../styles/NavBarStyle'; 
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, 
Divider, AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {Home, Dashboard, Schedule, People, LocationCity, Work} from '@material-ui/icons';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleToggle(open){
    this.setState({
      isOpen: open
    })
  }

  renderAdminSideBar(){
    const {classes} = this.props; 
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
          <Link to={'/admin'}>
            <ListItem button>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <Schedule/>
            </ListItemIcon>
            <ListItemText primary="Schedule"/>
          </ListItem>
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
          <ListItem button>
            <ListItemIcon>
              <Work/>
            </ListItemIcon>
            <ListItemText primary="Jobs"/>
          </ListItem>
          <Divider/>
        </List>
      </div>
    )
  }

  render(){
  const {classes} = this.props; 
    return (
      <div className={classes.root}>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton onClick={()=> this.handleToggle(true)} className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={this.state.isOpen}
              onClose={()=> this.handleToggle(false)}
              onOpen={()=> this.handleToggle(true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={()=> this.handleToggle(false)}
                onKeyDown={()=> this.handleToggle(false)}
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
                <ListItemText primary="Term"/>
              </ListItem>
              </List>
              </div>
            </SwipeableDrawer>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Postaff
            </Typography>
            <Link to={"/login"}>
            <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);