import { makeStyles } from '@material-ui/core/styles';
import { paths } from '../../../routes/utils/paths';
import { customThemeInfo } from '../../../theme/index';
export const useStyles = makeStyles(theme =>({
  container: {
    background: theme.palette.background.paper,
    height: '100%',
    padding: 0,
  },
  root: {
    background: theme.palette.background.default,
    minHeight: '100vh',
  },
  'switch-container': ({ location: { pathname } }) => ({
    padding: pathname === paths.login ? '0' : '1rem 2.5rem',
    height: `calc(100% - ${customThemeInfo.HEADER_HEIGHT})`, // Header height
  }),
}));
