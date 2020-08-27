import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>({
  container: {
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
}));
