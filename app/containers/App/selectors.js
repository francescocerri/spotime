import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectApp = state => state.app || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const getNotification = () =>
  createSelector(
    selectApp,
    globalState => globalState.notification,
  );

const makeSelectLoading = () =>
  createSelector(
    selectApp,
    substate => substate.loading,
  );

const makeSelectToken = () =>
  createSelector(
    selectApp,
    substate => substate.token,
  )

export {
  makeSelectLocation,
  getNotification,
  makeSelectLoading,
  makeSelectToken,
};
