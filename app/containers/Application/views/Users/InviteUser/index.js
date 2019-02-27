/**
 *
 * InviteUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../../../../components/ui/Form';
import { createUser } from '../../../actions';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

const fields = [
  {
    name: 'username',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
  },
];
class InviteUser extends React.PureComponent {
  handleInvite = user => {
    const { dispatch } = this.props;
    dispatch(createUser(user));
  };

  render() {
    return (
      <div>
        <Form
          fields={fields}
          onSubmit={this.handleInvite}
          submitText="INVITE"
          header="Add new user"
        />
      </div>
    );
  }
}

InviteUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default InviteUser;
