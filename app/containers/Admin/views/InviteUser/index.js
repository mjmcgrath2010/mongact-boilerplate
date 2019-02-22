/**
 *
 * InviteUser
 *
 */

import React from 'react';
import Form from '../../../../components/ui/Form';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

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
class InviteUser extends React.PureComponent {
  handleInvite = user => {
    console.log(user);
  };

  render() {
    return (
      <div>
        <Form fields={fields} onSubmit={this.handleInvite} submitText="INVITE" header="Add new user" />
      </div>
    );
  }
}

InviteUser.propTypes = {};

export default InviteUser;
