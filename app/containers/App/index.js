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
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';

import { useStyles } from './components/styled';
import { getNotification, makeSelectLoading, makeSelectToken, makeSpotifyUri } from './selectors';
import { resetGlobalMessage, refreshTokenRequested } from './actions';
import reducer from './reducer';
import saga from './saga';

import Notification from '../../components/Notification/Loadable';
import Header from '../../components/Header/Loadable';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer/Loadable';
import GlobalStyle from '../../global-styles';
import routes from '../../routes';
import { setRequestAuth } from './utils';
import { getCookie } from '../../utils/storage';
import { COOKIE } from '../../constants/config';
import { paths } from '../../routes/utils/paths';

const MINUTE_REFRESH_TOKEN = 5; // 5 minute
function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const {
    notification,
    resetNotification,
    token,
    refreshToken,
    loading,
    location,
    spotifyUri,
  } = props;
  const classes = useStyles(props);
  const history = useHistory();

  /**
   * Refresh token before expired
   */
  useEffect(() => {
    let timer = null;
    // auth is not protected route
    if (!token.accessToken && location.pathname !== paths.auth) history.push(paths.login);
    else setRequestAuth(token.accessToken);

    if (token.expiresIn) {
      const tokenExpiration = getCookie(COOKIE.EXP_DATE);
      const minutesFromNow = moment(tokenExpiration).diff(moment(), 'minutes');
      if (minutesFromNow < MINUTE_REFRESH_TOKEN) refreshToken();
      else {
        const timeNewToken = minutesFromNow - MINUTE_REFRESH_TOKEN;
        const timeNewTokenMillisecond = timeNewToken * 60000;
        timer = setTimeout(() => {
          refreshToken();
        }, timeNewTokenMillisecond);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [token]);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Header token={token} />
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
          <Footer spotifyUri={spotifyUri} />
        </Grid>
        <GlobalStyle />
      </Container>
    </div>
  );
}

App.propTypes = {
  notification: PropTypes.object,
  location: PropTypes.object,
  resetNotification: PropTypes.func,
  loading: PropTypes.bool,
  spotifyUri: PropTypes.string,
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
  spotifyUri: makeSpotifyUri(),
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
