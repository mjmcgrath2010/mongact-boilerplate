/**
 *
 * EditPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from '../../../../components/TextEditor';
import request from '../../../../utils/request';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class EditPost extends React.Component {
  state = {
    content: '',
  };

  componentDidMount() {
    const { location } = this.props;
    request(`/api/endpoints/post/${location.state}`, { method: 'GET' }).then(
      post => this.setState(post[0]),
    );
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <TextEditor handleChange={val => console.log(val)} value={content} />
      </div>
    );
  }
}

EditPost.propTypes = {
  location: PropTypes.object.isRequired,
};

export default EditPost;
