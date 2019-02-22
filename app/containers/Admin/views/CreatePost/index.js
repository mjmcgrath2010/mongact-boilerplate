/**
 *
 * CreatePost
 *
 */

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/es/Typography/Typography';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router/immutable';
import TextEditor from '../../../../components/TextEditor';
import Input from '../../../../components/ui/Input';
import { createPost } from '../../actions';
import Button from '../../../../components/ui/Button';

const Wrapper = styled.div`
  width: 80%;
  margin: 1em auto;
  display: block;
  position: relative;
`;

const Footer = styled.div`
  width: 80%;
  margin: 4em auto 0;
  display: block;
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 30%;
  display: inline-block;
  margin: 1em 10%;
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

  handleCancel = () => {
    const { dispatch } = this.props;

    dispatch(push('/admin/posts'));
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Typography variant="subtitle1">Create a new Post</Typography>
          <Input
            name="title"
            label="Title"
            onChange={this.handleChange('title')}
            value={this.state.title}
          />
        </Wrapper>
        <Wrapper>
          <TextEditor
            handleChange={this.handleEditorChange}
            value={this.state.content}
          />
        </Wrapper>
        <Footer>
          <ButtonContainer>
            <Button
              color="secondary"
              variant="outlined"
              text="Cancel"
              onClick={this.handleCancel}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              color="primary"
              variant="outlined"
              text="Save"
              onClick={this.handleSave}
            />
          </ButtonContainer>
        </Footer>
      </div>
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CreatePost;
