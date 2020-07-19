/**
 *
 * Authorization
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthorization, {
  makeSelectLoading,
  makeSelectToken,
} from './selectors';
import { tokenRequested, refreshTokenRequested } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { getUserCodeByLocation } from './utils';
import Loader from '../../components/Loader';
import { setCookie } from '../../utils/storage';
import { COOKIE_NAME } from '../../constants/config';

const TIME_MINOR = 300; // 5 minute
export function Authorization(props) {
  useInjectReducer({ key: 'authorization', reducer });
  useInjectSaga({ key: 'authorization', saga });
  const { getToken, loading, token, refreshToken } = props;

  useEffect(() => {
    const userCode = getUserCodeByLocation();
    if (userCode) {
      setCookie({ name: COOKIE_NAME, value: userCode });
      getToken(userCode);
    }
  }, []);

  /**
   * Refresh token based on expiredIn
   */
  useEffect(() => {
    if (token.expiresIn) {
      const timeNewToken = token.expiresIn - TIME_MINOR;
      const timeNewTokenMillisecond = timeNewToken * 1000;
      setTimeout(() => {
        refreshToken();
      }, timeNewTokenMillisecond);
    }
  }, [token]);

  return (
    <div>
      {loading && <Loader /> }
    </div>
  );
}

Authorization.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getToken: PropTypes.func,
  refreshToken: PropTypes.func,
  loading: PropTypes.bool,
  token: PropTypes.shape({
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
    expiresIn: PropTypes.number, // Second token duration
  }),
};

const mapStateToProps = createStructuredSelector({
  authorization: makeSelectAuthorization(),
  loading: makeSelectLoading(),
  token: makeSelectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getToken: (code) => dispatch(tokenRequested(code)),
    refreshToken: () => dispatch(refreshTokenRequested())
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
