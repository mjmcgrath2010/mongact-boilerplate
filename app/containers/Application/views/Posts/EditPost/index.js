/**
 *
 * EditPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextEditor from '../../../../../components/TextEditor';
import request from '../../../../../utils/request';
import Input from '../../../../../components/ui/Input';
import { deletePost, updatePost } from '../../../actions';
import Button from '../../../../../components/ui/Button';

// import styled from 'styled-components';

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
class EditPost extends React.Component {
  state = {
    content: '',
    title: '',
    id: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const id =
      location.state ||
      window.location.pathname.replace('/admin/posts/edit', '');
    this.setState({ id });
    request(`/post/${id}`, { method: 'GET' }).then(post =>
      this.setState(post[0]),
    );
  }

  handleEditorChange = value => {
    this.setState({ content: value });
  };

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  handleSave = () => {
    const { dispatch } = this.props;

    dispatch(updatePost(this.state));
  };

  handleDelete = () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(deletePost(id));
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <Wrapper>
          <Input
            name="title"
            label="Title"
            onChange={this.handleChange('title')}
            value={this.state.title}
          />
        </Wrapper>
        <Wrapper>
          <TextEditor handleChange={this.handleEditorChange} value={content} />
        </Wrapper>
        <Footer>
          <ButtonContainer>
            <Button
              color="secondary"
              variant="outlined"
              text="Delete"
              onClick={this.handleDelete}
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

EditPost.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default EditPost;
