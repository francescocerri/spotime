/**
 *
 * Notification
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import { MILLISECOND_CLOSE_SNACK } from '../../constants/material';
import { useStyles } from './components/styled';

function Notification(props) {
  const { type = 'error', message, closeNotification } = props;
  const [visible, setVisible] = useState(true);
  const classes = useStyles();

  const onClose = () => {
    setVisible(false);
    closeNotification();
  };

  const Alert = alertProps => (
    <MuiAlert elevation={6} variant="filled" {...alertProps} />
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={visible}
      onClose={onClose}
      autoHideDuration={MILLISECOND_CLOSE_SNACK}
    >
      <Alert
        severity={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <Close />
          </IconButton>
        }
      >
        <AlertTitle className={classes.alertTitle}> {type} </AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  message: PropTypes.node,
  closeNotification: PropTypes.func,
};

export default memo(Notification);
