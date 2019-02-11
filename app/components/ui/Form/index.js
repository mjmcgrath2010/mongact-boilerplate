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

const FormWrapper = styled.form`
  width: 80%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  padding: 0 2em;
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

  renderActionButtons = props => {
    const { onOther, submitText, otherText } = props;
    if (otherText) {
      return (
        <ButtonGroup>
          <ButtonWrapper>
            <Button
              color="secondary"
              variant="outlined"
              text={otherText}
              size="large"
              onClick={onOther}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              color="primary"
              variant="outlined"
              type="submit"
              text={submitText}
              size="large"
              onClick={this.submitForm}
            />
          </ButtonWrapper>
        </ButtonGroup>
      );
    }
    return (
      <ButtonGroup>
        <ButtonWrapper>
          <Button
            color="primary"
            variant="outlined"
            type="submit"
            text={submitText}
            size="large"
            onClick={this.submitForm}
          />
        </ButtonWrapper>
      </ButtonGroup>
    );
  };

  render() {
    const { fields, ...rest } = this.props;
    return (
      <FormWrapper onSubmit={this.submitForm}>
        {this.renderInputs(fields)}
        {this.renderActionButtons(rest)}
      </FormWrapper>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onOther: PropTypes.func,
  otherText: PropTypes.string,
  submitText: PropTypes.string.isRequired,
};

export default Form;
