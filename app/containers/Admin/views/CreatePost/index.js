/**
 *
 * CreatePost
 *
 */

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
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
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
}

CreatePost.propTypes = {};

export default CreatePost;
