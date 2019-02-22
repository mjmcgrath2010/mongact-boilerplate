/**
 *
 * DataTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  root: {
    width: '85%',
    margin: '1em auto',
    position: 'relative',
    display: 'block',
    overflowX: 'auto',
  },
});

// import styled from 'styled-components';

function DataTable(props) {
  const { classes, data, columns, opts, title } = props;
  const options = {
    filterType: 'checkbox',
  };
  return (
    <Paper className={classes.root}>
      <MUIDataTable title={title} data={data} columns={columns} options={opts || options} />
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  opts: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(DataTable);