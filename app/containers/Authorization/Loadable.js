/**
 *
 * Asynchronously loads the component for Authorization
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
