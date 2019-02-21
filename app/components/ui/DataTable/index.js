/**
 *
 * DataTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const createHeader = props => {
  const { rows } = props;
  const headers = Object.keys(rows[0]);
  if (headers.length) {
    return headers.map(header => (
      <TableCell align="center" key={header}>
        {header.toUpperCase()}
      </TableCell>
    ));
  }
  return null;
};

const createRow = data => {
  const array = Object.keys(data);
  return array.map(key => (
    <TableCell key={Math.random()} align="right">
      {data[key].toString()}
    </TableCell>
  ));
};

const createRows = props => {
  const { rows } = props;
  if (rows.length) {
    return rows.map(row => (
      <TableRow key={Math.random()}>{createRow(row)}</TableRow>
    ));
  }
  return null;
};

// import styled from 'styled-components';

function DataTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>{createHeader(props)}</TableRow>
        </TableHead>
        <TableBody>{createRows(props)}</TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);
