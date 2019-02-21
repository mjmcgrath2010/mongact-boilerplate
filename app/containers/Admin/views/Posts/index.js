/**
 *
 * Posts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../../../../components/ui/DataTable';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Posts extends React.PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <DataTable rows={posts} />
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
