/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './components/styled';
import { FRAME_CONFIG } from '../../constants/config';
import { SPOTIFY_URI } from '../../constants/spotify';

function Footer(props) {
  const { spotifyUri } = props;
  const embedUri = spotifyUri && spotifyUri.replace(SPOTIFY_URI.ORIGINAL , SPOTIFY_URI.REPLACED)
  const classes = useStyles(props);
  return (
    embedUri && (
      <div className={classes.container}>
        <iframe
          src={embedUri}
          width={FRAME_CONFIG.WIDTH}
          height={FRAME_CONFIG.HEIGHT}
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          title="songs"
        />
      </div>
    )
  );
}

Footer.propTypes = {
  spotifyUri: PropTypes.string,
};

export default memo(Footer);
