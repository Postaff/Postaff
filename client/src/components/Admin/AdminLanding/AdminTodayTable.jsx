import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(name, location, grade, days, employee) {
  counter += 1;
  return {
    id: counter, name, location, grade, days, employee,
  };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  {
    id: 'name', numeric: false, disablePadding: false, label: 'Job',
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


const CustomTableCell = withStyles(theme => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

AdminTodayTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
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

let AdminTodayTableToolbar = (props) => {
  const { classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root)}
    >
      <div className={classes.title}>
          <Typography variant="title" id="tableTitle">
            Today's Jobs
          </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
      </div>
    </Toolbar>
  );
};

AdminTodayTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

AdminTodayTableToolbar = withStyles(toolbarStyles)(AdminTodayTableToolbar);

const styles = theme => ({
  root: {
    width: '88%',
    marginTop: theme.spacing.unit * 3,
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

class AdminTodayTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'location',
      data: [
        createData('Math Sub', 'Abernathy', 4, 3, 'Twohy., Rachel'),
        createData('General Ed', 'West Middle', 7, 1, 'Fields, Dav'),
        createData('English', 'Ecclan', 8, 2, 'Dougan, Mitch'),
        createData('Algebra 1', 'Fred Zhoul High', 9, 1, 'Smith, Loni'),
        createData('Special Ed', 'GingerMead', 11, 3, 'Simpson, Cristal'),
        createData('Drama Teacher', 'Honeycroft', 9, 4, 'Carrera, Fernanda'),
        createData('AP HIstory', 'Icram High', 10, 16, 'Longo, Doug'),
        createData('Social Science', 'Jill Van Unk Middle', 8, 14, 'Dang, Nic'),
        createData('General Ed', 'Kitt Elementary', 2, 8, 'Zemcoy, Fern'),
        createData('English', 'Politech High', 11, 3, 'Vogel, Sinra'),
        createData('General Ed', 'Marsh High', 10, 2, 'Stein, Gail'),
        createData('P.E.', 'Norwood Middle', 6, 9, 'Austero, June'),
        createData('English', 'Orton', 5, 2, 'Blum, Caithe'),
      ],
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

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  handleSelectAllClick(event, checked) {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  }

  handleClick(event, id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const {
      data, order, orderBy, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

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
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell component="th" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.location}</TableCell>
                      <TableCell numeric>{n.grade}</TableCell>
                      <TableCell numeric>{n.days}</TableCell>
                      <TableCell numeric>{n.employee}</TableCell>
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
          count={data.length}
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

AdminTodayTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminTodayTable);
