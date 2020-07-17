import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  typography: ({ color }) => ({
    color: color === 'primaryPaper' ? theme.palette.grey['400'] : '',
  }),
}));
