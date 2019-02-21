/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Users extends React.PureComponent {
  renderUserTable = () => {
    const { users } = this.props;

    if (users && users.length) {
      return users.map(user => (
        <div>
          <li>{user.username}</li>
        </div>
      ));
    }
    return null;
  };

  render() {
    return (
      <div>
        <h1>Hello, I am the Users component!</h1>
        {this.renderUserTable()}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
