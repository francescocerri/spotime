import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authorization state domain
 */

const selectAuthorizationDomain = state => state.authorization || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authorization
 */

const makeSelectAuthorization = () =>
  createSelector(
    selectAuthorizationDomain,
    substate => substate,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAuthorizationDomain,
    substate => substate.loading,
  );

const makeSelectToken = () =>
  createSelector(
    selectAuthorizationDomain,
    substate => substate.token,
  );

export default makeSelectAuthorization;
export {
  selectAuthorizationDomain,
  makeSelectLoading,
  makeSelectToken
};
