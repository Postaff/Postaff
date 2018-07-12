import React from 'react';
import Timeline from 'react-calendar-timeline/lib';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs';
import { Paper, Typography } from '@material-ui/core';

class AdminSubTimeline extends React.Component {
  render() {
    if(this.props.subs.loading) {
      return (
        <div> Loading </div>
      );
    }
    console.log(this.props);
    const { subs } = this.props.subs;
    const groups = subs.map((sub) => {
      return { id: sub.id, title: sub.name };
    });

    const { jobs } = this.props.jobs;
    const items = jobs.map((job) => {
      const startTime = job.start_time.split(' ');
      const endTime = job.end_time.split(' ');
      return {
        id: job.id,
        group: job.fk_sub,
        title: job.subject,
        start_time: moment(`${job.start_date} ${startTime[0]}:00:00 ${startTime[1]}`, 'YYYY-MM-DD hh:mm:ss a'),
        end_time: moment(`${job.end_date} ${endTime[0]}:00:00 ${endTime[1]}`, 'YYYY-MM-DD hh:mm:ss a'),
        style:{ backgroundColor: 'purple' },
      };
    });

    return (
      <div style={{margin: '1%', padding: '1%'}}>
        <Paper elevation={1} style={{borderRadius: '.5%', margin: '.5%', padding: '.5%'}}>
          <Typography>
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}
              sidebarContent="Substitute Teachers"
              fullUpdate="false"
            />
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default compose(
  graphql(GET_ALL_SUBS, {
    name: 'subs',
  }),
  graphql(GET_ALL_JOBS, {
    name: 'jobs',
  }),
)(AdminSubTimeline);
