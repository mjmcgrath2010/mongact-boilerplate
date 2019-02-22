/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Form from '../ui/Form';
// import styled from 'styled-components';

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

/* eslint-disable react/prefer-stateless-function */
const LoginForm = props => {
  const { onSubmit, createAccount } = props;
  return (
    <div>
      <Form
        header="Login"
        submitText="Login"
        otherText="Create Account"
        onOther={createAccount}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
};

export default LoginForm;
