import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editRecord state domain
 */

const selectEditRecordDomain = state => state.get('editRecord', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditRecord
 */

const makeSelectEditRecord = () =>
  createSelector(selectEditRecordDomain, substate => substate.toJS());

export default makeSelectEditRecord;
export { selectEditRecordDomain };
