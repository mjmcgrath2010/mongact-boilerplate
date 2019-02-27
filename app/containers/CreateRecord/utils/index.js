import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../../components/ui/Input';
import TextEditor from '../../../components/TextEditor';

const Wrapper = styled.div`
  width: 80%;
  margin: 1em auto;
  display: block;
  position: relative;
`;

const RenderInputs = props => {
  const { fields, onInputChange, onEditorChange, state } = props;
  return fields.map(field => {
    switch (field.type) {
      case 'input':
        return (
          <Wrapper key={field.name}>
            <Input
              name={field.name}
              label={field.label}
              onChange={onInputChange(field.name)}
              value={state[field.name]}
            />
          </Wrapper>
        );
      case 'editor':
        return (
          <Wrapper key={field.name}>
            <TextEditor
              handleChange={onEditorChange}
              value={state[field.name]}
            />
          </Wrapper>
        );
      default:
        return (
          <Wrapper key={field.name}>
            <Input
              name={field.name}
              label={field.label}
              onChange={onInputChange(field.name)}
              value={state[field.name]}
            />
          </Wrapper>
        );
    }
  });
};

RenderInputs.propTypes = {
  fields: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onEditorChange: PropTypes.func.isRequired,
};

export { RenderInputs };
