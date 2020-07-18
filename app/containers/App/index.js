/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useStyles } from './components/styled';
import { getNotification } from './selectors';
import { resetGlobalMessage } from './actions';
import reducer from './reducer';
import saga from './saga';

import Notification from '../../components/Notification/Loadable';
import GlobalStyle from '../../global-styles';
import routes from '../../routes';

function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const { notification, resetNotification } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes['switch-container']}>
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
};
const mapStateToProps = createStructuredSelector({
  notification: getNotification(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetNotification: () => dispatch(resetGlobalMessage()),
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
