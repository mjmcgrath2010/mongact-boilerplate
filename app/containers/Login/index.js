/**
 *
 * Login
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
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from '../../components/LoginForm';

// Actions
import { loginRequest } from './actions';
import { checkAuth } from '../../utils/auth';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  state = {};

  componentWillUpdate(nextProps) {
    const { login } = nextProps;
    const { user } = login;
    if (user && user.token) {
      this.login(user.token);
    }
  }

  login = tken => {
    const { dispatch, login } = this.props;
    const token = tken || (login.user && login.user.token);

    if (!token) {
      return;
    }

    checkAuth(token).then(val => {
      if (val) {
        dispatch(push('/admin'));
      }
    });
  };

  createAccount = () => {
    const { dispatch } = this.props;

    dispatch(push('/create-account'));
  };

  render() {
    const { loginUser } = this.props;
    return (
      <div>
        <LoginForm
          onSubmit={val => loginUser(val)}
          createAccount={this.createAccount}
        />
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginUser: user => {
      dispatch(loginRequest(user));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
