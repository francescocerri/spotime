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
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { useStyles } from './components/styled';

import { getToken } from './selectors';
import reducer from './reducer';
import saga from './saga';
import GlobalStyle from '../../global-styles';

function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const { authToken } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Container>
    </div>
  );
}

App.propTypes = {
  authToken: PropTypes.string,
}
const mapStateToProps = createStructuredSelector({
  authToken: getToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
