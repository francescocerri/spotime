import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme  =>({
  container: {
    background: theme.palette.background.paper,
  },
  root: {
    background: theme.palette.background.default,
  }
})
);
