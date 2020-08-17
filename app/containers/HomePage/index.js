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
import { homepageInfoRequested, updateDataRequested } from './actions';

import messages from './messages';
import Loader from '../../components/Loader';
import { useStyles } from './components/styled';
import Boxs from '../../components/Boxs/Loadable';
import { API_TYPE } from '../../constants/spotify';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const { getHomepageInfo, loading, data, updateData } = props;
  const { recommendations, playlists, savedAlbums, savedTracks, topArtists, topTracks } = data;

  const boxs = [
    { title: <FormattedMessage {...messages.topTracks} />, data: topTracks, type: API_TYPE.TOP_TRACKS },
    { title: <FormattedMessage {...messages.yourPlaylist} />, data: playlists, type: API_TYPE.PLAYLIST },
    { title: <FormattedMessage {...messages.topArtists} />, data: topArtists, type: API_TYPE.TOP_ARTISTS },
    { title: <FormattedMessage {...messages.savedTracks} />, data: savedTracks, type: API_TYPE.SAVED_TRACKS },
    { title: <FormattedMessage {...messages.savedAlbums} />, data: savedAlbums, type: API_TYPE.SAVED_ALBUMS },
    { title: <FormattedMessage {...messages.recommended} />, data: recommendations, type: API_TYPE.RECOMMENDATIONS },
  ];

  const classes = useStyles();
  useEffect(() => {
    getHomepageInfo();
  }, []);

  return (
    <div className={classes.homePageContainer}>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {loading && <Loader />}
      {boxs.map(box => (
        <Boxs
          key={box.type}
          label={box.title}
          data={box.data}
          type={box.type}
          updateData={updateData}
        />
      ))}
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  getHomepageInfo: PropTypes.func,
  updateData: PropTypes.func,
  data: PropTypes.shape({
    recommendations: PropTypes.object,
    playlists: PropTypes.object,
    savedAlbums: PropTypes.object,
    savedTracks: PropTypes.object,
    topArtists: PropTypes.object,
    topTracks: PropTypes.object,
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
    updateData: (key, pagination, typePagination) => dispatch(updateDataRequested(key, pagination, typePagination)),
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
