/**
 *
 * Authorization
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthorization from './selectors';
import { tokenRequested } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { getUserCodeByLocation } from './utils';
import { setCookie } from '../../utils/storage';
import { COOKIE_NAME } from '../../constants/config';

export function Authorization(props) {
  useInjectReducer({ key: 'authorization', reducer });
  useInjectSaga({ key: 'authorization', saga });
  const { getToken } = props;

  useEffect(() => {
    const userCode = getUserCodeByLocation();
    if (userCode) {
      setCookie({ name: COOKIE_NAME, value: userCode });
      getToken(userCode);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Authorization</title>
        <meta name="description" content="Description of Authorization" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Authorization.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getToken: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authorization: makeSelectAuthorization(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getToken: (code) => dispatch(tokenRequested(code))
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
