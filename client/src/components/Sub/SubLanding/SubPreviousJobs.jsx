import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TablePagination, TableRow,
  TableSortLabel, Toolbar, Typography, Paper, Tooltip,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import GET_ALL_SUBBYID from '../../../queries/fetchSubById';

export const toolbarStyle = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    width: '100%',
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
    width: '100%%',
    marginTop: '18px',
  },
  table: {
    width: '100%',
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

class SubPreviousJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'location',
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


  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';
    if(this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  }

  handleSelectAllClick(event, checked) {
    if(checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  }

  handleClick(event, id) {
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    if(this.props.data.loading) {
      return <div></div>;
    }
    console.log('this is in previous jobs in sublanding', this.props.data.subById.jobsCompleted);
    const { subById } = this.props.data;
    const { classes } = this.props;
    const {
      order, orderBy, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, subById.jobsCompleted.length - page * rowsPerPage);

    return (
      <Paper elevation={4} className={classes.root}>
        <AdminTodayTableToolbar />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <AdminTodayTableHead
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={subById.jobsCompleted.length}
            />
            <TableBody>
              {subById.jobsCompleted
                // .sort(getSorting(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    tabIndex={-1}
                    key={n.id}
                  >
                    <TableCell component="th" scope="row">
                      <Link to={{ pathname: '/admin/jobs', state: { sub: n.subject, grade: n.grade } }}>{n.subject}</Link>
                    </TableCell>
                    <TableCell numeric></TableCell>
                    <TableCell numeric>{n.grade}</TableCell>
                    <TableCell numeric></TableCell>
                    <TableCell numeric></TableCell>
                  </TableRow>
                ))}
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
          count={subById.jobsCompleted.length}
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
    );
  }
}

let counter = 0;
function createData(subject, location, grade, days, employee) {
  counter += 1;
  return {
    id: counter, subject, location, grade, days, employee,
  };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  {
    id: 'subject', numeric: false, disablePadding: false, label: 'Job Name',
  },
  {
    id: 'location', numeric: true, disablePadding: false, label: 'Location',
  },
  {
    id: 'grade', numeric: true, disablePadding: false, label: 'Grade',
  },
  {
    id: 'days', numeric: true, disablePadding: false, label: 'Days Remaining',
  },
  {
    id: 'employee', numeric: true, disablePadding: false, label: 'Employee',
  },
];

class AdminTodayTableHead extends React.Component {
  createSortHandler(property) {
    return (event) => {
      this.props.onRequestSort(event, property);
    };
  }

  render() {
    const {
      onSelectAllClick, order, orderBy, rowCount,
    } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => (
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
          ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

let AdminTodayTableToolbar = (props) => {
  const { classes } = props;
  return (
    <Toolbar
      className={classNames(classes.root)}
    >
      <div className={classes.title}>
        <Typography variant="title" id="tableTitle">
            Previous Jobs
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
  graphql(GET_ALL_SUBBYID, {
    options: () => ({
      variables: {
        id: localStorage.getItem('subId'),
      },
    }),
  }),
)(SubPreviousJobs);
