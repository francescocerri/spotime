import { FormattedMessage } from 'react-intl';
import React from 'react';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/Login/Loadable';
import AuthPage from 'containers/Authorization/Loadable';

import { paths } from './utils/paths';
import messages from './messages';

export default [
  {exact: true, component: LoginPage, path: paths.login, label: <FormattedMessage {...messages.login} /> },
  {exact: true, strict: true, component: HomePage, path: paths.home, label: <FormattedMessage {...messages.homepage} /> },
  {exact: true, component: AuthPage, path: paths.auth, label: <FormattedMessage {...messages.auth} /> },
  {exact: false, component: NotFoundPage, path: undefined, label: <FormattedMessage {...messages.notFound} /> },
];
