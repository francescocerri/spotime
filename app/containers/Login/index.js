/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Box, Card, CardActionArea, CardActions, CardContent, Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { stringify } from 'utils/querystring';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Button from '../../components/Button';
import { useStyles } from './components/styled';
import CONFIG from '../../config';
import { API } from '../../constants/api';
import { SPOTIFY } from '../../constants/config';
import { Typography } from '../../components/Typography';

const { H5 } = Typography;
export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const classes = useStyles();
  const spotifyLoginClicked = () => {
    const scope = 'user-read-private user-read-email';
    const clientID = process.env.CLIENT_ID;
    const params = {
      client_id: clientID,
      scope,
      response_type: 'code',
      redirect_uri: SPOTIFY.REDIRECT_URL,
    };
    const paramsToSend = stringify(params);
    const urlSpotify = `${CONFIG.API.LOGIN_DOMAIN}/${API.LOGIN.AUTHORIZE}?${paramsToSend}`
    window.location.href = urlSpotify;
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes['login-container']}
    >
      <Grid item className={classes['login-item']}>
        <Card raised>
          <CardContent className={classes['card-content']}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes['spotify-content']}
            >
              <Box className={classes['icon-container']} />
            </Grid>
            <H5 color="primaryPaper">
              <FormattedMessage {...messages.loginInfo} />
            </H5>
          </CardContent>
          <CardActionArea>
            <CardActions >
              <Grid
                container
                justify="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes['button-login']}
                  onClick={spotifyLoginClicked}
                >
                  <FormattedMessage {...messages.login} />
                </Button>
              </Grid>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
