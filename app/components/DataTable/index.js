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
  const { classes, data, columns, opts, title, deleteRowHandler } = props;
  const options = {
    print: false,
    download: false,
    filterType: 'checkbox',
    onRowsDelete: array => {
      if (array.data) {
        return array.data.map(row => deleteRowHandler(data[row.index][0]));
      }
      return false;
    },
  };
  return (
    <Paper className={classes.root}>
      <MUIDataTable
        onRowsDelete={rows => console.log(rows)}
        title={title}
        data={data}
        columns={columns}
        options={Object.assign(options, opts)}
      />
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  opts: PropTypes.object,
  title: PropTypes.string.isRequired,
  deleteRowHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(DataTable);
