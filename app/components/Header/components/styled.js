import { makeStyles } from '@material-ui/core/styles';
import { customThemeInfo } from '../../../theme/index';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    height: customThemeInfo.HEADER_HEIGHT,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.grey[300],
  },
  logo: {
    width: '10rem',
  },
  profile: {
    marginLeft: 'auto',
  },
}));
