import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the admin state domain
 */

const selectApplicationDomain = state => state.get('application', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Application
 */

const makeSelectApplication = () =>
  createSelector(selectApplicationDomain, substate => substate.toJS());

export default makeSelectApplication;
export { selectApplicationDomain };
