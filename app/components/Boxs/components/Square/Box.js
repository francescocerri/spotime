import React, { memo } from 'react';
import { useStyles } from '../styled';
import { Grid } from '@material-ui/core';
import { getInfoByType } from '../../utils';

function Box(props) {
  const classes = useStyles(props);
  const { images, albumName, artist, name } = getInfoByType(props);
  const image = images[1].url;

  return (
    <Grid item lg={2} md={3} xs={4}>
      <div className={classes.gridTitle}>
        <div className={classes.descriptionContent}>
          <div className={classes.descriptionArea}>
            <p className={classes.title}>{name}</p>
            {albumName && artist && <span className={classes.subTitle}>{albumName}, {artist}</span> }
          </div>
        </div>
        <img src={image} alt="Track/album" className={classes.image} />
      </div>
    </Grid>
  );
}

export default memo(Box);
