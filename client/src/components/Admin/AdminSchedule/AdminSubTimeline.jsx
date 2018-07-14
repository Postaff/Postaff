import React from 'react';
import Timeline from 'react-calendar-timeline/lib';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs';

class AdminSubTimeline extends React.Component {
  render() {
    if(this.props.subs.loading) {
      return (
        <div> Loading </div>
      );
    }
    const { subs } = this.props.subs;
    const groups = subs.map(sub => ({ id: sub.id, title: sub.name }));

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
        style: { backgroundColor: '#f5f5f5' },
      };
    });

    return (
      <div style={{ borderRadius: '5px' }}>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          sidebarContent="Substitute Teachers"
          fullUpdate="false"
          style={{ color: 'black', backgroundColor: 'f5f5f5' }}
        />
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
