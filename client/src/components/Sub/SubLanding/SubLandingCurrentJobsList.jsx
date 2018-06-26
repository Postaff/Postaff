import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SubLandingCurrentJobsEntry from './SubLandingCurrentJobsEntry.jsx';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SubLandingCurrentJobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    }
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange.bind(this)}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        <SubLandingCurrentJobsEntry value={this.state.value}/>
      </div>
    );
  }
}

SubLandingCurrentJobsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubLandingCurrentJobsList);
