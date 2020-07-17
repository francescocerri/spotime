import { makeStyles } from '@material-ui/core/styles';
import Chitarra from '../../../images/Chitarra2.jpg';
import Spotify from '../../../images/spotify.png';

export const useStyles = makeStyles(theme =>({
  'login-container': {
    backgroundImage: `url(${Chitarra})`,
    height: '100%',
  },
  'login-item': {
    width: '25rem',
  },
  'spotify-content': {
    padding: '1.5rem',
  },
  'card-content': {
    textAlign: 'center',
  },
  'icon-container': {
    height: '5rem',
    width: '5rem',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${Spotify})`,
  },
  'lock-icon': {
    fontSize: '5rem',
  },
  'button-login': {
    width: '100%',
  }
}));
