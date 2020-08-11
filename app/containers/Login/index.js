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
import { SPOTIFY } from '../../constants/spotify';
import { Typography } from '../../components/Typography';

const { H5 } = Typography;
export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const classes = useStyles();
  const spotifyLoginClicked = () => {
    const clientID = process.env.CLIENT_ID;
    const params = {
      client_id: clientID,
      scope: SPOTIFY.SCOPE.join(' '),
      response_type: 'code',
      redirect_uri: SPOTIFY.REDIRECT_URL,
    };
    const paramsToSend = stringify(params);
    const urlSpotify = `${CONFIG.API.LOGIN_DOMAIN}/${API.LOGIN.AUTHORIZE}?${paramsToSend}`
    window.location.href = urlSpotify;
  };

  return (
    <div className={classes.loginWrapper}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.loginContainer}
      >
        <Grid item className={classes.loginItem}>
          <Card raised>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.spotifyContent}
              >
                <Box className={classes.iconContainer} />
              </Grid>
              <H5 customColor="primaryPaper">
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
                    className={classes.buttonLogin}
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
    </div>
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
