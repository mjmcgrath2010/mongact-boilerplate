/**
 *
 * CreatePost
 *
 */

import React from 'react';
import styled from 'styled-components';
import TextEditor from '../../../../components/TextEditor';
import Input from '../../../../components/ui/Input';
// import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
  width: 80%;
  margin: 1em auto;
  display: block;
  position: relative;
`;

/* eslint-disable react/prefer-stateless-function */
class CreatePost extends React.Component {
  state = {
    content: '',
    title: '',
  };

  handleEditorChange = value => {
    this.setState({ content: value });
  };

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Input
            name="title"
            label="Title"
            onChange={this.handleChange('title')}
            value={this.state.title}
          />
        </HeaderWrapper>
        <TextEditor
          handleChange={this.handleEditorChange}
          value={this.state.content}
        />
      </div>
    );
  }
}

CreatePost.propTypes = {};

export default CreatePost;
