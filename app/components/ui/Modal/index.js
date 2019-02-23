/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '../Button';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class Modal extends React.Component {
  handleClose = () => {
    const { onCancel } = this.props;
    onCancel();
  };

  handleConfirm = () => {
    const { onConfirm } = this.props;
    onConfirm();
  };

  render() {
    const { children, open, cancelText, submitText, header } = this.props;
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleClose}
            color="secondary"
            variant="outlined"
            text={cancelText}
          />
          <Button
            onClick={this.handleConfirm}
            color="primary"
            variant="outlined"
            text={submitText}
          />
        </DialogActions>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool.isRequired,
  cancelText: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};

export default Modal;
