/**
 *
 * Asynchronously loads the component for Boxs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
