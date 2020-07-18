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

export {
  makeSelectLocation,
  getNotification,
};
