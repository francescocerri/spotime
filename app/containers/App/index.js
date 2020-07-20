/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useStyles } from './components/styled';
import { getNotification, makeSelectLoading, makeSelectToken } from './selectors';
import { resetGlobalMessage, refreshTokenRequested } from './actions';
import reducer from './reducer';
import saga from './saga';

import Notification from '../../components/Notification/Loadable';
import Loader from '../../components/Loader';
import GlobalStyle from '../../global-styles';
import routes from '../../routes';

const TIME_MINOR = 300; // 5 minute
function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const {
    notification,
    resetNotification,
    token,
    refreshToken,
    loading,
  } = props;
  const classes = useStyles(props);

  /**
   * Refresh token before expired
   */
  useEffect(() => {
    let timer = null;
    if (token.expiresIn) {
      const timeNewToken = token.expiresIn - TIME_MINOR;
      const timeNewTokenMillisecond = timeNewToken * 1000;
      timer = setTimeout(() => {
        refreshToken();
      }, timeNewTokenMillisecond);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [token]);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes['switch-container']}>
          {loading && <Loader />}
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path || route.label}
                exact={route.exact}
                path={route.path}
                strict={route.strict}
                render={routeProps => {
                  const Component = route.component;
                  return (
                    <Component
                      {...routeProps}
                      routeParams={route.params || {}}
                    />
                  );
                }}
              />
            ))}
          </Switch>
          { notification && !!Object.keys(notification).length &&
            <Notification {...notification} closeNotification={resetNotification} />
          }
        </Grid>
        <GlobalStyle />
      </Container>
    </div>
  );
}

App.propTypes = {
  notification: PropTypes.object,
  resetNotification: PropTypes.func,
  loading: PropTypes.bool,
  token: PropTypes.shape({
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
    expiresIn: PropTypes.number, // Second token duration
  }),
  refreshToken: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  notification: getNotification(),
  loading: makeSelectLoading(),
  token: makeSelectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetNotification: () => dispatch(resetGlobalMessage()),
    refreshToken: () => dispatch(refreshTokenRequested()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
  memo,
)(App);
