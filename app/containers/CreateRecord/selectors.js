import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createRecord state domain
 */

const selectCreateRecordDomain = state =>
  state.get('createRecord', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateRecord
 */

const makeSelectCreateRecord = () =>
  createSelector(selectCreateRecordDomain, substate => substate.toJS());

export default makeSelectCreateRecord;
export { selectCreateRecordDomain };
