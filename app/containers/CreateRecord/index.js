/**
 *
 * CreateRecord
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/es/Typography/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateRecord from './selectors';
import reducer from './reducer';
import saga from './saga';
import Input from '../../components/ui/Input';
import TextEditor from '../../components/TextEditor';
import Button from '../../components/ui/Button';

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
export class CreateRecord extends React.Component {
  state = {
    content: '',
    title: '',
  };

  componentDidMount() {
    console.log(this.props);
    this.setup();
  }

  setup() {
    const { fields } = this.props;

    fields.map(field => this.setState({ [field]: '' }));
  }

  handleEditorChange = value => {
    this.setState({ content: value });
  };

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  handleSave = () => {
    const { dispatch, action, fields } = this.props;
    const payload = {};
    // eslint-disable-next-line no-return-assign
    fields.map(field => (payload[field] = this.state[field]));

    dispatch(action(payload));
  };

  render() {
    const { handleCancel } = this.props;
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
              onClick={handleCancel}
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

CreateRecord.propTypes = {
  action: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createRecord: makeSelectCreateRecord(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'createRecord', reducer });
const withSaga = injectSaga({ key: 'createRecord', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateRecord);
