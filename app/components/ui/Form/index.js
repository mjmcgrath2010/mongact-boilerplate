/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

// import Button from '../Button';
// import styled from 'styled-components';

class Form extends React.Component {
  state = {};

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  renderInputs = fields =>
    fields.map(field => (
      <div key={field.name}>
        <Input
          name={field.name}
          label={field.label}
          onChange={this.handleChange(field.name)}
          value={this.state[field.name] || ''}
        />
      </div>
    ));

  render() {
    const { fields } = this.props;
    return (
      <form onSubmit={this.submitForm}>
        {this.renderInputs(fields)}
        <Button type="submit" text="Hello" onClick={this.submitForm} />
      </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
