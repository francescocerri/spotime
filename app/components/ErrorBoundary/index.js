/**
 *
 * ErrorBoundary
 *
 */
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import log from 'utils/logger';

import { FormattedMessage } from 'react-intl';
import appMessages from '../../containers/App/messages';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    log.error(error);
    log.error(errorInfo);
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    if (errorInfo) {
      // Error path
      return (
        <Alert variant="filled" severity="error">
          <AlertTitle>
            <FormattedMessage {...appMessages.genericError.somethingWrong} />
          </AlertTitle>
          <FormattedMessage {...appMessages.genericError.reloadPage} />
        </Alert>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
