/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

// import Button from '../Button';
// import styled from 'styled-components';

class Form extends React.Component {
  state = {};

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  submitForm = e => {
    e.preventDefault();
    console.log('Submit:', this.state);
  };

  renderInputs = fields => {
    const inputs = fields.map(field => (
      <div>
        <Input
          name={field.name}
          label={field.label}
          onChange={this.handleChange(field.name)}
          value={this.state[field.name] || ''}
        />
      </div>
    ));
    return inputs;
  };

  render() {
    const { fields } = this.props;
    const Inputs = this.renderInputs(fields);
    return (
      <form onSubmit={this.submitForm}>
        {Inputs}
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.array,
};

export default Form;
