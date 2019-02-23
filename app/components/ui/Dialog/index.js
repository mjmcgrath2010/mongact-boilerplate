/**
 *
 * Dialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/es/SnackbarContent/SnackbarContent';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  root: {
    margin: theme.spacing.unit,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
});

class Dialog extends React.Component {
  state = {
    open: true,
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, message, variant } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={4500}
        >
          <SnackbarContent
            className={classNames(classes[variant], classes.root)}
            contentprops={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}

Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(styles)(Dialog);
