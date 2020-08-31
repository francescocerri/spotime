import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from '../styled';
import { Grid } from '@material-ui/core';
import { getInfoByType } from '../../utils';

function Box(props) {
  const classes = useStyles(props);
  const { playSong } = props;
  const { images, albumName, artist, name, uri } = getInfoByType(props);
  const image = images[1] ? images[1].url : images[0].url;

  return (
    <Grid item lg={2} md={3} xs={6} onClick={() => playSong(uri)}>
      <div className={classes.gridTitle}>
        <div className={classes.descriptionContent}>
          <div className={classes.descriptionArea}>
            <p className={classes.title}>{name}</p>
            {(albumName || artist) && <span className={classes.subTitle}>{`${albumName ? `${albumName}, ` : '' } ${artist}` }</span> }
          </div>
        </div>
        <img src={image} alt="Track/album" className={classes.image} />
      </div>
    </Grid>
  );
}
Box.propTypes = {
  playSong: PropTypes.func,
};

export default memo(Box);
