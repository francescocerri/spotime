/**
 *
 * HomePage
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
import makeSelectHomePage,
{
  makeSelectLoading,
  makeSelectRecommendations,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { recommendationsRequested } from './actions';

import messages from './messages';
import Loader from '../../components/Loader';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const { getRecommendations, recommendations, loading } = props;
  // GET HOMEPAGE DATA
  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {loading && <Loader />}
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  recommendations: PropTypes.array,
  getRecommendations: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  loading: makeSelectLoading(),
  recommendations: makeSelectRecommendations(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRecommendations: () => dispatch(recommendationsRequested()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
