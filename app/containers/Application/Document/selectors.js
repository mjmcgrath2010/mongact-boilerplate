import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createRecord state domain
 */

const selectDoumentDomain = state => state.get('createRecord', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Document
 */

const makeSelectDoument = () =>
  createSelector(
    selectDoumentDomain,
    substate => substate.toJS(),
  );

export default makeSelectDoument;
export { selectDoumentDomain };
