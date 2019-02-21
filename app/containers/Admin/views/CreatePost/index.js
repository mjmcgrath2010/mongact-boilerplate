/**
 *
 * CreatePost
 *
 */

import React from 'react';
import TextEditor from '../../../../components/TextEditor';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class CreatePost extends React.Component {
  state = {
    text: '',
  };

  handleChange = value => {
    this.setState({ text: value });
  };

  render() {
    return (
      <div>
        <h1>Create a post</h1>
        <TextEditor handleChange={this.handleChange} value={this.state.text} />
      </div>
    );
  }
}

CreatePost.propTypes = {};

export default CreatePost;
