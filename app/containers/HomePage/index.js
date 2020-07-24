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
  makeSelectData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { homepageInfoRequested } from './actions';

import messages from './messages';
import Loader from '../../components/Loader';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const { getHomepageInfo, loading, data } = props;
  const { recommendations, playlists, savedAlbums, savedTracks, topArtists, topTracks } = data;

  useEffect(() => {
    getHomepageInfo();
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
  getHomepageInfo: PropTypes.func,
  data: PropTypes.shape({
    recommendations: PropTypes.array,
    playlists: PropTypes.array,
    savedAlbums: PropTypes.array,
    savedTracks: PropTypes.array,
    topArtists: PropTypes.array,
    topTracks: PropTypes.array,
  }),
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  loading: makeSelectLoading(),
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getHomepageInfo: () => dispatch(homepageInfoRequested()),
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
