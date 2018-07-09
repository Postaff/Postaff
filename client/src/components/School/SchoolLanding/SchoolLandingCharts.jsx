import React, { Fragment } from 'react';
import {graphql, compose, Query} from 'react-apollo';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs.js';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

class SchoolLandingCharts extends React.Component {
  render() {
    if (this.props.data.loading) {
      return null;
    } else {

      // CLAIM DATA
      var countClaimed = function(jobs) {
        var counter = 0;
        for (var i = 0; i < jobs.length; i++) {
          if (jobs[i].claimed === true) {
            counter++;
          }
        }
        return counter;
      }

      var claimed = countClaimed(this.props.data.jobs);

      var unclaimed = this.props.data.jobs.length - claimed;

      const claimData = {
        labels: [
          'Claimed',
          'Unclaimed',
        ],
        datasets: [{
          data: [claimed, unclaimed],
          backgroundColor: [
            '#0a00b6',
            '#9d46ff',
          ],
        }],
      };

      // GRADE DATA
      var generateGrades = function(jobs) {
        var result = {};
        for (var i = 0; i < jobs.length; i++) {
          if (!result[jobs[i].grade]) {
            result[jobs[i].grade] = 1
          } else {
            result[jobs[i].grade] += 1;
          }
        }
        return Object.keys(result);
      }

      var grades = generateGrades(this.props.data.jobs);

      var generateGradeCount = function(jobs) {
        var result = {};
        for (var i = 0; i < jobs.length; i++) {
          if (!result[jobs[i].grade]) {
            result[jobs[i].grade] = 1
          } else {
            result[jobs[i].grade] += 1;
          }
        }
        return Object.values(result);
      }

      var gradeCount = generateGradeCount(this.props.data.jobs);

      const gradeData = {
        labels: grades,
        datasets: [{
          data: gradeCount,
          backgroundColor: [
            'indigo',
            'midnightblue',
            'rebeccapurple',
            'darkblue',
            'darkslateblue',
            'blue',
            'slateblue',
            'dodgerblue',
            'mediumslateblue',
            'cornflowerblue',
            'mediumpurple',
            'lightsteelblue',
            'purple',
            'darkmagenta',
          ],
        }],
      };

      // SUBJECT DATA
      var generateSubjects = function(jobs) {
        var result = {};
        for (var i = 0; i < jobs.length; i++) {
          if (!result[jobs[i].subject]) {
            result[jobs[i].subject] = 1
          } else {
            result[jobs[i].subject] += 1;
          }
        }
        return Object.keys(result);
      }

      var subjects = generateSubjects(this.props.data.jobs);

      var generateSubjectCount = function(jobs) {
        var result = {};
        for (var i = 0; i < jobs.length; i++) {
          if (!result[jobs[i].subject]) {
            result[jobs[i].subject] = 1
          } else {
            result[jobs[i].subject] += 1;
          }
        }
        return Object.values(result);
      }

      var subjectCount = generateSubjectCount(this.props.data.jobs);

      const subjectData = {
        labels: subjects,
        datasets: [{
          data: subjectCount,
          backgroundColor: [
            'purple',
            'lightsteelblue',
            'darkmagenta',
            'mediumpurple',
            'blueviolet',
            'cornflowerblue',
            'darkviolet',
            'mediumslateblue',
            'darkorchid',
            'slateblue',
            'blue',
            'darkslateblue',
            'darkblue',
            'rebeccapurple',
            'midnightblue',
            'indigo',
          ],
        }],
      };

      const options = {
        legend: {
          display: false,
        },
      };

      return (
        <Fragment>
          <Grid item xs={8}>
            <Paper style={{ height: '100%' }}>
              <Grid container spacing={12} style={{ flexGrow: 1, paddingTop: '10%' }}>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={claimData} options={options} />
                  <Typography variant="title" align="center">
                    Claimed
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={gradeData} options={options} />
                  <Typography variant="title" align="center">
                    Grades
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={subjectData} options={options} />
                  <Typography variant="title" align="center">
                    Subjects
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Fragment>
      );
    }
  }
}

export default graphql(GET_ALL_JOBS)(SchoolLandingCharts);
