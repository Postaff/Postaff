import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

class SubLandingCurrentJobsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        {this.props.value === 0 && <TabContainer>
          <h3>Request Details</h3>
          <table>
            <thead>
              <th>Dates Needed</th>
              <td>June 22, 2018 to June 24, 2018</td>
            </thead>
            <tbody>
              <th>Status</th>
              <td>Unclaimed</td>
            </tbody>
            <tbody>
              <th>Subject</th>
              <td>English</td>
            </tbody>
            <tbody>
              <th>Grade</th>
              <td>7</td>
            </tbody>
            <tbody>
              <th>Hours Available</th>
              <td>18</td>
            </tbody>
            <tbody>
              <th>Distance to Job</th>
              <td>2.4 miles</td>
            </tbody>
          </table>
        </TabContainer>}
        {this.props.value === 1 && <TabContainer>
          <h3>Request Details</h3>
          <table>
            <thead>
              <th>Dates Needed</th>
              <td>June 25, 2018</td>
            </thead>
            <tbody>
              <th>Status</th>
              <td>Unclaimed</td>
            </tbody>
            <tbody>
              <th>Subject</th>
              <td>Math</td>
            </tbody>
            <tbody>
              <th>Grade</th>
              <td>5</td>
            </tbody>
            <tbody>
              <th>Hours Available</th>
              <td>8</td>
            </tbody>
            <tbody>
              <th>Distance to Job</th>
              <td>1.0 miles</td>
            </tbody>
          </table>
        </TabContainer>}
        {this.props.value === 2 && <TabContainer>
          <h3>Request Details</h3>
          <table>
            <thead>
              <th>Dates Needed</th>
              <td>June 22, 2018 to June 24, 2018</td>
            </thead>
            <tbody>
              <th>Status</th>
              <td>Unclaimed</td>
            </tbody>
            <tbody>
              <th>Subject</th>
              <td>English</td>
            </tbody>
            <tbody>
              <th>Grade</th>
              <td>7</td>
            </tbody>
            <tbody>
              <th>Hours Available</th>
              <td>18</td>
            </tbody>
            <tbody>
              <th>Distance to Job</th>
              <td>2.4 miles</td>
            </tbody>
          </table>
        </TabContainer>}
      </React.Fragment>
    );
  }
}

SubLandingCurrentJobsEntry.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubLandingCurrentJobsEntry);
