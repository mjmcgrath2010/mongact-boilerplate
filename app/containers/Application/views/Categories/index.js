/**
 *
 * Categories
 *
 */

import React from 'react';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router/immutable';
import Icon from '@material-ui/core/es/Icon/Icon';
import DataTable from '../../../../components/DataTable';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Categories extends React.Component {
  handleNavigation = (type, id) => () => {
    const { dispatch } = this.props;
    dispatch(push(`/app/categories/${id}/${type}`));
  };

  render() {
    const { categories } = this.props;
    const data = [];
    categories.map(category => {
      const { _id, name, description } = category;
      return data.push([
        name,
        description,
        <IconButton
          color="primary"
          onClick={this.handleNavigation('edit', _id)}
        >
          <Icon>edit</Icon>
        </IconButton>,
      ]);
    });
    return (
      <div>
        <DataTable
          title="Categories"
          data={data}
          columns={['Title', 'Description', 'Edit']}
        />
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Categories;
