/**
 *
 * EditRecord
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditRecord from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class EditRecord extends React.Component {
  render() {
    return <div />;
  }
}

EditRecord.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editRecord: makeSelectEditRecord(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'editRecord', reducer });
const withSaga = injectSaga({ key: 'editRecord', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditRecord);
