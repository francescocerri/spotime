import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  typography: ({ customColor }) => ({
    color: customColor === 'primaryPaper' ? theme.palette.grey['400'] : '',
  }),
}));
