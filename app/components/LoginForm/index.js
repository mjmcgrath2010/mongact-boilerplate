/**
 *
 * LoginForm
 *
 */

import React from 'react';
import Form from '../ui/Form';
// import PropTypes from 'prop-types';
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
const LoginForm = () => (
  <div>
    <Form
      submitText="Login"
      otherText="Create Account"
      onOther={() => console.log('Navigating to create account')}
      onSubmit={state => console.log(state)}
      fields={fields}
    />
    ;
  </div>
);

LoginForm.propTypes = {};

export default LoginForm;
