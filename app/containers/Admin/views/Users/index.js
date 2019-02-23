/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../../../../components/DataTable';
import { deleteUser } from '../../actions';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Users extends React.PureComponent {
  renderUserTable = () => {
    const { users, dispatch } = this.props;
    const headers = ['id', 'Username', 'Admin'];
    const data = [];
    users.map(user => {
      const { _id, username, admin } = user;
      return data.push([_id, username, admin.toString()]);
    });
    return (
      <DataTable
        deleteRowHandler={id => dispatch(deleteUser(id))}
        title="Users"
        columns={headers}
        data={data}
      />
    );
  };

  render() {
    return <div>{this.renderUserTable()}</div>;
  }
}

Users.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default Users;
