import { makeStyles } from '@material-ui/core/styles';
import { paths } from '../../../routes/utils/paths';
import { FRAME_CONFIG } from '../../../constants/config';
import { customThemeInfo } from '../../../theme';

export const useStyles = makeStyles(theme =>({
  container: {
    background: theme.palette.background.paper,
    height: '100%',
    padding: 0,
    minHeight: customThemeInfo.HEADER_HEIGHT,
  },
  root: {
    background: theme.palette.background.default,
  },
  'switch-container': ({ location: { pathname }, spotifyUri }) => ({
    padding: pathname === paths.login ? '0' : '1rem 2.5rem',
    // height: `calc(100% - ${customThemeInfo.HEADER_HEIGHT})`, // Header height
    position: 'fixed',
    top: '4rem',
    left: 0,
    right: 0,
    bottom: spotifyUri ? `${FRAME_CONFIG.HEIGHT}px` : 0,
    background: theme.palette.background.default,
    overflow: 'auto',
  }),
}));
