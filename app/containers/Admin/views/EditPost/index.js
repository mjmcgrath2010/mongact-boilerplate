/**
 *
 * EditPost
 *
 */

import React from 'react';
import TextEditor from '../../../../components/TextEditor';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class EditPost extends React.Component {
  state = {
    content: '',
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <TextEditor handleChange={val => console.log(val)} value={content} />
      </div>
    );
  }
}

EditPost.propTypes = {};

export default EditPost;
