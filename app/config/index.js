import merge from 'lodash/merge';

import common from './common';
import env from './env.json';

const config = merge({}, common, env[common.ENV] || {});

export default config;
