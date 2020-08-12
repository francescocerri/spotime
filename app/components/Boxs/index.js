/**
 *
 * Boxs
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateAfterIcon from '@material-ui/icons/NavigateNext';

import { Typography } from '../Typography/index';
import { useStyles } from './components/styled';
import { KEYS } from '../../constants/spotify';
import Box from './components/Square/Box';
import Round from './components/Round/Box';

const { H5 } = Typography;
function Boxs(props) {
  const { label, data } = props;
  const { items, pagination = {} } = data;
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
        {pagination.prev && (
          <IconButton
            aria-label="prev"
            className={`${classes.navigateButton} ${
              classes.navigateButtonPrev
            }`}
          >
            <NavigateBeforeIcon />
          </IconButton>
        )}
        {items &&
          Array.isArray(items) &&
          items.map(info =>
            info.type === KEYS.ARTIST ? (
              <Round key={info.id} {...info} />
            ) : (
              <Box key={info.id} {...info} />
            ),
          )}
        {pagination.next && (
          <IconButton
            aria-label="next"
            className={`${classes.navigateButton} ${
              classes.navigateButtonAfter
            }`}
          >
            <NavigateAfterIcon />
          </IconButton>
        )}
      </Grid>
    </div>
  );
}

Boxs.propTypes = {
  label: PropTypes.object,
  data: PropTypes.shape({
    items: PropTypes.array,
    pagination: PropTypes.shape({
      prev: PropTypes.string,
      next: PropTypes.string,
      total: PropTypes.number,
    }),
  }),
};

export default memo(Boxs);
