/**
 *
 * Posts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/es/Icon/Icon';
import { push } from 'connected-react-router/immutable';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import DataTable from '../../../../components/ui/DataTable';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Posts extends React.PureComponent {
  handleNavigation = (type, id) => () => {
    const { dispatch } = this.props;
    dispatch(push({ pathname: `/admin/posts/edit/${id}`, state: id }));
  };

  render() {
    const { posts } = this.props;
    const data = [];
    posts.map(post => {
      const { _id, title, categories } = post;
      return data.push([
        title,
        categories,
        <IconButton
          color="primary"
          onClick={this.handleNavigation('edit', _id)}
        >
          <Icon>edit</Icon>
        </IconButton>,
        <IconButton
          color="primary"
          onClick={this.handleNavigation('view', _id)}
        >
          <Icon>remove_red_eye</Icon>
        </IconButton>,
      ]);
    });

    return (
      <div>
        <DataTable
          title="Posts"
          data={data}
          columns={['Title', 'Categories', 'Edit', 'View']}
        />
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Posts;
