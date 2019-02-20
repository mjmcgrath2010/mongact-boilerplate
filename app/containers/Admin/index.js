/**
 *
 * Admin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router/immutable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import NavBar from '../../components/NavBar';
import { checkAuth } from '../../utils/auth';
import makeSelectLogin from '../Login/selectors';
import { LOGOUT_REQUEST } from '../Login/constants';
import { handleLogout } from '../Login/actions';

/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  componentDidMount() {
    const { auth, dispatch } = this.props;
    const token = auth.user && auth.user.token;
    checkAuth(token).then(val => {
      if (!val) {
        dispatch(push('/login'));
      }
    });
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.auth.user.token) {
      this.handleAuth();
    }
  }

  handleAuth = () => {
    const { dispatch, auth } = this.props;
    const token = auth.user && auth.user.token;

    checkAuth(token).then(val => {
      if (val) {
        dispatch(handleLogout());
        dispatch(push('/login'));
      }
    });
  };

  render() {
    const { dispatch, auth } = this.props;
    return (
      <div>
        <NavBar
          loggedIn={!!auth.user.token}
          onLogout={() => dispatch({ type: LOGOUT_REQUEST })}
          viewName="Admin"
        />
      </div>
    );
  }
}

Admin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
  auth: makeSelectLogin(),
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
