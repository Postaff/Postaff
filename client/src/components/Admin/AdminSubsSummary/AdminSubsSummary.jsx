import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from '@material-ui/core';
import { graphql } from 'react-apollo';
import SubsTable from '../../Shared/SubsTable';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';

class AdminSubsSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Am in AdminSubSummary', this.props.data);

    return this.props.data.loading ? <div>loading</div> :
    <SubsTable subs={this.props.data.subs}>
      
    </SubsTable>
  }
}

export default graphql(GET_ALL_SUBS)(AdminSubsSummary);
