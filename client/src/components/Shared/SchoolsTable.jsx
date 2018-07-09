import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TablePagination, TableRow,
TableSortLabel, Avatar, Typography, Paper, Tooltip, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {compose} from 'react-apollo';
import _ from 'lodash';
import { lighten } from '@material-ui/core/styles/colorManipulator';

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
    width: '100%',
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
  bigAvatar: {
    width: 100,
    height: 100,
  }
});

class SchoolTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'name',
      data: [],
      page: 0,
      rowsPerPage: 10,
    };
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
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

  handleChangePage (event, page) {
    this.setState({ page });
  };

  handleChangeRowsPerPage (event) {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    let tableData = [];
    _.each(this.props.schools, (school)=>{
      tableData.push(createData(
        school.id, 
        school.school_img, 
        school.school_name, 
        `${school.phone} ext${school.phone_ext}`, 
        `${school.address_city} ,${school.address_state}`, 
        school.contact_email
      ))
    })
    const { classes } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    console.log(this.props.schools)
    return (
      <Fragment>
        <Grid item xs={12}>
          <Paper elevation={4} className={classes.root}>
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
                          tabIndex={-1}
                          key={n.id}
                        >
                          <TableCell>
                            <img className={classes.bigAvatar} src={n.photo}/>
                          </TableCell>
                          <TableCell component='th' scope='row'>
                            <Link to={{pathname:`/admin/school/${n.id}`}}>{n.name}</Link>
                          </TableCell>
                          <TableCell>{n.phone}</TableCell>
                          <TableCell>{n.location}</TableCell>
                          <TableCell>{n.email}</TableCell>
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

function createData(id, photo, name, phone, location, email) {
  return { 
    id, photo, name, phone, location, email
  };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'avatar', numeric: false, disablePadding: false, label: '' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'location', numeric: false, disablePadding: false, label: 'Location' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
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

export default compose(
  withStyles(tableStyle),
)(SchoolTable);
