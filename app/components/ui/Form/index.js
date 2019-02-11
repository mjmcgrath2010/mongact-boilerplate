/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

// import Button from '../Button';

const FormWrapper = styled.form`
  width: 80%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

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
          fullwidth="true"
        />
      </div>
    ));

  render() {
    const { fields } = this.props;
    return (
      <FormWrapper onSubmit={this.submitForm}>
        {this.renderInputs(fields)}
        <Button
          variant="center"
          type="submit"
          text="Login"
          size="large"
          onClick={this.submitForm}
        />
      </FormWrapper>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
