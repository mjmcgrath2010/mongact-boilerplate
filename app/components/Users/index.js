/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../ui/DataTable';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Users extends React.PureComponent {
  renderUserTable = () => {
    const { users } = this.props;
    return <DataTable rows={users} />;
  };

  render() {
    return <div>{this.renderUserTable()}</div>;
  }
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
