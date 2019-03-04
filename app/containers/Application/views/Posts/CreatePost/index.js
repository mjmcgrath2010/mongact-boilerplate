/**
 *
 * CreatePost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router/immutable';
import { createPost } from '../../../actions';
import Document from '../../../Document/Loadable';

/* eslint-disable react/prefer-stateless-function */
class CreatePost extends React.Component {
  handleCancel = () => {
    const { dispatch } = this.props;

    dispatch(push('/app/posts'));
  };

  render() {
    return (
      <Document
        title="Create a Post"
        fields={[
          { name: 'title', type: 'input', label: 'Title' },
          { name: 'content', type: 'editor' },
        ]}
        action={createPost}
        handleCancel={this.handleCancel}
        cancelText="Go Back"
      />
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CreatePost;
