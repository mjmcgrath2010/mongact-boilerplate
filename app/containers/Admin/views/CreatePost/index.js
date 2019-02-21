/**
 *
 * CreatePost
 *
 */

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/es/Typography/Typography';
import PropTypes from 'prop-types';
import TextEditor from '../../../../components/TextEditor';
import Input from '../../../../components/ui/Input';
import { createPost } from '../../actions';
import Button from '../../../../components/ui/Button';

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

  handleSave = () => {
    const { dispatch } = this.props;

    dispatch(
      createPost({
        content: this.state.content,
        title: this.state.title,
      }),
    );
  };

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Typography variant="title">Create a new Post</Typography>
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
        <Button text="Save" onClick={this.handleSave} />
      </div>
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CreatePost;
