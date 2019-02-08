/**
 *
 * Input
 *
 */

import React from 'react';
import MUIInput from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input(props) {
  const { name, helperText, label, onChange, value } = props;
  return (
    <FormControl variant="filled">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MUIInput
        value={value}
        onChange={val => onChange(val)}
        id={name}
        aria-describedby={`${name}-helper-text`}
      />
      <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
    </FormControl>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
