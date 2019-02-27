/**
 *
 * Application
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
import makeSelectApplication from './selectors';
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
import InviteUser from './views/Users/InviteUser';
import CreatePost from './views/Posts/CreatePost';
import EditPost from './views/Posts/EditPost';
import Categories from './views/Categories';
import { makeSelectLocation } from '../App/selectors';
import Dialog from '../../components/ui/Dialog';

/* eslint-disable react/prefer-stateless-function */
export class Application extends React.PureComponent {
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
    const { dispatch, auth, application, location } = this.props;
    const FlashMessages = () => {
      if (application.successMessage) {
        setTimeout(() => {
          dispatch(clearMessages());
        }, 5000);
        return (
          <Dialog variant="success" message={application.successMessage} />
        );
      }
      if (application.errorMessage) {
        setTimeout(() => {
          dispatch(clearMessages());
        }, 5000);
        return <Dialog variant="error" message={application.errorMessage} />;
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
          path="/app/posts"
          render={() => <Posts dispatch={dispatch} posts={application.posts} />}
        />
        <Route
          exact
          path="/app/posts/create"
          render={() => <CreatePost dispatch={dispatch} />}
        />
        <Route
          exact
          path="/app/posts/edit/:id"
          render={() => <EditPost location={location} dispatch={dispatch} />}
        />
        <Route
          exact
          path="/app/users"
          render={() => <Users dispatch={dispatch} users={application.users} />}
        />
        <Route
          exact
          path="/app/invite-user"
          render={() => <InviteUser dispatch={dispatch} />}
        />
        <Route
          exact
          path="/app/categories"
          render={() => (
            <Categories
              dispatch={dispatch}
              categories={application.categories}
            />
          )}
        />
      </div>
    );
  }
}

Application.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
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

const withReducer = injectReducer({ key: 'application', reducer });
const withSaga = injectSaga({ key: 'application', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Application);
