/**
 *
 * Admin
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import NavBar from '../../components/NavBar';
import Form from '../../components/ui/Form';

const fields = [
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
  },
];

/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar viewName="Admin" />
        <Form fields={fields} />
      </div>
    );
  }
}

Admin.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
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

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Admin);
