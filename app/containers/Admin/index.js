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
import { Route } from 'react-router-dom';

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
import { requestUserData } from './actions';
import adminNavRoutes from './adminNavRoutes';
import Posts from '../../components/Posts';
import Users from '../../components/Users';

/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  componentDidMount() {
    const { auth, dispatch, fetchUserData } = this.props;
    const token = auth.user && auth.user.token;

    if (!token) {
      return dispatch(push('/login'));
    }

    return checkAuth(token).then(val => {
      if (!val) {
        return dispatch(push('/login'));
      }
      return fetchUserData();
    });
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.auth.user.token) {
      this.handleAuth();
    }
  }

  handleAuth = () => {
    const { dispatch } = this.props;
    dispatch(handleLogout());
    dispatch(push('/login'));
  };

  render() {
    const { dispatch, auth } = this.props;
    return (
      <div>
        <NavBar
          userLinks={adminNavRoutes.userRoutes}
          adminLinks={adminNavRoutes.adminRoutes}
          loggedIn={!!auth.user.token}
          onLogout={() => dispatch({ type: LOGOUT_REQUEST })}
          viewName="Admin"
          dispatch={dispatch}
        />
        <Route path="/admin/posts" component={Posts} />
        <Route
          path="/admin/users"
          render={() => (
            <Users
              users={[
                { username: 'Mike' },
                { username: 'Mike' },
                { username: 'Mike' },
              ]}
            />
          )}
        />
      </div>
    );
  }
}

Admin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  fetchUserData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
  auth: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchUserData: () => dispatch(requestUserData()),
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
