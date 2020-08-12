import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../styled';
import { getInfoByType } from '../../utils';

function Box(props) {
  const classes = useStyles(props);
  const { images, name } = getInfoByType(props);
  const image = images[1].url;

  return (
    <Grid item lg={2} md={3} xs={4} className={classes.gridSingleContent}>
      <div className={classes.gridTitle}>
        <img src={image} alt="Track/album" className={`${classes.image} ${classes.imageRounded}`} />
        <div className={classes.titleContainer}>
          <p className={classes.titleCenter}>{name}</p>
        </div>
      </div>
    </Grid>
  );
}

export default memo(Box);
