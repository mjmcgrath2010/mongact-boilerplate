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
  <Form onSubmit={state => console.log(state)} fields={fields} />
);

LoginForm.propTypes = {};

export default LoginForm;
