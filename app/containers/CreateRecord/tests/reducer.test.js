import { fromJS } from 'immutable';
import createRecordReducer from '../reducer';

describe('createRecordReducer', () => {
  it('returns the initial state', () => {
    expect(createRecordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
