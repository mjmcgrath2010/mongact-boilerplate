/**
 *
 * TextEditor
 *
 */

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditorWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

/* eslint-disable react/prefer-stateless-function */
class TextEditor extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <EditorWrapper>
        <ReactQuill
          modules={modules}
          formats={formats}
          style={{ height: '400px' }}
          value={value}
          onChange={handleChange}
        />
      </EditorWrapper>
    );
  }
}

TextEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextEditor;
