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
import { clearMessages, requestUserData } from './actions';
import adminNavRoutes from './adminNavRoutes';
import Posts from './views/Posts';
import Users from './views/Users';
import InviteUser from './views/InviteUser';
import CreatePost from './views/CreatePost';
import EditPost from './views/EditPost';
import Categories from './views/Categories';
import { makeSelectLocation } from '../App/selectors';
import Dialog from '../../components/ui/Dialog';

/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  componentDidMount() {
    const { auth, dispatch, fetchUserData } = this.props;
    const token = auth.user && auth.user.token;

    if (!token) {
      return dispatch(
        push({ pathname: '/login', state: window.location.pathname }),
      );
    }

    return checkAuth(token).then(val => {
      if (!val) {
        return dispatch(
          push({ pathname: '/login', state: window.location.pathname }),
        );
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
    dispatch(push({ pathname: '/login', state: window.location.pathname }));
  };

  render() {
    const { dispatch, auth, admin, location } = this.props;
    const FlashMessages = () => {
      if (admin.successMessage) {
        setTimeout(() => {
          dispatch(clearMessages());
        }, 5000);
        return <Dialog variant="success" message={admin.successMessage} />;
      }
      if (admin.errorMessage) {
        setTimeout(() => {
          dispatch(clearMessages());
        }, 5000);
        return <Dialog variant="error" message={admin.errorMessage} />;
      }
      return null;
    };
    return (
      <div>
        <NavBar
          userLinks={adminNavRoutes.userRoutes}
          adminLinks={auth.user.admin ? adminNavRoutes.adminRoutes : []}
          loggedIn={!!auth.user.token}
          onLogout={() => dispatch({ type: LOGOUT_REQUEST })}
          viewName="Admin"
          dispatch={dispatch}
        />
        <FlashMessages />
        <Route
          exact
          path="/admin/posts"
          render={() => <Posts dispatch={dispatch} posts={admin.posts} />}
        />
        <Route
          exact
          path="/admin/posts/create"
          render={() => <CreatePost dispatch={dispatch} />}
        />
        <Route
          exact
          path="/admin/posts/edit/:id"
          render={() => <EditPost location={location} dispatch={dispatch} />}
        />
        <Route
          exact
          path="/admin/users"
          render={() => <Users users={admin.users} />}
        />
        <Route exact path="/admin/invite-user" render={() => <InviteUser />} />
        <Route
          exact
          path="/admin/categories"
          render={() => (
            <Categories dispatch={dispatch} categories={admin.categories} />
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
  admin: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
  auth: makeSelectLogin(),
  location: makeSelectLocation(),
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
