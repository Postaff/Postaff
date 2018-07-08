import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { graphql, compose } from 'react-apollo';
import GET_ALL_JOB_BY_SUB from '../../../queries/fetchSubById';

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

class SubBookedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    if(this.props.data.loading) {
      return (
        <div>
          ....LOADING
        </div>
      );
    }

    const { claimedJobs } = this.props.data.subById;
    console.log('HEYHEY', this.props.data);
    if(claimedJobs.length === 0) {
      return (
        <div className={classes.root}>
        BOOKED JOBS
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="No Booked Jobs">
              </Tab>
            </Tabs>
          </AppBar>
        </div>
      );
    }

    return (
      <div className={classes.root}>
      BOOKED JOBS
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {claimedJobs.map(job => (
              <Tab key={job.id} label={job.subject}>
                {job.subject}
              </Tab>
            ))}
          </Tabs>
        </AppBar>

        { value === this.state.value && <TabContainer>{claimedJobs[this.state.value].description}</TabContainer>}


      </div>
    );
  }
}

SubBookedJobs.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default compose(withStyles(styles), graphql(GET_ALL_JOB_BY_SUB, {
  options: () => ({
    variables: {
      id: localStorage.getItem('subId'),
    },
  }),
}))(SubBookedJobs);
