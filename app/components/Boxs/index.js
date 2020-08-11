/**
 *
 * Boxs
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Typography } from '../Typography/index';
import { useStyles } from './components/styled';
import { KEYS } from '../../constants/spotify';
import Box from './components/Square/Box';
import Round from './components/Round/Box';

const { H5 } = Typography;
function Boxs(props) {
  const { label, data } = props;
  const classes = useStyles();
  return (
    <div>
      <H5>
        <div className={classes.labelTitle}> {label} </div>
        <div className={classes.labelRow} />
      </H5>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridContainer}
      >
        {data &&
          Array.isArray(data) &&
          data.map(info =>
            info.type === KEYS.ARTIST ? (
              <Round key={info.id} {...info} />
            ) : (
              <Box key={info.id} {...info} />
            ),
          )}
      </Grid>
    </div>
  );
}

Boxs.propTypes = {
  label: PropTypes.object,
  data: PropTypes.array,
};

export default memo(Boxs);
