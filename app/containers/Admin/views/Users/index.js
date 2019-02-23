/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../../../../components/DataTable';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Users extends React.PureComponent {
  renderUserTable = () => {
    const { users } = this.props;
    const headers = ['Username', 'Admin'];
    const data = [];
    users.map(user => data.push([user.username, user.admin.toString()]));
    return <DataTable title="Users" columns={headers} data={data} />;
  };

  render() {
    return <div>{this.renderUserTable()}</div>;
  }
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
