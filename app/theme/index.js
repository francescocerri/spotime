import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: lightBlue[800],
    }
  },
});

export const customThemeInfo = {
  HEADER_HEIGHT: '3.5rem',
};
