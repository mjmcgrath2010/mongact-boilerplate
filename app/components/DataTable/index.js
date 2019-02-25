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
import { Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import Modal from '../ui/Modal';

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

class DataTable extends React.Component {
  state = {
    modalOpen: false,
    selectedRows: [],
  };

  deleteRows = rows => {
    const { deleteRowHandler, data } = this.props;
    rows.map(row => deleteRowHandler(data[row.index][0]));

    this.setState({ modalOpen: false });
  };

  confirmDelete = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    const { classes, data, columns, opts, title } = this.props;
    const { selectedRows } = this.state;
    const options = {
      print: false,
      download: false,
      filter: !!data.length,
      filterType: 'checkbox',
      onRowsSelect: (row, rows) => this.setState({ selectedRows: rows }),
      customToolbarSelect: () => (
        <IconButton onClick={this.confirmDelete}>
          <Icon>star</Icon>
        </IconButton>
      ),
    };
    return (
      <Paper className={classes.root}>
        <Modal
          open={this.state.modalOpen}
          header="Confirm Delete"
          cancelText="Cancel"
          submitText="Delete"
          onCancel={() => this.setState({ modalOpen: false })}
          onConfirm={() => this.deleteRows(selectedRows)}
        >
          {`Are you sure you want to delete ${selectedRows.length} ${title}(s)`}
        </Modal>
        <MUIDataTable
          title={title}
          data={data}
          columns={columns}
          options={Object.assign(options, opts)}
        />
      </Paper>
    );
  }
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
