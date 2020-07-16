import log from 'loglevel';

import CONFIG from '../config';

if (CONFIG.ENV === 'production') {
  log.setLevel(log.levels.SILENT);
} else {
  log.setLevel(log.levels.TRACE);
}

export default log;
