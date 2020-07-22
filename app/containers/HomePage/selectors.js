import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectRecommendations = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.recommendations,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.loding,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectLoading,
  makeSelectRecommendations,
};
