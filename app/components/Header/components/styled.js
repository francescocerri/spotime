import { makeStyles } from '@material-ui/core/styles';
import { customThemeInfo } from '../../../theme/index';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    height: customThemeInfo.HEADER_HEIGHT,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.grey[800],
  },
  appBarContainer: {
    backgroundColor: theme.palette.grey[800],
    boxShadow: 'inset 0px 0px 300px 28px rgba(80,80,80,1)',
    height: '100%',
  },
  logo: {
    width: '10rem',
  },
  profile: {
    marginLeft: 'auto',
    color: '#fff',
  },
}));
