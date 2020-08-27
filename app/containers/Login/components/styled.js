import { makeStyles } from '@material-ui/core/styles';
import Chitarra from '../../../images/Chitarra2.jpg';
import Spotify from '../../../images/spotify.png';
import { customThemeInfo } from '../../../theme';

export const useStyles = makeStyles(theme => ({
  loginWrapper: {
    height: '100%',
  },
  loginContainer: {
    backgroundImage: `url(${Chitarra})`,
    height: '100%',
  },
  loginItem: {
    width: '25rem',
  },
  spotifyContent: {
    padding: '1.5rem',
  },
  cardContent: {
    textAlign: 'center',
  },
  iconContainer: {
    height: '5rem',
    width: '5rem',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${Spotify})`,
  },
  lockIcon: {
    fontSize: '5rem',
  },
  buttonLogin: {
    width: '100%',
  },
}));
