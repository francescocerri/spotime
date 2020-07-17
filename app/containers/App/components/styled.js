import { makeStyles } from '@material-ui/core/styles';
import { paths } from '../../../routes/utils/paths';
export const useStyles = makeStyles(theme =>({
  container: {
    background: theme.palette.background.paper,
    height: '100%',
    padding: 0,
  },
  root: {
    background: theme.palette.background.default,
    height: '100vh',
  },
  'switch-container': ({ location: { pathname } }) => ({
    padding: pathname === paths.login ? '0' : '0 2.5rem',
    height: '100%',
  }),
}));
