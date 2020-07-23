/**
 *
 * Authorization
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthorization from './selectors';
import { tokenRequested } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

import { getUserCodeByLocation } from './utils';

export function Authorization(props) {
  useInjectReducer({ key: 'authorization', reducer });
  useInjectSaga({ key: 'authorization', saga });
  const { getToken } = props;

  useEffect(() => {
    const userCode = getUserCodeByLocation();
    if (userCode) getToken(userCode);
  }, []);

  return <div />;
}

Authorization.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getToken: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  authorization: makeSelectAuthorization(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getToken: code => dispatch(tokenRequested(code)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Authorization);
