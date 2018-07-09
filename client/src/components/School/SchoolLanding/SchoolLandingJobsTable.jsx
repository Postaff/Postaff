import React, { Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TablePagination, TableRow,
TableSortLabel, Toolbar, Typography, Paper, Tooltip, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {graphql, compose, Query} from 'react-apollo';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs.js';
import { GET_SCHOOL_BY_USERNAME } from '../../../queries/jobFormQueries';
import _ from 'lodash';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';

export const toolbarStyle = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

export const tableStyle = theme => ({
  root: {
    width: '88%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    width: '100%'
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class SchoolLandingJobsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'start_date',
      data: [],
      page: 0,
      rowsPerPage: 10,
    };
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleRequestSort (event, property) {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  handleSelectAllClick (event, checked) {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick (event, id) {
  };

  handleChangePage (event, page) {
    this.setState({ page });
  };

  handleChangeRowsPerPage (event) {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (this.props.data.loading || this.props.schoolName.loading) {
=======
    if (this.props.data.loading) {
>>>>>>> Create separate school name form field component
=======
    if(this.props.data.loading || this.props.schoolName.loading){
>>>>>>> Remove school name component
=======
    if (this.props.data.loading || this.props.schoolName.loading) {
>>>>>>> Fix styling of new and edit forms to be consistent
      return <div></div>
    } else {
    let tableData = [];
    _.each(this.props.data.jobs, (job)=>{
      tableData.push(createData(job.id, job.subject, job.grade, job.start_date, job.claimed, job.description, job.start_time, job.end_date, job.end_time))
    })
    const { classes } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

    let subs = ['Kiera Grady', 'Ellis Hermann', 'Bert Deckow', 'Cara Botsford', 'Cara Botsford', 'Augusta Kutch'];

    return (
      <Fragment>
        <Grid item xs={12}>
          <Paper elevation={4} className={classes.root}>
            <AdminTodayTableToolbar />
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <AdminTodayTableHead
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={tableData.length}
                />
                <TableBody>
                  {tableData
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      return (
                        <TableRow
                          hover
                          onClick={event => this.handleClick(event, n.id)}
                          tabIndex={-1}
                          key={n.id}
                        >
                          <TableCell component="th" scope="row">{n.subject}</TableCell>
                          <TableCell numeric>{n.grade}</TableCell>
                          <TableCell numeric>{n.start_date}</TableCell>
                          {n.claimed ? <TableCell numeric>Claimed</TableCell> : <TableCell numeric>Unclaimed</TableCell>}
                          {n.claimed ? <TableCell numeric>{subs[Math.floor(Math.random() * 6)]}</TableCell> : <TableCell numeric></TableCell>}
                          <TableCell numeric>
                            <Link to={{
                              pathname:`/school/job/edit/${n.id}`,
                              state: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                schoolId: n.id,
=======
>>>>>>> Update edit form function to populate with existing data
                                schoolName: this.props.schoolName.schoolByUsername.school_name,
=======
>>>>>>> Create separate school name form field component
=======
                                schoolName: this.props.schoolName.schoolByUsername.school_name,
>>>>>>> Remove school name component
                                subject: n.subject,
                                grade: n.grade,
                                description: n.description,
                                startDate: n.start_date,
                                startTime: n.start_time,
                                endDate: n.end_date,
                                endTime: n.end_time,
                                additionalInformation: '',
                              },
                            }}>
                              <IconButton aria-label="Edit">
                                <Edit />
                              </IconButton>
                            </Link>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Fragment>
    );}
  }
}

function createData(id, subject, grade, start_date, claimed, description, start_time, end_date, end_time) {
  return { id, subject, grade, start_date, claimed, description, start_time, end_date, end_time };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'subject', numeric: false, disablePadding: false, label: 'Subject' },
  { id: 'grade', numeric: true, disablePadding: false, label: 'Grade' },
  { id: 'start_date', numeric: true, disablePadding: false, label: 'Start Date' },
  { id: 'claimed', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'employee', numeric: false, disablePadding: false, label: 'Substitute Teacher' },
  { id: 'edit', numeric: false, disablePadding: false, label: '' },
];

class AdminTodayTableHead extends React.Component {
  createSortHandler(property) {
    return (event) => {
      this.props.onRequestSort(event, property);
    };
  }
  render() {
    const { onSelectAllClick, order, orderBy, rowCount } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

let AdminTodayTableToolbar = props => {
  const { classes } = props;
  return (
    <Toolbar
      className={classNames(classes.root)}
    >
      <div className={classes.title}>
          <Typography variant="title" id="tableTitle">
            Job Requests
          </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
      </div>
    </Toolbar>
  );
};
AdminTodayTableToolbar = withStyles(toolbarStyle)(AdminTodayTableToolbar);

export default compose(
  withStyles(tableStyle),
  graphql(GET_SCHOOL_BY_USERNAME, {
    name: 'schoolName',
    options: () => ({
      variables: {
        username: (localStorage.getItem('username'))
      }
    })
  }),
  graphql(GET_ALL_JOBS),
)(SchoolLandingJobsTable);
