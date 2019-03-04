/**
 *
 * EditPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { deletePost, updatePost } from '../../../actions';
import { Document } from '../../../Document';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class EditPost extends React.Component {
  state = {
    id: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const id =
      location.state || window.location.pathname.replace('/app/posts/edit', '');
    this.setState({ id });
  }

  handleDelete = () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(deletePost(id));
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <Document
          title="Edit a Post"
          action={updatePost}
          handleCancel={this.handleDelete}
          fields={[
            { name: 'title', type: 'input', label: 'Title' },
            { name: 'content', type: 'editor' },
          ]}
          update={{
            id,
            path: 'post',
          }}
          cancelText="Delete Post"
        />
      </div>
    );
  }
}

EditPost.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default EditPost;
