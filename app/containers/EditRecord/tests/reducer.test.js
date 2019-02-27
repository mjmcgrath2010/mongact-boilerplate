import { fromJS } from 'immutable';
import editRecordReducer from '../reducer';

describe('editRecordReducer', () => {
  it('returns the initial state', () => {
    expect(editRecordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
