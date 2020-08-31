import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { useStyles } from '../styled';
import { getInfoByType } from '../../utils';

function Box(props) {
  const classes = useStyles(props);
  const { playSong } = props;
  const { images, name, uri } = getInfoByType(props);
  const image = images[1].url;

  return (
    <Grid item lg={2} md={3} xs={6} className={classes.gridSingleContent} onClick={() => playSong(uri)}>
      <div className={classes.gridTitle}>
        <img src={image} alt="Track/album" className={`${classes.image} ${classes.imageRounded}`} />
        <div className={classes.titleContainer}>
          <p className={classes.titleCenter}>{name}</p>
        </div>
      </div>
    </Grid>
  );
}

Box.propTypes = {
  playSong: PropTypes.func,
};

export default memo(Box);
